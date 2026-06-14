# Skill — Data Science Reporting & Results Communication
> Certifications: IBM Data Science · Google Advanced Data Analytics · DeepLearning.AI ML Specialization

## Objective
Produce clear, actionable data science reports tailored to the audience — technical for teams, business for decision-makers.

## Standard data science report structure

### For a technical audience
```markdown
# [Project title]
**Author**: [Name] | **Date**: [Date] | **Version**: [v1.0]

## 1. Executive summary (1 paragraph)
→ Problem → Approach → Key result → Recommendation

## 2. Context and objective
→ Business problem (in business terms, not technical)
→ ML objective (classification, regression, clustering...)
→ Constraints (latency, interpretability, budget)

## 3. Data
→ Source, volume, period
→ Quality: completeness rate, anomalies detected
→ Target variables and key features

## 4. Methodology
→ Chosen approach and rationale
→ Processing pipeline
→ Models tested

## 5. Results
→ Performance metrics (comparison table)
→ Key visualizations (ROC, feature importance, residuals)
→ Identified limits and biases

## 6. Recommendation
→ Selected model + rationale
→ Recommended decision threshold
→ Production-readiness conditions

## 7. Next steps
→ Possible improvements
→ Useful additional data
→ Suggested timeline
```

### Professional Jupyter Notebook template
```python
# ============================================================
# STANDARD HEADER
# ============================================================
"""
Project   : [Name]
Objective : [1-line description]
Author    : [Name]
Date      : [Date]
Version   : 1.0
Data      : [Source]
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

# Display versions
import sklearn, xgboost
print(f"sklearn: {sklearn.__version__} | xgboost: {xgboost.__version__}")
```

## Key visualizations to include

### Model summary dashboard
```python
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

def model_summary_dashboard(model, X_test, y_test, feature_names):
    fig = plt.figure(figsize=(16, 10))
    gs = GridSpec(2, 3, fig)

    # 1. Metrics (text)
    ax1 = fig.add_subplot(gs[0, 0])
    metrics_text = f"""
    AUC-ROC   : {roc_auc_score(y_test, model.predict_proba(X_test)[:,1]):.3f}
    F1-Score  : {f1_score(y_test, model.predict(X_test)):.3f}
    Precision : {precision_score(y_test, model.predict(X_test)):.3f}
    Recall    : {recall_score(y_test, model.predict(X_test)):.3f}
    """
    ax1.text(0.1, 0.5, metrics_text, transform=ax1.transAxes, fontsize=12,
             fontfamily='monospace', verticalalignment='center')
    ax1.set_title("Performance metrics")
    ax1.axis('off')

    # 2. Confusion matrix
    ax2 = fig.add_subplot(gs[0, 1])
    cm = confusion_matrix(y_test, model.predict(X_test))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=ax2)
    ax2.set_title("Confusion Matrix")

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

## Adapt to the audience

### Leadership summary (non-technical, 1 page)
```
Structure:
  1. The problem in 1 business sentence
  2. What the AI concretely does
  3. Performance (1 key figure: "Detects 87% of fraud")
  4. What changes in the process (operational impact)
  5. Recommendation with budget and timeline

Rules:
  ✅ Business figures (€, %, customers, hours)
  ✅ Comparison with the before (baseline)
  ❌ No ML jargon (AUC, F1, gradient boosting)
  ❌ No code or equations
```

### Report for business teams
```
Structure:
  1. What the model predicts / detects / recommends
  2. How to use it day-to-day (workflow)
  3. What to do when the model is wrong
  4. The cases where NOT to trust the model
  5. How to report a problem (feedback loop)
```

## Deliverables
- Documented Jupyter notebook (nbconvert → HTML/PDF)
- Leadership summary report (1 page)
- Data science presentation (10 slides max)
- Model Card (model technical sheet)

## Output format
Specify: main audience (technical / business / leadership) · model type · results to communicate · delivery format (notebook, PDF, slides, dashboard)
