# Skill — Choix de Stack IA
> Certifications : AWS AIF-C01 · Azure AI-102 · Google Professional ML Engineer

## Objectif
Choisir la stack technique IA adaptée au projet en évaluant les trade-offs make vs. buy.

## Framework de décision

### 1. LLM — Quel modèle ?
| Critère | Cloud (API) | On-premise / Self-hosted |
|---|---|---|
| Facilité | ✓✓✓ | ✗ |
| Coût à grande échelle | ✗ | ✓✓ |
| Privacy / RGPD | Risque | ✓✓✓ |
| Performance | ✓✓✓ | Dépend du modèle |

**Modèles 2026 :**
- Frontier : Claude 4 (Anthropic) · GPT-4o (OpenAI) · Gemini 2.0 (Google)
- Open source : Llama 3.3 · Mistral Large · Qwen 2.5 · DeepSeek V3

### 2. Orchestration — Quel framework agent ?
| Framework | Points forts | Idéal pour |
|---|---|---|
| LangGraph | Graphes stateful, cycles, human-in-the-loop | Agents complexes Python |
| Claude Agent SDK | Natif Anthropic, MCP natif | Projets Claude-first |
| CrewAI | Role-based, simple à configurer | Équipes d'agents |
| AutoGen | Multi-agent conversationnel | Recherche, prototypage |
| Semantic Kernel | Enterprise .NET + Python | Contexte Microsoft |

### 3. RAG — Quelle Vector DB ?
| DB | Points forts | Hébergement |
|---|---|---|
| pgvector | Intégré PostgreSQL | Self-hosted / cloud |
| Pinecone | Managé, performant | SaaS |
| Qdrant | Open source, performant | Self-hosted / cloud |
| Weaviate | Multimodal, GraphQL | Self-hosted / cloud |

### 4. Cloud IA — Quel provider ?
| Provider | Points forts | Modèles dispo |
|---|---|---|
| AWS Bedrock | Accès multi-modèles, IAM robuste | Claude, Llama, Mistral |
| Azure OpenAI | Conformité enterprise, RGPD EU | GPT-4o, Claude |
| GCP Vertex AI | Gemini natif, MLOps intégré | Gemini, Llama, Claude |

## Matrice de décision rapide
```
Budget limité + RGPD critique  → Llama 3 + Qdrant self-hosted + LangGraph
Rapidité + qualité max         → Claude 4 API + LangGraph + Pinecone
Enterprise Microsoft           → Azure OpenAI + Semantic Kernel
Full Google                    → Gemini + Vertex AI + LangGraph
```

## Livrables
- Architecture Decision Record (ADR) documenté
- Comparatif des options avec scoring
- Estimation du coût mensuel par option

## Format de sortie
Précise : cas d'usage · budget · contraintes RGPD · stack existante · équipe technique
