# Skill — Gestion des Risques Projet IA
> Certifications : PMP (PMI 2026), PMI-RMP (Risk Management Professional), ISO 31000 Lead Risk Manager, EU AI Act Compliance Specialist
> Agent : AGENT-CHEF-PROJET-IA.md
> Référentiels : **ISO 31000:2018** (management du risque) · **ISO/IEC 31010:2019** (techniques) · **PMBOK 7** + **PMI-RMP** · **AI Act 2024/1689 art. 9** (système de gestion des risques) · EMV (PMBOK) · Fairlearn (Microsoft)

## Objectif
Identifier, évaluer et piloter proactivement les risques spécifiques aux projets IA — techniques, éthiques, réglementaires et business — via un RAID log structuré et des plans de réponse actionnables.

## RAID Log — Template Complet

### Structure RAID Log

```yaml
# raid_log.yaml — versionné avec le projet
project: "Scoring Conversion IA"
last_updated: "2026-05-19"
owner: "PM - Guy H."

risks:
  - id: R-01
    categorie: "Technique"
    titre: "Qualité des données CRM insuffisante"
    description: "Les données de conversion < 2023 peuvent être incomplètes ou mal labellisées"
    probabilite: haute        # haute / moyenne / faible
    impact: critique          # critique / élevé / moyen / faible
    score: 16                 # Probabilité × Impact (matrice 5x5)
    statut: "ACTIF"
    proprietaire: "Data Engineer Lead"
    reponse: "MITIGATE"
    plan_action: |
      1. Audit qualité données en Sprint 0 (S2)
      2. Profiling automatique avec Great Expectations
      3. Si taux erreur > 15% : nettoyage manuel sur échantillon
      4. Définir seuil minimal de qualité avant entraînement
    indicateur_avancement: "Rapport qualité données validé en S3"
    deadline: "2026-06-10"

  - id: R-02
    categorie: "Réglementaire"
    titre: "Retard validation AIPD par DPO"
    description: "Le DPO est sollicité sur 3 autres projets, risque de délai sur l'AIPD"
    probabilite: moyenne
    impact: critique
    score: 12
    statut: "ACTIF"
    proprietaire: "PM"
    reponse: "MITIGATE"
    plan_action: |
      1. Lancer l'AIPD dès S1 (en parallèle du cadrage)
      2. Préparer un draft complet pour le DPO
      3. Escalade DSI si pas de retour en S4
    indicateur_avancement: "AIPD soumise S2, validée S5"

  - id: R-03
    categorie: "Ethique IA"
    titre: "Biais discriminatoire dans le modèle"
    description: "Le modèle pourrait scorer différemment selon le genre ou l'âge des leads"
    probabilite: moyenne
    impact: élevé
    score: 9
    statut: "SURVEILLANCE"
    proprietaire: "Data Scientist Lead"
    reponse: "MITIGATE"
    plan_action: |
      1. Analyse de fairness (Fairlearn) sur données de test
      2. Métriques Equal Opportunity Difference < 0.05
      3. Test disparate impact pour variables protégées
      4. Si biais détecté : retrait des features corrélées
    indicateur_avancement: "Rapport fairness validé en Sprint 2"

assumptions:
  - id: A-01
    description: "Données CRM disponibles depuis Jan 2022 (36 mois d'historique)"
    statut: "VALIDEE"
    validee_par: "Responsable CRM"
    date_validation: "2026-05-05"

  - id: A-02
    description: "Infrastructure AWS déjà en place — pas de temps de setup"
    statut: "A VALIDER"
    responsable: "Tech Lead"
    deadline: "2026-05-25"

issues:
  - id: I-01
    titre: "API Salesforce en maintenance le 2026-05-28"
    description: "Fenêtre de maintenance Salesforce 48h — bloque l'accès aux données"
    gravite: "ÉLEVÉE"
    statut: "EN COURS"
    proprietaire: "Data Engineer"
    resolution: "Utiliser un snapshot des données au 2026-05-27"
    deadline: "2026-05-30"

dependencies:
  - id: D-01
    description: "Validation AIPD par DPO avant déploiement en production"
    type: "EXTERNE"
    statut: "EN COURS"
    impact_si_retard: "Décalage Go Live de 2 semaines"
    proprietaire: "DPO"

  - id: D-02
    description: "Accès AWS SageMaker validé par DSI"
    type: "INTERNE"
    statut: "VALIDEE"
    proprietaire: "DSI"
```

## Matrice des Risques IA (5×5)

