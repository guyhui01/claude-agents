# Skill — Value decomposition and product Value Stream Mapping

> Certification: PSPO II · PSPO III
> Agent: AGENT-PO-SCRUM.md

## Objective
Identify and eliminate waste in the product value stream, from user need to production release, to maximize value delivered per sprint.

## Product Value Stream Mapping (team level)

### Steps of a typical value stream
```
Idea/Need → Discovery → Backlog → Refinement → Sprint → Test → Deployment → User
   [2d]       [5d]        [3d]      [2d]          [10d]    [2d]    [1d]          [0d]
```

### Key metrics to measure
- **Lead Time**: total duration idea → production
- **Process Time**: active working time only
- **Flow Efficiency**: Process Time / Lead Time × 100 (target: >40%)
- **Cycle Time**: average duration of a US in active development

### Waste identification (MUDA)
| Waste | Product example | Solution |
|---|---|---|
| Overproduction | Shipped, unused features | Hypothesis-driven development |
| Waiting | US stuck in review for 3 days | Limit WIP, clear DoD |
| Transport | Multiple handoffs PO→Dev→QA | Cross-functional team |
| Over-processing | Excessive documentation | Just enough documentation |
| Inventory | Backlog > 3 sprints of work | Backlog = living document |
| Defects | Bugs detected in production | Shift-left testing, DoD |
| Underutilization | Devs not involved in discovery | Dual track agile |

## Value decomposition techniques

### 1. Story Splitting (slicing US)
**SPIDR patterns:**
- **S**pikes: separate exploration from implementation
- **P**aths: one user path = one US
- **I**nterfaces: desktop first, mobile next
- **D**ata: a subset of data first
- **R**ules: a simple business rule first, complex next

**Independent value test:**
```
Each US must answer YES to:
□ Deliverable to production independently?
□ Testable without a blocking dependency?
□ Value perceptible by the user on its own?
```

### 2. User Story Mapping — Vertical slicing
```
BACKBONE (Activities)
├── Find a product → Search → Filter → View the page
├── Buy → Cart → Checkout → Payment → Confirmation
└── Manage → History → Returns → Profile

WALKING SKELETON (vertical MVP — 1 US per activity)
RELEASE 1 (essential features)
RELEASE 2 (enrichment)
RELEASE 3 (optimization)
```

### 3. Jobs To Be Done (JTBD) — Decomposition by job
```
Primary job: [What the user is trying to accomplish]
├── Functional job: [concrete action]
├── Emotional job: [expected feeling]
└── Social job: [projected image]

→ Each job = a potential US or Epic
```

## Measuring value delivered

### Value Burn-up Chart
- X axis: sprints
- Y axis: cumulative value delivered (SP or number of features)
- Target line vs actual line
- Identify low-value sprints → analyze the causes

### Business value metrics
| Metric | Formula | Frequency |
|---|---|---|
| Feature adoption rate | Active feature users / Total users | Weekly |
| Time to value | Discovery date → First-use date | Per feature |
| Value delivered / sprint | SP delivered × weighted business value | Sprint |
| Feature ROI | Revenue generated / Development cost | Quarterly |
