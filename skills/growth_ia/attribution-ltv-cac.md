# Skill — Attribution Marketing, LTV/CAC & ROI
> Certifications : Google Analytics 4 Certified (2026), Meta Blueprint Certified, Northbeam Partner, Triple Whale Certified, Marketing Science Professional (Meta)

## Objectif
Modéliser l'attribution marketing en multi-touch, calculer précisément LTV, CAC et Payback Period, et optimiser le budget marketing pour maximiser le ROI à long terme.

## Modèles d'Attribution

### Attribution Multi-Touch — Implémentation

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
    Calcule le crédit de conversion par canal selon le modèle choisi.

    touchpoints_df colonnes : conversion_id | channel | timestamp | is_conversion
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
            # Shapley value simplifiée (coalition games)
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
    """Compare tous les modèles d attribution côte à côte."""
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

### Calcul LTV Multi-Modèles

```python
# ltv_cac_calculator.py
from dataclasses import dataclass
import numpy as np

@dataclass
class SaaSMetrics:
    arpa: float           # Average Revenue Per Account (mensuel)
    gross_margin: float   # ex: 0.75 pour 75%
    monthly_churn: float  # ex: 0.02 pour 2%/mois
    expansion_rate: float # ex: 0.01 pour 1% expansion MRR/mois
    cac: float            # Coût d acquisition client

    @property
    def net_revenue_retention(self) -> float:
        """NRR = (1 - churn + expansion). > 1 = expansion revenue."""
        return 1 - self.monthly_churn + self.expansion_rate

    @property
    def avg_customer_lifetime_months(self) -> float:
        """Durée de vie moyenne = 1 / taux de churn."""
        return 1 / self.monthly_churn

    def ltv_simple(self) -> float:
        """LTV = ARPA × Gross Margin / Churn Rate."""
        return (self.arpa * self.gross_margin) / self.monthly_churn

    def ltv_discounted(self, annual_discount_rate: float = 0.10) -> float:
        """LTV avec actualisation (Net Present Value)."""
        monthly_discount = (1 + annual_discount_rate) ** (1/12) - 1
        # Formule de Gordon (rente perpétuelle décroissante)
        return (self.arpa * self.gross_margin) / (self.monthly_churn + monthly_discount)

    def ltv_with_expansion(self) -> float:
        """LTV avec expansion MRR pris en compte."""
        # Modèle géométrique avec expansion
        effective_churn = self.monthly_churn - self.expansion_rate
        if effective_churn <= 0:
            effective_churn = 0.005  # Churn effectif minimum
        return (self.arpa * self.gross_margin) / effective_churn

    def ltv_cac_ratio(self) -> float:
        return self.ltv_simple() / self.cac

    def payback_period_months(self) -> float:
        """Mois nécessaires pour récupérer le CAC."""
        monthly_gp = self.arpa * self.gross_margin
        return self.cac / monthly_gp

    def cac_assessment(self) -> str:
        ratio = self.ltv_cac_ratio()
        payback = self.payback_period_months()
        if ratio < 1:    return "CRITIQUE — LTV < CAC (business non viable)"
        elif ratio < 3:  return "FAIBLE — LTV:CAC < 3x (optimiser d urgence)"
        elif ratio < 5:  return "BON — LTV:CAC dans la norme SaaS"
        else:            return "EXCELLENT — LTV:CAC > 5x (accélérer acquisition)"

    def full_report(self) -> dict:
        return {
            "arpa_monthly":        f"{self.arpa:,.0f}€",
            "ltv_simple":          f"{self.ltv_simple():,.0f}€",
            "ltv_with_expansion":  f"{self.ltv_with_expansion():,.0f}€",
            "ltv_npv":             f"{self.ltv_discounted():,.0f}€",
            "cac":                 f"{self.cac:,.0f}€",
            "ltv_cac_ratio":       f"{self.ltv_cac_ratio():.1f}x",
            "payback_months":      f"{self.payback_period_months():.1f} mois",
            "avg_lifetime_months": f"{self.avg_customer_lifetime_months:.0f} mois",
            "nrr":                 f"{self.net_revenue_retention*100:.1f}%",
            "assessment":          self.cac_assessment(),
        }


# Exemple SaaS B2B
company = SaaSMetrics(
    arpa=350, gross_margin=0.78, monthly_churn=0.018,
    expansion_rate=0.012, cac=1_800
)
for k, v in company.full_report().items():
    print(f"{k:30s}: {v}")

# ltv_simple                    : 15,167€
# ltv_cac_ratio                 : 8.4x   (EXCELLENT)
# payback_months                : 6.6 mois
```

### Benchmarks LTV/CAC par segment

| Segment | LTV:CAC cible | Payback cible | NRR cible |
|---------|--------------|---------------|----------|
| SaaS B2B SMB | 3x — 5x | < 18 mois | > 100% |
| SaaS B2B Mid-Market | 4x — 8x | < 12 mois | > 110% |
| SaaS B2B Enterprise | 5x — 10x | < 24 mois | > 120% |
| E-commerce | 2x — 4x | < 6 mois | N/A |
| Marketplace | 3x — 6x | < 12 mois | N/A |

### Budget Allocation — Optimisation du CAC par canal

```python
# channel_optimization.py
import pandas as pd

def optimize_channel_mix(
    channels_data: list[dict],  # channel, spend, customers, ltv_avg
    total_budget: float,
    ltv_cac_target: float = 3.0,
) -> pd.DataFrame:
    """Réallocation budgétaire basée sur le LTV:CAC par canal."""
    df = pd.DataFrame(channels_data)
    df["cac"] = df["spend"] / df["customers"]
    df["ltv_cac"] = df["ltv_avg"] / df["cac"]
    df["roi"] = (df["ltv_avg"] - df["cac"]) / df["cac"]
    df["above_target"] = df["ltv_cac"] >= ltv_cac_target

    # Budget suggéré : proportionnel au LTV:CAC ratio
    df["budget_weight"] = df["ltv_cac"].clip(lower=0)
    df["suggested_budget"] = (df["budget_weight"] / df["budget_weight"].sum()) * total_budget

    return df.sort_values("ltv_cac", ascending=False)[
        ["channel", "spend", "cac", "ltv_avg", "ltv_cac", "roi", "suggested_budget"]
    ].round(0)
```

## Livrables
- Modèle d'attribution multi-touch (Python/dbt/Looker) avec comparaison des modèles
- Dashboard LTV/CAC/Payback par segment et par canal d'acquisition
- Recommandations de réallocation budgétaire (données vs intuition)
- Rapport de cohort LTV (comment évolue la LTV des cohortes dans le temps)
- Framework de CAC max par canal (pour définir les bids Ads)
- Rapport mensuel ROAS et attribution

## Format de sortie
Précise : type de business (SaaS/e-commerce/marketplace), données disponibles (CRM, analytics, ad platforms), modèle d'attribution actuel, canaux d'acquisition actifs et spend mensuel, outils analytiques (dbt/Snowflake/BigQuery), objectif LTV:CAC cible, fréquence d'achat moyenne.
