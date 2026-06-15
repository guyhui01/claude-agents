# Skill — Advanced product forecasting and planning

> Certification: PSPO II · PSPO III
> Agent: AGENT-PO-SCRUM.md

## Objective
Produce reliable, transparent delivery forecasts using empirical data (velocity, throughput) rather than deterministic estimates.

## Forecasting approaches

### 1. Velocity-based forecasting (Story Points)
```
Formula: Number of sprints = Total backlog SP / Average velocity

Example:
- Remaining backlog: 120 SP
- Average velocity S1-S4: 32 SP (±5)
- Forecast: 3.75 sprints → 4 sprints (range: 3.5 to 5)
```

**Best practices:**
- Use the velocity of the last 3-5 sprints (not the overall average)
- Always communicate a range, never an exact date
- Include a 15-20% buffer for the unexpected

### 2. Throughput-based forecasting (no estimation)
```
Throughput = Number of US delivered / sprint (no SP)

Example: 8, 6, 9, 7, 8 US/sprint → median = 8
Backlog: 40 US → 5 sprints (range: 4.5 to 6.5)
```

**Advantage:** removes the estimation debate, more stable.

### 3. Monte Carlo Simulation (probabilistic forecasting)
- Tool: actionableagile.com or Nave
- Input: throughput data from the last 30-60 days
- Output: probability (e.g. 85% chance of delivering before June 15)
- Recommended for forecasts > 3 months

## Planning by horizon (3 levels)

| Horizon | Tool | Accuracy | Use |
|---|---|---|---|
| **Sprint** (2 weeks) | Sprint Planning + velocity | 90% | Team commitment |
| **Quarter** (PI) | Roadmap + story mapping | 70% | Internal stakeholders |
| **Annual** | Now/Next/Later + OKR | 50% | Executive committee |

## Now / Next / Later — Roadmap without dates
```
NOW (current sprint)           NEXT (1-3 months)        LATER (3-12 months)
───────────────────────────────────────────────────────────────────────
[Feature A - delivery          [Feature C - high         [Strategic theme X]
 confirmed]                     priority]                 [Strategic theme Y]
[Feature B - delivery          [Feature D - high         [Exploration Z]
 confirmed]                     priority]
```

## Communicating forecasts to stakeholders

### Communication template
```
DELIVERY FORECAST — [Update date]

Scope: [Feature / Epic concerned]
Remaining scope: [X US / Y SP]

Optimistic scenario  : Sprint [N] — [Date] — 30% probability
Nominal scenario     : Sprint [N+1] — [Date] — 60% probability
Pessimistic scenario : Sprint [N+2] — [Date] — 90% probability

Assumptions: [stable velocity, no major scope change]
Identified risks: [list]
```

## Anti-patterns
- ❌ Promising a fixed date with no buffer
- ❌ Using velocity as a performance target
- ❌ Communicating a single date with no range
- ❌ Ignoring technical debt in forecasts
- ❌ Planning at 100% of capacity (leave 20% for the unexpected)
