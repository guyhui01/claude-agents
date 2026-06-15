# Skills — Product Owner SAFe

> Folder attached to `AGENT-PO-SAFE.md`
> Frameworks: SAFe 6 (POPM, SA, LPM, SDP) · Scrum.org PSPO I · Lean-Agile Mindset · DORA Metrics

---

## Skill index (25)

### Team / Iteration level
| Skill | When to use it | Certification |
|---|---|---|
| [`feature-to-story-splitting.md`](feature-to-story-splitting.md) | Decompose a Feature into User Stories (INVEST, SPIDR, Enabler Stories, Gherkin) | SAFe POPM 6 · SDP · PSPO I |
| [`ip-sprint.md`](ip-sprint.md) | Steer the IP Sprint (Innovation & Planning) | SAFe POPM 6 · SA |

### Program / ART level
| Skill | When to use it | Certification |
|---|---|---|
| [`pi-planning.md`](pi-planning.md) | Prepare / facilitate a PI Planning | SAFe POPM 6 |
| [`pi-objectives.md`](pi-objectives.md) | Write and steer the PI Objectives (committed/uncommitted) | SAFe POPM 6 · SA |
| [`art.md`](art.md) | Understand / structure the Agile Release Train | SAFe POPM 6 · SA |
| [`features.md`](features.md) | Write a SAFe Feature (statement, Benefit Hypothesis, AC) | SAFe POPM 6 |
| [`program-backlog.md`](program-backlog.md) | Manage the Program Backlog (ART level) | SAFe POPM 6 |
| [`dependencies.md`](dependencies.md) | Manage cross-team dependencies (Program Board) | SAFe POPM 6 |
| [`system-demo.md`](system-demo.md) | Prepare and facilitate the System Demo | SAFe POPM 6 |
| [`inspect-adapt.md`](inspect-adapt.md) | Facilitate the Inspect & Adapt | SAFe POPM 6 · SA |
| [`continuous-exploration.md`](continuous-exploration.md) | Drive Continuous Exploration (CE) | SAFe POPM 6 · SDP |
| [`safe-devops.md`](safe-devops.md) | DevOps strategy & Continuous Delivery Pipeline | SAFe POPM 6 · SDP |
| [`safe-metrics.md`](safe-metrics.md) | Steer SAFe metrics (Flow, DORA, Quality) | SAFe POPM 6 · SA |

### Large Solution level
| Skill | When to use it | Certification |
|---|---|---|
| [`capabilities.md`](capabilities.md) | Write and decompose Capabilities | SAFe POPM 6 · LPM |
| [`solution-train.md`](solution-train.md) | Coordinate a Solution Train | SAFe POPM 6 · LPM |

### Portfolio level
| Skill | When to use it | Certification |
|---|---|---|
| [`portfolio-epics.md`](portfolio-epics.md) | Manage Portfolio Epics (LPM) | SAFe LPM |
| [`epic-hypothesis-mvp.md`](epic-hypothesis-mvp.md) | Formulate an Epic Hypothesis Statement + steer MVP/MMF | SAFe POPM 6 · LPM · SPC |
| [`epic-to-feature-splitting.md`](epic-to-feature-splitting.md) | Decompose an Epic into Features (8 SAFe patterns) | SAFe POPM 6 · LPM · SPC |
| [`lean-business-case.md`](lean-business-case.md) | Build a Lean Business Case (LBC) | SAFe LPM |
| [`economic-framework.md`](economic-framework.md) | Apply the SAFe economic framework | SAFe LPM · POPM 6 |
| [`value-stream.md`](value-stream.md) | Map a Value Stream | SAFe POPM 6 · LPM |
| [`roadmap.md`](roadmap.md) | Build the SAFe roadmap (Portfolio, PI, Release) | SAFe POPM 6 · LPM |
| [`okr.md`](okr.md) | Write SAFe OKRs | SAFe POPM 6 · LPM |

### Cross-cutting
| Skill | When to use it | Certification |
|---|---|---|
| [`wsjf.md`](wsjf.md) | Compute and apply WSJF (relative scoring, smallest = 1) | SAFe POPM 6 |
| [`lean-agile-mindset.md`](lean-agile-mindset.md) | Apply the Lean-Agile Mindset & the 10 SAFe principles | SAFe POPM 6 · SA |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... PREPARE A PI PLANNING?
    → pi-planning.md (facilitation)
    → pi-objectives.md (writing)
    → wsjf.md (Feature prioritization)
    → dependencies.md (Program Board)

  ... MANAGE A PORTFOLIO EPIC?
    → epic-hypothesis-mvp.md (formulate)
    → epic-to-feature-splitting.md (decompose)
    → lean-business-case.md (LBC required if Portfolio)
    → economic-framework.md (economic framework)

  ... DECOMPOSE A FEATURE?
    → feature-to-story-splitting.md (Feature → Stories)

  ... MEASURE AN ART'S PERFORMANCE?
    → safe-metrics.md (Flow + DORA)
    → inspect-adapt.md (quarterly I&A)

  ... COORDINATE MULTIPLE ARTs?
    → capabilities.md (cross-ART need)
    → solution-train.md (Large Solution governance)
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| User Stories, DoR/DoD, Scrum events | `AGENT-PO-SCRUM.md` | PO-SAFE = ART; PO-SCRUM = team |
| Detailed functional specifications | `AGENT-BUSINESS-ANALYST.md` | PO-SAFE = ART backlog; BA = business analysis |
| Program product vision, ART roadmap, go-to-market | `AGENT-PRODUCT-MANAGER-SAFE.md` | PO-SAFE = ART operational; PM-SAFE = Program strategic |
| PI Planning facilitation, Scrum of Scrums, Flow Metrics | `AGENT-RELEASE-TRAIN-ENGINEER.md` | PO-SAFE = content; RTE = ART facilitation |

---

## Critical SAFe compliance rules

- ✅ **WSJF**: **relative, independent scoring per column** (smallest = 1 per column)
- ✅ **MoSCoW**: reserved for **User Stories** (not Epics/Features → WSJF)
- ✅ **PI Objectives**: distinguish **committed** vs **uncommitted**
- ✅ **Benefit Hypothesis**: at the **Feature** level (the **LBC** is reserved for **Epics**)
- ✅ **Sprint Goal**: **only one** per team per sprint
- ✅ **Self-managed Developers**: the SM facilitates, doesn't assign

---

## Frameworks and standards used

- **SAFe 6**: https://framework.scaleagilesoftware.com/
- **SAFe POPM 6 study guide**: Scaled Agile Inc.
- **DORA Metrics**: Lead Time, Deployment Frequency, MTTR, Change Failure Rate
- **Lean-Agile Mindset** (Donald Reinertsen)
- **Scrum Guide 2020**: reference for the team level
