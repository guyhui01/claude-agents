# Skill — Training Needs Analysis (TNA)

> Certifications: ATD CPTD (Certified Professional in Talent Development) 2026, Qualiopi French Training Quality Framework, CNAM Training Engineering, HEC Executive Education Design

## Objective

Run a rigorous Training Needs Analysis (TNA) to identify AI skill gaps, design learner personas, and prioritize Data-AI training actions.

## TNA method — 5 steps

### Process overview

```
Step 1           Step 2           Step 3           Step 4           Step 5
Strategic   →    Data        →    Gap         →    Learner     →    Training
context          collection       analysis         personas         plan
(1 week)         (2 weeks)        (1 week)         (1 week)         (1 week)
```

### Step 1 — Strategic alignment

```yaml
Questions_to_ask_sponsors:
  - "What business objectives are tied to the AI training?"
  - "Which decisions or behaviors need to change?"
  - "What is the target population (count, roles, levels)?"
  - "What is the budget and the time horizon?"
  - "How will success be measured (Kirkpatrick L3-L4)?"

Information_sources:
  - Company Data-AI strategy
  - Existing workforce planning (GPEC / GEPP)
  - Steering-committee interviews (30 min × 3-5 decision-makers)
  - Prior-year performance-review results
```

### Step 2 — Data collection

#### Survey methods

| Method | Audience | Count | Duration | Deliverable |
|---------|--------|-----|-------|---------|
| Semi-structured interviews | Managers + experts | 10-15 | 45 min | Coded verbatims |
| Online questionnaire | Employees | 50-500 | 15 min | Quantitative data |
| Focus groups | Representative teams | 3-5 groups × 8 | 90 min | Qualitative insights |
| Field observation | Key users | 5-10 | 2h | Real behaviors |
| Document review | HR + managers | — | — | Workforce plans, job descriptions |

#### AI TNA questionnaire template (excerpt)

```
QUESTIONNAIRE — AI TRAINING NEEDS 2026
(Likert 1-5 format + open-ended questions)

SECTION A — Self-assessment of current AI skills
Q1. I can explain what a language model (LLM) is to a colleague.
    [ ] 1-Not at all  [ ] 2  [ ] 3  [ ] 4  [ ] 5-Completely

Q2. I use generative AI tools (ChatGPT, Claude, Copilot) in my work.
    [ ] Never  [ ] Rarely  [ ] Sometimes  [ ] Often  [ ] Daily

Q3. I am able to assess the reliability of an AI-generated answer.
    [ ] 1-Not at all  [ ] 2  [ ] 3  [ ] 4  [ ] 5-Completely

SECTION B — Perceived needs
Q4. For which work tasks would you like AI training?
    (free text — 3 answers max)

Q5. Which training format suits you best?
    [ ] In-person (full day)  [ ] E-learning (30 min/module)
    [ ] Blended  [ ] One-on-one coaching  [ ] Hands-on workshops

SECTION C — Barriers and success factors
Q6. What is your main barrier to AI adoption? (1 answer)
    [ ] Lack of time  [ ] Fear of making mistakes  [ ] No clear use case
    [ ] Ethical concerns  [ ] Insufficient technical skills
```

### Step 3 — Gap analysis

#### Gap-analysis model by AI skill family

| Domain | Required level (target) | Current level (median) | Gap | Priority |
|---------|----------------------|------------------------|-------|---------|
| Understanding AI (fundamentals) | 3/5 | 1.8/5 | -1.2 | HIGH |
| Prompt Engineering | 3/5 | 1.2/5 | -1.8 | CRITICAL |
| AI ethics & bias | 3/5 | 1.5/5 | -1.5 | HIGH |
| Data analysis (Excel/BI) | 4/5 | 2.8/5 | -1.2 | MEDIUM |
| Data project management | 3/5 | 2.2/5 | -0.8 | LOW |

### Step 4 — Learner personas

```yaml
Persona_1:
  name: "Marie, Marketing Director, 45"
  context: "Leads a team of 8, €5M/year budget"
  AI_level: "Curious but beginner — uses ChatGPT personally"
  needs: ["Concrete AI marketing use cases", "Fast ROI", "Delegating to the team"]
  barriers: ["Not enough time", "Fear of hallucination"]
  ideal_format: "Half-day in-person + practical toolkit"
  success_KPI: "Launch 2 AI initiatives in her team within 3 months"

Persona_2:
  name: "Thomas, Data Analyst, 28"
  context: "Excel/SQL expert, exploring Python for 6 months"
  AI_level: "Intermediate — uses GitHub Copilot + ChatGPT API"
  needs: ["MLOps foundations", "Advanced prompt engineering", "LangChain"]
  barriers: ["Impostor syndrome toward Data Scientists"]
  ideal_format: "4-week e-learning track + capstone project"
  success_KPI: "Deploy a RAG pipeline independently"

Persona_3:
  name: "Rémi, CFO, 52"
  context: "Decision-maker, not very technical, skeptical but curious"
  AI_level: "Beginner — does not use AI at work"
  needs: ["AI vocabulary to talk with IT", "ROI and risks"]
  barriers: ["Lack of trust in AI data"]
  ideal_format: "3h executive briefing + tailored memo"
  success_KPI: "Approve the AI budget at the next steering committee"
```

### Step 5 — Prioritized training plan

| Training | Audience | Urgency | Format | Duration | Estimated budget |
|-----------|--------|---------|--------|-------|---------------|
| AI for everyone (awareness) | All employees | CRITICAL | E-learning | 3h | €30k |
| Hands-on Prompt Engineering | Managers + business roles | HIGH | In-person | 1 day | €50k |
| Data Literacy level 1 | All teams | HIGH | Blended | 5h | €40k |
| AI for developers | Tech team | MEDIUM | Bootcamp | 3 days | €25k |
| AI Leadership | Steering committee + Directors | HIGH | Executive | 3h | €15k |

## Deliverables

- Full TNA report (context, method, results, recommendations)
- Context-tailored TNA questionnaire (Google Forms / Typeform)
- Skill-gap map (heat map by population)
- Learner persona sheets (3-5 detailed personas)
- Prioritized training plan with budget and schedule
- Sponsor readout deck (15 slides)

## Output format

Specify: **sector and organization size**, **target population** (count, roles, hierarchical levels), **business objectives** of the training, **constraints** (budget, deadline, in-person/remote), **AI tools currently used** in the organization, **TNA already run or to be initiated**.

## Sources
- **Allison Rossett** — *Training Needs Assessment* (Educational Technology Publications, 1987)
- **Roger Kaufman** — *Needs Assessment* / Organizational Elements Model — aligning need ↔ results
- **Donald Kirkpatrick & James Kirkpatrick** — *Evaluating Training Programs* (1994; New World Model, 2016) — L3/L4 levels targeted from the analysis stage
- **France compétences** — Qualiopi / National Quality Framework — needs-analysis requirement

## Anti-patterns
- Starting from the solution ("we need AI training") before measuring the real skill gap
- TNA based solely on the sponsor's statements, with no field data
- Made-up personas, not derived from interviews / surveys / observations
- Confusing a training need with an organizational or tooling problem
- No link between identified gaps and business objectives (L3/L4)

## See also
- [conception-parcours.md](conception-parcours.md) — design the learning path that addresses the gaps
- [evaluation-formation.md](evaluation-formation.md) — close the TNA loop with impact measurement
- [data-literacy.md](data-literacy.md) — data/AI use cases by level
- [`../business_analyst/elicitation-besoins.md`](../business_analyst/elicitation-besoins.md) — elicitation techniques on the business-analysis side
