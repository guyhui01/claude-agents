# Skill — AI Stack Selection
> Certifications: AWS AIF-C01 · Azure AI-102 · Google Professional ML Engineer

## Objective
Choose the AI technical stack that fits the project by weighing make vs. buy trade-offs.

## Decision framework

### 1. LLM — Which model?
| Criterion | Cloud (API) | On-premise / Self-hosted |
|---|---|---|
| Ease | ✓✓✓ | ✗ |
| Cost at scale | ✗ | ✓✓ |
| Privacy / GDPR | Risk | ✓✓✓ |
| Performance | ✓✓✓ | Depends on the model |

**Model families** (versions move fast — check each provider's current line-up):
- Frontier: Anthropic Claude · OpenAI GPT · Google Gemini
- Open-weight: Meta Llama · Mistral · Qwen · DeepSeek

### 2. Orchestration — Which agent framework?
| Framework | Strengths | Ideal for |
|---|---|---|
| LangGraph | Stateful graphs, cycles, human-in-the-loop | Complex Python agents |
| Claude Agent SDK | Native Anthropic, native MCP | Claude-first projects |
| CrewAI | Role-based, simple to configure | Agent teams |
| AutoGen | Conversational multi-agent | Research, prototyping |
| Semantic Kernel | Enterprise .NET + Python | Microsoft context |

### 3. RAG — Which Vector DB?
| DB | Strengths | Hosting |
|---|---|---|
| pgvector | Built into PostgreSQL | Self-hosted / cloud |
| Pinecone | Managed, performant | SaaS |
| Qdrant | Open source, performant | Self-hosted / cloud |
| Weaviate | Multimodal, GraphQL | Self-hosted / cloud |

### 4. AI cloud — Which provider?
| Provider | Strengths | Available models |
|---|---|---|
| AWS Bedrock | Multi-model access, robust IAM | Claude, Llama, Mistral |
| Azure OpenAI | Enterprise compliance, EU GDPR | GPT, Claude |
| GCP Vertex AI | Native Gemini, integrated MLOps | Gemini, Llama, Claude |

## Quick decision matrix
```
Limited budget + critical GDPR  → Llama + Qdrant self-hosted + LangGraph
Speed + max quality             → Claude API + LangGraph + Pinecone
Microsoft enterprise            → Azure OpenAI + Semantic Kernel
Full Google                     → Gemini + Vertex AI + LangGraph
```

## Deliverables
- Documented Architecture Decision Record (ADR)
- Option comparison with scoring
- Monthly cost estimate per option

## Output format
Specify: use case · budget · GDPR constraints · existing stack · technical team
