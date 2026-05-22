# Skill — LangChain & LangGraph
> Certifications : DeepLearning.AI LangChain · DeepLearning.AI AI Agents in LangGraph

## Objectif
Construire des chaînes LLM et des agents stateful avec LangChain et LangGraph.

## LangChain — Concepts clés
```python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Chain basique (LCEL)
chain = prompt | llm | StrOutputParser()
result = await chain.ainvoke({"input": "Bonjour"})
```

### Composants principaux
- **LCEL** (LangChain Expression Language) : pipe `|` pour chaîner
- **Runnables** : composants enchaînables (prompt, llm, parser, retriever)
- **Memory** : ConversationBufferMemory, ConversationSummaryMemory
- **Tools** : @tool decorator, StructuredTool, BaseTool
- **Retrievers** : VectorStoreRetriever, MultiQueryRetriever, EnsembleRetriever

## LangGraph — Agents Stateful
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

### Concepts LangGraph
- **StateGraph** : graphe avec état partagé typé
- **Nodes** : fonctions Python (agent, tools, retriever...)
- **Edges** : transitions (conditionnelles ou fixes)
- **Checkpointer** : persistance de l'état (SQLite, PostgreSQL)
- **Human-in-the-loop** : `interrupt_before` / `interrupt_after`
- **Subgraphs** : graphes imbriqués pour multi-agents

## Pattern ReAct avec LangGraph
```
START → Agent → [Tool appelé ?] → Tools → Agent → ... → END
```

## Livrables
- Chain ou graph LangGraph fonctionnel
- State typé (TypedDict ou Pydantic)
- Tests des nodes individuels
- Schéma du graph (Mermaid)

## Format de sortie
Précise : pattern agent souhaité · tools disponibles · LLM · besoin de persistance (checkpointer) · version LangGraph
