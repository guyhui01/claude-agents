# Skill — Data-AI Talent & Recruitment Strategy

> Certifications: SHRM-SCP (Strategic HR), PMI Talent Management, LinkedIn Talent Insights Certified 2026, CDMP Associate (data context)

## Objective

Define and roll out a complete Data-AI HR strategy: mapping of the 2026 key profiles, compensation benchmarks, build/hire/partner trade-offs, and an internal talent development plan.

## Mapping of Data-AI profiles in 2026

### The 12 key profiles and their skills

| Profile | Level | Paris salaries 2026 (gross/year) | Scarcity |
|--------|--------|-------------------------------|--------|
| Chief Data Officer (CDO) | C-Level | €140,000 – 220,000 | Very high |
| Head of AI / Chief AI Officer | C-Level | €150,000 – 230,000 | Extreme |
| Data Architect (Senior) | Expert | €85,000 – 120,000 | High |
| ML Engineer / MLOps | Senior | €75,000 – 105,000 | Very high |
| LLM Engineer / AI Engineer | Senior | €80,000 – 115,000 | Extreme |
| Data Scientist (Senior) | Senior | €70,000 – 95,000 | High |
| Data Engineer (Senior) | Senior | €65,000 – 90,000 | High |
| Analytics Engineer (dbt) | Mid-Senior | €55,000 – 80,000 | Medium |
| Data Analyst (BI) | Mid | €45,000 – 65,000 | Low |
| Data Steward / Data Governance | Mid-Senior | €50,000 – 75,000 | Medium |
| Prompt Engineer / AI Product | Mid-Senior | €55,000 – 85,000 | High |
| AI Ethics Officer | Expert | €75,000 – 100,000 | Very high |

### Skill sheets 2026 — Key profiles

```yaml
LLM_Engineer_Senior:
  missions:
    - "Integration and fine-tuning of LLMs (Claude, GPT-4o, Llama 3)"
    - "Development of AI agents and RAG systems"
    - "LLMOps: monitoring, evaluation, prompt versioning"
  technical_skills:
    - Python (FastAPI, LangChain, LlamaIndex)
    - Vector databases (Pinecone, Weaviate, pgvector)
    - Cloud AI services (Anthropic API, Azure OpenAI, Vertex AI)
    - MLflow / Weights & Biases for LLM evaluation
  valued_certifications:
    - Anthropic Prompt Engineering Certification 2026
    - DeepLearning.AI LLMOps Specialization
    - AWS Certified Machine Learning Specialty
  soft_skills:
    - Product thinking (measure business impact)
    - Communication with non-technical stakeholders

MLOps_Engineer_Senior:
  stack_2026:
    orchestration: ["Airflow 2.x", "Prefect 3", "Dagster"]
    ml_platform: ["Kubeflow", "MLflow", "SageMaker Pipelines"]
    serving: ["BentoML", "Seldon Core", "Ray Serve"]
    monitoring: ["Evidently AI", "WhyLogs", "Arize Phoenix"]
    infra: ["Kubernetes", "Terraform", "GitHub Actions"]
```

## Trade-off: Build vs Hire vs Partner

### Decision matrix

| Criterion | Build (Train internally) | Hire (Recruit) | Partner (Outsource) |
|---------|----------------------|-----------------|----------------------|
| **Time-to-value** | 6-18 months | 3-6 months | 1-3 months |
| **Total cost** | Low long-term | High short-term | Variable |
| **Knowledge retention** | Very strong | Strong (if retained) | Weak |
| **Flexibility** | Low | Medium | Strong |
| **Cutting-edge expertise** | Hard | Possible (rare market) | Accessible |

### Decision algorithm

```
For each Data-AI skill need:

1. Is it a lasting (> 18 months) and strategic need?
   → YES: Consider Hire or Build
   → NO: Partner (freelancer, consulting firm)

2. Is it a skill available internally (gap < 6 months)?
   → YES: Build (upskilling + mentoring)
   → NO: Hire (if budget) or Partner (if urgent)

3. Is the job market too tight?
   → LLM Engineer, Chief AI Officer profiles
   → Strategy: Build + Partner in parallel
     + a differentiating Employee Value Proposition
```

## Internal development program

### Data-AI Upskilling Tracks (6 months each)

| Track | Target audience | Content | Target certification |
|-------|-------------|---------|---------------------|
| **Data Analyst → Analytics Engineer** | Junior/mid Data Analysts | dbt, advanced SQL, Git, CI/CD | dbt Developer Certification |
| **Data Engineer → MLOps** | Senior Data Engineers | Docker, Kubernetes, MLflow, Airflow | AWS ML Specialty |
| **Developer → AI Engineer** | Python backend devs | LangChain, LLM API, RAG, agents | Anthropic Certification 2026 |
| **Manager → Data-Driven Leader** | Business managers | Data storytelling, basic SQL, BI | DP-900 Microsoft |

## Data-AI employer brand

### 2026 attraction levers

```
Top 5 selection criteria of data talent (2026 survey):
1. Challenging tech projects (generative AI, MLOps at scale)  — 42%
2. Team quality and mentoring                                — 38%
3. Compensation + equity (BSPCE/AGA)                         — 35%
4. Flexibility (full remote or hybrid)                       — 32%
5. Training & certification budget                           — 28%

Employer-brand actions:
→ Technical publishing (blog, GitHub, conferences)
→ Open-source contributions from the team
→ Certification budget: €3,000/year/person minimum
→ Remote-first policy with 2 on-site days/month
```

## Deliverables

- Mapping of Data-AI talent needs (short/medium term)
- 2026 benchmarked compensation grid per profile
- Build/hire/partner matrix per skill family
- Internal development plan with training tracks
- Job descriptions for the 5 priority profiles
- Data-AI employer-brand strategy (EVP + concrete actions)
- Annual Data-AI HR budget (recruitment + training + retention)

## Output format

Specify: **current data team size** (# + profiles), **priority profiles to recruit** (list), **available HR budget**, **timeframe** (urgent or 12-month planning), **constraints** (remote work, location, company size), **sector** (banking / retail / industry / etc.), the organization's **AI maturity level**.
