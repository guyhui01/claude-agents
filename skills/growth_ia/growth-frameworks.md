# Skill — Frameworks Growth
> Certifications : Reforge Growth Series (2026), Product-Led Growth Certified (ProductLed), CXL Growth Marketing, Pragmatic Marketing Certified

## Objectif
Diagnostiquer et accélérer la croissance d'un produit digital en appliquant les frameworks AARRR, HEART, North Star Metric, ICE Scoring et en distinguant les Growth Loops des Funnels traditionnels.

## AARRR — Pirate Metrics

### Diagnostic AARRR Complet

```python
# aarrr_diagnostic.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class AARRRSnapshot:
    """Instantané des métriques AARRR pour une période donnée."""
    period: str

    # ACQUISITION
    new_visitors: int
    new_signups: int
    cac: float                        # Cost d acquisition client

    # ACTIVATION
    activated_users: int              # Ont atteint le "aha moment"
    time_to_activation_median_h: float

    # RETENTION
    day_1_retention: float            # % revenu J+1
    day_7_retention: float
    day_30_retention: float
    monthly_churn_rate: float

    # REFERRAL
    referral_signups: int
    viral_coefficient_k: float        # K-factor = invitations × conversion

    # REVENUE
    new_mrr: float
    expansion_mrr: float
    churned_mrr: float

    @property
    def signup_conversion_rate(self) -> float:
        return self.new_signups / self.new_visitors if self.new_visitors else 0

    @property
    def activation_rate(self) -> float:
        return self.activated_users / self.new_signups if self.new_signups else 0

    @property
    def net_mrr_growth(self) -> float:
        return self.new_mrr + self.expansion_mrr - self.churned_mrr

    @property
    def quick_ratio(self) -> float:
        """Quick Ratio = (New + Expansion) / Churn. > 4 = excellent."""
        return (self.new_mrr + self.expansion_mrr) / self.churned_mrr if self.churned_mrr else float("inf")

    def bottleneck(self) -> str:
        """Identifie automatiquement le goulot d étranglement principal."""
        scores = {
            "ACQUISITION": self.signup_conversion_rate / 0.03,      # Bench: 3%
            "ACTIVATION":  self.activation_rate / 0.40,             # Bench: 40%
            "RETENTION":   self.day_30_retention / 0.40,            # Bench: 40%
            "REFERRAL":    self.viral_coefficient_k / 0.15,          # Bench: 0.15
        }
        return min(scores, key=scores.get)

    def report(self) -> str:
        lines = [
            f"## AARRR Report — {self.period}",
            f"",
            f"### ACQUISITION",
            f"  Visiteurs : {self.new_visitors:,}",
            f"  Signups : {self.new_signups:,} ({self.signup_conversion_rate*100:.1f}%)",
            f"  CAC : {self.cac:.0f}€",
            f"",
            f"### ACTIVATION",
            f"  Taux d activation : {self.activation_rate*100:.0f}%",
            f"  Temps médian : {self.time_to_activation_median_h:.0f}h",
            f"",
            f"### RETENTION",
            f"  D1: {self.day_1_retention*100:.0f}% | D7: {self.day_7_retention*100:.0f}% | D30: {self.day_30_retention*100:.0f}%",
            f"  Churn mensuel : {self.monthly_churn_rate*100:.1f}%",
            f"",
            f"### REFERRAL",
            f"  K-factor : {self.viral_coefficient_k:.2f}",
            f"  Signups referral : {self.referral_signups:,}",
            f"",
            f"### REVENUE",
            f"  Net MRR growth : +{self.net_mrr_growth:,.0f}€",
            f"  Quick Ratio : {self.quick_ratio:.1f}",
            f"",
            f"### GOULOT D ETRANGLEMENT : {self.bottleneck()}",
        ]
        return "\n".join(lines)
```

## North Star Metric

### Définition et décomposition

```
NORTH STAR METRIC — GUIDE DE SÉLECTION
────────────────────────────────────────────────────────────
Une bonne NSM doit :
  ✓ Mesurer la VALEUR délivrée aux utilisateurs (pas les revenus)
  ✓ Prédire la croissance long terme
  ✓ Être comprise et influençable par toute l équipe
  ✓ Être une seule métrique (pas 2 ou 3)

EXEMPLES PAR TYPE DE PRODUIT
Produit                  North Star Metric
─────────────────────────────────────────────────────────
Slack                    Messages envoyés par équipe active
Airbnb                   Nuits réservées
Spotify                  Temps d écoute par utilisateur actif
LinkedIn                 Connexions professionnelles utiles
SaaS B2B MLOps           Modèles déployés en production/semaine
SaaS B2B RH              Candidats qualifiés sourcés/semaine
E-commerce               Commandes répétées (repeat purchase)
Marketplace              Transactions complétées avec succès
```

