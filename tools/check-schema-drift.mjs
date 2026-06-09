#!/usr/bin/env node
/**
 * Garde anti-dérive du schéma sidecar vendoré (ADR-0003).
 *
 * Deux niveaux de protection :
 *   1. Pin d'identité (TOUJOURS actif, runtime-free) : `$id` du schéma vendoré doit
 *      valoir EXPECTED_ID. Attrape toute altération locale de la copie, y compris en
 *      CI GitHub où le runtime n'est pas checkout (cf. niveau 2 qui y est skip).
 *   2. Comparaison au contrat runtime (SSOT) si joignable : si les deux divergent →
 *      échec. Si le runtime est introuvable (repos non côte à côte) → ignoré proprement
 *      (exit 0, signalé). La validation du sidecar lui-même reste toujours active.
 *
 * Résolution du schéma runtime : `RUNTIME_SCHEMA_PATH` si défini, sinon le sibling
 * `../claude-agentic-runtime/schema/sidecar.schema.json`.
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const VENDORED = join(REPO_ROOT, "schema", "sidecar.schema.json");
const RUNTIME =
  process.env.RUNTIME_SCHEMA_PATH ||
  join(REPO_ROOT, "..", "claude-agentic-runtime", "schema", "sidecar.schema.json");

/** Identité du contrat épinglé (sidecar 1.0.0). */
const EXPECTED_ID = "urn:claude-agents:sidecar:1.0.0";

// --- Niveau 1 : pin d'identité (runtime-free, protège la CI réelle) ---
const vendored = JSON.parse(readFileSync(VENDORED, "utf-8"));
if (vendored.$id !== EXPECTED_ID) {
  console.error(`✗ schéma vendoré altéré : $id="${vendored.$id}", attendu "${EXPECTED_ID}".`);
  console.error("  La copie ne doit pas diverger du contrat runtime (ADR-0003).");
  process.exit(1);
}
console.log(`✓ pin d'identité OK ($id = ${EXPECTED_ID}).`);

// --- Niveau 2 : comparaison au contrat runtime (SSOT), si joignable ---
if (!existsSync(RUNTIME)) {
  console.warn(`⚠ drift-check ignoré : schéma runtime introuvable (${RUNTIME}).`);
  console.warn("  Définis RUNTIME_SCHEMA_PATH pour activer la comparaison.");
  process.exit(0);
}

const canon = (p) => JSON.stringify(JSON.parse(readFileSync(p, "utf-8")));
if (canon(VENDORED) !== canon(RUNTIME)) {
  console.error("✗ dérive détectée : schema/sidecar.schema.json diffère du contrat runtime.");
  console.error(`  Runtime (SSOT) : ${RUNTIME}`);
  console.error("  Répercute la version runtime dans la copie vendorée (ne pas diverger).");
  process.exit(1);
}
console.log("✓ schéma vendoré identique au contrat runtime (pas de dérive).");
