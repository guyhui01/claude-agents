# Skills — DevOps & Cloud

> Folder attached to `AGENT-DEVOPS-CLOUD.md`
> Frameworks: CKA · CKAD · CKS · DCA · AWS DOP-C02/SA/MLA-C01 · Google DevOps/Cloud Architect/ML Engineer · Azure AZ-400/AZ-305/AI-102 · HashiCorp Terraform · GitHub Actions · ITIL 4

---

## Skill index

| # | Skill | When to invoke | Reference |
|---|---|---|---|
| 1 | [`cicd-github-actions.md`](cicd-github-actions.md) | Configure a production GitHub Actions pipeline (OIDC, matrix, multi-stage) | AWS DOP-C02 · GitHub Actions |
| 2 | [`kubernetes-production.md`](kubernetes-production.md) | Deploy Kubernetes in prod (Deployment, HPA, PDB, NetworkPolicy, RBAC) | CKA · CKAD · CKS |
| 3 | [`terraform-iac.md`](terraform-iac.md) | Provision infrastructure with Terraform (DRY modules, Terragrunt, state backend) | HashiCorp Terraform · AWS SA |
| 4 | [`docker-containers.md`](docker-containers.md) | Containerize an app (multi-stage, non-root security, buildx, GPU images) | DCA · CKA |
| 5 | [`observabilite-sre.md`](observabilite-sre.md) | Set up SLO/SLI + Prometheus/Grafana/Loki/Tempo + LLM metrics (cost, hallucination) | Google DevOps · AWS DOP-C02 |
| 6 | [`aws-architecture.md`](aws-architecture.md) | Architect on AWS (EC2, EKS, Lambda, RDS, S3, IAM, VPC, Bedrock, SageMaker) | AWS DOP-C02 · AWS SA · AWS MLA-C01 |
| 7 | [`gcp-architecture.md`](gcp-architecture.md) | Architect on GCP (GKE Autopilot, Cloud Run, Vertex AI, BigQuery) | Google Cloud Architect · Google ML Engineer |
| 8 | [`azure-architecture.md`](azure-architecture.md) | Architect on Azure (AKS, Container Apps, Azure OpenAI, Databricks) | AZ-400 · AZ-305 · AI-102 |
| 9 | [`securite-devops.md`](securite-devops.md) | Secure the pipeline (Vault, Trivy, Semgrep, OPA, Pod Security Standards) | CKS · AWS DOP-C02 · AZ-400 |
| 10 | [`finops-cloud.md`](finops-cloud.md) | Optimize cloud costs (rightsizing, Infracost, Reserved/Spot, tagging) | AWS SA · Google Cloud Architect · AZ-305 |
| 11 | [`incident-response-llm.md`](incident-response-llm.md) | Manage LLM incidents in production (P0-P3 taxonomy, 5-phase runbook, investigation toolbox) | ITIL 4 · CKS · AWS DOP-C02 |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... BUILD THE CI/CD PIPELINE?
    → cicd-github-actions.md (technical config)
    → securite-devops.md (SAST/DAST/SCA in the pipeline)

  ... DEPLOY AN APP to production?
    → docker-containers.md (containerization)
    → kubernetes-production.md (orchestration)
    → terraform-iac.md (infra as code)

  ... CHOOSE A CLOUD or architect on it?
    → aws-architecture.md / gcp-architecture.md / azure-architecture.md
    → finops-cloud.md (before the choices, compute the cost)

  ... OBSERVE A SYSTEM in production?
    → observabilite-sre.md (SLO/SLI + custom LLM metrics)

  ... HANDLE AN LLM INCIDENT?
    → incident-response-llm.md (5-phase runbook + RAGAs/Helicone tools)

  ... SECURE THE INFRASTRUCTURE?
    → securite-devops.md (CI/CD + secrets + Pod Security + Trivy)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| CI/CD strategy on the dev-team side | `AGENT-TECH-LEAD.md` skill `cicd-pipeline.md` | DEVOPS configures the platform; TECH-LEAD defines the team-side strategy (branching, release, gates) |
| ML / LLM-specific deployment | `AGENT-MLOPS-ENGINEER.md` | DEVOPS = generic infra; MLOPS = ML pipelines, MLflow, model serving |
| Python AI code | `AGENT-DEV-PYTHON-IA.md` | DEVOPS deploys; DEV-PYTHON codes |
| Global AI architecture | `AGENT-AI-ARCHITECT.md` | DEVOPS operates; AI-ARCHITECT designs |
| Professional security audit, pentest, threat modeling | `AGENT-SECURITE-IA.md` | DEVOPS = `securite-devops` (CI/CD + infra); SECURITE-IA = application audit + pentest |

---

## Frameworks and standards used

- **Kubernetes**: https://kubernetes.io/docs/ (CKA / CKAD / CKS)
- **Terraform**: https://developer.hashicorp.com/terraform/docs
- **GitHub Actions**: https://docs.github.com/en/actions
- **Prometheus**: https://prometheus.io/docs/
- **OpenTelemetry**: https://opentelemetry.io/docs/
- **AWS Well-Architected Framework**: https://aws.amazon.com/architecture/well-architected/
- **Google Cloud Architecture Framework**: https://cloud.google.com/architecture/framework
- **Azure Well-Architected Framework**: https://learn.microsoft.com/azure/well-architected/
- **CIS Benchmarks** (Docker, K8s): https://www.cisecurity.org/cis-benchmarks
- **ITIL 4**: IT Service Management framework
