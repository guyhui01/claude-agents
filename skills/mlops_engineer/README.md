# Skills — MLOps Engineer

> Dossier rattaché à `AGENT-MLOPS-ENGINEER.md`
> Référentiels : Docker DCA · Kubernetes CKA/CKAD · AWS DevOps Pro · Google DevOps Pro · Databricks ML · HashiCorp Terraform · GitHub Actions · MLflow · KServe

---

## Index des skills (10)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`docker-ia.md`](docker-ia.md) | Containeriser un service IA (images GPU, multi-stage, optimisation) | Docker DCA |
| 2 | [`kubernetes-ia.md`](kubernetes-ia.md) | Déployer sur Kubernetes (GPU nodes, KServe, model serving) | CKA · CKAD |
| 3 | [`cicd-ia.md`](cicd-ia.md) | Pipeline CI/CD IA (tests LLM automatisés, eval pipelines) | GitHub Actions · AWS DevOps |
| 4 | [`mlflow-tracking.md`](mlflow-tracking.md) | Tracker les expériences avec MLflow (registry, lineage) | Databricks ML |
| 5 | [`monitoring-llm.md`](monitoring-llm.md) | Monitorer un LLM en prod (Langfuse, LangSmith, Helicone) | Databricks ML · AWS DevOps |
| 6 | [`model-serving.md`](model-serving.md) | Servir un modèle (vLLM, TGI, Ollama, BentoML, Triton) | Databricks ML · Google DevOps |
| 7 | [`terraform-ia.md`](terraform-ia.md) | Infra as Code IA (modules GPU cloud, secrets, networking) | HashiCorp Terraform |
| 8 | [`cloud-deployment-ia.md`](cloud-deployment-ia.md) | Déployer sur cloud IA (SageMaker, Vertex AI, Azure ML) | AWS DevOps · Google DevOps |
| 9 | [`feature-store-pipelines.md`](feature-store-pipelines.md) | Feature Store & data pipelines (Feast, dbt, Spark, Polars) | Databricks ML |
| 10 | [`optimisation-inference.md`](optimisation-inference.md) | Optimiser l'inférence (quantization INT4/INT8, ONNX, TensorRT) | Databricks ML |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉPLOYER UN MODÈLE EN PRODUCTION ?
    → docker-ia.md (containerisation GPU)
    → kubernetes-ia.md (orchestration GPU + KServe)
    → model-serving.md (vLLM / TGI / Ollama / BentoML)
    → cloud-deployment-ia.md (si SageMaker / Vertex / Azure ML)

  ... INDUSTRIALISER LE CYCLE ML ?
    → cicd-ia.md (pipeline + eval gates)
    → mlflow-tracking.md (experiments + registry)
    → terraform-ia.md (infra reproductible)

  ... MONITORER UN LLM ?
    → monitoring-llm.md (Langfuse, LangSmith, Helicone)
    → cf. AGENT-DEVOPS-CLOUD.md skill `observabilite-sre.md` (métriques LLM)

  ... ALIMENTER LES MODÈLES EN DONNÉES ?
    → feature-store-pipelines.md (Feast + dbt + Spark)

  ... OPTIMISER LA PERFORMANCE / COÛT ?
    → optimisation-inference.md (quantization, ONNX, TensorRT)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Architecture IA globale (RAG, multi-agents, MCP) | `AGENT-AI-ARCHITECT.md` | MLOPS = déploiement ; AI-ARCHITECT = conception |
| Code Python ML | `AGENT-DEV-PYTHON-IA.md` | MLOPS = déploiement ; DEV-PYTHON = code modèle |
| Frontend / TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | MLOPS = backend modèle ; DEV-TS = front |
| Infrastructure cloud générique (non-IA) | `AGENT-DEVOPS-CLOUD.md` | MLOPS = infra ML spécifique ; DEVOPS = infra générique |
| Sécurité applicative et pentest LLM | `AGENT-SECURITE-IA.md` | MLOPS = déploie ; SECURITE-IA = audite |

---

## Référentiels et standards utilisés

- **MLflow** : https://mlflow.org/docs/
- **KServe** : https://kserve.github.io/
- **vLLM** : https://docs.vllm.ai/
- **Text Generation Inference (TGI)** : https://huggingface.co/docs/text-generation-inference
- **Ollama** : https://ollama.com/
- **BentoML** : https://docs.bentoml.com/
- **Feast (Feature Store)** : https://docs.feast.dev/
- **DORA / MLOps metrics** : Lead Time, Deployment Frequency, MTTR, Model Performance Drift
- **Google MLOps maturity model** : https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
