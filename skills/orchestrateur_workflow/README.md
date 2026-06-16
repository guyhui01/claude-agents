# Skills — Agentic Workflow Orchestrator

> Folder attached to `AGENT-ORCHESTRATEUR-WORKFLOW.md`
> Frameworks: PMP · PMI-ACP · TOGAF 10 · BPMN 2.0 OCM · SAFe 6 Agilist · SAFe LPM · ITIL 4 · AWS SAA · GCP Cloud Architect · Anthropic Claude Code in Action

---

## Skill index (15)

### Design & Architecture
| Skill | When to invoke | Reference |
|---|---|---|
| [`workflow-design.md`](workflow-design.md) | Design an agentic workflow (BPMN, flow diagrams) | BPMN 2.0 OCM · TOGAF 10 |
| [`agent-routing.md`](agent-routing.md) | Select and dynamically route to the catalog's agents | TOGAF 10 · PMP |
| [`dependency-mapping.md`](dependency-mapping.md) | Map dependencies and execution order | PMP · BPMN 2.0 |
| [`workflow-catalog.md`](workflow-catalog.md) | Manage the workflow catalog (taxonomy, versioning) | PMP · TOGAF 10 |

### Execution & Coordination
| Skill | When to invoke | Reference |
|---|---|---|
| [`context-handoff.md`](context-handoff.md) | Manage inter-agent context handoff (state management) | TOGAF 10 · Anthropic |
| [`parallel-orchestration.md`](parallel-orchestration.md) | Parallel vs. sequential orchestration (business dependencies) | PMP · BPMN 2.0 |
| [`trigger-management.md`](trigger-management.md) | Manage triggers (events, webhooks, schedule) | ITIL 4 · BPMN 2.0 |
| [`workflow-automation.md`](workflow-automation.md) | Automate workflows (n8n, Make, Zapier, custom) | ITIL 4 · AWS SAA |

### Quality & Robustness
| Skill | When to invoke | Reference |
|---|---|---|
| [`output-validation.md`](output-validation.md) | Validate outputs at each step (quality criteria) | ISTQB Exit Criteria · PMP |
| [`error-recovery.md`](error-recovery.md) | Error handling, fallbacks, recovery | ITIL 4 · PMP |
| [`workflow-monitoring.md`](workflow-monitoring.md) | Monitoring and execution metrics | ITIL 4 · SRE |

### Technical integration
| Skill | When to invoke | Reference |
|---|---|---|
| [`claude-api-integration.md`](claude-api-integration.md) | Integrate the Claude API (Anthropic SDK) into the workflow | Anthropic Claude Code in Action |
| [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) | Design inter-agent orchestration prompts | Anthropic · TOGAF 10 |
| [`mcp-orchestration.md`](mcp-orchestration.md) | Use MCP (Model Context Protocol) for orchestration | Anthropic |
| [`langgraph-crewai-patterns.md`](langgraph-crewai-patterns.md) | Multi-agent patterns (LangGraph, CrewAI, AutoGen) | Anthropic · DeepLearning.AI |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... DESIGN A NEW WORKFLOW?
    → workflow-design.md (BPMN + diagram)
    → agent-routing.md (which agents to call)
    → dependency-mapping.md (sequential vs. parallel)
    → workflow-catalog.md (catalog integration)

  ... MANAGE EXECUTION?
    → context-handoff.md (inter-agent state)
    → parallel-orchestration.md (parallelism)
    → trigger-management.md (cron, events)
    → workflow-automation.md (n8n / Make / custom)

  ... SECURE QUALITY?
    → output-validation.md (quality gates)
    → error-recovery.md (fallback + recovery)
    → workflow-monitoring.md (SRE metrics)

  ... INTEGRATE AI TECHNICALLY?
    → claude-api-integration.md (Anthropic SDK)
    → prompt-engineering-orchestration.md (orchestration prompts)
    → mcp-orchestration.md (Model Context Protocol)
    → langgraph-crewai-patterns.md (agentic frameworks)
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Writing User Stories | `AGENT-PO-SCRUM.md` | ORCHESTRATEUR = workflows; PO = product backlog |
| AI technical architecture (RAG, agents) | `AGENT-AI-ARCHITECT.md` | ORCHESTRATEUR = execution; AI-ARCHITECT = architecture |
| Code development (Python, TypeScript) | `AGENT-DEV-PYTHON-IA.md`, `AGENT-DEV-TYPESCRIPT-IA.md` | ORCHESTRATEUR = orchestration; DEV = implementation |
| Data-AI strategy | `AGENT-CDO-DIRECTEUR-IA.md` | ORCHESTRATEUR = operational workflows; CDO = strategy |
| Project risk management | `AGENT-CHEF-PROJET-IA.md` | ORCHESTRATEUR = agentic workflows; CHEF-PROJET = overall project |

---

## Frameworks and standards used

- **BPMN 2.0**: https://www.omg.org/spec/BPMN/2.0/
- **MCP (Model Context Protocol)**: https://modelcontextprotocol.io/
- **LangGraph**: https://langchain-ai.github.io/langgraph/
- **CrewAI**: https://docs.crewai.com/
- **AutoGen** (Microsoft): https://microsoft.github.io/autogen/
- **TOGAF 10 ADM**: for architectural design
- **ITIL 4**: for incident and change management
- **DORA Metrics**: for SRE monitoring of workflows
