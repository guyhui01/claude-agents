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
        response = client.messages.create(model="claude-opus-4-5",
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

## Pattern ReAct complet (LangGraph)
```python
from langgraph.prebuilt import create_react_agent

agent = create_react_agent(
    model=ChatAnthropic(model="claude-opus-4-5"),
    tools=[search_tool, calculator_tool, write_file_tool],
    checkpointer=memory
)

result = await agent.ainvoke(
    {"messages": [HumanMessage(content=user_input)]},
    config={"configurable": {"thread_id": "session_123"}}
)
```

## Livrables
- Agent fonctionnel avec tools définis
- Gestion de la mémoire adaptée au cas d'usage
- Tests des tools individuellement
- Logs des raisonnements agent (tracing LangSmith)

## Format de sortie
Précise : tools disponibles · besoin de mémoire (court/long terme) · framework (Anthropic SDK, LangGraph) · cas d'usage
