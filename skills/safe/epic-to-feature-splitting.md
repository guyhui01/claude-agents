# Skill — Decompose an Epic into Features (Epic → Feature Splitting)

> Certification: SAFe POPM 6 · SAFe LPM · SAFe SPC
> Agents: AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objective

Decompose a Portfolio Epic (or Capability) into **Features deliverable within 1 PI** by the ART, following the **8 official SAFe splitting patterns** and the **vertical slicing** principle (each Feature delivers end-to-end user value).

> 🔗 For Epic formulation + MVP: see `epic-hypothesis-mvp.md`
> 🔗 To decompose Feature → US: see `feature-to-story-splitting.md`

## SAFe cascade — Reminder

```
Portfolio Epic (12-24 months, several ARTs)
   └── Capability (Large Solution, multi-PI, cross-ART)
         └── Feature (1 PI, 1 ART, end-to-end deliverable)
               └── User Story (1 sprint, 1 team)
                     └── Technical tasks
```

### Definition of a SAFe Feature

| Criterion | Rule |
|---|---|
| **Size** | Deliverable within **1 PI** (10 weeks max) by 1 ART |
| **Value** | Brings a verifiable **Benefit Hypothesis** |
| **Vertical** | Crosses all layers (UI → API → data) — not a layer cake |
| **AC** | Has explicit (testable) **Acceptance Criteria** |
| **Estimable** | Estimated in story points or T-shirt (at PI Planning) |

---

## The 8 official SAFe splitting patterns

### Pattern 1 — Workflow Steps

Split by the **successive steps** of a user process.

**Example — Epic "B2B customer onboarding":**
- Feature 1: Account creation + KYC
- Feature 2: Company profile setup
- Feature 3: Inviting collaborators
- Feature 4: Activating the selected modules

**When to use it:** clear sequential process, identified user journey.

---

### Pattern 2 — Business Rules Variations

Split by **increasing complexity of business rules**.

**Example — Epic "Dynamic pricing calculation":**
- Feature 1: Simple pricing rule (1 product, 1 customer type)
- Feature 2: Multi-product rules with discounts
- Feature 3: Segmented rules (B2B/B2C, geography)
- Feature 4: Pricing with contractual constraints

**When to use it:** complex business logic, "simple first" applicable.

---

### Pattern 3 — Operations (CRUD)

Split by the **atomic operations** on an entity.

**Example — Epic "Product catalog management":**
- Feature 1: Catalog browsing (Read)
- Feature 2: Product creation (Create) + validation workflow
- Feature 3: Product editing (Update) + audit trail
- Feature 4: Archiving / deletion (Delete) + GDPR

**When to use it:** central business entity, clearly identified CRUD operations.

---

### Pattern 4 — Scenarios / Use Cases

Split by the **main user scenarios**.

**Example — Epic "B2B payment platform":**
- Feature 1: Instant payment by bank transfer
- Feature 2: Deferred payment (due date + reminder)
- Feature 3: Split payment (3-12 installments)
- Feature 4: Refunds and credit notes

**When to use it:** several distinct, mutually independent use cases.

---

### Pattern 5 — Simple First / Complex Later

Split into a **simple version first**, refinements later.

**Example — Epic "Analytics dashboard":**
- Feature 1: Static dashboard with 5 predefined KPIs
- Feature 2: Time filters (day/week/month/quarter)
- Feature 3: Drill-down on the KPIs
- Feature 4: User-customizable dashboards

**When to use it:** immediate value possible with a minimal version, observable refinements.

---

### Pattern 6 — Variations (segments, geographies, devices)

Split by the **variations of usage context**.

**Example — Epic "Commerce mobile app":**
- Feature 1: Responsive web (all platforms)
- Feature 2: Native iOS app
- Feature 3: Native Android app
- Feature 4: Watch / wearables

**When to use it:** different segments or channels, prioritization by user volume.

---

### Pattern 7 — Data Variations

Split by the **complexity or volume of data**.

**Example — Epic "Legacy → cloud data migration":**
- Feature 1: Product reference data migration (low volume, simple structure)
- Feature 2: Order history migration (high volume, stable schema)
- Feature 3: Customer interaction history migration (high volume, heterogeneous schema)
- Feature 4: Legal archives migration (moderate volume, GDPR constraints)

