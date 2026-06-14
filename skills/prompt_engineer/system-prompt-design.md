# Skill — Structured System Prompt Design
> Certifications: Anthropic Claude Code in Action (2026), Claude 101 (2026)

## Objective
Design optimal system prompts for LLMs — structure, element ordering, instruction precision, behavior control — to maximize the quality, consistency and predictability of responses.

## Optimal structure of a system prompt

```
ORDER RECOMMENDED BY ANTHROPIC
────────────────────────────────────────────────────────
1. IDENTITY     → Who the assistant is, its precise role
2. CONTEXT      → Environment, target user, project
3. SCOPE        → What it does / does not do
4. RULES        → Mandatory behaviors
5. FORMAT       → Response structure
6. EXAMPLES     → Few-shot if needed (optional)
────────────────────────────────────────────────────────
Target length : 300-800 tokens
Cache control : Enable if > 1024 tokens (90% savings)
```

## Template — Complete System Prompt

```
You are [PRECISE ROLE AND EXPERTISE].
[Sentence on certifications / experience if relevant]

You support [USER / CONTEXT] with [PRECISE DOMAIN].

## What you do
- [CAPABILITY 1 — precise and actionable]
- [CAPABILITY 2]
- [CAPABILITY 3]

## What you do not do
- [LIMIT 1] → [Redirect to what / whom]
- [LIMIT 2]

## Behavior rules
- Always respond in [LANGUAGE]
- [DOMAIN-SPECIFIC RULE]
- Use the exact vocabulary of [FRAMEWORK/METHOD]
- Provide deliverables ready for [TARGET TOOL]
- When ambiguous, ask A SINGLE question before acting

## Output format
[DESCRIBE PRECISELY: length, structure, level of detail]
[Example structure if relevant]
```

## Advanced writing techniques

### Explicit negative constraints
```
# ❌ Vague
Produce a good analysis.

# ✅ Constrained
Produce a 300-500 word analysis.
DO NOT include: generic introduction, repetitions of the brief.
ALWAYS include: 3 numbered actionable recommendations.
```

### Conditional instructions
```
If the request concerns X → apply format A
If the request concerns Y → apply format B
If information is missing → ask a question before acting
```

### Anchoring on a framework
```
Use EXCLUSIVELY the SAFe 6 vocabulary:
- "Feature" (not "functionality")
- "PI Planning" (not "quarterly planning")
- "ART" (not "program team")
```

## Anti-patterns to avoid

| Anti-pattern | Problem | Fix |
|---|---|---|
| "You are an AI expert" | Too vague | "You are a Data Scientist specialized in NLP" |
| "Answer well" | Not measurable | "Answer in < 200 words, bullet-point format" |
| Context at the end of the prompt | Diluted | Put the context BEFORE the instructions |
| Contradictory instructions | Unpredictable behavior | Choose and prioritize |
| Everything in the user message | No caching possible | Stable context → system prompt |

## Validation checklist

```
☐ The identity is precise (role + expertise)
☐ The scope is delimited (in / out of scope)
☐ The rules are measurable (not "be clear")
☐ The output format is defined (length, structure)
☐ The examples (if present) are representative
☐ Length < 800 tokens (or caching enabled if > 1024)
☐ Tested on 5 representative cases
```

## Deliverables
- Structured and optimized system prompt
- Annotated version with justifications
- Completed validation checklist

## Output format
Specify: agent role, domain, target user, destination tool, length constraints.

## Sources
- **Anthropic — Prompt Engineering Guide** (docs.anthropic.com/prompt-engineering) — system prompt structure, role, constraints, prompt caching (> 1024 tokens)
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — agent system prompts
- **Constitutional AI** — Bai et al. (Anthropic), arXiv 2212.08073 (2022) — injected principles/constraints

## See also
- [`few-shot-learning.md`](few-shot-learning.md) — examples embedded in the system prompt
- [`chain-of-thought.md`](chain-of-thought.md) — structured reasoning
- [`prompt-evaluation.md`](prompt-evaluation.md) — evaluate the system prompt
- [`../orchestrateur_workflow/prompt-engineering-orchestration.md`](../orchestrateur_workflow/prompt-engineering-orchestration.md) — system prompts in orchestration
