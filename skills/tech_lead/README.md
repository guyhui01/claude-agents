# Skills — Tech Lead / Lead Developer

> Folder attached to `AGENT-TECH-LEAD.md`
> Frameworks: AWS DVA-C02 · Google Cloud Developer · Azure AZ-204 · CKAD · GitHub Actions · ISTQB FL v4.0 · OWASP Top 10 · Postman API Expert

---

## Skill index

| # | Skill | When to invoke | Reference |
|---|---|---|---|
| 1 | [`code-review.md`](code-review.md) | Run a code review (5-level checklist + PR template) | ISTQB FL v4.0 · GitHub |
| 2 | [`architecture-applicative.md`](architecture-applicative.md) | Choose the architectural style (CQRS, Hexagonal, Repository) + ADR | AWS DVA-C02 · Google · AZ-204 |
| 3 | [`api-design.md`](api-design.md) | Design an API (REST, GraphQL, AsyncAPI, OpenAPI 3.1) | Postman API Expert · AWS DVA-C02 |
| 4 | [`strategie-tests.md`](strategie-tests.md) | Define the test pyramid, TDD/BDD culture, mutation testing | ISTQB FL v4.0 · GitHub |
| 5 | [`cicd-pipeline.md`](cicd-pipeline.md) | Define the CI/CD strategy on the team side (branching, release, gates) | GitHub Actions · CKAD · AWS DVA-C02 |
| 6 | [`securite-applicative.md`](securite-applicative.md) | Roll out OWASP Top 10 across the dev team (helmet, JWT, headers, deps) | AWS DVA-C02 · AZ-204 · ISTQB FL |
| 7 | [`dette-technique.md`](dette-technique.md) | Map and reduce technical debt (P1-P4 radar, SonarQube) | ISTQB FL · GitHub · AWS DVA-C02 |
| 8 | [`documentation-technique.md`](documentation-technique.md) | Write ADRs, C4 diagrams, runbooks (Docs as Code) | Postman API Expert · GitHub |
| 9 | [`performance-applicative.md`](performance-applicative.md) | Define SLO/SLI, profile and optimize (L1/L2/L3 cache, HPA) | AWS DVA-C02 · MongoDB · Google |
| 10 | [`mentoring-equipe-dev.md`](mentoring-equipe-dev.md) | Onboard and mentor (30/60/90-day plan, skills matrix) | ISTQB FL v4.0 · GitHub |
| 11 | [`ia-workflows-dev.md`](ia-workflows-dev.md) | Integrate Claude Code into the dev workflow (`/code-review`, `/verify` skills, hooks) | Claude Code 101 · Claude Code in Action · GitHub |
| 12 | [`branching-release.md`](branching-release.md) | Manage GitHub Flow, SemVer, semantic-release, Conventional Commits | GitHub Actions · GitHub · CKAD |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... DRIVE THE QUALITY of the team's code?
    → code-review.md (PR review)
    → strategie-tests.md (TDD/BDD pyramid vision)
    → dette-technique.md (mapping + action plan)

  ... DESIGN THE TECHNICAL SIDE ahead of a feature?
    → architecture-applicative.md (architectural style + ADR)
    → api-design.md (API contract)
    → documentation-technique.md (ADR, C4)

  ... INDUSTRIALIZE the delivery chain?
    → cicd-pipeline.md (team-side strategy)
    → branching-release.md (GitHub Flow + SemVer)
    → performance-applicative.md (SLO/SLI)

  ... RAISE the team's SECURITY awareness?
    → securite-applicative.md (OWASP basics, dependencies, secrets)

  ... ONBOARD or TRAIN devs?
    → mentoring-equipe-dev.md (30/60/90-day onboarding plan)
    → ia-workflows-dev.md (AI productivity in the workflow)
```

---

## Boundaries with the other agents

The Tech Lead **drives the vision and culture on the dev-team side**. Three adjacent domains belong to specialist agents that **execute in depth**:

| TECH-LEAD skill | Specialist agent | Boundary |
|---|---|---|
| `securite-applicative.md` (OWASP basics, dev culture) | `AGENT-SECURITE-IA.md` (audit, pentest, threat modeling, IR) | TECH-LEAD rolls out; SECURITE-IA audits |
| `cicd-pipeline.md` (strategy + gates on the team side) | `AGENT-DEVOPS-CLOUD.md` skill `cicd-github-actions.md` (OIDC config, matrix, K8s deployment) | TECH-LEAD defines the strategy; DEVOPS configures the platform |
| `strategie-tests.md` (pyramid vision, TDD/BDD culture) | `AGENT-QA-AGILE.md` / `AGENT-QA-CYCLEV.md` (BDD execution, automation, UAT) | TECH-LEAD defines the vision; QA executes |

Other boundaries:

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Python AI code | `AGENT-DEV-PYTHON-IA.md` | TECH-LEAD drives; DEV-PYTHON codes |
| TypeScript code | `AGENT-DEV-TYPESCRIPT-IA.md` | TECH-LEAD drives; DEV-TS codes |
| AI architecture | `AGENT-AI-ARCHITECT.md` | TECH-LEAD = application architecture; AI-ARCHITECT = AI stack |
| Enterprise architecture | `AGENT-SOLUTIONS-ARCHITECT.md` | TECH-LEAD = application; SOLUTIONS = global IS, TOGAF |
| Kubernetes / Terraform infrastructure | `AGENT-DEVOPS-CLOUD.md` | TECH-LEAD = application; DEVOPS = infra |

---

## Frameworks and standards used

- **OWASP Top 10 (2021)**: https://owasp.org/www-project-top-10/
- **OpenAPI 3.1**: https://spec.openapis.org/oas/v3.1.0
- **C4 Model**: https://c4model.com/
- **ADR**: https://adr.github.io/
- **Conventional Commits**: https://www.conventionalcommits.org/
- **SemVer 2.0**: https://semver.org/
- **GitHub Flow**: https://docs.github.com/en/get-started/quickstart/github-flow
- **SOLID principles**, **Clean Code** (Robert C. Martin)
- **ISTQB Foundation v4.0**: https://www.istqb.org/
