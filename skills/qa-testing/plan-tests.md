# QA V-Model Skill — Test Plan (Master Test Plan IEEE 829)

> Certification: CTAL-TM · CTFL
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## IEEE 829 structure

```
1. Plan identifier
2. Introduction and objectives
3. Test items
4. Features to be tested
5. Features out of scope
6. Approach / strategy
7. Pass/fail criteria
8. Suspension and resumption criteria
9. Test deliverables
10. Test tasks
11. Environment needs
12. Responsibilities
13. Schedule and estimation
14. Risks and contingencies
15. Approval
```

## Master Test Plan template

```
MASTER TEST PLAN — [Project] — v[X.X] — [Date]
Author: [Guy HUI-BON-HOA]  |  Status: ☐ Draft ☐ Validated

1. INTRODUCTION
   Objective: [...]
   FRS/FRD reference: [doc v X.X]

2. SCOPE
   In scope: [list of features]
   Out of scope: [list]

3. APPROACH
   Levels: Unit → Integration → System → UAT
   Priority: [MoSCoW applied to the test cases]

4. PASS/FAIL CRITERIA
   Pass: Obtained result = Expected result
   Fail: Any deviation documented as a defect

5. SUSPENSION
   Suspend if: > [X] blocking defects open
   Resume if: blocking defects fixed and re-tested

6. DELIVERABLES
   - Test cases: [date]
   - D1 execution report: [date]
   - Final report: [date]

7. SCHEDULE
   | Phase | Start | End | Effort (person-days) | Owner |
   |---|---|---|---|---|
   | Writing test cases | [date] | [date] | [X d] | [name] |
   | UAT execution | [date] | [date] | [X d] | [name] |
   | Final report | [date] | [date] | [X d] | [name] |

8. RISKS
   | Risk | Impact | Mitigation |
   |---|---|---|
   | Unstable env. | Tests blocked | Plan a backup env. |
   | Missing data | Incomplete tests | Prepare data sets |

9. APPROVAL
   Project manager: [name] — Date: [...]
   MOA: [name] — Date: [...]
```
