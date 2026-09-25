# Skill — ML Model Evaluation and Selection
> Certifications: DeepLearning.AI ML Specialization · IBM Data Science · Azure DP-100

## Objective
Rigorously evaluate ML models, choose the right metrics and select the best model for deployment.

## Metrics by problem type

### Binary classification
```python
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, average_precision_score,
    confusion_matrix, classification_report
)
import matplotlib.pyplot as plt
from sklearn.metrics import RocCurveDisplay, PrecisionRecallDisplay

def evaluate_classifier(y_true, y_pred, y_proba, model_name="Model"):
    print(f"=== {model_name} ===")
    print(f"Accuracy  : {accuracy_score(y_true, y_pred):.4f}")
    print(f"Precision : {precision_score(y_true, y_pred):.4f}")
    print(f"Recall    : {recall_score(y_true, y_pred):.4f}")
    print(f"F1-Score  : {f1_score(y_true, y_pred):.4f}")
    print(f"AUC-ROC   : {roc_auc_score(y_true, y_proba):.4f}")
    print(f"AUC-PR    : {average_precision_score(y_true, y_proba):.4f}")
    print("\nClassification Report:")
    print(classification_report(y_true, y_pred))

# ROC and Precision-Recall curves
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
RocCurveDisplay.from_predictions(y_true, y_proba, ax=axes[0])
PrecisionRecallDisplay.from_predictions(y_true, y_proba, ax=axes[1])
axes[0].set_title("ROC Curve")
axes[1].set_title("Precision-Recall Curve")
```

### Regression
```python
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

def evaluate_regressor(y_true, y_pred, model_name="Model"):
    mae  = mean_absolute_error(y_true, y_pred)
    rmse = np.sqrt(mean_squared_error(y_true, y_pred))
    r2   = r2_score(y_true, y_pred)
    mape = np.mean(np.abs((y_true - y_pred) / (y_true + 1e-10))) * 100

    print(f"=== {model_name} ===")
    print(f"MAE  : {mae:.4f}")
    print(f"RMSE : {rmse:.4f}")
    print(f"R²   : {r2:.4f}")
    print(f"MAPE : {mape:.2f}%")
```

## Rigorous Cross-Validation
```python
from sklearn.model_selection import (
    StratifiedKFold, cross_validate, learning_curve
)
import numpy as np

def cross_val_full_report(model, X, y, cv=5):
    skf = StratifiedKFold(n_splits=cv, shuffle=True, random_state=42)

    scoring = {
        'roc_auc': 'roc_auc',
        'f1': 'f1',
        'precision': 'precision',
        'recall': 'recall'
    }

    results = cross_validate(model, X, y, cv=skf, scoring=scoring,
                              return_train_score=True)

    for metric in ['roc_auc', 'f1', 'precision', 'recall']:
        val = results[f'test_{metric}']
        print(f"{metric:12}: {val.mean():.4f} ± {val.std():.4f}")

    # Detect overfitting
    train_auc = results['train_roc_auc'].mean()
    test_auc  = results['test_roc_auc'].mean()
    gap = train_auc - test_auc
    if gap > 0.05:
        print(f"⚠️  Overfitting detected: train/val gap = {gap:.4f}")
```

## Learning Curves
```python
from sklearn.model_selection import learning_curve

def plot_learning_curve(model, X, y):
    train_sizes, train_scores, val_scores = learning_curve(
        model, X, y,
        train_sizes=np.linspace(0.1, 1.0, 10),
        cv=5, scoring='roc_auc', n_jobs=-1
    )

    plt.figure(figsize=(10, 6))
    plt.plot(train_sizes, train_scores.mean(axis=1), label='Train AUC')
    plt.plot(train_sizes, val_scores.mean(axis=1), label='Validation AUC')
    plt.fill_between(train_sizes,
                     train_scores.mean(1) - train_scores.std(1),
                     train_scores.mean(1) + train_scores.std(1), alpha=0.1)
    plt.fill_between(train_sizes,
                     val_scores.mean(1) - val_scores.std(1),
                     val_scores.mean(1) + val_scores.std(1), alpha=0.1)
    plt.xlabel("Training size")
    plt.ylabel("AUC-ROC")
    plt.title("Learning Curve")
    plt.legend()
    # Interpret: large gap = overfitting, low val = underfitting
```

## Model comparison (dashboard)
```python
import pandas as pd

def compare_models(models_dict: dict, X_train, X_test, y_train, y_test):
    results = []
    for name, model in models_dict.items():
        model.fit(X_train, y_train)
        y_pred  = model.predict(X_test)
        y_proba = model.predict_proba(X_test)[:, 1]
        results.append({
            'Model': name,
            'AUC-ROC': roc_auc_score(y_test, y_proba),
            'F1':      f1_score(y_test, y_pred),
            'Precision': precision_score(y_test, y_pred),
            'Recall':    recall_score(y_test, y_pred)
        })

    df = pd.DataFrame(results).sort_values('AUC-ROC', ascending=False)
    print(df.to_string(index=False))
    return df
```

## Final model selection criteria
| Criterion | Description |
|---|---|
| **Performance** | Best metric on the test set (AUC, F1...) |
| **Stability** | Low cross-val variance (std < 0.02) |
| **Interpretability** | Required? (regulation, business trust) |
| **Latency** | Acceptable inference time for the use case |
| **Complexity** | Ease of maintenance and updates |
| **Fairness** | Equity between groups (see skill ethique-ia-biais.md) |

## Deliverables
- Model comparison table (metrics + time + size)
- ROC, PR and Learning Curve plots
- Documented selection report (choice + rationale)
- Selected model serialized (joblib / MLflow)

## Output format
Specify: problem type · priority metric · interpretability constraint · required performance threshold · candidate models to compare
