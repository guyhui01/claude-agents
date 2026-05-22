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

## Livrables
- Diagramme d'architecture (Mermaid)
- Définition de chaque agent (rôle, tools, LLM)
- Schéma de communication inter-agents
- Estimation coût et latence

## Format de sortie
Précise : cas d'usage · nombre d'agents envisagé · framework (LangGraph, CrewAI, SDK) · contraintes
