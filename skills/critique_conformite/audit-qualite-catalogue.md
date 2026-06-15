# Skill — Quality Audit of a Catalog Skill (v2.8 grid, autonomously)

> Certifications: **ISO/IEC 19011:2018** (audit guidelines) · **ISO 9001:2015 §9.2** (internal audit) · **CMMI V3.0** (SCAMPI appraisal, ISACA 2023) · **ISO/IEC 42001:2023** (AIMS) · ISO 9001:2015 Lead Auditor · CMMI Associate
> Agent: AGENT-AUDIT-METHODO-IA.md

## Objective

Enable the agent to **autonomously audit the quality of one or more catalog skills** (the `.md` files in `skills/`) by consuming the **v2.8** quality grid — with no manual steering. The agent: (1) routes the skill to the right grid variant based on the owning agent, (2) delegates the factual extraction to an Explore sub-agent, (3) scores on **3 dimensions × 4 levels**, (4) produces a standardized report, (5) recommends a correction wave **V1/V2/V3**. This is the **stated end goal of the v2.8 audit effort**: industrialize the manually-driven methodology across the 33 agents (Phases 1+2).

> **Clear boundary** — this skill audits **a catalog deliverable** (a skill file). To audit a **runtime deliverable** produced by an agent (User Story, Feature, PI, AI output) → [`audit-conformite-methodo.md`](audit-conformite-methodo.md). Never confuse the two audit objects.

> **Grid source of truth**: [`audits/audit-grilles-v2.8.md`](../../audits/audit-grilles-v2.8.md) — common skeleton + **5 variants** formalized (§3.1 to §3.5) + workflow + patterns. This skill encodes the **execution procedure**; it does not duplicate the detailed criteria of the 5 groups — refer to it systematically at the scoring step.

## Frameworks used

| Domain | Frameworks |
|---|---|
| **Audit principles** | ISO/IEC 19011:2018 (7 principles) · ISO 9001:2015 §9.2 (internal audit program) |
| **Maturity / appraisal** | CMMI V3.0 — SCAMPI method (benchmark, classes A/B/C) |
| **AI audit** | ISO/IEC 42001:2023 (AI Management System) · NIST AI RMF 1.0 |
| **Biases & blind spots** | Kahneman *Thinking, Fast and Slow* (2011) · Tversky & Kahneman (1974) |
| **Internal grid** | v2.8 grid (3D × 4 levels × 5 variants) |

## The 7 ISO/IEC 19011:2018 audit principles applied to auditing skills

A catalog quality audit is not a subjective re-read: it is anchored in the **7 principles** of the management-system audit standard.

| # | ISO 19011 principle | Application to auditing a skill |
|---|---|---|
| 1 | **Integrity** | The auditor would score identically whether the skill was written by Guy, another agent or itself. No author leniency. **Serve the project's quality, never the owner's social validation**: a "well done" or an "ok" is not proof. |
| 2 | **Fair presentation** | The report faithfully reflects the ✓ **and** the ✗. You don't hide a P1 to "look clean". |
| 3 | **Due professional care** | Diligence: read the **whole** skill, check every cited framework, don't extrapolate. |
| 4 | **Confidentiality** | Sector examples stay anonymized (generalist-catalog rule — CIB banking, luxury, energy…). |
| 5 | **Independence** | The auditor (AGENT-AUDIT-METHODO-IA) is distinct from the producing agent. ⚠️ on the same LLM model, biases are **correlated** → see the blind-spots section. |
| 6 | **Evidence-based approach** | A D1/D2/D3 score rests on an **exact quote** from the skill (the Explore extraction), never on an impression. |
| 7 | **Risk-based approach** (added 2018) | Prioritize the audit effort on the **core mission** skills (N1/N2) — a P1 on a skill used every week weighs more than a P3 on an N4 skill. |

## 1. Operational reminder of the v2.8 grid

### 1.1 — Three universal dimensions

| # | Dimension | Structuring question |
|---|---|---|
| **D1** | **Framework compliance** | Does the skill scrupulously follow the official framework claimed by the agent? |
| **D2** | **Actionability** | Is the content directly usable (copy-paste, or step-by-step) with no rework? |
| **D3** | **Depth** | Does the skill draw on recent sources and field feedback that legitimize the certifying expertise? |

