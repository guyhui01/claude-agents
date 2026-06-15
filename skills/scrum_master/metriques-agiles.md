# Skill — Agile Metrics & Value Steering
> Certifications: PSM I/II · SAFe SSM · SAFe SASM · A-CSM

## Objective
Use Agile metrics to measure performance, identify dysfunctions and continuously improve value delivery.

## Scrum team metrics (operational level)

### Velocity
```
Definition: Sum of story points completed (Done) per sprint
Calculation: Average of the last 3-5 sprints
Use        : Planning (how much can we take on?)
Pitfalls   : Don't pressure the team to raise velocity
             Don't compare velocities between teams
```

### Burndown Chart
```python
import matplotlib.pyplot as plt
import numpy as np

sprint_days = list(range(10))  # 2-week sprint = 10 working days
planned = [50, 45, 40, 35, 30, 25, 20, 15, 10, 0]  # Ideal
actual = [50, 48, 44, 42, 38, 35, 28, 22, 15, 8]   # Actual

plt.figure(figsize=(10, 5))
plt.plot(sprint_days, planned, 'b--', label='Ideal', linewidth=2)
plt.plot(sprint_days, actual, 'r-', label='Actual', linewidth=2)
plt.fill_between(sprint_days, planned, actual, alpha=0.1, color='red')
plt.title('Sprint Burndown — Sprint 15')
plt.xlabel('Sprint days')
plt.ylabel('Remaining Story Points')
plt.legend()
plt.grid(True, alpha=0.3)
```

### Cycle Time & Lead Time
```
Lead Time   = Delivery date - Story creation date
Cycle Time  = Delivery date - Development start date
Throughput  = Number of items delivered per unit of time

Goal:
  - Reduce Lead Time (value to the customer faster)
  - Stabilize Cycle Time (predictability)
  - Increase Throughput (more value delivered)
```

## Scrum Master dashboard (Jira / Monday / Azure DevOps)
| Metric | Frequency | Alert threshold |
|---|---|---|
| Sprint Goal met (%) | Per sprint | < 70% |
| Velocity (trend) | Per sprint | Drop > 20% |
| Burndown variance | Daily | > 20% behind at mid-sprint |
| Open impediments | Weekly | > 3 open > 5 days |
| Cycle Time (average) | Monthly | > 2x the norm |
| Team Happiness | Per sprint | < 6/10 |

## SAFe metrics (Program level)
```
ART Velocity          → Sum of the velocity of all ART teams
PI Predictability     → % of PI objectives met
Features Delivered    → Number of Done features per PI
Business Value        → Value score of the delivered features
Innovation Rate       → % capacity dedicated to innovation
```

## Flow Metrics (Kanban / SAFe)
| Metric | Definition |
|---|---|
| **Flow Velocity** | Items delivered / period |
| **Flow Time** | Average end-to-end duration |
| **Flow Load** | Current WIP |
| **Flow Distribution** | % Business Features vs Tech Debt vs Risk |
| **Flow Efficiency** | Active time / total Lead Time |

## Deliverables
- Scrum metrics dashboard (Jira / Azure DevOps)
- Team performance report (monthly)
- Trend analysis (quarterly)
- Data-driven improvement recommendations

## Output format
Specify: management tool (Jira, Azure DevOps, Linear) · priority metrics · analysis period · audience (team, management, exec committee)
