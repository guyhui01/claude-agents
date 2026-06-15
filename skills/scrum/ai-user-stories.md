# Skill — User Stories for AI Features
> Certifications: PSPO-AI · PSPO I

## Objective
Write User Stories tailored to AI-based features, handling the uncertainty of outputs.

## Key differences vs. classic stories
| Aspect | Classic story | AI story |
|---|---|---|
| Output | Deterministic | Probabilistic |
| Acceptance criteria | Binary (pass/fail) | Performance thresholds (precision ≥ X%) |
| Test | Unit/functional | Evaluation on a dataset |
| Evolution | Stable | May drift if the model changes |

## Recommended format
```
As a [persona],
I want the [AI feature] to suggest [expected output],
So that [user benefit].

Acceptance criteria:
- The model produces a relevant answer in ≥ 85% of test cases
- The user can correct or reject the suggestion in 1 click
- On failure, a clear message is shown (no empty response)
- Response time is ≤ 3 seconds at the 95th percentile
- No personal data is sent to the model without consent
```

## Common AI story types
- Content generation (text, image, code)
- Classification / detection (tags, sentiment, anomalies)
- Recommendation (product, content, action)
- Information extraction (summary, NER, parsing)
- Conversation / Chat (assistant, support, onboarding)

## Fallback story (mandatory)
Always write a graceful-degradation story:
"If the model is unavailable or returns an invalid response, then..."

## Deliverables
- AI User Stories with probabilistic acceptance criteria
- Associated fallback story
- Test dataset (golden dataset)
- AI Definition of Done (includes a model performance threshold)

## Output format
Specify: AI feature type · target model · acceptable quality threshold · latency constraints
