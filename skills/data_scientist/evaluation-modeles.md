# Skill — Évaluation et Sélection des Modèles ML
> Certifications : DeepLearning.AI ML Specialization · IBM Data Science · Azure DP-100

## Objectif
Évaluer rigoureusement les modèles ML, choisir les bonnes métriques et sélectionner le meilleur modèle pour le déploiement.

## Métriques par type de problème

### Classification binaire
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

# Courbes ROC et Précision-Rappel
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
RocCurveDisplay.from_predictions(y_true, y_proba, ax=axes[0])
PrecisionRecallDisplay.from_predictions(y_true, y_proba, ax=axes[1])
axes[0].set_title("Courbe ROC")
axes[1].set_title("Courbe Précision-Rappel")
```

### Régression
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

## Cross-Validation rigoureuse
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

    # Détecter l'overfitting
    train_auc = results['train_roc_auc'].mean()
    test_auc  = results['test_roc_auc'].mean()
    gap = train_auc - test_auc
    if gap > 0.05:
        print(f"⚠️  Overfitting détecté : gap train/val = {gap:.4f}")
```

## Courbes d'apprentissage (Learning Curves)
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
    plt.xlabel("Taille d'entraînement")
    plt.ylabel("AUC-ROC")
    plt.title("Learning Curve")
    plt.legend()
    # Interpréter : gap élevé = overfitting, val basse = underfitting
```

## Comparaison de modèles (tableau de bord)
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

## Critères de sélection du modèle final
| Critère | Description |
|---|---|
| **Performance** | Meilleure métrique sur le test set (AUC, F1...) |
| **Stabilité** | Faible variance cross-val (std < 0.02) |
| **Interprétabilité** | Requis ? (réglementation, confiance métier) |
| **Latence** | Temps d'inférence acceptable pour le cas d'usage |
| **Complexité** | Facilité de maintenance et mise à jour |
| **Fairness** | Équité entre groupes (voir skill éthique-ia-biais.md) |

## Livrables
- Tableau comparatif des modèles (métriques + temps + taille)
- Courbes ROC, PR et Learning Curve
- Rapport de sélection documenté (choix + justification)
- Modèle sélectionné sérialisé (joblib / MLflow)

## Format de sortie
Précise : type de problème · métrique prioritaire · contrainte d'interprétabilité · seuil de performance requis · modèles candidats à comparer
