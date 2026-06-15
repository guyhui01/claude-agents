# QA Agile Skill — AI Testing (ISTQB® AI Testing)

> Certification: CT-AI · CT-MBT
> Agent: AGENT-QA-AGILE.md
> Methodology: Agile

## Specifics of AI systems to test

| Characteristic | Impact on testing |
|---|---|
| **Non-determinism** | Variable results → no single expected result |
| **Continuous learning** | The model can drift → monitoring tests |
| **Training data** | Bias, quality, representativeness |
| **Black box** | Hard to explain why an error occurs |
| **Confidence / score** | Acceptability thresholds to define |

## AI test types (ISTQB AI Testing)

| Type | Goal |
|---|---|
| **Data testing** | Quality, bias, completeness of the datasets |
| **Model testing** | Precision, recall, F1-score, AUC |
| **Functional testing** | The AI system responds correctly to business cases |
| **Fairness testing** | No discrimination by group |
| **Robustness testing** | Behavior with unusual data |
| **Explainability testing** | The AI decision is understandable |
| **Drift testing** | Model degradation over time |

## AI quality metrics

```
ACCURACY: (TP + TN) / Total
PRECISION: TP / (TP + FP)
RECALL: TP / (TP + FN)
F1-SCORE: 2 × (Precision × Recall) / (Precision + Recall)
AUC-ROC: Discriminative ability of the model

Acceptability thresholds to define with the business:
- Target precision: > [X]%
- Target recall: > [X]% (critical if false negatives are dangerous)
- Acceptable error rate: < [X]%
```

## AI test case template

```
ID: TIA-[XXX]
AI component: [model / service name]
Type: ☐ Functional ☐ Robustness ☐ Fairness ☐ Drift

INPUT:
[Description of the data fed to the model]

EXPECTED RESULT:
Expected class: [label]
Minimum confidence score: > [X]%
Response time: < [X ms]

OBTAINED RESULT:
Predicted class: [...]
Score: [X]%
Time: [X ms]

STATUS: ☐ Pass  ☐ Fail  ☐ Ambiguous (to assess with the business)
```

## Test checklist for an LLM / AI chatbot

```
FUNCTIONAL:
☐ Correct answers on nominal cases
☐ Handling of out-of-scope questions
☐ Consistency of answers on similar questions
☐ Compliance with constraints (language, tone, length)

ROBUSTNESS:
☐ Behavior with malformed inputs
☐ Resistance to prompt injections
☐ Handling of inappropriate requests

QUALITY:
☐ No hallucinations on verifiable facts
☐ Source citations if applicable
☐ No discriminatory bias detected
```
