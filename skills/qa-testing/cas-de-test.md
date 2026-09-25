# QA V-Model Skill — Writing Test Cases

> Certification: CTAL-TA · CTFL
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## Structure of a formal test case

```
ID: TC-[MODULE]-[XXX]
Title: [short, precise description]
Reference: [FRD-XXX / UC-XXX]
Level: ☐ Unit ☐ Integration ☐ System ☐ UAT
Type: ☐ Functional ☐ Regression ☐ Performance ☐ Security
Priority: ☐ High ☐ Medium ☐ Low
Author: [Guy HUI-BON-HOA]  |  Date: [DD/MM/YYYY]

PRECONDITIONS:
- [required system state]
- [required data]
- [required access / rights]

TEST DATA:
- User: [login / role]
- Data set: [description]

STEPS:
| # | Action | Data | Expected result |
|---|--------|------|-----------------|
| 1 | [precise action] | [data] | [observable result] |
| 2 | [precise action] | [data] | [observable result] |
| 3 | [precise action] | [data] | [observable result] |

POSTCONDITIONS:
- [system state after the test]

OBTAINED RESULT: [to fill in during execution]
STATUS: ☐ Pass  ☐ Fail  ☐ Blocked  ☐ Not executed
DEFECT: [ID if Fail]
EXECUTED BY: [name]  |  DATE: [DD/MM/YYYY]
```

## Design techniques (ISTQB)

| Technique | Usage | Example |
|---|---|---|
| **Equivalence partitioning** | Reduce the number of tests | Valid / invalid values |
| **Boundary values** | Test the boundaries | Min-1, Min, Min+1, Max-1, Max, Max+1 |
| **Decision table** | Combinations of rules | If A and B then C |
| **State transition** | Flow with states | Login → Logged in → Logged out |
| **Use case** | User journey | Nominal UC + alternatives |
| **Exploratory testing** | Learning the system | Documented free session |

## Priority levels
- **High**: main nominal case, critical business rule
- **Medium**: alternative cases, secondary rules
- **Low**: edge cases, cosmetic, convenience

## Test case checklist
- [ ] Explicit title (not "test the submit button")
- [ ] Exhaustive preconditions
- [ ] Atomic and reproducible steps
- [ ] Observable and verifiable expected result
- [ ] Test data specified
- [ ] Linked to the source FRD / requirement
