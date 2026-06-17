# Skill — Marketing Attribution, LTV/CAC & ROI
> Certifications: Google Analytics 4 Certified (2026), Meta Blueprint Certified, Northbeam Partner, Triple Whale Certified, Marketing Science Professional (Meta)

## Objective
Model marketing attribution in multi-touch, precisely calculate LTV, CAC, and Payback Period, and optimize the marketing budget to maximize long-term ROI.

## Attribution Models

### Multi-Touch Attribution — Implementation

```python
# attribution_models.py
import pandas as pd
import numpy as np
from typing import Literal

AttributionModel = Literal["last_touch", "first_touch", "linear", "time_decay", "data_driven"]

def apply_attribution_model(
    touchpoints_df: pd.DataFrame,  # conversion_id, channel, timestamp, is_conversion
    model: AttributionModel,
    decay_half_life_days: float = 7.0,
) -> pd.DataFrame:
    """
    Compute the conversion credit per channel according to the chosen model.

    touchpoints_df columns: conversion_id | channel | timestamp | is_conversion
    """
    results = []

    for conv_id, journey in touchpoints_df.groupby("conversion_id"):
        touchpoints = journey.sort_values("timestamp")
        n = len(touchpoints)
        conversion_value = journey[journey["is_conversion"]]["value"].sum()

        if model == "last_touch":
            credits = [0.0] * (n - 1) + [1.0]

        elif model == "first_touch":
            credits = [1.0] + [0.0] * (n - 1)

        elif model == "linear":
            credits = [1.0 / n] * n

        elif model == "time_decay":
            conv_time = touchpoints.iloc[-1]["timestamp"]
            days_before = [(conv_time - t).days for t in touchpoints["timestamp"]]
            weights = [2 ** (-d / decay_half_life_days) for d in days_before]
            total = sum(weights)
            credits = [w / total for w in weights]

        elif model == "data_driven":
            # Simplified Shapley value (coalition games)
            credits = _shapley_attribution(touchpoints["channel"].tolist())

        for tp, credit in zip(touchpoints.itertuples(), credits):
            results.append({
                "conversion_id": conv_id,
                "channel": tp.channel,
                "credit": credit,
                "attributed_value": conversion_value * credit,
                "model": model,
            })

    return pd.DataFrame(results).groupby(["channel", "model"]).agg(
        conversions=("credit", "sum"),
        revenue=("attributed_value", "sum"),
    ).reset_index()


def compare_attribution_models(touchpoints_df: pd.DataFrame) -> pd.DataFrame:
    """Compare all attribution models side by side."""
    models = ["last_touch", "first_touch", "linear", "time_decay"]
    results = []
    for model in models:
        result = apply_attribution_model(touchpoints_df, model)
        result["model"] = model
        results.append(result)
    return pd.concat(results).pivot_table(
        index="channel", columns="model", values="conversions", aggfunc="sum"
    ).round(1)
```

## LTV / CAC / Payback Period

### Multi-Model LTV Calculation

```python
# ltv_cac_calculator.py
from dataclasses import dataclass
import numpy as np

@dataclass
class SaaSMetrics:
    arpa: float           # Average Revenue Per Account (monthly)
    gross_margin: float   # e.g. 0.75 for 75%
    monthly_churn: float  # e.g. 0.02 for 2%/month
    expansion_rate: float # e.g. 0.01 for 1% MRR expansion/month
    cac: float            # Customer acquisition cost

    @property
    def net_revenue_retention(self) -> float:
        """NRR = (1 - churn + expansion). > 1 = expansion revenue."""
        return 1 - self.monthly_churn + self.expansion_rate

    @property
    def avg_customer_lifetime_months(self) -> float:
        """Average lifetime = 1 / churn rate."""
        return 1 / self.monthly_churn

    def ltv_simple(self) -> float:
        """LTV = ARPA × Gross Margin / Churn Rate."""
        return (self.arpa * self.gross_margin) / self.monthly_churn

    def ltv_discounted(self, annual_discount_rate: float = 0.10) -> float:
        """LTV with discounting (Net Present Value)."""
        monthly_discount = (1 + annual_discount_rate) ** (1/12) - 1
        # Gordon formula (declining perpetuity)
        return (self.arpa * self.gross_margin) / (self.monthly_churn + monthly_discount)

    def ltv_with_expansion(self) -> float:
        """LTV accounting for MRR expansion."""
        # Geometric model with expansion
        effective_churn = self.monthly_churn - self.expansion_rate
        if effective_churn <= 0:
            effective_churn = 0.005  # Minimum effective churn
        return (self.arpa * self.gross_margin) / effective_churn

    def ltv_cac_ratio(self) -> float:
        return self.ltv_simple() / self.cac

    def payback_period_months(self) -> float:
        """Months needed to recover the CAC."""
        monthly_gp = self.arpa * self.gross_margin
        return self.cac / monthly_gp

    def cac_assessment(self) -> str:
        ratio = self.ltv_cac_ratio()
        payback = self.payback_period_months()
        if ratio < 1:    return "CRITICAL — LTV < CAC (business not viable)"
        elif ratio < 3:  return "LOW — LTV:CAC < 3x (optimize urgently)"
        elif ratio < 5:  return "GOOD — LTV:CAC within SaaS norm"
        else:            return "EXCELLENT — LTV:CAC > 5x (accelerate acquisition)"

    def full_report(self) -> dict:
        return {
            "arpa_monthly":        f"{self.arpa:,.0f}€",
            "ltv_simple":          f"{self.ltv_simple():,.0f}€",
            "ltv_with_expansion":  f"{self.ltv_with_expansion():,.0f}€",
            "ltv_npv":             f"{self.ltv_discounted():,.0f}€",
            "cac":                 f"{self.cac:,.0f}€",
            "ltv_cac_ratio":       f"{self.ltv_cac_ratio():.1f}x",
            "payback_months":      f"{self.payback_period_months():.1f} months",
            "avg_lifetime_months": f"{self.avg_customer_lifetime_months:.0f} months",
            "nrr":                 f"{self.net_revenue_retention*100:.1f}%",
            "assessment":          self.cac_assessment(),
        }


# B2B SaaS example
company = SaaSMetrics(
    arpa=350, gross_margin=0.78, monthly_churn=0.018,
    expansion_rate=0.012, cac=1_800
)
for k, v in company.full_report().items():
    print(f"{k:30s}: {v}")

# ltv_simple                    : 15,167€
# ltv_cac_ratio                 : 8.4x   (EXCELLENT)
# payback_months                : 6.6 months
```

