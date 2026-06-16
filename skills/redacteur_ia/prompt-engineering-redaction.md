# Skill — Prompt Engineering for AI Writing
> Certifications: Anthropic Claude Code in Action · HubSpot Content Marketing

## Objective
Master the art of prompt engineering applied to written-content production to maximize quality and reduce iterations.

## Anatomy of an effective writing prompt
```
[ROLE]        → "You are a [expert in...] who [context]"
[CONTEXT]     → Audience, channel, objective, constraints
[TASK]        → Precise action to perform
[FORMAT]      → Expected structure, length, tone
[EXAMPLES]    → Reference models if relevant
[CONSTRAINTS] → What to avoid, limits, style guide
```

## Advanced prompting techniques

### Few-shot (examples in the prompt) *(Brown et al., 2020)*
```
"Here are 2 examples of the tone I want:
Example 1: [reference text]
Example 2: [reference text]
Now write [new task] with that same tone."
```

### Chain of Thought for content *(Wei et al., 2022)*
```
"Before writing, think about:
1. What is the reader's main problem?
2. What is the counter-intuitive insight?
3. What proof or example makes it credible?
Then write the 10-line LinkedIn post."
```

### Persona Prompting
```
"You are [David Ogilvy / Seth Godin / Ann Handley].
How would you write a landing page for [product]
aimed at [audience]?"
```

## Library of reusable meta-prompts

### Improving existing text
```
"Improve this text: [text].
Objectives:
- Punchier while keeping the same meaning
- Cut to [X words]
- Strengthen the final CTA
- Remove redundancies"
```

### Generating A/B variants
```
"Generate 3 variants of [headline / subject / CTA]
for an A/B test.
Each variant must use a different formula:
V1: number, V2: question, V3: direct benefit."
```

### Multi-channel adaptation
```
"Adapt this content [source: article / brief] for:
1. LinkedIn post (10 lines, expert tone)
2. Tweet / X (280 characters, sharp)
3. Email (150 words, personal)
4. SEO meta description summary (155 characters)"
```

## Common writing-prompt mistakes
| Mistake | Symptom | Fix |
|---|---|---|
| Prompt too vague | Generic text, no personality | Specify audience + tone + objective |
| No length constraint | Text too long or too short | Always specify the word count |
| Forgetting the CTA | Text with no call to action | Include "end with a CTA [action]" |
| Ignoring the channel | Wrong tone (too formal for LinkedIn) | Specify the channel and its codes |

## Deliverables
- Prompt library by content type
- Writing prompt engineering guide (1 page)
- Reusable templates (Notion / file)
- "Prompting for writing" training (1h)

## Output format
Specify: content type · audience · channel · objective · reference examples (desired style) · constraints

## Sources
- **Anthropic** — *Prompt Engineering Guide* (docs.anthropic.com) — role, context, examples, XML tags
- **Brown et al.** — *Language Models are Few-Shot Learners* (NeurIPS 2020, arXiv 2005.14165) — few-shot
- **Wei et al.** — *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models* (NeurIPS 2022, arXiv 2201.11903) — CoT
- **Ann Handley** — *Everybody Writes* (Wiley, 2014, 2nd ed. 2022) — writing quality
- **David Ogilvy** — *Ogilvy on Advertising* (1983) — copywriter persona reference

## See also
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — CoT in depth
- [`../prompt_engineer/few-shot-learning.md`](../prompt_engineer/few-shot-learning.md) — few-shot in depth
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — system prompt design
- [copywriting-ia.md](copywriting-ia.md) — applied to marketing copy
