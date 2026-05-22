# Skill — Patterns LangGraph, CrewAI et AutoGen pour Claude
> Certifications : Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objectif
Traduire les patterns d'orchestration multi-agents des frameworks populaires (LangGraph, CrewAI, AutoGen) en implémentations natives Claude — pour tirer parti des meilleures architectures sans dépendance à des frameworks tiers.

## Comparatif des frameworks

```
FRAMEWORK    PARADIGME          POINTS FORTS           MAPPING CLAUDE
──────────────────────────────────────────────────────────────────────────
LangGraph    Graph de flux      État partagé, cycles   Prompt chaining + state dict
CrewAI       Équipe de rôles    Collaboration agents   System prompts spécialisés
AutoGen      Conversation       Multi-turn, code exec  Message history + tool use
LlamaIndex   RAG + agents       Indexation, retrieval  RAG natif Anthropic
```

## Pattern LangGraph — Graph de flux d'agents

### Concept original (Python LangGraph)
```python
# LangGraph original
from langgraph.graph import StateGraph, END

workflow = StateGraph(AgentState)
workflow.add_node("analyst", run_analyst)
workflow.add_node("po_scrum", run_po_scrum)
workflow.add_edge("analyst", "po_scrum")
workflow.add_edge("po_scrum", END)
```

### Équivalent natif Claude

```typescript
// Implémentation native — State Graph avec Claude
interface WorkflowState {
  context: string;
  currentNode: string;
  outputs: Record<string, string>;
  history: Array<{ node: string; output: string }>;
  status: "running" | "completed" | "error";
}

type NodeFunction = (state: WorkflowState) => Promise<WorkflowState>;
type EdgeCondition = (state: WorkflowState) => string; // retourne le nom du prochain nœud

class ClaudeStateGraph {
  private nodes = new Map<string, NodeFunction>();
  private edges = new Map<string, string | EdgeCondition>();

  addNode(name: string, fn: NodeFunction): this {
    this.nodes.set(name, fn);
    return this;
  }

  addEdge(from: string, to: string | EdgeCondition): this {
    this.edges.set(from, to);
    return this;
  }

  async run(initialState: WorkflowState): Promise<WorkflowState> {
    let state = { ...initialState };

    while (state.status === "running" && state.currentNode !== "END") {
      const nodeFn = this.nodes.get(state.currentNode);
      if (!nodeFn) throw new Error(`Node inconnu : ${state.currentNode}`);

      console.log(`[GRAPH] → ${state.currentNode}`);
      state = await nodeFn(state);

      const nextEdge = this.edges.get(state.currentNode);
      if (!nextEdge) {
        state.status = "completed";
        break;
      }
      state.currentNode = typeof nextEdge === "function"
        ? nextEdge(state)
        : nextEdge;
    }

    return state;
  }
}

// Usage — WF-001 Cadrage Produit IA
const graph = new ClaudeStateGraph()
  .addNode("analyst", async (state) => {
    const output = await callClaude(BA_SYSTEM_PROMPT, state.context);
    return { ...state, outputs: { ...state.outputs, analyst: output }, currentNode: "analyst" };
  })
  .addNode("po_scrum", async (state) => {
    const output = await callClaude(PO_SYSTEM_PROMPT, state.outputs.analyst);
    return { ...state, outputs: { ...state.outputs, po_scrum: output }, currentNode: "po_scrum" };
  })
  .addEdge("analyst", "po_scrum")
  .addEdge("po_scrum", "END");
```

## Pattern CrewAI — Équipe de rôles collaboratifs

### Concept original (Python CrewAI)
```python
# CrewAI original
from crewai import Agent, Task, Crew

analyst = Agent(role="Business Analyst", goal="Analyser le brief")
po = Agent(role="Product Owner", goal="Rédiger les US")
crew = Crew(agents=[analyst, po], tasks=[task1, task2], verbose=True)
```

### Équivalent natif Claude

