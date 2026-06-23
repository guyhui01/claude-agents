#!/usr/bin/env node
/**
 * Garde-fou de cohérence : colonne « Agents » des tableaux de workflows.
 *
 * La colonne « Agents » de `README.md` et `workflows/README.md` était saisie à la
 * main et a dérivé (cf. CHANGELOG « normalize the workflow "Agents" column »). Ce
 * contrôle la dérive désormais de la SEULE source factuelle : les blocs YAML
 * `agents_core` / `agents_optionnels` de chaque carte d'identité `workflows/WF-*.md`.
 *
 * Convention (reproductible) :
 *   - 0 optionnel        → "<core>"
 *   - ≥1 optionnel       → "<core>-<core+opt>"   (mobilisables au minimum → au maximum)
 *
 * Sort 0 si les deux README affichent la valeur attendue pour chaque WF ; sinon
 * affiche chaque écart et sort 1. Aucun effet de bord (lecture seule). Usage CI.
 */

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOWS_DIR = join(REPO_ROOT, "workflows");
const README_FILES = ["README.md", join("workflows", "README.md")];

/** Compte les entrées « - … » d'un bloc YAML borné par deux clés de la carte d'identité. */
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

/** Valeur attendue de la colonne « Agents » pour un workflow donné. */
function expectedCount(core, opt) {
  return opt > 0 ? `${core}-${core + opt}` : `${core}`;
}

/** Map id → valeur attendue, dérivée des cartes d'identité des workflows. */
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
      console.error(`✗ ${id} : bloc \`agents_core\` introuvable ou vide dans ${f}`);
      process.exit(1);
    }
    expected.set(id, expectedCount(core, opt ?? 0));
  }
  return expected;
}

/** Valeur affichée dans la colonne « Agents » (avant-avant-dernière cellule) d'un README. */
function shownCount(readmeText, id) {
  const row = readmeText
    .split(/\r?\n/)
    .find((l) => l.includes(`[${id}]`) && l.trim().startsWith("|"));
  if (!row) return undefined;
  const cells = row.split("|").map((c) => c.trim());
  // … | <Agents> | <Duration> |  → l'avant-avant-dernière cellule non vide
  return cells[cells.length - 3];
}

const expected = deriveExpected();
const issues = [];

for (const rel of README_FILES) {
  const text = readFileSync(join(REPO_ROOT, rel), "utf-8");
  for (const [id, want] of expected) {
    const got = shownCount(text, id);
    if (got === undefined) {
      issues.push(`${rel} : ligne du workflow ${id} introuvable`);
    } else if (got !== want) {
      issues.push(`${id} : ${rel} affiche "${got}", attendu "${want}"`);
    }
  }
}

if (issues.length > 0) {
  console.error(`✗ colonne « Agents » : ${issues.length} écart(s)`);
  for (const i of issues) console.error(`  - ${i}`);
  process.exit(1);
}

console.log(
  `✓ colonne « Agents » cohérente : ${expected.size} workflow(s) × ${README_FILES.length} fichier(s)`,
);
