# Skill — Digital and AI Transformation ROI Calculation
> Certifications: CFA Level I (CFA Institute), CMA (IMA), SAFe LPM (Scaled Agile), PMP (PMI)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **ROI · Payback** (Brealey, Myers & Allen) · **Forrester TEI** (Total Economic Impact — tangible/intangible valuation) · **Time-to-Value** · NPV coupling (see cost-benefit-analysis)

## Objective
Calculate and present the ROI of a digital or AI transformation — methodology, quantification of tangible and intangible gains, Time-to-Value, scenario comparison — to arbitrate investments.

## ROI methodology — Framework

```
ROI = (Net benefits / Total costs) × 100

Net benefits = Total benefits − Total costs

TYPES OF BENEFITS
────────────────────────────────────────────────────────────
Tangible (quantifiable)
  ✓ Productivity gains (time × hourly cost)
  ✓ Operational cost reduction
  ✓ Error and rework reduction
  ✓ Revenue increase (if applicable)
  ✓ Recruitment / turnover cost reduction

Intangible (to value)
  ✓ Employee satisfaction (CSAT → retention)
  ✓ Improved employer brand
  ✓ Regulatory compliance (fine avoidance)
  ✓ Competitive advantage (time-to-market)
```

## ROI calculation — Complete template

```python
# AI Transformation ROI calculator
def calculate_roi(
    affected_headcount: int,
    time_saved_hours_week: float,
    avg_hourly_cost: float,
    weeks_per_year: int = 46,
    adoption_rate: float = 0.80,
    
    development_cost: float = 0,
    annual_infrastructure_cost: float = 0,
    training_cost: float = 0,
    change_management_cost: float = 0,
    
    horizons_years: list = [1, 2, 3]
) -> dict:
    
    # Gross annual gain
    gross_annual_gain = (
        affected_headcount
        * time_saved_hours_week
        * weeks_per_year
        * avg_hourly_cost
        * adoption_rate
    )
    
    # Costs
    initial_investment = development_cost + training_cost + change_management_cost
    annual_recurring_cost = annual_infrastructure_cost
    
    results = {}
    for n in horizons_years:
        total_cost = initial_investment + (n * annual_recurring_cost)
        total_benefit = n * gross_annual_gain
        roi = ((total_benefit - total_cost) / total_cost) * 100
        results[f"year_{n}"] = {
            "gross_gain": round(total_benefit),
            "total_cost": round(total_cost),
            "roi_pct": round(roi, 1),
            "net_benefit": round(total_benefit - total_cost)
        }
    
    # Payback period (in months)
    payback_months = round((initial_investment / (gross_annual_gain / 12)), 1)
    results["payback_months"] = payback_months
    
    return results

# EXAMPLE — AI HR solution (90 affected employees)
results = calculate_roi(
    affected_headcount=90,
    time_saved_hours_week=2.0,
    avg_hourly_cost=60,
    adoption_rate=0.80,
    development_cost=180_000,
    annual_infrastructure_cost=18_000,
    training_cost=15_000,
    change_management_cost=20_000,
)
# gross_annual_gain = 90 × 2 × 46 × 60 × 0.80 = €397,440
# initial_investment = €215,000 · recurring = €18,000/year
# Result: ROI Y1=70.6%, Y2=216.7%, Y3=343.2% | Payback=6.5 months
```

## Valuing intangibles

| Intangible | Valuation method | Estimated value |
|---|---|---|
| HR turnover reduction (+5% retention) | Replacement cost × positions × reduction rate | €75,000 / year |
| AI Act fine avoidance (compliance) | Max fine × probability without project | €50,000 (10% probability × €500K max) |
| Employer NPS gain | Accelerated recruitment value | €30,000 / year |

## ROI presentation template — Executive committee

```
AI HR TRANSFORMATION ROI — Management Board summary
═══════════════════════════════════════════════════════════

INVESTMENT  : €233,000  (215K initial + 18K recurring Y1)
ROI YEAR 1  : 71%   (net gain €164,000)
ROI YEAR 3  : 343%  (net gain €923,000)
PAYBACK     : 6.5 months

KEY GAINS
─────────────────────────────────────────────────────────
Productivity     : 90 employees × 2 h/week reclaimed
                    (≈ €397K/year, 80% adoption)
Intangibles      : turnover -5% (€75K/year), AI Act fine
                    avoidance (€50K), employer NPS (€30K/year)
Compliance       : DPIA validated by CNIL — fine risk under control

MAIN RISK   : 60% adoption (vs. 80%) → Y3 ROI ~232% (still positive)
```

## Deliverables
- Documented ROI calculation (Python / Excel)
- Optimistic / realistic / pessimistic scenarios
- Intangible valuation
- 1-page executive-committee slide

## Output format
Specify: the affected headcount, estimated time savings, average hourly cost, project costs, analysis horizon.

## Anti-patterns
- ❌ **Raw undiscounted ROI** presented as an NPV: over 3 years, discount it (see `cost-benefit-analysis.md`)
- ❌ **Ignoring the adoption rate**: an ROI calculated at 100% adoption is unrealistic (weight it)
- ❌ **Intangibles unvalued OR overvalued** with no method (use a framework like Forrester TEI)
- ❌ **Productivity gains = 100% converted to €**: reclaimed time is not always reallocated
- ❌ **Payback with no discounting** for long horizons (discounted payback)
- ❌ **Presenting a single ROI figure** with no range or pessimistic scenario

## Sources
- **Brealey R., Myers S., Allen F. & Edmans A.** — *Principles of Corporate Finance*, McGraw-Hill, 14th ed. (2022) — ROI, Payback
- **Forrester** — *Total Economic Impact™ (TEI)* — benefit + risk + flexibility valuation; founding Forrester report (2008)
- **WACC / discounted payback** — for long horizons (NPV coupling)

## See also
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — NPV/IRR (discounted view complementing ROI)
- [`business-case-ia.md`](business-case-ia.md) — ROI embedded in the business case + scenarios
- [`reporting-financier.md`](reporting-financier.md) — executive-committee reporting
- [`../consultant_ia/estimation-roi-rapide.md`](../consultant_ia/estimation-roi-rapide.md) — quick ROI (scoping)
- [`../consultant_ia/transformation-digitale.md`](../consultant_ia/transformation-digitale.md) — overall AI transformation
