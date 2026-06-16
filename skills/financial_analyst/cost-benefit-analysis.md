# Skill — Cost/Benefit Analysis and TCO
> Certifications: CFA Level I (CFA Institute), CMA (IMA), PMI-PBA (PMI), FRM (GARP)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **TCO** (Gartner) · **NPV & IRR** (Brealey, Myers & Allen — *Principles of Corporate Finance*) · **DCF** (discounted cash flows) · Build/Buy/Cloud comparison

## Objective
Perform a complete cost/benefit analysis and calculate the TCO (Total Cost of Ownership) of an IT/AI solution — build vs. buy vs. cloud comparison, 3-5 year analysis — to guide investment decisions.

## TCO — Build vs. Buy vs. Cloud

```yaml
tco_comparison:
  solution: "AI HR Platform"
  horizon_years: 3
  
  option_build:
    description: "Custom development"
    initial_investment:
      internal_team_dev: 200_000
      architecture: 40_000
      total: 240_000
    annual_costs:
      maintenance: 45_000
      infrastructure: 25_000
      evolution: 30_000
      total: 100_000
    tco_3yr: 540_000
    advantages: ["Full control", "Differentiation", "Data in-house"]
    risks: ["Lead time > 12 months", "Team dependency", "Real cost often × 1.5"]
    
  option_buy:
    description: "Vendor solution (SaaS)"
    initial_investment:
      implementation: 30_000
      training: 15_000
      total: 45_000
    annual_costs:
      license: 80_000
      support: 12_000
      total: 92_000
    tco_3yr: 321_000
    advantages: ["Time-to-market 3 months", "Updates included", "Vendor support"]
    risks: ["Vendor lock-in", "Less customization", "Rising license cost"]
    
  option_cloud_native:
    description: "LLM API (Anthropic/OpenAI) + light dev"
    initial_investment:
      integration_dev: 60_000
      training: 10_000
      total: 70_000
    annual_costs:
      api_usage: 36_000  # volume-based
      maintenance: 20_000
      total: 56_000
    tco_3yr: 238_000
    advantages: ["Maximum flexibility", "Usage-proportional cost", "Continuous innovation"]
    risks: ["AI provider dependency", "Variable costs", "GDPR to manage"]
    
  recommendation: "Cloud Native option — lowest TCO + flexibility"
```

## Cost/benefit analysis — NPV

```python
def calculate_npv(
    net_annual_flows: list,  # [year1, year2, year3, ...]
    initial_investment: float,
    discount_rate: float = 0.10  # 10% standard
) -> float:
    
    npv = -initial_investment
    for year, flow in enumerate(net_annual_flows, 1):
        npv += flow / (1 + discount_rate) ** year
    return round(npv)

# EXAMPLE — Cloud Native option
flows = [520_000 - 56_000, 520_000 - 56_000, 520_000 - 56_000]  # benefits - OPEX
npv = calculate_npv(flows, initial_investment=70_000, discount_rate=0.10)
# NPV = €975,000 → Very attractive investment
```

## IRR — internal rate of return

The **IRR (Internal Rate of Return)** is the discount rate that brings the NPV to zero.
Decision rule: **invest if IRR > cost of capital (WACC)**.

```python
# No dependency: bisection search. (In practice: numpy_financial.irr)
def calculate_irr(net_annual_flows: list, initial_investment: float) -> float:
    def npv(rate):
        v = -initial_investment
        for year, flow in enumerate(net_annual_flows, 1):
            v += flow / (1 + rate) ** year
        return v
    low, high = 0.0, 1.0          # 0% to 100%
    for _ in range(100):          # bisection
        mid = (low + high) / 2
        if npv(mid) > 0: low = mid
        else:            high = mid
    return round(mid * 100, 1)

# EXAMPLE — Cloud Native option (flows above)
irr = calculate_irr(flows, initial_investment=70_000)
# Very high IRR (annual flows >> investment) → well above a ~10% WACC
```
> Limit: the IRR assumes flows are reinvested at the IRR rate (optimistic). For non-conventional flows (multiple sign changes), prefer the **NPV** or the **Modified IRR (MIRR)**.

## Decision comparison table

| Criterion | Build | Buy | Cloud Native |
|---|---|---|---|
| 3-year TCO | €540,000 | €321,000 | €238,000 |
| Time-to-market | 12-18 months | 3-4 months | 4-6 months |
| Flexibility | ●●● | ●○○ | ●●● |
| Technical risk | ●●● | ●○○ | ●●○ |
| GDPR compliance | ●●● | ●●○ | ●●○ |
| **Overall score** | **6/10** | **7/10** | **9/10** |

## Deliverables
- TCO analysis over 3-5 years (3 options)
- NPV / IRR calculation per option
- Multi-criteria decision table
- Documented recommendation with justification

## Output format
Specify: the options to compare (build/buy/cloud), the analysis horizon, the discount rate, GDPR/security constraints.

## Anti-patterns
- ❌ **TCO with no hidden costs**: forgetting training, change management, technical debt, exit/reversibility
- ❌ **Comparing options over different horizons**: always the same horizon + same rate
- ❌ **NPV with no justification for the discount rate**: the rate = cost of capital (WACC), to make explicit
- ❌ **Ignoring the IRR / cost of capital**: an NPV positive at 10% may be negative at 15%
- ❌ **Underestimated "Build"**: the real cost of internal development is often × 1.5
- ❌ **TCO = license price only**: include operations, support, version upgrades

## Sources
- **Gartner** — *Total Cost of Ownership (TCO)* — concept created by Bill Kirwin (Gartner, 1987), the industry's reference methodology
- **Brealey R., Myers S., Allen F. & Edmans A.** — *Principles of Corporate Finance*, McGraw-Hill, 14th ed. (2022) — NPV, IRR, DCF
- **WACC** — weighted average cost of capital (discount rate)

## See also
- [`business-case-ia.md`](business-case-ia.md) — business case using NPV/IRR
- [`roi-transformation.md`](roi-transformation.md) — ROI and payback
- [`budget-projet.md`](budget-projet.md) — TCO → operational budget
- [`../consultant_ia/cadrage-poc-ia.md`](../consultant_ia/cadrage-poc-ia.md) — build/buy/cloud decision in scoping
- [`../juridique_ia/contrats-ia.md`](../juridique_ia/contrats-ia.md) — reversibility and exit costs (SaaS)
