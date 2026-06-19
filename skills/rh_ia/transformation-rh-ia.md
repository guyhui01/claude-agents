# Skill — AI-Driven HR Transformation
> Certifications: ATD CPTD (ATD) · CIPD Level 5 (CIPD) · PROSCI Change Management

## Objective
Support HR teams in embedding AI into their processes: selecting and deploying AI-powered ATS, recruitment automation, automated CV screening, AI-assisted interviews — while addressing the ethical and regulatory stakes (GDPR, algorithmic bias).

## Map of HR processes automatable with AI

```
RECRUITMENT
──────────────────────────────────────────────────────
Job posting writing      → LLM (Claude Sonnet 4.6 or market equivalent) from a structured HR brief
Boolean sourcing         → LinkedIn Recruiter, Seek Out, Hireez
CV screening             → AI ATS: Greenhouse, Lever, SmartRecruiters
Initial qualification    → HR chatbot: MYA, Paradox (Olivia), Eightfold AI
Interview scheduling     → Calendly AI, GoodTime.io, Cronofy
Interview notes          → AI transcription: Fireflies, Otter.ai, Notion AI
Automated scorecard      → Structured via LLM after the interview
Digital onboarding       → Automated workflows: Workday, BambooHR, Rippling

TRAINING & DEVELOPMENT
──────────────────────────────────────────────────────
Skills-gap detection      → HRIS analysis + LLM
Learning-path suggestions → AI LMS: 360Learning, Cornerstone, Docebo AI
Training-content generation → Claude Opus 4.8 / Sonnet 4.6 (or market equivalent) + LMS
Post-training assessment   → Generative quiz + results analysis

PEOPLE ANALYTICS
──────────────────────────────────────────────────────
Turnover prediction       → ML models on HRIS data
Engagement analysis       → NLP on pulse surveys
Automated reporting       → Power BI + Copilot, Tableau AI
```

## AI ATS — Feature comparison

| ATS | Strengths | Best for | Indicative price |
|---|---|---|---|
| **Greenhouse** | Structured pipeline, rich integrations, scorecard | Scale-ups, tech SMBs | ~€6,000-15,000/yr |
| **Lever** | Candidate UX, recruitment CRM, nurturing | Fast growth | ~€5,000-12,000/yr |
| **SmartRecruiters** | HR app marketplace, volume | Large enterprises | ~€15,000-40,000/yr |
| **Workable** | Value for money, built-in AI sourcing | SMBs < 200 employees | ~€3,000-8,000/yr |
| **Eightfold AI** | Advanced AI matching, internal mobility | > 500 employees | Custom quote |
| **Paradox (Olivia)** | Recruitment chatbot, scheduling | Volume, retail, call center | Custom quote |
| **Recruitee** | Simple, collaborative, affordable | Startups | ~€2,000-5,000/yr |

> ⚠️ **Indicative prices, non-contractual orders of magnitude** (pricing is often custom-quoted,
> based on headcount/volume). Verify with each vendor at scoping time.

## AI-augmented recruitment workflow

```
AI RECRUITMENT WORKFLOW — 6 STEPS
──────────────────────────────────────────────────────
STEP 1 — BRIEF & JOB POSTING (generative AI)
  Input : Manager brief (role, stack, context)
  Tool  : Claude Sonnet 4.6 / Opus 4.8 (or market frontier equivalent) + structured template
  Output: Job posting written, reviewed, auto-published

STEP 2 — SOURCING (matching AI)
  Input : Job posting + ATS criteria
  Tool  : LinkedIn Recruiter AI, Eightfold, Seek Out
  Output: Longlist of 15-20 qualified profiles

STEP 3 — SCREENING (AI ATS)
  Input : CVs + cover letter
  Tool  : SmartRecruiters / Greenhouse scoring
  Output: Score 0-100, automatic shortlist, bias alerts

STEP 4 — QUALIFICATION (chatbot + scheduling)
  Input : Shortlist validated by HR
  Tool  : Paradox Olivia (Q&A) + GoodTime (scheduling)
  Output: Interview scheduled, complete pre-qualification sheet

STEP 5 — INTERVIEW (AI-assisted)
  Input : Video/in-person interview
  Tool  : Fireflies / Notion AI (transcription + summary)
  Output: Structured write-up, pre-filled scorecard

STEP 6 — DECISION & OFFER
  Input : Scorecards + AI recommendation
  Tool  : ATS dashboard + LLM for Go/No-Go synthesis
  Output: Offer letter generated, onboarding triggered
```