```python
# risk_matrix.py
from dataclasses import dataclass, field
from enum import IntEnum

class Probability(IntEnum):
    VERY_LOW  = 1   # < 10%
    LOW       = 2   # 10-25%
    MEDIUM    = 3   # 25-50%
    HIGH      = 4   # 50-75%
    VERY_HIGH = 5   # > 75%

class Impact(IntEnum):
    NEGLIGIBLE = 1
    LOW        = 2
    MEDIUM     = 3
    HIGH       = 4
    CRITICAL   = 5

@dataclass
class Risk:
    id: str
    category: str
    title: str
    probability: Probability
    impact: Impact
    owner: str
    response: str = "MITIGATE"
    actions: list = field(default_factory=list)

    @property
    def score(self) -> int:
        return self.probability * self.impact

    @property
    def severity(self) -> str:
        if self.score >= 15:    return "CRITIQUE"
        elif self.score >= 9:   return "ÉLEVÉ"
        elif self.score >= 5:   return "MOYEN"
        else:                   return "FAIBLE"

    @property
    def response_strategy(self) -> str:
        mapping = {
            "AVOID":     "Eliminer la cause du risque",
            "MITIGATE":  "Réduire probabilité ou impact",
            "TRANSFER":  "Assurance, SLA contractuel",
            "ACCEPT":    "Surveiller, budget de contingence",
        }
        return mapping.get(self.response, "Non défini")

# Registre des risques spécifiques IA
AI_RISK_TAXONOMY = {
    "Technique": [
        "Dérive du modèle (data drift, concept drift)",
        "Performance insuffisante (AUC, F1 sous les seuils)",
        "Latence d'inférence hors SLA",
        "Dépendance à une librairie ML non maintenue",
        "Données d'entraînement insuffisantes/biaisées",
    ],
    "Ethique": [
        "Biais discriminatoire (genre, âge, origine)",
        "Manque d'explicabilité (boîte noire)",
        "Déshumanisation de la décision",
        "Utilisation détournée du modèle",
    ],
    "Réglementaire": [
        "Non-conformité EU AI Act (système à haut risque)",
        "Violation RGPD (consentement, minimisation)",
        "Absence d'AIPD validée",
        "Transfert de données hors EU",
    ],
    "Business": [
        "ROI non atteint (KPIs décevants)",
        "Résistance au changement des utilisateurs",
        "Dépendance fournisseur IA (vendor lock-in)",
        "Départ d'experts data clés",
    ],
}

def prioritize_risks(risks: list[Risk]) -> list[Risk]:
    return sorted(risks, key=lambda r: r.score, reverse=True)
```

### Calcul du Budget de Contingence

```python
# contingency_budget.py
def calculate_contingency(
    total_budget: float,
    risks: list[Risk],
    confidence_level: float = 0.80,  # 80% de chance de ne pas dépasser
) -> dict:
    """
    Méthode EMV (Expected Monetary Value) pour le budget de contingence.
    Heuristique : la classe de probabilité (1-5) est convertie en probabilité
    approximative via le facteur 0.1 (classe 1≈10% ... classe 5≈50%), et l'impact
    en fraction du budget via (impact/5). Ces coefficients sont des hypothèses de
    départ À CALIBRER selon l'historique de l'organisation (pas une norme).
    """
    emv_total = sum(
        risk.probability * 0.1 * total_budget * (risk.impact / 5)
        for risk in risks
        if risk.response in ("ACCEPT", "MITIGATE")
    )

    contingency_pct = min(emv_total / total_budget, 0.20)  # Max 20%

    return {
        "budget_base": total_budget,
        "emv_total": round(emv_total, 0),
        "contingency_reserve": round(emv_total * confidence_level, 0),
        "contingency_pct": round(contingency_pct * 100, 1),
        "total_budget_with_contingency": round(total_budget + emv_total, 0),
    }
```

## Bonnes Pratiques de Pilotage des Risques

| Pratique | Fréquence | Responsable |
|----------|-----------|-------------|
| Revue RAID Log | Chaque sprint | PM |
| Top 5 risques en Steering Committee | Mensuel | PM + Sponsor |
| Réévaluation de la matrice | Après chaque incident | PM + Equipe |
| Test du plan de contingence | Avant chaque jalon | Tech Lead |
| Audit conformité IA (AI Act) | Trimestriel | DPO + PM |

## Livrables
- RAID Log initial (format YAML versionné sur Git)
- Matrice des risques 5×5 avec heatmap visuelle
- Plans de réponse documentés pour tous les risques ÉLEVÉ+
- Budget de contingence calculé (méthode EMV)
- Rapport de risque mensuel pour Steering Committee
- Tableau de bord risques dans le reporting CODIR

## Format de sortie
Précise : type de projet IA (NLP, MLOps, LLM, Vision), secteur (santé, finance, RH — systèmes à haut risque EU AI Act), budget total, équipe, dépendances critiques identifiées, historique d'incidents similaires, niveau d'appétence au risque du sponsor.

## Anti-patterns
- ❌ **RAID log créé puis jamais revu** : le registre doit vivre à chaque sprint
- ❌ **Risque sans owner ni plan de réponse** : un risque non assigné n'est pas piloté
- ❌ **Probabilité × impact sans échelle définie** : coter sans matrice calibrée = faux semblant
- ❌ **Oublier les risques IA spécifiques** : drift, biais, explicabilité, non-conformité AI Act
- ❌ **Coefficient EMV arbitraire non documenté** : les facteurs de contingence doivent être justifiés/calibrés
- ❌ **Seuil d'équité posé sans justification** (ex. « Equal Opportunity Difference < 0.05 ») : à définir selon le contexte et le risque

## Sources
- **ISO 31000:2018** — *Management du risque — Lignes directrices* — iso.org
- **ISO/IEC 31010:2019** — *Techniques d'appréciation du risque* (31 techniques)
- **PMBOK 7** (PMI 2021) + **PMI-RMP** — *Risk Management Professional*
- **AI Act** — Règlement (UE) 2024/1689, **art. 9** (système de gestion des risques pour l'IA haut risque)
- **Fairlearn** — toolkit open-source d'équité ML (Microsoft) — fairlearn.org

## Voir aussi
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — risques majeurs identifiés au cadrage
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — réserve de contingence ↔ VAC
- [`gouvernance-portefeuille.md`](gouvernance-portefeuille.md) — agrégation des risques au niveau portefeuille
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — gestion des risques côté Agile/produit (ISO 31000 + ROAM)
- [`../juridique_ia/dpia-systemes-ia.md`](../juridique_ia/dpia-systemes-ia.md) — risques pour les personnes (DPIA)
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — mesure technique des biais (Fairlearn)
