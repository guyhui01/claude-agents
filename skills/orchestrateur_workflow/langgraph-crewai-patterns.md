# Skill — LangGraph, CrewAI, and AutoGen Patterns for Claude
> Certifications: Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objective
Translate the multi-agent orchestration patterns of popular frameworks (LangGraph, CrewAI, AutoGen) into native Claude implementations — to leverage the best architectures without depending on third-party frameworks.

## Framework comparison

```
FRAMEWORK    PARADIGM           STRENGTHS              CLAUDE MAPPING
──────────────────────────────────────────────────────────────────────────
LangGraph    Flow graph         Shared state, cycles   Prompt chaining + state dict
CrewAI       Team of roles      Agent collaboration    Specialized system prompts
AutoGen      Conversation       Multi-turn, code exec  Message history + tool use
LlamaIndex   RAG + agents       Indexing, retrieval    Native Anthropic RAG
```

## LangGraph pattern — Agent flow graph

### Original concept (Python LangGraph)
```python
# Original LangGraph
from langgraph.graph import StateGraph, END

workflow = StateGraph(AgentState)
workflow.add_node("analyst", run_analyst)
workflow.add_node("po_scrum", run_po_scrum)
workflow.add_edge("analyst", "po_scrum")
workflow.add_edge("po_scrum", END)
```

### Native Claude equivalent

```typescript
// Native implementation — State Graph with Claude
interface WorkflowState {
  context: string;
  currentNode: string;
  outputs: Record<string, string>;
  history: Array<{ node: string; output: string }>;
  status: "running" | "completed" | "error";
}

type NodeFunction = (state: WorkflowState) => Promise<WorkflowState>;
type EdgeCondition = (state: WorkflowState) => string; // returns the name of the next node

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
      if (!nodeFn) throw new Error(`Unknown node: ${state.currentNode}`);

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

// Usage — WF-001 AI Product Scoping
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

## CrewAI pattern — Team of collaborative roles

### Original concept (Python CrewAI)
```python
# Original CrewAI
from crewai import Agent, Task, Crew

analyst = Agent(role="Business Analyst", goal="Analyze the brief")
po = Agent(role="Product Owner", goal="Write the US")
crew = Crew(agents=[analyst, po], tasks=[task1, task2], verbose=True)
```

### Native Claude equivalent

```typescript
// Native implementation — Crew pattern with Claude
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
    if (!agent) throw new Error(`Unknown agent: ${task.assignedAgent}`);

    const contextFromDeps = task.dependsOn
      ?.map((dep) => `[${dep}] : ${previousOutputs[dep]}`)
      .join("\n\n") ?? "";

    const userMessage = `
## Your mission
${task.description}

## Context from previous steps
${contextFromDeps || "No previous step."}

## Expected output
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
  { name: "BUSINESS-ANALYST", role: "Business Analyst", goal: "Analyze the brief", systemPrompt: BA_PROMPT },
  { name: "PO-SCRUM", role: "Product Owner", goal: "Write the US", systemPrompt: PO_PROMPT },
]);

const results = await crew.kickoff([
  { id: "analyse", description: "Analyze the brief", assignedAgent: "BUSINESS-ANALYST", expectedOutput: "Needs map" },
  { id: "user_stories", description: "Write 8 US", assignedAgent: "PO-SCRUM", expectedOutput: "8 US in INVEST format", dependsOn: ["analyse"] },
]);
```

## AutoGen pattern — Multi-agent conversation

### Native Claude equivalent

```typescript
// Native implementation — Multi-turn conversation between agents
interface ConversationMessage {
  agent: string;
  content: string;
  timestamp: Date;
}

class ClaudeMultiAgentConversation {
  private history: ConversationMessage[] = [];
  private client = new Anthropic();

  async addMessage(agentName: string, systemPrompt: string, trigger: string): Promise<string> {
    // Build the conversation context for this agent
    const conversationContext = this.history
      .map((m) => `[${m.agent}] : ${m.content}`)
      .join("\n\n");

    const userMessage = conversationContext
      ? `Here is the conversation so far:\n${conversationContext}\n\nYour turn: ${trigger}`
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

// Usage — Collaborative PO + QA review
const convo = new ClaudeMultiAgentConversation();
await convo.addMessage("PO-SCRUM", PO_PROMPT, `Write the US for: ${feature}`);
await convo.addMessage("QA-AGILE", QA_PROMPT, "Critique this US and suggest improvements.");
await convo.addMessage("PO-SCRUM", PO_PROMPT, "Incorporate the QA feedback and produce the final version.");
```

## When to use which pattern

```
PATTERN            WHEN TO USE IT
──────────────────────────────────────────────────────────────────
State Graph        Workflows with conditions and loops
                   E.g.: validation → correction → revalidation

Crew / Team        Sequential tasks with distinct roles
                   E.g.: BA → PO → QA → Project Manager

Conversation       Iterative collaboration between 2-3 agents
                   E.g.: PO + QA challenging each other

Scatter/Gather     Same task across N contexts in parallel
                   E.g.: analyze 5 user stories simultaneously
```

## Deliverables
- Native Claude State Graph implementation (TypeScript)
- Native Claude Crew pattern implementation
- Multi-turn conversation implementation
- Pattern-selection guide by use case

## Output format
Specify: the desired pattern (graph / crew / conversation), the agents involved, branching conditions (if graph), the language (TypeScript / Python).

## Anti-patterns
- ❌ **Frameworks cited without a version** (LangGraph/CrewAI/AutoGen/LlamaIndex): API breakage → pin the versions
- ❌ **"Educational" code mistaken for production**: these native Claude patterns contain stubs → note the scope (done in the skill ✓)
- ❌ **Rewriting from scratch what the framework provides**: needless maintenance → choose framework vs. native per need
- ❌ **Unanticipated vendor lock-in**: costly migration → abstract the orchestration layer
- ❌ **Multiplying frameworks** in the same project: complexity → one per use case

## Sources
- **LangGraph** — langchain-ai.github.io/langgraph · **CrewAI** — docs.crewai.com · **AutoGen** (Microsoft) — microsoft.github.io/autogen · **LlamaIndex** — docs.llamaindex.ai
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — native patterns (often enough vs. a framework) · SDK `@anthropic-ai/sdk`

## See also
- [`claude-api-integration.md`](claude-api-integration.md) — complete Anthropic SDK implementation
- [`mcp-orchestration.md`](mcp-orchestration.md) — multi-agent orchestration via MCP
- [`workflow-design.md`](workflow-design.md) — choosing the orchestration pattern
- [`parallel-orchestration.md`](parallel-orchestration.md) — parallel agent execution
