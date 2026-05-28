# Skill — Kanban, Flow & Systèmes de Flux
> Certifications : PSM I · A-CSM · SAFe SSM · ICAgile ICP-ATF

## Objectif
Implémenter et optimiser des systèmes Kanban pour améliorer le flux, réduire le WIP et accélérer la livraison de valeur.

## Principes Kanban (David Anderson)
```
1. Commencer par ce que vous faites actuellement
2. Poursuivre des changements évolutifs et incrémentaux
3. Respecter les processus, rôles et responsabilités actuels
4. Encourager les actes de leadership à tous les niveaux
```

## Pratiques Kanban

### Visualiser le flux de travail
```
Colonnes standard :
  Backlog → À faire → En cours → À valider → Done

Colonnes avancées :
  Backlog → Analyse → En cours → Code Review → Test → Done

Swimlanes (lignes) :
  - Par type : Feature / Bug / Tech debt / Urgent
  - Par équipe : Dev / QA / DevOps
  - Par priorité : Critique / Normal
```

### Limiter le WIP (Work In Progress)
```
Règle : nombre d'items max simultanés par colonne / par personne

Formule de départ (Little's Law) :
  WIP = Throughput × Cycle Time
  → Si Throughput = 5 items/semaine et Cycle Time = 2 semaines
  → WIP optimal = 10

Bénéfices du WIP Limit :
  ✓ Réduit le context switching (- stress)
  ✓ Révèle les goulots d'étranglement
  ✓ Accélère le débit réel
  ✓ Améliore la qualité (moins de rush)
```

### Classes de service
| Classe | Exemples | Règle |
|---|---|---|
| **Expedite** | Incident prod critique | WIP max = 1, priorité absolue |
| **Date fixe** | Réglementation, événement | Respect de la deadline |
| **Standard** | Fonctionnalités normales | FIFO dans la colonne |
| **Intangible** | Tech debt, refactoring | Si capacité disponible |

## Cumulative Flow Diagram (CFD)
```python
import matplotlib.pyplot as plt
import pandas as pd

# Données CFD (items cumulés par colonne dans le temps)
dates = pd.date_range('2026-01-01', periods=30)
backlog = [100 - i*2 for i in range(30)]
in_progress = [10 + i*0.5 for i in range(30)]
done = [i*3 for i in range(30)]

plt.stackplot(dates, backlog, in_progress, done,
              labels=['Backlog', 'In Progress', 'Done'],
              colors=['#ff9999', '#ffcc99', '#99ff99'])
plt.title('Cumulative Flow Diagram')
plt.legend(loc='upper left')
plt.xticks(rotation=45)

# Lecture du CFD :
# Bandes larges = goulot d'étranglement
# Bandes parallèles = flux régulier (bon)
# Bandes qui s'écartent = accumulation = problème
```

## Kanban Cadences (meetings)
| Cadence | Fréquence | Objectif |
|---|---|---|
| Stand-up | Quotidien | Walk the board |
| Replenishment | Hebdo | Alimenter le backlog |
| Delivery planning | Hebdo/bi-hebdo | Prioriser les prochains items |
| Service Delivery Review | Mensuel | Métriques de flux (Flow Review) |
| Operations Review | Mensuel | Santé du service |
| Risk Review | Mensuel | Blockers, risques |
| Strategy Review | Trimestriel | Alignement stratégique |

## Livrables
- Board Kanban configuré (Jira / Trello / Azure DevOps)
- WIP Limits définis et appliqués
- Classes de service documentées
- Tableau de bord Flow Metrics (Cycle Time, Throughput, CFD)

## Format de sortie
Précise : type de travail (maintenance / développement / support) · niveau de maturité Kanban · WIP actuel (estimé) · outil utilisé · goulot d'étranglement identifié

## Voir aussi
- [`skills/scrum/kanban-flow.md`](../scrum/kanban-flow.md) — Pratique Scrum+Kanban (PSK-I, Scrum.org) : usage Kanban dans un cadre Scrum côté équipe / Product Owner
