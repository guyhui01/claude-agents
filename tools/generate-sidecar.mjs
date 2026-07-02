#!/usr/bin/env node
/**
 * Sidecar generator for the claude-agents catalog (ADR-0003).
 *
 * Emits `sidecar.json`: the machine-readable catalog index, CONFORMANT to the
 * runtime's reference schema (vendored as `schema/sidecar.schema.json`, SSOT = runtime).
 * The runtime only READS this file (ADR-0001); generation AND validation
 * live here, on the catalog side (ADR-0003).
 *
 * Scope: the WF-001/002/003 backbones (14 agents, deduplicated union —
 * AGENT-QA-AGILE is shared by WF-001/003). Extensible: add a backbone to
 * WORKFLOW_BACKBONES (then more workflows) — the mechanics are generic.
 *
 * Each asset carries the 7 required fields (id, type, path, title, description,
 * catalogVersion, source{file, catalogTag}) + `dependsOn` (required by the schema for
 * type "agent"). As long as skills are not indexed, `dependsOn` stays `[]`
 * (a dependsOn pointing to an absent skill would trigger DANGLING_REFERENCE at integrity).
 *
 * Modes:
 *   (default)  generates + validates (ajv schema + integrity) + WRITES sidecar.json.
 *   --check    generates in memory + validates; verifies that the ON-DISK sidecar.json
 *              is valid AND up to date vs the prose (excluding `generatedAt`). Writes nothing.
 *              Exits 1 if absent / invalid / out of sync. CI usage.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, isAbsolute, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { Ajv2020 } from "ajv/dist/2020.js";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA_PATH = join(REPO_ROOT, "schema", "sidecar.schema.json");
const SIDECAR_PATH = join(REPO_ROOT, "sidecar.json");
const SIDECAR_SCHEMA_VERSION = "1.0.0";

/**
 * Backbones of the real workflows (see claude-agentic-runtime/src/spines/wf-00{1,2,3}-*.ts).
 * The `id`s MUST match the spines' `assetId`s so that `loadSpine` resolves.
 */
const WORKFLOW_BACKBONES = {
  "WF-001": ["AGENT-BUSINESS-ANALYST", "AGENT-PO-SCRUM", "AGENT-QA-AGILE"],
  "WF-002": [
    "AGENT-PRODUCT-MANAGER-SAFE",
    "AGENT-RELEASE-TRAIN-ENGINEER",
    "AGENT-PO-SAFE",
    "AGENT-SCRUM-MASTER",
    "AGENT-CHEF-PROJET-IA",
  ],
  "WF-003": [
    "AGENT-FINANCIAL-ANALYST",
    "AGENT-PROMPT-ENGINEER",
    "AGENT-AI-ARCHITECT",
    "AGENT-DEV-PYTHON-IA",
    "AGENT-QA-AGILE",
    "AGENT-DEVOPS-CLOUD",
    "AGENT-SECURITE-IA",
  ],
};

/**
 * Deduplicated union of all backbone ids (AGENT-QA-AGILE is shared by
 * WF-001/003) — the `Set` avoids a duplicated id, which would fail integrity.
 */
const CATALOG_AGENT_IDS = [...new Set(Object.values(WORKFLOW_BACKBONES).flat())];

/** Pinned catalog tag = `v` + package version (single source). */
function catalogTag() {
  const pkg = JSON.parse(readFileSync(join(REPO_ROOT, "package.json"), "utf-8"));
  return `v${pkg.version}`;
}

/**
 * Extracts title + description from an `AGENT-*.md` agent card.
 *   - title       : H1 "# AGENT — <title>" → <title> ("AGENT — " prefix removed)
 *   - description : first blockquote line "> **Domain:** <desc>" → <desc>
 *                   (FR label "Domaine" still accepted during the i18n migration)
 */
