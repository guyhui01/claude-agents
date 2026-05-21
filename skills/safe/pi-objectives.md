# Skill — PI Objectives — Rédaction et pilotage

> Certification : SAFe POPM 6 · SAFe Agilist
> Agent : AGENT-PO-SAFE.md

## Objectif
Rédiger des PI Objectives de qualité qui alignent les équipes sur les outcomes business et servent de boussole tout au long du Program Increment.

## Qu'est-ce qu'un PI Objective ?

Les PI Objectives sont les **engagements de l'ART** pour le PI, exprimés en résultats business — pas en tâches techniques.

```
❌ Mauvais PI Objective : "Développer le module de paiement Stripe"
✅ Bon PI Objective     : "Permettre aux clients B2B de payer en ligne 
                           avec validation en temps réel (taux d'erreur < 1%)"
```

## Types de PI Objectives

### 1. Business Objectives
Valeur directe pour les clients et le business.
```
Format : [Verbe d'action] + [Capacité/Feature] + [Bénéfice mesurable]

Exemples :
- "Livrer le catalogue produits filtrable (3 critères) avec temps de chargement < 2s"
- "Intégrer le paiement Stripe 3DS avec 0 bug critique en production"
- "Atteindre 95% de couverture BDD sur les US Must Have"
```

### 2. Stretch Objectives
Objectifs ambitieux, non engagés — "best effort".
```
- Marqués [Stretch] dans le PI Plan
- Livrés si vélocité > prévision ou scope réduit
- Ne pénalisent pas si non atteints
- Exemples : améliorations de performance, expérimentations UX
```

## Critères SMART pour les PI Objectives

| Critère | Question | Exemple |
|---|---|---|
| **S**pécifique | Qu'est-ce qu'on livre exactement ? | "Module historique commandes" |
| **M**esurable | Comment savoir si c'est atteint ? | "> 95% des commandes visibles" |
| **A**tteignable | Est-ce réaliste en 1 PI ? | Validé en PI Planning |
| **R**elevant | Aligné sur les OKR / thèmes stratégiques ? | Tracé vers OKR Q3 |
| **T**ime-bound | Délai fixe = fin du PI | Sprint N (date) |

## Processus de rédaction (PI Planning)

### Étape 1 — Draft Team Objectives (Jour 1 après-midi)
- Chaque équipe rédige ses team PI Objectives
- Format : 3-5 objectifs par équipe
- Inclure la confiance estimée (1-10)

### Étape 2 — ART PI Objectives (Jour 2 matin)
- Le PM/PO consolide les team objectives en ART objectives
- Éliminer les doublons, regrouper par thème
- Valider l'alignement avec les Business Owners

### Étape 3 — Business Value Review (Jour 2 après-midi)
- Les Business Owners notent chaque PI Objective (1-10)
- Discussion et ajustement si désalignement
- Score final = valeur attendue par le business

## Template PI Objectives — Format ART

```
PI [N] — [Trimestre] — ART [Nom]
Date de création : [date PI Planning]
═══════════════════════════════════════════════════════════

OBJECTIVE 1 : [Titre court et actionnable]
Description  : [1-2 phrases — quoi + pourquoi]
Critère      : [Comment mesurer l'atteinte]
Business Value (BOs) : [score /10]
Confiance équipe     : [score /10]
Statut fin PI        : [Atteint ✅ / Partiel ⚠️ / Non atteint ❌]

OBJECTIVE 2 : [...]
[idem]

STRETCH 1 : [Titre] [Stretch]
Description  : [...]
Confiance    : [4-6/10 max pour un stretch]
Statut       : [Livré ✅ / Non livré (acceptable) ⬜]

─────────────────────────────────────────────────────────
SCORE TOTAL
Business Value planifiée : [somme scores BOs]
Business Value réalisée  : [score à la fin du PI]
Predictability           : [réalisé / planifié × 100] %
```

## Pilotage des PI Objectives en cours de PI

### PO Sync hebdomadaire — Suivi PI Objectives
```
| Objective | BV | Confiance J1 | Confiance J14 | Confiance J21 | Statut |
|-----------|----|--------------|----|----|----|
| OBJ-1     | 8  | 8/10         | 7/10 | 6/10 | ⚠️ Risque |
| OBJ-2     | 9  | 9/10         | 9/10 | 9/10 | ✅ On track |
| OBJ-3     | 6  | 5/10         | 3/10 | 2/10 | 🔴 Escalade |
```

### Signaux d'alerte
- Confiance < 5/10 → action corrective immédiate
- Confiance en baisse 2 semaines consécutives → escalade au RTE
- Dépendance non résolue → mise à jour Program Board
