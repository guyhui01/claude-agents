# Skill — Multi-Agent Architecture
> Certifications: Anthropic Claude Code · AWS MLS-C01

## Objective
Design a coherent, maintainable and scalable multi-agent system.

## Multi-agent topologies

### Hierarchical (Supervisor)
```
         Orchestrator
        /       |       \
   Agent A   Agent B   Agent C
  (search)  (analyze)  (write)
```
- A master agent decomposes and delegates
- Collects and synthesizes the results
- Ideal: complex sequential workflows

### Collaborative (Peer-to-Peer)
```
Agent A  ←→  Agent B  ←→  Agent C
```
- Agents communicate directly
- No fixed hierarchy
- Ideal: brainstorming, multi-perspective code review

### Specialized (Expert Routing)
```
Router → [Expert Agent 1 | Expert Agent 2 | Expert Agent 3]
```
- Each agent is a domain expert
- The router dispatches based on the request's nature
- Ideal: multi-domain customer support

## Design principles

### Single Responsibility
- One agent = one clear responsibility
- Too many tools = LLM confusion

### Contractual interfaces
- Typed inputs/outputs between agents (Pydantic)
- Standardized message format

### Human-in-the-loop
- Identify the human validation points
- Interrupts before irreversible actions (sending email, modifying DB)

### State Management
- Shared state (common memory) vs. message passing
- LangGraph: StateGraph for typed shared state

## Multi-agent architecture checklist
- [ ] Each agent's responsibility defined
- [ ] Typed input/output interfaces
- [ ] Human-in-the-loop points identified
- [ ] Error handling and fallbacks planned
- [ ] Estimated cost (tokens × agents × calls)
- [ ] Estimated latency (sequential vs. parallel calls)
- [ ] Checkpointing for recovery after an error (LangGraph SqliteSaver / PostgresSaver)

## Example: LangGraph StateGraph with a human-in-the-loop interrupt

```python
from typing_extensions import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_anthropic import ChatAnthropic
from pydantic import BaseModel, Field

# 1. Typed shared state between agents
class TripState(TypedDict):
    request: str
    search_results: list
    draft_plan: str
    user_approved: bool

# 2. Input/output contracts (Pydantic)
class SearchOutput(BaseModel):
    destinations: list[str] = Field(min_length=1, max_length=5)
    estimated_budget_eur: int

llm = ChatAnthropic(model="claude-opus-4-8")

# 3. Agent nodes
def search_agent(state: TripState) -> dict:
    structured = llm.with_structured_output(SearchOutput)
    result = structured.invoke(f"Propose 3 destinations for: {state['request']}")
    return {"search_results": result.destinations}

def planner_agent(state: TripState) -> dict:
    plan = llm.invoke(f"Create a detailed plan for: {state['search_results']}")
    return {"draft_plan": plan.content}

def human_review(state: TripState) -> dict:
    # Interrupt before an irreversible action (booking)
    # LangGraph interrupts execution here, waits for human input
    return {}

def booker_agent(state: TripState) -> dict:
    if not state["user_approved"]:
        return {"draft_plan": "Cancelled by the user"}
    # ... booking API call
    return {}

# 4. Graph with checkpointing
checkpointer = SqliteSaver.from_conn_string("checkpoints.db")
graph = StateGraph(TripState)
graph.add_node("search", search_agent)
graph.add_node("plan", planner_agent)
graph.add_node("review", human_review)
graph.add_node("book", booker_agent)
graph.add_edge(START, "search")
graph.add_edge("search", "plan")
graph.add_edge("plan", "review")
graph.add_edge("review", "book")  # interrupted before this transition
graph.add_edge("book", END)

app = graph.compile(checkpointer=checkpointer, interrupt_before=["book"])

# 5. Execution with possible resume
config = {"configurable": {"thread_id": "trip-42"}}
app.invoke({"request": "Weekend in Lisbon, €800"}, config)
# → stops at 'review', state persisted in SQLite

# Resume with user validation
app.update_state(config, {"user_approved": True})
app.invoke(None, config)
```

## Deliverables
- Architecture diagram (Mermaid)
- Definition of each agent (role, tools, LLM)
- Inter-agent communication schema
- Cost and latency estimate

## Output format
Specify: use case · expected number of agents · framework (LangGraph, CrewAI, SDK) · constraints
