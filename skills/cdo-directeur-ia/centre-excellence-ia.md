# Skill — AI Center of Excellence (AI CoE)

> Certifications: AWS Certified AI Practitioner 2026, Google Cloud Professional ML Engineer, Microsoft AI-102 Azure AI Engineer, Anthropic Prompt Engineering Certification 2026

## Objective

Design and operationalize an AI Center of Excellence (AI CoE): define its organizational structure, roles, missions, governance modes, and the associated performance indicators.

## AI CoE organizational models

### The 4 CoE archetypes

| Model | Description | Suited for | Risks |
|--------|-------------|-------------|---------|
| **Centralized** | A central team builds and deploys all use cases | SMEs, getting started | Bottleneck |
| **Federated** | Central team + relays in each BU | Large groups | Complex coordination |
| **Hybrid (Hub & Spoke)** | Central CoE (standards, platforms) + decentralized AI teams | Mature mid-market | Critical governance |
| **Virtual** | A community of practice with no dedicated team | Early transformation | Lack of resources |

### Recommended Hub & Spoke structure (2026)

```
                    ┌─────────────────────┐
                    │   Central AI CoE    │
                    │  (Hub — Standards)  │
                    └────────┬────────────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
    ┌──────┴──────┐   ┌──────┴──────┐   ┌──────┴──────┐
    │  Finance BU │   │ Marketing BU │   │  Ops BU     │
    │  (Spoke)    │   │  (Spoke)     │   │  (Spoke)    │
    │ 1 AI Lead   │   │ 1 AI Lead    │   │ 1 AI Lead   │
    └─────────────┘   └─────────────┘   └─────────────┘
```

## AI CoE roles and responsibilities

### Typical org chart (mid-market 1000-5000 employees)

```yaml
AI_CoE_Central_Team:
  Head_of_AI / Chief AI Officer:
    missions: ["AI vision", "executive-committee reporting", "Strategic partnerships"]
    profile: "Ex-CDO or VP Engineering + AI expertise"

  AI_Strategy_Lead:
    missions: ["Use-case roadmap", "ROI tracking", "Prioritization"]
    profile: "MBA + 5 years Data/AI"

  ML_Platform_Engineer (x2):
    missions: ["MLOps platform", "Feature store", "LLMOps infra"]
    profile: "Senior MLOps, Kubernetes, Kubeflow/MLflow"

  AI_Ethics_Officer:
    missions: ["Responsible AI framework", "Algorithmic bias", "EU AI Act compliance"]
    profile: "Lawyer + Data Scientist or tech philosopher"

  AI_Enablement_Lead:
    missions: ["Team training", "Community of practice", "Documentation"]
    profile: "AI trainer + Data Scientist"

  Data_Scientists (x3):
    missions: ["Model development", "Proof of concept", "Research"]
    profile: "PhD or MSc ML, Python, PyTorch/TensorFlow"
```

### CoE missions by category

| Category | Missions | Indicators |
|-----------|---------|-------------|
| **Standards & Governance** | Define AI policies, EU AI Act compliance, ethics framework | Compliance rate, # policies published |
| **Platform & Tooling** | Manage ML platform, LLMOps, feature store, model registry | Platform uptime, time-to-deploy |
| **Delivery & Use cases** | Accelerate BU AI projects, code review, best practices | # use cases in production, team NPS |
| **Enablement & Culture** | Training, community, Prompt Engineering Guild | # certified, data-culture score |
| **Innovation & Monitoring** | Research, emerging-tech POCs, publications | # POCs launched, papers read/shared |

## AI CoE governance

### AI use-case validation process

```
BU request
    ↓
[48h screening] — CoE checks feasibility + available data
    ↓
[Use-case scoring] — Impact, feasibility, risk, strategic alignment
    ↓ Score ≥ 3.5/5
[POC launch] — 4-8 weeks, budget capped at €50k
    ↓ POC validated
[Move to production] — MLOps pipeline, monitoring, SLA
    ↓
[ROI measurement] — T+3 months, T+6 months, T+12 months
```

### AI CoE dashboard — KPIs

| KPI | Definition | 2026 target | Frequency |
|-----|-----------|-----------|-----------|
| Use cases in production | # live AI models/apps | > 10 | Monthly |
| Time-to-deploy | POC → Prod (weeks) | < 8 weeks | Per project |
| Value generated (€) | Cumulative use-case ROI | > €5M | Quarterly |
| Business-team NPS | BU satisfaction | > 7/10 | Half-yearly |
| Reuse rate | Reused features/models | > 40% | Quarterly |
| EU AI Act score | Regulatory compliance | 100% critical systems | Quarterly |
| AI community members | Guild + AI-certified | > 150 | Monthly |

## Deliverables

- AI CoE charter (mission, vision, values, scope)
- Detailed org chart with job descriptions
- AI use-case portfolio management process
- AI CoE dashboard (Power BI / Looker template)
- Responsible-governance framework (EU AI Act checklist)
- AI community engagement plan (Guild, newsletters, hackathons)
- Annual AI CoE budget (payroll + platform + training)

## Output format

Specify: **organization size** (employees), **sector** (EU AI Act regulatory constraints level), **desired model** (centralized / federated / hub-spoke / virtual), **existing AI use cases**, **current data team**, **available budget**, **sponsor stakeholder** (CDO / CIO / CEO).