## AI ethics in HR — Framework & risks

```
ETHICAL & REGULATORY RISKS
──────────────────────────────────────────────────────
ALGORITHMIC BIAS
  Risk     : Indirect discrimination (gender, age, origin)
  Examples : Amazon (CV-ranking tool) · HireVue (video analysis)
  Mitigation:
    · Regular model audits (bias metrics)
    · Keep a final human decision (GDPR Art. 22)
    · Train on diverse, balanced data

GDPR & CANDIDATE DATA
  Obligations:
    · Explicit consent for automated processing
    · Right to object to automated decisions
    · Retention period: 2 years max (unsuccessful application)
    · Up-to-date records of processing (CNIL)

EUROPEAN AI ACT (EU Regulation 2024/1689)
  Classification: recruiting / selection / candidate evaluation =
    HIGH-RISK SYSTEM (art. 6 §2 + Annex III, pt 4 "Employment")
  Deployer deadline: high-risk obligations apply from 2 August 2026
  Penalties: up to €15M or 3% of global turnover
  Obligations:
    · Transparency about AI use (inform candidates)
    · Mandatory human oversight (human-in-the-loop)
    · Technical documentation + risk management of the AI system
    · Conformity assessment before putting into service

BEST PRACTICES
  □ Documented and shared HR AI policy
  □ Train recruiters to critically read AI scores
  □ Contractual clause for ATS vendors (GDPR subprocessing)
  □ Annual algorithmic-bias review with the DPO
  □ AI-in-recruitment charter accessible to candidates
```

## HR AI maturity matrix

```
LEVEL 1 — INITIAL
  Manual processes, no ATS, Excel spreadsheets
  → Action: Basic ATS (Recruitee/Workable) + LLM for job postings

LEVEL 2 — STRUCTURED
  ATS in place, no AI scoring, little automation
  → Action: Enable ATS AI scoring + pre-qualification chatbot

LEVEL 3 — AUGMENTED
  AI on sourcing and screening, manual reporting
  → Action: People analytics, turnover prediction, AI LMS

LEVEL 4 — INTELLIGENT
  Full-AI pipeline with human oversight, predictive analytics
  → Action: Continuous optimization, bias audits, team training
```

## HR AI transformation plan — 6-month structure

```
PHASE 1 — DIAGNOSIS (M1)
  · Map current HR processes
  · Audit tools (existing ATS, HRIS, LMS)
  · Assess AI maturity (level 1-4)
  · Identify quick wins

PHASE 2 — SELECTION & SCOPING (M2)
  · Select AI ATS (RFP if > 500 employees)
  · Legal validation GDPR / AI Act
  · Change-management plan (ADKAR)
  · Budget and projected ROI

PHASE 3 — PILOT DEPLOYMENT (M3-M4)
  · Deploy on 1-2 pilot roles
  · Train HR team (tool + ethics)
  · Adjust based on field feedback
  · Measure baseline KPIs

PHASE 4 — ROLLOUT (M5-M6)
  · Full deployment
  · Operational HR AI dashboard
  · ROI report: Time to Fill, Cost per Hire
  · Post-deployment bias audit (DPO)
```

## ROI of AI in recruitment — Measurement framework

> ⚠️ **No fixed benchmark.** Gains vary widely by context (volume, starting maturity,
> data quality). Measure **your own baseline before deployment**, then compare. The
> table below is an **illustrative example of how to structure** a before/after
> dashboard — **the values are not market references; recalibrate them to your scope**.

**Metrics to track** (before AI → after AI, on your own scope):
- **Time to Fill** (median days between opening and acceptance)
- **Cost per Hire** (fully loaded cost per hire: sourcing + recruiter time + tools)
- **Sourcing response rate** (InMail/personalized messages)
- **CV screening time** (hours per role)
- **Manager satisfaction** (post-hire survey, 1-5 scale)

