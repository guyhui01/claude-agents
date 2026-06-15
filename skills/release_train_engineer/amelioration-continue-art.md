# Skill — ART Continuous Improvement
> Certifications: SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), SAFe 6 Agilist (Scaled Agile)

## Objective
Drive the ART's continuous improvement between two PIs — track the I&A actions, run the Communities of Practice, measure the teams' Agile maturity and build the next PI's improvement plan.

## I&A action tracking

```yaml
ia_actions:
  source_pi: "PI-12"
  target_pi: "PI-13"

  actions:
    - id: "IA-01"
      description: "Increase automated test coverage to 65%"
      owner: "Tech Lead Alpha"
      target_sprint: 2
      measure: "SonarQube coverage metric"
      status: "in_progress"
      progress: "55% reached in Sprint 1"

    - id: "IA-02"
      description: "Add regression to the ART DoD"
      owner: "RTE"
      target_sprint: 1
      measure: "DoD updated and validated"
      status: "completed"

    - id: "IA-03"
      description: "Reduce Lead Time from 8 to 5 days"
      owner: "All SMs"
      target_sprint: 4
      measure: "Flow Time metric in Jira"
      status: "in_progress"
      progress: "7.2 days in Sprint 2"
```

## PI improvement plan

```
IMPROVEMENT PLAN PI-13
══════════════════════════════════════════════════════════
QUALITY DOMAIN
─────────────────────────────────────────────────────────
✓ Test coverage: 55% → 65% (Sprint 2) → 75% (Sprint 4)
✓ ART DoD updated (Sprint 1 — done)
✓ TDD training — 2 teams (Sprint 1-2)

FLOW DOMAIN
─────────────────────────────────────────────────────────
✓ Reduce WIP limits (Sprint 1 — each team)
✓ Improve the refinement process (< 20% sprint capacity)
✓ Lead Time target: 5 days by end of PI-13

COLLABORATION DOMAIN
─────────────────────────────────────────────────────────
✓ Monthly Architecture CoP (RTE + Tech Leads)
✓ Bi-weekly Testing CoP (QA Engineers)
✓ Buddy system for the Alpha-Beta teams
```

## Agile maturity assessment — Team Assessment

```
AGILE MATURITY RADAR — Team Alpha — PI-12
────────────────────────────────────────────────
Scrum practices      : ████████░░  4/5
Automated tests      : █████░░░░░  3/5
Team collaboration   : ███████░░░  3.5/5
Definition of Done   : ██████░░░░  3/5
Continuous Delivery  : ████░░░░░░  2/5
Lean Thinking        : ██████░░░░  3/5
────────────────────────────────────────────────
OVERALL SCORE: 3.1/5 (PI+1 target: 3.5/5)
```

## Deliverables
- I&A action tracker with progress
- Documented PI improvement plan
- Per-team maturity radar
- Improvement report for the next I&A

## Output format
Specify: the previous PI's I&A actions, current metrics, priority improvement areas, available resources.
