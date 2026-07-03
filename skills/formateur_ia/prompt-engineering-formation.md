# Skill — Prompt Engineering Training

> Certifications: Anthropic Prompt Engineering Certification 2026, DeepLearning.AI Prompt Engineering for Developers, Google Prompting Essentials 2026, OpenAI Prompt Engineering Best Practices

## Objective

Design and deliver a complete prompt engineering training for LLM models (Claude, ChatGPT, Gemini), structured in 3 progression levels with hands-on exercises and capstone projects.

## Track architecture (3 levels)

```
LEVEL 1 — BEGINNER (4h)
"Write my first good prompt"
  → Audience: all employees with no LLM experience
  → Prerequisite: have a ChatGPT or Claude account

LEVEL 2 — INTERMEDIATE (8h)
"Master the advanced techniques"
  → Audience: regular users, knowledge workers
  → Prerequisite: Level 1 passed or entry test

LEVEL 3 — ADVANCED (16h)
"Architect complex AI workflows"
  → Audience: developers, AI project managers, Data Scientists
  → Prerequisite: Level 2 + Python basics
```

## Level 1 — Beginner: content and exercises

### The CLEAR framework (universal structure)

```
C — Context     : "You are [role]. The situation is [context]."
L — Length      : "Answer in [word count / bullets / pages]."
E — Examples    : "Here is an example of what I expect: [ex]"
A — Action      : "Your task is to [precise action verb]."
R — Result      : "The result must be [quality criterion]."
```

#### Exercise 1.1 — Transform a naive prompt

```
BEFORE (naive prompt):
"Write an email"

AFTER (CLEAR prompt):
"You are a senior B2B communications officer.
Context: our client Dupont SA has not renewed its contract
for 3 months. Last contact: positive call 6 weeks ago.
Task: Write a warm, professional follow-up email.
Tone: friendly but business-oriented.
Length: 150-200 words maximum.
Include: a personalized hook + 1 concrete value
proposition + a clear call to action (30-min meeting)."

Exercise: Improve THIS naive prompt with the CLEAR framework:
"Summarize the report"
```

#### Exercise 1.2 — The 5-rephrasings game

```
Principle: Start from one request and improve it 5 times.

Base request: "Explain machine learning to me"

Rephrasing 1 — Add the role:
"You are an AI expert teacher addressing non-technical
managers. Explain machine learning to me."

Rephrasing 2 — Add a format constraint:
"[...] Use 3 everyday analogies and 200 words maximum."

Rephrasing 3 — Add an example:
"[...] Following the model of this cloud explanation: [example]"

Rephrasing 4 — Define the audience:
"[...] My counterpart is a 50-year-old sales director."

Rephrasing 5 — Chain with a follow-up question:
"[...] End with 3 questions I can ask to go deeper."
```

## Level 2 — Intermediate: advanced techniques

### Techniques covered

| Technique | Description | Example use |
|-----------|-------------|----------------|
| **Chain-of-thought (CoT)** | Ask for step-by-step reasoning | Complex problems, analysis |
| **Few-shot prompting** | Provide 2-5 examples in the prompt | Consistent generation, classification |
| **Role-playing system** | Define a precise, persistent persona | Specialized assistants |
| **Output structuring** | Request JSON, XML, Markdown table | Integration into workflows |
| **Self-critique** | Ask the AI to evaluate its own answer | Quality improvement |
| **Decomposition** | Break down a complex task | Multi-step projects |

### Exercise 2.1 — Chain-of-Thought for analysis

```
CoT prompt — Project risk analysis:

"You are an IT risk management expert with 15 years of experience.

TASK: Analyze the following project's risks and propose
a mitigation plan.

REASONING PROCESS (use these steps):
Step 1: Identify the 5 major risks (probability × impact)
Step 2: Sort them by the PESTEL matrix
Step 3: For each critical risk, propose 2 mitigation measures
Step 4: Assess the residual risk after mitigation
Step 5: Write a 100-word executive summary

PROJECT: [project description]

CONSTRAINT: Be thorough but concise. Use Markdown
tables for steps 1 and 2."
```

### Exercise 2.2 — Few-shot for tone consistency

```
Few-shot prompt — Generate article titles in the brand's style:

"Here are examples of article titles that match
our editorial line:

Example 1: "5 mistakes 90% of managers make with data
(and how to avoid them)"
Example 2: "Why your dashboard is lying to you —
and how to fix it in 3 steps"
Example 3: "Data-driven in 2026: what leaders do
that you don't yet"

Signature style: catchy, concrete numbers,
slightly provocative, promise of immediate value.

TASK: Generate 10 titles in this style for the topic:
[generative AI for sales teams]"
```

