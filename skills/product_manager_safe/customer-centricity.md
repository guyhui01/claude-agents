# Skill — Customer Centricity and SAFe Design Thinking
> Certifications: SAFe POPM 6 (Scaled Agile), PMI-PBA (PMI), PSPO I (Scrum.org)

## Objective
Apply customer-centricity practices at the SAFe Program level — Jobs-To-Be-Done, personas, empathy mapping, Continuous Exploration — to ensure the delivered Features meet real user needs.

## Jobs-To-Be-Done (JTBD) — Framework

```
JTBD FORMAT
────────────────────────────────────────────────────────────
When [SITUATION / CONTEXT]
I want to [MOTIVATION / GOAL]
So that [EXPECTED OUTCOME / BENEFIT]

EXAMPLE:
When I receive 200 applications for a role
I want to quickly identify the top 10 profiles
So that I don't waste time on irrelevant files
```

## Program persona — Template

```yaml
persona:
  name: "Claire, Senior HR Officer"
  age: 38
  company: "Large group — 5000 employees"

  role: "Manages 15 simultaneous hires"

  goals:
    - "Find the best candidates as fast as possible"
    - "Reduce admin time to focus on human contact"
    - "Justify her hiring decisions to leadership"

  frustrations:
    - "Drowning in CVs (200+ per role)"
    - "HR tools too rigid, no AI"
    - "Lack of data to back up her recommendations"

  tool_behaviors:
    - "LinkedIn Recruiter daily"
    - "HRIS (SAP HCM) — constrained usage"
    - "Excel for her own dashboards"

  expected_gains:
    - "Save 2h/day on admin screening"
    - "Clear dashboard to report to leadership"
    - "Trust in the AI's suggestions"
```

## Empathy Map — Template

```
                    THINK & FEEL
                    "Did I make the right choices?"
                    "Will AI replace me?"
                              │
          ┌──────────────────┼──────────────────┐
  HEARS   │                  │                  │  SEES
  "AI     │                  │                  │  Piles of
  replaces│      CLAIRE      │                  │  unread CVs
  HR"     │      (Persona)   │                  │  Overwhelmed
          │                  │                  │  colleagues
          └──────────────────┼──────────────────┘
                              │
                    SAYS & DOES
                    Screens CVs manually
                    Copy-pastes into Excel
                    Complains the HRIS is too rigid
```

## SAFe Continuous Exploration

```
CONTINUOUS EXPLORATION (CE) CYCLE
────────────────────────────────────────────────────────────
HYPOTHESIS → EXPERIMENT → DATA → LEARNING → PIVOT/PERSEVERE

EXAMPLE EXPERIMENT:
Hypothesis: "HR trusts the AI score if an explanation is provided"
Experiment: 2-sprint pilot on 10 users
  → Version A: AI score alone
  → Version B: AI score + top 3 reasons
Measure: Acceptance rate of the AI suggestions
Result: B → 78% acceptance vs A → 34%
Learning: Explainability is non-negotiable
Action: "Score explanation" Feature → Must Have
```

## Deliverables
- Documented JTBD for the main populations
- Program personas (2-3 personas)
- Visual Empathy Map
- Continuous Exploration experiment backlog

## Output format
Specify: target populations, product domain, available user data (interviews, analytics, support).
