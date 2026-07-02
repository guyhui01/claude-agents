# Catalog Convention-Conformance Audit — AGENT-*.md Sweep

- **Date:** 2026-07-02
- **Auditor:** Claude Fable 5 (`claude-fable-5`), read-only diagnostic run
- **Repository:** `guyhui01/claude-agents`, working tree at tag **v3.27.3**, root `/Users/guyhui/CLAUDE/claude-agents`
- **Scope:** the **38 `AGENT-*.md` files** at the repository root, audited against the canonical conventions defined in `CLAUDE.md` (§ Conventions) and the de-facto template exemplified by `AGENT-BUSINESS-ANALYST.md`
- **Method:** ISO 19011 posture — one criterion → one piece of factual evidence → one verdict (**Conforming / Partial / Gap**). All evidence was collected mechanically (grep/awk sweeps over all 38 files, on-disk existence checks for every referenced skill path) and cross-checked by direct file reads. Verified facts are distinguished from inferences throughout. No file other than this report was created or modified; no git command was run.

---

## 1. Summary dashboard

### 1.1 Per-axis health

| Axis | Conforming | Partial | Gap | Health |
|---|---|---|---|---|
| 1. Structural conformance | 37 | 1 | 0 | Excellent — all 38 files carry the full canonical skeleton in canonical order |
| 2. i18n EN coherence | 37 | 1 | 0 | Excellent — zero accented characters, zero French prose across all 38 files |
| 3. Metadata & skills | 38 | 0 | 0 | Perfect — 425 unique skill paths referenced, **0 broken**; all identity blocks complete |
| 4. Cross-cutting coherence | 37 | 1 | 0 | Very good — one internal-catalog omission; one catalog-level observation (persona certifications, see F-2) |

**Overall verdict: the catalog is in a highly conformant state.** No Gap-level finding on any axis. 36 of 38 agents are fully Conforming on all four axes; 2 agents carry one Partial each; 1 additional Partial is catalog-level (not attributable to a single agent).

### 1.2 Counter-consistency check (CLAUDE.md claim: "38 agents + 37 skill folders + 10 workflows + 3 MCP servers")

| Counter | Claimed | Measured | Evidence | Verdict |
|---|---|---|---|---|
| Agents | 38 | **38** | `ls AGENT-*.md \| wc -l` = 38 | ✅ Conforming |
| Skill folders | 37 | **37** | `ls -d skills/*/ \| wc -l` = 37 (QA folder `qa_testing/` shared by 2 agents, documented in both QA files) | ✅ Conforming |
| Workflows | 10 | **10** | `workflows/WF-001…WF-010` = 10 files | ✅ Conforming |
| MCP servers | 3 | **3** | `mcp-servers/`: `mcp-jira`, `mcp-confluence`, `mcp-workflow-log` | ✅ Conforming |

Counters are also mutually consistent across `CLAUDE.md:10`, `START.md:3` ("38 specialized AI agents · 37 skill folders · 10 workflows · 3 MCP servers"), and `README.md:4`. **No mismatch found.**

Adjacent check (verified, not a defect): `sidecar.json` indexes **14** agents, not 38 — this is **intentional and documented** in `tools/generate-sidecar.mjs` (lines 10–11: scope = deduplicated union of the WF-001/002/003 backbones, "Extensible").

---

## 2. Per-agent × per-axis grid

Legend: **C** = Conforming · **P** = Partial · **G** = Gap.
Baseline evidence common to every row marked "canonical": title `# AGENT — …` on line 1, `> **Domain:** …` on line 2, `---` on line 4, sections in canonical order (`## Agent identity` → `## <domain> scope` → `## Behavior rules` → `## Available skills` → `## Activation`), exactly one `✅ What this agent covers` block and at least one `❌ Out of scope` block, first behavior rule = "Always respond in **English**", 3-column skills table `| Request | Skill | Certification |`, one fenced Activation block containing "Read the file AGENT-<NAME>.md and take on this role." — all mechanically verified on 2026-07-02. "n skills" = rows in the Available-skills table; **all referenced paths exist on disk**.

