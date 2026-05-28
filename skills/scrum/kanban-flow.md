# Skill — Kanban Flow & Métriques de Flux
> Certifications : PSK-I (Professional Scrum with Kanban)

## Objectif
Visualiser et optimiser le flux de travail de l'équipe Scrum en appliquant les pratiques Kanban.

## 4 pratiques Kanban dans Scrum (PSK)
1. **Visualiser le workflow** : colonnes représentant les états réels du travail
2. **Limiter le WIP** (Work In Progress) : maximum d'items par colonne
3. **Gérer activement le flux** : identifier et débloquer les blocages
4. **Inspecter et adapter** : améliorer le processus à partir des métriques

## Métriques de flux
| Métrique | Définition | Utilisation |
|---|---|---|
| **WIP** | Nombre d'items en cours | Limiter pour éviter le multitâche |
| **Throughput** | Items terminés / sprint | Prévisibilité de livraison |
| **Cycle Time** | Temps de "En cours" → "Done" | Vitesse de livraison unitaire |
| **Work Item Age** | Temps depuis le début d'un item | Détecter les items bloqués |

## Service Level Expectation (SLE)
- Engagement probabiliste sur le cycle time
- Exemple : "85% des stories sont terminées en moins de 5 jours"
- Calculé sur l'historique des 10-20 derniers cycles

## Scrum Board optimisé Kanban
```
Product Backlog → Refinement → Sprint Backlog → In Progress [WIP: 3] → Review → Done
```

## Little's Law
```
Cycle Time moyen = WIP moyen / Throughput moyen
```
Réduire le WIP = réduire mécaniquement le cycle time.

## Livrables
- Kanban board configuré avec limites WIP
- Rapport métriques de flux (cycle time, throughput, WIP)
- SLE documentée et partagée à l'équipe
- Recommandations d'amélioration du flux

## Format de sortie
Précise : taille de l'équipe · type de backlog (features, bugs, support) · outil utilisé (Jira, Azure DevOps, GitHub)

## Voir aussi
- [`skills/scrum_master/kanban-flow.md`](../scrum_master/kanban-flow.md) — Kanban Method (David Anderson 2010) : mise en place opérationnelle complète niveau Scrum Master (Classes de service, CFD, Kanban Cadences)
