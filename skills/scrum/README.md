# Skills — Product Owner Scrum

> Folder attached to `AGENT-PO-SCRUM.md`
> Frameworks: Scrum Guide 2020 · Scrum.org (PSPO I/II/III, PSPO-AI, PSK-I, PSU-I) · ICAgile ICP-APO · EBM (Evidence-Based Management)

---

## Skill index (28)

### Vision & Discovery
| Skill | When to use it | Certification |
|---|---|---|
| [`product-vision.md`](product-vision.md) | Frame the product vision (Product Vision Board, North Star, Impact Mapping) | PSPO II · III |
| [`customer-discovery.md`](customer-discovery.md) | Run interviews, validate hypotheses, prototype | PSPO II · ICAgile ICP-APO |
| [`business-model-canvas.md`](business-model-canvas.md) | Model the BMC and the VPC | PSPO II · III |
| [`stakeholder-map.md`](stakeholder-map.md) | Map and engage stakeholders | PSPO II · ICAgile ICP-APO |
| [`hypothesis-driven.md`](hypothesis-driven.md) | Drive hypothesis-driven development (Build-Measure-Learn) | PSPO II · III |

### Backlog & User Stories
| Skill | When to use it | Certification |
|---|---|---|
| [`po-backlog.md`](po-backlog.md) | Manage backlog structure, refinement, health | PSPO I · II |
| [`po-user-story.md`](po-user-story.md) | Write an INVEST User Story (Connextra + AC) | PSPO I |
| [`priorisation-techniques.md`](priorisation-techniques.md) | Choose MoSCoW, RICE, Kano, Value/Effort, Buy a Feature, $100, Opportunity Scoring | PSPO II · III · ICAgile |
| [`story-mapping.md`](story-mapping.md) | Facilitate a Jeff Patton workshop (6 steps, Walking Skeleton) | PSPO II · PSU-I |
| [`stories-techniques.md`](stories-techniques.md) | Write Tech Debt, Spikes, Infra (15-20% capacity) | PSPO I · II |
| [`po-acceptance-tests.md`](po-acceptance-tests.md) | Write Gherkin acceptance tests | PSPO I |
| [`dor-dod.md`](dor-dod.md) | Define DoR (INVEST) and quality-oriented DoD | PSPO I · II · PSU-I |

### Metrics & Performance
| Skill | When to use it | Certification |
|---|---|---|
| [`product-metrics-ebm.md`](product-metrics-ebm.md) | Set up EBM (Current Value, Unrealized Value, A2M, T2M) | PSPO II · III |
| [`reporting-kpi.md`](reporting-kpi.md) | Sprint KPI reporting | PSPO I · II |
| [`forecasting-planning.md`](forecasting-planning.md) | Probabilistic forecasting (Monte Carlo) vs velocity | PSPO II · III |

### Advanced practices
| Skill | When to use it | Certification |
|---|---|---|
| [`ux-sprint.md`](ux-sprint.md) | Embed UX in Dual Track (Discovery + Delivery) | PSU-I |
| [`lean-ux.md`](lean-ux.md) | Blend Lean UX + Design Thinking into the sprint | PSPO II · PSU-I |
| [`kanban-flow.md`](kanban-flow.md) | Drive by flow (WIP, throughput, cycle time, SLE) | PSK-I |
| [`po-ai-product.md`](po-ai-product.md) | Manage an AI product (Responsible AI) | PSPO-AI |
| [`ai-user-stories.md`](ai-user-stories.md) | Write US for AI features | PSPO-AI · I |
| [`value-decomposition.md`](value-decomposition.md) | Product-oriented Value Stream Mapping | PSPO II · III |
| [`stakeholder-negotiation.md`](stakeholder-negotiation.md) | Negotiate scope & trade-offs with stakeholders | PSPO II · III |
| [`coaching-pos.md`](coaching-pos.md) | Coach other POs (PSPO III) | PSPO III |

### Communication & Documentation
| Skill | When to use it | Certification |
|---|---|---|
| [`compte-rendu.md`](compte-rendu.md) | Write meeting notes | PSPO I |
| [`confluence-page.md`](confluence-page.md) | Structure a Confluence page | PSPO I |
| [`email-stakeholder.md`](email-stakeholder.md) | Professional, concise stakeholder email | PSPO I |
| [`ticket-incident.md`](ticket-incident.md) | PO incident ticket | PSPO I |
| [`gestion-risques.md`](gestion-risques.md) | Risk matrix / RACI | PSPO II |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... DEFINE THE WHAT (vision, market, value)?
    → product-vision.md / customer-discovery.md / business-model-canvas.md

  ... STRUCTURE THE BACKLOG?
    → po-backlog.md (structure)
    → priorisation-techniques.md (order)
    → story-mapping.md (big picture)

  ... WRITE A STORY?
    → po-user-story.md (standard US)
    → stories-techniques.md (tech debt / spike / infra)
    → ai-user-stories.md (AI feature)

  ... MEASURE VALUE?
    → product-metrics-ebm.md (EBM)
    → reporting-kpi.md (sprint KPI)
    → forecasting-planning.md (forecast)

  ... DOCUMENT OR COMMUNICATE?
    → confluence-page / email-stakeholder / compte-rendu (agile-product side)

  ... WRITE BUSINESS-ANALYSIS FUNCTIONAL SPECIFICATIONS (SFG, SFD, business-side UAT)?
    → ❌ Out of PO Scrum scope — see `AGENT-BUSINESS-ANALYST.md` (V-model)
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| PI Planning, ART, WSJF, Portfolio Epics | `AGENT-PO-SAFE.md` | PO-SCRUM = team; PO-SAFE = Program/Portfolio |
| Facilitating Scrum events (Daily, Planning, Review, Retro) | `AGENT-SCRUM-MASTER.md` | PO-SCRUM owns product; SCRUM-MASTER facilitates |
| Program product vision, Product Operating Model | `AGENT-PRODUCT-MANAGER-SAFE.md` | PO-SCRUM = team; PM-SAFE = Program |
| Detailed functional specifications, BPMN | `AGENT-BUSINESS-ANALYST.md` | PO-SCRUM = product backlog; BA = business analysis / processes |
| Advanced acceptance testing (BDD, ATDD, automation) | `AGENT-QA-AGILE.md` | PO-SCRUM writes AC; QA executes |

---

## Frameworks and standards used

- **Scrum Guide 2020**: https://scrumguides.org/scrum-guide.html
- **Scrum.org PSPO**: https://www.scrum.org/professional-scrum-product-owner-certifications
- **Evidence-Based Management (EBM)**: https://www.scrum.org/resources/evidence-based-management
- **User Story Mapping** (Jeff Patton): O'Reilly 2014
- **Lean UX** (Gothelf & Seiden)
- **ICAgile ICP-APO**: https://www.icagile.com/
