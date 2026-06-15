# QA V-Model Skill — Reviews & Inspections

> Certification: CTFL · CTAL-TM
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## Review types (ISTQB)

| Type | Formality | Participants | Goal |
|---|---|---|---|
| **Informal review** | Low | 1-2 peers | Quick error detection |
| **Walkthrough** | Medium | Author + team | Shared understanding |
| **Technical review** | High | Technical peers | Technical assessment |
| **Inspection** | Very high | Team + moderator | Formal defect detection |

## Inspection process (IEEE 1028)

```
1. Planning → Document selection, team setup
2. Kick-off → The author presents the document
3. Individual preparation → Each reviewer annotates
4. Inspection meeting → Discussion and recording of defects
5. Rework → The author fixes the identified defects
6. Follow-up → Verification of the fixes
```

## Checklist template (FRD review checklist)

```
REVIEW — [Document] — v[X.X] — [Date]
Reviewer: [name]  |  Author: [name]

COMPLETENESS:
☐ All nominal cases documented
☐ Alternative and error cases present
☐ Business rules numbered and complete
☐ IS interfaces identified

CLARITY:
☐ Unambiguous language
☐ Glossary terms used
☐ Examples provided for complex rules

TESTABILITY:
☐ Each requirement is verifiable
☐ Acceptance criteria measurable
☐ Test data identifiable

Defects found:
| # | Location | Description | Severity | Type |
|---|---|---|---|---|
| 1 | [section X] | [description] | Major | Missing |
```
