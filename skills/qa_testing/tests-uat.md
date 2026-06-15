# QA V-Model Skill — Acceptance Testing (UAT)

> Certification: CTAL-TA · CTFL
> Agents: AGENT-QA-CYCLEV.md · AGENT-BUSINESS-ANALYST.md
> Methodology: V-model

## ISTQB definition
UAT (User Acceptance Tests) validate that the system meets the business needs and is ready for production. Performed by end users or the business owner (MOA).

## UAT responsibilities
| Role | Responsibility |
|---|---|
| **MOA / PO** | Defines the acceptance criteria, validates the GO |
| **Business / Users** | Run the tests for their domain |
| **QA** | Prepares the test cases, technical support |
| **Project manager** | Final GO / NO GO decision |

## UAT test case template

```
ID: UAT-[XXX]
Title: [Business scenario — user language]
Reference: [Business requirement / User Story / UC]
Executed by: [User name / MOA]
Date: [DD/MM/YYYY]

BUSINESS CONTEXT:
[Description in business language — not technical]

SCENARIO:
1. [User action in natural language]
2. [User action]
3. [Verification]

EXPECTED RESULT (business language):
[What the user must see / obtain]

OBTAINED RESULT:
[To be filled in by the user]

VERDICT: ☐ Accepted  ☐ Rejected — reason: [...]
COMMENTS: [free user feedback]
```

## Go-live GO criteria (UAT)

```
☐ 100% of critical scenarios: Accepted
☐ 0 blocking defect open
☐ < [X] major defects (with a dated fix plan)
☐ Operations procedures validated
☐ Rollback plan defined
☐ User training completed
☐ Sign-off report signed by MOA / Business
```

## Acceptance Sign-off Report

```
ACCEPTANCE SIGN-OFF REPORT — [Project] — [Date]

Scope tested: [list of features]
Test cases executed: [X]
Accepted: [X] | Rejected: [X]

Residual defects accepted:
| ID | Severity | Description | Fix plan |
|---|---|---|---|

Decision: ☐ ACCEPTANCE GRANTED  ☐ ACCEPTANCE REJECTED

Signatories:
MOA: [name] — Date: [...]
Business: [name] — Date: [...]
Project manager: [name] — Date: [...]
```
