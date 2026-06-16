# Skill — AI Training Evaluation

> Certifications: Kirkpatrick Certified Evaluator 2026, ATD CPTD (Talent Development), Qualiopi Evaluation, Data Analytics for L&D (LinkedIn Learning Certificate)

## Objective

Design and roll out a complete evaluation scheme for Data-AI training, covering the 4 levels of the Kirkpatrick model, assessment design, and training ROI calculation.

## Kirkpatrick model — the 4 levels

### Overview and methods

| Level | Name | Key question | Methods | Timing |
|--------|-----|-------------|---------|--------|
| **L1 — Reaction** | Satisfaction | "Did they enjoy the training?" | Hot survey, NPS | End of session |
| **L2 — Learning** | Knowledge | "Did they learn?" | Quiz, simulation, skills assessment | During + end |
| **L3 — Behavior** | Transfer | "Are they applying it?" | Observations, 360°, manager feedback | D+30, D+60 |
| **L4 — Results** | Impact | "What value was generated?" | Business KPIs, ROI | M+3 months, M+6 months |

### Targeted-levels principle

```
Kirkpatrick's 80-20 rule:
  80% of trainings → evaluate L1 + L2
  15% of trainings → evaluate L1 + L2 + L3
   5% of trainings → evaluate L1 + L2 + L3 + L4

Recommendation for strategic AI trainings:
→ "Prompt Engineering for managers" program → L1+L2+L3
→ Data-driven transformation, exec committee → L1+L2+L3+L4
→ General AI awareness → L1+L2 is enough
```

## Level 1 — Reaction evaluation

### Satisfaction questionnaire (NPS + Likert format)

```
TRAINING EVALUATION — Complete before you leave
Training: ______________________ Date: ___________

1. On a scale of 0 to 10, how likely are you
   to recommend this training to a colleague?
   [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] [ 8 ] [ 9 ] [ 10 ]

2. Rate the following (1=Poor, 5=Excellent):
   Training content               : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Quality of hands-on exercises  : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Trainer's competence           : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Applicability to my work       : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Pace and organization          : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

3. What was the most useful thing you learned?
   ___________________________________________________

4. What was missing / could be improved?
   ___________________________________________________

5. First action you'll put into practice tomorrow:
   ___________________________________________________
```

**Training NPS interpretation:**
- Score ≥ 50: Excellent
- 30-50: Good
- 10-29: Needs improvement
- < 10: Rethink the program

## Level 2 — Learning evaluation

### Assessment design by AI skill type

| Skill | Assessment type | Example criteria |
|-----------|------------------|---------------------|
| Conceptual knowledge | MCQ, true/false | > 70% correct answers |
| Prompt writing | Scoring rubric | Full RTCT structure, clarity, result |
| AI response analysis | Case study | Identifying hallucinations, bias |
| AI ethics and risks | Scenario judgment | Justified ethical decision |
| Building an AI agent | Practical project | Working agent + documentation |

### Prompt scoring rubric (Bloom L3-L4)

```
SCORING RUBRIC — PROMPT ENGINEERING MODULE

Criterion 1: Clarity of the requested task         /5
Criterion 2: Context provided (role, situation)    /5
Criterion 3: Explicit constraints (format, length) /5
Criterion 4: Relevance of the result obtained      /5
Criterion 5: Ability to iterate / improve          /5
TOTAL                                              /25

Passing threshold: 17/25 (68%)
Personalized feedback provided within 48h
```

## Level 3 — Behavioral transfer evaluation

### Follow-up plan at D+30 / D+60

```yaml
L3_Evaluation_Prompt_Engineering:

  D+14_check_in:
    method: "Automated follow-up email (3 questions)"
    questions:
      - "Have you used the techniques from the training? (Y/N)"
      - "How many times this week?"
      - "Main barrier to applying them?"
    owner: "Trainer + HR"

  D+30_manager_feedback:
    method: "Manager questionnaire (5 min)"
    questions:
      - "Have you observed a behavior change?"
      - "Is your team member using AI tools?"
      - "A concrete example observed?"
    owner: "Line manager (N+1)"

  D+60_observation:
    method: "Review of the prompt library created"
    criteria: ["# prompts created", "Quality", "Team reuse"]
    owner: "Trainer + manager"

Target_transfer_rate: 60% of learners applying at D+30
```

