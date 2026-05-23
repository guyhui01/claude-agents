# Skill — MLflow & Gestion des Expérimentations
> Certifications : Databricks ML Associate · Azure DP-100 · IBM Data Science

## Objectif
Tracker, comparer et reproduire les expérimentations ML avec MLflow pour garantir la traçabilité et faciliter le passage en production.

## Concepts MLflow
```
MLflow Tracking  → Logger métriques, paramètres, artéfacts
MLflow Projects  → Packager le code ML (reproductibilité)
MLflow Models    → Standardiser le format de modèles
MLflow Registry  → Gérer le cycle de vie des modèles
```

## Tracking basique
```python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, roc_auc_score

mlflow.set_experiment("classification-churn")

with mlflow.start_run(run_name="RF_baseline"):
    # Paramètres
    params = {'n_estimators': 100, 'max_depth': 5, 'random_state': 42}
    mlflow.log_params(params)
    
    # Entraînement
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)
    
    # Métriques
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]
    mlflow.log_metric("accuracy", accuracy_score(y_test, y_pred))
    mlflow.log_metric("auc_roc", roc_auc_score(y_test, y_proba))
    
    # Modèle + artéfacts
    mlflow.sklearn.log_model(model, "model")
    mlflow.log_artifact("feature_importance.png")
```

## MLflow avec Optuna (hyperparameter tuning tracké)
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

## Model Registry — cycle de vie
```python
# Enregistrement du meilleur modèle
mlflow.register_model(
    f"runs:/{best_run_id}/model",
    name="churn-predictor"
)

# Transition staging → production
client = mlflow.tracking.MlflowClient()
client.transition_model_version_stage(
    name="churn-predictor",
    version=3,
    stage="Production"
)

# Chargement du modèle de production
model = mlflow.sklearn.load_model("models:/churn-predictor/Production")
```

## Databricks MLflow (cloud)
```python
import mlflow
mlflow.set_tracking_uri("databricks")
mlflow.set_experiment("/Users/prenom.nom@email.com/churn-model")
# Le reste est identique — tracking sur Databricks
```

## Livrables
- Expériences MLflow documentées (paramètres + métriques)
- Rapport de comparaison des runs (tableau)
- Modèle enregistré dans le registry avec versionning
- Pipeline d'entraînement reproductible (MLflow Project)

## Format de sortie
Précise : type de modèle · métriques à tracker · nombre d'expériences prévues · environnement (local, Azure ML, Databricks) · critère de sélection du meilleur modèle
