# Skill — Gestion des environnements de test

> **Méthodologie :** Mixte (Agile + Cycle en V)
> Certification : ISTQB® CTAL-TM · ISTQB® CTAL-TTA
> Agent : AGENT-QA-CYCLEV.md

## Objectif
Concevoir, gérer et maintenir les environnements de test pour garantir la fiabilité des campagnes de tests — de l'environnement d'intégration jusqu'à la pré-production.

## Types d'environnements de test

```
DÉVELOPPEMENT  →  INTÉGRATION  →  QUALIFICATION  →  PRÉ-PROD  →  PRODUCTION
    (DEV)            (INT)            (QUA/REC)        (PPR)         (PROD)

Objectif :       Tests unitaires   Tests E2E         Recette UAT   Clone prod   Live
Données :        Fictives          Fictives/masquées Masquées      Anonymisées  Réelles
Accès :          Dev               Dev + QA          QA + Métier   Restreint    Contrôlé
Déploiement :    Continu           CI/CD             Manuel/CI     Contrôlé     Release
```

## Exigences d'un environnement de test

### Dimensionnement
| Paramètre | INT | QUA | PPR |
|---|---|---|---|
| Ressources CPU/RAM | 50% prod | 75% prod | 100% prod |
| Données | Jeu de test dédié | Données masquées | Copie anonymisée |
| Services tiers | Mock / Sandbox | Sandbox | Sandbox prod-like |
| Accès réseau | Restreint | Restreint | Contrôlé |

### Critères de stabilité d'un environnement
- [ ] Même version du code que le sprint/release en cours
- [ ] Base de données remise à zéro ou restaurée entre campagnes
- [ ] Services tiers (API, paiement, email) en mode sandbox
- [ ] Pas de déploiements en cours pendant les tests
- [ ] Monitoring actif (logs, alertes)

## Processus de gestion des environnements

### 1. Demande et provisionnement
```
Demande (Test Manager) → Validation (DevOps) → Provisionnement → Recette environnement
     |                                                |
  JIRA ticket                                  Infrastructure as Code
  (type: Env Request)                          (Terraform / Ansible)
```

### 2. Plan de gestion des environnements

```
ENVIRONNEMENT   VERSION APP   BASE DE DONNÉES      RESPONSABLE   STATUT
INT-01          sprint-42     db_int_s42           Dev Lead       Disponible
QUA-01          release-3.2   db_qua_r32_masked    QA Manager     En test
PPR-01          release-3.1   db_ppr_anonymized    DevOps         Maintenance
```

### 3. Réinitialisation des données de test

```bash
# Script de reset d'environnement (pseudocode)
restore_database(snapshot="baseline_sprint_42")
seed_data(dataset="test_fixtures_v2")
reset_mock_services(config="sandbox")
notify_team(env="QUA-01", status="ready")
```

## Données de test — Stratégies

### Types de données de test
| Type | Description | Usage |
|---|---|---|
| Données statiques | Jeux fixes réutilisables | Tests fonctionnels stables |
| Données dynamiques | Générées à la volée | Tests de charge, stress |
| Données masquées | Vraies données anonymisées | Tests de conformité RGPD |
| Données de bord | Cas limites, nulls, extrêmes | Tests négatifs |

### Outils de gestion des données de test
- **Génération** : Faker (Python/JS), Mockaroo, TestContainers
- **Masquage** : Anonymizer, DataVeil, Delphix
- **Versioning** : Liquibase, Flyway (schéma DB)
- **Snapshots** : AWS RDS Snapshot, pg_dump, mysqldump

## Gestion des conflits d'environnement

### Problèmes fréquents et solutions

| Problème | Impact | Solution |
|---|---|---|
| Environnement instable | Tests non fiables | Lock de l'env pendant les tests |
| Données corrompues | Faux négatifs | Procédure de reset automatisé |
| Service tiers indisponible | Blocage campagne | Basculement sur mock |
| Version mal déployée | Résultats incorrects | Pipeline CI/CD avec smoke test auto |
| Conflit d'accès (2 équipes) | Tests parasités | Booking calendar environnements |

### Matrice de responsabilités (RACI)
| Activité | Test Manager | QA Engineer | DevOps | Dev |
|---|---|---|---|---|
| Définir les besoins env. | R/A | C | I | I |
| Provisionner l'env. | I | I | R/A | C |
| Maintenir les données | A | R | C | I |
| Surveiller la stabilité | I | R | R | I |
| Résoudre les incidents | A | C | R | C |

## Monitoring et alertes

### Métriques à surveiller
| Dimension | Métrique | Cible |
|---|---|---|
| Disponibilité | Uptime environnement | > 99% |
| Performance | Temps de réponse vs prod | < 3× prod |
| Données | Fraîcheur du jeu de test | Reset < 24h |
| Déploiement | Version vérifiée avant tests | Tag git versionné |

### Template de rapport d'état d'environnement
```
RAPPORT ENVIRONNEMENT — [Date]
Environnement  : QUA-01
Version app    : release-3.2.1
DB snapshot    : 2026-05-20 08:00
Disponibilité  : 99,2% (7 derniers jours)
Incidents      : 1 (résolu — redémarrage service Auth)
Prochaine MAJ  : 2026-05-22 (sprint 43)
Statut         : Disponible pour tests
```

## Checklist — Qualification d'un environnement

Avant de lancer une campagne de tests :
- [ ] Version applicative vérifiée (git tag / numéro de build)
- [ ] Base de données remise à l'état de référence
- [ ] Services tiers (API tierces, paiement, email) en sandbox
- [ ] Smoke tests exécutés et passants (> 95%)
- [ ] Accès équipe QA vérifiés (login, permissions)
- [ ] Monitoring actif (Grafana, Datadog, ELK)
- [ ] Communication envoyée aux équipes (env disponible)
