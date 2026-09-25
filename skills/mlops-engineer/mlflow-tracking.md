# Skill — MLflow (Tracking, Registry, Serving)
> Certifications: Databricks Certified ML Professional

## Objective
Track experiments, version models and serve them with MLflow.

## Experiment tracking
```python
import mlflow
import mlflow.pytorch

mlflow.set_tracking_uri("http://mlflow-server:5000")
mlflow.set_experiment("rag-pipeline-optimization")

with mlflow.start_run(run_name="rag-v2-reranking"):
    # Log the hyperparameters
    mlflow.log_params({
        "chunk_size": 1000,
        "chunk_overlap": 200,
        "embedding_model": "text-embedding-3-large",
        "reranker": "cohere-rerank-v3",
        "top_k": 5
    })

    # RAG evaluation
    metrics = evaluate_rag_pipeline(test_queries)

    # Log the metrics
    mlflow.log_metrics({
        "faithfulness": metrics["faithfulness"],
        "answer_relevance": metrics["answer_relevance"],
        "context_precision": metrics["context_precision"],
        "avg_latency_ms": metrics["latency"]
    })

    # Log the model
    mlflow.langchain.log_model(rag_chain, "rag_chain")
```

## Model Registry
```python
# Register a model
mlflow.register_model("runs:/<run_id>/rag_chain", "RAG-Production")

# Promote to production
client = mlflow.MlflowClient()
client.transition_model_version_stage(
    name="RAG-Production",
    version=3,
    stage="Production"
)

# Load the production model
model = mlflow.langchain.load_model("models:/RAG-Production/Production")
```

## MLflow for fine-tuning
```python
with mlflow.start_run():
    mlflow.log_params({"model": "llama-3.1-8b", "lora_r": 16, "epochs": 3, "lr": 2e-4})

    for epoch in range(num_epochs):
        train_loss = train_one_epoch(model, train_dataloader)
        eval_metrics = evaluate(model, eval_dataloader)

        mlflow.log_metrics({
            "train_loss": train_loss,
            "eval_loss": eval_metrics["loss"],
            "eval_accuracy": eval_metrics["accuracy"]
        }, step=epoch)

    mlflow.transformers.log_model(model, "fine_tuned_model")
```

## Serving with MLflow
```bash
# Serve a registered model
mlflow models serve -m "models:/RAG-Production/Production" -p 5001
```

## Deliverables
- Tracked experiments with parameters and metrics
- Models versioned in the registry
- Run comparison (leaderboard)
- Model promoted to production

## Output format
Specify: experiment type (RAG, fine-tuning, prompt) · metrics to track · MLflow infrastructure (local, cloud, Databricks)
