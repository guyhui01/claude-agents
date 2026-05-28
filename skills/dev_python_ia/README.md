# Skills — Développement Python IA

> Dossier rattaché à `AGENT-DEV-PYTHON-IA.md`
> Référentiels : Python Institute (PCAP/PCPP) · DeepLearning.AI · Hugging Face NLP · Anthropic SDK · LangChain v0.2+

---

## Index des skills

| # | Skill | Quand l'invoquer | Référence |
|---|---|---|---|
| 1 | [`python-avance-ia.md`](python-avance-ia.md) | Écrire du Python typé/async robuste pour LLM (avec exemples testables `.py`) | PCAP · PCPP1 |
| 2 | [`langchain-langgraph.md`](langchain-langgraph.md) | Construire des chains et StateGraph stateful avec LangGraph 0.2+ | DeepLearning.AI LangChain · LangGraph |
| 3 | [`pipeline-rag.md`](pipeline-rag.md) | Implémenter un pipeline RAG complet (ingestion → retrieval → génération) | DeepLearning.AI RAG |
| 4 | [`huggingface-transformers.md`](huggingface-transformers.md) | Utiliser Hugging Face (inférence, tokenizers, pipelines, datasets) | HuggingFace NLP Course |
| 5 | [`pytorch-deeplearning.md`](pytorch-deeplearning.md) | Coder un modèle PyTorch + DataLoader + boucle train/val (mini-Transformer fourni) | Deep Learning Specialization |
| 6 | [`integration-apis-llm.md`](integration-apis-llm.md) | Intégrer Anthropic SDK / OpenAI / Mistral / Gemini avec retry + streaming + tool use | DeepLearning.AI |
| 7 | [`vector-db.md`](vector-db.md) | Choisir et utiliser une vector DB (Qdrant, pgvector, Pinecone, Weaviate) | DeepLearning.AI RAG · AWS MLS |
| 8 | [`fine-tuning-peft.md`](fine-tuning-peft.md) | Fine-tuner un LLM avec LoRA/QLoRA (TRL, BitsAndBytes) | HuggingFace · DeepLearning.AI |
| 9 | [`agents-python.md`](agents-python.md) | Construire un agent ReAct (pattern déplié + SQLite checkpointing) | DeepLearning.AI LangGraph |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CODER PROPREMENT en Python pour l'IA ?
    → python-avance-ia.md (typing, async, pydantic, tests pytest)

  ... INTÉGRER UN LLM dans une app ?
    → integration-apis-llm.md (Anthropic SDK, retry, streaming)
    → langchain-langgraph.md (si tu veux orchestrer plusieurs appels)

  ... CONSTRUIRE UN RAG ?
    → pipeline-rag.md (le pipeline complet)
    → vector-db.md (choix du vector store)

  ... CONSTRUIRE UN AGENT ?
    → agents-python.md (tool use, ReAct, memory, checkpointing)

  ... ENTRAÎNER OU AJUSTER UN MODÈLE ?
    → pytorch-deeplearning.md (from scratch)
    → fine-tuning-peft.md (LoRA/QLoRA sur modèle existant)
    → huggingface-transformers.md (utilisation de modèles pré-entraînés)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Architecture globale IA | `AGENT-AI-ARCHITECT.md` | DEV-PYTHON-IA implémente ; AI-ARCHITECT conçoit |
| Frontend / TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | DEV-PYTHON-IA = backend Python ; DEV-TS = Next.js, Vercel AI SDK |
| Déploiement ML / monitoring modèles | `AGENT-MLOPS-ENGINEER.md` | DEV-PYTHON-IA code le modèle ; MLOPS le déploie et le supervise |
| Prompt engineering avancé (system prompts, evals) | `AGENT-PROMPT-ENGINEER.md` | DEV-PYTHON-IA appelle l'API ; PROMPT-ENGINEER conçoit les prompts |

---

## Référentiels et standards utilisés

- **Python typing** : PEP 484, PEP 604 (union types), PEP 695 (type aliases)
- **Anthropic SDK** : https://docs.anthropic.com/en/api/client-sdks
- **LangChain v0.2+** : https://python.langchain.com/docs/introduction/
- **LangGraph** : https://langchain-ai.github.io/langgraph/
- **Hugging Face Transformers** : https://huggingface.co/docs/transformers
- **PyTorch** : https://pytorch.org/docs/stable/
- **PEFT (LoRA/QLoRA)** : https://huggingface.co/docs/peft
- **RAGAs (eval RAG)** : https://docs.ragas.io/
