# Skill — AI Certification Track Design

> Certifications: CPTD · CPTM · CAP IABAC · Anthropic Claude Code in Action (2026) · DeepLearning.AI AI For Everyone · SAFe6 Agilist

## Objective

Design, structure, and roll out an AI certification track for teams or individuals: select the certification that fits the profile, build the preparation plan, training resources, assessment milestones, and support all the way to the exam.

## 2026 AI certification catalog

### Anthropic certifications

```
CERTIFICATION                  LEVEL     PREP TIME     TARGET
─────────────────────────────  ────────  ────────────  ─────────────────────────
Claude 101                     Beginner  2-4h          All Claude users
Claude Code 101                Interm.   4-8h          Developers, PO
Claude Code in Action          Expert    20-40h        AI architects, senior dev
```

### General-purpose AI certifications

```
CERTIFICATION                  LEVEL     PREP TIME     TARGET
─────────────────────────────  ────────  ────────────  ─────────────────────────
CAP IABAC                      Interm.   20-30h        Consultants, PM, PO
AI Fundamentals (Google)       Beginner  4-8h          All roles
AI Essentials (Google)         Beginner  2-4h          All roles
AI For Everyone (DeepLearning) Beginner  6h MOOC       Non-technical
AWS AI Practitioner (AIF-C01)  Interm.   30-40h        IT / Architects
Azure AI-102                   Expert    40-60h        Azure AI architects
```

### Specialized AI certifications

```
CERTIFICATION                  LEVEL     PREP TIME     TARGET
─────────────────────────────  ────────  ────────────  ─────────────────────────
ISTQB® AI Testing              Interm.   20-30h        QA / Testers
SAFe AI / SAFe POPM            Expert    20-40h        PO / PM SAFe
CDMP (Data Management)         Expert    60-80h        Data Scientists
MLOps (DataTalks)              Interm.   40-60h        MLOps Engineers
Prompt Engineering (Anthropic) Interm.   10-20h        PO, consultants, dev
```

## Track design process

### STEP 1 — Needs analysis and certification selection

```yaml
analysis:
  key_questions:
    - "What is the professional goal? (promotion, upskilling, client credibility)"
    - "What is the current AI level? (self-assessment 1-5)"
    - "How much time is available per week? (hours/week)"
    - "What is the desired deadline?"
    - "Is there a training budget? (paid or free certification)"

  selection_matrix:
    non_technical_limited_time: "Claude 101 → AI Essentials Google → CAP IABAC"
    po_pm_agile: "Claude Code 101 → CAP IABAC → SAFe POPM"
    dev_cloud: "Claude Code in Action → AWS AIF-C01 → Azure AI-102"
    qa_tester: "ISTQB AI Testing → Claude Code 101"
    data_scientist: "CDMP → AWS MLS-C01 → MLOps DataTalks"
    ai_consultant: "CAP IABAC → Claude Code in Action → Anthropic Prompt Eng."
```

### STEP 2 — Personalized preparation plan

```
8-WEEK PLAN TEMPLATE (CAP IABAC — example)
────────────────────────────────────────────────────────────────
W1: AI fundamentals (ML, DL, GenAI) — 4h/wk → DeepLearning.AI resources
W2: LLMs and prompt engineering — 4h/wk → Anthropic docs + exercises
W3: Business use cases and AI ROI — 4h/wk → articles + hands-on practice
W4: Governance, ethics, AI Act — 3h/wk → IABAC study guide
W5: MLOps and deployment (basics) — 4h/wk → DataTalks course
W6: General review + practice MCQs — 5h/wk → question bank
W7: Mock exam × 2 + review — 6h/wk → exam simulation
W8: Targeted review of gaps + exam — based on W7 results
────────────────────────────────────────────────────────────────
```

### STEP 3 — Learning resources by certification

