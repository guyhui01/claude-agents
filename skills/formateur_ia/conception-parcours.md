# Skill — AI Training Path Design

> Certifications: ATD Instructional Design, CPTD 2026, Learning & Development Professional (SHRM), Articulate Storyline 360 Certified, Qualiopi Instructional Engineering

## Objective

Design engaging, effective Data-AI learning paths by applying the ADDIE and SAM models, Bloom's Taxonomy, and the principles of learning path design and microlearning.

## Instructional design models

### ADDIE vs SAM — comparison

| Phase | ADDIE (Sequential) | SAM (Iterative) |
|-------|-------------------|----------------|
| Analysis | Needs analysis | Preparation phase |
| Design | Overall design | Iterative Design |
| Develop | Content development | Iterative Development |
| Implement | Rollout | Implementation |
| Evaluate | Final evaluation | Continuous evaluation |
| **Ideal for** | Stable projects, compliance | Agile projects, innovation |
| **Typical duration** | 3-6 months | 4-8 weeks (MVP) |

### Applying SAM to AI training design

```
Sprint 1 (2 weeks) — Minimum prototype
  → Learning objectives (Bloom)
  → Storyboard of 2 pilot modules
  → Test with 5 representative learners
  → Feedback loop → adjustments

Sprint 2 (2 weeks) — Alpha version
  → Develop 30% of the content
  → E-learning test, 15 learners
  → Instructional adjustments

Sprint 3 (2 weeks) — Beta version
  → Full content developed
  → Pilot, 20-30 learners
  → Kirkpatrick L1+L2 measurement

Sprint 4 (1 week) — Release
  → LMS deployment
  → Learner communication
  → Kirkpatrick L3 follow-up plan
```

## Bloom's Taxonomy applied to AI

### The 6 levels for AI training

| Bloom level | Action verbs | Example AI objective | Assessment |
|-------------|----------------|---------------------|-----------|
| 1 — Remember | Define, list, name | "Define what a token is in an LLM" | MCQ |
| 2 — Understand | Explain, illustrate | "Explain how RAG works" | Open question |
| 3 — Apply | Use, demonstrate | "Use Claude to draft an email" | Hands-on exercise |
| 4 — Analyze | Compare, distinguish | "Compare 2 prompts and identify the better one" | Case study |
| 5 — Evaluate | Judge, argue | "Assess the risks of an AI system" | Debate/Simulation |
| 6 — Create | Design, produce | "Design an AI agent for your role" | Capstone project |

**Rule of thumb: 30% levels 1-2, 40% levels 3-4, 30% levels 5-6**

## Learning path design

### Architecture of a "Prompt Engineering" track (example)

```
PROMPT ENGINEERING TRACK — 12h total
(Audience: managers and business roles, beginner level)

┌────────────────────────────────────────────────────────────┐
│  MODULE 0 — Prerequisites (1h, self-paced e-learning)      │
│  "How does generative AI work?"                            │
│  → Bloom L1-L2 | Format: 20-min video + quiz               │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 1 — Prompt fundamentals (2h, blended)              │
│  "Anatomy of a good prompt: role, context, task"           │
│  → Bloom L2-L3 | Format: video + guided lab, 30 prompts    │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 2 — Advanced techniques (3h, in-person)            │
│  "Chain-of-thought, few-shot, structured output"           │
│  → Bloom L3-L4 | Format: workshop, 6 paired exercises      │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 3 — Business use cases (4h, in-person)             │
│  "Prompt engineering for [HR / Finance / Marketing]"       │
│  → Bloom L4-L5 | Format: simulation + peer review          │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 4 — Capstone project (2h, mentored)                │
│  "Build a prompt library for your team"                    │
│  → Bloom L5-L6 | Format: 1-to-1 coaching + deliverable     │
└────────────────────────────────────────────────────────────┘
```

### Learning-objective template (SMART-Bloom format)

```
By the end of module [X], the learner will be able to:
BLOOM_VERB (level [1-6]) + CONTENT + CONDITION + SUCCESS_CRITERION

Example:
"Write (Bloom 3 — Apply) a structured prompt for a document-
summarization task, using the role and chain-of-thought
techniques from module 2, with a relevance score
rated ≥ 4/5 by the trainer."
```

## Microlearning — principles and formats

### The 7 AI microlearning formats

| Format | Duration | Tool | Use case |
|--------|-------|-------|-------------|
| Video nugget | 3-5 min | Loom, Synthesia | Concept to explain |
| Interactive quiz | 5-10 min | Kahoot, Quizlet | Comprehension check |
| Branching scenario | 10-15 min | Articulate Storyline | Decision-making |
| Interactive infographic | 5 min | Canva, Genially | Visual summary |
| Podcast episode | 10-15 min | Anchor, Buzzsprout | Commute / travel |
| Flashcards | 5 min | Anki, Brainscape | AI glossary memorization |
| Practice challenge | 15 min | — | Immediate application |

### Practical 3-5-10 guideposts for microlearning
> Field heuristics (not prescriptive). Reminder spacing relies on the **spacing effect** and the forgetting curve (Ebbinghaus, 1885), not on a fixed interval.

```
~3 minutes for a concept video (short format, controlled cognitive load)
spaced, increasing reminders (D+1, D+3, D+7…) rather than a single reminder
~10% of training time devoted to reinforcement microlearning
```

## Deliverables

- Instructional brief (objectives, population, constraints)
- Detailed instructional plan for the track (structure, sequencing)
- Storyboard of 2 representative modules
- Bloom matrix by module (objectives × levels)
- Microlearning design sheet (reusable template)
- Development schedule (SAM phases with milestones)

## Output format

Specify: **training title and theme**, **target audience** (profile, current level, headcount), **total duration** available, **desired format** (in-person / e-learning / blended), **available tools** (LMS, authoring), **target Bloom level** (application or creation), **budget and timeline constraints**.

## Sources
- **Benjamin Bloom (ed.)** — *Taxonomy of Educational Objectives* (1956); revised by **Anderson & Krathwohl** (2001) — operational verbs, "Create" at the top
- **Florida State University / US Army** — the **ADDIE** model (1975)
- **Michael Allen & Richard Sites** — *Leaving ADDIE for SAM* (2012)
- **John Sweller** — *Cognitive Load Theory* (1988) — cognitive load and segmentation
- **Hermann Ebbinghaus** — *Über das Gedächtnis* (1885) — forgetting curve / spacing effect

## Anti-patterns
- Learning objectives with no measurable Bloom verb ("raise awareness of…")
- Rigid waterfall ADDIE where an iterative approach (SAM) would fit better
- Microlearning = slicing slides into bits, with no objective per nugget
- Presenting "3-5-10" or any fixed interval as a scientific rule
- Cognitive overload: too many new concepts per module (Sweller)

## See also
- [analyse-besoins-formation.md](analyse-besoins-formation.md) — skill gaps as input
- [evaluation-formation.md](evaluation-formation.md) — align Bloom objectives with assessment
- [elearning-rapid-learning.md](elearning-rapid-learning.md) — produce the microlearning nuggets
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — example of technical content to structure
