# SAFe Skill — Inspect & Adapt (I&A)

> Certification: SAFe POPM 6 · SAFe Agilist · SAFe RTE · SAFe SPC
> Agents: AGENT-PO-SAFE.md · AGENT-RELEASE-TRAIN-ENGINEER.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objective
Facilitate the Inspect & Adapt event at the end of the PI — PI System Demo, quantitative metrics analysis, ART retrospective and Problem-Solving Workshop (PSW) — to identify and commit to the Agile Release Train's continuous improvements.

## I&A agenda (4 hours) — minute-by-minute detail

```
INSPECT & ADAPT — PI-[N] — [DATE]
Participants: The whole ART + Business Owners + Stakeholders

09:00  PI System Demo (60 min)
       → Each team demonstrates its delivered features (5-8 min/team)
       → Stakeholder questions

10:00  ──── BREAK 15 min ────

10:15  Quantitative & Qualitative Review (45 min)
       → RTE presents the PI metrics (PI Predictability, Flow, DORA)
       → Review of the PI Objectives (committed vs delivered)
       → Analysis of recurring impediments

11:00  ART Retrospective (30 min)
       → Format: Start / Stop / Continue
       → Votes on the priority themes

11:30  Problem-Solving Workshop (75 min)
       → Identify the main problem (1 problem)
       → Root Cause Analysis (Ishikawa Fishbone / 5 Whys)
       → Solutions and SMART actions

12:45  Presentation of the I&A actions (15 min)
13:00  END
```

## PI metrics to analyze
- **PI Predictability**: actual Business Value / planned Business Value (target **80-100%**)
- **SAFe 6 Flow Metrics**: Flow Velocity, Flow Time, Flow Load, Flow Distribution, Flow Efficiency
- **DORA Metrics**: Deployment Frequency, Lead Time for Changes, Change Failure Rate, MTTR
- **Velocity** per team and per train
- **Quality**: escaped bugs, accumulated technical debt, production defect rate
- **Team satisfaction** (confidence vote)

## Problem-Solving Workshop — Method

```
Step 1: Identify the root problem (5 Whys / Ishikawa Fishbone)
Step 2: Brainstorm solutions
Step 3: Select the solutions (dot voting)
Step 4: SMART action plan with owners and measures
Step 5: Presentation and team commitment
```

### Ishikawa Fishbone — 5 cause categories

```
IDENTIFIED PROBLEM: [In 1 precise sentence]
E.g.: "The escaped-defect rate in production is 18% (target < 10%)"

ROOT CAUSE ANALYSIS (Ishikawa — 5Ms)
────────────────────────────────────────────────────────────
People         : Insufficient manual testing, lack of QA training
Process        : No clear Definition of Done on tests
Tools          : Automated test coverage < 40%
Environment    : Unstable test environment
Management     : Tests planned too late in the sprint

SELECTED ROOT CAUSES (dot vote)
1. Insufficient automated test coverage (40% → target 80%)
2. The DoD doesn't mention regression tests

SMART ACTIONS PI+1
────────────────────────────────────────────────────────────
Action 1: Increase test coverage to 65% by the end of PI+1
  Owner: Team Alpha Tech Lead
  Measure: SonarQube metric

Action 2: Add "regression covered" to the ART DoD
  Owner: RTE + All SMs
  Measure: DoD validated before Sprint 1 of PI+1
```

## I&A report template

```
Inspect & Adapt — PI [N] — [Date]

PI Predictability: [X]% (actual BV [X] / planned BV [X])
Average train velocity: [X] pts/sprint
Flow Efficiency: [X]% (target > 15%)

Identified problems:
1. [Problem] → Root cause: [...]
   Action: [SMART action] — Owner: [first name] — Due: [date]

Team commitment: [average confidence vote: X/5]
```

## Deliverables
- Full I&A notes
- Documented PI metrics (Predictability, Flow, DORA)
- Problem-Solving Workshop summary
- PI+1 I&A actions (SMART, owners, measures)

## Output format
Specify: PI metrics (PI Predictability, Flow), identified recurring problems, expected participants, format (on-site / remote).
