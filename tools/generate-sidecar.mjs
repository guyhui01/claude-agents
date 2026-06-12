#!/usr/bin/env node
/**
 * Générateur de sidecar du catalogue claude-agents (ADR-0003).
 *
 * Émet `sidecar.json` : index machine-lisible du catalogue, CONFORME au schéma de
 * référence du runtime (vendoré en `schema/sidecar.schema.json`, SSOT = runtime).
 * Le runtime ne fait que LIRE ce fichier (ADR-0001) ; la génération ET la validation
 * vivent ici, côté catalogue (ADR-0003).
 *
 * Périmètre : les backbones de WF-001/002/003 (14 agents, union dédupliquée —
 * AGENT-QA-AGILE est partagé WF-001/003). Extensible : ajouter un backbone dans
 * WORKFLOW_BACKBONES (puis d'autres workflows) — la mécanique est générique.
 *
 * Chaque asset porte les 7 champs requis (id, type, path, title, description,
 * catalogVersion, source{file, catalogTag}) + `dependsOn` (requis par le schéma pour
 * type "agent"). Tant que les skills ne sont pas indexées, `dependsOn` reste `[]`
 * (un dependsOn vers une skill absente déclencherait DANGLING_REFERENCE à l'intégrité).
 *
 * Modes :
 *   (défaut)   génère + valide (schéma ajv + intégrité) + ÉCRIT sidecar.json.
 *   --check    génère en mémoire + valide ; vérifie que le sidecar.json SUR DISQUE
 *              est valide ET à jour vs la prose (hors `generatedAt`). N'écrit rien.
 *              Sort 1 si absent / invalide / désynchronisé. Usage CI.
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
 * Backbones des workflows réels (cf. claude-agentic-runtime/src/spines/wf-00{1,2,3}-*.ts).
 * Les `id` DOIVENT matcher les `assetId` des spines pour que `loadSpine` résolve.
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
 * Union dédupliquée des ids de tous les backbones (AGENT-QA-AGILE est partagé
 * WF-001/003) — le `Set` évite un id dupliqué, qui ferait échouer l'intégrité.
 */
const CATALOG_AGENT_IDS = [...new Set(Object.values(WORKFLOW_BACKBONES).flat())];

/** Tag épinglé du catalogue = `v` + version du package (source unique). */
function catalogTag() {
  const pkg = JSON.parse(readFileSync(join(REPO_ROOT, "package.json"), "utf-8"));
  return `v${pkg.version}`;
}

/**
 * Extrait titre + description d'une carte d'agent `AGENT-*.md`.
 *   - titre       : H1 « # AGENT — <titre> » → <titre> (préfixe « AGENT — » retiré)
 *   - description : 1re ligne blockquote « > **Domaine :** <desc> » → <desc>
 */
