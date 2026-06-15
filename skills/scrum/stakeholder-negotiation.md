# Skill — Advanced stakeholder negotiation and engagement

> Certification: PSPO II · PSPO III · ICAgile ICP-APO
> Agent: AGENT-PO-SCRUM.md

## Objective
Handle complex stakeholder situations: priority conflicts, scope pressure, contradictory requests, resistance to change.

## PO negotiation techniques

### 1. Trade-off Sliders (explicit compromises)
Visually present the decision sliders:
```
SCOPE    [─────────────────────●─] Flexible
TIME     [●─────────────────────] Fixed
QUALITY  [─────────────●────────] Important
COST     [─────────────────●────] Controlled
```
Force the stakeholder to choose what is negotiable.

### 2. "Yes, and..." instead of "No"
```
❌ "No, that's not possible in Sprint 3."

✅ "Yes, we can deliver that, and to do it:
    Option A: we remove [feature X] from sprint 3
    Option B: we reduce the scope to [minimum version]
    Option C: we plan it in Sprint 4
    Which do you prefer?"
```

### 3. Stakeholder Matrix — Management by quadrant

| | Low influence | High influence |
|---|---|---|
| **Low interest** | Inform (newsletter) | Satisfy without overloading |
| **High interest** | Consult regularly | Manage actively (core stakeholders) |

### 4. Anchoring technique
For deadline or scope negotiations:
- Start from a high range (reduced scope, longer timeline)
- Let the stakeholder "negotiate" downward
- Result: they take ownership of the decision

### 5. Handling out-of-sprint requests (scope creep)
```
3-step process:
1. Acknowledge: "Noted, this is important."
2. Assess: "That's about [X SP]. To add it now, what do we drop?"
3. Decide together: the stakeholder chooses the trade-off — the PO documents it
```

## Common conflict situations

### Conflict between two same-level stakeholders
1. Don't arbitrate alone — set up a three-way meeting
2. Use the OKRs / business objectives as the objective arbiter
3. Propose a data-driven decision (prototype, A/B test)
4. Escalate to the Product Manager / Sponsor if the deadlock persists

### Non-negotiable deadline pressure
```
"Flexible Scope" framework:
1. Confirm the date as a fixed constraint
2. List the features Must Have / Should Have / Could Have
3. Deliver Must Have first, negotiate the rest
4. Document the Could Have for the next sprint
```

### A stakeholder who bypasses the team
- Restate the process: "All requests go through the backlog."
- Offer a dedicated channel (Slack, monthly meeting)
- Involve the Scrum Master if the behavior persists

## Communication templates

### Gracious rejection email
```
Subject: [Request X] — Analysis and proposal

Hi [First name],

I've fully taken your request about [topic] into account.
After analysis, adding it in Sprint [N] would impact [feature Y].

Here are 3 options:
• Option 1: [description] — impact [time/scope]
• Option 2: [description] — impact [time/scope]
• Option 3: Planned in Sprint [N+1] — no impact

Could you confirm your preference before [date]?

Best regards,
[Signature]
```
