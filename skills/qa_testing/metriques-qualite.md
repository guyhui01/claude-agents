# Skill QA Agile — Métriques Qualité Agile

> **Méthodologie :** Agile

## Métriques sprint

| Métrique | Formule | Cible |
|---|---|---|
| **Taux de défauts en sprint** | Bugs trouvés / US livrées | < 1 bug/US |
| **Taux d'échappement** | Bugs post-sprint / bugs totaux | < 10% |
| **Couverture tests auto** | Tests auto / tests totaux × 100 | > 70% |
| **Temps de feedback** | Délai détection → correction | < 24h dans sprint |
| **Flakiness rate** | Tests instables / tests totaux | < 2% |

## Métriques release / PI

| Métrique | Formule | Cible |
|---|---|---|
| **Taux de défauts production** | Bugs prod / features livrées | Proche de 0 |
| **Mean Time to Detect (MTTD)** | Temps moyen détection bug | En réduction |
| **Mean Time to Resolve (MTTR)** | Temps moyen résolution | En réduction |
| **Technical debt ratio** | Dette tech / vélocité sprint | < 20% |

## Dashboard qualité Agile

```
DASHBOARD QUALITÉ — Sprint [N] — [Date]

🐛 DÉFAUTS
Nouveaux ce sprint : [X]
Résolus : [X]
Ouverts cumulés : [X] (dont [X] bloquants)

🤖 AUTOMATISATION
Couverture : [X]%
Tests flaky : [X]
Durée pipeline : [X min]

📈 TENDANCES
Taux d'échappement : [X]% (sprint N-1 : [X]%)
Vélocité qualité : [X pts livrés sans bug] / [X pts totaux]

🎯 OBJECTIF SPRINT SUIVANT
[action d'amélioration qualité]
```