### 1.2 — Scoring scale (per dimension)

| Score | Meaning |
|---|---|
| **✓** | Compliant — meets the **3** operational criteria of the expected level |
| **⚠** | To correct — 1-2 gaps out of 3 criteria |
| **✗** | To rebuild — structural gap (0-1 criterion out of 3) |
| **N/A** | Not applicable (rare — justify explicitly) |

### 1.3 — Global verdict rules per skill

| Verdict | Criterion | Correction wave (cf. §6) |
|---|---|---|
| **✓** | 3 dimensions ✓ | No action |
| **P3** | 1 dimension ⚠ on formatting/structure | V4 cosmetic (optional) |
| **P2** | 1-2 dimensions ⚠ on content | V3 enrichment (bundle) |
| **P1** | 1 dimension ✗ OR ≥2 critical ⚠ | V2 deep (or V1 if mechanical) |
| **P0** | ≥2 dimensions ✗ | V2 priority full rebuild |

### 1.4 — Summary metrics (to compute per audited agent)

- Verdict distribution (% ✓ / P3 / P2 / P1 / P0)
- % skills **with no declared certification** (mechanical structural bug)
- % skills with ≥1 **explicit anti-pattern** · % with ≥1 **external source** cited
- **Coverage rate** of the expected frameworks (vs declared)

## 2. Routing table — agent → group → grid variant

The agent **automatically chooses** the §3.x variant of `audits/audit-grilles-v2.8.md` based on the agent owning the audited skill.

| Group | §grid | Agents (33 audited v2.8) |
|---|:---:|---|
| **Agile/Product** | §3.1 | PO-SAFE · PO-SCRUM · PRODUCT-MANAGER-SAFE · SCRUM-MASTER · RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER |
| **Consulting/Leadership** | §3.2 | JURIDIQUE-IA · CDO-DIRECTEUR-IA · CHEF-PROJET-IA · CONSULTANT-IA · FINANCIAL-ANALYST · AUDIT-METHODO-IA |
| **Data/Tech** | §3.3 | DATA-SCIENTIST · DATA-ENGINEER · MLOPS-ENGINEER · SOLUTIONS-ARCHITECT · BI-ANALYST |
| **Dev/CMS** | §3.4 | DEV-TYPESCRIPT-IA · DEV-DRUPAL-PHP · CMS-DIGITAL · PIM-EXPERT · DAM-EXPERT |
| **Cross-cutting/Meta** | §3.5 | ORCHESTRATEUR-WORKFLOW · PROMPT-ENGINEER · REDACTEUR-IA · UX-DESIGNER · FORMATEUR-IA · GROWTH-IA · RH-IA · VEILLE-STRATEGIQUE |

**Agents outside the 33-agent effort (mapped to the closest group)**:

| Agent | Mapped group | Reason |
|---|---|---|
| AI-ARCHITECT | Data/Tech (§3.3) | AI architecture, neighbor of SOLUTIONS-ARCHITECT |
| TECH-LEAD · DEV-PYTHON-IA | Dev/CMS (§3.4) code; Data/Tech (§3.3) if ML | Depending on the skill's nature |
| DEVOPS-CLOUD | Data/Tech (§3.3) | CI/CD, neighbor of MLOPS-ENGINEER |
| SECURITE-IA | Consulting/Leadership (§3.2) compliance; Data/Tech technical | Depending on the skill's nature |