function parseAgentCard(absFile, id) {
  const lines = readFileSync(absFile, "utf-8").split(/\r?\n/);

  const h1 = lines.find((l) => /^#\s+/.test(l));
  if (!h1) throw new Error(`${id}: H1 title not found`);
  const title = h1
    .replace(/^#\s+/, "")
    .replace(/^AGENT\s*[—–-]\s*/u, "")
    .trim();

  const quote = lines.find((l) => /^>\s/.test(l));
  if (!quote) throw new Error(`${id}: "> **Domain:** …" line not found`);
  const description = quote
    .replace(/^>\s*/, "")
    .replace(/\*\*(?:Domaine|Domain)\s*:?\*\*\s*:?\s*/u, "")
    .trim();

  if (!title) throw new Error(`${id}: empty title after extraction`);
  if (!description) throw new Error(`${id}: empty description after extraction`);
  return { title, description };
}

/** Builds the "agent" asset for a given id. */
function buildAgentAsset(id, tag) {
  const file = `${id}.md`;
  const abs = join(REPO_ROOT, file);
  if (!existsSync(abs)) throw new Error(`${id}: source file missing (${file})`);
  const { title, description } = parseAgentCard(abs, id);
  return {
    id,
    type: "agent",
    path: file,
    title,
    description,
    catalogVersion: tag,
    source: { file, catalogTag: tag },
    dependsOn: [],
  };
}

/** Builds the full sidecar (assets sorted by id for a stable diff). */
function buildSidecar(generatedAt) {
  const tag = catalogTag();
  const assets = CATALOG_AGENT_IDS.map((id) => buildAgentAsset(id, tag)).sort((a, b) =>
    a.id.localeCompare(b.id),
  );
  return {
    schemaVersion: SIDECAR_SCHEMA_VERSION,
    catalog: { name: "claude-agents", version: tag },
    generatedAt,
    assets,
  };
}

// --- Validation: ajv schema + integrity (mirror of the runtime's checks) ---

let cachedValidate;
function getValidator() {
  if (cachedValidate) return cachedValidate;
  const schema = JSON.parse(readFileSync(SCHEMA_PATH, "utf-8"));
  cachedValidate = new Ajv2020({ allErrors: true, strict: true }).compile(schema);
  return cachedValidate;
}

/** Schema validation (ajv) → list of messages (empty = conformant). */
function schemaIssues(sidecar) {
  const validate = getValidator();
  if (validate(sidecar)) return [];
  return (validate.errors ?? []).map(
    (e) => `[schema] ${e.instancePath || "(root)"} ${e.message ?? ""}`.trim(),
  );
}

/**
 * Integrity (the 2 off-schema ISO 25012 characteristics + uniqueness) — same rules
 * as the runtime's `src/sidecar/integrity.ts`, to fail here rather than at load time.
 */
function integrityIssues(sidecar) {
  const issues = [];
  const ids = new Set();
  for (const a of sidecar.assets) {
    if (ids.has(a.id)) issues.push(`[integrity] duplicated id: "${a.id}"`);
    ids.add(a.id);
  }
  for (const a of sidecar.assets) {
    for (const dep of a.dependsOn ?? []) {
      if (!ids.has(dep)) issues.push(`[integrity] "${a.id}" depends on a nonexistent id: "${dep}"`);
    }
    for (const rel of [a.path, a.source.file]) {
      const n = normalize(rel);
      const unreachable = isAbsolute(n) || n.startsWith("..") || !existsSync(join(REPO_ROOT, n));
      if (unreachable) issues.push(`[integrity] "${a.id}": file not found "${rel}"`);
    }
  }
  return issues;
}

function validateOrThrow(sidecar, label) {
  const issues = [...schemaIssues(sidecar), ...integrityIssues(sidecar)];
  if (issues.length > 0) {
    console.error(`✗ ${label}: ${issues.length} issue(s)`);
    for (const i of issues) console.error(`  - ${i}`);
    process.exit(1);
  }
}

/** Equality excluding `generatedAt` (the only volatile field). */
function equalIgnoringTimestamp(a, b) {
  const strip = (s) => JSON.stringify({ ...s, generatedAt: null });
  return strip(a) === strip(b);
}

// --- Entry point ---------------------------------------------------------------

const isCheck = process.argv.includes("--check");

if (isCheck) {
  // The sidecar freshly derived from the prose must be valid…
  const fresh = buildSidecar("1970-01-01T00:00:00Z");
  validateOrThrow(fresh, "sidecar derived from the prose");

  // …and the committed file must exist, be valid, and be up to date vs the prose.
  if (!existsSync(SIDECAR_PATH)) {
    console.error("✗ sidecar.json missing — run `npm run generate:sidecar`");
    process.exit(1);
  }
  const onDisk = JSON.parse(readFileSync(SIDECAR_PATH, "utf-8"));
  validateOrThrow(onDisk, "sidecar.json (on disk)");

  if (!equalIgnoringTimestamp(onDisk, fresh)) {
    console.error("✗ sidecar.json out of sync with the prose — regenerate (`npm run generate:sidecar`)");
    process.exit(1);
  }
  console.log(`✓ sidecar.json valid and up to date (${onDisk.assets.length} asset(s), catalog ${onDisk.catalog.version})`);
} else {
  const sidecar = buildSidecar(new Date().toISOString());
  validateOrThrow(sidecar, "sidecar generated");
  writeFileSync(SIDECAR_PATH, JSON.stringify(sidecar, null, 2) + "\n", "utf-8");
  console.log(`✓ sidecar.json generated and validated: ${sidecar.assets.length} asset(s), catalog ${sidecar.catalog.version}`);
  for (const a of sidecar.assets) console.log(`  - ${a.id} (${a.type})`);
}
