# Skill — Epic Hypothesis Statement, Epic Owner role and MVP/MMF

> Certification: SAFe POPM 6 · SAFe LPM · SAFe SPC
> Agents: AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objective

Formulate a clear, testable Portfolio Epic hypothesis, identify the **MVP** that will validate (or invalidate) the hypothesis, and decide at the end of the MVP whether to **pivot or persevere** — relying on the official SAFe Epic Owner role.

> 🔗 For Portfolio Kanban governance + Business/Enabler Epic: see `portfolio-epics.md`
> 🔗 For the full Lean Business Case: see `lean-business-case.md`

## Epic Owner role (official SAFe)

| Responsibility | Detail |
|---|---|
| **Define the Epic Hypothesis Statement** | With LPM, System Architects, PM |
| **Build the Lean Business Case (LBC)** | Cost, expected benefits, leading indicators |
| **Present to LPM** for Go/No-Go | Funnel → Reviewing → Analyzing |
| **Define and steer the MVP** | Minimal scope to test the hypothesis |
| **Coordinate the involved ARTs** | Several ARTs can contribute to 1 Epic |
| **Decide at the end of the MVP**: Pivot / Persevere / Stop | Data-driven decision |

> ⚠️ The Epic Owner is **not** a full-time role: it's often a SAFe PM, an Architect or a Business Owner who takes on this hat for 1 given Epic (6-18 month duration).

---

## Epic Hypothesis Statement — Official SAFe template

### Canonical structure

```
FOR              [target users / market segment]
WHO             [statement of the need or opportunity]
THE              [name of the Epic]
IS A             [solution type / category]
THAT             [key benefit / unique value]
UNLIKE          [current alternative / competitor]
OUR SOLUTION    [key differentiation]
```

### Example — Business Epic

```
FOR              SMB Marketing managers (50-500 employees)
WHO             struggle to orchestrate multi-channel campaigns for lack of data unification
THE              internal Customer Data Platform
IS A             customer-data centralization and segmentation platform
THAT             lets you launch a multi-channel campaign in under 30 min
UNLIKE          Salesforce CDP or Segment (cost + vendor dependency)
OUR SOLUTION    integrates natively with our existing CRM/ERP ecosystem
                with GDPR-compliant data governance
```

### Associated measurable hypothesis

```
WE BELIEVE THAT          [intervention]
WILL LET                 [persona]
ACHIEVE                  [expected, measurable outcome]
WE WILL KNOW IT WHEN     [leading indicator, threshold, deadline]
```

**Example:**
> We believe that setting up an internal CDP will let SMB Marketing managers achieve a 60% reduction in campaign launch time. We will know it when 80% of MVP users (n=20) launch a campaign in under 30 min, measured at M+3 post-launch.

---

## MVP vs MMF — SAFe distinction

| Concept | Definition | SAFe use | When to use it |
|---|---|---|---|
| **MVP** (Minimum Viable Product) | Smallest increment that lets you **validate/invalidate a hypothesis** | **Implementing** phase of an Epic (before Go/No-Go scaling) | Uncertain hypothesis, unvalidated market |
| **MMF** (Minimum Marketable Feature) | Smallest increment that can be **brought to market** and **monetized** | **Releasing** phase of a mature Feature/Capability | Hypothesis already validated, optimizing go-to-market |

> ⚠️ **Classic mistake:** confusing the MVP with the "v1 of the product". The MVP must be **throwaway** if the hypothesis is invalidated.

### Criteria of a good SAFe MVP

- [ ] **Measurable**: leading indicators defined before the build
- [ ] **Time-bound**: 1-3 PIs maximum
- [ ] **Representative**: on 1 real customer segment, not an internal POC
- [ ] **Decision-enabling**: allows a clear Go/No-Go (not "we'll see")
- [ ] **Economically reasonable**: < 20% of the total estimated LBC

---

## Build-Measure-Learn cycle applied to the Epic

```
        ┌──── HYPOTHESIS ────┐
        │                    ▼
   PIVOT/                  BUILD
   PERSEVERE              (MVP)
        ▲                    │
        │                    ▼
        └─── MEASURE ◀── LEARN
             (leading
              indicators)
```

### BUILD phase (1-3 PIs)

- Define the MVP scope with the Epic Hypothesis Statement
- Split the Epic into priority Features for the MVP (see `epic-to-feature-splitting.md`)
- Identify the needed Enabler Features (infra, data, security)
- Prepare the instrumentation of the leading indicators (analytics, telemetry)

### MEASURE phase (variable duration, post-MVP release)

| Leading indicator | Type | Example |
|---|---|---|
| **Adoption** | Behavioral | % of target users activated |
| **Engagement** | Behavioral | Usage frequency, session length |
| **Business outcome** | Quantitative | Cycle-time reduction, revenue gain |
| **Satisfaction** | Qualitative | NPS, CSAT, targeted interviews |
| **Operating cost** | Economic | Cost per transaction, infra |

### LEARN phase (2-4h workshop)

1. Present the data vs the initial hypothesis
2. Identify the insights (expected + surprises)
3. Document what worked / didn't work
4. Prepare the Pivot/Persevere/Stop decision

---

## Pivot / Persevere / Stop decision

### Decision grid

| Observed data | Recommended decision |
|---|---|
| Hypothesis confirmed + metrics beyond the threshold | **PERSEVERE** → scale, add post-MVP Features |
| Hypothesis confirmed but metrics below the threshold | **PERSEVERE** with targeted optimizations |
| Hypothesis partially confirmed, a different segment responds better | **PIVOT** (Segment / Persona) |
| Hypothesis disproven but an adjacent opportunity discovered | **PIVOT** (Use case / Job-to-be-done) |
| Hypothesis disproven, no adjacent opportunity | **STOP** (and capture the learning) |

### Epic Owner → LPM decision-note template

```
EPIC: [epic name]
PHASE: MVP completed on [date]
PI INVESTED: [number of PIs]
ACTUAL COST: [€] (vs estimated LBC: [€])

INITIAL HYPOTHESIS: [1-line reminder]

MEASURED RESULTS:
  - Leading indicator 1: [value] vs target [threshold] → [✅/⚠️/❌]
  - Leading indicator 2: ...

PROPOSED DECISION: [PIVOT / PERSEVERE / STOP]

RATIONALE (3 lines max):
  ...

NEXT STEPS if approved:
  - [Action 1, owner, due date]
  - [Action 2, owner, due date]
```

---

## Anti-patterns to avoid

- ❌ Epic Hypothesis with no measurement criterion → "we did the MVP, it's fine"
- ❌ MVP exceeding 50% of the total LBC → it's no longer an MVP, it's a product
- ❌ Pivot/Persevere decision made with no data, "on a feeling"
- ❌ Persevering on every Epic → LPM no longer arbitrates, the portfolio explodes
- ❌ MVP shipped with no analytics instrumentation → impossible to measure = impossible decision
- ❌ Epic Owner = a passive sponsor → must steer, not just validate

---

## Deliverables

- Epic Hypothesis Statement (1 page) signed by Epic Owner + Business Owner
- MVP plan (Features scope, leading indicators, Go/No-Go deadline)
- MVP dashboard (analytics, leading indicators, updated monthly)
- Pivot/Persevere/Stop decision note (presented at LPM)
- Captured learnings (Portfolio wiki, even if STOP)

## Output format

Specify: **Epic level** (Business / Enabler), **MVP horizon** (number of PIs), **available leading indicators**, **involved ARTs**, **LPM stakeholders** (Business Owners, Architects, Epic Owner).
