# Skill — IT/AI Technical Profile Assessment
> Certifications: PHR (HRCI) · SHRM-CP (SHRM) · ATD CPTD (ATD)

## Objective
Objectively assess IT/AI technical profiles via structured interview grids, practical cases, and scorecards, to produce a documented Go/No-Go recommendation for the client.

## Structured interview format (STAR + technical)

```
TYPICAL INTERVIEW — 60 minutes
──────────────────────────────────────────────────────
0-5 min    : Welcome, process overview
5-20 min   : Background and motivations (STAR method)
20-45 min  : Technical assessment (questions + practical case)
45-55 min  : Behavioral questions & culture fit
55-60 min  : Candidate questions + next steps
```

## Interview grid — AI Developer / LLM

### Technical skills (45 min)

```
LEVEL 1 — Fundamentals (all AI profiles)
──────────────────────────────────────────────────────
Q: Explain the difference between fine-tuning and RAG. When would you choose one over the other?
Expected answer: fine-tuning = adapt the model, RAG = enrich the context. RAG preferred if data changes often, fine-tuning if a stable, specific behavior is required.
Score: 0 (off-topic) · 1 (partial) · 2 (correct) · 3 (mastery + nuances)

Q: How do you handle token management and inference costs in production?
Expected answer: prompt caching, smart chunking, model matched to complexity, cost monitoring (Langfuse, etc.)
Score: 0-3

LEVEL 2 — Architecture & Production
──────────────────────────────────────────────────────
Q: Describe a RAG architecture you built in production. What problems did you run into?
Expected answer: vector DB (Pinecone, Qdrant, pgvector), chunking strategy, embedding model, reranking, hallucination mitigation
Score: 0-3

Q: How do you test and evaluate an LLM pipeline?
Expected answer: evals (RAGAS, LangSmith), golden dataset, metrics (faithfulness, relevancy), A/B testing prompts
Score: 0-3

LEVEL 3 — Leadership & Design (seniors)
──────────────────────────────────────────────────────
Q: How do you choose among the market's LLMs for a given use case?
Expected answer (the landscape moves very fast → the METHOD matters more than a frozen "current top"):

  Reason by TIER and by CRITERIA, not by instant ranking:
  · FRONTIER (complex reasoning, agents, advanced code):
    Claude Opus 4.8 · competing frontier families (OpenAI GPT, Google Gemini, xAI Grok, DeepSeek)
  · PRODUCTION (quality/cost balance, high volumes):
    Claude Sonnet 5 · multimodal/economical alternatives as needed
  · FAST / SIMPLE (latency, scripts):
    Claude Haiku 4.5 · competing "flash/mini" models
  · SOVEREIGNTY / ON-PREMISE:
    Mistral (deployable, GDPR FR/EU) · Llama (open-source, self-hosted)

  Selection criteria (the core of the answer): task quality (in-house evals) ·
  cost/token · latency · context window · multimodal · sovereignty / data residency (EU) ·
  regional API availability · reversibility (anti lock-in)

  ⚠️ Benchmarks (SWE-bench, GPQA, LMArena Elo): refer to UP-TO-DATE PUBLIC LEADERBOARDS
  (lmarena.ai · swebench.com · llm-stats.com) — they change constantly; never freeze
  a score or a "#1" in a deck (it'll be wrong the next month).

Score: 0-3 (0 = names 1 model with no criteria · 2 = tier + criteria · 3 = multi-criteria grid
         + task evals + GDPR constraints + pointer to up-to-date leaderboards)
```

### STAR behavioral questions

```
AUTONOMY & OWNERSHIP
Q: Describe a situation where you had to make an important technical decision without your manager.
Expected: full STAR — clear Situation, proactive action, measured result

COLLABORATION
Q: Tell me about a technical disagreement with a colleague. How did you resolve it?
Expected: listening, technical compromise, focus on the product goal

LEARNING AGILITY
Q: Which AI technology did you learn on your own in the last 6 months? How?
Expected: curiosity, self-teaching, concrete application
```

## Scorecard — Full assessment

| Dimension | Weight | Score (0-3) | Weighted score |
|---|---|---|---|
| Technical mastery (fundamentals) | 25% | | |
| Production & architecture experience | 25% | | |
| Code quality / best practices | 15% | | |
| Communication skills | 15% | | |
| Autonomy & ownership | 10% | | |
| Client-culture fit | 10% | | |
| **Total** | 100% | | **/3** |

```
INTERPRETATION
──────────────────────────────────────────────────────
≥ 2.5 / 3   → Strong recommendation — present as a priority
2.0 - 2.4   → Conditional recommendation — to validate with the client
1.5 - 1.9   → Developing profile — junior engagement only
< 1.5       → Not retained — CV database with +6-month follow-up date
```

## Practical case — Examples by profile

```
AI DEVELOPER (45 min — async or live)
──────────────────────────────────────────────────────
"You must build a mini RAG assistant over a document base
of 500 PDFs. Describe your architecture, choose your stack, estimate
the inference costs for 1,000 requests/day, and identify the 3
main risks."
Expected: full pipeline, justified choices, cost awareness

AI PRODUCT OWNER (30 min — discussion)
──────────────────────────────────────────────────────
"An executive committee asks you to identify 3 priority AI use cases for
a 200-person banking IT department. How do you go about it?"
Expected: method (value/effort, AI maturity), stakeholders, criteria

AI CONSULTANT (45 min — role-play)
──────────────────────────────────────────────────────
"Your client (retail, 5,000 employees) wants to deploy an intelligent
HR chatbot. Run a quick diagnosis and propose a 6-month roadmap."
Expected: maturity audit, architecture, change management, budget
```

## Deliverables
- Custom interview grid per profile and level
- Completed scorecard with comments per dimension
- Documented Go/No-Go recommendation (1 page)
- Structured interview write-up for the client

## Output format
Specify: job title, level required (junior/mid-level/senior/lead), key technical stack, engagement type (product / consulting / IT services firm), client sector.

## Anti-patterns
- ❌ Unstructured interview (improvised questions) → low predictive validity and bias risk.
- ❌ Assess on criteria with no direct link to the role (French Labor Code L1221-6).
- ❌ Use a personality test without prior disclosure to the candidate (L1221-8) or scientific validity.
- ❌ Freeze an LLM ranking in an assessment question (point to up-to-date leaderboards — already built in).
- ❌ Go/No-Go decision with no written record of scores → not auditable, not defensible.

## Sources
- Structured interview — better predictive validity than the free-form interview (HR literature / SHRM) — shrm.org
- STAR method (Situation-Task-Action-Result) — standard behavioral-interview format
- Big Five / OCEAN — McCrae & Costa (1987), *Journal of Personality and Social Psychology*, 52(1), 81-90 — **if** a personality assessment is used (governed by L1221-8)
- French Labor Code — L1221-6 (direct/necessary link), L1221-8 (prior disclosure, confidentiality of results) — legifrance.gouv.fr

## See also
- `skills/rh_ia/recrutement-sourcing-it.md` — upstream qualification
- `skills/rh_ia/detection-deepfake-entretien.md` — remote-interview authenticity
- `skills/rh_ia/verification-references-background-check.md` — background confirmation
- `skills/rh_ia/cv-parsing-ats-scoring.md` — ATS pre-selection
