# QA V-Model Skill — Quality Reporting & Metrics

> Certification: CTAL-TM · ISTQB Expert Test Management
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## Key metrics (ISTQB)

| Metric | Formula | Target |
|---|---|---|
| Requirements coverage | Cases tested / total cases × 100 | > 90% |
| Detection rate | QA defects / total defects × 100 | > 80% |
| Pass rate | TC Pass / TC executed × 100 | > 95% in UAT |
| Defect density | Defects / function points | Decreasing |
| Test effectiveness | Defects found before go-live / total | > 95% |
| Cost of poor quality | Post-go-live defects × average cost | Close to 0 |

## Test progress report template

```
TEST REPORT — [Project] — [Date] — Phase: [System / UAT]

PROGRESS:
Total test cases: [X]
Executed: [X] ([X]%)  |  Remaining: [X]

RESULTS:
✅ Pass: [X] ([X]%)
❌ Fail: [X] ([X]%)
⚠️ Blocked: [X]
⏭️ Not executed: [X]

OPEN DEFECTS:
🔴 Blocking: [X]
🟠 Major: [X]
🟡 Minor: [X]
⚪ Cosmetic: [X]

RISKS:
- [risk 1] → action: [...]

DECISION: ☐ Continue  ☐ Suspend  ☐ Go-live GO
```

## Final test report template

```
FINAL REPORT — [Project] — v[X.X] — [Date]

EXECUTIVE SUMMARY:
Overall quality: ☐ Compliant ☐ Non-compliant
Go-live decision: ☐ GO ☐ NO GO

SUMMARY:
Cases executed: [X] | Pass: [X]% | Fail: [X]%
Defects detected: [X] | Resolved: [X] | Residual: [X]

ACCEPTED RESIDUAL DEFECTS:
| ID | Severity | Description | Fix plan |
|---|---|---|---|

LESSONS LEARNED:
- [point 1]
- [point 2]

Signed: [Guy HUI-BON-HOA] — QA Lead — [Date]
```
