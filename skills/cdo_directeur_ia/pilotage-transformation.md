# Skill — Pilotage de la Transformation Data-IA

> Certifications : PMI-ACP (Agile Certified Practitioner), SAFe 6.0 Program Consultant, CDMP Data Management 2026, Change Management Practitioner (Prosci ADKAR)

## Objectif

Piloter la transformation Data-IA d'une organisation avec des OKRs robustes, un tableau de bord stratégique CODIR, un reporting adapté aux instances décisionnelles et un suivi de la maturité data dans le temps.

## Framework OKR pour la transformation Data-IA

### Architecture OKR sur 3 horizons

```
HORIZON 1 — Trimestriel (Équipes opérationnelles)
  O: "Fiabiliser la data pipeline clients"
    KR1: Taux de disponibilité pipeline > 99%
    KR2: Latence ingestion < 30 min pour 100% des flux
    KR3: Zéro incident data critique non-résolu > 24h

HORIZON 2 — Annuel (Management intermédiaire)
  O: "Déployer 5 use cases IA en production"
    KR1: 5 modèles en prod avec SLA défini
    KR2: ROI cumulé > 2 M€ documenté
    KR3: NPS équipes métier sur les outils data > 7/10

HORIZON 3 — Pluriannuel (Direction / CODIR)
  O: "Devenir une entreprise data-driven d'ici 2028"
    KR1: 80% décisions CODIR appuyées sur données
    KR2: Score Data Maturity TDMM ≥ 4/5
    KR3: Data literacy certifiée pour 60% des managers
```

### Rituels OKR Data-IA

| Rituel | Fréquence | Participants | Durée | Objectif |
|--------|-----------|-------------|-------|---------|
| OKR Weekly | Hebdomadaire | Équipes data | 30 min | Blocages + progrès |
| OKR Review | Mensuelle | Managers data | 1h | Scoring KR, ajustements |
| Steering Committee | Mensuelle | CDO + métiers | 1h30 | Priorités + arbitrages |
| CODIR Data | Trimestrielle | CODIR complet | 45 min | Vision + budget |
| Annual OKR Reset | Annuelle | Organisation data | 2 jours | Définir nouveaux OKRs |

## Tableau de bord stratégique CODIR

### Structure du reporting CODIR (format one-pager)

```
┌─────────────────────────────────────────────────────────┐
│  DASHBOARD DATA-IA — T3 2026                            │
├──────────────┬──────────────┬─────────────┬─────────────┤
│  VALEUR      │  PLATEFORME  │  ÉQUIPE     │  RISQUES    │
│  GÉNÉRÉE     │  & DATA      │  & CULTURE  │             │
│              │              │             │             │
│  5,2 M€ ROI  │  Uptime 99.4%│  18 certif. │  2 incidents│
│  ↑ +800k vs  │  ↑ vs 98.7%  │  ↑ +5 vs T2 │  clôturés   │
│  T2          │  T2          │             │  0 en cours │
│              │              │             │             │
│  8 use cases │  DQ Score    │  NPS data   │  RGPD : OK  │
│  en prod     │  94.2%       │  teams: 7.8 │  AI Act: En │
│  ↑ +2 vs T2  │  → stable    │  /10        │  cours      │
└──────────────┴──────────────┴─────────────┴─────────────┘

TOP 3 INITIATIVES DU TRIMESTRE
  1. [En cours] Modèle scoring crédit — Phase 2 (MLOps)
  2. [Livré]    Data Catalogue 100% domaines critiques
  3. [Lancé]    Programme Data Literacy 300 managers

ALERTES & DÉCISIONS NÉCESSAIRES
  ! Budget supplémentaire requis pour GPU cloud (+ 80 k€)
  ! Recrutement Data Engineer — 3 candidats en shortlist
```

### Métriques par pilier stratégique

| Pilier | KPI | Mesure | Fréquence | Cible |
|--------|-----|--------|-----------|-------|
| **Valeur** | ROI portefeuille IA | M€ cumulés | Trimestriel | > 5 M€/an |
| **Valeur** | Use cases en prod | Nb | Mensuel | +2/trimestre |
| **Plateforme** | Disponibilité data platform | % uptime | Hebdo | > 99.5% |
| **Plateforme** | Data Quality Score | % | Mensuel | > 95% |
| **Culture** | NPS équipes data | /10 | Semestriel | > 7 |
| **Culture** | Taux certifications IA | % équipe | Trimestriel | > 80% |
| **Risques** | Incidents P1/P2 ouverts | Nb | Hebdo | 0 P1, < 3 P2 |
| **Risques** | Conformité AI Act | % systèmes | Trimestriel | 100% critiques |

## Data Maturity Tracking

### Modèle de suivi trimestriel (spider chart)

```python
# Génération du radar chart de maturité data
import plotly.graph_objects as go

dimensions = [
    "Gouvernance", "Architecture", "Qualité",
    "Sécurité", "Analytics", "IA/ML", "Culture"
]

scores_t2_2026 = [3.2, 2.8, 3.5, 3.0, 2.5, 2.0, 2.8]
scores_t3_2026 = [3.5, 3.1, 3.7, 3.2, 3.0, 2.5, 3.2]
cible_2027     = [4.0, 4.0, 4.5, 4.0, 4.0, 3.5, 4.0]

fig = go.Figure()
fig.add_trace(go.Scatterpolar(r=scores_t2_2026, theta=dimensions, name="T2 2026"))
fig.add_trace(go.Scatterpolar(r=scores_t3_2026, theta=dimensions, name="T3 2026"))
fig.add_trace(go.Scatterpolar(r=cible_2027, theta=dimensions, name="Cible 2027",
                               line=dict(dash='dot')))
fig.update_layout(polar=dict(radialaxis=dict(range=[0, 5])))
fig.show()
```

## Gestion du changement (Prosci ADKAR)

| Phase ADKAR | Actions Data-IA | Indicateurs |
|-------------|-----------------|-------------|
| **Awareness** | Roadshows CODIR, newsletters data, vidéos CDO | % collaborateurs informés |
| **Desire** | Champions data par BU, success stories | Nb early adopters |
| **Knowledge** | Formations data literacy, workshops IA | Taux de complétion |
| **Ability** | Accompagnement terrain, CoP IA | Nb utilisateurs actifs outils |
| **Reinforcement** | Reconnaissance, intégration RH, OKRs équipes | Taux de rétention pratiques |

## Livrables

- Framework OKR Data-IA (3 horizons, rituels, templates)
- Tableau de bord CODIR trimestriel (PowerPoint + Power BI)
- Scorecard mensuel CDO (50 métriques organisées en 5 piliers)
- Radar de maturité data trimestriel (avec historique)
- Plan de conduite du changement (ADKAR appliqué à la transformation data)
- Guide de reporting par niveau (opérationnel / management / CODIR)

## Format de sortie

Précise : **audience principale** (CODIR / CDO / équipes), **nombre de domaines/BU**, **OKRs déjà définis** (ou à créer), **outils de reporting** disponibles (Power BI / Tableau / Looker), **fréquence de reporting souhaitée**, **enjeux transformation** prioritaires (plateforme / culture / gouvernance / ROI).
