# Skill — Cloud IA (AWS Bedrock · Azure OpenAI · GCP Vertex AI)
> Certifications : AWS MLS-C01 · Azure AI-102 · Google Professional ML Engineer

## Objectif
Choisir, configurer et optimiser un provider cloud IA selon les besoins du projet.

## AWS Bedrock
- **Modèles dispo** : Claude 3/4, Llama 3, Mistral, Titan, Cohere
- **Points forts** : multi-modèles, IAM natif, VPC privé, audit CloudTrail
- **Services clés** :
  - Bedrock Agents : agents managés avec tools et RAG
  - Knowledge Bases : RAG managé (S3 + OpenSearch)
  - Guardrails : filtres de contenu configurables
- **Pricing** : à la requête (input/output tokens)

## Azure OpenAI Service
- **Modèles dispo** : GPT-4o, GPT-4 Turbo, DALL-E 3, Whisper, Claude (preview)
- **Points forts** : conformité enterprise, RGPD EU, SLA Microsoft, Active Directory
- **Services clés** :
  - Azure AI Studio : playground + déploiement
  - Prompt Flow : orchestration visuelle de pipelines LLM
  - Content Safety : modération de contenu
- **Idéal pour** : environnements Microsoft, secteur public européen

## GCP Vertex AI
- **Modèles dispo** : Gemini 2.0, Gemini Flash, Llama 3, Claude (via Model Garden)
- **Points forts** : Gemini natif, MLOps intégré (Pipelines, Feature Store)
- **Services clés** :
  - Vertex AI Agent Builder : agents RAG no-code
  - Model Garden : catalogue de 150+ modèles
  - Grounding : ancrage sur Google Search ou données privées
- **Idéal pour** : projets multimodaux, intégration Google Workspace

## Comparatif décision rapide
| Critère | AWS Bedrock | Azure OpenAI | GCP Vertex |
|---|---|---|---|
| Multi-modèles | ✓✓✓ | ✓ | ✓✓ |
| Conformité EU | ✓✓ | ✓✓✓ | ✓✓ |
| MLOps intégré | ✓✓ | ✓✓ | ✓✓✓ |
| Facilité démarrage | ✓✓ | ✓✓✓ | ✓✓ |
| Coût | Moyen | Élevé | Moyen |

## Livrables
- Comparatif des providers selon les critères du projet
- Architecture d'intégration cloud IA
- Estimation des coûts mensuels (tokens × volume)
- Checklist conformité RGPD / AI Act par provider

## Format de sortie
Précise : stack cloud actuelle · contraintes RGPD · volume de requêtes estimé · budget mensuel · modèles souhaités
