# Skills — Data Scientist

> Dossier rattaché à `AGENT-DATA-SCIENTIST.md`
> Référentiels : IBM Data Science Pro · Google Advanced Data Analytics · Azure DP-100 · Databricks · DeepLearning.AI ML & DL Specializations · Kaggle · SAS Data Scientist · CAP IABAC

---

## Index des skills (13)

### Exploration & Préparation
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`analyse-exploratoire.md`](analyse-exploratoire.md) | EDA (stats descriptives, distributions, corrélations) | IBM DS · Google Advanced Analytics |
| [`feature-engineering.md`](feature-engineering.md) | Feature engineering (sélection, création, encodage) | IBM DS · DeepLearning.AI ML |
| [`statistiques-tests.md`](statistiques-tests.md) | Statistiques inférentielles (tests d'hypothèses, IC) | Google Advanced Analytics · IBM DS |

### Modélisation
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`modelisation-ml.md`](modelisation-ml.md) | ML classique (sklearn, XGBoost, LightGBM, CatBoost) | DeepLearning.AI ML · Databricks |
| [`deep-learning.md`](deep-learning.md) | Deep Learning (CNN, RNN, Transformers, ViT) | DeepLearning.AI DL · IBM DS · Azure DP-100 |
| [`nlp-classique.md`](nlp-classique.md) | NLP classique (TF-IDF, embeddings, classification — hors LLM) | DeepLearning.AI · IBM DS |
| [`time-series.md`](time-series.md) | Forecasting & Time Series (ARIMA, Prophet, LSTM) | DeepLearning.AI · IBM DS |

### Évaluation & Communication
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`evaluation-modeles.md`](evaluation-modeles.md) | Évaluation modèles (métriques, CV, ROC/PR) | DeepLearning.AI ML · IBM DS |
| [`experimentation-ab-ds.md`](experimentation-ab-ds.md) | Tests A/B (design, calcul puissance, analyse) | Google Advanced Analytics |
| [`visualisation-data.md`](visualisation-data.md) | Visualisation (matplotlib, seaborn, plotly, dash) | IBM DS · Google Advanced Analytics |
| [`rapport-data-science.md`](rapport-data-science.md) | Rédiger un rapport data science (notebook → exec) | IBM DS · Google Advanced Analytics |

### Industrialisation & Éthique
| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`mlflow-experimentation.md`](mlflow-experimentation.md) | Tracker expérimentations avec MLflow | Databricks · Azure DP-100 · IBM DS |
| [`ethique-ia-biais.md`](ethique-ia-biais.md) | Audit éthique IA, biais & fairness | CAP IABAC · DeepLearning.AI · IBM DS |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉCOUVRIR LES DONNÉES ?
    → analyse-exploratoire.md (EDA)
    → statistiques-tests.md (tests d'hypothèses)
    → visualisation-data.md (graphiques)

  ... PRÉPARER LES FEATURES ?
    → feature-engineering.md (transformations)

  ... CONSTRUIRE UN MODÈLE ?
    → modelisation-ml.md (ML classique)
    → deep-learning.md (CNN/RNN/Transformers)
    → nlp-classique.md (NLP non-LLM)
    → time-series.md (forecasting)

  ... ÉVALUER & EXPÉRIMENTER ?
    → evaluation-modeles.md (métriques)
    → experimentation-ab-ds.md (A/B tests)
    → mlflow-experimentation.md (tracking + registry)

  ... COMMUNIQUER & RESPONSABILISER ?
    → rapport-data-science.md (notebook → exec)
    → ethique-ia-biais.md (fairness audit)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| LLM, agents IA, RAG | `AGENT-DEV-PYTHON-IA.md` | DATA-SCI = ML classique ; DEV-PYTHON = LLM/agents |
| Pipelines data / ETL | `AGENT-DATA-ENGINEER.md` | DATA-SCI = consomme ; DATA-ENG = produit |
| Déploiement modèles | `AGENT-MLOPS-ENGINEER.md` | DATA-SCI = modélise ; MLOPS = déploie |
| Fine-tuning LLM | `AGENT-DEV-PYTHON-IA.md` skill `fine-tuning-peft.md` | DATA-SCI = ML classique ; DEV-PYTHON = LoRA/QLoRA |
| BI / analytics descriptive | `AGENT-BI-ANALYST.md` | DATA-SCI = prédictif/prescriptif ; BI = descriptif/diagnostic |
| Conformité éthique IA (AI Act) | `AGENT-JURIDIQUE-IA.md` | DATA-SCI = audit technique fairness ; JURIDIQUE = obligations légales |

---

## Référentiels et standards utilisés

- **scikit-learn** : https://scikit-learn.org/
- **XGBoost / LightGBM / CatBoost** : gradient boosting libraries
- **PyTorch** : https://pytorch.org/ (cf. dev_python_ia)
- **MLflow** : https://mlflow.org/
- **Prophet** : https://facebook.github.io/prophet/
- **Fairlearn / AIF360** : pour fairness audit
- **NIST AI RMF 1.0 (2023)** : pour gouvernance IA
- **EU AI Act** : Annexe III pour systèmes à haut risque
