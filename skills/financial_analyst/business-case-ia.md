# Skill — Business Case for AI and Digital Transformation Projects
> Certifications: CFA Level I (CFA Institute), PMI-PBA (PMI), PMP (PMI), SAFe LPM (Scaled Agile)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **NPV · ROI · Payback** (Brealey, Myers & Allen — *Principles of Corporate Finance*) · **PMI Business Case** · scenario analysis (sensitivity)

## Objective
Build a complete business case for an AI or digital transformation project — benefit quantification, cost estimation, ROI analysis, scenarios — to secure the budget decision from leadership.

## Complete Business Case Template

### 1. Executive Summary (1/2 page)

```
PROJECT: [NAME] | SPONSOR: [NAME] | DATE: [DATE]
BUDGET REQUESTED: [€X] | ESTIMATED ROI: [X%] | PAYBACK: [X months]

RECOMMENDATION: [GO / NO GO / TO REFINE]
Justification: [2 sentences max]
```

### 2. Problem and Opportunity

```
CURRENT STATE (AS-IS)
────────────────────────────────────────────────────────────
Process involved   : [e.g. Processing HR candidate files]
Volume             : [e.g. 15,000 files / year]
Average time       : [e.g. 45 min / file]
Current cost       : [e.g. 45 min × 15,000 × €60 / h = €675,000 / year]
Error rate         : [e.g. 12% avoidable late rejections]

TARGET STATE (TO-BE)
────────────────────────────────────────────────────────────
Improved process   : [e.g. AI scoring + HR validation]
Target avg time    : [e.g. 15 min / file]
Estimated time gain: [e.g. 30 min × 15,000 × €60 / h = €450,000 / year]
Quality improvement: [e.g. Rejection rate → 4%]
```

### 3. Cost / Benefit Analysis

```yaml
financial_analysis:
  horizon: 3  # years
  
  costs:
    initial_investment:
      development: 180_000
      cloud_infrastructure: 25_000
      team_training: 15_000
      change_management: 20_000
      total_capex: 240_000
      
    annual_recurring_costs:
      maintenance_evolution: 30_000
      cloud_infrastructure: 18_000
      user_support: 12_000
      total_opex: 60_000
      
  annual_benefits:
    productivity_gains: 450_000    # 30 min saved × 15K cases
    error_reduction: 45_000        # Late rejections avoided
    external_training_reduction: 25_000
    total_benefits: 520_000
    
  results:
    total_cost_3yr: 420_000        # 240K + 3×60K
    total_benefits_3yr: 1_560_000  # 3×520K
    net_benefit_3yr: 1_140_000
    roi_3yr: "271%"
    payback_period: "5.5 months"
    npv_rate_10pct: 875_000
```

### 4. Risk Analysis

| Risk | Probability | Impact | Mitigation | Impact on ROI |
|---|---|---|---|---|
| Adoption < 70% | Medium | High | Change management plan | ROI → 180% |
| CNIL DPIA delay | High | Medium | Start DPIA at D-60 | Payback → 8 months |
| Model performance < 85% | Low | High | Sprint 1-2 pilot | Stop if < threshold |

### 5. Scenarios

| Scenario | Assumption | 3-year ROI | Payback |
|---|---|---|---|
| Optimistic | 90% adoption, gains +20% | 340% | 4 months |
| Realistic | 75% adoption, nominal gains | 271% | 5.5 months |
| Pessimistic | 50% adoption, gains -30% | 120% | 11 months |

## Deliverables
- Complete business case (Word / PowerPoint document)
- Excel financial model (costs, benefits, scenarios)
- 1-page executive summary
- Executive-committee presentation

## Output format
Specify: the AI project at hand, available volume data, HR costs, indicative budget, analysis horizon (2-3-5 years).

## Anti-patterns
- ❌ **Business case with no explicit assumptions**: figures "out of thin air," not challengeable
- ❌ **Raw ROI with no discounting**: over 3 years, also present the NPV (see `cost-benefit-analysis.md`)
- ❌ **A single scenario**: always optimistic / realistic / pessimistic (sensitivity analysis)
- ❌ **Inflated intangible benefits** with no valuation method
- ❌ **Forgetting the change-management cost** (often 15-20% of the total)
- ❌ **No stop criterion**: plan the "kill" if the pilot doesn't reach the threshold

## Sources
- **Brealey R., Myers S., Allen F. & Edmans A.** — *Principles of Corporate Finance*, McGraw-Hill, 14th ed. (2022) — NPV, ROI, Payback
- **PMI** — *Business Case* (PMBOK 7, 2021 / Business Analysis)
- **Forrester** — *Total Economic Impact™ (TEI)* — 4-component methodology (costs, benefits, flexibility, risk); founding Forrester report (2008)

## See also
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — NPV/IRR and TCO (build/buy/cloud)
- [`roi-transformation.md`](roi-transformation.md) — detailed ROI calculation + intangibles
- [`budget-projet.md`](budget-projet.md) — operational budget derived from the business case
- [`../consultant_ia/estimation-roi-rapide.md`](../consultant_ia/estimation-roi-rapide.md) — quick version (scoping)
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — product value alignment
