# Skill — Gouvernance de Portefeuille IA
> Certifications : PfMP (Portfolio Management Professional 2026), SAFe Program Consultant (SPC), Gartner PPM Certified

## Objectif
Piloter un portefeuille de projets IA avec une priorisation objective (WSJF), un scoring multicritères, des revues de portefeuille structurées et une visibilité claire sur la valeur délivrée et les capacités disponibles.

## Frameworks de Priorisation

### WSJF — Weighted Shortest Job First (SAFe)

```python
# wsjf_calculator.py
from dataclasses import dataclass
from typing import List

@dataclass
class Initiative:
    id: str
    title: str
    # Composantes de la valeur économique
    user_business_value: int        # Fibonacci 1·2·3·5·8·13·20
    time_criticality: int           # Fibonacci — coté relativement
    risk_reduction_opportunity: int  # Fibonacci — RR/OE combinés
    # Taille (effort)
    job_size: int                   # Fibonacci (T-shirt) — plus petit = 1 par colonne (cf. skills/safe/wsjf.md)
    # Métadonnées
    team: str = ""
    status: str = "PROPOSED"
    quarter: str = ""

    @property
    def cost_of_delay(self) -> int:
        """CoD = somme des 3 composantes de valeur."""
        return self.user_business_value + self.time_criticality + self.risk_reduction_opportunity

    @property
    def wsjf(self) -> float:
        """WSJF = CoD / Job Size."""
        return round(self.cost_of_delay / self.job_size, 2) if self.job_size else 0


def prioritize_portfolio(initiatives: List[Initiative]) -> List[Initiative]:
    return sorted(initiatives, key=lambda x: x.wsjf, reverse=True)


def print_wsjf_table(initiatives: List[Initiative]):
    sorted_list = prioritize_portfolio(initiatives)
    print(f"{'#':<3} {'ID':<8} {'Titre':<35} {'CoD':<5} {'Size':<6} {'WSJF':<6} {'Statut'}")
    print("-" * 80)
    for rank, init in enumerate(sorted_list, 1):
        print(f"{rank:<3} {init.id:<8} {init.title[:34]:<35} {init.cost_of_delay:<5} "
              f"{init.job_size:<6} {init.wsjf:<6} {init.status}")


# Exemple portefeuille IA 2026 Q3 — coté relativement, plus petit = 1 par colonne (cf. wsjf.md)
portfolio = [
    Initiative("IA-01", "Chatbot support client (LLM)",     user_business_value=5, time_criticality=3, risk_reduction_opportunity=3, job_size=3),
    Initiative("IA-02", "Scoring fraude en temps réel",      user_business_value=8, time_criticality=5, risk_reduction_opportunity=8, job_size=5),
    Initiative("IA-03", "Recommandations produits",          user_business_value=3, time_criticality=2, risk_reduction_opportunity=2, job_size=2),
    Initiative("IA-04", "Prévision de churn",                user_business_value=3, time_criticality=2, risk_reduction_opportunity=5, job_size=3),
    Initiative("IA-05", "OCR traitement de documents",       user_business_value=1, time_criticality=1, risk_reduction_opportunity=1, job_size=1),
    Initiative("IA-06", "Optimisation prix dynamique",       user_business_value=5, time_criticality=3, risk_reduction_opportunity=3, job_size=8),
]

print_wsjf_table(portfolio)
# Résultat : IA-02 (Scoring fraude) en tête — CoD 21, WSJF 4.2
```

### Scoring Multicritères — Matrice de Décision

