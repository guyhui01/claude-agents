# Skill — SAFe Economic Framework (WSJF, Lean Business Case, ROI)
> Certifications: SAFe LPM (Scaled Agile), SAFe POPM 6 (Scaled Agile), SAFe SPC (Scaled Agile)

## Objective
Apply the SAFe economic framework at the Program level — compute the WSJF of Features, build a Lean Business Case for Epics, and steer the ROI of product investments — to make prioritization decisions grounded in economic value.

## WSJF at the Program level (Features)

```
WSJF = Cost of Delay / Job Size

Cost of Delay = Business Value + Time Criticality + Risk Reduction/Opportunity Enablement

SCORING SCALE (modified Fibonacci: 1, 2, 3, 5, 8, 13, 20)
────────────────────────────────────────────────────────────────────
Business Value (BV)    : Direct value for the customer / business
Time Criticality (TC)  : Time urgency (window of opportunity)
RR/OE                  : Risk reduction or opportunity enablement
Job Size               : Estimated effort (story points or T-shirt sizing)
```

## WSJF table — Features template

> **Relative** rating, **smallest = 1 per column**, independent columns, Fibonacci scale (cf. `skills/safe/wsjf.md`).

| ID | Feature | BV | TC | RR/OE | CoD | Size | WSJF | Priority |
|---|---|---|---|---|---|---|---|---|
| F-01 | AI CV scoring | 8 | 8 | 5 | 21 | 5 | **4.2** | 🥈 2 |
| F-02 | HR dashboard | 5 | 3 | 3 | 11 | 1 | **11.0** | 🥇 1 (small job!) |
| F-03 | HRIS API | 3 | 5 | 8 | 16 | 8 | **2.0** | 🥉 3 |
| F-04 | Mobile App | 1 | 1 | 1 | 3 | 13 | **0.2** | ❌ Deprioritized (to split) |

> Smallest per column: BV → F-04 · TC → F-04 · RR/OE → F-04 · Size → F-02. F-02 rises to #1 (smallest job); F-04 deprioritized because it's a large job → to split.

## Lean Business Case — Epic template

```yaml
lean_business_case:
  epic: "EPIC-01 — AI Training Module"
  version: "v1.0"
  date: "2026-05-22"
  owner: "Product Manager — [NAME]"

  problem_context: |
    HR teams lack skills on the deployed AI tools.
    The adoption rate stalls at 42% (target 80%).
    Cost of inaction: -38% of expected productivity not realized.

  proposed_solution: |
    Training module embedded in the product: in-app micro-learning,
    personalized AI coaching, internal certifications.

  business_impacts:
    - "Raise the adoption rate from 42% to 80% in 2 PIs"
    - "Cut external training costs by 30%"
    - "Improve user CSAT from 3.4 to 4.2/5"

  cost_estimate:
    development: "8 Features — ~80 story points — PI-14 to PI-15"
    infrastructure_budget: "€15,000 / year (cloud LMS)"

  value_estimate:
    productivity_gain: "€180,000 / year (38% adoption gap × HR cost)"
    training_reduction: "€25,000 / year"
    annual_roi: "€205,000"
    payback_period: "8 months"

  go_no_go: "GO — positive ROI at 8 months, aligned with OKR KR2"

  key_assumptions:
    - "The in-app module reaches 75% adoption within the first 3 months"
    - "Users spend 20 min/week on training"
```

## Deliverables
- Complete WSJF Features table
- Epic Lean Business Case (YAML / PowerPoint)
- ROI analysis with payback period
- Documented go / no-go recommendation

## Output format
Specify: list of features / epics to evaluate, available cost data, budget constraints, expected return-on-investment horizon.
