# Skills — MLOps Engineer

> Folder attached to `AGENT-MLOPS-ENGINEER.md`
> Frameworks: Docker DCA · Kubernetes CKA/CKAD · AWS DevOps Pro · Google DevOps Pro · Databricks ML · HashiCorp Terraform · GitHub Actions · MLflow · KServe

---

## Skill index (10)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`docker-ia.md`](docker-ia.md) | Containerize an AI service (GPU images, multi-stage, optimization) | Docker DCA |
| 2 | [`kubernetes-ia.md`](kubernetes-ia.md) | Deploy on Kubernetes (GPU nodes, KServe, model serving) | CKA · CKAD |
| 3 | [`cicd-ia.md`](cicd-ia.md) | AI CI/CD pipeline (automated LLM tests, eval pipelines) | GitHub Actions · AWS DevOps |
| 4 | [`mlflow-tracking.md`](mlflow-tracking.md) | Track experiments with MLflow (registry, lineage) | Databricks ML |
| 5 | [`monitoring-llm.md`](monitoring-llm.md) | Monitor an LLM in prod (Langfuse, LangSmith, Helicone) | Databricks ML · AWS DevOps |
| 6 | [`model-serving.md`](model-serving.md) | Serve a model (vLLM, TGI, Ollama, BentoML, Triton) | Databricks ML · Google DevOps |
| 7 | [`terraform-ia.md`](terraform-ia.md) | AI Infra as Code (GPU cloud modules, secrets, networking) | HashiCorp Terraform |
| 8 | [`cloud-deployment-ia.md`](cloud-deployment-ia.md) | Deploy on AI cloud (SageMaker, Vertex AI, Azure ML) | AWS DevOps · Google DevOps |
| 9 | [`feature-store-pipelines.md`](feature-store-pipelines.md) | Feature Store & data pipelines (Feast, dbt, Spark, Polars) | Databricks ML |
| 10 | [`optimisation-inference.md`](optimisation-inference.md) | Optimize inference (INT4/INT8 quantization, ONNX, TensorRT) | Databricks ML |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... DEPLOY A MODEL TO PRODUCTION?
    → docker-ia.md (GPU containerization)
    → kubernetes-ia.md (GPU orchestration + KServe)
    → model-serving.md (vLLM / TGI / Ollama / BentoML)
    → cloud-deployment-ia.md (if SageMaker / Vertex / Azure ML)

  ... INDUSTRIALIZE THE ML CYCLE?
    → cicd-ia.md (pipeline + eval gates)
    → mlflow-tracking.md (experiments + registry)
    → terraform-ia.md (reproducible infra)

  ... MONITOR AN LLM?
    → monitoring-llm.md (Langfuse, LangSmith, Helicone)
    → cf. AGENT-DEVOPS-CLOUD.md skill `observabilite-sre.md` (LLM metrics)

  ... FEED THE MODELS WITH DATA?
    → feature-store-pipelines.md (Feast + dbt + Spark)

  ... OPTIMIZE PERFORMANCE / COST?
    → optimisation-inference.md (quantization, ONNX, TensorRT)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Global AI architecture (RAG, multi-agent, MCP) | `AGENT-AI-ARCHITECT.md` | MLOPS = deployment; AI-ARCHITECT = design |
| Python ML code | `AGENT-DEV-PYTHON-IA.md` | MLOPS = deployment; DEV-PYTHON = model code |
| Frontend / TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | MLOPS = model backend; DEV-TS = front |
| Generic (non-AI) cloud infrastructure | `AGENT-DEVOPS-CLOUD.md` | MLOPS = ML-specific infra; DEVOPS = generic infra |
| Application security and LLM pentest | `AGENT-SECURITE-IA.md` | MLOPS = deploys; SECURITE-IA = audits |

---

## Frameworks and standards used

- **MLflow**: https://mlflow.org/docs/
- **KServe**: https://kserve.github.io/
- **vLLM**: https://docs.vllm.ai/
- **Text Generation Inference (TGI)**: https://huggingface.co/docs/text-generation-inference
- **Ollama**: https://ollama.com/
- **BentoML**: https://docs.bentoml.com/
- **Feast (Feature Store)**: https://docs.feast.dev/
- **DORA / MLOps metrics**: Lead Time, Deployment Frequency, MTTR, Model Performance Drift
- **Google MLOps maturity model**: https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
