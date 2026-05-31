# Skill — Planification Agile/Waterfall Hybride pour Projets IA
> Certifications : PMP (PMI 2026), SAFe Program Consultant (SPC), PMI-ACP, PRINCE2 Agile
> Agent : AGENT-CHEF-PROJET-IA.md
> Référentiels : **PMBOK 7** (PMI 2021) · **PRINCE2 Agile** (PeopleCert) · **SAFe** (PI Planning) · **Planning Poker** (Grenning 2002) · **Story Points** (Cohn 2005) · WBS (PMI)

## Objectif
Construire un plan hybride adapté aux projets IA — phases séquentielles pour la conformité et l'infrastructure, sprints Agile pour le développement et l'expérimentation, avec estimation et jalons clairs.

## Structure Hybride — WBS & Jalons

### WBS (Work Breakdown Structure) Projet IA

```
1.0  PROJET IA — SCORING CONVERSION
│
├── 1.1  PHASE CADRAGE (Waterfall — 3 semaines)
│   ├── 1.1.1  Charte de projet
│   ├── 1.1.2  Analyse parties prenantes
│   ├── 1.1.3  AIPD / Conformité RGPD
│   └── 1.1.4  Setup infrastructure (AWS, MLflow, Git)
│
├── 1.2  PHASE DÉCOUVERTE DATA (Sprint 0 — 2 semaines)
│   ├── 1.2.1  Audit qualité données CRM
│   ├── 1.2.2  Analyse exploratoire (EDA)
│   ├── 1.2.3  Feature catalog
│   └── 1.2.4  Baseline metrics (taux conversion actuel)
│
├── 1.3  DÉVELOPPEMENT AGILE (5 Sprints × 2 semaines)
│   ├── Sprint 1  Feature engineering + modèle baseline
│   ├── Sprint 2  Optimisation modèle + explicabilité (SHAP)
│   ├── Sprint 3  API REST + tests d'intégration
│   ├── Sprint 4  Dashboard monitoring + UX tests
│   └── Sprint 5  Hardening, perf, sécurité
│
├── 1.4  PHASE DÉPLOIEMENT (Waterfall — 2 semaines)
│   ├── 1.4.1  Recette et UAT
│   ├── 1.4.2  Déploiement production (canary 10%)
│   ├── 1.4.3  Formation utilisateurs
│   └── 1.4.4  Bascule totale + hypercare
│
└── 1.5  CLÔTURE
    ├── 1.5.1  REX et post-mortem
    └── 1.5.2  Documentation finale
```

### Jalons (Milestones) — Go/No-Go

| # | Milestone | Critère de sortie | Date cible |
|---|-----------|------------------|------------|
| M1 | Kick-off validé | Charte signée, budget validé | S1 |
| M2 | Data Ready | Score qualité données >= 80%, AIPD signée | S3 |
| M3 | Modèle Baseline | AUC >= 0.75 sur validation | S5 |
| M4 | Modèle Production-Ready | AUC >= 0.85, latence OK, SHAP intégré | S10 |
| M5 | UAT Terminée | 0 bug bloquant, sign-off utilisateurs | S12 |
| M6 | Go Live | Canary stable 3 jours, rollback testé | S13 |
| M7 | Clôture projet | REX validé, KPIs 30j post go-live | S17 |

## Estimation — T-Shirt Sizing & Planning Poker

### Référentiel T-Shirt Sizing pour user stories IA

```
TAILLE  STORY POINTS  EXEMPLES TYPIQUES
───────────────────────────────────────────────────────────
XS      1-2           Ajout d'une feature simple, bugfix
S       3             Feature engineering (1 variable), endpoint API simple
M       5             Entraînement modèle baseline, intégration service tiers
L       8             Pipeline ML bout-en-bout, dashboard monitoring complet
XL      13            Architecture nouveau composant, migration infrastructure
XXL     21            Ne PAS planifier — découper en histoires plus petites
```

### Vélocité & Capacité Sprint

```python
# sprint_capacity.py
from dataclasses import dataclass
from typing import List

@dataclass
class TeamMember:
    name: str
    role: str
    availability_pct: float   # 0.8 = 80%
    story_points_per_sprint: int = 0

def calculate_sprint_capacity(
    team: List[TeamMember],
    sprint_days: int = 10,
    ceremonies_days: float = 1.5,  # Sprint planning + review + retro
) -> dict:
    """Calcule la capacité d'un sprint en jours-homme et story points."""
    available_days = sprint_days - ceremonies_days

    total_person_days = sum(
        available_days * m.availability_pct
        for m in team
    )
    total_story_points = sum(m.story_points_per_sprint for m in team)

    return {
        "sprint_days": sprint_days,
        "ceremonies_overhead_days": ceremonies_days,
        "team_size": len(team),
        "available_person_days": round(total_person_days, 1),
        "estimated_velocity_sp": total_story_points,
        "focus_factor": round(available_days / sprint_days, 2),
    }

# Exemple équipe projet IA
team = [
    TeamMember("Alice", "Data Scientist", 0.8, story_points_per_sprint=18),
    TeamMember("Bob",   "ML Engineer",   1.0, story_points_per_sprint=20),
    TeamMember("Carol", "Data Engineer", 0.6, story_points_per_sprint=12),
    TeamMember("David", "PM/PO",         0.5, story_points_per_sprint=0),
]

capacity = calculate_sprint_capacity(team)
print(f"Vélocité estimée : {capacity['estimated_velocity_sp']} SP/sprint")
# Vélocité estimée : 50 SP/sprint
```

