# Skill — Product Vision and Strategy at the Program Level
> Certifications: SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), PSPO I (Scrum.org)

## Objective
Define and communicate the product vision at the SAFe Program level — Product Vision Statement, Solution Vision, alignment with the Value Streams and the OKRs — to guide the ART over a 12-24 month horizon.

## Product Vision Statement — SAFe template

```
VISION STATEMENT FORMAT (Geoffrey Moore — Crossing the Chasm)

For [TARGET CUSTOMER]
Who [NEED OR OPPORTUNITY]
The [PRODUCT / SOLUTION NAME]
Is a [PRODUCT CATEGORY]
That [KEY BENEFIT / REASON TO BUY]
Unlike [COMPETING ALTERNATIVE]
Our product [MAIN DIFFERENTIATION]

EXAMPLE:
For HR teams at large groups
Who lose 60% of their time on repetitive administrative tasks
The HR AI Solution
Is an HR automation platform powered by generative AI
That cuts candidate-file processing time by 40%
Unlike traditional non-intelligent HRIS
Our product natively integrates LLMs to augment (not replace) HR
```

## Lean UX Canvas — Program Level

```yaml
lean_ux_canvas:
  business_problem: |
    HR teams spend 60% of their time on repetitive tasks
    (CV screening, drafting job ads, interview write-ups).
    This reduces the time available for high-value activities.

  users: |
    Primary: HR officers (45 people) — operational tasks
    Secondary: HR managers (12) — validation, steering

  hypotheses:
    - "If we automate CV screening, HR officers will save 2h/week"
    - "If we generate write-ups with AI, quality will improve"

  expected_outcomes:
    - "40% reduction in repetitive-task time"
    - "HR employee CSAT > 4/5"

  risky_assumptions:
    - "HR will agree to trust AI for pre-scoring"
    - "The CNIL will approve AI use in recruitment"
```

## Product OKRs — Program Level

```yaml
program_okrs:
  objective: "Become the leader in AI-augmented HR teams by end of 2026"

  key_results:
    - kr: "KR1"
      description: "Cut candidate-file processing time by 40%"
      measure: "Average-time tracking in the HRIS"
      baseline: "45 min/file"
      target: "27 min/file"

    - kr: "KR2"
      description: "Reach 85% weekly usage of the AI features"
      measure: "Product analytics"
      baseline: "0%"
      target: "85%"

    - kr: "KR3"
      description: "Product NPS > 45 among HR users"
      measure: "Quarterly in-app survey"
      baseline: "Current NPS: 12"
      target: "NPS > 45"
```

## Deliverables
- Product Vision Statement (Moore format)
- Program-level Lean UX Canvas
- Product OKRs over 2 horizons (6 months / 12 months)
- Product Roadmap (features, milestones, releases)

## Output format
Specify: product domain, target customers, competitive context, strategic constraints, time horizon.