**When to use it:** heterogeneous data, volume or quality constraints.

---

### Pattern 8 — Defer Performance / Quality Attributes

Split by **delivering the function first**, optimization after.

**Example — Epic "AI product search":**
- Feature 1: Functional search (latency ~5s, nightly batch)
- Feature 2: Real-time search (latency < 1s)
- Feature 3: Search with auto-complete (latency < 200ms)
- Feature 4: Personalized search (RAG + history)

**When to use it:** the function has value even unoptimized, optimization = a distinct effort.

---

## SAFe Feature template (to produce for each split)

```
FEATURE: [short, value-oriented name]

BENEFIT HYPOTHESIS:
  For [persona]
  Who [need]
  [This Feature] will deliver [measurable benefit]
  Measured by [leading indicator + threshold]

ACCEPTANCE CRITERIA:
  □ AC1 — [testable criterion]
  □ AC2 — [testable criterion]
  □ AC3 — [testable criterion]

NON-FUNCTIONAL REQUIREMENTS (if relevant):
  - Performance: [threshold]
  - Security: [requirement]
  - Compliance: [standard]

ESTIMATE: [story points or T-shirt size]
WSJF: [score] (see wsjf.md)
DEPENDENCIES: [other Features, teams, external]
REQUIRED ENABLERS: [Enabler Features or Stories]
```

---

## Epic → Features splitting workshop (Continuous Exploration)

### Preparation

| Item | Detail |
|---|---|
| **Participants** | Epic Owner, SAFe PM, System Architect, Business Owners, 1-2 POs |
| **Duration** | 2-3h (or 2× 90 min remote) |
| **Prerequisites** | Validated Epic Hypothesis Statement, approved LBC |
| **Tools** | Miro / FigJam (Story Map or Feature Map template) |

### Run (3h)

1. **Reminder of Epic Hypothesis + target MVP** (15 min)
2. **Brainstorm all applicable patterns** (30 min) — often 2-3 combined patterns
3. **Generate candidate Features** (45 min) — individual sticky notes then pooling
4. **Grouping and sorting** (30 min) — removing duplicates, regrouping
5. **MVP prioritization** (30 min) — apply WSJF (Features and Epics — MoSCoW reserved for User Stories)
6. **Define the Benefit Hypothesis per MVP Feature** (30 min)
7. **Identify dependencies and Enablers** (15 min)

### Expected output

- 8-15 Features identified, ordered by WSJF
- 3-5 Features selected for the MVP
- Backlog of Enabler Features
- List of cross-ART or external dependencies

---

## Frequent pattern combinations

| Epic type | Recommended patterns |
|---|---|
| **New B2C product** | Workflow + Simple First + Variations |
| **Application rebuild** | Operations CRUD + Data Variations + Defer Performance |
| **Cross-cutting platform** | Operations + Scenarios + Variations |
| **Migration / decommissioning** | Data Variations + Workflow + Defer Quality |
| **AI / Machine Learning** | Simple First + Data Variations + Defer Performance |

---

## Anti-patterns to avoid

- ❌ **Layer cake splitting**: "Feature 1 = the DB, Feature 2 = the API, Feature 3 = the UI" → no value delivered before the end
- ❌ **Slices too fine**: 50 Features for one Epic → that's already team backlog
- ❌ **No AC on the Features**: impossible to accept in the System Demo
- ❌ **Ignoring Enabler Features**: infrastructure debt will weigh down PI 2
- ❌ **Splits with no Benefit Hypothesis**: a Feature = a task list, not value
- ❌ **A single pattern for the whole Epic**: combining 2-3 patterns almost always gives a better split

---

## Deliverables

- Feature Map (Miro / FigJam) with the 8 patterns displayed
- The Epic's Features backlog, ordered by WSJF, ready for the Program Backlog
- Standardized Feature sheet per MVP Feature (Benefit Hypothesis + AC + NFR)
- Cross-ART / external dependencies table
- Workshop notes (decisions, open points)

## Output format

Specify: **source Epic** (name + hypothesis), **patterns to favor** or "to propose", **MVP horizon** (1 PI / 2 PIs), **available stakeholders** (Epic Owner, PM, Architects), **level of detail** (Features list only / full sheets with AC).
