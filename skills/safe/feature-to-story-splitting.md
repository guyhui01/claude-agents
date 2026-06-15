# Skill — Decompose a Feature into User Stories (Feature → Story Splitting)

> Certification: SAFe POPM 6 · SAFe SDP · PSPO I
> Agent: AGENT-PO-SAFE.md

## Objective

Decompose a **SAFe Feature** (deliverable within 1 PI) into **User Stories** (deliverable within 1 sprint) following the **vertical slicing** principle and the **INVEST** criteria, incorporating the needed **Enabler Stories** and the **Acceptance Criteria** in Gherkin format — within PI Planning and ART refinements.

> 🔗 For the Epic → Feature split: see `epic-to-feature-splitting.md`
> 🔗 For standard US writing (outside SAFe): see `skills/scrum/po-user-story.md`
> 🔗 For pure team-Scrum decomposition: see `skills/scrum/value-decomposition.md`

## Specifics of splitting in a SAFe context

| Difference vs pure Scrum | Implication |
|---|---|
| PI scope (10 weeks) | Splits planned **several sprints ahead**, not on demand |
| Multi-team ART | Stories to allocate to the right teams based on Component / Feature ownership |
| Explicit Enabler Stories | Infra, data, security: not "noise", a full SAFe category in its own right |
| Cross-team dependencies | Stories to sequence according to the **Program Board** |
| System Demo | Stories must contribute to a **demonstrable increment** per PI |

---

## INVEST criteria applied to SAFe

| Criterion | Definition | SAFe particularity |
|---|---|---|
| **I**ndependent | Independent of the other US | Ideal, but in SAFe cross-team dependencies exist → trace them on the Program Board |
| **N**egotiable | Not a frozen contract | Conversation between PO + team during PI Planning |
| **V**aluable | Delivers value | Reference to the **parent Feature's Benefit Hypothesis** |
| **E**stimable | Estimable by the team | In story points (Fibonacci) at PI Planning + refinements |
| **S**mall | Fits within 1 sprint | If > 1 sprint: to re-split |
| **T**estable | Clear acceptance criteria | Gherkin recommended, integrated into the System Demo |

---

## SPIDR patterns applied to SAFe

> SPIDR = Spikes / Paths / Interfaces / Data / Rules — Mike Cohn's method, particularly suited to the SAFe context because it eases **Enabler Story management** and **cross-team sequencing**.

### S — Spikes (exploration separated from implementation)

When a US has too much technical, business or UX unknown.

**Example — Feature "AI product search":**
- Spike: Evaluate 3 embedding models (3 days, output = note + recommendation)
- US: Implement the search with the chosen model (5 SP)

**Spike format:**
```
SPIKE — [question to answer]
TIMEBOX: [3 days max]
OUTPUT: [decision note + recommendation + throwaway POC]
```

> ⚠️ The Spike is an **Enabler Story** (Enablement / Exploration) in SAFe.

### P — Paths (user paths)

Decompose a US by the possible paths in the journey.

**Example — Feature "E-commerce checkout":**
- US1: Checkout with pre-filled address (logged-in user)
- US2: Checkout with address entry (not logged-in user)
- US3: Checkout with international address + VAT
- US4: Checkout with delivery address ≠ billing

### I — Interfaces (channels / devices)

Decompose by user interface.

**Example — Feature "Order notification":**
- US1: Email notification (90% of cases)
- US2: In-app notification (logged-in users)
- US3: SMS notification (premium)
- US4: Mobile push notification (app installed)

### D — Data (data variations)

Decompose by data complexity or variants.

**Example — Feature "Delivery slip import":**
- US1: CSV import (standard format)
- US2: Multi-tab Excel import
- US3: EDI / XML import (legacy partners)
- US4: Real-time API import (modern partners)

### R — Rules (business rules)

Decompose by increasing complexity of rules.

**Example — Feature "Discount calculation":**
- US1: Simple percentage discount (1 product)
- US2: Cart-threshold discount
- US3: Combined discount (stackable / non-stackable per rules)
- US4: B2B contractual discount (customer-negotiated)

---

## Enabler Stories — Official SAFe category

### 4 types of Enabler Stories

| Type | Definition | Example |
|---|---|---|
| **Architectural** | Architecture / pattern evolution | "Migrate the payment service to event-driven" |
| **Infrastructure** | Infra build / config, CI/CD | "Provision a staging Kubernetes cluster" |
| **Exploration (Spike)** | Technical or product research / POC | "Evaluate 3 e-signature libraries" |
| **Compliance** | Compliance / audit / security | "Set up GDPR audit logs" |

