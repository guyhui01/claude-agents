# Skill — Machine Learning Modeling
> Certifications: IBM Data Science · Google Advanced Data Analytics · Databricks ML Associate · DeepLearning.AI ML Specialization

## Objective
Select, train and optimize the ML models best suited to the problem and the data.

## Choosing the right algorithm

### Classification
| Algorithm | Advantages | When to use |
|---|---|---|
| Logistic Regression | Interpretable, fast | Baseline, linear features |
| Random Forest | Robust, feature importance | Tabular data, little tuning |
| XGBoost / LightGBM | Very performant | Competitions, mixed data |
| SVM | Effective in high dimensions | Text, small datasets |
| Neural Network | Non-linear complexity | Large datasets, image, text |

### Regression
| Algorithm | Advantages | When to use |
|---|---|---|
| Linear Regression | Interpretable | Baseline, linear relationships |
| Ridge / Lasso | Regularization | Multicollinearity, feature selection |
| Gradient Boosting | Accurate | Complex predictions |
| Neural Network | Very flexible | Time series, complex relationships |

## Training and validation
```python
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold

# Stratified split (important for imbalanced classes)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Cross-validation
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X_train, y_train, cv=cv, scoring='roc_auc')
print(f"AUC: {scores.mean():.3f} ± {scores.std():.3f}")
```

## Hyperparameter optimization
```python
from sklearn.model_selection import RandomizedSearchCV
import optuna

# Optuna (recommended 2026)
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

## Evaluation metrics
| Problem | Key metrics | When to use |
|---|---|---|
| Binary classification | AUC-ROC, F1, Precision, Recall | Always |
| Imbalanced classification | F1-macro, PR-AUC | Rare classes |
| Regression | MAE, RMSE, R² | Always |
| Ranking | NDCG, MAP | Recommendation |

## Interpretability (SHAP)
```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Global importance
shap.summary_plot(shap_values, X_test)

# Local explanation (1 prediction)
shap.waterfall_plot(explainer(X_test)[0])
```

## Deliverables
- Experimentation notebook (MLflow-tracked)
- Performance report (metrics + visualizations)
- Serialized model (joblib / ONNX)
- SHAP interpretability report

## Output format
Specify: problem type · priority metrics · performance constraints (latency, memory) · required interpretability (regulatory)
