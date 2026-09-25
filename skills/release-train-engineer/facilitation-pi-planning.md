# Skill — PI Planning Preparation and Facilitation
> Certifications: SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), SAFe POPM 6 (Scaled Agile)

## Objective
Prepare and facilitate a PI Planning end to end — agenda, success conditions, two-day facilitation, Program Board, PI Objectives — to align the ART with the business priorities of the next Program Increment.

## Typical PI Planning agenda (2 days)

```
DAY 1
──────────────────────────────────────────────────────────
08:30  Welcome, logistics
09:00  Business Context — Product Management (30 min)
09:30  Architecture Vision — System Architect (20 min)
09:50  Development Practices — RTE (10 min)
10:00  ──── BREAK ────
10:15  Team Breakouts #1 — Draft plan Sprint 1-2 (2h)
12:15  ──── LUNCH ────
13:15  Team Breakouts #2 — Draft plan Sprint 3-4 (1h30)
14:45  Draft plan review + dependency identification (30 min)
15:15  ──── BREAK ────
15:30  Management Review & Problem Solving (1h30)
17:00  RTE briefs teams on adjustments (30 min)
17:30  End of Day 1

DAY 2
──────────────────────────────────────────────────────────
08:30  Day 1 recap — RTE (15 min)
08:45  Team Breakouts #3 — Final plan (2h)
10:45  ──── BREAK ────
11:00  Final Plan Review — complete Program Board (30 min)
11:30  PI Objectives writing per team (30 min)
12:00  ──── LUNCH ────
13:00  PI Objectives presentation — all teams (1h30)
14:30  Confidence vote (Fist-of-Five) (15 min)
14:45  ART risks — identification and owners (30 min)
15:15  PI Planning retrospective (30 min)
15:45  Close — RTE
16:00  End of PI Planning
```

## Program Board — Template

```
PROGRAM BOARD — PI [N] — [DATE]
──────────────────────────────────────────────────────────────────
           │ Sprint 1 │ Sprint 2 │ Sprint 3 │ Sprint 4 │ Sprint 5 (IP)
───────────────────────────────────────────────────────────────────
Team A     │ Feature 1│ Feature 2│ Feature 5│          │ IP
Team B     │ Feature 3│ Feature 3│ Feature 6│ Feature 7│ IP
Team C     │ Feature 4│          │ Feature 8│ Feature 9│ IP
───────────────────────────────────────────────────────────────────
Milestones │ M1 Sprint│          │          │ M2 Release│
Depend.    │ ──────────────────► │ ◄────────│           │
Risks      │ 🔴 GDPR  │          │          │           │

DEPENDENCY LEGEND: ──► Team A delivers to Team B
```

## PI Objectives — Per-team template

```yaml
pi_objectives:
  team: "Team Alpha"
  pi: "PI-12"

  business_objectives:
    - id: "BO-01"
      description: "Deliver Feature F1 — AI scoring module"
      business_value: 10  # Scored by the Business Owner (1-10)
      stretch: false

    - id: "BO-02"
      description: "Integrate the external customer-data API"
      business_value: 8
      stretch: false

    - id: "BO-03"
      description: "Prototype Feature F5 if capacity available"
      business_value: 6
      stretch: true

  stretch_objectives:
    - "F5 — Analytics dashboard prototype"
```

## PI Planning success conditions

```
PREREQUISITES (W-4 weeks)
────────────────────────────────────────────────────────────
☐ Updated product vision (Product Management)
☐ Top 10 Features prioritized and refined (Product Management)
☐ Architecture Vision documented (System Architect)
☐ Per-team capacity planning (Scrum Masters)
☐ Room set up (physical or virtual)
☐ PI Planning tools ready (Jira Align, Miro, Teams)

RTE ROLE DURING PI PLANNING
────────────────────────────────────────────────────────────
✓ Facilitate the transitions and timings
✓ Capture cross-team dependencies on the Program Board
✓ Facilitate the Management Review (blockers, arbitrations)
✓ Handle escalations and real-time decisions
✓ Run the final Fist-of-Five vote
```

## Deliverables
- Complete PI Planning agenda
- Configured Program Board (physical / Miro)
- Each team's PI Objectives (YAML / Jira)
- ROAM log of the ART risks
- Documented Fist-of-Five results

## Output format
Specify: number of teams in the ART, format (on-site / remote / hybrid), tools used (Jira, Miro, Teams), PI duration (10 weeks standard).
