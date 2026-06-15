# QA Agile Skill — In-Sprint Acceptance Testing (ATDD)

> Certification: CTFL-AT · CTAL-ATT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## ATDD — Acceptance Test Driven Development
Acceptance tests are written BEFORE development, collaboratively by PO + DEV + QA (the "3 amigos").

## 3 Amigos meeting

```
PARTICIPANTS: PO + DEV (lead) + QA
DURATION: 30-45 min per US
GOAL: Align understanding before coding

Agenda:
1. PO presents the US and the acceptance criteria
2. QA translates the criteria into test scenarios
3. DEV identifies the technical constraints
4. The team validates the scenarios together
5. Outcome: validated BDD scenarios = basis for both dev AND tests
```

## ATDD flow within the sprint

```
Refinement → 3 Amigos → BDD scenarios written
     ↓
Sprint Planning → US selected
     ↓
DEV codes in TDD (unit tests)
     ↓
QA tests in parallel (from D+1 or D+2)
     ↓
Immediate feedback (< 24h)
     ↓
DoD validated → US Done
```

## 3 Amigos session template

```
3 AMIGOS — US-[XXX] — [Title] — [Date]
PO: [name]  |  DEV: [name]  |  QA: [name]

US: [reminder]
Initial acceptance criteria: [PO list]

Scenarios validated collectively:
1. [Nominal scenario — Gherkin]
2. [Alternative scenario 1]
3. [Error scenario]

Questions / clarifications:
- [question] → [answer]

Estimated test impact: [X] h
```
