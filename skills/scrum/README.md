# Skills — Product Owner Scrum

> Dossier rattaché à `AGENT-PO-SCRUM.md`
> Référentiels : Scrum Guide 2020 · Scrum.org (PSPO I/II/III, PSPO-AI, PSK-I, PSU-I) · ICAgile ICP-APO · EBM (Evidence-Based Management)

---

## Index des skills (28)

### Vision & Discovery
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`product-vision.md`](product-vision.md) | Formuler la vision produit (Product Vision Board, North Star, Impact Mapping) | PSPO II · III |
| [`customer-discovery.md`](customer-discovery.md) | Conduire des interviews, valider des hypothèses, prototyper | PSPO II · ICAgile ICP-APO |
| [`business-model-canvas.md`](business-model-canvas.md) | Modéliser le BMC et le VPC | PSPO II · III |
| [`stakeholder-map.md`](stakeholder-map.md) | Cartographier et engager les stakeholders | PSPO II · ICAgile ICP-APO |
| [`hypothesis-driven.md`](hypothesis-driven.md) | Piloter le développement par hypothèses (Build-Measure-Learn) | PSPO II · III |

### Backlog & User Stories
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`po-backlog.md`](po-backlog.md) | Gérer la structure du backlog, refinement, santé | PSPO I · II |
| [`po-user-story.md`](po-user-story.md) | Rédiger une User Story INVEST (Connextra + AC) | PSPO I |
| [`priorisation-techniques.md`](priorisation-techniques.md) | Choisir MoSCoW, RICE, Kano, Value/Effort, Buy a Feature, 100$, Opportunity Scoring | PSPO II · III · ICAgile |
| [`story-mapping.md`](story-mapping.md) | Animer un atelier Jeff Patton (6 étapes, Walking Skeleton) | PSPO II · PSU-I |
| [`stories-techniques.md`](stories-techniques.md) | Rédiger Tech Debt, Spikes, Infra (15-20% capacité) | PSPO I · II |
| [`po-acceptance-tests.md`](po-acceptance-tests.md) | Rédiger des tests d'acceptation Gherkin | PSPO I |
| [`dor-dod.md`](dor-dod.md) | Définir DoR (INVEST) et DoD orientée qualité | PSPO I · II · PSU-I |

### Métriques & Performance
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`product-metrics-ebm.md`](product-metrics-ebm.md) | Mettre en place EBM (Current Value, Unrealized Value, A2M, T2M) | PSPO II · III |
| [`reporting-kpi.md`](reporting-kpi.md) | Reporting KPI sprint | PSPO I · II |
| [`forecasting-planning.md`](forecasting-planning.md) | Forecasting probabiliste (Monte Carlo) vs vélocité | PSPO II · III |

### Pratiques avancées
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`ux-sprint.md`](ux-sprint.md) | Intégrer l'UX en Dual Track (Discovery + Delivery) | PSU-I |
| [`lean-ux.md`](lean-ux.md) | Mêler Lean UX + Design Thinking dans le sprint | PSPO II · PSU-I |
| [`kanban-flow.md`](kanban-flow.md) | Piloter par le flux (WIP, throughput, cycle time, SLE) | PSK-I |
| [`po-ai-product.md`](po-ai-product.md) | Gérer un produit IA (Responsible AI) | PSPO-AI |
| [`ai-user-stories.md`](ai-user-stories.md) | Rédiger des US pour fonctionnalités IA | PSPO-AI · I |
| [`value-decomposition.md`](value-decomposition.md) | Value Stream Mapping orienté produit | PSPO II · III |
| [`stakeholder-negotiation.md`](stakeholder-negotiation.md) | Négocier scope & trade-offs avec stakeholders | PSPO II · III |
| [`coaching-pos.md`](coaching-pos.md) | Coacher d'autres POs (PSPO III) | PSPO III |

### Communication & Documentation
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`compte-rendu.md`](compte-rendu.md) | Rédiger un compte rendu de réunion | PSPO I |
| [`confluence-page.md`](confluence-page.md) | Structurer une page Confluence | PSPO I |
| [`email-stakeholder.md`](email-stakeholder.md) | Email stakeholder pro et concis | PSPO I |
| [`ticket-incident.md`](ticket-incident.md) | Ticket d'incident PO | PSPO I |
| [`gestion-risques.md`](gestion-risques.md) | Matrice des risques / RACI | PSPO II |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉFINIR LE QUOI (vision, marché, valeur) ?
    → product-vision.md / customer-discovery.md / business-model-canvas.md

  ... STRUCTURER LE BACKLOG ?
    → po-backlog.md (structure)
    → priorisation-techniques.md (ordre)
    → story-mapping.md (vision globale)

  ... RÉDIGER UNE STORY ?
    → po-user-story.md (US classique)
    → stories-techniques.md (tech debt / spike / infra)
    → ai-user-stories.md (fonctionnalité IA)

  ... MESURER LA VALEUR ?
    → product-metrics-ebm.md (EBM)
    → reporting-kpi.md (KPI sprint)
    → forecasting-planning.md (prévision)

  ... DOCUMENTER OU COMMUNIQUER ?
    → confluence-page / email-stakeholder / compte-rendu (côté agile produit)

  ... RÉDIGER DES SPÉCIFICATIONS FONCTIONNELLES MOA (SFG, SFD, recette MOA) ?
    → ❌ Hors périmètre PO Scrum — voir `AGENT-BUSINESS-ANALYST.md` (cycle en V)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| PI Planning, ART, WSJF, Portfolio Epics | `AGENT-PO-SAFE.md` | PO-SCRUM = équipe ; PO-SAFE = Program/Portfolio |
| Animation cérémonies Scrum (Daily, Planning, Review, Rétro) | `AGENT-SCRUM-MASTER.md` | PO-SCRUM produit ; SCRUM-MASTER facilite |
| Vision produit Programme, Product Operating Model | `AGENT-PRODUCT-MANAGER-SAFE.md` | PO-SCRUM équipe ; PM-SAFE Programme |
| Spécifications fonctionnelles détaillées, BPMN | `AGENT-BUSINESS-ANALYST.md` | PO-SCRUM = backlog produit ; BA = MOA / processus |
| Tests d'acceptance avancés (BDD, ATDD, automation) | `AGENT-QA-AGILE.md` | PO-SCRUM rédige AC ; QA exécute |

---

## Référentiels et standards utilisés

- **Scrum Guide 2020** : https://scrumguides.org/scrum-guide.html
- **Scrum.org PSPO** : https://www.scrum.org/professional-scrum-product-owner-certifications
- **Evidence-Based Management (EBM)** : https://www.scrum.org/resources/evidence-based-management
- **User Story Mapping** (Jeff Patton) : O'Reilly 2014
- **Lean UX** (Gothelf & Seiden)
- **ICAgile ICP-APO** : https://www.icagile.com/
