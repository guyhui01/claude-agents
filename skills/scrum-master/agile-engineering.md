# Skill — Agile Engineering Practices (XP)
> Certifications: PSM II · SAFe SSM · ICAgile ICP-ATF

## Objective
Promote and support the adoption of Agile (XP) engineering practices that enable continuous, high-quality delivery.

## Essential XP practices

### Test-Driven Development (TDD)
```
Red → Green → Refactor cycle

1. RED    : Write a failing test (no code yet)
2. GREEN  : Write the minimum code to make the test pass
3. REFACTOR : Improve the code without changing its behavior

Benefits:
  - Emergent, clean design
  - High test coverage
  - Confidence to refactor
  - Living documentation
```

### Pair Programming
```
Driver    → Writes the code
Navigator → Observes, thinks about strategy, reviews

Variants:
  - Ping Pong: A writes the test, B writes the code, then swap
  - Strong Style: to learn a new technology
  - Remote: screen sharing + voice

SM role: Encourage the practice, block dedicated time
```

### Continuous Integration / Continuous Delivery
```
CI: Each commit triggers:
  → Unit tests (< 5 min)
  → Integration tests
  → Static analysis (SonarQube, linters)
  → Artifact build

CD: Deployment pipeline to:
  → Dev  : automatic on each commit
  → Test : automatic after CI validation
  → Prod : 1-click or automatic deployment

SM role: Champion the CI/CD investment, measure DORA
```

### Technical Definition of Done (DoD)
```
A story is Done when:
  ✅ Code developed and reviewed (code review)
  ✅ Unit tests written (coverage > 80%)
  ✅ Integration tests passing
  ✅ CI/CD pipeline green
  ✅ Documentation updated
  ✅ Regression validated
  ✅ Deployed to a test environment
  ✅ Validated by the PO
```

## DORA Metrics — DevOps performance metrics
| Metric | Elite | High | Medium | Low |
|---|---|---|---|---|
| **Deployment Frequency** | Multiple/day | 1/week | 1/month | 1/6 months |
| **Lead Time for Changes** | < 1 hour | 1 day | 1 week | 1 month |
| **Change Failure Rate** | < 5% | < 10% | 15% | > 15% |
| **MTTR (Recovery)** | < 1 hour | < 1 day | < 1 week | > 1 week |

## Managing technical debt

### Impact × effort matrix
```
                Low effort       High effort
High impact   | Quick wins     | To plan
Low impact    | If time allows | Ignore
```

### Boy Scout Rule (Clean Code)
```
"Leave the code in a better state than you found it"

SM role:
  → Reserve 20% of sprint capacity for technical debt
  → Make debt visible in the backlog
  → Protect engineering time
```

## Deliverables
- DORA Metrics report (monthly)
- XP-practice adoption plan (quarterly)
- Technical DoD co-built with the team
- "TDD in practice" training (half-day)

## Output format
Specify: the team's tech stack · current CI/CD maturity level · main technical debt · identified resistance · target DORA objective
