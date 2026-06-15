# Skill — Agile Workshop Facilitation (Scrum Master)
> Certifications: ICAgile ICP-ATF · A-CSM (Advanced CSM) · PSM II · Liberating Structures Practitioner

## Objective
Design and facilitate collaborative workshops (Planning, Refinement, Design Sprint, Kaizen) to maximize participation and decision quality.

## The facilitator's role

### The SM facilitator ≠ presenter
```
PRESENTER            FACILITATOR
Follows an agenda     ← Adapts in real time
Talks a lot           ← Listens and questions
Gives answers         ← Helps the group find its own answers
Manages content       ← Manages the process
Gets involved         ← Stays neutral
```

## Key Scrum workshops

### Sprint Planning — Effective facilitation
```
PART 1 — WHAT (2h max)
  1. PO presents the backlog items (capacity × velocity)
  2. The team asks clarifying questions
  3. Confirmation vote: "Can we commit to this scope?"
  SM: Check that the Sprint Goal is defined

PART 2 — HOW (2h max)
  4. Team breaks US into tasks (< 8h each)
  5. Dependency identification (red thread or Jira)
  6. Real-capacity check (time off, training)
  SM: Timebox, avoid endless technical debates
```

### Sprint Refinement — 3-part structure
```
PART 1 — Clarification (30 min)
  → PO presents the priority US
  → Acceptance questions: "When is it done?"
  → Verifiable, testable acceptance criteria

PART 2 — Estimation (30 min)
  → Planning Poker (Fibonacci: 1, 2, 3, 5, 8, 13, 21, ?)
  → Discussion on estimation differences
  → Threshold: US estimated > 13 = to split

PART 3 — Slicing (20 min)
  → Split US that are too big (> 8 SP)
  → Techniques: SPIDR, Slice by Workflow Step, Data Variation
  → Result: backlog "ready" for the next 2 sprints
```

### Planning Poker — Facilitation
```python
# Planning Poker rules
rules = {
    "cards": [0, 1, 2, 3, 5, 8, 13, 21, 40, 100, "?", "∞"],
    "process": [
        "1. PO reads the US without giving an estimate",
        "2. Each dev secretly picks their card",
        "3. Simultaneous reveal",
        "4. If consensus (or gap ≤ 1) → store the estimate",
        "5. If divergence → discuss max 3 min between extremes",
        "6. Re-vote once"
    ],
    "? = ": "I don't understand the story",
    "∞ = ": "This US is too big, it needs splitting",
    "timeout": "2 rounds max, otherwise default estimate"
}
```

## Advanced facilitation techniques

### 1-2-4-All (Liberating Structures)
```
Goal: Generate ideas without dominant voices crushing the others
  1 min  → Individual reflection (silence)
  2 min  → Discussion in pairs
  4 min  → Discussion in groups of 4
  All    → Share in plenary (1 strong idea per group)

Use: Generate solutions, identify problems, prioritize
```

### DACI (Decision Making)
```
D — Driver      : who drives the decision (1 person)
A — Approver    : who has veto rights (1-2 people)
C — Contributor : who contributes expertise
I — Informed    : who must be informed of the decision

Use: Controversial Sprint Planning, process change, technical arbitration
```

### Fishbowl (complex debates)
```
Setup: 4 chairs in the center (active participants) + outer circle (observers)
  → Only those in the Fishbowl speak
  → When a chair frees up, an observer can join
  → The SM facilitates from outside

Use: Persistent conflicts, hard decisions, sensitive topics
```

## Handling difficult situations

### The expert who monopolizes the floor
```
Technique: "Thanks [name], I'd like to hear other perspectives.
            Does anyone have a different view?"
Or: Forced Round Robin — each person speaks 1 min in order
```

### The group going in circles
```
Technique: "We've been discussing for X min. We have 2 options:
            A) We vote now
            B) We timebox 5 min to find consensus
            What do you prefer?"
```

### Open conflict between two people
```
1. Take a break (5 min)
2. Restate the Prime Directive and the collaboration rules
3. Reframe each position without judgment
4. Look for common ground ("What do we BOTH want?")
5. If persistent: postpone and handle in individual coaching
```

## Recommended digital tools
| Tool | Use | Strengths |
|---|---|---|
| **Miro** | Retrospectives, Story Mapping | Rich templates, real time |
| **Mural** | Design Thinking, Workshops | Advanced facilitation |
| **FigJam** | Brainstorming, Refinement | Figma integration |
| **Mentimeter** | Anonymous votes, Safety Check | Interactive, mobile |
| **PlanningPoker.com** | Remote estimation | Free, simple |

## Deliverables
- Workshop agenda with timeboxes
- Visual support (Miro / physical board)
- Notes of the decisions made
- Actions and owners identified
- Facilitation feedback (ROTI 1-5)

## Output format
Specify: workshop type · number of participants · time available · remote or on-site · facilitation tool · specific problem or goal
