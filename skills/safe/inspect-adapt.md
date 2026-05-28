# Skill SAFe — Inspect & Adapt (I&A)

> Certification : SAFe POPM 6 · SAFe Agilist · SAFe RTE · SAFe SPC
> Agents : AGENT-PO-SAFE.md · AGENT-RELEASE-TRAIN-ENGINEER.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objectif
Faciliter l'événement Inspect & Adapt en fin de PI — PI System Demo, analyse quantitative des métriques, rétrospective ART et Problem-Solving Workshop (PSW) — pour identifier et engager les améliorations continues de l'Agile Release Train.

## Agenda I&A (4 heures) — détail minute-by-minute

```
INSPECT & ADAPT — PI-[N] — [DATE]
Participants : Toute l'ART + Business Owners + Stakeholders

09h00  PI System Demo (60 min)
       → Chaque équipe démontre ses features livrées (5-8 min/équipe)
       → Questions des stakeholders

10h00  ──── BREAK 15 min ────

10h15  Quantitative & Qualitative Review (45 min)
       → RTE présente les métriques PI (PI Predictability, Flow, DORA)
       → Revue des PI Objectives (engagés vs livrés)
       → Analyse des impediments récurrents

11h00  Rétrospective ART (30 min)
       → Format : Start / Stop / Continue
       → Votes sur les thèmes prioritaires

11h30  Problem-Solving Workshop (75 min)
       → Identification du problème principal (1 problème)
       → Root Cause Analysis (Fishbone Ishikawa / 5 Pourquoi)
       → Solutions et actions SMART

12h45  Présentation des actions I&A (15 min)
13h00  FIN
```

## Métriques PI à analyser
- **PI Predictability** : Business Value réelle / Business Value planifiée (cible **80-100%**)
- **Flow Metrics SAFe 6** : Flow Velocity, Flow Time, Flow Load, Flow Distribution, Flow Efficiency
- **DORA Metrics** : Deployment Frequency, Lead Time for Changes, Change Failure Rate, MTTR
- **Vélocité** par équipe et par train
- **Qualité** : bugs échappés, dette technique accumulée, taux défauts production
- **Satisfaction équipes** (vote de confiance)

## Problem-Solving Workshop — Méthode

```
Étape 1 : Identifier le problème racine (5 Whys / Fishbone Ishikawa)
Étape 2 : Brainstorming solutions
Étape 3 : Sélectionner les solutions (vote par points / Dot Voting)
Étape 4 : Plan d'actions SMART avec propriétaires et mesures
Étape 5 : Présentation et engagement de l'équipe
```

### Fishbone Ishikawa — 5 catégories de causes

```
PROBLÈME IDENTIFIÉ : [En 1 phrase précise]
Ex : "Le taux de défauts échappés en production est de 18% (cible < 10%)"

ANALYSE CAUSES RACINES (Ishikawa — 5M)
────────────────────────────────────────────────────────────
Personnes      : Tests manuels insuffisants, manque formation QA
Process        : Pas de Definition of Done claire sur les tests
Outils         : Couverture de tests automatiques < 40%
Environnement  : Environnement de test instable
Management     : Tests planifiés trop tard dans le sprint

CAUSES RACINES RETENUES (vote Dot)
1. Couverture tests automatiques insuffisante (40% → cible 80%)
2. DoD ne mentionne pas les tests de régression

ACTIONS SMART PI+1
────────────────────────────────────────────────────────────
Action 1 : Augmenter couverture tests à 65% d'ici fin PI+1
  Propriétaire : Tech Lead Équipe Alpha
  Mesure : SonarQube metric
  
Action 2 : Ajouter "régression couverte" dans la DoD ART
  Propriétaire : RTE + Tous les SM
  Mesure : DoD validée avant Sprint 1 PI+1
```

## Template rapport I&A

```
Inspect & Adapt — PI [N] — [Date]

PI Predictability : [X]% (BV réelle [X] / BV planifiée [X])
Vélocité moyenne train : [X] pts/sprint
Flow Efficiency : [X]% (cible > 15%)

Problèmes identifiés :
1. [Problème] → Cause racine : [...]
   Action : [action SMART] — Responsable : [prénom] — Délai : [date]

Engagement équipe : [vote de confiance moyen : X/5]
```

## Livrables
- Compte-rendu I&A complet
- Métriques PI documentées (Predictability, Flow, DORA)
- Problem-Solving Workshop résumé
- Actions I&A PI+1 (SMART, propriétaires, mesures)

## Format de sortie
Précise : métriques PI (PI Predictability, Flow), problèmes récurrents identifiés, participants attendus, format (présentiel / distanciel).
