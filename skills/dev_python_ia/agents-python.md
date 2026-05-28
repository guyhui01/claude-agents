# Skill — Agents Python (Tool Use, Memory, ReAct)
> Certifications : DeepLearning.AI AI Agents in LangGraph · Anthropic Claude Code

## Objectif
Implémenter des agents autonomes capables d'utiliser des outils, de mémoriser le contexte et de raisonner.

## Tool Use avec Anthropic SDK
```python
import anthropic
import json

tools = [{
    "name": "search_documents",
    "description": "Recherche dans la base documentaire",
    "input_schema": {
        "type": "object",
        "properties": {"query": {"type": "string"}, "limit": {"type": "integer", "default": 5}},
        "required": ["query"]
    }
}]

def run_agent(user_message: str) -> str:
    messages = [{"role": "user", "content": user_message}]
    while True:
        response = client.messages.create(model="claude-opus-4-7",
            max_tokens=4096, tools=tools, messages=messages)
        if response.stop_reason == "end_turn":
            return response.content[0].text
        # Exécuter les tools demandés
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
messages = []  # Liste de messages en cours de session
```

### Long-term (persistance)
```python
# Avec LangGraph + SQLite checkpointer
from langgraph.checkpoint.sqlite import SqliteSaver
memory = SqliteSaver.from_conn_string("./agent_memory.db")
```

### Semantic memory (RAG sur historique)
```python
# Stocker les résumés de conversations passées dans une vector DB
# Récupérer les souvenirs pertinents à chaque nouvelle session
```

## Pattern ReAct complet (LangGraph) — version "boîte noire"

```python
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_anthropic import ChatAnthropic

memory = SqliteSaver.from_conn_string("./agent_memory.db")

agent = create_react_agent(
    model=ChatAnthropic(model="claude-opus-4-7"),
    tools=[search_tool, calculator_tool, write_file_tool],
    checkpointer=memory,
)

result = agent.invoke(
    {"messages": [{"role": "user", "content": user_input}]},
    config={"configurable": {"thread_id": "session_123"}},
)
```

## Pattern ReAct **déplié** (LangGraph) — pour comprendre / customiser

`create_react_agent` masque la mécanique. Le voici à la main :

```python
from typing_extensions import TypedDict
from typing import Annotated, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.prebuilt import ToolNode
from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool

# 1. État accumulé : la liste des messages avec reducer
class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

# 2. Définir des tools typés
@tool
def search_documents(query: str, limit: int = 5) -> str:
    """Recherche dans la base documentaire."""
    return f"Trouvé 3 docs pour '{query}'"

@tool
def calculator(expression: str) -> str:
    """Évalue une expression mathématique."""
    return str(eval(expression, {"__builtins__": {}}))

tools = [search_documents, calculator]
llm_with_tools = ChatAnthropic(model="claude-opus-4-7").bind_tools(tools)

# 3. Nœud "agent" : le LLM décide (réponse finale OU appel de tool)
def agent_node(state: AgentState) -> dict:
    response = llm_with_tools.invoke(state["messages"])
    return {"messages": [response]}

# 4. Nœud "tools" : exécute les tools demandés par le LLM
tool_node = ToolNode(tools)

# 5. Routing : tool_calls dans le dernier message ? → tools, sinon → END
def should_continue(state: AgentState) -> Literal["tools", END]:
    last = state["messages"][-1]
    if hasattr(last, "tool_calls") and last.tool_calls:
        return "tools"
    return END

# 6. Construire le graphe ReAct (boucle agent ↔ tools jusqu'à end_turn)
graph = StateGraph(AgentState)
graph.add_node("agent", agent_node)
graph.add_node("tools", tool_node)
graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_continue)
graph.add_edge("tools", "agent")  # ← la boucle ReAct

# 7. Checkpointing SQLite : reprise après crash, multi-thread, audit
checkpointer = SqliteSaver.from_conn_string("./agent_memory.db")
app = graph.compile(checkpointer=checkpointer)

# 8. Exécution avec thread_id pour persister la conversation
config = {"configurable": {"thread_id": "session_123"}}
result = app.invoke(
    {"messages": [{"role": "user", "content": "Cherche 'AI Act' et calcule 2024-1995"}]},
    config=config,
)
for msg in result["messages"]:
    print(f"[{msg.type}] {msg.content[:200]}")

# Reprise dans une autre exécution : LangGraph récupère l'état persisté
result2 = app.invoke(
    {"messages": [{"role": "user", "content": "Et le détail de l'article 5 ?"}]},
    config=config,  # même thread_id → contexte conservé
)
```

## Livrables
- Agent fonctionnel avec tools définis
- Gestion de la mémoire adaptée au cas d'usage
- Tests des tools individuellement
- Logs des raisonnements agent (tracing LangSmith)

## Format de sortie
Précise : tools disponibles · besoin de mémoire (court/long terme) · framework (Anthropic SDK, LangGraph) · cas d'usage
