# Skill — SAFe DevOps & Continuous Delivery Pipeline
> Certifications : SAFe POPM 6 · SAFe DevOps Practitioner (SDP)

## Objectif
Comprendre et contribuer à la définition du Continuous Delivery Pipeline pour accélérer le Time-to-Market.

## Continuous Delivery Pipeline (SAFe)
```
Continuous Exploration → Continuous Integration → Continuous Deployment → Release on Demand
```

### Continuous Exploration
- Hypothèses produit et discovery
- Customer interviews, A/B tests, MVPs
- Alimenter le Program Backlog de Features validées

### Continuous Integration
- Intégration du code plusieurs fois par jour
- Tests automatisés (unitaires, intégration, régression)
- Build pipelines : Jenkins, GitHub Actions, GitLab CI

### Continuous Deployment
- Déploiement automatisé en staging / pré-prod
- Feature Flags : décorréler déploiement et release
- Rollback automatique si métriques dégradées

### Release on Demand
- Release au moment optimal (business decision, pas technique)
- Canary releases, blue/green deployments
- Feature Toggles pour activer progressivement

## Rôle du PO/PM dans le DevOps Pipeline
- Définir les critères de release (quand une Feature peut être activée)
- Gérer les Feature Flags (activation par segment, géographie, profil)
- Monitorer les métriques post-release (DORA metrics)
- Décider des rollbacks si NPS ou métriques business dégradés

## DORA Metrics (référence DevOps)
| Métrique | Elite | High | Medium | Low |
|---|---|---|---|---|
| Deployment Frequency | Plusieurs/jour | Semaine | Mois | Semestre |
| Lead Time for Changes | < 1 heure | < 1 jour | < 1 semaine | < 6 mois |
| Change Failure Rate | < 5% | < 10% | < 15% | > 15% |
| MTTR | < 1 heure | < 1 jour | < 1 semaine | > 1 semaine |

## Livrables
- Feature Flag Strategy documentée
- Release Plan (Features + conditions d'activation)
- Dashboard DORA Metrics
- Release Notes par déploiement

## Format de sortie
Précise : fréquence de release actuelle · stack technique · feature flags disponibles · objectif DORA
