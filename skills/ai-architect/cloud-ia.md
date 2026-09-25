# Skill — AI Cloud (AWS Bedrock · Azure OpenAI · GCP Vertex AI)
> Certifications: AWS MLS-C01 · Azure AI-102 · Google Professional ML Engineer

## Objective
Choose, configure and optimize an AI cloud provider based on the project's needs.

## AWS Bedrock
- **Available models**: Anthropic Claude, Meta Llama, Mistral, Amazon models, Cohere — check the Bedrock model catalog for current versions
- **Strengths**: multi-model, native IAM, private VPC, CloudTrail audit
- **Key services**:
  - Bedrock Agents: managed agents with tools and RAG
  - Knowledge Bases: managed RAG (S3 + OpenSearch)
  - Guardrails: configurable content filters
- **Pricing**: per request (input/output tokens)

## Azure OpenAI Service
- **Available models**: OpenAI GPT family, DALL-E, Whisper, Claude — check the Azure model catalog for current versions and regional availability
- **Strengths**: enterprise compliance, EU GDPR, Microsoft SLA, Active Directory
- **Key services**:
  - Azure AI Studio: playground + deployment
  - Prompt Flow: visual orchestration of LLM pipelines
  - Content Safety: content moderation
- **Ideal for**: Microsoft environments, European public sector

## GCP Vertex AI
- **Available models**: Google Gemini (incl. Flash tier), Meta Llama, Claude (via Model Garden) — check Model Garden for current versions
- **Strengths**: native Gemini, integrated MLOps (Pipelines, Feature Store)
- **Key services**:
  - Vertex AI Agent Builder: no-code RAG agents
  - Model Garden: catalog of 150+ models
  - Grounding: grounding on Google Search or private data
- **Ideal for**: multimodal projects, Google Workspace integration

## Quick decision comparison
| Criterion | AWS Bedrock | Azure OpenAI | GCP Vertex |
|---|---|---|---|
| Multi-model | ✓✓✓ | ✓ | ✓✓ |
| EU compliance | ✓✓ | ✓✓✓ | ✓✓ |
| Integrated MLOps | ✓✓ | ✓✓ | ✓✓✓ |
| Ease of getting started | ✓✓ | ✓✓✓ | ✓✓ |
| Cost | Medium | High | Medium |

## Deliverables
- Provider comparison against the project's criteria
- AI cloud integration architecture
- Monthly cost estimate (tokens × volume)
- GDPR / AI Act compliance checklist per provider

## Output format
Specify: current cloud stack · GDPR constraints · estimated request volume · monthly budget · desired models
