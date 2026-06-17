# Skill — Hybrid Agile/Waterfall Planning for AI Projects
> Certifications: PMP (PMI 2026), SAFe Program Consultant (SPC), PMI-ACP, PRINCE2 Agile
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **PMBOK 7** (PMI 2021) · **PRINCE2 Agile** (PeopleCert) · **SAFe** (PI Planning) · **Planning Poker** (Grenning 2002) · **Story Points** (Cohn 2005) · WBS (PMI)

## Objective
Build a hybrid plan suited to AI projects — sequential phases for compliance and infrastructure, Agile sprints for development and experimentation, with clear estimation and milestones.

## Hybrid Structure — WBS & Milestones

### WBS (Work Breakdown Structure) for an AI project

```
1.0  AI PROJECT — CONVERSION SCORING
│
├── 1.1  SCOPING PHASE (Waterfall — 3 weeks)
│   ├── 1.1.1  Project charter
│   ├── 1.1.2  Stakeholder analysis
│   ├── 1.1.3  DPIA / GDPR compliance
│   └── 1.1.4  Infrastructure setup (AWS, MLflow, Git)
│
├── 1.2  DATA DISCOVERY PHASE (Sprint 0 — 2 weeks)
│   ├── 1.2.1  CRM data quality audit
│   ├── 1.2.2  Exploratory data analysis (EDA)
│   ├── 1.2.3  Feature catalog
│   └── 1.2.4  Baseline metrics (current conversion rate)
│
├── 1.3  AGILE DEVELOPMENT (5 Sprints × 2 weeks)
│   ├── Sprint 1  Feature engineering + baseline model
│   ├── Sprint 2  Model optimization + explainability (SHAP)
│   ├── Sprint 3  REST API + integration tests
│   ├── Sprint 4  Monitoring dashboard + UX tests
│   └── Sprint 5  Hardening, perf, security
│
├── 1.4  DEPLOYMENT PHASE (Waterfall — 2 weeks)
│   ├── 1.4.1  Testing and UAT
│   ├── 1.4.2  Production deployment (canary 10%)
│   ├── 1.4.3  User training
│   └── 1.4.4  Full cutover + hypercare
│
└── 1.5  CLOSEOUT
    ├── 1.5.1  Lessons learned and post-mortem
    └── 1.5.2  Final documentation
```

### Milestones — Go/No-Go

| # | Milestone | Exit criterion | Target date |
|---|-----------|------------------|------------|
| M1 | Kick-off approved | Charter signed, budget approved | W1 |
| M2 | Data Ready | Data quality score >= 80%, DPIA signed | W3 |
| M3 | Baseline Model | AUC >= 0.75 on validation | W5 |
| M4 | Production-Ready Model | AUC >= 0.85, latency OK, SHAP integrated | W10 |
| M5 | UAT Complete | 0 blocking bugs, user sign-off | W12 |
| M6 | Go Live | Canary stable 3 days, rollback tested | W13 |
| M7 | Project closeout | Lessons learned approved, KPIs 30d post go-live | W17 |

## Estimation — T-Shirt Sizing & Planning Poker

### T-Shirt Sizing reference for AI user stories

```
SIZE    STORY POINTS  TYPICAL EXAMPLES
───────────────────────────────────────────────────────────
XS      1-2           Adding a simple feature, bugfix
S       3             Feature engineering (1 variable), simple API endpoint
M       5             Baseline model training, third-party service integration
L       8             End-to-end ML pipeline, full monitoring dashboard
XL      13            New-component architecture, infrastructure migration
XXL     21            Do NOT plan — break into smaller stories
```

### Velocity & Sprint Capacity

```python
# sprint_capacity.py
from dataclasses import dataclass
from typing import List

@dataclass
class TeamMember:
    name: str
    role: str
    availability_pct: float   # 0.8 = 80%
    story_points_per_sprint: int = 0

def calculate_sprint_capacity(
    team: List[TeamMember],
    sprint_days: int = 10,
    ceremonies_days: float = 1.5,  # Sprint planning + review + retro
) -> dict:
    """Compute a sprint's capacity in person-days and story points."""
    available_days = sprint_days - ceremonies_days

    total_person_days = sum(
        available_days * m.availability_pct
        for m in team
    )
    total_story_points = sum(m.story_points_per_sprint for m in team)

    return {
        "sprint_days": sprint_days,
        "ceremonies_overhead_days": ceremonies_days,
        "team_size": len(team),
        "available_person_days": round(total_person_days, 1),
        "estimated_velocity_sp": total_story_points,
        "focus_factor": round(available_days / sprint_days, 2),
    }

# Example AI project team
team = [
    TeamMember("Alice", "Data Scientist", 0.8, story_points_per_sprint=18),
    TeamMember("Bob",   "ML Engineer",   1.0, story_points_per_sprint=20),
    TeamMember("Carol", "Data Engineer", 0.6, story_points_per_sprint=12),
    TeamMember("David", "PM/PO",         0.5, story_points_per_sprint=0),
]

capacity = calculate_sprint_capacity(team)
print(f"Estimated velocity: {capacity['estimated_velocity_sp']} SP/sprint")
# Estimated velocity: 50 SP/sprint
```