## Level 3 — Advanced: complex AI workflows

### System prompt architecture (Claude API)

```python
import anthropic

client = anthropic.Anthropic()

# Multi-role system prompt for document analysis
SYSTEM_PROMPT = """You are a senior financial analyst specialized
in mergers and acquisitions. You have access to the target
company's financial data.

YOUR ABSOLUTE CONSTRAINTS:
1. Never make up figures — if you don't know, say so
2. Always source your claims with [SOURCE: document X]
3. Flag uncertainties with [UNCERTAINTY: level low/medium/high]
4. Output format: structured in markdown sections

YOUR CAPABILITIES:
- Financial ratio analysis (P/E, EV/EBITDA, etc.)
- Assessment of potential synergies
- Identification of accounting red flags
- Sector benchmark"""

def analyze_document(document_text: str, question: str) -> str:
    response = client.messages.create(
        model="claude-sonnet-5",
        max_tokens=2000,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": f"Document to analyze:\n\n{document_text}\n\n"
                          f"Question: {question}"
            }
        ]
    )
    return response.content[0].text
```

### Meta-evaluation prompt (Self-critique)

```
SELF-ASSESSMENT PROMPT:

"You have just generated this answer: [PREVIOUS ANSWER]

Now evaluate it against these 5 criteria (score /10 + justification):
1. Factual accuracy: Are the facts verifiable?
2. Completeness: Does the answer cover all the requested aspects?
3. Clarity: Would a non-expert understand it easily?
4. Actionability: Are the recommendations concrete?
5. Risks: Are there important biases or omissions?

Then generate an improved version, fixing the identified gaps."
```

## Differences: Claude vs ChatGPT vs Gemini

| Aspect | Claude (Anthropic) | ChatGPT (OpenAI) | Gemini (Google) |
|--------|-------------------|-----------------|----------------|
| Context length | 1M tokens | 128K tokens | 1M tokens |
| Instruction following | Very precise | Very good | Good |
| Ethical reasoning | Natively built-in | Moderate | Moderate |
| Code | Excellent | Excellent | Very good |
| Multimodal | Images + PDF | Images + video | Images + video + audio |
| Tone | Nuanced, balanced | Direct, concise | Informative |
| Ideal for | Long documents, analysis | Conversations, code | Search, multimodal |

## Deliverables

- Training materials levels 1/2/3 (slides + learner guides)
- Library of 50 hands-on exercises sorted by level and job
- Prompt Library starter kit (20 templates per function: HR, Finance, Marketing, Dev)
- Claude/ChatGPT/Gemini reference guide (practical comparison)
- Level 1+2+3 assessments with answer keys
- Internal "Prompt Engineer" certification (criteria + Credly badge)

## Output format

Specify: **target level** (beginner / intermediate / advanced / multi-level), **main LLM tool** in the organization (Claude / ChatGPT / Gemini / Copilot), **participants' jobs**, **available duration** (2h / half-day / full day / track), **format** (in-person / e-learning / blended), **priority business use cases** to address.

## Sources
- **Anthropic** — *Prompt Engineering Guide* (docs.anthropic.com)
- **Wei et al.** — *Chain-of-Thought Prompting Elicits Reasoning in LLMs* (NeurIPS 2022)
- **Brown et al.** — *Language Models are Few-Shot Learners* (NeurIPS 2020, GPT-3)
- **Wang et al.** — *Self-Consistency* (2023); **Yao et al.** — *ReAct* (2023)
- **Anderson & Krathwohl** — revised Bloom's taxonomy (2001) — level progression

## Anti-patterns
- Teaching fixed "magic formulas" instead of transferable principles
- Presenting Few-shot / CoT without academic attribution
- LLM comparison with undated context windows (they change fast)
- No capstone project → skill not anchored
- Neglecting prompt-quality evaluation (iteration, self-critique)

## See also
- [formation-claude-code.md](formation-claude-code.md) — tooled hands-on practice
- [formation-agents-ia.md](formation-agents-ia.md) — agent orchestration prompts
- [`../prompt_engineer/few-shot-learning.md`](../prompt_engineer/few-shot-learning.md) — few-shot in depth
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — CoT in depth
- [`../redacteur_ia/prompt-engineering-redaction.md`](../redacteur_ia/prompt-engineering-redaction.md) — prompts for writing