function parseAgentCard(absFile, id) {
  const lines = readFileSync(absFile, "utf-8").split(/\r?\n/);

  const h1 = lines.find((l) => /^#\s+/.test(l));
  if (!h1) throw new Error(`${id} : titre H1 introuvable`);
  const title = h1
    .replace(/^#\s+/, "")
    .replace(/^AGENT\s*[—–-]\s*/u, "")
    .trim();

  const quote = lines.find((l) => /^>\s/.test(l));
  if (!quote) throw new Error(`${id} : ligne « > **Domaine :** … » introuvable`);
  const description = quote
    .replace(/^>\s*/, "")
    .replace(/\*\*Domaine\s*:?\*\*\s*:?\s*/u, "")
    .trim();

  if (!title) throw new Error(`${id} : titre vide après extraction`);
  if (!description) throw new Error(`${id} : description vide après extraction`);
  return { title, description };
}

/** Construit l'asset « agent » d'un id donné. */
function buildAgentAsset(id, tag) {
  const file = `${id}.md`;
  const abs = join(REPO_ROOT, file);
  if (!existsSync(abs)) throw new Error(`${id} : fichier source absent (${file})`);
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

/** Construit le sidecar complet (assets triés par id pour un diff stable). */
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

// --- Validation : schéma ajv + intégrité (miroir des contrôles du runtime) ---

let cachedValidate;
function getValidator() {
  if (cachedValidate) return cachedValidate;
  const schema = JSON.parse(readFileSync(SCHEMA_PATH, "utf-8"));
  cachedValidate = new Ajv2020({ allErrors: true, strict: true }).compile(schema);
  return cachedValidate;
}

/** Validation schéma (ajv) → liste de messages (vide = conforme). */
function schemaIssues(sidecar) {
  const validate = getValidator();
  if (validate(sidecar)) return [];
  return (validate.errors ?? []).map(
    (e) => `[schéma] ${e.instancePath || "(racine)"} ${e.message ?? ""}`.trim(),
  );
}

/**
 * Intégrité (les 2 caractéristiques ISO 25012 hors-schéma + unicité) — mêmes règles
 * que `src/sidecar/integrity.ts` du runtime, pour échouer ici plutôt qu'au chargement.
 */
function integrityIssues(sidecar) {
  const issues = [];
  const ids = new Set();
  for (const a of sidecar.assets) {
    if (ids.has(a.id)) issues.push(`[intégrité] id dupliqué : "${a.id}"`);
    ids.add(a.id);
  }
  for (const a of sidecar.assets) {
    for (const dep of a.dependsOn ?? []) {
      if (!ids.has(dep)) issues.push(`[intégrité] "${a.id}" dépend d'un id inexistant : "${dep}"`);
    }
    for (const rel of [a.path, a.source.file]) {
      const n = normalize(rel);
      const unreachable = isAbsolute(n) || n.startsWith("..") || !existsSync(join(REPO_ROOT, n));
      if (unreachable) issues.push(`[intégrité] "${a.id}" : fichier introuvable « ${rel} »`);
    }
  }
  return issues;
}

function validateOrThrow(sidecar, label) {
  const issues = [...schemaIssues(sidecar), ...integrityIssues(sidecar)];
  if (issues.length > 0) {
    console.error(`✗ ${label} : ${issues.length} problème(s)`);
    for (const i of issues) console.error(`  - ${i}`);
    process.exit(1);
  }
}

/** Égalité hors `generatedAt` (le seul champ volatil). */
function equalIgnoringTimestamp(a, b) {
  const strip = (s) => JSON.stringify({ ...s, generatedAt: null });
  return strip(a) === strip(b);
}

// --- Entrée ------------------------------------------------------------------

const isCheck = process.argv.includes("--check");

if (isCheck) {
  // Le sidecar fraîchement dérivé de la prose doit être valide…
  const fresh = buildSidecar("1970-01-01T00:00:00Z");
  validateOrThrow(fresh, "sidecar dérivé de la prose");

  // …et le fichier committé doit exister, être valide, et à jour vs la prose.
  if (!existsSync(SIDECAR_PATH)) {
    console.error("✗ sidecar.json absent — lance `npm run generate:sidecar`");
    process.exit(1);
  }
  const onDisk = JSON.parse(readFileSync(SIDECAR_PATH, "utf-8"));
  validateOrThrow(onDisk, "sidecar.json (sur disque)");

  if (!equalIgnoringTimestamp(onDisk, fresh)) {
    console.error("✗ sidecar.json désynchronisé de la prose — régénère (`npm run generate:sidecar`)");
    process.exit(1);
  }
  console.log(`✓ sidecar.json valide et à jour (${onDisk.assets.length} asset(s), catalog ${onDisk.catalog.version})`);
} else {
  const sidecar = buildSidecar(new Date().toISOString());
  validateOrThrow(sidecar, "sidecar généré");
  writeFileSync(SIDECAR_PATH, JSON.stringify(sidecar, null, 2) + "\n", "utf-8");
  console.log(`✓ sidecar.json généré et validé : ${sidecar.assets.length} asset(s), catalog ${sidecar.catalog.version}`);
  for (const a of sidecar.assets) console.log(`  - ${a.id} (${a.type})`);
}