```
RESOURCE TYPE          RECOMMENDED SOURCES 2026
─────────────────────  ──────────────────────────────────────────────────────
Online courses         DeepLearning.AI, Coursera, Udemy, LinkedIn Learning
Official docs          docs.anthropic.com, cloud.google.com/ai, learn.microsoft.com
Reference books        "Designing Machine Learning Systems" (Chip Huyen)
                       "Building LLMs for Production" (Packt)
Communities            Anthropic Discord, Hugging Face forums, Reddit r/MachineLearning
Question banks         ExamTopics, Whizlabs, YouTube certification tutorials
Hands-on practice      Claude.ai, Google AI Studio, AWS SageMaker Studio Lab (free)
```

### STEP 4 — Milestones and assessment

```yaml
milestones:
  - week: 2
    assessment: "Mid-track quiz (20-question MCQ) — target > 70%"
    action_if_fail: "Reinforce fundamentals, targeted reading list"

  - week: 5
    assessment: "Partial mock exam (50% of the scope) — target > 75%"
    action_if_fail: "2h one-on-one tutoring, rephrase weak concepts"

  - week: 7
    assessment: "Full mock exam (2h, real conditions) — target > 80%"
    action_if_fail: "Push exam back 2 weeks + targeted catch-up plan"

  - week_8_plus:
    action: "Sit the official exam"
    post_followup: "Result debrief, LinkedIn badge sharing, next upskilling plan"
```

## Team-scale rollout

### Group certification plan (example: team of 10 AI PO/PM)

```
PHASE 1 — DIAGNOSTIC (week 1)
→ AI self-assessment level 1-5 per person
→ 30-min interview / person: goals, availability, constraints
→ Readout: profiles × recommended certifications matrix

PHASE 2 — GROUP PREPARATION (weeks 2-6)
→ Weekly 1h30 group sessions (in-person or video)
→ Business case studies specific to the company
→ Pair learning: each advanced learner buddies a beginner
→ Dedicated Slack or Teams: resource sharing, questions, encouragement

PHASE 3 — EXAM AND CELEBRATION (weeks 7-8)
→ Group mock exam D-14
→ Sit the exam under real conditions (2-week window)
→ Celebrate the certifications earned (steering committee, internal news)
→ Next upskilling plan

TRACKING METRICS
→ Certification rate (target > 80% of the team)
→ Average exam score
→ Training NPS (satisfaction)
→ Application 30 days later (manager feedback)
```

## Deliverables

- Personalized preparation plan (2-4 page PDF) per learner
- Training calendar with milestones (Gantt or Notion format)
- Resource library sorted by certification
- Bank of 50+ practice questions per certification
- Group tracking dashboard (Notion, Confluence, or Google Sheets)
- HR communication kit: announcement email, LinkedIn badge, resume template

## Output format

Specify: **target certification(s)**, **learner profile(s)**, **desired timeline**, **available budget** (paid certification or not), **mode** (individual / group), **expected support** (plan only / coaching / facilitation).

## Sources
- **ATD** — *Talent Development Body of Knowledge (TDBoK)* — engineering of certification programs
- **Donald Kirkpatrick** — *Evaluating Training Programs* (1994) — aligning objectives ↔ assessment
- **Anthropic** — Claude certification tracks (Claude 101, Claude Code 101, Claude Code in Action) — [anthropic.skilljar.com](https://anthropic.skilljar.com/)
- Official frameworks of the cited certifications: AWS *AI Practitioner* (AIF-C01), Microsoft *AI-102*, *CAP IABAC*, *ISTQB AI Testing*, *SAFe*

## Anti-patterns
- Picking the "trendy" certification without a profile × professional-goal matrix
- Preparation plan with no mock exam and no intermediate assessment milestones
- Promising a pass rate without diagnosing the starting level
- Certifying for the badge with no operational transfer (Kirkpatrick L3)
- Question bank not aligned with the exam's official framework

## See also
- [prompt-engineering-formation.md](prompt-engineering-formation.md) — build the prompting skill
- [formation-claude-code.md](formation-claude-code.md) — prepare for the Claude Code certifications
- [formation-agents-ia.md](formation-agents-ia.md) — build agent skills
- [evaluation-formation.md](evaluation-formation.md) — measure transfer and ROI of the certification track
