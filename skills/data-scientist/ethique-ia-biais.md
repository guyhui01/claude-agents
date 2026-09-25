# Skill — AI Ethics, Bias & Fairness
> Certifications: CAP IABAC · DeepLearning.AI AI For Everyone · IBM Data Science

## Objective
Detect, measure and mitigate bias in AI systems to guarantee fairness, transparency and regulatory compliance (AI Act, GDPR).

## Types of ML bias
| Bias type | Description | Example |
|---|---|---|
| **Data bias** | Over/under-representation in the dataset | Credit model trained on a homogeneous population |
| **Measurement bias** | Inadequate indicators as a proxy | Using postal code as a proxy for income |
| **Algorithm bias** | Bias amplification through optimization | Minimizing global error penalizes minorities |
| **Confirmation bias** | Feature choice driven by beliefs | Excluding variables that contradict the hypothesis |
| **Deployment bias** | Distribution drift in production | Model trained in 2020, deployed in 2026 |

## Bias detection (Fairlearn)
```python
from fairlearn.metrics import MetricFrame, demographic_parity_difference
from sklearn.metrics import accuracy_score

# Create a MetricFrame per sensitive group
mf = MetricFrame(
    metrics=accuracy_score,
    y_true=y_test,
    y_pred=y_pred,
    sensitive_features=X_test['gender']
)

print(mf.by_group)          # Accuracy per group
print(mf.difference())       # Max gap between groups
print(mf.ratio())            # Min/max ratio between groups

# Demographic parity
dpd = demographic_parity_difference(y_test, y_pred,
                                     sensitive_features=X_test['gender'])
print(f"Demographic parity: {dpd:.3f}")  # Ideal: 0
```

## Fairness metrics
| Metric | Definition | Acceptable threshold |
|---|---|---|
| **Demographic Parity** | Equal positive-prediction rates | Diff < 0.10 |
| **Equalized Odds** | Equal TPR and FPR between groups | Diff < 0.10 |
| **Individual Fairness** | Similar individuals → similar predictions | Qualitative |
| **Calibration** | Probabilities aligned with reality | Per group |

## Bias mitigation
```python
from fairlearn.reductions import ExponentiatedGradient, DemographicParity

# Fairness constraint during training
constraint = DemographicParity()
mitigator = ExponentiatedGradient(
    estimator=LogisticRegression(),
    constraints=constraint
)
mitigator.fit(X_train, y_train, sensitive_features=X_train['gender'])
```

## AI Act — compliance obligations (2026)
| Risk category | Examples | Obligations |
|---|---|---|
| **Unacceptable risk** | Social scoring, subliminal manipulation | Banned |
| **High risk** | Recruitment, credit, justice | Audit, traceability, human oversight |
| **Limited risk** | Chatbots, deepfakes | Transparency (AI disclosure) |
| **Minimal risk** | Spam filters, recommendations | Voluntary best practices |

## Deliverables
- Bias audit (MetricFrame report)
- Documented mitigation plan
- AI Act compliance report
- Model AI governance policy (Model Card)

## Output format
Specify: model type · sensitive variables (gender, age, origin) · applicable regulation (AI Act level) · priority fairness metrics · report audience
