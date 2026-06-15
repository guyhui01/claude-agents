# QA Agile Skill — Agile Test Strategy (Shift-Left)

> Certification: CTFL-AT · CTAL-ATT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## ISTQB Shift-Left principle
Build quality in as early as possible in the cycle, starting from the writing of the User Stories.

## Agile testing quadrants (Brian Marick)

```
               CRITIQUE THE PRODUCT
        ┌──────────────────────────────┐
        │  Q4: Performance tests       │ ← Tools
        │  Security tests              │
        │  Load tests                  │
TECH    ├──────────────────────────────┤  BUSINESS
        │  Q3: Exploratory tests       │
        │  UAT acceptance tests        │
        │  User scenario tests         │
        ├──────────────────────────────┤
        │  Q1: Unit tests (TDD)        │ ← Automated
        │  Component tests             │
        │  Q2: Functional tests        │ ← Manual + Auto
        │  Acceptance tests (BDD)      │
        └──────────────────────────────┘
               SUPPORTING THE TEAM
```

## Strategy by Scrum phase

| Phase | QA activity | Who |
|---|---|---|
| **Refinement** | US review, acceptance criteria, risks | PO + QA |
| **Sprint Planning** | Test estimation, quality DoD | QA + Team |
| **Sprint (D1-D3)** | Writing test cases, BDD scenarios | QA |
| **Sprint (D4-D8)** | Testing in parallel with dev, fast feedback | QA + DEV |
| **Sprint (D9-D10)** | Final validation, DoD check | QA + PO |
| **Review** | Demo on a stable environment | QA validates the build |

## Agile strategy checklist
- [ ] QA involved from Refinement onward
- [ ] Acceptance criteria = basis for the test cases
- [ ] Automated tests for regression
- [ ] Exploratory tests for new features
- [ ] DoD includes the quality criteria
- [ ] DEV ↔ QA feedback < 24h within the sprint
