# Skill — Solution Train et Large Solution SAFe

> Certification : SAFe POPM 6 · SAFe LPM
> Agent : AGENT-PO-SAFE.md

## Objectif
Coordonner plusieurs ARTs (Agile Release Trains) dans le cadre du niveau Large Solution SAFe pour livrer des solutions complexes nécessitant plusieurs centaines de personnes.

## Quand utiliser le niveau Large Solution ?

Le niveau Large Solution s'applique quand :
- Le produit nécessite **plusieurs ARTs** (> 150 personnes)
- Les systèmes sont **cyber-physiques** (embarqué, défense, aéronautique)
- Les **dépendances cross-ART** sont nombreuses et complexes
- Un **Solution Train** est nécessaire pour coordonner

## Structure du Solution Train

```
SOLUTION TRAIN
├── Solution Manager / Solution PM
├── Solution Architect
├── Solution Train Engineer (STE)
│
├── ART 1 (Release Train Engineer + équipes Scrum)
│   ├── Feature Team A
│   ├── Feature Team B
│   └── Feature Team C
│
├── ART 2 (RTE + équipes)
│   ├── Feature Team D
│   └── Feature Team E
│
└── ART 3 (RTE + équipes)
    ├── Feature Team F
    └── Feature Team G
```

## Rôles clés du niveau Large Solution

| Rôle | Responsabilité |
|---|---|
| **Solution Manager** | Vision solution, Backlog Solution, stakeholders |
| **Solution Architect** | Architecture cross-ART, Capabilities, enablers |
| **Solution Train Engineer (STE)** | Coordination RTEs, cadence Solution Train |
| **Business Owner** | Validation solution, financement, ROI |
| **Customer** | Besoins réels, validation, acceptance |

## Backlog Solution — Capabilities

### Capabilities vs Features

```
Portfolio   → Epics (très large scope, financement LPM)
                │
Large Sol.  → Capabilities (cross-ART, 1-2 PIs)
                │
ART         → Features (1 ART, 1 PI)
                │
Equipe      → User Stories (1 sprint)
```

### Format d'une Capability
```
Titre : [Verbe + Objet] pour [utilisateur / système]
Benefit Hypothesis : "En livrant [capability], nous permettrons à 
                      [utilisateur] d'atteindre [résultat]."
Acceptance Criteria (SMART) :
  1. [Critère mesurable 1]
  2. [Critère mesurable 2]
Split : [Feature ART-1] + [Feature ART-2] + [Feature ART-3]
```

## Événements du Solution Train

### Pre-PI Planning (Large Solution)
- **Qui** : Solution Management + Architects + RTEs
- **Quand** : 1-2 jours avant le PI Planning de chaque ART
- **Objectif** : Aligner les inputs (Capabilities, contraintes, dépendances cross-ART)

### Solution Demo
- **Qui** : Toutes les équipes du Solution Train
- **Quand** : Fin de chaque iteration (ou IP Sprint)
- **Objectif** : Démontrer l'intégration cross-ART fonctionnelle
- **Durée** : 2-4h selon la complexité

### Post-PI Planning (Large Solution)
- **Qui** : Solution Management + Architects + RTEs
- **Quand** : 1-2 jours après le PI Planning des ARTs
- **Objectif** : Consolider les PI Plans, identifier les dépendances résiduelles

## Gestion des dépendances cross-ART

### Solution Kanban
```
Backlog → Analyse → Implémentation → Démo → Déployé
  (Capabilities non commencées)      (Solution Demo validée)
```

### Matrice des dépendances
| Feature / Capability | ART Producteur | ART Consommateur | Sprint livraison | Statut |
|---|---|---|---|---|
| API Auth | ART-1 | ART-2 + ART-3 | Sprint 2 | ⏳ En cours |
| Data Model | ART-2 | ART-1 | Sprint 1 | ✅ Livré |
