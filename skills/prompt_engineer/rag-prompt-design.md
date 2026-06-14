# Skill — Prompt Design for RAG Systems
> Certifications: Anthropic Claude Code in Action (2026), AWS Certified AI Practitioner (Amazon)

## Objective
Design effective prompts for RAG architectures (Retrieval-Augmented Generation) — injection of retrieved context, sourcing instructions, handling of no-answer cases — to maximize the relevance and reliability of responses.

## RAG architecture — Recap

```
USER QUERY
      │
      ▼
[RETRIEVAL] → Relevant documents retrieved (top-K)
      │
      ▼
[AUGMENTATION] → Documents injected into the prompt
      │
      ▼
[GENERATION] → The LLM answers based on the documents
```

## RAG prompt template — Standard

```
You are [ROLE]. You answer questions based ONLY
on the documents provided below.

STRICT RULES:
- Answer only from the provided documents
- If the answer is not in the documents, say so clearly
- Cite the source document for each key piece of information
- Never invent or extrapolate beyond the documents

REFERENCE DOCUMENTS:
──────────────────────────────────────────────────────────────
[DOC 1 — Source: {file_name} — Date: {date}]
{document_content_1}

[DOC 2 — Source: {file_name} — Date: {date}]
{document_content_2}
──────────────────────────────────────────────────────────────

QUESTION: {user_question}

ANSWER (with sources):
```

## Handling RAG edge cases

### Case 1 — No answer in the documents
```
If the documents do not contain enough information:
1. State clearly: "I did not find any information on this topic
   in the provided documents."
2. Offer what is available: "Here is what I know about a related topic..."
3. Suggest: "For a complete answer, see [suggested source]"

NEVER invent a plausible answer without a documentary basis.
```

### Case 2 — Contradictory information across documents
```
If the documents present contradictory information:
1. Flag the contradiction: "Note that the sources differ on this point:"
2. Present each version with its source
3. Do not arbitrarily pick a side
```

## RAG optimization — Chunking prompts

```python
# Prompt to improve chunk quality at indexing time
CHUNKING_PROMPT = """
You will split this document into standalone passages for a RAG store.
Each passage must:
- Be self-sufficient (understandable without external context)
- Contain 150-300 tokens
- Start with a context sentence if the topic changes
- Keep tables and lists intact

Document to split:
{document}
"""
```

## RAG quality metrics

| Metric | Description | Tool |
|---|---|---|
| Faithfulness | Answer faithful to the documents | RAGAs |
| Answer Relevancy | Answer relevant to the question | RAGAs |
| Context Precision | Retrieved documents actually useful | RAGAs |
| Context Recall | Relevant documents not missed | RAGAs |

## Deliverables
- Standard RAG prompt template
- Variants for edge cases (no answer, contradictions)
- Optimized chunking prompt
- RAG evaluation plan (metrics)

## Output format
Specify: RAG store domain, document type, chunk length, frequent edge cases.

## Anti-patterns
- ❌ **No "no answer" guard**: the model hallucinates when the context lacks the info → instruct "answer only from the context"
- ❌ **No source citation**: unverifiable answer → require the references/chunks used
- ❌ **Chunks too large/small**: noise or loss of context → calibrate (≈ 150-300 tokens) + overlap
- ❌ **No faithfulness evaluation**: silent drift → RAGAS metrics (faithfulness, context precision/recall)
- ❌ **Ignoring contradictions** between chunks: inconsistent answer → conflict-handling instruction

## Sources
- **RAG** — Lewis et al., *NeurIPS 2020* (arXiv 2005.11401) — founding paper
- **RAGAS** — Es et al., *EACL 2024* (arXiv 2309.15217) — RAG evaluation metrics (faithfulness, answer/context relevance)
- **Anthropic — Prompt Engineering Guide** (docs.anthropic.com) — context-grounded prompts

## See also
- [`chain-of-thought.md`](chain-of-thought.md) — reasoning over the retrieved context
- [`prompt-evaluation.md`](prompt-evaluation.md) — evaluation of RAG answers
- [`evals-llm-observability.md`](evals-llm-observability.md) — RAGAS metrics in production
- [`../orchestrateur_workflow/mcp-orchestration.md`](../orchestrateur_workflow/mcp-orchestration.md) — access to sources via MCP
