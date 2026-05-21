# Skill — Modélisation Machine Learning
> Certifications : IBM Data Science · Google Advanced Data Analytics · Databricks ML Associate · DeepLearning.AI ML Specialization

## Objectif
Sélectionner, entraîner et optimiser les modèles ML les plus adaptés au problème et aux données.

## Sélection du bon algorithme

### Classification
| Algorithme | Avantages | Quand l'utiliser |
|---|---|---|
| Logistic Regression | Interprétable, rapide | Baseline, features linéaires |
| Random Forest | Robuste, feature importance | Données tabulaires, peu de tuning |
| XGBoost / LightGBM | Très performant | Compétitions, données mixtes |
| SVM | Efficace haute dimension | Texte, petits datasets |
| Neural Network | Complexité non-linéaire | Gros datasets, image, texte |

### Régression
| Algorithme | Avantages | Quand l'utiliser |
|---|---|---|
| Linear Regression | Interprétable | Baseline, relations linéaires |
| Ridge / Lasso | Régularisation | Multicolinéarité, feature selection |
| Gradient Boosting | Précis | Prédictions complexes |
| Neural Network | Très flexible | Séries temporelles, relations complexes |

## Entraînement et validation
```python
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold

# Split stratifié (important pour classes déséquilibrées)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Cross-validation
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X_train, y_train, cv=cv, scoring='roc_auc')
print(f"AUC: {scores.mean():.3f} ± {scores.std():.3f}")
```

## Optimisation des hyperparamètres
```python
from sklearn.model_selection import RandomizedSearchCV
import optuna

# Optuna (recommandé 2026)
def objective(trial):
    params = {
        'n_estimators': trial.suggest_int('n_estimators', 100, 1000),
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'learning_rate': trial.suggest_float('learning_rate', 1e-4, 0.3, log=True)
    }
    model = XGBClassifier(**params)
    return cross_val_score(model, X_train, y_train, cv=3, scoring='roc_auc').mean()

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)
```

## Métriques d'évaluation
| Problème | Métriques clés | Quand les utiliser |
|---|---|---|
| Classification binaire | AUC-ROC, F1, Precision, Recall | Toujours |
| Classification déséquilibrée | F1-macro, PR-AUC | Classes rares |
| Régression | MAE, RMSE, R² | Toujours |
| Ranking | NDCG, MAP | Recommandation |

## Interprétabilité (SHAP)
```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Importance globale
shap.summary_plot(shap_values, X_test)

# Explication locale (1 prédiction)
shap.waterfall_plot(explainer(X_test)[0])
```

## Livrables
- Notebook d'expérimentation (MLflow tracké)
- Rapport de performance (métriques + visualisations)
- Modèle sérialisé (joblib / ONNX)
- Rapport d'interprétabilité SHAP

## Format de sortie
Précise : type de problème · métriques prioritaires · contraintes de performance (latence, mémoire) · interprétabilité requise (réglementaire)
