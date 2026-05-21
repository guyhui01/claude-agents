# Skill — Gouvernance des Données (DAMA DMBOK v2)

> Certifications : CDMP Associate/Practitioner (DAMA International) 2026, Data Governance Professional (DGSP), ISO/IEC 38505 Data Governance

## Objectif

Concevoir et déployer un programme de gouvernance des données aligné sur le référentiel DAMA DMBOK v2, en couvrant les 11 disciplines, le modèle de stewardship et l'évaluation de maturité.

## Les 11 disciplines DAMA DMBOK v2

### Roue DAMA — Vue d'ensemble

```
                    [Data Governance]
                         (Centre)
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
[Data Architecture]  [Data Modeling]  [Data Storage & Ops]
[Data Security]      [Data Integration]  [Document & Content]
[Reference & Master Data]  [Data Warehousing & BI]
[Metadata Management]  [Data Quality]
```

### Tableau des disciplines par priorité de déploiement

| Priorité | Discipline | Livrables clés | Outils 2026 |
|----------|-----------|----------------|-------------|
| 1 | Data Governance | Charte, RACI, politiques | Collibra, Atlan |
| 2 | Data Quality | DQ Rules, scorecards | Great Expectations, Soda |
| 3 | Metadata Management | Data Catalogue | DataHub, Alation |
| 4 | Reference & Master Data | MDM Hub, Golden Record | Informatica MDM, Reltio |
| 5 | Data Security | Classification, masking | Privacera, Immuta |
| 6 | Data Architecture | Blueprints, modèles logiques | dbt, Erwin |

## Modèle opérationnel de gouvernance

### Structure de stewardship

```yaml
Niveaux_de_gouvernance:
  Stratégique:
    instance: "Data Governance Council (DGC)"
    membres: ["CDO", "DSI", "DG", "DPO", "Directeurs Métiers"]
    fréquence: "Trimestrielle"
    missions: ["Politique globale", "Arbitrages", "Budget"]

  Tactique:
    instance: "Data Stewardship Committee"
    membres: ["Data Stewards par domaine", "Data Architects", "Data Quality Manager"]
    fréquence: "Mensuelle"
    missions: ["Standards", "Résolution conflits", "KPIs qualité"]

  Opérationnel:
    instance: "Data Stewards réseau"
    membres: ["1 Data Steward par domaine métier"]
    fréquence: "Continue"
    missions: ["Validation données", "Définition métier", "Incidents qualité"]
```

### RACI type pour la gouvernance des données

| Activité | CDO | Data Steward | Data Owner | Data Engineer | DPO |
|----------|-----|-------------|------------|---------------|-----|
| Définir politique données | A | C | C | I | C |
| Valider définitions métier | I | R | A | I | I |
| Gérer incidents qualité | I | R | A | R | I |
| Classifier données sensibles | C | R | I | I | A |
| Publier dans le catalogue | I | R | C | R | I |

**R=Responsible, A=Accountable, C=Consulted, I=Informed**

### Modèle de maturité DMM (CMMI for Data Management)

| Niveau | Score | Description | Indicateurs |
|--------|-------|-------------|-------------|
| 1 — Initial | 0-1 | Ad hoc, réactif | Pas de politiques formelles |
| 2 — Géré | 1-2 | Pratiques locales | Quelques stewards nommés |
| 3 — Défini | 2-3 | Processus standardisés | Catalogue peuplé, DQ mesurée |
| 4 — Mesuré | 3-4 | Indicateurs pilotés | SLA données, tableau de bord |
| 5 — Optimisé | 4-5 | Amélioration continue | IA au service de la gouvernance |

## Mise en oeuvre : plan de déploiement 12 mois

```
Mois 1-3   : Diagnostic DMM + design organisationnel
Mois 4-6   : Nommer Data Owners/Stewards + charte de gouvernance
Mois 7-9   : Déployer data catalogue + premières DQ rules
Mois 10-12 : MDM pilote (domaine client) + tableau de bord gouvernance
```

### Politique de qualité des données — exemple

```python
# Great Expectations — exemple de suite de règles DQ
import great_expectations as gx

context = gx.get_context()
suite = context.add_expectation_suite("clients_golden_record")

# Complétude
suite.add_expectation(gx.expectations.ExpectColumnValuesToNotBeNull(
    column="client_id", meta={"criticite": "BLOQUANTE"}))

# Unicité
suite.add_expectation(gx.expectations.ExpectColumnValuesToBeUnique(
    column="siret", meta={"criticite": "BLOQUANTE"}))

# Format
suite.add_expectation(gx.expectations.ExpectColumnValuesToMatchRegex(
    column="email", regex=r"^[\w.-]+@[\w.-]+\.\w{2,}$"))

# Fraîcheur
suite.add_expectation(gx.expectations.ExpectColumnValuesToBeBetween(
    column="date_maj", min_value="2024-01-01",
    meta={"criticite": "MAJEURE"}))
```

## Livrables

- Charte de gouvernance des données (politique + principes)
- Organigramme de gouvernance avec fiches de rôle Data Owner / Steward
- Cartographie des domaines data avec responsables
- Glossaire métier (data catalogue peuplé — 100 termes minimum)
- Framework de qualité des données (dimensions, règles, SLA)
- Tableau de bord de gouvernance (métriques DAMA par discipline)
- Plan de déploiement 12 mois avec jalons et ressources

## Format de sortie

Précise : **périmètre organisationnel** (tous domaines ou domaine pilote), **secteur** (réglementations applicables : RGPD, secteur financier, santé), **outils data existants** (catalogue, MDM, qualité), **nombre de domaines métier**, **niveau de maturité actuel** (1-5 DMM), **budget alloué à la gouvernance**.
