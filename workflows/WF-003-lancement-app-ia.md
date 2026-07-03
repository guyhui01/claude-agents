# WF-003 — AI Application Launch

> Validated idea → architecture → code → deployment → security audit  
> Certifications mobilized: Anthropic Claude Code in Action · TOGAF 10 · AWS SA · CKA · CISSP · CFA

---

## Identity card

```yaml
id: "WF-003"
nom: "Lancement Application IA"
domaine: "Dev & Engineering"
declencheur: "Validated business case, go-ahead to develop an AI app"
resultat_final: "AI application deployed, operational CI/CD pipeline, security audit passed"
duree_estimee: "90-180 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "The densest workflow in the catalog: 6 agents covering business case, architecture, code, CI/CD, and security audit over 90-180 min. Requires deep architectural reasoning and end-to-end technical consistency. Opus 4.8 mandatory."
modele_alternatif: "claude-sonnet-5"  # only for very simple apps with no RAG or agents (basic CRUD)
agents_core:
  - FINANCIAL-ANALYST    # business case and ROI before development
  - PROMPT-ENGINEER      # design of the application's LLM prompts
  - AI-ARCHITECT         # AI system architecture (RAG, agents, MCP)
  - DEV-PYTHON-IA        # backend / ML development (or DEV-TYPESCRIPT-IA)
  - QA-AGILE             # functional & BDD tests before deployment
  - DEVOPS-CLOUD         # CI/CD pipeline, cloud infrastructure
  - SECURITE-IA          # security audit, OWASP LLM Top 10
agents_optionnels:
  - DEV-TYPESCRIPT-IA    # if React / Next.js frontend or TypeScript API
  - MLOPS-ENGINEER       # if ML pipeline with model monitoring
  - JURIDIQUE-IA         # if personal data or risky AI use
  - DATA-ENGINEER        # if large-scale data ingestion is required
  - PO-SCRUM             # if application backlog steering during dev
statut: "disponible"
version: "1.2"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 0 | FINANCIAL-ANALYST | Business case and ROI validation before dev | Financial Go/No-Go |
| 1 | PROMPT-ENGINEER | Design of system prompts and LLM chains | Validated prompts, token strategy |
| 2 | AI-ARCHITECT | AI system architecture, stack choice | ADR, architecture diagram |
| 3 | DEV-PYTHON-IA | Backend development, API integrations | Source code, unit tests |
| 4 | QA-AGILE | BDD functional tests + LLM evaluation scenarios | Test plan + Gherkin scenarios + LLM evals |
| 5 | DEVOPS-CLOUD | CI/CD pipeline, cloud infra, containers | Deployment, GitHub Actions pipeline |
| 6 | SECURITE-IA | OWASP LLM audit, pen test, security report | Security report, remediation |
| opt | DEV-TYPESCRIPT-IA | Next.js frontend / TypeScript API | UI deployed on Vercel |
| opt | MLOPS-ENGINEER | Model monitoring, MLflow, drift detection | ML observability |

---

## Contextual parameters

```
TECHNICAL CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
AI app type        : [RAG chatbot / Autonomous agent / Generation app / Classification]
Cloud provider     : [AWS / GCP / Azure / On-premise / Vercel]
Target LLM         : [Claude Sonnet 5 / Claude Opus 4.8 / Mistral Large 2 / Llama 3.1 local / On-premise model]
Tech stack         : [Python FastAPI / Next.js / LangChain / n8n / other]
Database           : [PostgreSQL / MongoDB / Pinecone / Qdrant / other]
GDPR constraints   : [Personal data: YES/NO — Data location: EU/US]
Monthly API budget : [e.g. €200/month LLM]
Target SLA         : [e.g. 99.9% / < 2s latency]
```

---

## BPMN flow diagram

```
(START — Technical brief + preliminary business case)
        │
        ▼
[STEP-00 — FINANCIAL-ANALYST]
  Business case validation,
  TCO, ROI, financial go/no-go
        │
        ▼