> When the mapping is ambiguous, ask Guy **a single question** before scoring (the agent's rule).

## 3. Audit workflow (6 executable steps)

```
1. SCOPING      → route the agent to its group (§2) + open the §3.x variant
2. EXTRACTION   → delegate to an Explore sub-agent (standard brief §3.1 below)
3. SCORING      → apply the variant grid: D1/D2/D3 ✓/⚠/✗ + verdict P0-P3 (§4)
4. REPORT       → produce audits/audit-<agent>-<YYYY-MM-DD>.md (template §5)
5. VALIDATION   → submit verdicts + action plan to Guy (never auto-promotion)
6. CORRECTIONS  → execute in waves V1/V2/V3 (§6) after arbitration, commit per wave
```

### 3.1 — Standard brief for the Explore sub-agent (factual extraction)

> ⚠️ **Phase 1.2 lesson — standard method mandatory, never degraded**: an ultra-compact brief (table + bullets) to save tokens is **forbidden** by Guy (quality ≠ degraded quantity). Factual extraction **structured per skill**, with no scoring (scoring stays with the main Claude expert — separation of roles, ISO 19011 independence principle).

```
Read all the skills in skills/<agent_folder>/ exhaustively.
For EACH skill, extract factually (NO scoring, NO judgment):
- Frameworks/references cited (with version and author if present)
- Actionable deliverables offered (templates, code, diagrams, checklists)
- Worked examples / sector cases present
- Anti-patterns made explicit (yes/no + which ones)
- External sources cited (yes/no + which ones, with dates)
- Internal cross-links (See also)
- Certification declared in the header (yes/no + which ones)
- Factual warning signs (obsolete version, unsourced figure, inaccurate term)
Output: one structured block per skill, identical format for all.
```

## 4. Detailed scoring criteria (per dimension)

### D1 — Framework compliance

| Score | Decision criterion | Example signal |
|---|---|---|
| **✓** | Exact vocabulary, dated version, author cited, no inter-framework mixing | "Scrum Guide **2020**: only one Sprint Goal" · "AI Act art. 6 high risk" |
| **⚠** | Right spirit but 1-2 inaccuracies | "CRISP-DM" cited without its 6 phases · framework cited without author/year |
| **✗** | Major deviation / framework confusion | Scrum Guide 2017 · MoSCoW applied to Features · Kimball confused with Inmon |

### D2 — Actionability

| Score | Decision criterion | Example signal |
|---|---|---|
| **✓** | **≥3 deliverables** ready to paste + realistic worked examples | Jira template + timed event script + Mermaid + sector worked case |
| **⚠** | Correct content but partial templates or generic examples | Theory right, but "MyApp" instead of a sector case |
| **✗** | Mostly conceptual, no reusable deliverable | Only definitions, zero template/code |

### D3 — Depth

| Score | Decision criterion | Example signal |
|---|---|---|
| **✓** | Sources **2023+**, explicit anti-patterns, modern metrics, varied cases | Dated `## Sources` section + `## Anti-patterns` + DORA/Flow metrics |
| **⚠** | Solid but implicit or dated sources (<2022) | Good content with no external reference |
| **✗** | Dated, no source, anti-patterns absent | Obsolete version, generic single-sector examples |

### Edge cases to master

- **The pure ✓ is rare** — across the whole effort, few skills earn it (e.g. `story-mapping.md`, `planning-poker.md`, `archimate-modeling.md`). Only award 3 ✓ if **no** dimension calls for a reservation. When in doubt → ⚠.
- **False positive = risk #1** (ISO 19011 fair presentation): scoring ✓ out of complacency to avoid friction is more serious than an unfounded rejection. Each ✓ rests on evidence.
- **Mechanical vs substantive P1**: a P1 "missing certification in the header" or "absent anti-pattern" is **mechanical** → V1 (10 min). A P1 "depth absent, framework not covered" is **substantive** → V2 (1.5-2h). The sorting drives the planning.
- **Mandatory factual verification** (rule `feedback_verification_factuelle`): before stating that a certification label, a statistical %, a cohort/framework-level name or a date is **compliant or wrong**, run a **WebSearch** on the primary source. Never score D1 on a belief — the v3.8.0 incident (invented MIT Sloan cohorts) must not recur.

## 5. Standardized audit report template (10 sections)

File: `audits/audit-<agent>-<YYYY-MM-DD>.md`

```markdown
# Quality audit — AGENT-<NAME> (v2.8 grid §3.x <group>)
> Date: YYYY-MM-DD · Model: <Claude model used> · Auditor: AGENT-AUDIT-METHODO-IA

## 1. Summary (global verdict + key figures)
## 2. Method (group, §3.x variant, scope N skills, Explore extraction)
## 3. Scoring table (1 row/skill: D1 | D2 | D3 | Verdict)
## 4. P1 findings (blocking — finding · reference · recommendation)
## 5. P2 findings (enrichments to plan)
## 6. P3 findings (fine cosmetics)
## 7. Cross-cutting findings (recurring patterns on the agent)
## 8. Summary metrics (§1.4)
## 9. Recommended action plan (V1/V2/V3 — cf. §6)
## 10. Guy validation (verdicts validated / adjusted / arbitrations)
```

Each finding follows the agent's **3-part format**: **finding · certifying reference · concrete recommendation**.

## 6. Logic for recommending the V1/V2/V3 waves

| Wave | Target | Nature | Indicative budget |
|---|---|---|---|
| **V1 mechanical** | Cosmetic P1 + P3 | Missing declared certification, standardized header, anti-pattern to add, missing source — cross-cutting mechanical fix | ~10 min/skill |
| **V2 deep** | Strategic P1 + P0 | Content rebuild: dated frameworks, sector worked examples, primary sources (WebSearch), explicit anti-patterns | 1.5-2h/skill |
| **V3 bundles** | Cross-agent P2 | Grouped thematic enrichments: Sources / Anti-patterns / Cross-links / Sector diversification | per batch |

**Sorting rule**: a **mechanical** P1 (declarative gap) moves to V1; a **substantive** P1 (substance deviation, depth absent) stays in V2. The **80/20 + "6-month mission"** criterion arbitrates the effort: enrich the core skills actually used in engagements first, avoid costly verticalism (anti gas-factory).

## 7. End-to-end worked audit example (illustrative)

> **Illustrative, anonymized** case of a full audit applied to a fictional skill `skills/scrum/priorisation-backlog.md` (agent PO-SCRUM → group **Agile/Product §3.1**).

**Step 1 — Scoping**: owner = PO-SCRUM → Agile/Product group → open grid §3.1 (expected frameworks: Scrum Guide 2020, SAFe 6, WSJF POPM 6, sources scrum.org/scaledagileframework.com 2023+).

**Step 2 — Explore extraction** (factual output, excerpts):
- Frameworks cited: "MoSCoW", "WSJF", "RICE" — *no version/author*
- Deliverables: 1 MoSCoW prioritization table; *no worked WSJF example, no Jira template*
- Anti-patterns: **absent**
- External sources: **none**
- Header certification: **absent**
- Warning sign: "WSJF = sum of the 4 criteria" (incomplete formula: WSJF = Cost of Delay / Job Size)

**Step 3 — Scoring** (grid §3.1):

| Dim. | Score | Justification (evidence) |
|---|:---:|---|
| **D1** | **✗** | WSJF poorly defined (incomplete formula) + frameworks without version/author → major deviation |
| **D2** | **⚠** | 1 usable MoSCoW table but neither a worked WSJF example nor a Jira template (<3 deliverables) |
| **D3** | **✗** | 0 source, 0 anti-pattern, dated content |

→ **Verdict: P1** (1 dimension ✗ + a 2nd ✗ ⇒ close to P0; here classed **substantive P1** because the WSJF core is wrong).

**Step 4 — Findings (3-part format)**:
- *Finding*: the WSJF formula is wrong (sum instead of CoD/Job Size). *Reference*: SAFe 6 POPM — WSJF = Cost of Delay ÷ Job Size, **per-column relative** scoring. *Recommendation*: rewrite the WSJF section with the official formula + a worked example of 5 features.

**Step 5 — Wave recommendation**: substantive P1 (WSJF wrong + depth absent) → **V2 deep** (1.5-2h): add a dated Scrum Guide 2020, the correct WSJF formula + worked example, sourced RICE (Intercom 2016), an Anti-patterns section ("absolute WSJF", "MoSCoW on Epics"), a certified header, `## Sources`.

**Summary metrics (if a full agent is audited)**: e.g. PO-SCRUM 14 skills → 1 ✓ / 3 P3 / 6 P2 / 4 P1 / 0 P0 · 29% with no declared certification · 36% with anti-patterns · 50% with sources.

## Audit anti-patterns

- ❌ **Compact Explore brief** to save tokens → degraded extraction (degraded quality forbidden, Phase 1.2)
- ❌ **Scoring ✓ out of complacency** without checking the 3 operational criteria → false positive (more dangerous than a rejection — ISO 19011 fair presentation)
- ❌ **Inventing a pure ✓ verdict** when no dimension is truly flawless (the pure ✓ is rare)
- ❌ **Auditing without awareness of correlated** producer/auditor biases on the same LLM model → propose cross-validation (a different model) for high-stakes matters
- ❌ **Stating a D1 non-compliance** (certification label, %, date, framework level) without a prior WebSearch on the primary source
- ❌ **Confusing** the quality audit of a catalog skill (this skill) with the audit of a runtime deliverable ([`audit-conformite-methodo.md`](audit-conformite-methodo.md))
- ❌ **Author leniency**: scoring more gently because the skill was written by Guy or by oneself (violates ISO 19011 integrity)
- ❌ **Scoring without evidence**: judging on a global impression instead of an exact quote from the extraction (violates the evidence-based approach)

## Tools

- **Explore sub-agent**: exhaustive factual extraction per skill (step 2 — delegation)
- **WebSearch**: verification of primary sources before D1 scoring (certification labels, %, dates, framework levels)
- **v2.8 grid**: `audits/audit-grilles-v2.8.md` (skeleton + 5 variants + workflow)
- **Existing audit reports**: `audits/audit-<agent>-*.md` (reference templates calibrated on the effort)
- **Effort review**: `audits/BILAN-PHASE-1-CHANTIER-V2.8.md` · **core mapping**: `audits/CARTOGRAPHIE-SKILLS-CORE-MISSION.md` (N1/N2 prioritization for the risk-based approach)

## Deliverables

- **Standardized audit report** `audits/audit-<agent>-<YYYY-MM-DD>.md` (10 sections)
- **Scoring table** D1/D2/D3 + verdict P0-P3 per skill
- **Summary metrics** per agent (verdict distribution, % certification/anti-patterns/sources, framework coverage rate)
- **Prioritized action plan** by waves V1/V2/V3 with indicative budget
- **List of findings** P1/P2/P3 in the 3-part format (finding · reference · recommendation)
- **Cross-validation recommendation** (different model) if a high-stakes matter is detected

## Output format

For each audit engagement, specify:
- **Scope**: 1 skill · 1 full agent · 1 group · the whole catalog
- **Group & variant**: Agile/Product §3.1 · Consulting/Leadership §3.2 · Data/Tech §3.3 · Dev/CMS §3.4 · Cross-cutting/Meta §3.5
- **Audit depth** (ISO 19011 risk-based approach): exhaustive (all skills) · targeted core mission (N1/N2 only) · sample
- **Report formality level**: full 10 sections · quick summary (table + P1 findings) · single-skill scoring note (1 skill)
- **Posture**: audit only · audit + V1 corrections right away · audit + V2/V3 plan to schedule

## Sources

- **ISO/IEC 19011:2018** — *Guidelines for auditing management systems* — iso.org/standard/70017.html (7 principles: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based approach, **risk-based approach** added in 2018; audit-program guidelines + auditor competence)
- **ISO 9001:2015 §9.2** — Internal audit (audit program, criteria, scope, objectivity, evidence) — iso.org
- **CMMI V3.0** — CMMI Institute (ISACA, April 2023) — **SCAMPI** appraisal method (Standard CMMI Appraisal Method for Process Improvement, SEI): benchmark ratings, classes A/B/C per ARC
- **ISO/IEC 42001:2023** — *Information technology — Artificial intelligence — Management system* (AIMS) — compliance audit of AI systems — iso.org
- **NIST AI RMF 1.0** — AI Risk Management Framework (NIST, January 2023) — nist.gov
- **Kahneman D.** — *Thinking, Fast and Slow* (Farrar, Straus and Giroux, 2011) — cognitive biases; **Tversky A. & Kahneman D.** — *Judgment under Uncertainty: Heuristics and Biases* (Science, 1974)
- **Internal grid**: `audits/audit-grilles-v2.8.md` (common skeleton + 5 variants + 6-step workflow + patterns to propagate)

## See also

- [`audit-conformite-methodo.md`](audit-conformite-methodo.md) — compliance audit of a **runtime deliverable** (Scrum/SAFe/ISTQB/PMI), not to be confused with auditing a catalog skill
- [`challenge-raisonnement.md`](challenge-raisonnement.md) — cognitive biases, devil's advocate, red-team (used for the independence principle / correlated LLM blind spots)
- [`gate-validation-livrable.md`](gate-validation-livrable.md) — DoD gates before promoting a deliverable
- [`../../audits/audit-grilles-v2.8.md`](../../audits/audit-grilles-v2.8.md) — **source of truth** of the grid (5 detailed variants)
