# QA V-Model Skill — Regression & Non-Regression Testing (NRT)

> Certification: CTAL-TA · CT-TAE
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## ISTQB definition
Regression tests verify that a change (fix, enhancement) has not introduced new defects into the existing features.

## Regression strategies

| Strategy | Description | Usage |
|---|---|---|
| **Full regression** | All existing test cases | Major go-live |
| **Partial regression** | Areas impacted by the change | Targeted fix |
| **Risk-based regression** | Critical cases first | Constrained deadline |
| **Automated regression** | Execution via scripts | Frequent releases |

## NRT scope — Definition

```
IMPACT MATRIX — [Version X.X] — [Date]

Change: [description of the fix / enhancement]
Impacted components: [list]
Areas to re-test:
  ├── Directly impacted: [module A, module B]
  └── Indirectly impacted: [module C — data flow]
Areas excluded from NRT: [module D — no dependency]
```

## Regression plan template

```
REGRESSION PLAN — [Project] — Sprint/Version [X]

Trigger: ☐ Defect fix  ☐ Enhancement  ☐ Go-live
Selected test cases: [X] / [Y] total
Selection criterion: [impact / risk / priority]

| ID | Title | Priority | Automated | Owner |
|----|-------|----------|-----------|-------|
| TC-XXX | [...] | High | ☐ Yes ☐ No | [name] |

Estimated duration: [X h]
Exit criterion: 0 blocking regression
```

## NRT report

```
NRT REPORT — [Project] — [Date]
Cases executed: [X]
Pass: [X] ✅ | Fail: [X] ❌ | Blocked: [X] ⚠️

Regressions detected:
- [TC-XXX] [description] — Severity: [level]

Decision: ☐ GO ☐ NO GO — reason: [...]
```
