# Skill — Framework OKR & KPIs Data-IA

> Certifications : OKR Professional (Perdoo / What Matters), CDMP Data Management 2026, Google Analytics Certified, Tableau Desktop Specialist

## Objectif

Définir un framework OKR complet pour les équipes Data-IA, avec des KPIs opérationnels par fonction (Data Engineering, Data Science, MLOps, Analytics) et une North Star Metric alignée sur la création de valeur.

## Architecture du framework OKR Data-IA

### Hiérarchie sur 4 niveaux

```
Niveau 1 — ENTREPRISE (annuel)
    "Devenir data-driven leader de notre secteur"
        │
Niveau 2 — CDO / DATA DIRECTION (trimestriel)
    "Valoriser les données pour accélérer la croissance"
        │
Niveau 3 — ÉQUIPES DATA (trimestriel)
    Data Engineering | Data Science | Analytics | Governance
        │
Niveau 4 — INDIVIDUEL (mensuel)
    Objectifs personnels alignés sur l'équipe
```

## OKRs par fonction — Bibliothèque 2026

### Data Engineering

```yaml
Objectif: "Construire une plateforme data fiable et scalable"

KR1:
  libellé: "Disponibilité des pipelines critiques"
  mesure: "% uptime pipelines Tier-1"
  baseline: "97.5%"
  cible: "99.5%"
  fréquence: "Hebdomadaire"

KR2:
  libellé: "Latence d'ingestion réduite"
  mesure: "P95 latence batch ingestion (minutes)"
  baseline: "120 min"
  cible: "< 30 min"
  fréquence: "Journalière"

KR3:
  libellé: "Couverture tests data"
  mesure: "% tables avec dbt tests définis"
  baseline: "35%"
  cible: "80%"
  fréquence: "Mensuelle"

KR4:
  libellé: "Dette technique data réduite"
  mesure: "Nb pipelines legacy migrés vers nouvelle stack"
  baseline: "0"
  cible: "15 pipelines"
  fréquence: "Mensuelle"
```

### Data Science & Machine Learning

```yaml
Objectif: "Déployer des modèles IA qui génèrent de la valeur mesurable"

KR1:
  libellé: "Modèles en production"
  mesure: "Nb modèles ML actifs avec SLA défini"
  baseline: "3"
  cible: "8"
  fréquence: "Mensuelle"

KR2:
  libellé: "ROI des modèles IA"
  mesure: "Valeur cumulée générée par les modèles (k€)"
  baseline: "800 k€"
  cible: "3 000 k€"
  fréquence: "Trimestrielle"

KR3:
  libellé: "Réduction time-to-deploy"
  mesure: "Délai moyen POC → Production (semaines)"
  baseline: "16 semaines"
  cible: "8 semaines"
  fréquence: "Par projet"

KR4:
  libellé: "Performance des modèles en prod"
  mesure: "% modèles avec performance ≥ baseline initiale"
  baseline: "60%"
  cible: "90%"
  fréquence: "Mensuelle"
```

### MLOps

```yaml
Objectif: "Industrialiser le cycle de vie des modèles IA"

KR1:
  libellé: "Automatisation du déploiement"
  mesure: "% modèles déployés via CI/CD automatisé"
  baseline: "20%"
  cible: "90%"
  fréquence: "Mensuelle"

KR2:
  libellé: "Monitoring data drift"
  mesure: "% modèles en prod avec monitoring actif"
  baseline: "33%"
  cible: "100%"
  fréquence: "Mensuelle"

KR3:
  libellé: "MTTR incidents ML"
  mesure: "Temps moyen résolution incident modèle (heures)"
  baseline: "48h"
  cible: "< 4h"
  fréquence: "Par incident"

KR4:
  libellé: "Réutilisation features"
  mesure: "% features provenant du Feature Store"
  baseline: "5%"
  cible: "40%"
  fréquence: "Trimestrielle"
```

### Analytics & Business Intelligence

```yaml
Objectif: "Démocratiser l'accès à la donnée pour toutes les équipes"

KR1:
  libellé: "Adoption des outils BI"
  mesure: "Nb utilisateurs actifs mensuels BI (DAU/MAU)"
  baseline: "80 utilisateurs"
  cible: "250 utilisateurs"
  fréquence: "Mensuelle"

KR2:
  libellé: "Self-service analytics"
  mesure: "% requêtes ad hoc résolues sans l'équipe data"
  baseline: "20%"
  cible: "60%"
  fréquence: "Mensuelle"

KR3:
  libellé: "NPS sur les dashboards"
  mesure: "Score satisfaction utilisateurs tableaux de bord"
  baseline: "6.5/10"
  cible: "8.0/10"
  fréquence: "Semestrielle"
```

## North Star Metric Data-IA

### Définition et calcul

```
NORTH STAR METRIC proposée :
"Data Value Score" (DVS)

Formule :
DVS = (Nb_use_cases_prod × Valeur_moyenne_k€)
      × Qualite_donnees_%
      × Taux_adoption_%

Exemple T3 2026 :
DVS = (8 × 380) × 0.942 × 0.65
    = 3 040 × 0.942 × 0.65
    = 1 863 (points)

Cible fin 2027 : DVS > 5 000

Pourquoi cette métrique ?
→ Capture la quantité (nb use cases)
→ Capture la qualité (DQ score)
→ Capture l'adoption (taux d'utilisation réelle)
→ Évite les vanity metrics (nb modèles entraînés ≠ valeur)
```

## Tableau de bord KPIs par fonction

| Fonction | KPI Tier-1 | KPI Tier-2 | Alert |
|----------|-----------|-----------|-------|
| Data Engineering | Uptime pipelines | Latence, Dette technique | < 99% |
| Data Science | Nb modèles en prod | Time-to-deploy, ROI | 0 nouveau/trimestre |
| MLOps | MTTR incidents | Taux CI/CD, Monitoring | MTTR > 8h |
| Analytics | MAU BI tools | NPS, Self-service rate | NPS < 6 |
| Governance | DQ Score | Data catalogue coverage | < 90% |
| CoE IA | DVS (North Star) | Toutes fonctions | DVS stagnant |

## Livrables

- Framework OKR complet (4 niveaux, templates par fonction)
- Bibliothèque de KPIs Data-IA (50+ KPIs classés par fonction)
- North Star Metric définie avec formule de calcul
- Tableau de bord OKR (Notion / ClickUp / Perdoo template)
- Guide de cadence OKR (rituels, scoring, retrospectives)
- Présentation "OKR Data-IA" pour lancement organisationnel (20 slides)

## Format de sortie

Précise : **fonctions data présentes** dans l'organisation, **OKRs existants** (ou partir de zéro), **outil de suivi OKR** (Notion / ClickUp / Lattice / Perdoo), **horizon temporel** (trimestriel / annuel), **North Star Metric déjà définie** (ou à co-construire), **niveau de maturité** des équipes sur les OKRs.