```python
# nsm_decomposition.py
def decompose_nsm(nsm_name: str, nsm_value: float) -> dict:
    """
    L arbre de la North Star Metric.
    NSM = f(input metrics) = f(lever 1, lever 2, lever 3)
    """
    # Exemple : NSM = "Modèles ML déployés en production par semaine"
    return {
        "nsm": nsm_name,
        "current_value": nsm_value,
        "input_metrics": {
            "breadth":  "Nombre d équipes actives (width)",       # Plus d utilisateurs
            "depth":    "Modèles déployés par équipe active",      # Plus d usage
            "frequency":"Fréquence de déploiement par modèle",    # Plus souvent
            "efficiency":"% de déploiements réussis du premier coup", # Moins de friction
        },
        "leading_indicators": [
            "Nombre de notebooks créés cette semaine",
            "Taux de complétion du pipeline d entraînement",
            "Temps moyen de déploiement (en baisse = bon signe)",
        ],
    }
```

## ICE Scoring — Priorisation des Initiatives Growth

```python
# ice_scoring.py
from dataclasses import dataclass, field

@dataclass
class GrowthInitiative:
    id: str
    title: str
    hypothesis: str           # Si X alors Y parce que Z
    # Scores ICE (1-10)
    impact: int               # Impact sur la NSM si succès
    confidence: int           # Niveau de confiance dans l hypothèse
    ease: int                 # Facilité de mise en oeuvre (10 = très facile)
    # Métadonnées
    stage: str = "PROPOSED"   # PROPOSED / IN_TEST / WINNER / LOSER
    owner: str = ""
    effort_days: int = 0
    tags: list[str] = field(default_factory=list)

    @property
    def ice_score(self) -> float:
        return round((self.impact * self.confidence * self.ease) / 100, 1)

    @property
    def roi_estimate(self) -> float:
        """ROI simplifié : ICE / effort."""
        return round(self.ice_score / self.effort_days, 2) if self.effort_days else 0


def prioritize_initiatives(initiatives: list[GrowthInitiative]) -> list[GrowthInitiative]:
    return sorted(initiatives, key=lambda x: x.ice_score, reverse=True)


# Backlog Growth Q3
backlog = [
    GrowthInitiative("G-01", "Onboarding tooltip contextuel",
        "Si on guide les utilisateurs au bon moment, alors activation +15%",
        impact=7, confidence=8, ease=9, effort_days=3),
    GrowthInitiative("G-02", "Referral program 2-sided",
        "Si récompense pour parrain ET filleul, alors K-factor > 0.3",
        impact=9, confidence=5, ease=4, effort_days=15),
    GrowthInitiative("G-03", "Email séquence réengagement D7",
        "Si rappel J+7 avec cas d usage, alors churn early -10%",
        impact=6, confidence=8, ease=8, effort_days=2),
    GrowthInitiative("G-04", "Intégration Slack native",
        "Si Slack intégration, alors retention +20% pour équipes actives Slack",
        impact=8, confidence=6, ease=3, effort_days=20),
]

for rank, init in enumerate(prioritize_initiatives(backlog), 1):
    print(f"{rank}. [{init.ice_score:4.1f}] {init.title} ({init.effort_days}j)")
# 1. [5.0] Onboarding tooltip contextuel (3j)
# 2. [4.8] Email séquence réengagement D7 (2j)
# 3. [3.2] Intégration Slack native (20j)
# 4. [1.8] Referral program 2-sided (15j)
```

## Growth Loops vs Funnels

```
FUNNEL TRADITIONNEL           GROWTH LOOP
──────────────────────────────────────────────────────────
Linéaire et descend           Circulaire et auto-renforçant
A → B → C → D (fin)          A → B → C → plus de A

Exemple Funnel :              Exemple Loop (viral) :
Impression                    Utilisateur utilise le produit
  → Click                       → Crée du contenu/invite
    → Signup                        → Nouveau utilisateur
      → Achat (fin)                     → Utilise le produit (recommence)

TYPES DE GROWTH LOOPS
──────────────────────────────────────────────────────────
Viral Loop      : Utilisation → Invitation → Nouveau user → Utilisation
Content Loop    : Utilisation → UGC indexé SEO → Trafic → Signup
Paid Loop       : Revenus → Budget pub → Acquisition → Revenus
Product Loop    : Feature utilisée → Recommandation → Adoption → Revenue
```

## Livrables
- Diagnostic AARRR complet avec identification du bottleneck
- North Star Metric définie + arbre de décomposition
- Backlog ICE-scoré des initiatives growth (top 20)
- Identification des Growth Loops actifs et potentiels
- HEART Framework appliqué (Happiness, Engagement, Adoption, Retention, Task Success)
- Roadmap growth trimestrielle

## Format de sortie
Précise : type de produit et modèle business (SaaS/marketplace/e-commerce/app), métriques disponibles, North Star actuelle (ou à définir), budget growth mensuel, équipe growth (size), principaux leviers actuels, objectif croissance (% ARR / nouveaux utilisateurs / etc.).
