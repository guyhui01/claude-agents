# Skill — PI Objectives — Writing and steering

> Certification: SAFe POPM 6 · SAFe Agilist
> Agent: AGENT-PO-SAFE.md

## Objective
Write high-quality PI Objectives that align teams on business outcomes and serve as a compass throughout the Program Increment.

## What is a PI Objective?

PI Objectives are the **ART's commitments** for the PI, expressed as business outcomes — not technical tasks.

```
❌ Bad PI Objective: "Develop the Stripe payment module"
✅ Good PI Objective: "Let B2B customers pay online
                       with real-time validation (error rate < 1%)"
```

## Types of PI Objectives

### 1. Business Objectives
Direct value for customers and the business.
```
Format: [Action verb] + [Capability/Feature] + [Measurable benefit]

Examples:
- "Deliver the filterable product catalog (3 criteria) with load time < 2s"
- "Integrate Stripe 3DS payment with 0 critical bug in production"
- "Reach 95% BDD coverage on the Must Have US"
```

### 2. Stretch Objectives
Ambitious, uncommitted objectives — "best effort".
```
- Marked [Stretch] in the PI Plan
- Delivered if velocity > forecast or scope reduced
- No penalty if not met
- Examples: performance improvements, UX experiments
```

## SMART criteria for PI Objectives

| Criterion | Question | Example |
|---|---|---|
| **S**pecific | What exactly do we deliver? | "Order history module" |
| **M**easurable | How do we know it's met? | "> 95% of orders visible" |
| **A**chievable | Is it realistic in 1 PI? | Validated at PI Planning |
| **R**elevant | Aligned with the OKRs / strategic themes? | Traced to Q3 OKR |
| **T**ime-bound | Fixed deadline = end of PI | Sprint N (date) |

## Writing process (PI Planning)

### Step 1 — Draft Team Objectives (Day 1 afternoon)
- Each team writes its team PI Objectives
- Format: 3-5 objectives per team
- Include the estimated confidence (1-10)

### Step 2 — ART PI Objectives (Day 2 morning)
- The PM/PO consolidates the team objectives into ART objectives
- Remove duplicates, group by theme
- Validate alignment with the Business Owners

### Step 3 — Business Value Review (Day 2 afternoon)
- The Business Owners score each PI Objective (1-10)
- Discussion and adjustment if misaligned
- Final score = value expected by the business

## PI Objectives template — ART format

```
PI [N] — [Quarter] — ART [Name]
Creation date: [PI Planning date]
═══════════════════════════════════════════════════════════

OBJECTIVE 1: [Short, actionable title]
Description: [1-2 sentences — what + why]
Criterion: [How to measure achievement]
Business Value (BOs): [score /10]
Team confidence: [score /10]
End-of-PI status: [Met ✅ / Partial ⚠️ / Not met ❌]

OBJECTIVE 2: [...]
[same]

STRETCH 1: [Title] [Stretch]
Description: [...]
Confidence: [4-6/10 max for a stretch]
Status: [Delivered ✅ / Not delivered (acceptable) ⬜]

─────────────────────────────────────────────────────────
TOTAL SCORE
Planned Business Value: [sum of BO scores]
Actual Business Value: [score at the end of the PI]
Predictability: [actual / planned × 100] %
```

## Steering PI Objectives during the PI

### Weekly PO Sync — PI Objectives tracking
```
| Objective | BV | Confidence D1 | Confidence D14 | Confidence D21 | Status |
|-----------|----|---------------|----|----|----|
| OBJ-1     | 8  | 8/10          | 7/10 | 6/10 | ⚠️ At risk |
| OBJ-2     | 9  | 9/10          | 9/10 | 9/10 | ✅ On track |
| OBJ-3     | 6  | 5/10          | 3/10 | 2/10 | 🔴 Escalate |
```

### Warning signs
- Confidence < 5/10 → immediate corrective action
- Confidence dropping for 2 consecutive weeks → escalate to the RTE
- Unresolved dependency → update the Program Board
