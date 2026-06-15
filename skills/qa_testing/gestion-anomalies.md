# QA V-Model Skill — Defect Management

> Certification: CTAL-TM · CTAL-TA
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## Defect lifecycle

```
New → Assigned → In progress → Resolved → Re-tested → Closed
                                   ↓                      ↑
                                Rejected             Pass ✅
                                   ↓
                              Reopened ──────────────────→ In progress
```

## Defect template (Jira / HP ALM)

```
TITLE: [MODULE] — [Short, factual description]

Type: ☐ Bug  ☐ Functional defect  ☐ Regression  ☐ Enhancement
Severity: ☐ Blocking  ☐ Major  ☐ Minor  ☐ Cosmetic
Priority: ☐ Critical  ☐ High  ☐ Normal  ☐ Low
Environment: ☐ Dev  ☐ Integration  ☐ Staging  ☐ Production
Version: [X.X.X]  |  Build: [XXX]
Linked test case: [TC-XXX]
Linked requirement: [FRD-XXX]

DESCRIPTION
[Factual description of the problem — no interpretation]

REPRODUCTION STEPS
1. [Precondition]
2. [Action 1]
3. [Action 2]
4. [Observation]

EXPECTED BEHAVIOR
[What should happen according to the FRD]

OBSERVED BEHAVIOR
[What actually happens — with screenshot / log]

BUSINESS IMPACT
[Process blocked / users affected / data corrupted]

WORKAROUND
☐ Yes: [description]  ☐ No

ATTACHMENTS
[Screenshots, logs, reproduction video]
```

## ISTQB severity levels

| Severity | Definition | Example |
|---|---|---|
| **Blocking** | Testing impossible, system unusable | Crash, access denied |
| **Major** | Main feature down, workaround possible | Wrong calculation, data lost |
| **Minor** | Minor degradation, easy workaround | Incorrect error message |
| **Cosmetic** | No functional impact | Typo, alignment |

## Management rules
- Severity = technical impact (defined by QA)
- Priority = fix urgency (defined by MOA/PO)
- Any blocking defect → block the go-live
- Mandatory re-test on the same fixed version
- Closure = re-test Pass + QA validation
