# Skill — Rapport Data Science & Communication des Résultats
> Certifications : IBM Data Science · Google Advanced Data Analytics · DeepLearning.AI ML Specialization

## Objectif
Produire des rapports data science clairs, actionnables et adaptés à l'audience — techniques pour les équipes, business pour les décideurs.

## Structure du rapport data science standard

### Pour une audience technique
```markdown
# [Titre du projet]
**Auteur** : [Nom] | **Date** : [Date] | **Version** : [v1.0]

## 1. Résumé exécutif (1 paragraphe)
→ Problème → Approche → Résultat clé → Recommandation

## 2. Contexte et objectif
→ Problème business (en termes métier, pas techniques)
→ Objectif ML (classification, régression, clustering...)
→ Contraintes (latence, interprétabilité, budget)

## 3. Données
→ Source, volume, période
→ Qualité : taux de complétude, anomalies détectées
→ Variables cibles et features clés

## 4. Méthodologie
→ Approche choisie et justification
→ Pipeline de traitement
→ Modèles testés

## 5. Résultats
→ Métriques de performance (tableau comparatif)
→ Visualisations clés (ROC, feature importance, résidus)
→ Limites et biais identifiés

## 6. Recommandation
→ Modèle retenu + justification
→ Seuil de décision recommandé
→ Conditions de mise en production

## 7. Prochaines étapes
→ Améliorations possibles
→ Données supplémentaires utiles
→ Calendrier suggéré
```

### Template Jupyter Notebook professionnel
```python
# ============================================================
# HEADER STANDARD
# ============================================================
"""
Projet   : [Nom]
Objectif : [Description en 1 ligne]
Auteur   : [Nom]
Date     : [Date]
Version  : 1.0
Données  : [Source]
"""

# Configuration
import warnings
warnings.filterwarnings('ignore')

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

plt.style.use('seaborn-v0_8-whitegrid')
pd.set_option('display.max_columns', None)
pd.set_option('display.float_format', lambda x: f'{x:.4f}')

RANDOM_STATE = 42
DATA_PATH = "data/raw/"
OUTPUT_PATH = "outputs/"

# Affichage des versions
import sklearn, xgboost
print(f"sklearn: {sklearn.__version__} | xgboost: {xgboost.__version__}")
```

## Visualisations clés à inclure

### Dashboard de synthèse du modèle
```python
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

def model_summary_dashboard(model, X_test, y_test, feature_names):
    fig = plt.figure(figsize=(16, 10))
    gs = GridSpec(2, 3, fig)

    # 1. Métriques (texte)
    ax1 = fig.add_subplot(gs[0, 0])
    metrics_text = f"""
    AUC-ROC   : {roc_auc_score(y_test, model.predict_proba(X_test)[:,1]):.3f}
    F1-Score  : {f1_score(y_test, model.predict(X_test)):.3f}
    Precision : {precision_score(y_test, model.predict(X_test)):.3f}
    Recall    : {recall_score(y_test, model.predict(X_test)):.3f}
    """
    ax1.text(0.1, 0.5, metrics_text, transform=ax1.transAxes, fontsize=12,
             fontfamily='monospace', verticalalignment='center')
    ax1.set_title("Métriques de performance")
    ax1.axis('off')

    # 2. Matrice de confusion
    ax2 = fig.add_subplot(gs[0, 1])
    cm = confusion_matrix(y_test, model.predict(X_test))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=ax2)
    ax2.set_title("Matrice de Confusion")

    # 3. Feature Importance (SHAP)
    ax3 = fig.add_subplot(gs[0, 2])
    import shap
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(X_test)
    shap.summary_plot(shap_values, X_test, feature_names=feature_names,
                      plot_type="bar", show=False, ax=ax3)

    plt.tight_layout()
    plt.savefig(f"{OUTPUT_PATH}model_dashboard.png", dpi=150, bbox_inches='tight')
```

## Adapter selon l'audience

### Synthèse CODIR (non-technique, 1 page)
```
Structure :
  1. Problème en 1 phrase business
  2. Ce que l'IA fait concrètement
  3. Performance (1 chiffre clé : "Détecte 87% des fraudes")
  4. Ce qui change dans le processus (impact opérationnel)
  5. Recommandation avec budget et délai

Règles :
  ✅ Chiffres métier (€, %, clients, heures)
  ✅ Comparaison avec l'avant (baseline)
  ❌ Pas de jargon ML (AUC, F1, gradient boosting)
  ❌ Pas de code ni d'équations
```

### Rapport pour les équipes métier
```
Structure :
  1. Ce que le modèle prédit / détecte / recommande
  2. Comment l'utiliser au quotidien (workflow)
  3. Que faire quand le modèle se trompe
  4. Les cas où NE PAS faire confiance au modèle
  5. Comment signaler un problème (feedback loop)
```

## Livrables
- Notebook Jupyter documenté (nbconvert → HTML/PDF)
- Rapport synthétique CODIR (1 page)
- Présentation data science (10 slides max)
- Model Card (fiche technique du modèle)

## Format de sortie
Précise : audience principale (technique / métier / CODIR) · type de modèle · résultats à communiquer · format de rendu (notebook, PDF, slides, dashboard)
