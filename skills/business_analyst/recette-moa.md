# Skill — MOA UAT
> Certifications: IIBA CBAP · BCS International Diploma BA
> Normative standards: **ISTQB CTFL** (Foundation Level, syllabus v4.0 2023) · **ISO/IEC/IEEE 29119** (Software testing, Parts 1-5) · **ISO/IEC/IEEE 29148:2018** (requirements traceability)

## Objective
Plan, prepare and run functional acceptance testing to validate that the delivered system meets the MOA requirements and acceptance criteria, and reach a traced, audit-defensible go/no-go decision.

## Acceptance types (test levels — ISTQB)
| Type | Who | When | ISTQB term |
|---|---|---|---|
| **Functional acceptance** | MOA / business | Before production | Functional acceptance |
| **User acceptance (UAT)** | End users | Before deployment | User Acceptance Testing |
| **Non-regression acceptance (NRT)** | MOA + QA | At every delivery | Regression testing |
| **Operational acceptance** | MOA + Operations | Go-live | Operational Acceptance Testing |
| **Contractual / regulatory acceptance** | MOA + Legal / Compliance | Contractual or regulator milestone | Contract / Regulatory acceptance |

## Test strategy — risk-based testing
Prioritize the testing effort by **risk = defect probability × business impact**:
1. Map functions by business criticality (link to the MoSCoW prioritization of requirements).
2. Define a **target coverage per risk level**: 100% of *Must* / critical requirements, a decreasing sample on *Should* / *Could*.
3. Concentrate the deep (combinatorial) cases on high-impact areas (premium calculation, eligibility, claim amounts).

## Test case design techniques (ISTQB — black box)
| Technique | Usage | Example (insurance) |
|---|---|---|
| **Equivalence partitioning** | Group inputs into equivalent classes | Subscriber age brackets |
| **Boundary value analysis (BVA)** | Test the bounds | Age 17/18, 64/65/66 |
| **Decision table** | Cover rule combinations | Eligibility = f(age × history × policy type) |
| **State transition** | Cover a lifecycle | Claim status: reported → assessed → settled → closed |

## Test plan — Structure (aligned with ISO/IEC/IEEE 29119-3)
```
1. Objectives and scope of the acceptance testing
2. Test strategy (risk-based approach, techniques, target coverage)
3. Entry criteria (environment, data, versioned build, FRD baseline, RTM)
4. Organization (team, RACI, schedule, tools)
5. Exit criteria (success threshold, tolerated defects)
6. Defect and waiver management procedure
```

## Entry / exit criteria (ISTQB — entry / exit criteria)
- **Entry**: prod-like acceptance environment ready · representative data set · versioned build delivered · FRD/requirements at a reference version (baseline) · traceability matrix (RTM) available.
- **Exit**: success rate ≥ defined threshold (e.g. 95%) · **0 blocking defect open** · 0 major open without a signed waiver · *Must* requirements coverage = 100%.

## Test book — Standard format
| ID | Test case | Requirement covered | Prerequisite | Steps | Expected result | Obtained result | Status |
|---|---|---|---|---|---|---|---|
| CR-001 | Auto policy subscription | EXI-014 | Active broker account | 1. Enter profile… | Quote + premium calculated | … | OK / KO / Blocking |

## Tests ↔ requirements traceability (RTM)
A **bidirectional** matrix proving coverage (required in audit; cf. ISO/IEC/IEEE 29148 traceability):

| Requirement ID | Source (FRD / US) | Priority | Test case | Status |
|---|---|---|---|---|
| EXI-014 | FRD §5.2 | Must | CR-001, CR-008 | Validated |

> Rule: **every *Must* requirement is covered by ≥ 1 case**, and **every case traces to a requirement** (no orphan test).

## Defect lifecycle in UAT
```
Detected → Qualified (severity) → Assigned → Fixed → Verified → Closed
```
Severities: **Blocking** · **Major** · **Minor** · **Cosmetic**

## Severity criteria
- **Blocking**: impossible to continue testing, feature unusable.
- **Major**: degraded feature, hard workaround.
- **Minor**: low impact, workaround possible.
- **Cosmetic**: visual, ergonomics, spelling.

## Acceptance report (PV) — decision, reservations and waivers
- **Decision**: **Go** · **Conditional go** (with reservations) · **No-go**.
- **Reservations**: accepted residual defects (minor, or workable-around major) + **dated fix commitment** + assigned owner.
- **Waiver**: formal acceptance of a deviation, with business justification, **signed by Sponsor + MOA**, and a resolution deadline.
- **Content**: executive summary (scope, results, decision) · dashboard (tested / passed / failed / blocking) · list of reservations · list of waivers · MOA / MOE / Sponsor signatures.

## Worked example — Acceptance of a subscription journey (insurance)
**Context**: overhaul of an insurer's multi-product subscription journey. 96 requirements, 58 of them *Must*.
- **184 test cases** designed (*Must* coverage = 100%, BVA + decision table techniques on eligibility and premium calculation).
- Execution: **178 OK / 184** (success rate **96.7%**), 6 defects → 2 major + 4 minor.
- Handling: 1 major fixed and re-verified before the report · 1 major → **waiver** (PDF policy edition not brand-compliant, manual workaround, resolution within 30 days) · 4 minor → **reservations** (fix commitment next sprint).
- **Decision: Conditional go** (2 reservations + 1 waiver, 0 blocking, *Must* covered at 100%).

## Deliverables
- Test plan (test strategy included)
- Test book (written test cases) + tests ↔ requirements RTM
- Defect report + coverage dashboard
- Signed acceptance report (decision, reservations, waivers)

## Output format
Specify: functional scope · sprint or version to test · function risk level · management tool (Jira, TestRail, HP ALM, Xray) · go-live deadline.

## Sources
- ISTQB — *Certified Tester Foundation Level (CTFL) Syllabus v4.0* (2023) + *ISTQB Glossary* (acceptance testing, entry/exit criteria, test design techniques)
- ISO/IEC/IEEE 29119 — *Software and systems engineering — Software testing*, Parts 1 to 5 (Part 3 *Test documentation*: 29119-3:2021)
- ISO/IEC/IEEE 29148:2018 — *Requirements engineering* (requirements ↔ verification traceability)
- IIBA — *BABOK Guide v3* (IIBA 2015), Knowledge Area #7 *Solution Evaluation*

## Anti-patterns
- ❌ **Acceptance without a risk strategy** — testing everything flat, diluted effort, critical areas under-covered.
- ❌ **Test cases without traceability** — impossible to prove requirements coverage in audit.
- ❌ **Go declared with blocking defects "in progress"** — exit criterion not met → debt shipped to prod.
- ❌ **Reservations without a dated commitment or owner** — accepted defects that will never be fixed.
- ❌ **Oral waiver** — deviation accepted without a signed record → MOA/MOE dispute at go-live.
- ❌ **Non-representative data set** — "green" in acceptance, massive defects in prod.

## See also
- [gestion-exigences.md](gestion-exigences.md) — requirements ↔ tests traceability matrix (upstream of the acceptance RTM)
- [specification-fonctionnelle.md](specification-fonctionnelle.md) — FRD and acceptance criteria, source of the test cases
- [elicitation-besoins.md](elicitation-besoins.md) — Fit Criterion (Volere) verified in acceptance
- [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) — Agile equivalent: Gherkin acceptance criteria on the PO side
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — risk-based approach (ISO 31000) applied to steering the acceptance
