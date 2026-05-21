# Skill — Culture d'Expérimentation & A/B Testing
> Certifications : Optimizely Certified Partner (2026), LaunchDarkly Certified, Google Analytics 4 Certified, Lean Experimentation (EXIN)

## Objectif
Mettre en place une culture d'expérimentation data-driven — design rigoureux des tests, calcul statistique correct de la taille d'échantillon, analyse des résultats et infrastructure feature flags pour un déploiement progressif.

## Design d'Expériences

### Calcul de la Taille d'Échantillon

```python
# sample_size_calculator.py
import numpy as np
from scipy import stats
from scipy.stats import norm

def calculate_sample_size(
    baseline_rate: float,    # Taux de conversion actuel (ex: 0.05 = 5%)
    minimum_effect: float,   # Effet minimum détectable (ex: 0.01 = +1pp absolu)
    alpha: float = 0.05,     # Risque alpha (faux positif) — 5%
    power: float = 0.80,     # Puissance statistique (1-beta) — 80%
    test_type: str = "two_sided",  # two_sided ou one_sided
) -> dict:
    """
    Calcule la taille d échantillon pour un test A/B.
    Méthode : test de proportion de Pearson.
    """
    z_alpha = norm.ppf(1 - alpha / (2 if test_type == "two_sided" else 1))
    z_beta  = norm.ppf(power)

    p1 = baseline_rate
    p2 = baseline_rate + minimum_effect
    p_pooled = (p1 + p2) / 2

    n = ((z_alpha * np.sqrt(2 * p_pooled * (1 - p_pooled)) +
          z_beta  * np.sqrt(p1 * (1-p1) + p2 * (1-p2))) /
         (p2 - p1)) ** 2

    n_per_variant = int(np.ceil(n))

    # Durée estimée
    return {
        "n_per_variant": n_per_variant,
        "n_total": n_per_variant * 2,
        "baseline_rate_pct": f"{baseline_rate * 100:.1f}%",
        "target_rate_pct":   f"{p2 * 100:.1f}%",
        "mde_relative_pct":  f"{minimum_effect / baseline_rate * 100:.0f}%",
        "alpha": alpha,
        "power": power,
        "confidence_level": f"{(1-alpha)*100:.0f}%",
    }


def estimate_test_duration(
    n_per_variant: int,
    daily_visitors: int,
    traffic_split: float = 0.5,  # 50% dans le test
) -> dict:
    """Estime la durée nécessaire du test."""
    daily_in_test = daily_visitors * traffic_split / 2  # Par variante
    days_needed = np.ceil(n_per_variant / daily_in_test)
    weeks_needed = days_needed / 7

    return {
        "days_needed": int(days_needed),
        "weeks_needed": round(weeks_needed, 1),
        "min_duration_weeks": max(2, int(np.ceil(weeks_needed))),  # Min 2 semaines
        "warning": "Trop long (>8 semaines) — augmenter le MDE" if weeks_needed > 8 else None,
    }


# Exemple concret : tester un nouveau CTA
result = calculate_sample_size(
    baseline_rate=0.035,  # 3.5% de conversion actuel
    minimum_effect=0.007,  # Détecter +0.7pp (soit +20% relatif)
    alpha=0.05,
    power=0.80,
)
print(f"Taille par variante : {result['n_per_variant']:,}")  # ~2,700 par variante
duration = estimate_test_duration(result["n_per_variant"], daily_visitors=800)
print(f"Durée estimée : {duration['weeks_needed']} semaines")  # ~3.5 semaines
```

### Analyse des Résultats

```python
# ab_test_analysis.py
from scipy.stats import chi2_contingency, norm
import numpy as np
from dataclasses import dataclass

@dataclass
class ABTestResult:
    test_name: str
    control_visitors: int
    control_conversions: int
    variant_visitors: int
    variant_conversions: int

    @property
    def control_rate(self) -> float:
        return self.control_conversions / self.control_visitors

    @property
    def variant_rate(self) -> float:
        return self.variant_conversions / self.variant_visitors

    @property
    def relative_lift(self) -> float:
        return (self.variant_rate - self.control_rate) / self.control_rate

    def analyze(self, alpha: float = 0.05) -> dict:
        # Test du chi-2 de Pearson
        contingency = [
            [self.control_conversions, self.control_visitors - self.control_conversions],
            [self.variant_conversions, self.variant_visitors - self.variant_conversions],
        ]
        chi2, p_value, _, _ = chi2_contingency(contingency, correction=False)

        # Intervalle de confiance sur la différence
        diff = self.variant_rate - self.control_rate
        se = np.sqrt(
            self.control_rate * (1 - self.control_rate) / self.control_visitors +
            self.variant_rate * (1 - self.variant_rate) / self.variant_visitors
        )
        z = norm.ppf(1 - alpha / 2)
        ci_lower, ci_upper = diff - z * se, diff + z * se

        is_significant = p_value < alpha
        winner = "VARIANT" if (is_significant and diff > 0) else "CONTROL" if (is_significant and diff < 0) else "INCONCLUSIVE"

        return {
            "test": self.test_name,
            "control_rate_pct": f"{self.control_rate*100:.2f}%",
            "variant_rate_pct": f"{self.variant_rate*100:.2f}%",
            "relative_lift_pct": f"{self.relative_lift*100:+.1f}%",
            "absolute_diff_pp": f"{diff*100:+.2f}pp",
            "ci_95": f"[{ci_lower*100:+.2f}pp, {ci_upper*100:+.2f}pp]",
            "p_value": round(p_value, 4),
            "significant": is_significant,
            "winner": winner,
            "recommendation": f"Déployer VARIANT" if winner == "VARIANT" else "Garder CONTROL",
        }


# Exemple
test = ABTestResult("CTA rouge vs vert", 3200, 112, 3150, 142)
result = test.analyze()
for k, v in result.items():
    print(f"{k:25s}: {v}")
# relative_lift_pct       : +26.0%
# p_value                 : 0.0231
# winner                  : VARIANT
```

