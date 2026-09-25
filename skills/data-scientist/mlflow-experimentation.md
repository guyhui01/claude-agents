# Skill — MLflow & Experiment Management
> Certifications: Databricks ML Associate · Azure DP-100 · IBM Data Science

## Objective
Track, compare and reproduce ML experiments with MLflow to guarantee traceability and ease the path to production.

## MLflow concepts
```
MLflow Tracking  → Log metrics, parameters, artifacts
MLflow Projects  → Package the ML code (reproducibility)
MLflow Models    → Standardize the model format
MLflow Registry  → Manage the model lifecycle
```

## Basic tracking
```python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, roc_auc_score

mlflow.set_experiment("classification-churn")

with mlflow.start_run(run_name="RF_baseline"):
    # Parameters
    params = {'n_estimators': 100, 'max_depth': 5, 'random_state': 42}
    mlflow.log_params(params)

    # Training
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # Metrics
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]
    mlflow.log_metric("accuracy", accuracy_score(y_test, y_pred))
    mlflow.log_metric("auc_roc", roc_auc_score(y_test, y_proba))

    # Model + artifacts
    mlflow.sklearn.log_model(model, "model")
    mlflow.log_artifact("feature_importance.png")
```

## MLflow with Optuna (tracked hyperparameter tuning)
```python
import optuna
import mlflow

def objective(trial):
    with mlflow.start_run(nested=True):
        params = {
            'n_estimators': trial.suggest_int('n_estimators', 100, 500),
            'max_depth': trial.suggest_int('max_depth', 3, 10),
            'min_samples_split': trial.suggest_int('min_samples_split', 2, 20)
        }
        mlflow.log_params(params)

        model = RandomForestClassifier(**params, random_state=42)
        score = cross_val_score(model, X_train, y_train, cv=3, scoring='roc_auc').mean()

        mlflow.log_metric("cv_auc", score)
        return score

with mlflow.start_run(run_name="optuna_tuning"):
    study = optuna.create_study(direction="maximize")
    study.optimize(objective, n_trials=50)
```

## Model Registry — lifecycle
```python
# Register the best model
mlflow.register_model(
    f"runs:/{best_run_id}/model",
    name="churn-predictor"
)

# Staging → production transition
client = mlflow.tracking.MlflowClient()
client.transition_model_version_stage(
    name="churn-predictor",
    version=3,
    stage="Production"
)

# Load the production model
model = mlflow.sklearn.load_model("models:/churn-predictor/Production")
```

## Databricks MLflow (cloud)
```python
import mlflow
mlflow.set_tracking_uri("databricks")
mlflow.set_experiment("/Users/first.last@email.com/churn-model")
# The rest is identical — tracking on Databricks
```

## Deliverables
- Documented MLflow experiments (parameters + metrics)
- Run comparison report (table)
- Model registered in the registry with versioning
- Reproducible training pipeline (MLflow Project)

## Output format
Specify: model type · metrics to track · planned number of experiments · environment (local, Azure ML, Databricks) · best-model selection criterion
