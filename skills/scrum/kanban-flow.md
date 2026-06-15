# Skill — Kanban Flow & Flow Metrics
> Certifications: PSK-I (Professional Scrum with Kanban)

## Objective
Visualize and optimize the Scrum team's workflow by applying Kanban practices.

## 4 Kanban practices in Scrum (PSK)
1. **Visualize the workflow**: columns representing the real states of the work
2. **Limit WIP** (Work In Progress): maximum items per column
3. **Actively manage flow**: identify and unblock impediments
4. **Inspect and adapt**: improve the process from the metrics

## Flow metrics
| Metric | Definition | Use |
|---|---|---|
| **WIP** | Number of items in progress | Limit it to avoid multitasking |
| **Throughput** | Items completed / sprint | Delivery predictability |
| **Cycle Time** | Time from "In progress" → "Done" | Per-item delivery speed |
| **Work Item Age** | Time since an item started | Detect stuck items |

## Service Level Expectation (SLE)
- Probabilistic commitment on cycle time
- Example: "85% of stories are completed in under 5 days"
- Computed from the history of the last 10-20 cycles

## Kanban-optimized Scrum Board
```
Product Backlog → Refinement → Sprint Backlog → In Progress [WIP: 3] → Review → Done
```

## Little's Law
```
Average Cycle Time = Average WIP / Average Throughput
```
Reducing WIP = mechanically reducing cycle time.

## Deliverables
- Kanban board configured with WIP limits
- Flow-metrics report (cycle time, throughput, WIP)
- SLE documented and shared with the team
- Flow-improvement recommendations

## Output format
Specify: team size · backlog type (features, bugs, support) · tool used (Jira, Azure DevOps, GitHub)

## See also
- [`skills/scrum_master/kanban-flow.md`](../scrum_master/kanban-flow.md) — Kanban Method (David Anderson 2010): complete operational rollout at Scrum Master level (Classes of service, CFD, Kanban Cadences)
