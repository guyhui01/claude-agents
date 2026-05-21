# Skill QA Cycle V — Tests de Régression & TNR

## Définition ISTQB
Les tests de régression vérifient qu'une modification (correction, évolution) n'a pas introduit de nouveaux défauts dans les fonctionnalités existantes.

## Stratégies de régression

| Stratégie | Description | Usage |
|---|---|---|
| **Régression complète** | Tous les cas de test existants | MEP majeure |
| **Régression partielle** | Zones impactées par la modification | Correction ciblée |
| **Régression par risque** | Cas critiques en priorité | Délai contraint |
| **Régression automatisée** | Exécution via scripts | Livraisons fréquentes |

## Périmètre TNR — Définition

```
MATRICE D'IMPACT — [Version X.X] — [Date]

Modification : [description de la correction / évolution]
Composants impactés : [liste]
Zones à re-tester :
  ├── Directement impacté : [module A, module B]
  └── Indirectement impacté : [module C — flux de données]
Zones exclues du TNR : [module D — aucune dépendance]
```

## Template plan de régression

```
PLAN DE RÉGRESSION — [Projet] — Sprint/Version [X]

Déclencheur : ☐ Correction anomalie  ☐ Évolution  ☐ MEP
Cas de test sélectionnés : [X] / [Y] total
Critère de sélection : [impact / risque / priorité]

| ID | Titre | Priorité | Automatisé | Responsable |
|----|-------|----------|------------|-------------|
| TC-XXX | [...] | Haute | ☐ Oui ☐ Non | [nom] |

Durée estimée : [X h]
Critère de sortie : 0 régression bloquante
```

## Rapport TNR

```
RAPPORT TNR — [Projet] — [Date]
Cas exécutés : [X]
Pass : [X] ✅ | Fail : [X] ❌ | Bloqués : [X] ⚠️

Régressions détectées :
- [TC-XXX] [description] — Sévérité : [niveau]

Décision : ☐ GO ☐ NO GO — motif : [...]
```
