# Skills — AI Architect

> Folder attached to `AGENT-AI-ARCHITECT.md`
> Frameworks: AWS AIF-C01/MLA-C01 · Google ML Engineer · Azure AI-102 · TOGAF 10 · OWASP LLM Top 10 (2025) · NIST AI RMF 1.0 (2023) · MCP/A2A standards

---

## Skill index

| # | Skill | When to invoke | Reference |
|---|---|---|---|
| 1 | [`design-patterns-agents.md`](design-patterns-agents.md) | Choose an agentic system's pattern (ReAct, Routing, Supervisor, Reflection) with LangGraph code | AWS MLA-C01 · Google ML |
| 2 | [`protocoles-mcp-a2a.md`](protocoles-mcp-a2a.md) | Implement MCP (full TypeScript server) or A2A for agent interoperability | Anthropic 2026 |
| 3 | [`choix-stack-ia.md`](choix-stack-ia.md) | Compare frameworks (LangChain vs CrewAI vs native SDK), make vs buy | AWS AI · Azure AI-102 |
| 4 | [`multi-agent-design.md`](multi-agent-design.md) | Design a multi-agent topology (StateGraph + human-in-the-loop) | Anthropic · AWS MLA-C01 |
| 5 | [`secure-by-design.md`](secure-by-design.md) | Build in security from the architecture (OWASP LLM, EU AI Act, guardrails) | AWS AI · Azure AI-102 |
| 6 | [`evaluation-llm.md`](evaluation-llm.md) | Evaluate an LLM/RAG/agent (2025+ benchmarks, golden dataset, RAGAs) | Google ML · DeepLearning.AI |
| 7 | [`cloud-ia.md`](cloud-ia.md) | Choose the AI cloud (Bedrock, Azure OpenAI, Vertex AI) with compared pricing | AWS MLA-C01 · Google ML · Azure AI-102 |
| 8 | [`architecture-rag.md`](architecture-rag.md) | Design a RAG pipeline (chunking, embedding, reranking, hybrid search) | AWS MLA-C01 · Google ML |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... START an AI project (from zero)?
    → choix-stack-ia.md (make vs buy, frameworks)
    → cloud-ia.md (provider and services)
    → secure-by-design.md (security constraints from day 1)

  ... DESIGN AN AGENT or multi-agent system?
    → design-patterns-agents.md (choose ReAct / Supervisor / Routing / Reflection)
    → multi-agent-design.md (topology, state management, interrupts)
    → protocoles-mcp-a2a.md (interoperability with external tools/agents)

  ... DESIGN A RAG?
    → architecture-rag.md (pipeline + RAGAs metrics)
    → secure-by-design.md (anti indirect prompt injection via RAG)

  ... MEASURE THE QUALITY of the AI system?
    → evaluation-llm.md (benchmarks, golden dataset, monthly report)

  ... SECURE THE ARCHITECTURE?
    → secure-by-design.md (at the design level, not an ex-post audit)
    → if a professional audit is required → AGENT-SECURITE-IA.md (out of scope here)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Python code implementation | `AGENT-DEV-PYTHON-IA.md` | AI-ARCHITECT designs; DEV-PYTHON codes |
| TypeScript code implementation | `AGENT-DEV-TYPESCRIPT-IA.md` | AI-ARCHITECT designs; DEV-TS codes (Next.js, AI SDK) |
| Deployment, MLOps, model monitoring | `AGENT-MLOPS-ENGINEER.md` | AI-ARCHITECT designs; MLOPS operates |
| Security audit, red teaming, pentest | `AGENT-SECURITE-IA.md` | AI-ARCHITECT = `secure-by-design` (proactive); SECURITE-IA = ex-post audit + pentest |
| AI product backlog, user stories | `AGENT-PO-SCRUM.md` / `AGENT-PO-SAFE.md` | AI-ARCHITECT = architecture; PO = product backlog |
| Cross-cutting enterprise architecture | `AGENT-SOLUTIONS-ARCHITECT.md` | AI-ARCHITECT = AI stack; SOLUTIONS-ARCHITECT = global IS urbanization |

---

## Frameworks and standards used

- **MCP (Model Context Protocol)**: https://modelcontextprotocol.io/
- **A2A (Agent-to-Agent)**: Google 2025 standard
- **OWASP LLM Top 10 (2025)**: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **NIST AI RMF 1.0**: https://www.nist.gov/itl/ai-risk-management-framework
- **EU AI Act**: Regulation (EU) 2024/1689
- **TOGAF 10**: reference for enterprise-architecture integration
- **2025+ benchmarks**: GPQA Diamond, IFEval, MMLU-Pro, SWE-bench Verified, τ-bench, LMArena
- **LangGraph**: https://langchain-ai.github.io/langgraph/
- **RAGAs**: https://docs.ragas.io/
