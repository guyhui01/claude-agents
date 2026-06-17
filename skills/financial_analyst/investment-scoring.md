# Skill — Investment Scoring and Prioritization
> Certifications: SAFe LPM (Scaled Agile), CFA Level I (CFA Institute), PMI-PBA (PMI), FRM (GARP)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **WSJF** (SAFe POPM — relative scoring per column) · **PMI Standard for Portfolio Management** · **Risk/Value** matrix · weighted multi-criteria scoring

## Objective
Score and prioritize a portfolio of IT/AI investments — multi-criteria grids, portfolio WSJF, risk/value scoring — to allocate budgets to the projects with the highest strategic impact.

## Multi-criteria scoring grid — Template

| Criterion | Weight | Project A | Project B | Project C |
|---|---|---|---|---|
| Strategic alignment | 25% | 9 | 6 | 8 |
| Estimated ROI (3 years) | 25% | 8 | 9 | 5 |
| Technical feasibility | 20% | 7 | 8 | 9 |
| Time-to-Value | 15% | 6 | 9 | 7 |
| Risk level (inv.) | 15% | 7 | 6 | 8 |
| **Weighted score** | | **7.5** | **7.6** | **7.3** |
| **Rank** | | **2** | **1** | **3** |

## WSJF Portfolio — Epic level

```yaml
wsjf_portfolio:
  period: "PI-12 to PI-14"
  available_budget: 500_000
  
  # Relative scoring, smallest = 1 per column, Fibonacci (see skills/safe/wsjf.md)
  # size = relative size; duration in days and budget tracked in the multi-criteria grid
  epics:
    - id: "EPIC-01"
      title: "AI Training Module"
      bv: 3
      tc: 1
      rr_oe: 1
      size: 3
      cod: 5
      wsjf: 1.7
      rank: 3
      
    - id: "EPIC-02"
      title: "AI CV Scoring"
      bv: 5
      tc: 5
      rr_oe: 3
      size: 1
      cod: 13
      wsjf: 13.0
      rank: 1
      estimated_budget: 150_000
      
    - id: "EPIC-03"
      title: "HRIS Integration"
      bv: 1
      tc: 3
      rr_oe: 2
      size: 2
      cod: 6
      wsjf: 3.0
      rank: 2
      estimated_budget: 180_000
      
  recommended_sequence: ["EPIC-02", "EPIC-03", "EPIC-01"]
  budget_phases_1_2: 330_000  # Within the envelope
```

## Risk / Value Matrix

```
                    HIGH VALUE
                         │
  QUICK WIN             │    STRATEGIC PROJECT
  (Do quickly)          │    (Invest as priority)
  Low risk,             │    High risk, high value
  high value            │
────────────────────────┼────────────────────────────────
  LOW risk              │    HIGH risk
────────────────────────┼────────────────────────────────
  FILL-IN               │    AVOID
  (Do if capacity)      │    (Defer or don't do)
  Low risk,             │    High risk,
  low value             │    low value
                         │
                    LOW VALUE
```

## Deliverables
- Complete multi-criteria scoring grid
- Documented portfolio WSJF
- Risk / Value matrix
- Reasoned prioritization recommendation

## Output format
Specify: the list of projects / epics to score, strategic decision criteria, available budget, capacity constraints.

## Anti-patterns
- ❌ **WSJF in absolute terms**: scoring in monetary value instead of relative per column (smallest = 1)
- ❌ **Multi-criteria scoring with no weights**: summing scores with no strategic weighting
- ❌ **Ignoring the capacity/budget constraint**: prioritizing beyond the available envelope
- ❌ **Risk/Value matrix with no thresholds**: subjective placement of projects
- ❌ **Confusing investment scoring (financial) and WSJF (value flow)**: complementary uses

## Sources
- **SAFe** — **WSJF** (Weighted Shortest Job First) — scaledagileframework.com
- **PMI** — *The Standard for Portfolio Management* (4th ed. 2017)
- **Reinertsen D.** — *Cost of Delay* (*Principles of Product Development Flow*, 2009)

## See also
- [`../safe/wsjf.md`](../safe/wsjf.md) — detailed WSJF method
- [`../chef_projet_ia/gouvernance-portefeuille.md`](../chef_projet_ia/gouvernance-portefeuille.md) — portfolio prioritization (PM view)
- [`business-case-ia.md`](business-case-ia.md) — business case per initiative
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — NPV/IRR to break ties
