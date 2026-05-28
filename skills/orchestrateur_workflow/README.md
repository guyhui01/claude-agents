# Skills — Orchestrateur de Workflows Agentiques

> Dossier rattaché à `AGENT-ORCHESTRATEUR-WORKFLOW.md`
> Référentiels : PMP · PMI-ACP · TOGAF 10 · BPMN 2.0 OCM · SAFe 6 Agilist · SAFe LPM · ITIL 4 · AWS SAA · GCP Cloud Architect · Anthropic Claude Code in Action

---

## Index des skills (15)

### Conception & Design
| Skill | Quand l'invoquer | Référence |
|---|---|---|
| [`workflow-design.md`](workflow-design.md) | Concevoir un workflow agentique (BPMN, diagrammes de flux) | BPMN 2.0 OCM · TOGAF 10 |
| [`agent-routing.md`](agent-routing.md) | Sélectionner et router dynamiquement vers les agents du catalogue | TOGAF 10 · PMP |
| [`dependency-mapping.md`](dependency-mapping.md) | Cartographier les dépendances et ordres d'exécution | PMP · BPMN 2.0 |
| [`workflow-catalog.md`](workflow-catalog.md) | Gérer le catalogue de workflows (taxonomie, versioning) | PMP · TOGAF 10 |

### Exécution & Coordination
| Skill | Quand l'invoquer | Référence |
|---|---|---|
| [`context-handoff.md`](context-handoff.md) | Gérer le transfert de contexte inter-agents (state management) | TOGAF 10 · Anthropic |
| [`parallel-orchestration.md`](parallel-orchestration.md) | Orchestration parallèle vs séquentielle (dépendances métier) | PMP · BPMN 2.0 |
| [`trigger-management.md`](trigger-management.md) | Gérer les triggers (événements, webhooks, schedule) | ITIL 4 · BPMN 2.0 |
| [`workflow-automation.md`](workflow-automation.md) | Automatiser les workflows (n8n, Make, Zapier, custom) | ITIL 4 · AWS SAA |

### Qualité & Robustesse
| Skill | Quand l'invoquer | Référence |
|---|---|---|
| [`output-validation.md`](output-validation.md) | Valider les outputs à chaque étape (critères qualité) | ISTQB Exit Criteria · PMP |
| [`error-recovery.md`](error-recovery.md) | Gestion des erreurs, fallbacks, reprises | ITIL 4 · PMP |
| [`workflow-monitoring.md`](workflow-monitoring.md) | Monitoring et métriques d'exécution | ITIL 4 · SRE |

### Intégration techniques
| Skill | Quand l'invoquer | Référence |
|---|---|---|
| [`claude-api-integration.md`](claude-api-integration.md) | Intégrer Claude API (Anthropic SDK) dans le workflow | Anthropic Claude Code in Action |
| [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) | Concevoir les prompts d'orchestration inter-agents | Anthropic · TOGAF 10 |
| [`mcp-orchestration.md`](mcp-orchestration.md) | Utiliser MCP (Model Context Protocol) pour l'orchestration | Anthropic |
| [`langgraph-crewai-patterns.md`](langgraph-crewai-patterns.md) | Patterns multi-agents (LangGraph, CrewAI, AutoGen) | Anthropic · DeepLearning.AI |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONCEVOIR UN NOUVEAU WORKFLOW ?
    → workflow-design.md (BPMN + diagramme)
    → agent-routing.md (quels agents appeler)
    → dependency-mapping.md (séquentiel vs parallèle)
    → workflow-catalog.md (intégration au catalogue)

  ... GÉRER L'EXÉCUTION ?
    → context-handoff.md (state inter-agents)
    → parallel-orchestration.md (parallélisme)
    → trigger-management.md (cron, événements)
    → workflow-automation.md (n8n / Make / custom)

  ... SÉCURISER LA QUALITÉ ?
    → output-validation.md (gates qualité)
    → error-recovery.md (fallback + reprise)
    → workflow-monitoring.md (métriques SRE)

  ... INTÉGRER L'IA TECHNIQUEMENT ?
    → claude-api-integration.md (Anthropic SDK)
    → prompt-engineering-orchestration.md (prompts d'orchestration)
    → mcp-orchestration.md (Model Context Protocol)
    → langgraph-crewai-patterns.md (frameworks agentic)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Rédaction de User Stories | `AGENT-PO-SCRUM.md` | ORCHESTRATEUR = workflows ; PO = backlog produit |
| Architecture technique IA (RAG, agents) | `AGENT-AI-ARCHITECT.md` | ORCHESTRATEUR = exécution ; AI-ARCHITECT = architecture |
| Développement code (Python, TypeScript) | `AGENT-DEV-PYTHON-IA.md`, `AGENT-DEV-TYPESCRIPT-IA.md` | ORCHESTRATEUR = orchestration ; DEV = implémentation |
| Stratégie data-IA | `AGENT-CDO-DIRECTEUR-IA.md` | ORCHESTRATEUR = workflows opérationnels ; CDO = stratégie |
| Gestion des risques projet | `AGENT-CHEF-PROJET-IA.md` | ORCHESTRATEUR = workflows agentiques ; CHEF-PROJET = projet global |

---

## Référentiels et standards utilisés

- **BPMN 2.0** : https://www.omg.org/spec/BPMN/2.0/
- **MCP (Model Context Protocol)** : https://modelcontextprotocol.io/
- **LangGraph** : https://langchain-ai.github.io/langgraph/
- **CrewAI** : https://docs.crewai.com/
- **AutoGen** (Microsoft) : https://microsoft.github.io/autogen/
- **TOGAF 10 ADM** : pour design architectural
- **ITIL 4** : pour gestion incidents et changements
- **DORA Metrics** : pour monitoring SRE des workflows
