# Skill — AI for Everyone (Awareness)

> Certifications: Anthropic Prompt Engineering Certification 2026, AI For Everyone (DeepLearning.AI), Professional Adult Trainer (RNCP5), Google AI Essentials Certificate

## Objective

Design and deliver a generative-AI awareness module for non-technical audiences, with accessible key content, discovery workshops, and hands-on cases by job.

## "AI for Everyone" module architecture

### Typical track (3h30 half-day)

```
TIME     SEQUENCE                              FORMAT
──────   ──────────────────────────────────   ──────────────
0:00     Welcome + ice-breaker "AI or Not AI"  Group game
0:15     Understanding generative AI (essentials) Mini-lecture
0:35     Live demo: Claude / ChatGPT in action Demonstration
0:55     Workshop 1: My first prompt           Individual lab
1:25     BREAK
1:35     AI ethics, risks, and limits          Guided discussion
2:05     Workshop 2: AI in my job              Lab by job group
2:50     Wrap-up + personal action plan        Individual work
3:15     Q&A + L1 evaluation                   Plenary
3:30     END
```

## Key content — "What every employee should know about AI"

### Module A — Demystifying AI

#### The 5 essentials (format "5 things to know")

```
1. Generative AI is a sophisticated TEXT PREDICTOR
   → It predicts the next token, not "what is true"
   → Consequence: hallucinations are possible → always verify

2. AI does not "understand": it RECOGNIZES PATTERNS
   → Trained on billions of human texts
   → Very strong on frequent tasks, limited on rare ones

3. The quality of the ANSWER = quality of the QUESTION
   → That's the promise of prompt engineering
   → A few minutes spent on the wording markedly improve the relevance of the answer

4. AI is an ASSISTANT, not an ORACLE
   → Verify facts, figures, and sources
   → AI has no inherent ethical judgment

5. YOUR DATA is valuable — DO NOT SHARE
   → Client, financial, HR data = off public LLMs
   → Use the secured enterprise versions
```

### Module B — Workshops by job

#### "HR & Recruitment" workshop (45 min)

```
EXERCISE 1 — Write an improved job description
Prompt provided:
"Improve this job description to make it more appealing
to Gen Z candidates, while staying factual.
Emphasize company culture and flexibility.
Current description: [paste the text]"

EXERCISE 2 — Prepare targeted interview questions
"You are an HR expert. Generate 10 behavioral interview questions
for a [title] role focused on [2-3 key skills].
Format: question + behavior sought."

DEBRIEF: What ethical risks in AI for recruitment?
→ Algorithmic bias, sensitive data, candidate transparency
```

#### "Finance & Management Control" workshop (45 min)

```
EXERCISE 1 — Summarize a financial report
"Summarize this 30-page report into 5 key points for a
5-minute exec-committee presentation. Audience: senior management,
non-finance specialists. Emphasize variances vs budget."
[Provide an anonymized report excerpt]

EXERCISE 2 — Write a variance commentary
"Explain simply in 3-4 sentences why personnel
costs rose 8% in Q3, starting from this
data: [table provided]"

DEBRIEF: Hallucinations on the figures — how to verify?
```

#### "Marketing & Communication" workshop (45 min)

```
EXERCISE 1 — Adapt a message to 3 audiences
"Write the same message about our new [X] service for:
1. A professional LinkedIn post (250 words, expert tone)
2. A key-account client email (formal, ROI-oriented)
3. A tweet (280 characters max, catchy)"

EXERCISE 2 — Content idea brainstorming
"Generate 20 content ideas for our blog on [topic].
Audience: [description]. Goal: [traffic / leads / awareness].
Sort the ideas by type: tutorial / opinion / news / client case"

DEBRIEF: Authenticity of the brand voice with AI — how to preserve it?
```

#### "Management & Leadership" workshop (45 min)

```
EXERCISE 1 — Prepare constructive feedback
"Help me phrase constructive feedback for a
team member who delivers late but high-
quality work. SBI method (Situation-Behavior-Impact).
Context: [describe the situation]"

EXERCISE 2 — Summarize a meeting and extract the actions
"Here are the raw minutes of our 2h meeting.
Extract: 1) The 5 decisions made, 2) The actions with
owners and deadlines, 3) The topics to postpone."

DEBRIEF: Can AI replace a manager? 10-min debate.
```

## AI ethics guide — practical cheat-sheet format

```
┌────────────────────────────────────────────────┐
│  MY RESPONSIBLE AI GUIDE AT WORK               │
├────────────────────────────────────────────────┤
│  ✓ I CAN use AI to:                            │
│    → Write, rephrase, summarize                │
│    → Find ideas, brainstorm                    │
│    → Code, analyze public data                 │
│                                                │
│  ✗ I MUST NOT share:                           │
│    → Client data (GDPR)                        │
│    → Confidential financial information        │
│    → HR data and salaries                      │
│    → Product strategy and roadmap              │
│                                                │
│  ⚠ I ALWAYS VERIFY:                            │
│    → Figures and statistics                    │
│    → Quotes and sources                        │
│    → Recent information (> 2024)               │
│                                                │
│  Approved tools: [to customize]                │
│  AI security contact: [DPO email]              │
└────────────────────────────────────────────────┘
```

## Deliverables

- Complete "AI for Everyone" module (facilitator + participant slides)
- Workshop guide by job (5 variants: HR / Finance / Marketing / Management / Operations)
- "My responsible AI guide" cheat sheet (double-sided A5, customizable)
- Standalone e-learning version (Rise 360, 1h30)
- L1 evaluation questionnaire + L2 knowledge quiz
- Communication kit (invitation email, teaser, reminder)

## Output format

Specify: **industry**, **jobs represented in the session**, **available duration** (1h30 / half-day / full day), **format** (in-person / remote / e-learning), **participants' AI level** (estimate 1-5), **approved AI tools** in the organization, **GDPR / security constraints** to mention.

## Sources
- **Malcolm Knowles** — andragogy (1970/1980) — experiential adult learning
- **Richard Mayer** — *Multimedia Learning* (2001) — accessible materials
- **CNIL** — *AI & GDPR* guides — responsible data use
- **Anthropic / OpenAI** — responsible LLM usage guides

## Anti-patterns
- Overselling AI with unsourced "magic" numbers
- 100% theoretical awareness, with no real hands-on LLM use
- Ignoring the data / GDPR and ethics dimension
- Same examples for every job (no anchoring by function)
- Anthropomorphism: "AI understands / thinks / knows"

## See also
- [formation-claude-code.md](formation-claude-code.md) — tooled follow-up for tech profiles
- [prompt-engineering-formation.md](prompt-engineering-formation.md) — go deeper on wording
- [evaluation-formation.md](evaluation-formation.md) — L1/L2 awareness quizzes
- [`../redacteur_ia/storytelling-ia.md`](../redacteur_ia/storytelling-ia.md) — anchor the message through storytelling
