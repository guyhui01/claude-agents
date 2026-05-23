# Skill QA Cycle V — Tests de Performance

> **Méthodologie :** Cycle en V

## Types de tests de performance (ISTQB)

| Type | Objectif | Scénario |
|---|---|---|
| **Charge (Load)** | Comportement sous charge normale et maximale | X utilisateurs simultanés |
| **Stress** | Comportement au-delà des limites | Surcharge jusqu'au point de rupture |
| **Volume** | Comportement avec grand volume de données | Base de données massive |
| **Endurance (Soak)** | Stabilité dans la durée | X heures en continu |
| **Pointe (Spike)** | Réaction aux pics soudains | Pic brutal puis retour normal |

## KPIs de performance

| KPI | Définition | Seuil cible typique |
|---|---|---|
| Temps de réponse | Délai entre requête et réponse | < 2s (page), < 500ms (API) |
| Débit (Throughput) | Requêtes traitées / seconde | [X] req/s selon SLA |
| Taux d'erreur | % requêtes en erreur | < 1% |
| Utilisation CPU | % CPU sous charge | < 80% |
| Utilisation mémoire | RAM consommée | < 80% |
| Temps de réponse P95 | 95% des requêtes sous ce délai | < 3s |

## Template plan de tests de performance

```
PLAN TESTS PERFORMANCE — [Projet] — [Date]

Objectif : [SLA à valider]
Environnement : [specs serveur, BDD, réseau]
Outil : [JMeter / Gatling / k6 / LoadRunner]

Scénarios :
| # | Type | Utilisateurs | Durée | Ramp-up | Objectif |
|---|------|-------------|-------|---------|---------|
| 1 | Charge | 100 | 30 min | 5 min | TR < 2s |
| 2 | Stress | 500 | 15 min | 2 min | Pas de crash |
| 3 | Endurance | 50 | 4h | 10 min | Pas de fuite mémoire |

Critères de succès :
- Temps de réponse P95 < [X]s
- Taux d'erreur < 1%
- Aucun crash ou timeout
```
