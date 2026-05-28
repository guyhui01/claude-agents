# Skills — Prompt Engineer

> Dossier rattaché à `AGENT-PROMPT-ENGINEER.md`
> Référentiels : Anthropic Claude Code in Action (2026) · Claude 101 / Code 101 (2026) · DeepLearning.AI · AWS AI Practitioner · Google ML Engineer

---

## Index des skills (8)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`system-prompt-design.md`](system-prompt-design.md) | Concevoir un system prompt structuré (rôle, contraintes, format) | Anthropic Claude Code in Action · Claude 101 |
| 2 | [`few-shot-learning.md`](few-shot-learning.md) | Appliquer few-shot et in-context learning | DeepLearning.AI · Anthropic |
| 3 | [`chain-of-thought.md`](chain-of-thought.md) | Implémenter Chain-of-Thought (CoT) et ReAct | Anthropic · Google ML Engineer |
| 4 | [`rag-prompt-design.md`](rag-prompt-design.md) | Concevoir des prompts pour RAG (citation, faithfulness) | Anthropic · AWS AI Practitioner |
| 5 | [`multimodal-prompting.md`](multimodal-prompting.md) | Concevoir des prompts multimodaux (image, audio, vidéo) | Anthropic · Google ML Engineer |
| 6 | [`prompt-evaluation.md`](prompt-evaluation.md) | Évaluer et tester des prompts (evals) | Anthropic · DeepLearning.AI |
| 7 | [`prompt-optimization.md`](prompt-optimization.md) | Optimiser coûts et performance des prompts (caching, tokens) | Anthropic · Claude Code 101 · AWS AI Practitioner |
| 8 | [`evals-llm-observability.md`](evals-llm-observability.md) | Mesurer l'observabilité et les evals LLM en production | Anthropic · Google ML Engineer |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONCEVOIR UN PROMPT DEPUIS ZÉRO ?
    → system-prompt-design.md (structure, rôle, contraintes, format)
    → few-shot-learning.md (si exemples nécessaires)
    → chain-of-thought.md (si raisonnement complexe)

  ... PROMPT POUR UN RAG ?
    → rag-prompt-design.md (faithfulness, citations, garde-fous)

  ... PROMPT MULTIMODAL ?
    → multimodal-prompting.md (vision, audio, vidéo)

  ... ÉVALUER LA QUALITÉ ?
    → prompt-evaluation.md (offline evals + golden dataset)
    → evals-llm-observability.md (en production, monitoring)

  ... OPTIMISER COÛTS / LATENCE ?
    → prompt-optimization.md (prompt caching, token reduction, model selection)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Implémentation Python / SDK Anthropic | `AGENT-DEV-PYTHON-IA.md` | PROMPT-ENG = design ; DEV-PYTHON = code |
| Architecture RAG / multi-agents | `AGENT-AI-ARCHITECT.md` | PROMPT-ENG = prompts ; AI-ARCHITECT = stack |
| Évaluation LLM amont (architecture) | `AGENT-AI-ARCHITECT.md` skill `evaluation-llm.md` | PROMPT-ENG = evals prompt-level ; AI-ARCHITECT = evals system-level |
| Sécurité prompt injection | `AGENT-SECURITE-IA.md` skill `owasp-llm-top10.md` | PROMPT-ENG = guardrails dans le prompt ; SECURITE-IA = audit |

---

## Référentiels et standards utilisés

- **Anthropic Prompt Engineering Guide** : https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- **Chain-of-Thought** (Wei et al., 2022)
- **ReAct** (Yao et al., 2022)
- **RAGAs** : pour faithfulness et answer relevancy
- **Promptfoo / Braintrust / Inspect AI** : pour evals
- **OWASP LLM Top 10 (2025)** : pour guardrails anti-injection
