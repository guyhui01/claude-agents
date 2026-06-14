# Skills — Solutions Architect (TOGAF EA)

> Folder attached to `AGENT-SOLUTIONS-ARCHITECT.md`
> Frameworks: TOGAF 10 · ArchiMate 3 · AWS SAP-C02 · Google Cloud Architect · Azure AZ-305 · IASA CITA-A · CISSP

---

## Skill index (8)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`togaf-adm.md`](togaf-adm.md) | Run a TOGAF ADM cycle (9 phases) | TOGAF 10 Foundation & Practitioner |
| 2 | [`archimate-modeling.md`](archimate-modeling.md) | Model with ArchiMate 3 (3 B/A/T layers, viewpoints) | ArchiMate 3 · TOGAF 10 |
| 3 | [`urbanisme-si.md`](urbanisme-si.md) | Map the IS (business/functional/technical views) | TOGAF 10 · CITA-A · IASA |
| 4 | [`architecture-bdat.md`](architecture-bdat.md) | Design the target BDAT architecture (B/D/A/T) | TOGAF 10 Practitioner · CITA-A |
| 5 | [`integration-patterns.md`](integration-patterns.md) | Select integration patterns (API GW, ESB→iPaaS, EDA, microservices) | AWS SAP-C02 · Google · AZ-305 |
| 6 | [`migration-cloud.md`](migration-cloud.md) | Define the cloud migration strategy (6R framework, TCO, wave planning) | AWS SAP-C02 · Google · AZ-305 |
| 7 | [`gouvernance-architecturale.md`](gouvernance-architecturale.md) | Set up the ARB, Tech Radar, governance metrics | TOGAF 10 · CITA-A · IASA |
| 8 | [`roadmap-transformation-si.md`](roadmap-transformation-si.md) | Build the transformation roadmap (Now/Next/Later, 6 axes) | TOGAF 10 · PMP · IASA |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... START AN ENTERPRISE-ARCHITECTURE INITIATIVE?
    → togaf-adm.md (9-phase ADM methodology)
    → urbanisme-si.md (existing IS mapping)
    → archimate-modeling.md (formalize the diagrams)

  ... DESIGN THE TARGET ARCHITECTURE?
    → architecture-bdat.md (4 B/D/A/T layers)
    → integration-patterns.md (application integrations)

  ... DRIVE A TRANSFORMATION?
    → roadmap-transformation-si.md (Now/Next/Later)
    → migration-cloud.md (if cloud migration is included)

  ... GOVERN THE ARCHITECTURE?
    → gouvernance-architecturale.md (ARB, Tech Radar, principles)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Python application development | `AGENT-DEV-PYTHON-IA.md` | SOLUTIONS = architecture; DEV-PYTHON = code |
| TypeScript frontend development | `AGENT-DEV-TYPESCRIPT-IA.md` | SOLUTIONS = architecture; DEV-TS = code |
| DevOps infrastructure (K8s, Terraform) | `AGENT-DEVOPS-CLOUD.md` | SOLUTIONS = target view; DEVOPS = infra implementation |
| AI-specific architecture (RAG, agents) | `AGENT-AI-ARCHITECT.md` | SOLUTIONS = global IS; AI-ARCHITECT = AI stack |
| Security audit, pentest, red teaming | `AGENT-SECURITE-IA.md` | SOLUTIONS = secure by design; SECURITE-IA = ex-post audit |
| Data strategy and data governance | `AGENT-CDO-DIRECTEUR-IA.md` | SOLUTIONS = architecture; CDO = data strategy |
| Application Tech Lead | `AGENT-TECH-LEAD.md` | SOLUTIONS = full IS view; TECH-LEAD = local application |

---

## Frameworks and standards used

- **TOGAF 10**: https://www.opengroup.org/togaf
- **ArchiMate 3.2**: https://pubs.opengroup.org/architecture/archimate3-doc/
- **AWS Well-Architected**: https://aws.amazon.com/architecture/well-architected/
- **Google Cloud Architecture Framework**: https://cloud.google.com/architecture/framework
- **Azure Well-Architected Framework**: https://learn.microsoft.com/azure/well-architected/
- **6R Cloud Migration** (Rehost, Replatform, Refactor, Repurchase, Retain, Retire)
- **IASA CITA**: https://iasaglobal.org/
- **C4 Model** (complement for application views): https://c4model.com/
