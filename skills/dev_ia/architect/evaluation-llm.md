# Skill — Évaluation LLM & Agents
> Certifications : Google Professional ML Engineer · DeepLearning.AI

## Objectif
Mesurer objectivement la qualité d'un LLM, d'un pipeline RAG ou d'un système agentique.

## Dimensions d'évaluation

### 1. Qualité des réponses LLM
| Métrique | Description | Outil |
|---|---|---|
| **Faithfulness** | La réponse est-elle fidèle aux sources ? | RAGAs, RAGAS |
| **Answer Relevance** | La réponse répond-elle à la question ? | RAGAs |
| **Hallucination Rate** | % de faits inventés | DeepEval, TruLens |
| **Coherence** | Logique interne de la réponse | LangSmith |
| **Toxicity** | Contenu nuisible, biais | Perspective API |

### 2. Évaluation RAG spécifique (RAGAs framework)
- **Context Precision** : le contexte récupéré est-il pertinent ?
- **Context Recall** : toute l'info nécessaire est-elle récupérée ?
- **Answer Faithfulness** : la réponse se base-t-elle sur le contexte ?
- **Answer Relevance** : la réponse est-elle utile à la question ?

### 3. Évaluation agents
- **Task Completion Rate** : % de tâches complétées avec succès
- **Steps Efficiency** : nombre d'étapes pour compléter la tâche
- **Tool Usage Accuracy** : bons tools appelés avec bons paramètres
- **Human Escalation Rate** : % de cas nécessitant intervention humaine

## Benchmarks publics de référence
| Benchmark | Ce qu'il mesure |
|---|---|
| MMLU | Connaissances générales (57 domaines) |
| HumanEval | Génération de code Python |
| MT-Bench | Conversations multi-tours |
| HELM | Évaluation holistique |
| LMSYS Chatbot Arena | Préférences humaines comparatives |

## Outils d'évaluation
- **RAGAs** : évaluation pipelines RAG (Python)
- **DeepEval** : framework de tests LLM (pytest-like)
- **TruLens** : monitoring et évaluation agents
- **LangSmith** : tracing et évaluation LangChain
- **Promptfoo** : tests et comparaison de prompts

## Livrables
- Rapport d'évaluation avec scores par dimension
- Golden dataset de référence (50-200 Q/A)
- Tableau de bord métriques en continu
- Recommandations d'amélioration (prompt, RAG, modèle)

## Format de sortie
Précise : type de système (LLM seul, RAG, agent) · cas d'usage · métriques prioritaires · fréquence d'évaluation
