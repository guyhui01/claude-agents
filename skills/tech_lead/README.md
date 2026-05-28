# Skills — Tech Lead / Lead Developer

> Dossier rattaché à `AGENT-TECH-LEAD.md`
> Référentiels : AWS DVA-C02 · Google Cloud Developer · Azure AZ-204 · CKAD · GitHub Actions · ISTQB FL v4.0 · OWASP Top 10 · Postman API Expert

---

## Index des skills

| # | Skill | Quand l'invoquer | Référence |
|---|---|---|---|
| 1 | [`code-review.md`](code-review.md) | Conduire une revue de code (checklist 5 niveaux + template PR) | ISTQB FL v4.0 · GitHub |
| 2 | [`architecture-applicative.md`](architecture-applicative.md) | Choisir le style architectural (CQRS, Hexagonal, Repository) + ADR | AWS DVA-C02 · Google · AZ-204 |
| 3 | [`api-design.md`](api-design.md) | Designer une API (REST, GraphQL, AsyncAPI, OpenAPI 3.1) | Postman API Expert · AWS DVA-C02 |
| 4 | [`strategie-tests.md`](strategie-tests.md) | Définir la pyramide de tests, TDD/BDD culture, mutation testing | ISTQB FL v4.0 · GitHub |
| 5 | [`cicd-pipeline.md`](cicd-pipeline.md) | Définir la stratégie CI/CD côté équipe (branching, release, gates) | GitHub Actions · CKAD · AWS DVA-C02 |
| 6 | [`securite-applicative.md`](securite-applicative.md) | Diffuser OWASP Top 10 dans l'équipe dev (helmet, JWT, headers, deps) | AWS DVA-C02 · AZ-204 · ISTQB FL |
| 7 | [`dette-technique.md`](dette-technique.md) | Cartographier et réduire la dette technique (radar P1-P4, SonarQube) | ISTQB FL · GitHub · AWS DVA-C02 |
| 8 | [`documentation-technique.md`](documentation-technique.md) | Rédiger ADR, C4 diagrams, runbooks (Docs as Code) | Postman API Expert · GitHub |
| 9 | [`performance-applicative.md`](performance-applicative.md) | Définir SLO/SLI, profiler et optimiser (cache L1/L2/L3, HPA) | AWS DVA-C02 · MongoDB · Google |
| 10 | [`mentoring-equipe-dev.md`](mentoring-equipe-dev.md) | Onboarder et mentorer (plan 30/60/90j, matrice compétences) | ISTQB FL v4.0 · GitHub |
| 11 | [`ia-workflows-dev.md`](ia-workflows-dev.md) | Intégrer Claude Code dans le workflow dev (skills `/code-review`, `/verify`, hooks) | Claude Code 101 · Claude Code in Action · GitHub |
| 12 | [`branching-release.md`](branching-release.md) | Gérer GitHub Flow, SemVer, semantic-release, Conventional Commits | GitHub Actions · GitHub · CKAD |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... PILOTER LA QUALITÉ du code de l'équipe ?
    → code-review.md (revue PR)
    → strategie-tests.md (vision pyramide TDD/BDD)
    → dette-technique.md (cartographie + plan d'action)

  ... DESIGNER LE TECHNIQUE en amont d'une feature ?
    → architecture-applicative.md (style architectural + ADR)
    → api-design.md (contrat d'API)
    → documentation-technique.md (ADR, C4)

  ... INDUSTRIALISER la chaîne de delivery ?
    → cicd-pipeline.md (stratégie côté équipe)
    → branching-release.md (GitHub Flow + SemVer)
    → performance-applicative.md (SLO/SLI)

  ... SENSIBILISER l'équipe à la sécurité ?
    → securite-applicative.md (OWASP basics, dependencies, secrets)

  ... ONBOARDER ou FORMER des devs ?
    → mentoring-equipe-dev.md (plan d'onboarding 30/60/90j)
    → ia-workflows-dev.md (productivité IA dans le workflow)
```

---

## Frontières avec les autres agents

Le Tech Lead **pilote la vision et la culture côté équipe dev**. Trois domaines voisins relèvent d'agents spécialistes qui **exécutent en profondeur** :

| Skill TECH-LEAD | Agent spécialiste | Frontière |
|---|---|---|
| `securite-applicative.md` (OWASP basics culture dev) | `AGENT-SECURITE-IA.md` (audit, pentest, threat modeling, IR) | TECH-LEAD diffuse ; SECURITE-IA audite |
| `cicd-pipeline.md` (stratégie + gates côté équipe) | `AGENT-DEVOPS-CLOUD.md` skill `cicd-github-actions.md` (config OIDC, matrix, K8s deployment) | TECH-LEAD définit la stratégie ; DEVOPS configure la plateforme |
| `strategie-tests.md` (vision pyramide, culture TDD/BDD) | `AGENT-QA-AGILE.md` / `AGENT-QA-CYCLEV.md` (exécution BDD, automation, recette) | TECH-LEAD définit la vision ; QA exécute |

Autres frontières :

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Code Python IA | `AGENT-DEV-PYTHON-IA.md` | TECH-LEAD pilote ; DEV-PYTHON code |
| Code TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | TECH-LEAD pilote ; DEV-TS code |
| Architecture IA | `AGENT-AI-ARCHITECT.md` | TECH-LEAD = architecture applicative ; AI-ARCHITECT = stack IA |
| Architecture d'entreprise | `AGENT-SOLUTIONS-ARCHITECT.md` | TECH-LEAD = applicatif ; SOLUTIONS = SI global TOGAF |
| Infrastructure Kubernetes / Terraform | `AGENT-DEVOPS-CLOUD.md` | TECH-LEAD = applicatif ; DEVOPS = infra |

---

## Référentiels et standards utilisés

- **OWASP Top 10 (2021)** : https://owasp.org/www-project-top-10/
- **OpenAPI 3.1** : https://spec.openapis.org/oas/v3.1.0
- **C4 Model** : https://c4model.com/
- **ADR** : https://adr.github.io/
- **Conventional Commits** : https://www.conventionalcommits.org/
- **SemVer 2.0** : https://semver.org/
- **GitHub Flow** : https://docs.github.com/en/get-started/quickstart/github-flow
- **SOLID principles**, **Clean Code** (Robert C. Martin)
- **ISTQB Foundation v4.0** : https://www.istqb.org/