```typescript
// Implémentation native — Crew pattern avec Claude
interface AgentConfig {
  name: string;
  role: string;
  goal: string;
  systemPrompt: string;
  tools?: string[];
}

interface Task {
  id: string;
  description: string;
  assignedAgent: string;
  expectedOutput: string;
  dependsOn?: string[];
}

class ClaudeCrew {
  private agents: Map<string, AgentConfig>;
  private client: Anthropic;

  constructor(agents: AgentConfig[]) {
    this.agents = new Map(agents.map((a) => [a.name, a]));
    this.client = new Anthropic();
  }

  async runTask(task: Task, previousOutputs: Record<string, string>): Promise<string> {
    const agent = this.agents.get(task.assignedAgent);
    if (!agent) throw new Error(`Agent inconnu : ${task.assignedAgent}`);

    const contextFromDeps = task.dependsOn
      ?.map((dep) => `[${dep}] : ${previousOutputs[dep]}`)
      .join("\n\n") ?? "";

    const userMessage = `
## Ta mission
${task.description}

## Contexte des étapes précédentes
${contextFromDeps || "Aucune étape précédente."}

## Output attendu
${task.expectedOutput}
    `.trim();

    const response = await this.client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: [{ type: "text", text: agent.systemPrompt, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: userMessage }],
    });

    return response.content[0].type === "text" ? response.content[0].text : "";
  }

  async kickoff(tasks: Task[]): Promise<Record<string, string>> {
    const outputs: Record<string, string> = {};

    for (const task of tasks) {
      console.log(`[CREW] ${task.assignedAgent} → ${task.id}`);
      outputs[task.id] = await this.runTask(task, outputs);
      console.log(`[CREW] ${task.id} ✅`);
    }

    return outputs;
  }
}

// Usage
const crew = new ClaudeCrew([
  { name: "BUSINESS-ANALYST", role: "Business Analyst", goal: "Analyser le brief", systemPrompt: BA_PROMPT },
  { name: "PO-SCRUM", role: "Product Owner", goal: "Rédiger les US", systemPrompt: PO_PROMPT },
]);

const results = await crew.kickoff([
  { id: "analyse", description: "Analyse le brief", assignedAgent: "BUSINESS-ANALYST", expectedOutput: "Carte des besoins" },
  { id: "user_stories", description: "Rédige 8 US", assignedAgent: "PO-SCRUM", expectedOutput: "8 US format INVEST", dependsOn: ["analyse"] },
]);
```

## Pattern AutoGen — Conversation multi-agents

### Équivalent natif Claude

```typescript
// Implémentation native — Multi-turn conversation entre agents
interface ConversationMessage {
  agent: string;
  content: string;
  timestamp: Date;
}

class ClaudeMultiAgentConversation {
  private history: ConversationMessage[] = [];
  private client = new Anthropic();

  async addMessage(agentName: string, systemPrompt: string, trigger: string): Promise<string> {
    // Construire le contexte de conversation pour cet agent
    const conversationContext = this.history
      .map((m) => `[${m.agent}] : ${m.content}`)
      .join("\n\n");

    const userMessage = conversationContext
      ? `Voici la conversation jusqu'ici :\n${conversationContext}\n\nTon tour : ${trigger}`
      : trigger;

    const response = await this.client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });

    const content = response.content[0].type === "text" ? response.content[0].text : "";

    this.history.push({ agent: agentName, content, timestamp: new Date() });
    return content;
  }

  getHistory(): ConversationMessage[] {
    return this.history;
  }
}

// Usage — Revue collaborative PO + QA
const convo = new ClaudeMultiAgentConversation();
await convo.addMessage("PO-SCRUM", PO_PROMPT, `Rédige l'US pour : ${feature}`);
await convo.addMessage("QA-AGILE", QA_PROMPT, "Critique cette US et propose des améliorations.");
await convo.addMessage("PO-SCRUM", PO_PROMPT, "Intègre les retours QA et produis la version finale.");
```

## Quand utiliser quel pattern

```
PATTERN            QUAND L'UTILISER
──────────────────────────────────────────────────────────────────
State Graph        Workflows avec conditions et boucles
                   Ex : validation → correction → revalidation

Crew / Équipe      Tâches séquentielles avec rôles distincts
                   Ex : BA → PO → QA → Chef de Projet

Conversation       Collaboration itérative entre 2-3 agents
                   Ex : PO + QA qui se challengent mutuellement

Scatter/Gather     Même tâche sur N contextes en parallèle
                   Ex : analyser 5 user stories simultanément
```

## Livrables
- Implémentation State Graph native Claude (TypeScript)
- Implémentation Crew pattern native Claude
- Implémentation multi-turn conversation
- Guide de sélection du pattern selon le cas d'usage

## Format de sortie
Précise : pattern souhaité (graph / crew / conversation), agents impliqués, conditions de branchement (si graph), langage (TypeScript / Python).
