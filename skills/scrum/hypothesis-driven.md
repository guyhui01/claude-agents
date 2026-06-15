# Skill — Hypothesis-Driven Development

> Certification: PSPO II · ICAgile ICP-APO
> Agent: AGENT-PO-SCRUM.md

## Objective
Turn uncertain features into testable hypotheses to make product decisions based on evidence, not opinions.

## Structure of a product hypothesis

### Standard format
```
We believe that [action / feature]
For [user segment]
Will achieve [business or user outcome]
We will measure success by [primary metric]
With a positive signal if [validation threshold]
```

### Concrete example
```
We believe that adding an order summary by email
For B2B buyers who order > €500 excl. tax
Will reduce support calls related to ordering errors
We will measure success by the post-order support contact rate
With a positive signal if this rate drops by 20% in 4 weeks
```

## Hypothesis types

| Type | Key question | Risk |
|---|---|---|
| **Desirability** | Do users want this? | High |
| **Feasibility** | Can we build it? | Medium |
| **Viability** | Is it profitable for the business? | High |
| **Usability** | Can they use it without help? | Medium |

## Hypothesis backlog (Assumption Map)

### Prioritization matrix
```
                  HIGH CERTAINTY
                        ↑
 Test last          │  Confirm and ship
                    │
LOW ────────────────┼───────────── HIGH
IMPACT             │                IMPACT
                    │
 Ignore            │  Test first (MVP/MVE)
                        ↓
                  LOW CERTAINTY
```

## In-sprint process

1. **Identify** risky assumptions in a US
2. **Frame** the hypothesis with the template above
3. **Design** the minimal experiment (MVP, A/B test, interview, prototype)
4. **Run** it within the sprint (timeboxed: max 1 sprint)
5. **Analyze** the data
6. **Decide**: Pivot / Persevere / Stop

## Hypothesis-driven User Story format
```
As a [persona],
I want [hypothesis feature],
So that [expected outcome]

Hypothesis: We believe that...
Success signal: [metric + threshold]
Acceptance criteria: [delivery conditions]
Abandon criterion: [threshold below which we pivot]
```

## Common validation metrics
- Conversion rate (before/after)
- Adoption rate (% active users)
- NPS / CSAT (satisfaction)
- Time-to-value (time to reach value)
- Error rate / support tickets
