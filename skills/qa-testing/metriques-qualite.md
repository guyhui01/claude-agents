# QA Agile Skill — Agile Quality Metrics

> Certification: CTAL-TM · CTFL-AT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## Sprint metrics

| Metric | Formula | Target |
|---|---|---|
| **In-sprint defect rate** | Bugs found / US delivered | < 1 bug/US |
| **Escape rate** | Post-sprint bugs / total bugs | < 10% |
| **Automated test coverage** | Auto tests / total tests × 100 | > 70% |
| **Feedback time** | Detection → fix delay | < 24h within the sprint |
| **Flakiness rate** | Unstable tests / total tests | < 2% |

## Release / PI metrics

| Metric | Formula | Target |
|---|---|---|
| **Production defect rate** | Prod bugs / features delivered | Close to 0 |
| **Mean Time to Detect (MTTD)** | Average time to detect a bug | Decreasing |
| **Mean Time to Resolve (MTTR)** | Average time to resolve | Decreasing |
| **Technical debt ratio** | Tech debt / sprint velocity | < 20% |

## Agile quality dashboard

```
QUALITY DASHBOARD — Sprint [N] — [Date]

🐛 DEFECTS
New this sprint: [X]
Resolved: [X]
Cumulative open: [X] (incl. [X] blocking)

🤖 AUTOMATION
Coverage: [X]%
Flaky tests: [X]
Pipeline duration: [X min]

📈 TRENDS
Escape rate: [X]% (sprint N-1: [X]%)
Quality velocity: [X pts delivered bug-free] / [X total pts]

🎯 NEXT-SPRINT GOAL
[quality improvement action]
```
