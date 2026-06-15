# Skill — Continuous Improvement (Agile Kaizen)
> Certifications: PSM III · SAFe SASM · Lean Six Sigma Green Belt · ICAgile ICP-ENT

## Objective
Establish a continuous-improvement culture in Scrum teams using Lean/Kaizen principles to eliminate waste and maximize delivered value.

## Agile continuous-improvement framework

### Deming Wheel (PDCA) applied to Scrum
```
PLAN  → Identify the problem + define the action (Sprint Retro)
DO    → Implement the action in the next sprint
CHECK → Measure the effect at the next retro
ACT   → Standardize if successful, adjust if not

Cadence: 1 PDCA cycle per sprint (2 weeks)
```

### The 8 Lean wastes (applied to software development)
```
TRANSPORT      → Unnecessary handoffs (between teams, between tools)
INVENTORY      → Excessive Work In Progress (WIP), overloaded backlog
MOTION         → Useless meetings, multitasking, unsuitable tools
WAITING        → Dependency blockers, code reviews on hold
OVERPRODUCTION → Unrequested features, over-engineering
OVER-PROCESSING→ Excessive documentation, redundant approvals
DEFECTS        → Bugs, technical debt, re-deliveries
SKILLS         → Unused talent, knowledge silos

Muda Walk exercise: the team identifies the waste in its flow
→ Duration: 30 min in a workshop
→ Tool: simplified Value Stream Mapping
```

## Value Stream Mapping (VSM)
```
Steps to map the value stream:
1. Identify the "product family" (e.g. delivering a US to prod)
2. Map the current state (AS-IS):
   [ Idea ] → [ Backlog ] → [ Sprint ] → [ Dev ] → [ Review ] → [ Prod ]
   For each step: Lead Time / Process Time / % Complete & Accurate
3. Identify the bottlenecks and waste
4. Design the future state (TO-BE)
5. Prioritized action plan

Key metrics:
  Cycle Time    = time from Dev to Done
  Lead Time     = time from Idea to Prod (customer value)
  Flow Ratio    = Process Time / Lead Time × 100 (% real value)
  Flow Ratio target > 25%
```

## Continuous-improvement metrics

### Team Health Metrics (dashboard)
```python
# Metrics to track sprint by sprint
metrics = {
    "velocity": {
        "value": [34, 38, 35, 40, 42],   # SP per sprint
        "trend": "stabilization → gradual growth",
        "alert": "variance > 20% = underlying problem"
    },
    "cycle_time": {
        "value": [3.2, 2.8, 2.5, 2.3],   # days from Done to Prod
        "target": "< 2 days",
        "lever": "WIP limits, Definition of Done"
    },
    "bug_rate": {
        "value": [12, 9, 7, 5],           # bugs per sprint
        "target": "< 5% of SP delivered",
        "lever": "TDD, code review, automated tests"
    },
    "technical_debt": {
        "value_pct": [30, 28, 25, 22],    # % of sprint spent on debt
        "target": "< 20%, i.e. ~20% of the backlog",
        "lever": "Sprint tech-debt budget, boy scout rule"
    }
}
```

### Obeya Room (Visual Management)
```
Recommended setup (physical or digital):
┌──────────────────────────────────────────────────────┐
│  OBJECTIVES         │  METRICS            │  ACTIONS │
│  (quarterly OKRs)   │  (velocity, bugs)   │  (Kaizen)│
├──────────────────────────────────────────────────────┤
│  RISKS              │  IMPEDIMENTS        │  HELP?   │
│  (top 3 risks)      │  (active blockers)  │  (needs) │
└──────────────────────────────────────────────────────┘
Weekly review: 15 min standing, everyone present
```

## Improvement techniques

### Kaizen Event (2h workshop)
```
Trigger: a problem recurring for > 3 sprints
Structure:
  T+0h00 : Define the problem precisely (data, not feelings)
  T+0h30 : Causal analysis (5 Whys or Ishikawa)
  T+1h00 : Generate solutions (brainstorming)
  T+1h30 : Prioritize by Impact / Effort (quadrant)
  T+1h45 : Define SMART actions + owners
  T+2h00 : Close + plan the follow-up

Rules:
  ✅ Full team present
  ✅ Data-driven (no unsupported opinions)
  ✅ Focus on the process, not the people
  ❌ No blame hunting
```

### The 5 Whys
```
Example — undetected production bug:
  Why 1 → The bug shipped to prod
  Why 2 → It wasn't in the automated tests
  Why 3 → The feature was developed without unit tests
  Why 4 → No rule in the Definition of Done
  Why 5 → The DoD was never defined collectively

Root action: DoD workshop with the team + mandatory TDD rule
→ Treat the root cause, not the symptom
```

## Definition of Done (DoD) — Template
```
A User Story is DONE when:
  ☐ Code developed and reviewed (pair review or PR review)
  ☐ Unit tests written (coverage > 80%)
  ☐ Integration tests passing
  ☐ Automated regression tests OK
  ☐ Acceptance criteria validated by the PO
  ☐ Deployed to a UAT environment
  ☐ Documentation updated (if applicable)
  ☐ No technical debt added (or documented)
  ☐ Performance validated (if applicable)
```

## Deliverables
- Value Stream Mapping report (AS-IS + TO-BE)
- Team Health Dashboard (sprint by sprint)
- Continuous-improvement backlog (Kaizen Backlog)
- Kaizen Event notes
- Formalized Definition of Done validated by the team

## Output format
Specify: identified recurring problem · current metrics available · team size · Lean/Agile maturity · organizational constraints
