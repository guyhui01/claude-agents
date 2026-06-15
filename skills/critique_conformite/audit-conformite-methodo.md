# Counter-Expert Skill — Method Compliance Audit

> **Reference:** SAFe 6 · Scrum Guide 2020 · ISTQB CTFL/CTAL · PMI PMBOK 7 · ISO 9001:2015

---

## Objective

Verify that a deliverable, workflow or practice **strictly** complies with the official texts of the certifying methods. Produce a structured audit report with finding, reference and recommendation for each gap detected.

---

## Compliance checklists

### Scrum Guide 2020

| Element | Expected compliance | Frequent deviation |
|---|---|---|
| Sprint Goal | **Only one** per Sprint, formulated by the team | Multiple Sprint Goals or objectives too vague |
| Daily Scrum | Plan for the **next 24h**, run by the Developers | SM running and directing it (violates self-organization) |
| Sprint Review | Inspection of the **Increment** with stakeholders | A mere demo with no feedback or adaptation |
| Sprint Retrospective | Improvement of the team's **process** | Improvement actions not integrated into the next Sprint |
| Backlog Refinement | Continuous, **≤ 10%** of the Sprint capacity | A single block session at the start of the Sprint |
| Product Goal | **Only one** Product Goal at a time | Missing or multiple Product Goal |
| Self-managed Developers | The Developers organize themselves | SM or PO assigning tasks to the developers |

### SAFe 6

| Element | Expected compliance | Frequent deviation |
|---|---|---|
| WSJF | **Relative, per-column independent** scoring (smallest = 1) | Absolute scores or inherited from the previous backlog |
| MoSCoW | Reserved for **User Stories** only | Applied to Epics or Features |
| PI Objectives | **Committed** vs **Uncommitted** distinct and explicit | All PI Objectives marked committed |
| Feature DoD | Benefit Hypothesis at the **Feature level** | LBC (Lean Business Case) applied to Features |
| Epic Lean Business Case | Reserved for **Epics** (investment > one PI) | LBC used for Features or Stories |
| Iteration Goal | Aligned with the ART's **PI Objective** | Iteration Goals disconnected from PI Planning |
| ART Sync | Cadenced at least every **2 sprints** | PO Sync and Scrum of Scrums merged or missing |

### ISTQB (CTFL / CTAL-TM)

| Element | Expected compliance | Frequent deviation |
|---|---|---|
| Entry criteria | Defined **before** the test phase begins | Missing or defined during the tests |
| Exit criteria | **Measurable, dated** metrics (% coverage, number of open defects) | "All tests pass" with no defined threshold |
| Test levels | Pyramid: unit > integration > system > acceptance | System tests instead of unit tests |
| Severity vs Priority | **Distinct** — severity = technical impact, priority = business urgency | Severity and priority merged in the same field |
| Traceability | Requirement ↔ test case ↔ result | Test cases not linked to the requirements |

### PMI PMBOK 7 (Performance Domains)

| Domain | Expected compliance | Frequent deviation |
|---|---|---|
| Stakeholders | Continuous engagement, not only at kick-off | Stakeholders consulted only at the start |
| Team | Self-management and empowerment | Micro-management by the project manager |
| Planning | **Adaptive** — regular plan revision | Frozen initial plan with no revision |
| Delivery | Deliverable value **at every iteration** | Value only at the end of the project |
| Measurement | **Outcome-oriented** metrics, not only activities (outputs) | Activity reporting with no link to the value produced |

---

## Output format — Audit report

```
METHOD COMPLIANCE AUDIT REPORT
======================================
Audited deliverable: [deliverable name]
Date: [DD/MM/YYYY]
Framework(s): [SAFe 6 / Scrum Guide 2020 / ISTQB CTFL / PMI PMBOK 7]

SUMMARY: ☐ Compliant  ☐ Non-compliant  ☐ Partially compliant
Number of gaps detected: [N]

DETECTED GAPS:
-----------------
Gap #1
  Finding     : [precise description of the deviation]
  Reference   : [official text · section · page]
  Impact      : [risk if not corrected]
  Recommendation: [concrete corrective action]

[Repeat for each gap]

COMPLIANT POINTS:
------------------
- [element checked compliant · reference]

FINAL VERDICT: ☐ Promote  ☐ Correct before promotion  ☐ Reject
```

---

## Anti-theater rule

Never tick "Compliant" without having checked each item of the applicable checklist. A superficial audit is worse than no audit — it gives false quality assurance.
