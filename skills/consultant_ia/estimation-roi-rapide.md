# Skill — AI Project ROI Calculation
> Certifications: CAP IABAC · AI+ Business · PMI-ACP

## Objective
Build a **credible, defensible** AI business case: an ROI calculation backed by a recognized financial method, traceable assumptions, and scenarios — to convince decision-makers without over-promising. A realism benchmark to set up front: according to McKinsey (*The State of AI*, 2024-2025), **over 80% of organizations do not yet see a tangible enterprise-level EBIT impact** from generative AI; value is captured mainly at the level of redesigned processes. A good business case therefore reasons in **measurable process gains**, not in a macro promise.

## Valuation methodological framework
- **NPV, IRR, Payback** — investment-evaluation fundamentals (cash-flow discounting).
- **Forrester Total Economic Impact™ (TEI)** — standard framework (20+ years) in **4 components**: *Benefits*, *Costs*, *Flexibility* (option value of future investments), *Risk* (probability that costs/benefits deviate). Adding risk and flexibility gives the business case its credibility.
- **Gartner TCO (Total Cost of Ownership)** — full lifecycle cost (build + run + change + exit), beyond the project cost alone.
- **Discount rate**: use the company's WACC (often 8-12% in large accounts) — confirm with the CFO, do not make it up.

## AI Business Case structure

### 1. Investments (costs — TCO)
| Item | Description | Estimated amount |
|---|---|---|
| Development | PoC, development, integration | €X |
| Infrastructure | Cloud, GPU, licenses (usage-based LLM API) | €X/year |
| Data | Collection, cleaning, labeling | €X |
| Change management | Training, support, change management | €X |
| Compliance | AI Act / GDPR compliance, audit | €X |
| Maintenance (run) | Run, monitoring, retraining, evolutions | €X/year |
| **Total 3-year TCO** | | **€X** |

### 2. Benefits (gains)
| Type | Indicator | Annual value |
|---|---|---|
| **Direct gains** | Operating-cost reduction | €X |
| | Automation of manual tasks | X days/year × loaded cost |
| | Reduction of errors / rework | €X |
| **Indirect gains** | Improved customer satisfaction | X% → revenue impact |
| | Faster time-to-market | X weeks saved |
| | Churn reduction | X% → €X revenue preserved |

> Distinguish **hard gains (cash, verifiable)** from **soft gains (estimated)**: an executive committee will fund mostly on the former. Document each gain assumption (who validates it?).

## Key formulas
```
ROI (%)        = (Total discounted gains - Investments) / Investments × 100

Payback        = Initial investment / Net annual gains   (in years)

NPV            = Σ [ Cash_flow_n / (1 + rate)^n ] - Initial investment      (n = 1..N)

IRR            = rate that makes NPV zero (NPV = 0)
                 → project profitable if IRR > cost of capital (WACC)
```
> **NPV > 0** ⇒ value-creating project. **IRR > WACC** ⇒ return above the cost of capital. Present both: the NPV speaks to the CFO, the payback reassures the sponsor.

## 5-step calculation method
1. **Identify the use case**: precise scope, volume processed, frequency.
2. **Quantify the current state (baseline)**: current cost/time measured, not guessed.
3. **Estimate the AI improvement**: % automation, error reduction — sourced on the PoC if available.
4. **Project over 3 years**: realistic ramp-up curve (gradual adoption, not 100% on day 1).
5. **Compute ROI, NPV, IRR, payback** in **3 scenarios** (pessimistic / realistic / optimistic) + sensitivity analysis on the 2-3 most structuring assumptions.

## ROI orders of magnitude by use-case type *(indicative — to be calibrated, NOT a reference)*
> ⚠️ These ranges are **indicative scoping benchmarks**, not sourced market data. Real ROI depends on the context (volumes, data maturity, execution quality, adoption). McKinsey reminder: >80% of organizations do not yet see an enterprise EBIT impact. **Always recompute on the client's real baseline** — never present these figures as a promise.

