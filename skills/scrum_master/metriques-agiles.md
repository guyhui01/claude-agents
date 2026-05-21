# Skill — Métriques Agiles & Pilotage de la Valeur
> Certifications : PSM I/II · SAFe SSM · SAFe SASM · A-CSM

## Objectif
Utiliser les métriques Agiles pour mesurer la performance, identifier les dysfonctionnements et améliorer continuellement la livraison de valeur.

## Métriques d'équipe Scrum (niveau opérationnel)

### Vélocité
```
Définition : Somme des story points complétés (Done) par sprint
Calcul     : Moyenne des 3-5 derniers sprints
Usage      : Planification (combien on peut prendre ?)
Pièges     : Ne pas presser l'équipe pour augmenter la vélocité
             Ne pas comparer les vélocités entre équipes
```

### Burndown Chart
```python
import matplotlib.pyplot as plt
import numpy as np

sprint_days = list(range(10))  # Sprint 2 semaines = 10 jours ouvrés
planned = [50, 45, 40, 35, 30, 25, 20, 15, 10, 0]  # Idéal
actual = [50, 48, 44, 42, 38, 35, 28, 22, 15, 8]   # Réel

plt.figure(figsize=(10, 5))
plt.plot(sprint_days, planned, 'b--', label='Idéal', linewidth=2)
plt.plot(sprint_days, actual, 'r-', label='Réel', linewidth=2)
plt.fill_between(sprint_days, planned, actual, alpha=0.1, color='red')
plt.title('Sprint Burndown — Sprint 15')
plt.xlabel('Jours du sprint')
plt.ylabel('Story Points restants')
plt.legend()
plt.grid(True, alpha=0.3)
```

### Cycle Time & Lead Time
```
Lead Time   = Date livraison - Date création de la story
Cycle Time  = Date livraison - Date début de développement
Throughput  = Nombre d'items livrés par unité de temps

Objectif :
  - Réduire le Lead Time (valeur plus vite au client)
  - Stabiliser le Cycle Time (prédictibilité)
  - Augmenter le Throughput (plus de valeur livrée)
```

## Tableau de bord Scrum Master (Jira / Monday / Azure DevOps)
| Métrique | Fréquence | Seuil alerte |
|---|---|---|
| Sprint Goal atteint (%) | Par sprint | < 70% |
| Vélocité (trend) | Par sprint | Chute > 20% |
| Burndown variance | Quotidien | > 20% de retard à mi-sprint |
| Impediments ouverts | Hebdomadaire | > 3 ouverts > 5 jours |
| Cycle Time (moyenne) | Mensuel | > 2x la norme |
| Team Happiness | Par sprint | < 6/10 |

## Métriques SAFe (niveau Programme)
```
ART Velocity          → Somme vélocité de toutes les équipes ART
PI Predictability     → % d'objectifs PI atteints
Features Delivered    → Nombre de features Done par PI
Business Value        → Score de valeur des features livrées
Innovation Rate       → % capacité dédiée à l'innovation
```

## Flow Metrics (Kanban / SAFe)
| Métrique | Définition |
|---|---|
| **Flow Velocity** | Items livrés / période |
| **Flow Time** | Durée moyenne de bout en bout |
| **Flow Load** | WIP actuel |
| **Flow Distribution** | % Business Features vs Tech Debt vs Risk |
| **Flow Efficiency** | Temps actif / Lead Time total |

## Livrables
- Dashboard métriques Scrum (Jira / Azure DevOps)
- Rapport de performance équipe (mensuel)
- Analyse de tendances (trimestre)
- Recommandations d'amélioration basées sur les données

## Format de sortie
Précise : outil de gestion (Jira, Azure DevOps, Linear) · métriques prioritaires · période d'analyse · audience (équipe, management, CODIR)
