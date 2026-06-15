# Scrum Skill — Acceptance Tests

> Certification: PSPO I · ISTQB CTFL
> Agent: AGENT-PO-SCRUM.md

## Given/When/Then format
```
GIVEN [initial context]
AND [additional condition]
WHEN [triggered action]
THEN [expected result]
AND [additional result]
```

## Example
```
GIVEN the user is logged in
AND their contract is active
WHEN they click "Download my statement"
THEN a PDF is generated and downloaded
AND the file name contains the date (YYYY-MM-DD)
```

## Test types
| Type | Description | Who |
|---|---|---|
| Functional | Expected behavior | PO + QA |
| Regression (NRT) | No regression | QA |
| User Acceptance (UAT) | Business validation | PO + Business |
| Performance | Response time | Tech Lead |

## Test case structure
```
ID: TC-[XXX]  |  US: [US-XXX]
Title: [short description]
Preconditions: [system state]

Steps:
1. [action]
2. [action]

Expected result: [...]
Actual result: [to fill in]
Status: ☐ Pass  ☐ Fail  ☐ Blocked
Defect: [JIRA-XXX if Fail]
```

## Severity levels
| Level | Definition | Deadline |
|---|---|---|
| Blocker | Unusable, no workaround | Immediate |
| Major | Degraded, workaround possible | Current sprint |
| Minor | Annoyance with no functional impact | Next sprint |
| Cosmetic | Visual, spelling | Backlog |

## GO / NO GO go-live criteria
```
☐ 0 blocker defects
☐ < 3 major defects open
☐ All nominal cases: Pass
☐ Regression testing validated
☐ PO sign-off
```