| Use-case type | Typical ROI profile | Indicative payback |
|---|---|---|
| Repetitive-task automation (RPA + AI) | High, fast | Short |
| Content generation / writing assistance | High, fast | Short |
| Chatbot / customer self-care | Medium to high | Medium |
| Prediction (churn, demand, default) | Medium, deferred | Medium to long |
| Computer vision / quality control | Variable (hardware CAPEX) | Long |

## Worked example — Logistics / transport (3PL, anonymized)
**Context**: regional logistics provider, fleet of ~180 vehicles, ~95,000 deliveries/month. Project: AI delivery-route optimization.
- **3-year TCO**: ~€1.2M *(dev + platform + TMS integration + change + run)*.
- **Annual gains**: −8% km driven (fuel + driver hours) ≈ €520K/year; −1.5 pt of failed deliveries ≈ €90K/year. Total ≈ €610K/year.
- **Results** *(9% discount rate, 3-year horizon, realistic scenario)*: payback ≈ **14 months**, NPV ≈ **+€0.4M**, IRR ≈ **28%** (> WACC).
- **Scenarios**: pessimistic (−5% km) payback ~22 months; optimistic (−11%) payback ~10 months.

> **Illustrative** figures: to be recomputed on the real baseline (cost/km, failure rate, client WACC).

## Anti-patterns
- **Soft gains presented as cash**: inflating ROI with non-monetized "customer satisfaction" → a CFO detects it and discredits the whole case.
- **No measured baseline**: with no quantified current state, the gain cannot be demonstrated.
- **100% ramp-up on day 1**: ignoring the adoption curve overestimates year-1 ROI.
- **Forgetting the run (maintenance)**: counting the build without the recurring cost (usage-based LLM API, retraining) → TCO underestimated.
- **Made-up discount rate**: confirm the WACC with the CFO.
- **Market figures presented as a guarantee**: ROI ranges are indicative, not contractual.
- **Single scenario**: always pessimistic/realistic/optimistic + sensitivity.

## Deliverables
- Complete business case (parameterizable Excel / Google Sheets model)
- 1-page ROI summary for the executive committee (NPV, IRR, payback, scenarios)
- 3 scenarios + sensitivity analysis
- Register of documented and validated assumptions (owner of each assumption)

## Output format
Specify: use case · current volume · current cost (baseline) · target % automation · evaluation horizon (1/3/5 years) · client WACC if known.

## Sources
- **Forrester** — *Total Economic Impact™ (TEI) Methodology* — 4 components Benefits / Costs / Flexibility / Risk (standard framework 20+ years)
- **McKinsey** — *The State of AI* (2024 "Gen AI adoption spikes and starts to generate value"; 2025 "How organizations are rewiring to capture value") — >80% with no enterprise EBIT impact, value via workflow redesign
- **Gartner** — *Total Cost of Ownership (TCO)* — full lifecycle cost
- **Brealey, Myers, Allen** — *Principles of Corporate Finance* — NPV / IRR / payback / discounting fundamentals
- **EU AI Act** — Regulation (EU) 2024/1689 — compliance costs to include in the TCO

## See also
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — the PoC provides the real measurement to calibrate the business case
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — use-case prioritization by ROI
- [proposition-commerciale.md](proposition-commerciale.md) — valuation in an engagement offer
- [presentation-executif.md](presentation-executif.md) — ROI read-out to the executive committee
- [`../financial_analyst/business-case-ia.md`](../financial_analyst/business-case-ia.md) — in-depth AI business case
- [`../financial_analyst/roi-transformation.md`](../financial_analyst/roi-transformation.md) — ROI of a transformation program
- [`../financial_analyst/cost-benefit-analysis.md`](../financial_analyst/cost-benefit-analysis.md) — detailed cost-benefit analysis (NPV/IRR)
