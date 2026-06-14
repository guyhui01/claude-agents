# Skill — CI/CD for AI Pipelines
> Certifications: GitHub Actions Certification · AWS DevOps Engineer Professional

## Objective
Automate the testing, evaluation and deployment of AI systems via CI/CD pipelines.

## Complete GitHub Actions pipeline
```yaml
name: CI/CD AI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.11"
          cache: "pip"
      - run: pip install -r requirements.txt -r requirements-test.txt

      # Classic unit tests
      - name: Unit Tests
        run: pytest tests/unit/ -v --cov=src --cov-report=xml

      # LLM integration tests (with mock)
      - name: Integration Tests (LLM mocked)
        run: pytest tests/integration/ -v
        env:
          LLM_MOCK: "true"

  eval-llm:
    runs-on: ubuntu-latest
    needs: test
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      # RAGAs evaluation on the golden dataset
      - name: LLM Evaluation
        run: python scripts/evaluate_rag.py --dataset tests/golden_dataset.json
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
      # Fail if the metrics are below the threshold
      - name: Check Metrics Threshold
        run: python scripts/check_metrics.py --faithfulness 0.85 --relevance 0.80

  build-push:
    runs-on: ubuntu-latest
    needs: eval-llm
    steps:
      - uses: actions/checkout@v4
      - name: Build & Push Docker Image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: registry/llm-api:${{ github.sha }}

  deploy:
    runs-on: ubuntu-latest
    needs: build-push
    environment: production
    steps:
      - name: Deploy to Kubernetes
        run: kubectl set image deployment/llm-api llm-api=registry/llm-api:${{ github.sha }}
```

## LLM-specific tests
```python
# tests/integration/test_rag.py
import pytest
from unittest.mock import patch

@pytest.mark.parametrize("query,expected_topics", [
    ("What is PI Planning?", ["SAFe", "PI", "planning"]),
    ("How do I write a User Story?", ["user", "need", "value"]),
])
async def test_rag_relevance(query, expected_topics, rag_chain):
    response = await rag_chain.ainvoke({"query": query})
    for topic in expected_topics:
        assert topic.lower() in response["answer"].lower()
```

## Deliverables
- Complete GitHub Actions pipeline (test → eval → build → deploy)
- Golden dataset for automated LLM evaluation
- Evaluation scripts with configurable thresholds
- Slack/Teams notifications on failure

## Output format
Specify: CI platform (GitHub, GitLab, Jenkins) · target cloud · metric thresholds · deployment frequency
