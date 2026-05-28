# Skill — Architecture Multi-Agents
> Certifications : Anthropic Claude Code · AWS MLS-C01

## Objectif
Concevoir un système multi-agents cohérent, maintenable et scalable.

## Topologies multi-agents

### Hiérarchique (Supervisor)
```
         Orchestrateur
        /       |       \
   Agent A   Agent B   Agent C
  (search)  (analyse)  (rédige)
```
- Un agent maître décompose et délègue
- Collecte et synthétise les résultats
- Idéal : workflows séquentiels complexes

### Collaboratif (Peer-to-Peer)
```
Agent A  ←→  Agent B  ←→  Agent C
```
- Les agents communiquent directement
- Pas de hiérarchie fixe
- Idéal : brainstorming, revue de code multi-perspectives

### Spécialisé (Expert Routing)
```
Router → [Agent Expert 1 | Agent Expert 2 | Agent Expert 3]
```
- Chaque agent est expert d'un domaine
- Le router dirige selon la nature de la requête
- Idéal : support client multi-domaines

## Principes de design

### Single Responsibility
- Un agent = une responsabilité claire
- Trop de tools = confusion du LLM

### Interfaces contractuelles
- Inputs/outputs typés entre agents (Pydantic)
- Format de message standardisé

### Human-in-the-loop
- Identifier les points de validation humaine
- Interruptions avant actions irréversibles (envoi email, modification DB)

### State Management
- Shared state (mémoire commune) vs. message passing
- LangGraph : StateGraph pour état partagé typé

## Checklist architecture multi-agents
- [ ] Responsabilité de chaque agent définie
- [ ] Interfaces input/output typées
- [ ] Points human-in-the-loop identifiés
- [ ] Gestion des erreurs et fallbacks prévus
- [ ] Coût estimé (tokens × agents × appels)
- [ ] Latence estimée (appels séquentiels vs. parallèles)
- [ ] Checkpointing pour reprise après erreur (LangGraph SqliteSaver / PostgresSaver)

## Exemple : StateGraph LangGraph avec interruption human-in-the-loop

```python
from typing_extensions import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_anthropic import ChatAnthropic
from pydantic import BaseModel, Field

# 1. État partagé typé entre agents
class TripState(TypedDict):
    request: str
    search_results: list
    draft_plan: str
    user_approved: bool

# 2. Contrats input/output (Pydantic)
class SearchOutput(BaseModel):
    destinations: list[str] = Field(min_length=1, max_length=5)
    estimated_budget_eur: int

llm = ChatAnthropic(model="claude-sonnet-4-6")

# 3. Nœuds agents
def search_agent(state: TripState) -> dict:
    structured = llm.with_structured_output(SearchOutput)
    result = structured.invoke(f"Propose 3 destinations pour : {state['request']}")
    return {"search_results": result.destinations}

def planner_agent(state: TripState) -> dict:
    plan = llm.invoke(f"Crée un plan détaillé pour : {state['search_results']}")
    return {"draft_plan": plan.content}

def human_review(state: TripState) -> dict:
    # Interruption avant action irréversible (réservation)
    # LangGraph interrupt l'exécution ici, attend l'input humain
    return {}

def booker_agent(state: TripState) -> dict:
    if not state["user_approved"]:
        return {"draft_plan": "Annulé par l'utilisateur"}
    # ... appel API réservation
    return {}

# 4. Graphe avec checkpointing
checkpointer = SqliteSaver.from_conn_string("checkpoints.db")
graph = StateGraph(TripState)
graph.add_node("search", search_agent)
graph.add_node("plan", planner_agent)
graph.add_node("review", human_review)
graph.add_node("book", booker_agent)
graph.add_edge(START, "search")
graph.add_edge("search", "plan")
graph.add_edge("plan", "review")
graph.add_edge("review", "book")  # interrompu avant cette transition
graph.add_edge("book", END)

app = graph.compile(checkpointer=checkpointer, interrupt_before=["book"])

# 5. Exécution avec reprise possible
config = {"configurable": {"thread_id": "trip-42"}}
app.invoke({"request": "Weekend Lisbonne, 800€"}, config)
# → s'arrête à 'review', état persisté en SQLite

# Reprise avec validation utilisateur
app.update_state(config, {"user_approved": True})
app.invoke(None, config)
```

## Livrables
- Diagramme d'architecture (Mermaid)
- Définition de chaque agent (rôle, tools, LLM)
- Schéma de communication inter-agents
- Estimation coût et latence

## Format de sortie
Précise : cas d'usage · nombre d'agents envisagé · framework (LangGraph, CrewAI, SDK) · contraintes
