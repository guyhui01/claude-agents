# Skill — MLflow (Tracking, Registry, Serving)
> Certifications : Databricks Certified ML Professional

## Objectif
Tracker les expériences, versionner les modèles et les servir avec MLflow.

## Tracking des expériences
```python
import mlflow
import mlflow.pytorch

mlflow.set_tracking_uri("http://mlflow-server:5000")
mlflow.set_experiment("rag-pipeline-optimization")

with mlflow.start_run(run_name="rag-v2-reranking"):
    # Log des hyperparamètres
    mlflow.log_params({
        "chunk_size": 1000,
        "chunk_overlap": 200,
        "embedding_model": "text-embedding-3-large",
        "reranker": "cohere-rerank-v3",
        "top_k": 5
    })

    # Évaluation RAG
    metrics = evaluate_rag_pipeline(test_queries)

    # Log des métriques
    mlflow.log_metrics({
        "faithfulness": metrics["faithfulness"],
        "answer_relevance": metrics["answer_relevance"],
        "context_precision": metrics["context_precision"],
        "avg_latency_ms": metrics["latency"]
    })

    # Log du modèle
    mlflow.langchain.log_model(rag_chain, "rag_chain")
```

## Model Registry
```python
# Enregistrer un modèle
mlflow.register_model("runs:/<run_id>/rag_chain", "RAG-Production")

# Promouvoir en production
client = mlflow.MlflowClient()
client.transition_model_version_stage(
    name="RAG-Production",
    version=3,
    stage="Production"
)

# Charger le modèle de production
model = mlflow.langchain.load_model("models:/RAG-Production/Production")
```

## MLflow pour le fine-tuning
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

## Serving avec MLflow
```bash
# Servir un modèle enregistré
mlflow models serve -m "models:/RAG-Production/Production" -p 5001
```

## Livrables
- Expériences trackées avec paramètres et métriques
- Modèles versionnés dans le registry
- Comparaison des runs (leaderboard)
- Modèle promu en production

## Format de sortie
Précise : type d'expérience (RAG, fine-tuning, prompt) · métriques à tracker · infrastructure MLflow (local, cloud, Databricks)
