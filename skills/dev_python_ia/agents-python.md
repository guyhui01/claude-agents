# Skill — Python Agents (Tool Use, Memory, ReAct)
> Certifications: DeepLearning.AI AI Agents in LangGraph · Anthropic Claude Code

## Objective
Implement autonomous agents able to use tools, retain context, and reason.

## Tool Use with the Anthropic SDK
```python
import anthropic
import json

tools = [{
    "name": "search_documents",
    "description": "Search the document base",
    "input_schema": {
        "type": "object",
        "properties": {"query": {"type": "string"}, "limit": {"type": "integer", "default": 5}},
        "required": ["query"]
    }
}]

def run_agent(user_message: str) -> str:
    messages = [{"role": "user", "content": user_message}]
    while True:
        response = client.messages.create(model="claude-opus-4-8",
            max_tokens=4096, tools=tools, messages=messages)
        if response.stop_reason == "end_turn":
            return response.content[0].text
        # Execute the requested tools
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                tool_results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(result)})
        messages += [{"role": "assistant", "content": response.content},
                     {"role": "user", "content": tool_results}]
```

## Memory patterns

### Short-term (conversation)
```python
messages = []  # List of messages within the current session
```

### Long-term (persistence)
```python
# With LangGraph + SQLite checkpointer
from langgraph.checkpoint.sqlite import SqliteSaver
memory = SqliteSaver.from_conn_string("./agent_memory.db")
```

### Semantic memory (RAG over history)
```python
# Store summaries of past conversations in a vector DB
# Retrieve the relevant memories at each new session
```

## Full ReAct pattern (LangGraph) — "black box" version

```python
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_anthropic import ChatAnthropic

memory = SqliteSaver.from_conn_string("./agent_memory.db")

agent = create_react_agent(
    model=ChatAnthropic(model="claude-opus-4-8"),
    tools=[search_tool, calculator_tool, write_file_tool],
    checkpointer=memory,
)

result = agent.invoke(
    {"messages": [{"role": "user", "content": user_input}]},
    config={"configurable": {"thread_id": "session_123"}},
)
```

## **Unrolled** ReAct pattern (LangGraph) — to understand / customize

`create_react_agent` hides the mechanics. Here it is by hand:

```python
from typing_extensions import TypedDict
from typing import Annotated, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.prebuilt import ToolNode
from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool

# 1. Accumulated state: the message list with a reducer
class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

# 2. Define typed tools
@tool
def search_documents(query: str, limit: int = 5) -> str:
    """Search the document base."""
    return f"Found 3 docs for '{query}'"

@tool
def calculator(expression: str) -> str:
    """Evaluate a math expression."""
    return str(eval(expression, {"__builtins__": {}}))

tools = [search_documents, calculator]
llm_with_tools = ChatAnthropic(model="claude-opus-4-8").bind_tools(tools)

# 3. "agent" node: the LLM decides (final answer OR tool call)
def agent_node(state: AgentState) -> dict:
    response = llm_with_tools.invoke(state["messages"])
    return {"messages": [response]}

# 4. "tools" node: runs the tools requested by the LLM
tool_node = ToolNode(tools)

# 5. Routing: tool_calls in the last message? → tools, otherwise → END
def should_continue(state: AgentState) -> Literal["tools", END]:
    last = state["messages"][-1]
    if hasattr(last, "tool_calls") and last.tool_calls:
        return "tools"
    return END

# 6. Build the ReAct graph (agent ↔ tools loop until end_turn)
graph = StateGraph(AgentState)
graph.add_node("agent", agent_node)
graph.add_node("tools", tool_node)
graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_continue)
graph.add_edge("tools", "agent")  # ← the ReAct loop

# 7. SQLite checkpointing: crash recovery, multi-thread, audit
checkpointer = SqliteSaver.from_conn_string("./agent_memory.db")
app = graph.compile(checkpointer=checkpointer)

# 8. Run with a thread_id to persist the conversation
config = {"configurable": {"thread_id": "session_123"}}
result = app.invoke(
    {"messages": [{"role": "user", "content": "Search 'AI Act' and compute 2024-1995"}]},
    config=config,
)
for msg in result["messages"]:
    print(f"[{msg.type}] {msg.content[:200]}")

# Resume in another run: LangGraph restores the persisted state
result2 = app.invoke(
    {"messages": [{"role": "user", "content": "And the details of article 5?"}]},
    config=config,  # same thread_id → context preserved
)
```

## Deliverables
- Working agent with defined tools
- Memory handling suited to the use case
- Tests for tools individually
- Logs of the agent's reasoning (LangSmith tracing)

## Output format
Specify: available tools · memory need (short/long term) · framework (Anthropic SDK, LangGraph) · use case
