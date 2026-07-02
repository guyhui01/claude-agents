#!/usr/bin/env node
/**
 * Consistency guardrail: the "Agents" column of the workflow tables.
 *
 * The "Agents" column of `README.md` and `workflows/README.md` used to be typed by
 * hand and drifted (see CHANGELOG "normalize the workflow "Agents" column"). This
 * now checks the drift against the ONLY factual source: the YAML blocks
 * `agents_core` / `agents_optionnels` of each `workflows/WF-*.md` identity card.
 *
 * Convention (reproducible):
 *   - 0 optional         → "<core>"
 *   - ≥1 optional        → "<core>-<core+opt>"   (mobilizable at minimum → at maximum)
 *
 * Exits 0 if both READMEs show the expected value for every WF; otherwise
 * prints each mismatch and exits 1. No side effects (read-only). CI usage.
 */

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOWS_DIR = join(REPO_ROOT, "workflows");
const README_FILES = ["README.md", join("workflows", "README.md")];

/** Counts the "- …" entries of a YAML block bounded by two identity-card keys. */
function countBlock(text, startKey, endKeys) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l) => new RegExp(`^${startKey}:`).test(l));
  if (start === -1) return null;
  let count = 0;
  for (let i = start + 1; i < lines.length; i++) {
    if (endKeys.some((k) => new RegExp(`^${k}:`).test(lines[i]))) break;
    if (/^\s+-\s+/.test(lines[i])) count++;
  }
  return count;
}

/** Expected value of the "Agents" column for a given workflow. */
function expectedCount(core, opt) {
  return opt > 0 ? `${core}-${core + opt}` : `${core}`;
}

/** Map id → expected value, derived from the workflows' identity cards. */
function deriveExpected() {
  const expected = new Map();
  const files = readdirSync(WORKFLOWS_DIR)
    .filter((f) => /^WF-\d+.*\.md$/.test(f))
    .sort();
  for (const f of files) {
    const id = f.match(/^WF-\d+/)[0];
    const text = readFileSync(join(WORKFLOWS_DIR, f), "utf-8");
    const core = countBlock(text, "agents_core", ["agents_optionnels", "statut"]);
    const opt = countBlock(text, "agents_optionnels", ["statut"]);
    if (core === null || core === 0) {
      console.error(`✗ ${id}: \`agents_core\` block not found or empty in ${f}`);
      process.exit(1);
    }
    expected.set(id, expectedCount(core, opt ?? 0));
  }
  return expected;
}

/** Value shown in the "Agents" column (third-to-last cell) of a README. */
function shownCount(readmeText, id) {
  const row = readmeText
    .split(/\r?\n/)
    .find((l) => l.includes(`[${id}]`) && l.trim().startsWith("|"));
  if (!row) return undefined;
  const cells = row.split("|").map((c) => c.trim());
  // … | <Agents> | <Duration> |  → the third-to-last non-empty cell
  return cells[cells.length - 3];
}

const expected = deriveExpected();
const issues = [];

for (const rel of README_FILES) {
  const text = readFileSync(join(REPO_ROOT, rel), "utf-8");
  for (const [id, want] of expected) {
    const got = shownCount(text, id);
    if (got === undefined) {
      issues.push(`${rel}: workflow ${id} row not found`);
    } else if (got !== want) {
      issues.push(`${id}: ${rel} shows "${got}", expected "${want}"`);
    }
  }
}

if (issues.length > 0) {
  console.error(`✗ "Agents" column: ${issues.length} mismatch(es)`);
  for (const i of issues) console.error(`  - ${i}`);
  process.exit(1);
}

console.log(
  `✓ "Agents" column consistent: ${expected.size} workflow(s) × ${README_FILES.length} file(s)`,
);
