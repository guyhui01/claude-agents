# Skill — Design Patterns d'un Système Agentique
> Certifications : AWS MLS-C01 · Google Professional ML Engineer

## Objectif
Concevoir l'architecture d'un système d'agents IA en choisissant les bons patterns selon le cas d'usage.

## Patterns fondamentaux (2026)

### 1. ReAct (Reasoning + Acting)
- L'agent raisonne (Thought) → agit (Action) → observe (Observation) → boucle
- Idéal pour : tâches séquentielles avec outils externes

### 2. Routing
- Un agent orchestrateur dirige vers l'agent spécialisé selon la requête
- Idéal pour : systèmes multi-domaines, chatbots complexes

### 3. Parallelism
- Plusieurs agents exécutent des tâches simultanément
- Idéal pour : analyse multi-sources, génération multi-variantes

### 4. Reflection
- Un agent critique et améliore son propre output
- Idéal pour : génération de code, rédaction, révision qualité

### 5. Plan & Execute
- Phase 1 : planification (décomposition du problème)
- Phase 2 : exécution pas à pas du plan
- Idéal pour : tâches longues et complexes

### 6. Multi-Agent Supervisor
- Un agent superviseur coordonne des sous-agents spécialisés
- Idéal pour : workflows complexes (recherche + analyse + rédaction)

## Critères de choix du pattern
| Critère | Pattern recommandé |
|---|---|
| Tâche séquentielle simple | ReAct |
| Domaines multiples | Routing |
| Rapidité / parallélisation | Parallelism |
| Qualité critique | Reflection |
| Tâche longue décomposable | Plan & Execute |
| Équipe d'agents spécialisés | Multi-Agent Supervisor |

## Livrables
- Diagramme d'architecture (Mermaid)
- Choix de pattern justifié (trade-offs)
- Liste des tools et agents nécessaires

## Format de sortie
Précise : cas d'usage · contraintes (latence, coût, qualité) · LLM disponible
