# QA Agile Skill — QA Retrospective & Continuous Improvement

> Certification: CTFL-AT · CTAL-TM
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## QA contribution to the Scrum retrospective

QA brings factual data on the quality of the sprint:
- Number and type of defects detected
- Escape rate (bugs found after the demo)
- Test coverage
- Average DEV ↔ QA feedback time

## Pre-retrospective quality summary template

```
QUALITY SUMMARY — Sprint [N] — Prepared by QA

DEFECTS:
Detected in sprint: [X]
Of which: Blocking [X] | Major [X] | Minor [X]
Escaped (found in review / prod): [X]
Escape rate: [X]%

TESTS:
Cases executed: [X] | Pass: [X]% | Fail: [X]%
New auto tests created: [X]
Flaky tests identified: [X]

WHAT WENT WELL (quality):
- [example: the 3 Amigos avoided 2 misunderstandings]

WHAT CAN IMPROVE:
- [example: testing only started on D7 — too late]

PROPOSED ACTION:
- [SMART action for the next sprint]
```

## Frequent quality improvement actions

| Problem detected | Corrective action |
|---|---|
| Bugs detected too late | Start testing from D2 of the sprint |
| Too many post-demo bugs | Strengthen the 3 Amigos |
| Flaky tests | Audit and stabilize the unstable tests |
| Auto coverage < 50% | Dedicated automation sprint |
| Vague acceptance criteria | Completeness checklist at Refinement |