### Agile Gantt — Hybrid presentation format

```
WEEK     1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
         ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤
SCOPING  [==========]
SPRINT 0             [=====]
SPRINT 1                   [=========]
SPRINT 2                               [=========]
SPRINT 3                                           [=========]
SPRINT 4                                                       [=========]
SPRINT 5                                                                   [=]
                     M2   M3           M4          M5         M6
```

### Initial Backlog — AI User Stories

```yaml
# product_backlog.yaml
epic: "Conversion propensity scoring"

user_stories:
  - id: US-01
    title: "Feature engineering — behavioral data"
    as_a: "Data Scientist"
    i_want: "to turn CRM logs into time-based features (sessions/7d, 14d, 30d)"
    so_that: "the model gets quality inputs"
    size: L
    sprint: 1
    definition_of_done:
      - 15 features created and documented in the feature catalog
      - Unit tests (coverage > 90%)
      - Approved by the Chief Sales Officer (business relevance)

  - id: US-02
    title: "XGBoost baseline model"
    as_a: "Data Scientist"
    i_want: "to train an XGBoost model with 5-fold cross-validation"
    so_that: "I establish a baseline AUC >= 0.75"
    size: M
    sprint: 1
    definition_of_done:
      - AUC >= 0.75 on the holdout set
      - MLflow experiment logged
      - Confusion matrix report + classification report

  - id: US-03
    title: "SHAP explainability"
    as_a: "Sales rep"
    i_want: "to see the top 3 reasons for a lead's score"
    so_that: "I tailor my sales approach"
    size: M
    sprint: 2
    acceptance_criteria:
      - SHAP values computed and exposed in the API response
      - Compute time < 50ms per prediction
```

## Deliverables
- Complete WBS and milestones with Go/No-Go exit criteria
- Sprint-by-sprint schedule with computed capacity
- Prioritized backlog (epics + user stories + acceptance criteria)
- Agile Gantt for presentation to the Steering Committee
- Definition of Done and Definition of Ready
- Velocity and drift management plan

## Output format
Specify: total project duration, team size and roles, key date constraints (fiscal, regulatory), preferred management method (SAFe/Scrum/Kanban), project management tool (Jira/Linear/Azure DevOps), the team's Agile experience level.

## Anti-patterns
- ❌ **Rigid fixed Gantt over 18 months**: an illusion of predictability, unmanageable on the experimental AI part
- ❌ **Estimating in absolute person-days** instead of relative points (Planning Poker / T-shirt)
- ❌ **XXL story (21) not broken down**: refuse and split it before planning
- ❌ **Skipping the data "discovery" phase**: starting AI dev without a data quality audit
- ❌ **Milestones without measurable Go/No-Go exit criteria** (e.g. AUC ≥ threshold)
- ❌ **Velocity confused with commitment**: computed capacity ≠ a contractual promise

## Sources
- **PMBOK 7** (PMI 2021) — WBS, milestones, adaptive planning
- **PRINCE2 Agile** — PeopleCert/Axelos (phase-based management + Agile delivery)
- **Grenning J.** — *Planning Poker* (2002) · **Cohn M.** — *Agile Estimating and Planning* (2005) — Story Points
- **SAFe** — PI Planning (scaledagileframework.com)

## See also
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — upstream scope (source of the WBS)
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — schedule baseline → PV
- [`../scrum_master/planning-poker.md`](../scrum_master/planning-poker.md) — relative estimation (Grenning)
- [`../scrum/forecasting-planning.md`](../scrum/forecasting-planning.md) — velocity forecasting
- [`gestion-risques-projet.md`](gestion-risques-projet.md) — schedule risks (RAID)