| # | Agent | A1 | A2 | A3 | A4 | Evidence note |
|---|---|---|---|---|---|---|
| 1 | AGENT-AI-ARCHITECT.md | C | C | C | C | Canonical; 8 cert bullets, 8 skills |
| 2 | AGENT-AUDIT-METHODO-IA.md | **P** | C | C | C | All sections present/ordered, but skills-table header reads `\| Request \| Skill \| Certifying reference \|` (line 69) instead of canonical `Certification` — sole deviation among 38 (see F-3). 16 cert bullets, 4 skills |
| 3 | AGENT-BI-ANALYST.md | C | C | C | C | Canonical; 11 cert bullets, 12 skills |
| 4 | AGENT-BUSINESS-ANALYST.md | C | C | C | C | Reference exemplar; 9 cert bullets, 11 skills |
| 5 | AGENT-CDO-DIRECTEUR-IA.md | C | C | C | C | Canonical; 14 cert bullets, 8 skills |
| 6 | AGENT-CHANGE-MANAGER.md | C | C | C | C | Canonical; 7 cert bullets, 7 skills |
| 7 | AGENT-CHEF-PROJET-IA.md | C | C | C | C | Canonical; 14 cert bullets, 8 skills |
| 8 | AGENT-CMS-DIGITAL.md | C | C | C | C | Canonical; 17 cert bullets, 12 skills |
| 9 | AGENT-CONSULTANT-IA.md | C | C | C | C | Canonical; 13 cert bullets, 9 skills |
| 10 | AGENT-DAM-EXPERT.md | C | C | C | C | Canonical; 13 cert bullets, 12 skills |
| 11 | AGENT-DATA-ENGINEER.md | C | C | C | C | Canonical; 7 cert bullets, 11 skills |
| 12 | AGENT-DATA-SCIENTIST.md | C | C | C | C | Canonical; 11 cert bullets, 13 skills |
| 13 | AGENT-DEV-DRUPAL-PHP.md | C | C | C | C | Canonical; 6 cert bullets, 10 skills |
| 14 | AGENT-DEV-PYTHON-IA.md | C | C | C | C | Canonical; 11 cert bullets, 9 skills |
| 15 | AGENT-DEV-TYPESCRIPT-IA.md | C | C | C | C | Canonical; 8 cert bullets, 9 skills |
| 16 | AGENT-DEVOPS-CLOUD.md | C | C | C | C | Canonical; 15 cert bullets, 11 skills |
| 17 | AGENT-FINANCIAL-ANALYST.md | C | C | C | C | Canonical; 11 cert bullets, 6 skills |
| 18 | AGENT-FORMATEUR-IA.md | C | C | C | C | Canonical; 13 cert bullets, 11 skills |
| 19 | AGENT-GROWTH-IA.md | C | **P** | C | C | Scope heading `## Growth IA scope` (line 28) uses French abbreviation "IA" in English prose — every other agent uses "AI" in headings (see F-4). 14 cert bullets, 8 skills |
| 20 | AGENT-JURIDIQUE-IA.md | C | C | C | C | Canonical; 13 cert bullets, 10 skills |
| 21 | AGENT-MLOPS-ENGINEER.md | C | C | C | C | Canonical; 11 cert bullets, 10 skills |
| 22 | AGENT-ORCHESTRATEUR-WORKFLOW.md | C | C | C | **P** | Canonical + one extra section `## Orchestrable agent catalog` (line 85, legitimate extension) and an adapted Activation confirm line (matches `CLAUDE.md` § Quick activation — accepted variant). **Partial on axis 4**: its orchestrable catalog lists 36 agents; self-exclusion is legitimate, but `AGENT-AUDIT-METHODO-IA.md` is absent although WF-008 and WF-010 invoke it (see F-1). 12 cert bullets, 15 skills |
| 23 | AGENT-PIM-EXPERT.md | C | C | C | C | Canonical; 13 cert bullets, 12 skills |
| 24 | AGENT-PO-SAFE.md | C | C | C | C | Canonical; 5 cert bullets, 25 skills |
| 25 | AGENT-PO-SCRUM.md | C | C | C | C | Canonical; 4 targeted `❌ Out of scope →` sub-blocks (lines 41–57) routing to sibling agents — richer than template, conformant. 8 cert bullets, 28 skills |
| 26 | AGENT-PRODUCT-MANAGER-SAFE.md | C | C | C | C | Canonical + level-disambiguation note (line 22, ART vs team) — good guardrail. 10 cert bullets, 12 skills |
| 27 | AGENT-PROMPT-ENGINEER.md | C | C | C | C | Canonical; 7 cert bullets, 8 skills |
| 28 | AGENT-QA-AGILE.md | C | C | C | C | Canonical; 2 routed `❌` sub-blocks; shared-folder note for `skills/qa_testing/` (line 63) — explains the 37-vs-38 folder delta. 8 cert bullets, 10 skills |
| 29 | AGENT-QA-CYCLEV.md | C | C | C | C | Canonical; mirror shared-folder note (line 58). 8 cert bullets, 13 skills |
| 30 | AGENT-REDACTEUR-IA.md | C | C | C | C | Canonical; rule 1 reads "Always respond in **English** (unless explicitly asked otherwise)" — justified variant for a writer agent (observation O-1, not a defect); cross-cutting skills note (line 64). 9 cert bullets, 16 skills |
| 31 | AGENT-RELEASE-TRAIN-ENGINEER.md | C | C | C | C | Canonical; 7 cert bullets, 7 skills |
| 32 | AGENT-RH-IA.md | C | C | C | C | Canonical; 6 cert bullets, 11 skills |
| 33 | AGENT-SCRUM-MASTER.md | C | C | C | C | Canonical; 8 cert bullets, 16 skills |
| 34 | AGENT-SECURITE-IA.md | C | C | C | C | Canonical; 15 cert bullets, 10 skills |
| 35 | AGENT-SOLUTIONS-ARCHITECT.md | C | C | C | C | Canonical; 10 cert bullets, 8 skills |
| 36 | AGENT-TECH-LEAD.md | C | C | C | C | Canonical; inter-agent boundary note (lines 68–71) — exemplary cross-referencing. 11 cert bullets, 12 skills |
| 37 | AGENT-UX-DESIGNER.md | C | C | C | C | Canonical; 9 cert bullets, 20 skills |
| 38 | AGENT-VEILLE-STRATEGIQUE.md | C | C | C | C | Canonical; 8 cert bullets, 6 skills |

