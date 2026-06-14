# Skill — Chain-of-Thought and Guided Reasoning (CoT / ReAct)
> Certifications: Anthropic Claude Code in Action (2026), Google Cloud Professional ML Engineer (Google)

## Objective
Implement guided reasoning techniques — Chain-of-Thought, Tree-of-Thought, ReAct — to improve the quality and reliability of LLM responses on complex tasks that require several reasoning steps.

## Chain-of-Thought (CoT) — Patterns

### Zero-shot CoT
```
# Force reasoning without an example
Solve the following problem by reasoning step by step
before giving your final answer.

PROBLEM: [PROBLEM]

Show your reasoning, then conclude with "FINAL ANSWER: [answer]"
```

### Few-shot CoT
```
Here is how to solve this type of problem:

EXAMPLE 1:
Problem: Compute the WSJF of a feature.
Reasoning:
  1. Identify the Business Value (BV = 8)
  2. Identify the Time Criticality (TC = 5)
  3. Identify the RR/OE (= 5)
  4. Compute the Cost of Delay: BV + TC + RR/OE = 18
  5. Identify the size (Job Size = 3)
  6. WSJF = 18 / 3 = 6.0
Final answer: WSJF = 6.0

NOW: [YOUR PROBLEM]
```

### ReAct (Reason + Act)
```
You have access to the following tools: [TOOL LIST]

To answer the question, use this format:
Thought: [What should I do to solve this?]
Action: [which tool to use] with [parameters]
Observation: [result of the action]
... (repeat if necessary)
Final thought: [Summary]
Answer: [Final answer]

QUESTION: [QUESTION]
```

## Tree-of-Thought (ToT) — Multiple exploration
```
To answer this complex question, explore 3 different approaches,
evaluate each one, then select the best.

QUESTION: [QUESTION]

APPROACH 1: [title]
Reasoning: [...]
Pros / Cons: [...]
Score: [1-10]

APPROACH 2: [title]
Reasoning: [...]
Pros / Cons: [...]
Score: [1-10]

APPROACH 3: [title]
Reasoning: [...]
Pros / Cons: [...]
Score: [1-10]

SELECTION: [Chosen approach + justification]
FINAL ANSWER: [...]
```

## When to use which technique

| Technique | When to use it | Example |
|---|---|---|
| Zero-shot CoT | Mathematical or logical problem | ROI, WSJF calculation |
| Few-shot CoT | Precise output format required | US writing, acceptance criteria |
| ReAct | Tasks with tools / actions | Agents with tool use |
| ToT | Complex multi-criteria decisions | Architecture choice, strategy |

## Deliverables
- Ready-to-use CoT / ReAct / ToT prompts
- Guide for selecting the technique per case
- Few-shot examples tailored to the domain

## Output format
Specify: task type (calculation / decision / writing), complexity, available tools (if ReAct).

## Anti-patterns
- ❌ **CoT on a trivial task**: unnecessary latency/cost → reserve it for multi-step reasoning
- ❌ **No output format separate** from the reasoning: the "rambling" pollutes the result → separate reasoning / final answer
- ❌ **ToT/ReAct without a stopping condition**: cost explosion → bound depth/iterations
- ❌ **ReAct without real tools**: the Thought/Action/Observation loop spins idle → wire the tools up
- ❌ **Citing a technique without sourcing it**: credibility → attribute it (Wei 2022, Yao 2023…)

## Sources
- **Chain-of-Thought** — Wei et al., *NeurIPS 2022* (arXiv 2201.11903)
- **Self-Consistency** — Wang et al., *ICLR 2023* (arXiv 2203.11171) — path sampling + voting
- **Tree of Thoughts** — Yao et al., *NeurIPS 2023* (arXiv 2305.10601)
- **ReAct** — Yao et al., *ICLR 2023* (arXiv 2210.03629) — reasoning + action
- **Anthropic — Prompt Engineering Guide** (docs.anthropic.com) — CoT with `<thinking>` tags

## See also
- [`few-shot-learning.md`](few-shot-learning.md) — CoT few-shot (reasoning examples)
- [`system-prompt-design.md`](system-prompt-design.md) — embed reasoning in the system prompt
- [`prompt-evaluation.md`](prompt-evaluation.md) — evaluate reasoning quality
- [`../orchestrateur_workflow/prompt-engineering-orchestration.md`](../orchestrateur_workflow/prompt-engineering-orchestration.md) — CoT in orchestration
