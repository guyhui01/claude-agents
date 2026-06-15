# SAFe Skill — WSJF Prioritization

> Certification: SAFe POPM 6 · SAFe LPM
> Agents: AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Formula

```
WSJF = CoD (Cost of Delay) / Job Size
CoD  = Business Value + Time Criticality + RR/OE
```

## Modified Fibonacci scale

```
1 — 2 — 3 — 5 — 8 — 13 — 20
```

## Components

| Component | Question |
|---|---|
| **BV** Business Value | What value for the customer / the business? |
| **TC** Time Criticality | Is there a deadline or market constraint? Does the value decay over time? |
| **RR/OE** Risk Reduction / Opportunity Enablement | Does it reduce a risk or open a future opportunity? |
| **Size** Job Size | Relative size / duration to deliver? |

## Official scoring method (to follow strictly)

1. **Relative estimation** — never score in absolute terms: compare items against each other.
2. **Smallest = 1 per column** — in each column (BV, TC, RR/OE, Size), the smallest item gets **1**, the others are scored relative to it on the Fibonacci scale.
3. **Independent columns** — each column is estimated separately. An item's rank in BV doesn't influence its rank in TC, RR/OE or Size.
4. **Force differentiation** — spread the values across the scale, avoid ties (otherwise the prioritization doesn't decide).
5. **Recompute** at each PI Planning / when estimates evolve.

> ⚠️ Anti-pattern: scoring on a linear 1-10 scale, or reusing a global score inherited from another level (Epic → Feature). Always re-score at the relevant level.

## Calculation table (compliant example)

> Each column does have its smallest item = 1, on different features (independent columns).

```
| Feature   | BV | TC | RR/OE | CoD | Size | WSJF |
|-----------|----|----|-------|-----|------|------|
| Feature A |  8 |  5 |   5   |  18 |   8  |  2.3 |
| Feature B |  3 |  2 |   1   |   6 |   1  |  6.0 |
| Feature C |  1 |  8 |   8   |  17 |   5  |  3.4 |
| Feature D |  5 |  1 |   3   |   9 |   3  |  3.0 |
```

- Smallest per column: BV → C (1) · TC → D (1) · RR/OE → B (1) · Size → B (1)
- WSJF ranking: **B (6.0) > C (3.4) > D (3.0) > A (2.3)**
- Reading: B rises because it's the smallest job (the *Weighted Shortest Job First* mechanic); A drops because it's the biggest (to split rather than override).

## Usage rules

1. **Relative** scoring, **per independent column** (smallest = 1).
2. Consensus with the Business Owners and the ART.
3. Recompute at each PI Planning.
4. High WSJF ≠ always executed first → **sequencing** factors in the **dependencies** (Program Board), distinct from value priority.
5. A high-value Feature with a large Job Size (low WSJF) is **split** — you don't bypass WSJF.

## WSJF workshop (45 min)

```
10 min: Present the features
15 min: Vote BV, TC, RR/OE (cards) — column by column, smallest = 1
10 min: Vote the Job Size — smallest = 1
10 min: Compute and validate the ranking
```
