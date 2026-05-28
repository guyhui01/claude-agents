# Skills — Product Owner SAFe

> Dossier rattaché à `AGENT-PO-SAFE.md`
> Référentiels : SAFe 6 (POPM, SA, LPM, SDP) · Scrum.org PSPO I · Lean-Agile Mindset · DORA Metrics

---

## Index des skills (25)

### Niveau Team / Iteration
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`feature-to-story-splitting.md`](feature-to-story-splitting.md) | Décomposer une Feature en User Stories (INVEST, SPIDR, Enabler Stories, Gherkin) | SAFe POPM 6 · SDP · PSPO I |
| [`ip-sprint.md`](ip-sprint.md) | Piloter l'IP Sprint (Innovation & Planning) | SAFe POPM 6 · SA |

### Niveau Program / ART
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`pi-planning.md`](pi-planning.md) | Préparer / animer un PI Planning | SAFe POPM 6 |
| [`pi-objectives.md`](pi-objectives.md) | Rédiger et piloter les PI Objectives (committed/uncommitted) | SAFe POPM 6 · SA |
| [`art.md`](art.md) | Comprendre / structurer l'Agile Release Train | SAFe POPM 6 · SA |
| [`features.md`](features.md) | Rédiger une Feature SAFe (énoncé, Benefit Hypothesis, AC) | SAFe POPM 6 |
| [`program-backlog.md`](program-backlog.md) | Gérer le Program Backlog (niveau ART) | SAFe POPM 6 |
| [`dependencies.md`](dependencies.md) | Gérer les dépendances inter-équipes (Program Board) | SAFe POPM 6 |
| [`system-demo.md`](system-demo.md) | Préparer et faciliter la System Demo | SAFe POPM 6 |
| [`inspect-adapt.md`](inspect-adapt.md) | Animer l'Inspect & Adapt | SAFe POPM 6 · SA |
| [`continuous-exploration.md`](continuous-exploration.md) | Piloter la Continuous Exploration (CE) | SAFe POPM 6 · SDP |
| [`safe-devops.md`](safe-devops.md) | Stratégie DevOps & Continuous Delivery Pipeline | SAFe POPM 6 · SDP |
| [`safe-metrics.md`](safe-metrics.md) | Piloter les métriques SAFe (Flow, DORA, Quality) | SAFe POPM 6 · SA |

### Niveau Large Solution
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`capabilities.md`](capabilities.md) | Rédiger et décomposer des Capabilities | SAFe POPM 6 · LPM |
| [`solution-train.md`](solution-train.md) | Coordonner un Solution Train | SAFe POPM 6 · LPM |

### Niveau Portfolio
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`portfolio-epics.md`](portfolio-epics.md) | Gérer les Portfolio Epics (LPM) | SAFe LPM |
| [`epic-hypothesis-mvp.md`](epic-hypothesis-mvp.md) | Formuler un Epic Hypothesis Statement + piloter MVP/MMF | SAFe POPM 6 · LPM · SPC |
| [`epic-to-feature-splitting.md`](epic-to-feature-splitting.md) | Décomposer un Epic en Features (8 patterns SAFe) | SAFe POPM 6 · LPM · SPC |
| [`lean-business-case.md`](lean-business-case.md) | Monter un Lean Business Case (LBC) | SAFe LPM |
| [`economic-framework.md`](economic-framework.md) | Appliquer le cadre économique SAFe | SAFe LPM · POPM 6 |
| [`value-stream.md`](value-stream.md) | Cartographier un Value Stream | SAFe POPM 6 · LPM |
| [`roadmap.md`](roadmap.md) | Construire la roadmap SAFe (Portfolio, PI, Release) | SAFe POPM 6 · LPM |
| [`okr.md`](okr.md) | Rédiger des OKR SAFe | SAFe POPM 6 · LPM |

### Transversal
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`wsjf.md`](wsjf.md) | Calculer et appliquer le WSJF (cotation relative, plus petit = 1) | SAFe POPM 6 |
| [`lean-agile-mindset.md`](lean-agile-mindset.md) | Appliquer le Lean-Agile Mindset & 10 principes SAFe | SAFe POPM 6 · SA |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... PRÉPARER UN PI PLANNING ?
    → pi-planning.md (animation)
    → pi-objectives.md (rédaction)
    → wsjf.md (priorisation des Features)
    → dependencies.md (Program Board)

  ... GÉRER UN EPIC PORTFOLIO ?
    → epic-hypothesis-mvp.md (formuler)
    → epic-to-feature-splitting.md (décomposer)
    → lean-business-case.md (LBC requis si Portfolio)
    → economic-framework.md (cadre éco)

  ... DÉCOMPOSER UNE FEATURE ?
    → feature-to-story-splitting.md (Feature → Stories)

  ... MESURER LA PERFORMANCE D'UN ART ?
    → safe-metrics.md (Flow + DORA)
    → inspect-adapt.md (I&A trimestriel)

  ... COORDONNER PLUSIEURS ART ?
    → capabilities.md (besoin cross-ART)
    → solution-train.md (gouvernance Large Solution)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| User Stories, DoR/DoD, cérémonies Scrum | `AGENT-PO-SCRUM.md` | PO-SAFE = ART ; PO-SCRUM = équipe |
| Spécifications fonctionnelles détaillées | `AGENT-BUSINESS-ANALYST.md` | PO-SAFE = backlog ART ; BA = analyse métier |
| Vision produit Programme, roadmap ART, go-to-market | `AGENT-PRODUCT-MANAGER-SAFE.md` | PO-SAFE = opérationnel ART ; PM-SAFE = stratégique Programme |
| Facilitation PI Planning, Scrum of Scrums, Flow Metrics | `AGENT-RELEASE-TRAIN-ENGINEER.md` | PO-SAFE = contenu ; RTE = facilitation ART |

---

## Règles de conformité SAFe critiques

- ✅ **WSJF** : cotation **relative et indépendante par colonne** (plus petit = 1 par colonne)
- ✅ **MoSCoW** : réservé aux **User Stories** (pas aux Epics/Features → WSJF)
- ✅ **PI Objectives** : distinguer **committed** vs **uncommitted**
- ✅ **Benefit Hypothesis** : au niveau **Feature** (le **LBC** est réservé aux **Epics**)
- ✅ **Sprint Goal** : **1 seul** par équipe par sprint
- ✅ **Developers auto-gérés** : le SM facilite, n'assigne pas

---

## Référentiels et standards utilisés

- **SAFe 6** : https://framework.scaleagilesoftware.com/
- **SAFe POPM 6 study guide** : Scaled Agile Inc.
- **DORA Metrics** : Lead Time, Deployment Frequency, MTTR, Change Failure Rate
- **Lean-Agile Mindset** (Donald Reinertsen)
- **Scrum Guide 2020** : référence pour le niveau équipe
