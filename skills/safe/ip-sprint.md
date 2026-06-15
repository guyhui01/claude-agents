# Skill — Innovation and Planning (IP) Sprint SAFe

> Certification: SAFe POPM 6 · SAFe Agilist
> Agent: AGENT-PO-SAFE.md

## Objective
Steer the IP Sprint (the PI's last iteration) to ensure stabilization, innovation and preparation for the next PI.

## The role of the IP within the PI

The IP Sprint is the **5th iteration** of the PI (after 4 delivery iterations).

```
PI = Iteration 1 + Iteration 2 + Iteration 3 + Iteration 4 + IP Sprint
                                                                ↑
                                               [Stabilization + Innovation + Planning]
```

## The 3 objectives of the IP Sprint

### 1. Stabilization and quality
- Resolving critical bugs not resolved in Iteration 4
- End-to-end regression testing
- Updated technical documentation
- Performance testing (load, security)
- Final validation of the PI Objectives (met / partially / not met)

### 2. Innovation (Hackathon / Spike)
- Time dedicated to free exploration (20-30% of the IP Sprint)
- Formats: Hackathon (2-3 days), Innovation Day, technical Spikes
- Rule: the teams choose their own topics
- Output: prototypes, POCs, tooling improvements, tech watch

### 3. Preparing the next PI
- Inspect & Adapt (I&A) workshop — see the inspect-adapt.md skill
- PI Planning preparation:
  - Refining the Program Backlog (top 10 features ready)
  - Updating the Roadmap
  - Identifying cross-team dependencies
  - Estimated team capacity for the next PI

## IP Sprint schedule (example over 2 weeks)

```
DAY 1-2: Stabilization
  → Fix blocking bugs
  → Regression testing
  → Documentation update

DAY 3-4: Hackathon / Innovation
  → Topic preparation (D3 morning)
  → Free development (D3 afternoon + D4)
  → Internal demo (D4 end of day)

DAY 5-7: Inspect & Adapt
  → Measure PI Objectives (D5)
  → Problem-Solving Workshop (D5-D6)
  → Documented improvement actions (D6)

DAY 8-9: PI Planning preparation
  → Program Backlog refinement (D8)
  → Team capacity computed (D8)
  → Pre-PI Planning (PM + Architects) (D9)

DAY 10: IP Sprint close
  → Final System Demo (if not done in Iteration 4)
  → IP Sprint retrospective
  → Last backlog adjustments
```

## PI Objectives — IP Sprint review

### PI summary template
```
PI [Number] — Review — [Date]

BUSINESS OBJECTIVES
  [OBJ-1] [Description]     → Met ✅ / Partial ⚠️ / Not met ❌
  [OBJ-2] [Description]     → [status]
  [OBJ-3] [Description]     → [status]

ACTUAL VELOCITY
  Iteration 1: [N] SP
  Iteration 2: [N] SP
  Iteration 3: [N] SP
  Iteration 4: [N] SP
  IP Sprint  : [N] SP (stabilization)
  PI TOTAL   : [N] SP / [N] planned ([%])

DELIVERED FEATURES
  [FEAT-001] [Title]         ✅ Delivered
  [FEAT-002] [Title]         ⚠️ Partial (80%)
  [FEAT-003] [Title]         ❌ Deferred → PI+1

PREDICTABILITY MEASURE
  Planned PI Objectives: [N]
  Achieved             : [N]
  Predictability       : [N/N × 100] %
  (SAFe target: > 80%)
```

## IP Sprint metrics

| Metric | Target | Measure |
|---|---|---|
| PI Predictability | > 80% | Objectives met / planned |
| Critical bugs resolved | 100% | Number of P1 bugs → 0 |
| Hackathon participation | > 80% of the team | % of participating members |
| Program Backlog ready | Top 10 features DoR | Number of ready features |