<GATEWAY — Financial go validated?>
  ├── NO ───▶ (END — Project not launched, alternative recommendations)
  └── YES ──▶
        │
        ▼
[STEP-01 — PROMPT-ENGINEER]
  System prompt design,
  few-shot / RAG strategy,
  baseline prompt testing
        │
        ▼
[STEP-02 — AI-ARCHITECT]
  AI system architecture,
  stack and LLM model choice,
  ADR and diagram
        │
        ▼
═══════════════════════════
  PARALLEL FORK
═══════════════════════════
  ├── [STEP-03A — DEV-PYTHON-IA]
  │    Backend, API, integrations
  │
  └── [STEP-03B — DEV-TYPESCRIPT-IA] (optional)
       Next.js frontend, UI
═══════════════════════════
  JOIN
═══════════════════════════
        │
        ▼
[STEP-04 — QA-AGILE]
  Functional test plan,
  Gherkin BDD scenarios,
  LLM evals (golden dataset)
        │
        ▼
<GATEWAY — Functional tests OK?>
  ├── NO ───▶ (Bug fixing → back to STEP-03)
  └── YES ──▶
        │
        ▼
[STEP-05 — DEVOPS-CLOUD]
  CI/CD pipeline,
  containerization,
  cloud deployment
        │
        ▼
[STEP-06 — SECURITE-IA]
  OWASP LLM Top 10 audit,
  pen test, security report
        │
        ▼
<GATEWAY — Security audit passed?>
  ├── NO ───▶ (Remediation → back to STEP-03, STEP-04 or STEP-05)
  └── YES ──▶
        │
        ▼
(END — AI app deployed, secured, documented)
```

---

## Detailed steps

### STEP-00 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-00"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Business case validation before development"
  input:
    - "Project brief: objective, scope, target user"
    - "Development cost estimate (days / resources)"
    - "Estimated operating costs (LLM API, cloud, maintenance)"
    - "Expected gains: productivity, revenue, cost reduction"
  output_attendu:
    - "1-page business case: costs / benefits / ROI / payback"
    - "3-year TCO (infra + API + human resources)"
    - "Sensitivity analysis (optimistic / realistic / pessimistic scenarios)"
    - "Go / No-Go decision with justification"
  condition_passage: "Go validated before launching development"
  si_echec: "Present alternatives or a reduced scope (MVP)"
  duree_estimee: "15 min"
  execution: "sequential — opens the workflow"
```

### STEP-01 — PROMPT-ENGINEER

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-PROMPT-ENGINEER"
  role: "Design of the application's LLM prompts"
  input:
    - "Main use cases of the app"
    - "Target LLM (Claude Sonnet 5 / Opus 4.8 / Mistral Large 2 / local model)"
    - "Constraints: tone, response length, language, security"
    - "Envisaged architecture (RAG / agents / simple chain)"
  output_attendu:
    - "Main system prompt (production-ready)"
    - "Few-shot or CoT strategy if applicable"
    - "RAG prompts (retrieval + grounding)"
    - "Token cost / request estimate + cache optimization"
    - "Test baseline (5 nominal cases + 3 boundary cases)"
  duree_estimee: "15-20 min"
  execution: "sequential after STEP-00"
```

### STEP-02 — AI-ARCHITECT

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-AI-ARCHITECT"
  role: "AI system architecture and stack choice"
  input:
    - "Prompts and LLM strategy (STEP-01)"
    - "Cloud, GDPR, infra-budget constraints"
    - "SLA, volumes, latency constraints"
    - "Existing systems to integrate"
  output_attendu:
    - "Architecture diagram (C4 Level 2)"
    - "Main ADR (Architecture Decision Records)"
    - "Stack choice: LLM / Vector DB / API / Frontend"
    - "Integration plan with existing IS"
    - "Architectural-risk checklist"
  condition_passage: "Architecture validated before development"
  duree_estimee: "20 min"
  execution: "sequential after STEP-01"
```