```python
# portfolio_scoring.py
from dataclasses import dataclass, field
from typing import Dict

CRITERIA_WEIGHTS = {
    "valeur_business":      0.30,   # Impact revenus/économies
    "alignement_strategique": 0.25, # Fit avec roadmap IA de l'entreprise
    "faisabilite_technique":  0.20, # Maturité techno + compétences disponibles
    "conformite_ia_act":      0.15, # Risques réglementaires EU AI Act
    "time_to_value":          0.10, # Délai avant première valeur
}

@dataclass
class PortfolioItem:
    id: str
    title: str
    scores: Dict[str, int]  # Score 1-5 par critère

    def weighted_score(self, weights: Dict[str, float] = CRITERIA_WEIGHTS) -> float:
        return sum(
            self.scores.get(criterion, 0) * weight
            for criterion, weight in weights.items()
        )

    def category(self) -> str:
        score = self.weighted_score()
        if score >= 4.0:   return "PRIORITAIRE"
        elif score >= 3.0: return "PLANIFIÉ"
        elif score >= 2.0: return "BACKLOG"
        else:              return "ABANDONNÉ"


# Revue de portefeuille Q3 2026
items = [
    PortfolioItem("IA-02", "Scoring fraude", {
        "valeur_business": 5, "alignement_strategique": 5,
        "faisabilite_technique": 4, "conformite_ia_act": 3, "time_to_value": 3
    }),
    PortfolioItem("IA-06", "Prix dynamique", {
        "valeur_business": 5, "alignement_strategique": 4,
        "faisabilite_technique": 2, "conformite_ia_act": 2, "time_to_value": 2
    }),
]

for item in sorted(items, key=lambda x: x.weighted_score(), reverse=True):
    score = item.weighted_score()
    print(f"{item.id} | {item.title:<35} | Score: {score:.2f} | {item.category()}")
```

## Revue de Portefeuille — Format de Réunion

### Ordre du jour type (90 minutes)

```
REVUE DE PORTEFEUILLE IA — Q3 2026
─────────────────────────────────────────────────────────────
Fréquence : Trimestrielle
Participants : CDO, DSI, Sponsors projets, PM leads

[00-15 min]  Tableau de bord portefeuille — RAG status
             → 1 slide par projet actif : avancé, budget, risques
             → Projets en rouge : discussion prioritaire

[15-35 min]  Analyse de la capacité
             → Teams disponibles vs. demandes Q4
             → Identification des goulots d'étranglement

[35-60 min]  Nouvelles demandes
             → Présentation scoring WSJF
             → Vote Go/No-Go sur les initiatives proposées

[60-80 min]  Arbitrages portefeuille
             → Projets à accélérer / ralentir / arrêter
             → Réallocation des ressources

[80-90 min]  Décisions & actions
             → Portefeuille Q4 validé
             → Responsables et dates de livraison
```

### Tableau de Bord Portefeuille

```yaml
# portfolio_dashboard.yaml — mise à jour mensuelle
portfolio_summary:
  date: "2026-05-19"
  total_budget_engaged: 580_000
  total_budget_planned: 950_000
  active_projects: 4
  on_hold: 1
  completed_ytd: 2

projects:
  - id: IA-01
    name: "Chatbot Support Client"
    status: GREEN          # GREEN / AMBER / RED
    progress_pct: 75
    budget_consumed: 85_000
    budget_total: 120_000
    cpi: 0.98
    spi: 1.05
    go_live: "2026-06-30"
    risks: "Aucun risque critique"

  - id: IA-02
    name: "Scoring Fraude Temps Réel"
    status: AMBER
    progress_pct: 45
    budget_consumed: 110_000
    budget_total: 200_000
    cpi: 0.89
    spi: 0.83
    go_live: "2026-09-15"
    risks: "Données insuffisantes — plan d'action S12"

capacity_heatmap:
  data_scientists:
    available_q3: 4
    allocated_q3: 3.5
    buffer: 0.5
  ml_engineers:
    available_q3: 3
    allocated_q3: 3
    buffer: 0            # GOULOT D'ETRANGLEMENT
```

## Livrables
- Registre de portefeuille (WSJF scores + scores multicritères)
- Tableau de bord trimestriel avec RAG status
- Rapport de capacité et heatmap des ressources
- Compte-rendu de revue de portefeuille
- Roadmap IA sur 12 mois glissants
- Business cases simplifiés pour les nouvelles initiatives

## Format de sortie
Précise : nombre de projets IA actifs/proposés, budget total du portefeuille, équipes disponibles (DataScience, MLEng, DataEng), horizon de planification (trimestre/année), outils PPM utilisés (Jira Portfolio, Planview, Notion), critères stratégiques de l'entreprise.
