# Skill — SAFe Economic Framework

> Certification: SAFe LPM · SAFe POPM 6
> Agent: AGENT-PO-SAFE.md

## Objective
Apply the SAFe economic framework to make prioritization decisions based on economic value, cost of delay and value flow.

## The 4 SAFe economic mechanisms

### 1. Understand the system economics
```
REVENUE                COSTS
────────────────       ──────────────────
+ Features delivered  - Development cost
+ Time to market      - Coordination cost
+ Customer satisfaction - Tech-debt cost
+ New revenue lines   - Cost of Delay (CoD)
```

**Key principle:** the optimal decision maximizes revenue AND minimizes costs, including the cost of delay.

### 2. Cost of Delay (CoD)

CoD is **the value lost each week** a feature or epic is not delivered.

```
Typical CoD profiles:

a) Standard (linear)
   Value  │ ████████████████████
          │ ████████████████████
          └─────────────────────► Time
   → Constant cost per week of delay

b) Fixed Date (critical deadline)
   Value  │                 ████
          │            ██████
          └─────────────────────► Time
   → Zero value after the deadline (e.g. competitor launch)

c) Intangible (progressive urgency)
   Value  │ ████████████████████
          │ ██████
          └─────────────────────► Time
   → Urgency rises over time (regulatory compliance)
```

### 3. WSJF — Economic prioritization

```
WSJF = CoD / Job Size (duration of the work)

CoD = Business Value + Time Criticality + Risk Reduction/Opportunity Enablement

Scoring example (relative, smallest = 1 per column · Fibonacci: 1, 2, 3, 5, 8, 13, 20):

Feature      BV  TC  RR/OE  CoD  Size  WSJF
──────────────────────────────────────────────
Feature A     5   5    3     13    5    2.6
Feature B     3   8    8     19    3    6.3  ← Priority #1
Feature C     1   2    2      5    1    5.0  ← Priority #2
Feature D     8   1    1     10    8    1.3
```

### 4. Decentralized Decision-Making

**Principle:** decide at the lowest possible level, closest to the information.

```
CENTRALIZED DECISIONS (Portfolio)
  → Investments > defined threshold
  → Major architecture changes
  → New Value Streams

DECENTRALIZED DECISIONS (ART / Team)
  → Feature prioritization within the PI
  → Technical choices
  → Scope of a US
  → Sprint trade-offs
```

**Golden rule:** if the decision can be made locally without coordination, delegate it.

## Lean Portfolio Management — Agile Budgets

### CapEx vs OpEx in an Agile context
```
Traditional model            Lean-Agile model
────────────────────         ──────────────────────
Project budget (CapEx)   →   Value Stream budget (OpEx)
Fixed-duration project   →   Continuous ART funding
Per-project justification →  OKR + flow metrics
Annual reallocation      →   PI-by-PI adjustment
```

### Portfolio guardrails
- Defined Value Stream allocation % (e.g. 60% core / 30% growth / 10% explore)
- Lean Business Case approval threshold (e.g. > €500K → committee)
- Strategic reserve (e.g. 20% unallocated capacity)

## Practical application — Economic prioritization meeting

### Agenda (90 min)
1. Portfolio Kanban review (20 min)
2. WSJF computation of the new features/epics (30 min)
3. Prioritization decisions (20 min)
4. Budget adjustment if needed (20 min)

### Economic flow visualization
```
Investment     Value Stream   Time to Market   Business Outcome
(Cost)    →    (Work)     →   (Delay)      →   (ROI)
[€€€]          [Features]    [Weeks]           [€€€€€]
```