### LTV/CAC benchmarks per segment

| Segment | Target LTV:CAC | Target Payback | Target NRR |
|---------|--------------|---------------|----------|
| B2B SaaS SMB | 3x — 5x | < 18 months | > 100% |
| B2B SaaS Mid-Market | 4x — 8x | < 12 months | > 110% |
| B2B SaaS Enterprise | 5x — 10x | < 24 months | > 120% |
| E-commerce | 2x — 4x | < 6 months | N/A |
| Marketplace | 3x — 6x | < 12 months | N/A |

### Budget Allocation — CAC optimization per channel

```python
# channel_optimization.py
import pandas as pd

def optimize_channel_mix(
    channels_data: list[dict],  # channel, spend, customers, ltv_avg
    total_budget: float,
    ltv_cac_target: float = 3.0,
) -> pd.DataFrame:
    """Budget reallocation based on LTV:CAC per channel."""
    df = pd.DataFrame(channels_data)
    df["cac"] = df["spend"] / df["customers"]
    df["ltv_cac"] = df["ltv_avg"] / df["cac"]
    df["roi"] = (df["ltv_avg"] - df["cac"]) / df["cac"]
    df["above_target"] = df["ltv_cac"] >= ltv_cac_target

    # Suggested budget: proportional to the LTV:CAC ratio
    df["budget_weight"] = df["ltv_cac"].clip(lower=0)
    df["suggested_budget"] = (df["budget_weight"] / df["budget_weight"].sum()) * total_budget

    return df.sort_values("ltv_cac", ascending=False)[
        ["channel", "spend", "cac", "ltv_avg", "ltv_cac", "roi", "suggested_budget"]
    ].round(0)
```

## Deliverables
- Multi-touch attribution model (Python/dbt/Looker) with model comparison
- LTV/CAC/Payback dashboard per segment and per acquisition channel
- Budget reallocation recommendations (data vs. intuition)
- LTV cohort report (how cohort LTV evolves over time)
- Max-CAC-per-channel framework (to set Ads bids)
- Monthly ROAS and attribution report

## Output format
Specify: business type (SaaS/e-commerce/marketplace), available data (CRM, analytics, ad platforms), current attribution model, active acquisition channels and monthly spend, analytics tools (dbt/Snowflake/BigQuery), target LTV:CAC objective, average purchase frequency.

## Sources
- **David Skok (Matrix Partners)** — *SaaS Metrics 2.0* (~2010) — the **LTV:CAC ≈ 3:1** rule and **payback < 12 months**, established for **mature, steady-state SaaS** (to contextualize by stage: seed ≠ scale)
- **Bessemer Venture Partners** — *State of the Cloud* / *Good-Better-Best* — LTV/CAC, NRR, payback benchmarks per segment (the skill's table ranges are indicative)
- **Lloyd Shapley** (1953, Nobel 2012) — Shapley values, the foundation of **data-driven** attribution
- **Google Analytics 4**: **data-driven (Shapley) attribution by default**; rules-based models **first-click, linear, time-decay, position-based were deprecated in 2023** (data-driven + last-click remain)
- **Net Revenue Retention (NRR)** — standard SaaS metric (expansion − churn); targets >100% / >110% / >120% by segment

## Anti-patterns
- **Last-touch by default** on long buying cycles: over-credits the last channel (often brand/direct) and kills top-of-funnel investment.
- **LTV on unstable churn / young cohorts**: extrapolating an LTV while churn isn't stabilized.
- **Applying 3:1 out of context**: a "too good" ratio (>5:1) may signal under-investment in acquisition, not success.
- **Ignoring payback (cash)**: a good LTV/CAC ratio with a 24-month payback can choke cash.
- **Confusing revenue and gross margin**: LTV is computed on gross margin, not on revenue.

## See also
- [acquisition-seo-sem.md](acquisition-seo-sem.md) — derive the max CPA/CAC per channel for bids
- [product-analytics.md](product-analytics.md) — cohorts and retention upstream of LTV
- [lifecycle-marketing.md](lifecycle-marketing.md) — retention and expansion (LTV/NRR levers)
- [`../../AGENT-FINANCIAL-ANALYST.md`](../../AGENT-FINANCIAL-ANALYST.md) — financial modeling, unit economics, and business case
