# QA Agile Skill — Automated CI/CD Regression

> Certification: CT-TAE · CTAL-ATT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## Principle
In Agile, regression is automated and integrated into the CI/CD pipeline to guarantee quality at every commit.

## Agile regression levels

| Level | Trigger | Target duration | Content |
|---|---|---|---|
| **Smoke** | Every commit | < 10 min | 20-30 critical cases |
| **Fast regression** | Every PR/MR | < 30 min | Impacted areas |
| **Full regression** | Night / end of sprint | < 2h | 100% of stable cases |
| **Sanity** | Before demo / go-live | < 15 min | Key features |

## Regression suite template

```
REGRESSION SUITE — [Project] — v[X.X]

Smoke Tests (always active):
| TC-ID | Title | Priority | Auto | Duration |
|---|---|---|---|---|
| TC-001 | Nominal login | Critical | ✅ | 30s |
| TC-002 | Home page load | Critical | ✅ | 20s |

Functional regression:
| Module | # cases | Auto | Manual |
|---|---|---|---|
| [Module A] | [X] | [X] | [X] |
| [Module B] | [X] | [X] | [X] |

Stop criterion: 1 Smoke fail = pipeline blocked
```

## CI/CD regression report

```
CI/CD REGRESSION — Build [#XXX] — [Date/Time]
Duration: [X min]  |  Branch: [name]

✅ Pass: [X]  ❌ Fail: [X]  ⚠️ Flaky: [X]

Failures:
- [TC-XXX] [description] — since: [build #XXX]

Action required: ☐ Immediate fix  ☐ Ticket created  ☐ Test to review
```
