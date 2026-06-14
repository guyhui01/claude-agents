# Skills — Prompt Engineer

> Folder attached to `AGENT-PROMPT-ENGINEER.md`
> Frameworks: Anthropic Claude Code in Action (2026) · Claude 101 / Code 101 (2026) · DeepLearning.AI · AWS AI Practitioner · Google ML Engineer

---

## Skill index (8)

| # | Skill | When to invoke it | Certification |
|---|---|---|---|
| 1 | [`system-prompt-design.md`](system-prompt-design.md) | Design a structured system prompt (role, constraints, format) | Anthropic Claude Code in Action · Claude 101 |
| 2 | [`few-shot-learning.md`](few-shot-learning.md) | Apply few-shot and in-context learning | DeepLearning.AI · Anthropic |
| 3 | [`chain-of-thought.md`](chain-of-thought.md) | Implement Chain-of-Thought (CoT) and ReAct | Anthropic · Google ML Engineer |
| 4 | [`rag-prompt-design.md`](rag-prompt-design.md) | Design prompts for RAG (citation, faithfulness) | Anthropic · AWS AI Practitioner |
| 5 | [`multimodal-prompting.md`](multimodal-prompting.md) | Design multimodal prompts (image, audio, video) | Anthropic · Google ML Engineer |
| 6 | [`prompt-evaluation.md`](prompt-evaluation.md) | Evaluate and test prompts (evals) | Anthropic · DeepLearning.AI |
| 7 | [`prompt-optimization.md`](prompt-optimization.md) | Optimize prompt cost and performance (caching, tokens) | Anthropic · Claude Code 101 · AWS AI Practitioner |
| 8 | [`evals-llm-observability.md`](evals-llm-observability.md) | Measure LLM observability and evals in production | Anthropic · Google ML Engineer |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... DESIGN A PROMPT FROM SCRATCH?
    → system-prompt-design.md (structure, role, constraints, format)
    → few-shot-learning.md (if examples are needed)
    → chain-of-thought.md (if complex reasoning)

  ... A PROMPT FOR A RAG?
    → rag-prompt-design.md (faithfulness, citations, guardrails)

  ... A MULTIMODAL PROMPT?
    → multimodal-prompting.md (vision, audio, video)

  ... EVALUATE QUALITY?
    → prompt-evaluation.md (offline evals + golden dataset)
    → evals-llm-observability.md (in production, monitoring)

  ... OPTIMIZE COST / LATENCY?
    → prompt-optimization.md (prompt caching, token reduction, model selection)
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Python / Anthropic SDK implementation | `AGENT-DEV-PYTHON-IA.md` | PROMPT-ENG = design; DEV-PYTHON = code |
| RAG / multi-agent architecture | `AGENT-AI-ARCHITECT.md` | PROMPT-ENG = prompts; AI-ARCHITECT = stack |
| Upstream LLM evaluation (architecture) | `AGENT-AI-ARCHITECT.md` skill `evaluation-llm.md` | PROMPT-ENG = prompt-level evals; AI-ARCHITECT = system-level evals |
| Prompt injection security | `AGENT-SECURITE-IA.md` skill `owasp-llm-top10.md` | PROMPT-ENG = guardrails in the prompt; SECURITE-IA = audit |

---

## Frameworks and standards used

- **Anthropic Prompt Engineering Guide**: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- **Chain-of-Thought** (Wei et al., 2022)
- **ReAct** (Yao et al., 2022)
- **RAGAs**: for faithfulness and answer relevancy
- **Promptfoo / Braintrust / Inspect AI**: for evals
- **OWASP LLM Top 10 (2025)**: for anti-injection guardrails
