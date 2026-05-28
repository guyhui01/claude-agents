# Skills — AI Architect

> Dossier rattaché à `AGENT-AI-ARCHITECT.md`
> Référentiels : AWS AIF-C01/MLA-C01 · Google ML Engineer · Azure AI-102 · TOGAF 10 · OWASP LLM Top 10 (2025) · NIST AI RMF 1.0 (2023) · MCP/A2A standards

---

## Index des skills

| # | Skill | Quand l'invoquer | Référence |
|---|---|---|---|
| 1 | [`design-patterns-agents.md`](design-patterns-agents.md) | Choisir le pattern d'un système agentique (ReAct, Routing, Supervisor, Reflection) avec code LangGraph | AWS MLA-C01 · Google ML |
| 2 | [`protocoles-mcp-a2a.md`](protocoles-mcp-a2a.md) | Implémenter MCP (server TypeScript complet) ou A2A pour interopérabilité agents | Anthropic 2026 |
| 3 | [`choix-stack-ia.md`](choix-stack-ia.md) | Comparer frameworks (LangChain vs CrewAI vs SDK natif), make vs buy | AWS AI · Azure AI-102 |
| 4 | [`multi-agent-design.md`](multi-agent-design.md) | Concevoir une topologie multi-agents (StateGraph + human-in-the-loop) | Anthropic · AWS MLA-C01 |
| 5 | [`secure-by-design.md`](secure-by-design.md) | Intégrer la sécurité dès l'architecture (OWASP LLM, AI Act EU, guardrails) | AWS AI · Azure AI-102 |
| 6 | [`evaluation-llm.md`](evaluation-llm.md) | Évaluer un LLM/RAG/agent (benchmarks 2025+, golden dataset, RAGAs) | Google ML · DeepLearning.AI |
| 7 | [`cloud-ia.md`](cloud-ia.md) | Choisir le cloud IA (Bedrock, Azure OpenAI, Vertex AI) avec pricing comparé | AWS MLA-C01 · Google ML · Azure AI-102 |
| 8 | [`architecture-rag.md`](architecture-rag.md) | Concevoir un pipeline RAG (chunking, embedding, reranking, hybrid search) | AWS MLA-C01 · Google ML |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉMARRER un projet IA (zéro) ?
    → choix-stack-ia.md (make vs buy, frameworks)
    → cloud-ia.md (provider et services)
    → secure-by-design.md (contraintes sécurité dès J1)

  ... CONCEVOIR UN AGENT ou multi-agents ?
    → design-patterns-agents.md (choisir ReAct / Supervisor / Routing / Reflection)
    → multi-agent-design.md (topologie, state management, interruptions)
    → protocoles-mcp-a2a.md (interopérabilité avec outils/agents externes)

  ... CONCEVOIR UN RAG ?
    → architecture-rag.md (pipeline + métriques RAGAs)
    → secure-by-design.md (anti prompt injection indirect via RAG)

  ... MESURER LA QUALITÉ du système IA ?
    → evaluation-llm.md (benchmarks, golden dataset, rapport mensuel)

  ... SÉCURISER L'ARCHITECTURE ?
    → secure-by-design.md (au niveau design, pas audit ex-post)
    → si audit pro requis → AGENT-SECURITE-IA.md (hors périmètre ici)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Implémentation code Python | `AGENT-DEV-PYTHON-IA.md` | AI-ARCHITECT conçoit ; DEV-PYTHON code |
| Implémentation code TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | AI-ARCHITECT conçoit ; DEV-TS code (Next.js, AI SDK) |
| Déploiement, MLOps, monitoring modèles | `AGENT-MLOPS-ENGINEER.md` | AI-ARCHITECT conçoit ; MLOPS opère |
| Audit sécurité, red teaming, pentest | `AGENT-SECURITE-IA.md` | AI-ARCHITECT = `secure-by-design` (proactif) ; SECURITE-IA = audit ex-post + pentest |
| Backlog produit IA, user stories | `AGENT-PO-SCRUM.md` / `AGENT-PO-SAFE.md` | AI-ARCHITECT = architecture ; PO = backlog produit |
| Architecture d'entreprise transverse | `AGENT-SOLUTIONS-ARCHITECT.md` | AI-ARCHITECT = stack IA ; SOLUTIONS-ARCHITECT = urbanisme SI global |

---

## Référentiels et standards utilisés

- **MCP (Model Context Protocol)** : https://modelcontextprotocol.io/
- **A2A (Agent-to-Agent)** : standard Google 2025
- **OWASP LLM Top 10 (2025)** : https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **NIST AI RMF 1.0** : https://www.nist.gov/itl/ai-risk-management-framework
- **EU AI Act** : Règlement (UE) 2024/1689
- **TOGAF 10** : référence pour l'intégration en architecture d'entreprise
- **Benchmarks 2025+** : GPQA Diamond, IFEval, MMLU-Pro, SWE-bench Verified, τ-bench, LMArena
- **LangGraph** : https://langchain-ai.github.io/langgraph/
- **RAGAs** : https://docs.ragas.io/