Grid totals — A1: 37 C / 1 P · A2: 37 C / 1 P · A3: 38 C · A4: 37 C / 1 P. **Zero Gap.**

---

## 3. Findings (ordered by severity)

No hard gap was found: **zero broken skill paths, zero missing canonical sections, zero untranslated French sentences.** The findings below are all Partial-severity or informational.

### F-1 — Orchestrator's agent catalog omits AGENT-AUDIT-METHODO-IA (Partial, highest-severity finding)
- **File:** `AGENT-ORCHESTRATEUR-WORKFLOW.md`, section `## Orchestrable agent catalog` (lines 85–140).
- **Evidence (verified):** the section lists **36** distinct `AGENT-*.md` files. The two absentees are `AGENT-ORCHESTRATEUR-WORKFLOW.md` itself (legitimate — it does not orchestrate itself) and `AGENT-AUDIT-METHODO-IA.md`. Yet the auditor agent **is invoked by two orchestrated workflows**: `workflows/WF-008-audit-conformite-ia-act-rgpd.md` and `workflows/WF-010-post-mortem-projet.md` (grep-verified). Line 22 of the orchestrator claims it draws "on the catalog of 38 specialized agents".
- **Inference (flagged as such):** the omission may be a deliberate "independent counter-expert stays outside routine routing" choice, but no such rationale is written anywhere; absent documentation, an orchestrator that routes WF-008/WF-010 cannot resolve one of their agents from its own catalog section.
- **Recommendation:** add one row for AGENT-AUDIT-METHODO-IA (e.g., under a "Governance & control" group), **or** add an explicit one-line exclusion note stating the auditor is invoked only via workflow briefs, never via ad-hoc routing. Either fix restores internal coherence; note that the pre-commit checklist in `CLAUDE.md:136` explicitly names this file for counter consistency.

### F-2 — Persona certification claims carry no catalog-level disclaimer (Partial, catalog-level)
- **Files:** all 38 identity blocks (pattern "holding every certification in the field", e.g. `AGENT-BUSINESS-ANALYST.md:8`); `README.md`, `START.md`, `CLAUDE.md`, `COMMERCIAL.md`.
- **Evidence (verified):** every agent asserts possession of real-world certifications (CBAP, PMP, CISSP, TOGAF…). A grep for `disclaimer|persona|simulat|fictional|role-play` across README/START/CLAUDE/COMMERCIAL returns **no statement** framing these as persona competency scaffolding rather than actual credentials. The repo is public.
- **Why it matters:** the catalog's own governance culture (cf. the "personas must not present themselves as certified in a misleading way" guardrail applied elsewhere in the owner's projects) argues for an explicit frame; a public reader could misread the claims as human credentials.
- **Recommendation:** add a single sentence to `README.md` (and optionally `START.md`), e.g.: "Certifications listed in agent identity blocks are persona competency framings used to anchor vocabulary and standards — they are simulated expertise profiles, not credentials held by any person." No per-agent edit needed.

### F-3 — Non-canonical skills-table header in AGENT-AUDIT-METHODO-IA (Partial, minor)
- **File:** `AGENT-AUDIT-METHODO-IA.md:69`.
- **Evidence (verified):** header is `| Request | Skill | Certifying reference |`; the other **37/38** agents use `| Request | Skill | Certification |` exactly.
- **Inference:** plausibly deliberate (the column cites reference standards — ISO 19011, CMMI — rather than personal certifications), but the deviation is undocumented and breaks mechanical parseability of the canonical header.
- **Recommendation:** either align the header to `Certification`, or record the variant as an accepted exception in `CLAUDE.md` § Conventions. One-line fix.

