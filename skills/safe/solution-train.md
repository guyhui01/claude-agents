# Skill — Solution Train and SAFe Large Solution

> Certification: SAFe POPM 6 · SAFe LPM
> Agent: AGENT-PO-SAFE.md

## Objective
Coordinate several ARTs (Agile Release Trains) within the SAFe Large Solution level to deliver complex solutions requiring several hundred people.

## When to use the Large Solution level?

The Large Solution level applies when:
- The product requires **several ARTs** (> 150 people)
- The systems are **cyber-physical** (embedded, defense, aerospace)
- The **cross-ART dependencies** are numerous and complex
- A **Solution Train** is needed to coordinate

## Solution Train structure

```
SOLUTION TRAIN
├── Solution Manager / Solution PM
├── Solution Architect
├── Solution Train Engineer (STE)
│
├── ART 1 (Release Train Engineer + Scrum teams)
│   ├── Feature Team A
│   ├── Feature Team B
│   └── Feature Team C
│
├── ART 2 (RTE + teams)
│   ├── Feature Team D
│   └── Feature Team E
│
└── ART 3 (RTE + teams)
    ├── Feature Team F
    └── Feature Team G
```

## Key roles at the Large Solution level

| Role | Responsibility |
|---|---|
| **Solution Manager** | Solution vision, Solution Backlog, stakeholders |
| **Solution Architect** | Cross-ART architecture, Capabilities, enablers |
| **Solution Train Engineer (STE)** | RTE coordination, Solution Train cadence |
| **Business Owner** | Solution validation, funding, ROI |
| **Customer** | Real needs, validation, acceptance |

## Solution Backlog — Capabilities

### Capabilities vs Features

```
Portfolio   → Epics (very large scope, LPM funding)
                │
Large Sol.  → Capabilities (cross-ART, 1-2 PIs)
                │
ART         → Features (1 ART, 1 PI)
                │
Team        → User Stories (1 sprint)
```

### Capability format
```
Title: [Verb + Object] for [user / system]
Benefit Hypothesis: "By delivering [capability], we will let
                     [user] achieve [outcome]."
Acceptance Criteria (SMART):
  1. [Measurable criterion 1]
  2. [Measurable criterion 2]
Split: [Feature ART-1] + [Feature ART-2] + [Feature ART-3]
```

## Solution Train events

### Pre-PI Planning (Large Solution)
- **Who**: Solution Management + Architects + RTEs
- **When**: 1-2 days before each ART's PI Planning
- **Goal**: Align the inputs (Capabilities, constraints, cross-ART dependencies)

### Solution Demo
- **Who**: All the Solution Train teams
- **When**: End of each iteration (or IP Sprint)
- **Goal**: Demonstrate working cross-ART integration
- **Duration**: 2-4h depending on complexity

### Post-PI Planning (Large Solution)
- **Who**: Solution Management + Architects + RTEs
- **When**: 1-2 days after the ARTs' PI Planning
- **Goal**: Consolidate the PI Plans, identify residual dependencies

## Cross-ART dependency management

### Solution Kanban
```
Backlog → Analysis → Implementation → Demo → Deployed
  (Capabilities not started)         (Solution Demo validated)
```

### Dependency matrix
| Feature / Capability | Producer ART | Consumer ART | Delivery sprint | Status |
|---|---|---|---|---|
| Auth API | ART-1 | ART-2 + ART-3 | Sprint 2 | ⏳ In progress |
| Data Model | ART-2 | ART-1 | Sprint 1 | ✅ Delivered |