### Gantt Agile — Format de présentation hybride

```
SEMAINE  1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
         ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤
CADRAGE  [==========]
SPRINT 0             [=====]
SPRINT 1                   [=========]
SPRINT 2                               [=========]
SPRINT 3                                           [=========]
SPRINT 4                                                       [=========]
SPRINT 5                                                                   [=]
                     M2   M3           M4          M5         M6
```

### Backlog Initial — User Stories IA

```yaml
# product_backlog.yaml
epic: "Scoring de propension conversion"

user_stories:
  - id: US-01
    titre: "Feature engineering — données comportementales"
    en_tant_que: "Data Scientist"
    je_veux: "transformer les logs CRM en features temporelles (sessions/7j, 14j, 30j)"
    afin_de: "fournir des inputs de qualité au modèle"
    taille: L
    sprint: 1
    definition_of_done:
      - 15 features créées et documentées dans le feature catalog
      - Tests unitaires (coverage > 90%)
      - Validées par DG Commerciale (pertinence métier)

  - id: US-02
    titre: "Modèle baseline XGBoost"
    en_tant_que: "Data Scientist"
    je_veux: "entraîner un modèle XGBoost avec cross-validation 5-fold"
    afin_de: "établir un AUC baseline >= 0.75"
    taille: M
    sprint: 1
    definition_of_done:
      - AUC >= 0.75 sur holdout set
      - MLflow experiment loggé
      - Rapport confusion matrix + rapport de classification

  - id: US-03
    titre: "Explicabilité SHAP"
    en_tant_que: "Conseiller commercial"
    je_veux: "voir les 3 principales raisons du score d'un lead"
    afin_de: "personnaliser mon approche commerciale"
    taille: M
    sprint: 2
    criteres_acceptation:
      - SHAP values calculées et exposées dans la réponse API
      - Temps de calcul < 50ms par prédiction
```

## Livrables
- WBS complet et jalons avec critères de sortie Go/No-Go
- Planning sprint par sprint avec capacité calculée
- Backlog priorisé (épics + user stories + critères d'acceptation)
- Gantt agile pour présentation au Steering Committee
- Definition of Done et Definition of Ready
- Plan de gestion de la vélocité et des dérives

## Format de sortie
Précise : durée totale du projet, taille de l'équipe et rôles, contraintes dates clés (fiscales, réglementaires), méthode de gestion préférée (SAFe/Scrum/Kanban), outil de gestion projet (Jira/Linear/Azure DevOps), niveau d'expérience Agile de l'équipe.

## Anti-patterns
- ❌ **Gantt fixe rigide sur 18 mois** : illusion de prédictibilité, ingérable sur la partie expérimentale IA
- ❌ **Estimer en jours/homme absolus** au lieu de points relatifs (Planning Poker / T-shirt)
- ❌ **Story XXL (21) non découpée** : à refuser et fractionner avant planification
- ❌ **Phase data « découverte » zappée** : démarrer le dev IA sans audit qualité des données
- ❌ **Jalons sans critères de sortie Go/No-Go** mesurables (ex. AUC ≥ seuil)
- ❌ **Vélocité confondue avec engagement** : la capacité calculée ≠ promesse contractuelle

## Sources
- **PMBOK 7** (PMI 2021) — WBS, jalons, planification adaptative
- **PRINCE2 Agile** — PeopleCert/Axelos (gestion par phases + Agile delivery)
- **Grenning J.** — *Planning Poker* (2002) · **Cohn M.** — *Agile Estimating and Planning* (2005) — Story Points
- **SAFe** — PI Planning (scaledagileframework.com)

## Voir aussi
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — périmètre amont (source du WBS)
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — baseline planning → PV
- [`../scrum_master/planning-poker.md`](../scrum_master/planning-poker.md) — estimation relative (Grenning)
- [`../scrum/forecasting-planning.md`](../scrum/forecasting-planning.md) — forecasting vélocité
- [`gestion-risques-projet.md`](gestion-risques-projet.md) — risques de planning (RAID)
