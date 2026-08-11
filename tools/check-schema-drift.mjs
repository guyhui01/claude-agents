#!/usr/bin/env node
/**
 * Anti-drift guard for the vendored sidecar schema (ADR-0003).
 *
 * Two protection levels:
 *   1. Identity pin (ALWAYS active, runtime-free): the vendored schema's `$id` must
 *      equal EXPECTED_ID. Catches any local alteration of the copy.
 *   2. Comparison against the runtime contract (SSOT) when reachable: if the two
 *      diverge → failure. If the runtime is unreachable (repos not side by side) →
 *      cleanly skipped (exit 0, reported). Sidecar validation itself stays active.
 *
 * Strict mode (`--strict`, or `RUNTIME_SCHEMA_REQUIRED=1`) removes the skip: a
 * runtime that is EXPECTED but unreachable fails instead of passing. Without it,
 * a wrong path, a renamed checkout `path:` or a moved file upstream would drop
 * level 2 back to vacant while the step still prints green — "did not run" and
 * "passed" must not look alike. CI checks out the runtime and runs strict; a
 * local run without the sibling repo keeps the lenient skip.
 *
 * Runtime schema resolution: `RUNTIME_SCHEMA_PATH` if set, otherwise the sibling
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

/** Identity of the pinned contract (sidecar 1.0.0). */
const EXPECTED_ID = "urn:claude-agents:sidecar:1.0.0";

/** Strict mode: an unreachable runtime is a failure, not a skip. */
const STRICT =
  process.argv.includes("--strict") || process.env.RUNTIME_SCHEMA_REQUIRED === "1";

// --- Level 1: identity pin (runtime-free, protects the real CI) ---
const vendored = JSON.parse(readFileSync(VENDORED, "utf-8"));
if (vendored.$id !== EXPECTED_ID) {
  console.error(`✗ vendored schema altered: $id="${vendored.$id}", expected "${EXPECTED_ID}".`);
  console.error("  The copy must not diverge from the runtime contract (ADR-0003).");
  process.exit(1);
}
console.log(`✓ identity pin OK ($id = ${EXPECTED_ID}).`);

// --- Level 2: comparison against the runtime contract (SSOT), when reachable ---
if (!existsSync(RUNTIME)) {
  if (STRICT) {
    console.error(`✗ drift-check required but runtime schema not found (${RUNTIME}).`);
    console.error("  Strict mode is on: the comparison was expected to run, so a missing");
    console.error("  runtime is a failure, not a skip. Check the checkout path or");
    console.error("  RUNTIME_SCHEMA_PATH — the contract may also have moved upstream.");
    process.exit(1);
  }
  console.warn(`⚠ drift-check skipped: runtime schema not found (${RUNTIME}).`);
  console.warn("  Set RUNTIME_SCHEMA_PATH to enable the comparison.");
  process.exit(0);
}

const canon = (p) => JSON.stringify(JSON.parse(readFileSync(p, "utf-8")));
if (canon(VENDORED) !== canon(RUNTIME)) {
  console.error("✗ drift detected: schema/sidecar.schema.json differs from the runtime contract.");
  console.error(`  Runtime (SSOT): ${RUNTIME}`);
  console.error("  Propagate the runtime version into the vendored copy (do not diverge).");
  process.exit(1);
}
console.log("✓ vendored schema identical to the runtime contract (no drift).");