*Illustrative presentation example (fictional values, not a benchmark):*

| Metric | Before AI | After AI | Change |
|---|---|---|---|
| Time to Fill | *baseline* | *measured* | *to compute* |
| Cost per Hire | *baseline* | *measured* | *to compute* |

> For **sourced market references**, consult dated benchmarks (e.g. SHRM Recruiting
> Benchmarking — US data; APEC / Numeum for France) rather than untraced figures.

## LLM reference by tier

> ⚠️ The LLM landscape changes constantly — **no fixed score here**. For benchmarks
> (SWE-bench, GPQA, LMArena Elo), refer to **up-to-date public leaderboards**:
> lmarena.ai · swebench.com · llm-stats.com. A "#1" written in a deck is wrong the next month.

| Tier | Models (families) | Typical HR use |
|---|---|---|
| **Frontier / Premium** | Claude **Opus 4.8** · OpenAI GPT · Google Gemini · xAI Grok · DeepSeek | Complex CV analysis, premium job postings, senior evaluation, sourcing agents |
| **Production** | Claude **Sonnet 4.6** · multimodal equivalents | Initial qualification, ATS scoring, people analytics, HR chatbots |
| **Eco / fast** | Claude **Haiku 4.5** · competing "flash/mini" models | Simple high-volume tasks, low latency |
| **Sovereign / on-premise** | Mistral (GDPR FR/EU) · Llama (open-source, self-hosted) | Sensitive data, EU data-residency constraints |

> Selection criteria: task quality (in-house evals) · cost/token · latency · context window · multimodal · sovereignty/data residency · reversibility (anti lock-in).

**Recommended HR use by tier:**
- **Premium** → complex CV analysis, premium job-posting generation, senior evaluation questions, autonomous sourcing agents
- **Production** → initial qualification, AI ATS scoring, people-analytics dashboards, HR chatbots
- **Eco/Fast** → high volume, mass screening, automated candidate replies
- **Sovereign/Open-source** → sensitive HR data, strict GDPR context, on-premise client deployment

## Deliverables
- HR AI maturity audit (level 1-4) with recommendations
- AI ATS comparison tailored to the client context
- HR AI transformation roadmap (6-12 months)
- HR AI policy + candidate ethics charter
- HR team training: AI use + critical reading of scores

## Output format
Specify: HR team size, annual recruitment volume, current ATS (if any), transformation budget, priority drivers (speed / quality / cost / compliance).

## Anti-patterns
- ❌ Deploy AI CV scoring/filtering without an AI Act high-risk classification (art. 6 + Annex III) or human oversight.
- ❌ Present quantified ROI gains without a baseline measured on the client scope (unsourced "market" figures).
- ❌ Automate a rejection decision without a right to human intervention (GDPR art. 22).
- ❌ Choose an AI ATS without a GDPR subprocessing clause or a contractually agreed bias audit.
- ❌ Confuse "AI assistance" with "AI decision": the final decision stays human and traceable.

## Sources
- EU Regulation 2024/1689 (AI Act) — art. 6 §2 + Annex III pt 4 (employment, high-risk) — eur-lex.europa.eu · artificialintelligenceact.eu
- GDPR EU 2016/679 — art. 22 (automated decision), art. 5 (minimization) — cnil.fr
- CNIL — Recruitment guide (19 sheets, incl. new technologies & discrimination) — cnil.fr/fr/le-guide-du-recrutement
- PROSCI ADKAR — change-management model — prosci.com
- NIST AI RMF 1.0 (2023) · ISO/IEC 42001:2023 (AIMS) — AI governance

## See also
- `skills/rh_ia/cv-parsing-ats-scoring.md` — ATS scoring (AI Act high-risk)
- `skills/rh_ia/people-analytics.md` — HR KPIs and dashboards
- `skills/juridique_ia/` — GDPR / AI Act / non-discrimination compliance
- `skills/formateur_ia/` — upskilling HR teams on AI