### SAFe rules for Enabler Stories

- [ ] Identified as a distinct category (label / field "Story Type = Enabler")
- [ ] Linked to 1 parent Feature or Enabler Feature
- [ ] Estimated like User Stories
- [ ] Visible in the sprint's allocated capacity (12-20% recommended in normal mode, up to 40% if rebuilding)
- [ ] Validated by the System Architect if Architectural / Infrastructure

---

## Acceptance Criteria in Gherkin format

### Recommended SAFe template

```
GIVEN [initial context]
WHEN  [user or system action]
THEN  [measurable expected result]
AND   [additional verification if needed]
```

### Full example

```
US — Checkout with pre-filled address (logged-in user)

AC1 — Automatic pre-fill
  GIVEN a logged-in user with a saved primary address
  WHEN they reach the checkout screen
  THEN the primary address is pre-filled in the form
  AND  the fields are editable

AC2 — Validation on submit
  GIVEN a user on the checkout screen with a pre-filled address
  WHEN they click "Confirm order"
  THEN the order is created with the displayed address
  AND  a confirmation email is sent within 60 seconds

AC3 — Address change
  GIVEN a user on the checkout screen with a pre-filled address
  WHEN they edit an address field
  THEN only the order uses the new address
  AND  the profile's primary address is NOT modified
```

### Benefit in a SAFe context

- **Test automation**: Gherkin AC = a direct basis for Cucumber / SpecFlow / Behave
- **System Demo**: AC serve as a demo script at the end of the PI
- **ART DoD**: each AC = a validation checkbox
- **Compliance**: precise AC = traceability for quality audits

---

## Feature → Stories splitting workshop (ART refinement)

### When to do it

| Moment | Goal |
|---|---|
| **Pre-PI Planning** (4-2 weeks before) | Initial splits of the selected Features, rough estimation |
| **PI Planning Day 1** (after the briefing) | Refined splits with the team, story-point estimates |
| **Sprint refinement** | Additional splits of US that turned out too big |
| **System Demo / I&A** | Feedback on split quality (retrospective) |

### Run (typical 90-min refinement)

1. **Reminder of Feature + Benefit Hypothesis** (5 min)
2. **Brainstorm applicable SPIDR patterns** (10 min)
3. **Generate candidate US** (30 min) — individual sticky notes
4. **Sort and group** (15 min) — remove duplicates, merge
5. **Planning Poker estimation** (20 min) — Fibonacci
6. **INVEST + DoR validation** (10 min) — checklist for each US

### Output

- 5-15 US per Feature, estimated
- Enabler Stories identified (Spikes, Infra)
- Cross-team dependencies listed (for the Program Board)
- Gherkin AC for the highest-priority US (M-1 sprint)

---

## Sequencing table (Program Board input)

```
| US ID | Parent Feature  | Owner team   | Sprint | Dependencies | Status |
|-------|-----------------|--------------|--------|--------------|--------|
| US-12 | F-3 Checkout    | Team Alpha   | S1     | -            | Ready  |
| US-13 | F-3 Checkout    | Team Beta    | S2     | US-12        | Refine |
| US-14 | F-3 Checkout    | Team Alpha   | S2     | API Team     | Refine |
| ...   | ...             | ...          | ...    | ...          | ...    |
```

→ This grid feeds directly into the **Program Board** at PI Planning Day 2.

---

## SAFe-specific anti-patterns

- ❌ **Scrum-only splits with no ART visibility**: creating US without linking them to a SAFe Feature
- ❌ **Forgetting Enabler Stories**: everything as a User Story → the team underestimates the tech load
- ❌ **AC too generic** ("must work", "must be performant") → not testable, not demonstrable
- ❌ **Late cascade Feature splits**: splitting everything during PI Planning Day 1 → overflow
- ❌ **US > 13 SP at planning**: it's almost always poorly split, to challenge systematically
- ❌ **Ignoring cross-team dependencies** at split time → the Program Board explodes

---

## Deliverables

- Refined team backlog(s), US estimated and ordered by sprint
- List of Enabler Stories by type (Architectural / Infra / Spike / Compliance)
- AC in Gherkin format for the PI's Sprint 1 US
- Dependencies table as input to the Program Board
- Refinement workshop notes

## Output format

Specify: **source Feature** (with Benefit Hypothesis), **teams involved** (1 or N), **SPIDR patterns to favor** or "to propose", **horizon** (sprint refinement / pre-PI Planning), **AC level** (sketch / full Gherkin).
