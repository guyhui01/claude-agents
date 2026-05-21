# Skill — Amélioration Continue (Kaizen Agile)
> Certifications : PSM III · SAFe SASM · Lean Six Sigma Green Belt · ICAgile ICP-ENT

## Objectif
Instaurer une culture d'amélioration continue dans les équipes Scrum en utilisant les principes Lean/Kaizen pour éliminer le gaspillage et maximiser la valeur délivrée.

## Cadre d'amélioration continue Agile

### Roue de Deming (PDCA) appliquée à Scrum
```
PLAN  → Identifier le problème + définir l'action (Sprint Rétro)
DO    → Implémenter l'action dans le sprint suivant
CHECK → Mesurer l'effet lors de la rétro suivante
ACT   → Standardiser si succès, ajuster si échec

Cadence : 1 cycle PDCA par sprint (2 semaines)
```

### Les 8 gaspillages Lean (appliqués au développement logiciel)
```
TRANSPORT    → Handoffs inutiles (entre équipes, entre outils)
STOCK        → Work In Progress (WIP) excessif, backlog surchargé
MOUVEMENT    → Réunions inutiles, multitasking, outils inadaptés
ATTENTE      → Blocages sur dépendances, revues de code en attente
SURPRODUCTION→ Features non demandées, over-engineering
SURTRAITEMENT→ Documentation excessive, validations redondantes
DÉFAUTS      → Bugs, dette technique, relivraisons
COMPÉTENCES  → Talents non utilisés, silos de connaissances

Exercice Muda Walk : L'équipe identifie les gaspillages dans son flux
→ Durée : 30 min en atelier
→ Outil : Value Stream Mapping simplifié
```

## Value Stream Mapping (VSM)
```
Étapes pour cartographier le flux de valeur :
1. Identifier le "product family" (ex: livraison d'une US en prod)
2. Cartographier l'état actuel (AS-IS) :
   [ Idée ] → [ Backlog ] → [ Sprint ] → [ Dev ] → [ Review ] → [ Prod ]
   Pour chaque étape : Lead Time / Process Time / % Complete & Accurate
3. Identifier les goulots et gaspillages
4. Concevoir l'état futur (TO-BE)
5. Plan d'action priorisé

Métriques clés :
  Cycle Time    = temps de Dev à Done
  Lead Time     = temps de Idée à Prod (valeur client)
  Flow Ratio    = Process Time / Lead Time × 100 (% valeur réelle)
  Objectif Flow Ratio > 25%
```

## Métriques d'amélioration continue

### Team Health Metrics (tableau de bord)
```python
# Métriques à tracker sprint par sprint
metrics = {
    "velocite": {
        "valeur": [34, 38, 35, 40, 42],   # SP par sprint
        "tendance": "stabilisation → croissance progressive",
        "alerte": "variance > 20% = problème sous-jacent"
    },
    "cycle_time": {
        "valeur": [3.2, 2.8, 2.5, 2.3],   # jours de Done à Prod
        "cible": "< 2 jours",
        "levier": "WIP limits, Definition of Done"
    },
    "taux_bugs": {
        "valeur": [12, 9, 7, 5],           # bugs par sprint
        "cible": "< 5% des SP livrés",
        "levier": "TDD, revue de code, tests automatisés"
    },
    "dette_technique": {
        "valeur_pct": [30, 28, 25, 22],    # % sprint dédié à la dette
        "cible": "< 20% soit ~20% du backlog",
        "levier": "Budget tech debt sprint, boy scout rule"
    }
}
```

### Obeya Room (Management Visuel)
```
Configuration recommandée (physique ou digital) :
┌──────────────────────────────────────────────────────┐
│  OBJECTIFS          │  MÉTRIQUES          │  ACTIONS │
│  (OKRs du trimestre)│  (vélocité, bugs)   │  (Kaizen)│
├──────────────────────────────────────────────────────┤
│  RISQUES            │  IMPEDIMENTS        │  AIDE ?  │
│  (top 3 risques)    │  (bloquants actifs) │  (besoin)│
└──────────────────────────────────────────────────────┘
Review hebdomadaire : 15 min debout, tous présents
```

## Techniques d'amélioration

### Kaizen Event (atelier de 2h)
```
Déclencheur : problème récurrent depuis > 3 sprints
Structure :
  T+0h00 : Définir le problème précisément (données, pas ressenti)
  T+0h30 : Analyse causale (5 Pourquoi ou Ishikawa)
  T+1h00 : Générer des solutions (brainstorming)
  T+1h30 : Prioriser par Impact / Effort (quadrant)
  T+1h45 : Définir les actions SMART + responsables
  T+2h00 : Clôture + planification du suivi

Règles :
  ✅ Équipe complète présente
  ✅ Data-driven (pas d'opinions non étayées)
  ✅ Focus sur le processus, pas sur les personnes
  ❌ Pas de recherche de coupable
```

### Les 5 Pourquoi
```
Exemple — Bug en production non détecté :
  Pourquoi 1 → Le bug est parti en prod
  Pourquoi 2 → Il n'était pas dans les tests automatisés
  Pourquoi 3 → La feature a été développée sans tests unitaires
  Pourquoi 4 → Pas de règle dans la Definition of Done
  Pourquoi 5 → La DoD n'a jamais été définie collectivement

Action racine : Atelier DoD avec l'équipe + règle TDD obligatoire
→ Traitez la cause racine, pas le symptôme
```

## Definition of Done (DoD) — Template
```
Une User Story est DONE quand :
  ☐ Code développé et revu (pair review ou PR review)
  ☐ Tests unitaires écrits (coverage > 80%)
  ☐ Tests d'intégration passent
  ☐ Tests de régression automatisés OK
  ☐ Critères d'acceptation validés par le PO
  ☐ Déployé en environnement de recette
  ☐ Documentation mise à jour (si applicable)
  ☐ Pas de dette technique ajoutée (ou documentée)
  ☐ Performance validée (si applicable)
```

## Livrables
- Rapport de Value Stream Mapping (AS-IS + TO-BE)
- Team Health Dashboard (sprint par sprint)
- Backlog d'amélioration continue (Kaizen Backlog)
- Compte-rendu des Kaizen Events
- Definition of Done formalisée et validée par l'équipe

## Format de sortie
Précise : problème récurrent identifié · métriques actuelles disponibles · taille de l'équipe · maturité Lean/Agile · contraintes organisationnelles