### STEP-03 — DEV-PYTHON-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-DEV-PYTHON-IA"
  role: "Backend development and API integrations"
  input:
    - "Validated architecture (STEP-02)"
    - "Production prompts (STEP-01)"
    - "API specifications (endpoints, auth, rate limits)"
  output_attendu:
    - "Structured Python code (FastAPI / LangChain / Anthropic SDK)"
    - "Unit tests (coverage > 80%)"
    - "Technical installation README"
    - "Documented environment variables (.env.example)"
  duree_estimee: "30-60 min"
  execution: "parallel possible with DEV-TYPESCRIPT-IA"
```

### STEP-04 — QA-AGILE

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-QA-AGILE"
  role: "Functional tests & LLM evals before deployment"
  input:
    - "Developed source code (STEP-03)"
    - "Main use cases (STEP-01)"
    - "Production system prompts (STEP-01)"
  output_attendu:
    - "Gherkin BDD scenarios for nominal + boundary + error cases"
    - "Functional test plan (manual + automated)"
    - "LLM evals: golden dataset 20-50 cases + metrics (faithfulness, relevancy)"
    - "Prompt acceptance tests (success ≥ 90% on baseline)"
    - "Functional quality report"
  condition_passage: "Tests passing ≥ 90% + 0 Critical bug on nominal cases"
  si_echec: "Back to STEP-03 (code fix) or STEP-01 (prompt adjustment)"
  duree_estimee: "15-25 min"
  execution: "sequential after STEP-03"
```

### STEP-05 — DEVOPS-CLOUD

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-DEVOPS-CLOUD"
  role: "CI/CD pipeline and cloud deployment"
  input:
    - "Developed and tested source code (STEP-03 + STEP-04)"
    - "Target architecture (STEP-02)"
    - "SLA and deployment constraints"
  output_attendu:
    - "Dockerfile and docker-compose"
    - "GitHub Actions pipeline (build + test + deploy)"
    - "Infrastructure as Code (Terraform or CDK)"
    - "Monitoring and alerting (CloudWatch / Datadog)"
    - "Deployment and rollback runbook"
  duree_estimee: "20-30 min"
  execution: "sequential after STEP-04"
```

### STEP-06 — SECURITE-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-SECURITE-IA"
  role: "OWASP LLM security audit and report"
  input:
    - "Source code and deployed architecture"
    - "System prompts (for injection audit)"
    - "Data flows and access rights"
  output_attendu:
    - "OWASP LLM Top 10 audit report (LLM01-LLM10)"
    - "Identified vulnerabilities (Critical / High / Medium / Low)"
    - "Prioritized remediation plan"
    - "Go-live security checklist"
  condition_passage: "0 Critical vulnerability, < 2 non-residual High"
  si_echec: "Block the production deployment, fix and re-test"
  duree_estimee: "15 min"
  execution: "sequential — closes before going to production"
```

---

## Final deliverables

```
WF-003 CHECKLIST
──────────────────────────────────────────────────────
□ Validated business case: ROI / TCO / Go-No-Go
□ Production-ready system prompt + test baseline
□ C4 Level 2 architecture + ADR
□ Documented source code (Python and/or TypeScript)
□ Unit tests (coverage > 80%)
□ Gherkin BDD scenarios + functional test plan
□ LLM evals: golden dataset + metrics (faithfulness, relevancy)
□ Dockerfile + docker-compose
□ Operational GitHub Actions CI/CD pipeline
□ Infrastructure as Code deployed
□ OWASP LLM security audit report
□ Deployment and rollback runbook
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-003 from workflows/WF-003-lancement-app-ia.md.

Technical context:
- AI app type: [to fill in]
- Cloud provider: [to fill in]
- Target LLM: [to fill in]
- GDPR constraints: [to fill in]

Launch STEP-00 with AGENT-FINANCIAL-ANALYST to validate the business case.
```
