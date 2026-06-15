# Skill — Agile Release Train (ART) Coordination
> Certifications: SAFe RTE (Scaled Agile), SAFe 6 Agilist (Scaled Agile)

## Objective
Ensure the daily and weekly coordination of the ART — synchronization cadence, ART Sync, cross-team dependency management, Program communication — to keep all the train's teams aligned.

## ART cadence — Recurring calendar

```
DAILY
────────────────────────────────────────────────────────
Scrum of Scrums (SoS): 15 min, Scrum Masters + RTE
  → Cross-team impediments, blocking dependencies

WEEKLY
────────────────────────────────────────────────────────
PO Sync: 30 min, Product Owners + Product Manager
  → Backlog synchronization, prioritization, PO blockers

ART Sync: 30-60 min, RTE + Scrum Masters + POs
  → Dependency status, risks, Program decisions

EVERY 2 WEEKS (end of sprint)
────────────────────────────────────────────────────────
System Demo: 1-2h, all teams + stakeholders
  → Integrated demo of the increment

EVERY 10-12 WEEKS (end of PI)
────────────────────────────────────────────────────────
Inspect & Adapt: 4h, the whole ART
  → PI retrospective + Problem-Solving Workshop
```

## ART Sync — Agenda template

```
ART SYNC — Sprint [N] — [DATE]
Duration: 45 min | Facilitator: RTE

1. DEPENDENCY STATUS (15 min)
   → Round-table: dependencies running late?
   → Program Board update

2. RISKS AND IMPEDIMENTS (15 min)
   → New risks identified?
   → Impediments needing escalation?

3. ART INDICATORS (10 min)
   → Cumulative velocity vs PI commitment
   → Features completed vs planned

4. DECISIONS AND ACTIONS (5 min)
   → Decisions made today
   → Actions assigned with owners
```

## ART dashboard — Sprint tracking

```yaml
art_dashboard:
  pi: "PI-12"
  sprint: 3
  date: "2026-05-22"

  teams:
    - name: "Team Alpha"
      target_velocity: 42
      actual_velocity: 38
      committed_features: ["F1", "F2"]
      completed_features: ["F1"]
      impediments: 1

    - name: "Team Beta"
      target_velocity: 38
      actual_velocity: 40
      committed_features: ["F3", "F4"]
      completed_features: ["F3", "F4"]
      impediments: 0

  dependencies:
    - from: "Team Alpha"
      to: "Team Beta"
      feature: "F2"
      status: "at_risk"
      due: "Sprint 4"
      action: "Technical meeting D+2"

  art_risks:
    - id: "R-03"
      description: "External API unavailable in Sprint 3"
      owner: "Team Alpha"
      status: "mitigated"
```

## RTE role in the events

| Event | RTE role | Frequency |
|---|---|---|
| Scrum of Scrums | Observer / facilitator if escalation | Daily |
| PO Sync | Optional facilitator, Program decisions | Weekly |
| ART Sync | Lead facilitator | Weekly |
| System Demo | Organizer, opens + closes | End of sprint |
| Inspect & Adapt | Lead facilitator (full day) | End of PI |
| PI Planning | Lead facilitator (2 days) | Start of PI |

## Deliverables
- Full ART calendar (recurring agenda)
- Updated ART dashboard (YAML / Jira)
- ART Sync notes
- Up-to-date Program Board

## Output format
Specify: number of teams in the ART, tools (Jira, Miro, Teams), current sprint, current impediments.