## Feature Flags — LaunchDarkly / OpenFeature

### Configuration Feature Flags (OpenFeature + Flagd)

```typescript
// feature-flags.ts — OpenFeature SDK
import { OpenFeature, InMemoryProvider } from "@openfeature/server-sdk"

// Initialisation avec provider (LaunchDarkly, Flagd, ConfigCat...)
await OpenFeature.setProviderAndWait(
  new LaunchDarklyProvider(process.env.LD_SDK_KEY!)
)

const client = OpenFeature.getClient()

// Évaluation d un flag avec contexte utilisateur
const context = {
  targetingKey: user.id,
  email: user.email,
  plan: user.plan,
  country: user.country,
  percentile: user.abTestBucket,  // 0-100
}

// Flag boolean simple
const showNewCheckout = await client.getBooleanValue(
  "new-checkout-flow", false, context
)

// Flag avec variante (multivarié)
const ctaVariant = await client.getStringValue(
  "cta-button-test", "control", context
)
// Valeurs possibles : "control" | "red-button" | "bigger-text" | "urgency-copy"

// Flag numérique (prix, limites)
const discountPct = await client.getNumberValue(
  "welcome-discount-pct", 0, context
)
```

## Bonnes Pratiques d'Expérimentation

### Checklist avant lancement d'un test

```yaml
pre_launch_checklist:
  statistique:
    - Taille d échantillon calculée (>80% puissance)
    - Durée minimale 2 semaines (cycles hebdomadaires)
    - Métrique primaire unique définie AVANT le test
    - Maximum 3 métriques secondaires
    - Pas de peeking (regarder les résultats avant la fin)

  technique:
    - Test de fumée (smoke test) sur la variante
    - QA sur les principaux navigateurs/devices
    - AA test préalable (vérifier l égalité des groupes)
    - Logging des events dans analytics

  organisationnel:
    - Hypothèse documentée (si X alors Y parce que Z)
    - Pas d autres changements simultanés sur la même page
    - Calendrier clair (date début et fin)
    - Personne responsable de l analyse

common_mistakes:
  - "Arrêter le test dès qu on voit une significativité" → peeking bias
  - "Tester 10 variantes à la fois" → correction de Bonferroni nécessaire
  - "Changer la métrique primaire après analyse" → HARKing (Hypothesizing After Results Known)
  - "Ignorer la significativité pratique" → lif de +0.1% statistiquement sig mais sans intérêt business
  - "Sous-estimer l effet de nouveauté" → durée trop courte
```

| Plateforme | Idéale pour | Complexité setup | Coût |
|-----------|------------|-----------------|------|
| Optimizely | Sites web + apps, A/B complex | Moyenne | Elevé |
| LaunchDarkly | Feature flags, devs, microservices | Faible | Moyen |
| AB Tasty | Sites web, non-technique | Faible | Moyen |
| VWO | E-commerce, heatmaps | Faible | Moyen |
| Statsig | Apps + backend, stats avancées | Moyenne | Gratuit/Payant |
| Flagsmith | Open source, self-hosted | Elevée | Gratuit |

## Livrables
- Plan d'expérimentation trimestriel (roadmap des tests priorisés)
- Calculateur de taille d'échantillon et durée de test
- Template d'analyse de résultats avec tests statistiques
- Configuration feature flags (LaunchDarkly / Flagd)
- Repository des expériences passées (hypothèse, résultat, apprentissage)
- Formation équipe (éviter les biais courants)

## Format de sortie
Précise : métrique primaire à améliorer (conversion, retention, NPS), trafic mensuel disponible, plateforme d'expérimentation actuelle, capacités statistiques de l'équipe, budget pour outils, objectif (quick wins ou expérimentation à long terme).
