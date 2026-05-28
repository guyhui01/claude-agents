# Skills — DevOps & Cloud

> Dossier rattaché à `AGENT-DEVOPS-CLOUD.md`
> Référentiels : CKA · CKAD · CKS · DCA · AWS DOP-C02/SA/MLA-C01 · Google DevOps/Cloud Architect/ML Engineer · Azure AZ-400/AZ-305/AI-102 · HashiCorp Terraform · GitHub Actions · ITIL 4

---

## Index des skills

| # | Skill | Quand l'invoquer | Référence |
|---|---|---|---|
| 1 | [`cicd-github-actions.md`](cicd-github-actions.md) | Configurer un pipeline GitHub Actions production (OIDC, matrix, multi-stage) | AWS DOP-C02 · GitHub Actions |
| 2 | [`kubernetes-production.md`](kubernetes-production.md) | Déployer Kubernetes en prod (Deployment, HPA, PDB, NetworkPolicy, RBAC) | CKA · CKAD · CKS |
| 3 | [`terraform-iac.md`](terraform-iac.md) | Provisionner l'infrastructure avec Terraform (modules DRY, Terragrunt, state backend) | HashiCorp Terraform · AWS SA |
| 4 | [`docker-containers.md`](docker-containers.md) | Containeriser une app (multi-stage, sécurité non-root, buildx, GPU images) | DCA · CKA |
| 5 | [`observabilite-sre.md`](observabilite-sre.md) | Mettre en place SLO/SLI + Prometheus/Grafana/Loki/Tempo + metrics LLM (cost, hallucination) | Google DevOps · AWS DOP-C02 |
| 6 | [`aws-architecture.md`](aws-architecture.md) | Architecturer sur AWS (EC2, EKS, Lambda, RDS, S3, IAM, VPC, Bedrock, SageMaker) | AWS DOP-C02 · AWS SA · AWS MLA-C01 |
| 7 | [`gcp-architecture.md`](gcp-architecture.md) | Architecturer sur GCP (GKE Autopilot, Cloud Run, Vertex AI, BigQuery) | Google Cloud Architect · Google ML Engineer |
| 8 | [`azure-architecture.md`](azure-architecture.md) | Architecturer sur Azure (AKS, Container Apps, Azure OpenAI, Databricks) | AZ-400 · AZ-305 · AI-102 |
| 9 | [`securite-devops.md`](securite-devops.md) | Sécuriser le pipeline (Vault, Trivy, Semgrep, OPA, Pod Security Standards) | CKS · AWS DOP-C02 · AZ-400 |
| 10 | [`finops-cloud.md`](finops-cloud.md) | Optimiser les coûts cloud (rightsizing, Infracost, Reserved/Spot, tagging) | AWS SA · Google Cloud Architect · AZ-305 |
| 11 | [`incident-response-llm.md`](incident-response-llm.md) | Gérer les incidents LLM en production (taxonomie P0-P3, runbook 5 phases, toolbox investigation) | ITIL 4 · CKS · AWS DOP-C02 |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONSTRUIRE LA PIPELINE CI/CD ?
    → cicd-github-actions.md (config technique)
    → securite-devops.md (SAST/DAST/SCA dans la pipeline)

  ... DÉPLOYER UNE APP en production ?
    → docker-containers.md (containerisation)
    → kubernetes-production.md (orchestration)
    → terraform-iac.md (infra as code)

  ... CHOISIR UN CLOUD ou architecturer dessus ?
    → aws-architecture.md / gcp-architecture.md / azure-architecture.md
    → finops-cloud.md (avant les choix, calculer le coût)

  ... OBSERVER UN SYSTÈME en production ?
    → observabilite-sre.md (SLO/SLI + metrics LLM custom)

  ... GÉRER UN INCIDENT LLM ?
    → incident-response-llm.md (runbook 5 phases + outils RAGAs/Helicone)

  ... SÉCURISER L'INFRASTRUCTURE ?
    → securite-devops.md (CI/CD + secrets + Pod Security + Trivy)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Stratégie CI/CD côté équipe dev | `AGENT-TECH-LEAD.md` skill `cicd-pipeline.md` | DEVOPS configure la plateforme ; TECH-LEAD définit la stratégie côté équipe (branching, release, gates) |
| Déploiement spécifique ML / LLM | `AGENT-MLOPS-ENGINEER.md` | DEVOPS = infra générique ; MLOPS = pipelines ML, MLflow, model serving |
| Code Python IA | `AGENT-DEV-PYTHON-IA.md` | DEVOPS déploie ; DEV-PYTHON code |
| Architecture IA globale | `AGENT-AI-ARCHITECT.md` | DEVOPS opère ; AI-ARCHITECT conçoit |
| Audit sécurité pro, pentest, threat modeling | `AGENT-SECURITE-IA.md` | DEVOPS = `securite-devops` (CI/CD + infra) ; SECURITE-IA = audit + pentest applicatif |

---

## Référentiels et standards utilisés

- **Kubernetes** : https://kubernetes.io/docs/ (CKA / CKAD / CKS)
- **Terraform** : https://developer.hashicorp.com/terraform/docs
- **GitHub Actions** : https://docs.github.com/en/actions
- **Prometheus** : https://prometheus.io/docs/
- **OpenTelemetry** : https://opentelemetry.io/docs/
- **AWS Well-Architected Framework** : https://aws.amazon.com/architecture/well-architected/
- **Google Cloud Architecture Framework** : https://cloud.google.com/architecture/framework
- **Azure Well-Architected Framework** : https://learn.microsoft.com/azure/well-architected/
- **CIS Benchmarks** (Docker, K8s) : https://www.cisecurity.org/cis-benchmarks
- **ITIL 4** : référentiel IT Service Management
