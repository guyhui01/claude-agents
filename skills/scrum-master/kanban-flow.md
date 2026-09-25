# Skill — Kanban, Flow & Flow Systems
> Certifications: PSM I · A-CSM · SAFe SSM · ICAgile ICP-ATF

## Objective
Implement and optimize Kanban systems to improve flow, reduce WIP and accelerate value delivery.

## Kanban principles (David Anderson)
```
1. Start with what you do now
2. Pursue evolutionary, incremental change
3. Respect current processes, roles and responsibilities
4. Encourage acts of leadership at all levels
```

## Kanban practices

### Visualize the workflow
```
Standard columns:
  Backlog → To do → In progress → To validate → Done

Advanced columns:
  Backlog → Analysis → In progress → Code Review → Test → Done

Swimlanes (rows):
  - By type: Feature / Bug / Tech debt / Urgent
  - By team: Dev / QA / DevOps
  - By priority: Critical / Normal
```

### Limit WIP (Work In Progress)
```
Rule: max number of simultaneous items per column / per person

Starting formula (Little's Law):
  WIP = Throughput × Cycle Time
  → If Throughput = 5 items/week and Cycle Time = 2 weeks
  → Optimal WIP = 10

Benefits of the WIP Limit:
  ✓ Reduces context switching (- stress)
  ✓ Reveals bottlenecks
  ✓ Speeds up actual throughput
  ✓ Improves quality (less rushing)
```

### Classes of service
| Class | Examples | Rule |
|---|---|---|
| **Expedite** | Critical prod incident | Max WIP = 1, absolute priority |
| **Fixed date** | Regulation, event | Meet the deadline |
| **Standard** | Normal features | FIFO in the column |
| **Intangible** | Tech debt, refactoring | If capacity available |

## Cumulative Flow Diagram (CFD)
```python
import matplotlib.pyplot as plt
import pandas as pd

# CFD data (cumulative items per column over time)
dates = pd.date_range('2026-01-01', periods=30)
backlog = [100 - i*2 for i in range(30)]
in_progress = [10 + i*0.5 for i in range(30)]
done = [i*3 for i in range(30)]

plt.stackplot(dates, backlog, in_progress, done,
              labels=['Backlog', 'In Progress', 'Done'],
              colors=['#ff9999', '#ffcc99', '#99ff99'])
plt.title('Cumulative Flow Diagram')
plt.legend(loc='upper left')
plt.xticks(rotation=45)

# Reading the CFD:
# Wide bands = bottleneck
# Parallel bands = steady flow (good)
# Diverging bands = accumulation = problem
```

## Kanban Cadences (meetings)
| Cadence | Frequency | Goal |
|---|---|---|
| Stand-up | Daily | Walk the board |
| Replenishment | Weekly | Feed the backlog |
| Delivery planning | Weekly/bi-weekly | Prioritize the next items |
| Service Delivery Review | Monthly | Flow metrics (Flow Review) |
| Operations Review | Monthly | Service health |
| Risk Review | Monthly | Blockers, risks |
| Strategy Review | Quarterly | Strategic alignment |

## Deliverables
- Configured Kanban board (Jira / Trello / Azure DevOps)
- WIP Limits defined and applied
- Documented classes of service
- Flow Metrics dashboard (Cycle Time, Throughput, CFD)

## Output format
Specify: type of work (maintenance / development / support) · Kanban maturity level · current WIP (estimated) · tool used · identified bottleneck

## See also
- [`skills/scrum/kanban-flow.md`](../scrum/kanban-flow.md) — Scrum+Kanban practice (PSK-I, Scrum.org): using Kanban within a Scrum frame on the team / Product Owner side
