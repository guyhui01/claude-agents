# Skills — Python AI Development

> Folder attached to `AGENT-DEV-PYTHON-IA.md`
> Frameworks: Python Institute (PCAP/PCPP) · DeepLearning.AI · Hugging Face NLP · Anthropic SDK · LangChain v0.2+

---

## Skill index

| # | Skill | When to use it | Reference |
|---|---|---|---|
| 1 | [`python-avance-ia.md`](python-avance-ia.md) | Write robust typed/async Python for LLMs (with testable `.py` examples) | PCAP · PCPP1 |
| 2 | [`langchain-langgraph.md`](langchain-langgraph.md) | Build chains and stateful StateGraphs with LangGraph 0.2+ | DeepLearning.AI LangChain · LangGraph |
| 3 | [`pipeline-rag.md`](pipeline-rag.md) | Implement a full RAG pipeline (ingestion → retrieval → generation) | DeepLearning.AI RAG |
| 4 | [`huggingface-transformers.md`](huggingface-transformers.md) | Use Hugging Face (inference, tokenizers, pipelines, datasets) | HuggingFace NLP Course |
| 5 | [`pytorch-deeplearning.md`](pytorch-deeplearning.md) | Code a PyTorch model + DataLoader + train/val loop (mini-Transformer included) | Deep Learning Specialization |
| 6 | [`integration-apis-llm.md`](integration-apis-llm.md) | Integrate Anthropic SDK / OpenAI / Mistral / Gemini with retry + streaming + tool use | DeepLearning.AI |
| 7 | [`vector-db.md`](vector-db.md) | Choose and use a vector DB (Qdrant, pgvector, Pinecone, Weaviate) | DeepLearning.AI RAG · AWS MLS |
| 8 | [`fine-tuning-peft.md`](fine-tuning-peft.md) | Fine-tune an LLM with LoRA/QLoRA (TRL, BitsAndBytes) | HuggingFace · DeepLearning.AI |
| 9 | [`agents-python.md`](agents-python.md) | Build a ReAct agent (unrolled pattern + SQLite checkpointing) | DeepLearning.AI LangGraph |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... write CLEAN Python for AI?
    → python-avance-ia.md (typing, async, pydantic, pytest tests)

  ... INTEGRATE AN LLM into an app?
    → integration-apis-llm.md (Anthropic SDK, retry, streaming)
    → langchain-langgraph.md (if you want to orchestrate multiple calls)

  ... BUILD A RAG?
    → pipeline-rag.md (the full pipeline)
    → vector-db.md (vector store choice)

  ... BUILD AN AGENT?
    → agents-python.md (tool use, ReAct, memory, checkpointing)

  ... TRAIN OR TUNE A MODEL?
    → pytorch-deeplearning.md (from scratch)
    → fine-tuning-peft.md (LoRA/QLoRA on an existing model)
    → huggingface-transformers.md (using pre-trained models)
```

---

## Boundaries with other agents

| Adjacent topic | Relevant agent | Boundary |
|---|---|---|
| Overall AI architecture | `AGENT-AI-ARCHITECT.md` | DEV-PYTHON-IA implements; AI-ARCHITECT designs |
| Frontend / TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | DEV-PYTHON-IA = Python backend; DEV-TS = Next.js, Vercel AI SDK |
| ML deployment / model monitoring | `AGENT-MLOPS-ENGINEER.md` | DEV-PYTHON-IA codes the model; MLOPS deploys and monitors it |
| Advanced prompt engineering (system prompts, evals) | `AGENT-PROMPT-ENGINEER.md` | DEV-PYTHON-IA calls the API; PROMPT-ENGINEER designs the prompts |

---

## Frameworks and standards used

- **Python typing**: PEP 484, PEP 604 (union types), PEP 695 (type aliases)
- **Anthropic SDK**: https://docs.anthropic.com/en/api/client-sdks
- **LangChain v0.2+**: https://python.langchain.com/docs/introduction/
- **LangGraph**: https://langchain-ai.github.io/langgraph/
- **Hugging Face Transformers**: https://huggingface.co/docs/transformers
- **PyTorch**: https://pytorch.org/docs/stable/
- **PEFT (LoRA/QLoRA)**: https://huggingface.co/docs/peft
- **RAGAs (RAG eval)**: https://docs.ragas.io/