### F-4 — Franglish heading "Growth IA scope" (Partial, minor)
- **File:** `AGENT-GROWTH-IA.md:28`.
- **Evidence (verified):** the scope heading reads `## Growth IA scope` — "IA" is the French abbreviation for AI. Every other `-IA`-named agent uses English in headings (`## AI Consultant scope`, `## AI Legal scope`, `## Python AI scope`…). File *names* (`AGENT-GROWTH-IA.md`) are legitimate legacy identifiers per the translation charter and are **not** counted as defects; this heading is body prose and is the single Franglish residue found in 3,267 lines.
- **Recommendation:** rename the heading to `## Growth AI scope` (pure category-A decorative edit, no re-test needed).

### Observations (informational — no verdict impact)

- **O-1 — Accepted behavior-rule variant:** `AGENT-REDACTEUR-IA.md` rule 1 appends "(unless explicitly asked otherwise)" — a sensible allowance for a multilingual content writer. Suggest documenting it as an accepted variant if the template is ever formalized.
- **O-2 — Accepted activation variant:** `AGENT-ORCHESTRATEUR-WORKFLOW.md:145` confirms readiness "by listing the available orchestrable agents and the orchestration skills" instead of the standard sentence; this matches the orchestrator-specific quick-activation block already documented in `CLAUDE.md:173-176`. Conformant by documented exception.
- **O-3 — Sidecar scope is intentional:** `sidecar.json` covers 14 agents (WF-001/002/003 backbones). Verified as by-design in `tools/generate-sidecar.mjs` header comment. Not a counter defect.
- **O-4 — Adjacent to scope (tooling, not an AGENT file):** `tools/generate-sidecar.mjs` still carries **French comments** ("Générateur de sidecar…", "Périmètre : les backbones…") despite the "all written artifacts in US English" convention (`CLAUDE.md:39`). The EN migration evidently covered Markdown content but not tool comments. Flagged for completeness; outside the 38-file audit perimeter.
- **O-5 — Positive practices worth keeping:** routed `❌ Out of scope → use AGENT-X.md` sub-blocks (PO-SCRUM, QA-AGILE), shared-folder notes (both QA agents), inter-agent boundary notes (TECH-LEAD), level-disambiguation warning (PRODUCT-MANAGER-SAFE). These enrich the template without breaking it and could be promoted to recommended patterns.

### Verified-clean checks (for traceability)

| Check | Result |
|---|---|
| Skill-path existence: 428 references (425 unique) across all skills tables and notes | **0 broken** — every path resolves on disk under `skills/` |
| Accented characters (à…œ, upper+lower) in all 38 files | 0 occurrences |
| French stop-word sequences in prose (le/la/les/des/dans/pour/…) | 0 occurrences |
| `# AGENT — ` title line 1 + `> **Domain:**` line 2 + `---` line 4 | 38/38 |
| Canonical section order identity→scope→rules→skills→activation | 38/38 |
| `✅ What this agent covers` + `❌ Out of scope` blocks | 38/38 |
| First behavior rule = "Always respond in **English**" | 38/38 (1 documented variant, O-1) |
| Fenced Activation block with exact self-referencing instruction | 38/38 |
| Skills-table rows well-formed (3 columns) | 38/38, no malformed row |
| File naming `AGENT-NAME-UPPERCASE.md` | 38/38 |
| Counters 38/37/10/3 across CLAUDE.md, START.md, README.md, mcp-servers/ | consistent |

---

## 4. Prioritized recommendation plan

### P1 — Fix now (internal coherence, minutes of work, no re-test required)
1. **F-1:** add `AGENT-AUDIT-METHODO-IA.md` to the orchestrator's `## Orchestrable agent catalog` (or document its exclusion) — it is the only catalog-internal inconsistency found, and the pre-commit checklist already designates this file as a counter-consistency point.
2. **F-4:** `## Growth IA scope` → `## Growth AI scope` in `AGENT-GROWTH-IA.md` (last Franglish residue; category-A decorative edit).

### P2 — Next maintenance batch
3. **F-2:** add the one-sentence persona-certification disclaimer to `README.md` (public repo; aligns the catalog with the owner's own "non-certified personas" guardrail).
4. **F-3:** harmonize (or formally except) the `Certifying reference` table header in `AGENT-AUDIT-METHODO-IA.md`.

### P3 — Opportunistic
5. **O-4:** translate the French comments in `tools/generate-sidecar.mjs` (and sweep the other two `tools/*.mjs` for the same) to close the EN-migration long tail.
6. **O-1/O-2/O-5:** codify the accepted template variants and the recommended enrichment patterns (routed out-of-scope blocks, shared-folder notes, boundary notes) in `CLAUDE.md` § Conventions, so future agents inherit them deliberately rather than by imitation.

---

*End of report. Read-only audit: no AGENT, skill, workflow, or configuration file was modified; no git operation was performed. Sole artifact created: this file.*
