# Contributing to the Claude Agents catalog

This repository is the **canonical catalog** of agents, skills, and workflows. It is
consumed by the `claude-agentic-runtime` through a generated, CI-validated index
(`sidecar.json`). Because a downstream runtime depends on it, authoring changes follow a
small set of rules that keep the catalog internally coherent and safely importable.

---

## Local checks before you commit

Every change to an agent, skill, or workflow must keep the four catalog gates green. Run
them locally; CI (`.github/workflows/sidecar.yml`) runs the same set on every change:

| Command | What it guards |
|---|---|
| `npm run validate:sidecar` | `sidecar.json` is regenerated and version-coherent (see policy below) |
| `npm run validate:wf-agents` | Each workflow's "Agents" column matches its per-step sheets |
| `npm run validate:skill-mapping` | Every skill file is reachable from an agent card, and no card references a missing file |
| `npm run check:schema-drift` | The vendored `schema/` copy has not drifted from the runtime contract (SSOT) |

If you add or move an asset, run `npm run generate:sidecar` first, then the validators.
The correct order after a version bump is **bump → generate → validate**: running
`validate:sidecar` before `generate:sidecar` will (correctly) fail on the version mismatch.

Do **not** add a new lifecycle script (catalog-lint, dependency-check, impact-analysis,
version-check) before checking `tools/` and `.github/workflows/` — the four gates above
already cover version coherence, agent↔skill dependencies, workflow consistency, and schema
drift. Extend an existing guard rather than duplicating its scope.

---

## Catalog versioning policy

### Rule — a single coherent snapshot

The catalog is versioned as **one coherent snapshot**: a single `catalog.version` stamped
uniformly across **every** asset (`catalogVersion` on each entry of `sidecar.json`). There
is **no per-asset SemVer** — agents, skills, and criteria are **not** versioned
independently of one another.

This is deliberate. Independent per-asset versions would create a combinatorial
compatibility problem (which agent version pairs with which skill version, resolved against
which criterion version), for no benefit the catalog can act on today. The snapshot version
is derived from `package.json` and enforced by `npm run validate:sidecar`, which fails if
any asset's stamp diverges from the catalog version.

### Relationship to runtime ADR-0002 (do not edit ADR-0002)

This policy and the runtime's **ADR-0002** (pinned exact-tag import) are complementary, and
govern different things:

- **ADR-0002 (runtime side)** governs how the runtime **imports** the catalog — it pins an
  exact catalog tag, so a runtime build consumes one frozen snapshot.
- **This policy (catalog side)** governs the catalog's **internal versioning granularity** —
  one version per snapshot, never per asset.

Cross-reference ADR-0002 when reasoning about import compatibility; do not edit it from this
repository — it is owned by `claude-agentic-runtime`.

### Conditional exception — not an absolute ban

Fine-grained, per-asset (or per-criterion) versioning is a **conditional exception**, not a
permanent prohibition. It becomes justified **only once an evaluation-history / regression
engine exists** — i.e. tooling that can compare, say, agent `v2.3` against `v2.4` on a
stable corpus and attribute a quality delta. Until that engine exists, the answer is
**snapshot only**.

Likewise, "a breaking change must trigger a regression evaluation" remains a **goal, not a
rule**, until a regression corpus exists. As of 2026-08-18 the catalog has roughly **25 live
workflow traces** — evidence, but **not** a regression suite. Do not encode
breaking-change → regression-eval as a hard gate before that corpus is built.

---

## Language & style

All written artifacts — files, commits, PRs, docs — are in **professional US English**.
Commits follow Conventional Commits (`feat` · `fix` · `refactor` · `chore` · `docs` ·
`test` · `ci`). File naming: `snake_case.md` for skills, `AGENT-NAME-UPPERCASE.md` for
agents. Encoding: UTF-8. Dates: ISO 8601 (`YYYY-MM-DD`).

See [`CLAUDE.md`](CLAUDE.md) for the full Git workflow, SemVer table, tag/release
conventions, and branch-protection rules.