## Level 4 — Training ROI

### ROI calculation formula (Phillips)

```
ROI (%) = [(Net training benefit) / (Total cost)] × 100

Example — Prompt Engineering training (50 manager participants):

TOTAL COSTS:
  Design & development                   : €25,000
  Facilitation (2 days × 5 sessions)     : €20,000
  LMS + tool licenses                    :  €5,000
  Learner time (2 days × 50 × €450)      : €45,000
  TOTAL COSTS                            : €95,000

ESTIMATED ANNUAL BENEFITS (productivity projected over 45 weeks):
  Productivity gain (1h/week × 50 people × 45 wks × €55) : €123,750
  Reduced AI-content outsourcing                         :  €30,000
  Faster time-to-value on 3 AI projects                  :  €50,000
  TOTAL BENEFITS                                         : €203,750

ROI = [(203,750 - 95,000) / 95,000] × 100 = 114%

Interpretation: For €1 invested, €2.14 of value generated over 12 months
Payback: ≈ 5.6 months (€95,000 ÷ €203,750 annual benefits × 12)
```

## L&D dashboard for AI trainings

| KPI | Calculation | Target | Frequency |
|-----|--------|-------|-----------|
| Training NPS | Promoters - Detractors | > 40 | Per session |
| Average quiz score | Avg. of assessment results | > 75% | Per session |
| Completion rate | % of modules completed | > 85% | Weekly |
| L3 transfer rate | % applying at D+30 | > 60% | Per cohort |
| Training ROI | Net benefit / Cost | > 100% | Half-yearly |
| Time-to-competency | Time to acquire skill | Benchmark | Per track |

## Deliverables

- Complete Kirkpatrick evaluation plan (L1 to L4)
- Satisfaction questionnaire (L1) + analysis guide
- Learning assessments (L2) with scoring rubrics
- Behavioral follow-up plan (L3) with templates
- Training ROI report (L4) with calculation model
- Monthly L&D dashboard (Power BI / Google Data Studio)

## Output format

Specify: **training name and topic**, **audience** (profile, number of learners), **Kirkpatrick levels to evaluate** (L1 to L4), **business KPIs** available for L4, **collection tools** (SurveyMonkey / Typeform / native LMS), **follow-up window** after training, **HR or manager sponsor** involved in L3.

## Sources
- **Donald Kirkpatrick** — *Evaluating Training Programs* (articles 1959; book 1994); *New World Kirkpatrick Model* (Jim & Wendy Kirkpatrick, 2016)
- **Jack J. Phillips** — *Return on Investment in Training and Performance Improvement Programs* (1997) — level 5 ROI + effect-isolation principle
- **Fred Reichheld** — *The One Number You Need to Grow* (HBR, 2003) — Net Promoter Score
- **Robert Brinkerhoff** — *The Success Case Method* (2003) — transfer evaluation

## Anti-patterns
- Stopping at L1 ("smiley sheets") and concluding effectiveness
- Claiming a ROI without isolating the training effect from other factors (Phillips)
- Confusing annualized benefits with short-term observed benefits (cf. payback calculation)
- Presenting NPS as a learning measure (it's satisfaction, L1)
- Setting targets (> 75%, > 85%) with no measured baseline

## See also
- [analyse-besoins-formation.md](analyse-besoins-formation.md) — L3/L4 objectives defined upfront
- [conception-parcours.md](conception-parcours.md) — assessable Bloom objectives
- [data-literacy.md](data-literacy.md) — upskilling KPIs
- [`../business_analyst/reporting-moa.md`](../business_analyst/reporting-moa.md) — impact reporting on the business-analysis side
