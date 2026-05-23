# Skill — Gouvernance Architecturale (ARB)

> Certifications : TOGAF 10 Foundation & Practitioner, CITA-A (IASA), PMP

## Objectif

Mettre en place et animer la gouvernance architecturale : Architecture Review Board (ARB), principes d'architecture, processus de conformité, gestion du portefeuille architectural et évolution des standards.

## Dispositif de gouvernance architecturale

```
INSTANCE         FRÉQUENCE    PARTICIPANTS                    DÉCISIONS
───────────────  ───────────  ──────────────────────────────  ──────────────────────────
ARB              Mensuel      Chief Architect, DSI, Métier    Validation architectures
Architecture     Hebdomadaire Architectes solutions           Revue en cours d'études
Working Group
Tech Radar       Trimestriel  Architectes + CTOs              Adopter / Évaluer / Hold
Exception Board  Ad hoc       ARB + Sponsor                   Dérogations aux standards
```

## Architecture Review Board (ARB) — Template de revue

```
DOSSIER DE REVUE ARB
──────────────────────────────────────────────────────────────
Projet soumis     : [Nom + code projet]
Porteur           : [Architect responsable + sponsor business]
Date de revue     : [ISO 8601]
Phase projet      : [Étude / PoC / Build / Migration]

RÉSUMÉ (5 lignes max)
  [Description de l'architecture proposée et de sa valeur métier]

CONFORMITÉ AUX PRINCIPES D'ARCHITECTURE
  | Principe           | Conforme ? | Commentaire / Dérogation demandée |
  |--------------------|------------|-----------------------------------|
  | API-first          | ✅ Oui     |                                   |
  | Cloud-first        | ⚠ Partiel  | On-prem maintenu pour la BDD      |
  | Security by design | ✅ Oui     |                                   |
  | Réutilisation      | ❌ Non     | Dérogation demandée : voir §3     |

RISQUES ET MITIGATIONS
  - Risque 1 : [Description] → Mitigation : [Action]
  - Risque 2 : [Description] → Mitigation : [Action]

DÉCISION ARB
  ☐ Approuvé sans conditions
  ☐ Approuvé avec conditions : [conditions]
  ☐ Refusé : [motif]
  ☐ Renvoyé en complément d'information
```

## Tech Radar — Quadrants

```
ADOPTER ✅       ÉVALUER 🔍        HOLD ⚠          ÉVITER ❌
────────────     ──────────────    ─────────────   ─────────────────
Kubernetes       LangGraph         Spring Boot 2   ESB monolithiques
Terraform        AI Act compliance Java 8          jQuery (front)
Kafka            Wasm              Redis 6         XML SOAP (new proj)
Claude SDK       HTMX              Angular 14      FTP/SFTP (API first)
OpenTelemetry    Deno              Vue 2           Oracle Forms
```

## Métriques de gouvernance

```yaml
metriques_gouvernance:
  conformite_architecturale:
    formule: "(projets conformes / total projets) × 100"
    objectif: "> 85%"
  
  dette_technique:
    formule: "Score SonarQube moyen du portfolio"
    objectif: "< 5% technical debt ratio"
  
  couverture_arb:
    formule: "(projets passés en ARB / projets significatifs) × 100"
    objectif: "> 90%"
  
  age_moyen_applications:
    formule: "Âge moyen du portfolio applicatif en années"
    objectif: "< 7 ans"
```

## Livrables

- Charte de gouvernance architecturale (rôles, processus, instances)
- Référentiel des principes d'architecture (15-20 principes)
- Template de dossier ARB (importable Confluence)
- Tech Radar adapté au contexte client
- Tableau de bord gouvernance (conformité, dette, couverture ARB)

## Format de sortie

Précise : **maturité actuelle de la gouvernance** (1-5), **taille de l'organisation IT** (nb d'équipes, budget), **secteur** (réglementation spécifique), **outils de documentation** utilisés (Confluence, SharePoint, EA tools).
