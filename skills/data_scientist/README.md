# Skills — Data Scientist

> Folder attached to `AGENT-DATA-SCIENTIST.md`
> Frameworks: IBM Data Science Pro · Google Advanced Data Analytics · Azure DP-100 · Databricks · DeepLearning.AI ML & DL Specializations · Kaggle · SAS Data Scientist · CAP IABAC

---

## Skill index (13)

### Exploration & Preparation
| Skill | When to invoke | Certification |
|---|---|---|
| [`analyse-exploratoire.md`](analyse-exploratoire.md) | EDA (descriptive stats, distributions, correlations) | IBM DS · Google Advanced Analytics |
| [`feature-engineering.md`](feature-engineering.md) | Feature engineering (selection, creation, encoding) | IBM DS · DeepLearning.AI ML |
| [`statistiques-tests.md`](statistiques-tests.md) | Inferential statistics (hypothesis testing, CI) | Google Advanced Analytics · IBM DS |

### Modeling
| Skill | When to invoke | Certification |
|---|---|---|
| [`modelisation-ml.md`](modelisation-ml.md) | Classic ML (sklearn, XGBoost, LightGBM, CatBoost) | DeepLearning.AI ML · Databricks |
| [`deep-learning.md`](deep-learning.md) | Deep Learning (CNN, RNN, Transformers, ViT) | DeepLearning.AI DL · IBM DS · Azure DP-100 |
| [`nlp-classique.md`](nlp-classique.md) | Classic NLP (TF-IDF, embeddings, classification — no LLM) | DeepLearning.AI · IBM DS |
| [`time-series.md`](time-series.md) | Forecasting & Time Series (ARIMA, Prophet, LSTM) | DeepLearning.AI · IBM DS |

### Evaluation & Communication
| Skill | When to invoke | Certification |
|---|---|---|
| [`evaluation-modeles.md`](evaluation-modeles.md) | Model evaluation (metrics, CV, ROC/PR) | DeepLearning.AI ML · IBM DS |
| [`experimentation-ab-ds.md`](experimentation-ab-ds.md) | A/B tests (design, power calculation, analysis) | Google Advanced Analytics |
| [`visualisation-data.md`](visualisation-data.md) | Visualization (matplotlib, seaborn, plotly, dash) | IBM DS · Google Advanced Analytics |
| [`rapport-data-science.md`](rapport-data-science.md) | Write a data science report (notebook → exec) | IBM DS · Google Advanced Analytics |

### Industrialization & Ethics
| Skill | When to invoke | Certification |
|---|---|---|
| [`mlflow-experimentation.md`](mlflow-experimentation.md) | Track experiments with MLflow | Databricks · Azure DP-100 · IBM DS |
| [`ethique-ia-biais.md`](ethique-ia-biais.md) | AI ethics, bias & fairness audit | CAP IABAC · DeepLearning.AI · IBM DS |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... DISCOVER THE DATA?
    → analyse-exploratoire.md (EDA)
    → statistiques-tests.md (hypothesis testing)
    → visualisation-data.md (charts)

  ... PREPARE THE FEATURES?
    → feature-engineering.md (transformations)

  ... BUILD A MODEL?
    → modelisation-ml.md (classic ML)
    → deep-learning.md (CNN/RNN/Transformers)
    → nlp-classique.md (non-LLM NLP)
    → time-series.md (forecasting)

  ... EVALUATE & EXPERIMENT?
    → evaluation-modeles.md (metrics)
    → experimentation-ab-ds.md (A/B tests)
    → mlflow-experimentation.md (tracking + registry)

  ... COMMUNICATE & BE ACCOUNTABLE?
    → rapport-data-science.md (notebook → exec)
    → ethique-ia-biais.md (fairness audit)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| LLM, AI agents, RAG | `AGENT-DEV-PYTHON-IA.md` | DATA-SCI = classic ML; DEV-PYTHON = LLM/agents |
| Data / ETL pipelines | `AGENT-DATA-ENGINEER.md` | DATA-SCI = consumes; DATA-ENG = produces |
| Model deployment | `AGENT-MLOPS-ENGINEER.md` | DATA-SCI = models; MLOPS = deploys |
| LLM fine-tuning | `AGENT-DEV-PYTHON-IA.md` skill `fine-tuning-peft.md` | DATA-SCI = classic ML; DEV-PYTHON = LoRA/QLoRA |
| BI / descriptive analytics | `AGENT-BI-ANALYST.md` | DATA-SCI = predictive/prescriptive; BI = descriptive/diagnostic |
| AI ethics compliance (AI Act) | `AGENT-JURIDIQUE-IA.md` | DATA-SCI = technical fairness audit; JURIDIQUE = legal obligations |

---

## Frameworks and standards used

- **scikit-learn**: https://scikit-learn.org/
- **XGBoost / LightGBM / CatBoost**: gradient boosting libraries
- **PyTorch**: https://pytorch.org/ (cf. dev_python_ia)
- **MLflow**: https://mlflow.org/
- **Prophet**: https://facebook.github.io/prophet/
- **Fairlearn / AIF360**: for fairness audit
- **NIST AI RMF 1.0 (2023)**: for AI governance
- **EU AI Act**: Annex III for high-risk systems
