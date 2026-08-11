#!/usr/bin/env node
/**
 * Consistency guardrail: the agent "## Available skills" tables ↔ the skill files.
 *
 * The sidecar indexes the catalog at FOLDER level — a `skill` asset is the
 * `skills/<name>/README.md` card — so the 37 files it validates are exactly the
 * 37 that carry no per-file mapping. Everything below that line was, until this
 * guard, checked once by hand: a request line pointing at a renamed or deleted
 * skill file, or a skill file no agent ever offers, was visible to nobody.
 *
 * This closes both directions against the filesystem:
 *   - ABSENT   → a request row cites `skills/…/<file>.md` that does not exist
 *   - UNMAPPED → a `skills/…/<file>.md` exists but no request row cites it
 *
 * Folder READMEs are excluded on purpose: they are the sidecar's own skill
 * assets, not request targets. Bare folder paths cited in prose are excluded
 * too — only `.md` file references are request lines.
 *
 * Exits 0 when both sets are empty; otherwise prints every offender and exits 1.
 * It also exits 1 when there is nothing to measure (no agent card, no request
 * row, no skill file) or when `skills/` is absent altogether: an empty corpus
 * must never look like a passing check, and a missing one must say so.
 * No side effects (read-only). CI usage.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(REPO_ROOT, "skills");
const SECTION_HEADING = "## Available skills";

/** Agent cards discovered at the repo root: `AGENT-<NAME>.md`. */
function agentFiles() {
  return readdirSync(REPO_ROOT)
    .filter((f) => /^AGENT-[A-Z0-9-]+\.md$/.test(f))
    .sort();
}

/** The "## Available skills" section of an agent card, up to the next H2. */
function skillsSection(text, file) {
  const start = text.indexOf(SECTION_HEADING);
  if (start === -1) {
    console.error(`✗ ${file}: no "${SECTION_HEADING}" section — the request rows cannot be read`);
    process.exit(1);
  }
  return text.slice(start).split(/\n## /)[0];
}

/** Every `skills/….md` path cited in a table row, mapped to the agents citing it. */
function collectReferences() {
  const referenced = new Map(); // path → [agent files]
  let rows = 0;
  for (const file of agentFiles()) {
    const section = skillsSection(readFileSync(join(REPO_ROOT, file), "utf-8"), file);
    for (const line of section.split(/\r?\n/)) {
      if (!line.trim().startsWith("|")) continue;
      const paths = [...line.matchAll(/`(skills\/[^`]+?\.md)`/g)].map((m) => m[1]);
      if (paths.length === 0) continue;
      rows++;
      for (const p of paths) {
        if (!referenced.has(p)) referenced.set(p, []);
        referenced.get(p).push(file);
      }
    }
  }
  return { referenced, rows };
}

/** Every skill file on disk, folder READMEs excluded. */
function collectSkillFiles(dir = SKILLS_DIR, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) collectSkillFiles(abs, found);
    else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") {
      found.push(abs.slice(REPO_ROOT.length + 1));
    }
  }
  return found;
}

/** True when the path exists AND is a regular file. */
function isFile(rel) {
  try {
    return statSync(join(REPO_ROOT, rel)).isFile();
  } catch {
    return false;
  }
}

const agents = agentFiles();
const { referenced, rows } = collectReferences();

// A missing corpus directory must be named as such: without this, `readdirSync`
// throws a raw ENOENT stack and the empty-corpus report below is never reached.
if (!existsSync(SKILLS_DIR)) {
  console.error(`✗ skills/ directory not found (${SKILLS_DIR}) — check the checkout`);
  process.exit(1);
}
const onDisk = collectSkillFiles();

// An empty corpus is a broken run, not a clean one.
if (agents.length === 0 || rows === 0 || onDisk.length === 0) {
  console.error(
    `✗ nothing to measure: ${agents.length} agent card(s), ${rows} request row(s), ` +
      `${onDisk.length} skill file(s) — the corpus cannot be empty, check the paths`,
  );
  process.exit(1);
}

const absent = [...referenced.keys()].filter((p) => !isFile(p)).sort();
const mapped = new Set(referenced.keys());
const unmapped = onDisk.filter((p) => !mapped.has(p));

if (absent.length > 0 || unmapped.length > 0) {
  console.error(
    `✗ skill mapping broken: ${absent.length} absent, ${unmapped.length} unmapped`,
  );
  for (const p of absent) {
    console.error(`  - ABSENT   ${p} — cited by ${referenced.get(p).join(", ")}`);
  }
  for (const p of unmapped) {
    console.error(`  - UNMAPPED ${p} — no request row offers it`);
  }
  process.exit(1);
}

console.log(
  `✓ skill mapping complete: ${onDisk.length} skill file(s) ↔ ${rows} request row(s) ` +
    `across ${agents.length} agent card(s) — none absent, none unmapped`,
);
