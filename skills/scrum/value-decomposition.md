# Skill — Décomposition de la valeur et Value Stream Mapping produit

> Certification : PSPO II · PSPO III
> Agent : AGENT-PO-SCRUM.md

## Objectif
Identifier et éliminer les gaspillages dans le flux de valeur produit, du besoin utilisateur jusqu'à la mise en production, pour maximiser la valeur livrée par sprint.

## Value Stream Mapping produit (niveau équipe)

### Étapes du flux de valeur typique
```
Idée/Besoin → Discovery → Backlog → Refinement → Sprint → Test → Déploiement → Utilisateur
    [2j]        [5j]        [3j]      [2j]          [10j]    [2j]    [1j]          [0j]
```

### Métriques clés à mesurer
- **Lead Time** : durée totale idée → production
- **Process Time** : durée de travail actif uniquement
- **Flow Efficiency** : Process Time / Lead Time × 100 (objectif : >40%)
- **Cycle Time** : durée moyenne d'une US en développement actif

### Identification des gaspillages (MUDA)
| Gaspillage | Exemple produit | Solution |
|---|---|---|
| Surproduction | Features livrées non utilisées | Hypothesis-driven development |
| Attente | US bloquées en review 3 jours | Limiter le WIP, DoD claire |
| Transport | Handoffs multiples PO→Dev→QA | Équipe cross-fonctionnelle |
| Surtraitement | Documentation excessive | Just enough documentation |
| Inventaire | Backlog > 3 sprints de travail | Backlog = living document |
| Défauts | Bugs détectés en production | Shift-left testing, DoD |
| Sous-utilisation | Dev non impliqués en discovery | Dual track agile |

## Techniques de décomposition de valeur

### 1. Story Splitting (découpage des US)
**Patterns SPIDR :**
- **S**pikes : séparer l'exploration de l'implémentation
- **P**aths : un chemin utilisateur = une US
- **I**nterfaces : desktop d'abord, mobile ensuite
- **D**ata : sous-ensemble de données d'abord
- **R**ules : règle métier simple d'abord, complexe ensuite

**Test de la valeur indépendante :**
```
Chaque US doit répondre OUI à :
□ Livrable indépendamment en production ?
□ Testable sans dépendance bloquante ?
□ Valeur perceptible par l'utilisateur seule ?
```

### 2. User Story Mapping — Découpe verticale
```
BACKBONE (Activités)
├── Trouver un produit → Rechercher → Filtrer → Voir la fiche
├── Acheter → Panier → Checkout → Paiement → Confirmation
└── Gérer → Historique → Retours → Profil

WALKING SKELETON (MVP vertical — 1 US par activité)
RELEASE 1 (fonctionnalités essentielles)
RELEASE 2 (enrichissement)
RELEASE 3 (optimisation)
```

### 3. Jobs To Be Done (JTBD) — Décomposition par job
```
Job principal : [Ce que l'utilisateur cherche à accomplir]
├── Job fonctionnel : [action concrète]
├── Job émotionnel : [ressenti attendu]
└── Job social : [image projetée]

→ Chaque job = potentielle US ou Epic
```

## Mesure de la valeur livrée

### Value Burn-up Chart
- Axe X : sprints
- Axe Y : valeur cumulée livrée (SP ou nombre de features)
- Ligne cible vs ligne réelle
- Identifier les sprints à faible valeur → analyser les causes

### Métriques de valeur business
| Métrique | Formule | Fréquence |
|---|---|---|
| Feature adoption rate | Users actifs feature / Users total | Hebdo |
| Time to value | Date découverte → Date 1er usage | Par feature |
| Value delivered / sprint | SP livrés × valeur métier pondérée | Sprint |
| ROI feature | Revenu généré / Coût développement | Trimestriel |
