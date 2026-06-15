# Skill — Requirements Management (BABOK Knowledge Area #5)
> Certifications: IIBA CBAP · PMI-PBA
> Normative standards: **BABOK v3** (IIBA 2015) — KA #5 *Requirements Life Cycle Management* · **ISO/IEC/IEEE 29148:2018** (traceability)

## Objective
Manage the **life cycle** of requirements once gathered: trace them, maintain them, prioritize them, assess their changes and get them approved, from gathering through verification in UAT.

> Distinct scope from [`elicitation-besoins.md`](elicitation-besoins.md): elicitation (BABOK KA #4) **gathers** requirements; this skill (KA #5) **manages their life cycle**. No re-statement of gathering techniques, Volere or Kano here.

## The 5 life-cycle tasks (BABOK KA #5)
| Task | Activity |
|---|---|
| **5.1 Trace** | Establish and maintain the requirement ↔ source ↔ solution ↔ test links |
| **5.2 Maintain** | Keep the requirements accurate over time, manage reuse |
| **5.3 Prioritize** | Order by value, risk, dependencies, cost (MoSCoW) |
| **5.4 Assess Changes** | Analyze the impact of a change request before deciding |
| **5.5 Approve** | Obtain formal agreement and set the baseline |

## Types of requirements managed (BABOK v3 taxonomy)
Business · Stakeholder · Solution (Functional / Non-Functional) · Transition (migration, training, decommissioning).

## States of a requirement (lifecycle)
```
Proposed → Analyzed → Approved → Baseline → Implemented → Verified → (Closed | Rejected)
```
Each transition is traced (who, when, decision). A **baselined** requirement only changes through the change management process.

## Management attributes of a requirement
Unique ID · Version · Status (see cycle above) · Priority (MoSCoW) · Source/Originator · Owner · Dependencies · Key date(s). *(For quality characteristics — unambiguous, verifiable… — see [`specification-fonctionnelle.md`](specification-fonctionnelle.md), ISO 29148.)*

## Bidirectional traceability (BABOK 5.1 + ISO 29148)
- **Backward**: requirement → business need / source stakeholder → justifies *why* it exists.
- **Forward**: requirement → design → test case → release → proves *it is covered*.
- Link types: *derive*, *satisfy*, *verify*, *depend on*.

| Need ID | Need label | Requirement ID | Requirement label | Test Case | Status |
|---|---|---|---|---|---|
| BES-001 | Mobile access | EXI-001 | The app must be responsive | CT-001 | Verified |

## MoSCoW prioritization (BABOK 5.3)
- **Must have**: essential, the project fails without it
- **Should have**: important but temporarily workable around
- **Could have**: desirable if the budget allows
- **Won't have**: out of scope for this version

## Baselining & versioning
- **Baseline**: an approved reference version of a set of requirements, frozen at a milestone (end of scoping, entry into build).
- Any later deviation goes through a change request; the baseline is re-issued with a version number and a history.

## Requirements change management (BABOK 5.4 + 5.5)
1. Formalized change request (RFC — Request for Change)
2. **Impact analysis** (scope, schedule, cost, risk, impacted traced requirements)
3. Decision by the **steering committee / CCB** (Change Control Board)
4. Update of the documentation, the baseline and the traceability matrix
5. Communication to the impacted teams

## Coverage & steering metrics
- **Coverage rate**: % of *Must* requirements linked to ≥ 1 verified test case (target 100%).
- **Orphan requirements**: without a backward source (to requalify) or without a forward test (non-coverage risk).
- **Volatility**: number of changes per requirement (signal of unstable scoping).

## Deliverables
- Requirements catalog (Excel, Jira, Doors, ReqView) with attributes and statuses
- Needs → requirements → tests traceability matrix (bidirectional)
- Versioned baseline + change history
- Change-request impact report
- Coverage and volatility dashboard

## Output format
Specify: functional domain · management tool · project phase · existence of a baseline · required level of detail.

## Sources
- IIBA — *BABOK Guide v3* (IIBA 2015) — Knowledge Area #5 *Requirements Life Cycle Management*
- ISO/IEC/IEEE 29148:2018 — *Requirements engineering* (traceability, requirements management across the life cycle)
- Wiegers K. & Beatty J. — *Software Requirements* 3rd ed (Microsoft Press 2013) — baselining, change control, traceability

## Anti-patterns
- ❌ **No baseline** — requirements "move" continuously without a reference version → impossible to arbitrate a change.
- ❌ **One-way traceability** — backward *or* forward only → you can neither justify nor prove coverage.
- ❌ **Change without impact analysis** — RFC accepted on instinct → scope and cost creep.
- ❌ **Confusing management with elicitation** — re-gathering instead of managing the life cycle (cf. [`elicitation-besoins.md`](elicitation-besoins.md)).
- ❌ **Tolerated orphan requirements** — without a source or a test → noise in the catalog, audit impossible.

## See also
- [elicitation-besoins.md](elicitation-besoins.md) — upstream requirements gathering (BABOK KA #4) — **complement, not a duplicate**
- [specification-fonctionnelle.md](specification-fonctionnelle.md) — quality characteristics of a requirement (ISO 29148), FRS/FRD
- [recette-moa.md](recette-moa.md) — forward verification: RTM tests ↔ requirements, coverage
- [analyse-impact.md](analyse-impact.md) — change impact analysis (Kotter, BABOK Strategy Analysis)
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — Agile equivalent: product backlog management and prioritization
