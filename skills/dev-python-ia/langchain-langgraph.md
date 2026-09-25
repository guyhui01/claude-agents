# Skill — LangChain & LangGraph
> Certifications: DeepLearning.AI LangChain · DeepLearning.AI AI Agents in LangGraph

## Objective
Build LLM chains and stateful agents with LangChain and LangGraph.

## LangChain — Key concepts
```python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Basic chain (LCEL)
chain = prompt | llm | StrOutputParser()
result = await chain.ainvoke({"input": "Hello"})
```

### Main components
- **LCEL** (LangChain Expression Language): pipe `|` to chain components
- **Runnables**: chainable components (prompt, llm, parser, retriever)
- **Memory**: ConversationBufferMemory, ConversationSummaryMemory
- **Tools**: @tool decorator, StructuredTool, BaseTool
- **Retrievers**: VectorStoreRetriever, MultiQueryRetriever, EnsembleRetriever

## LangGraph — Stateful agents
```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class AgentState(TypedDict):
    messages: list
    next_step: str

graph = StateGraph(AgentState)
graph.add_node("agent", agent_node)
graph.add_node("tools", tool_node)
graph.add_conditional_edges("agent", should_continue, {"tools": "tools", "end": END})
```

### LangGraph concepts
- **StateGraph**: graph with a typed shared state
- **Nodes**: Python functions (agent, tools, retriever, ...)
- **Edges**: transitions (conditional or fixed)
- **Checkpointer**: state persistence (SQLite, PostgreSQL)
- **Human-in-the-loop**: `interrupt_before` / `interrupt_after`
- **Subgraphs**: nested graphs for multi-agent setups

## ReAct pattern with LangGraph
```
START → Agent → [Tool called?] → Tools → Agent → ... → END
```

## Deliverables
- Working LangGraph chain or graph
- Typed state (TypedDict or Pydantic)
- Tests for individual nodes
- Graph diagram (Mermaid)

## Output format
Specify: desired agent pattern · available tools · LLM · persistence need (checkpointer) · LangGraph version
