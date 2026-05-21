# Skill — CI/CD pour les Pipelines IA
> Certifications : GitHub Actions Certification · AWS DevOps Engineer Professional

## Objectif
Automatiser les tests, l'évaluation et le déploiement des systèmes IA via des pipelines CI/CD.

## Pipeline GitHub Actions complet
```yaml
name: CI/CD IA Pipeline

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

      # Tests unitaires classiques
      - name: Unit Tests
        run: pytest tests/unit/ -v --cov=src --cov-report=xml

      # Tests d'intégration LLM (avec mock)
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
      # Évaluation RAGAs sur golden dataset
      - name: LLM Evaluation
        run: python scripts/evaluate_rag.py --dataset tests/golden_dataset.json
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
      # Fail si les métriques sont sous le seuil
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

## Tests LLM spécifiques
```python
# tests/integration/test_rag.py
import pytest
from unittest.mock import patch

@pytest.mark.parametrize("query,expected_topics", [
    ("Qu'est-ce que le PI Planning ?", ["SAFe", "PI", "planning"]),
    ("Comment rédiger une User Story ?", ["utilisateur", "besoin", "valeur"]),
])
async def test_rag_relevance(query, expected_topics, rag_chain):
    response = await rag_chain.ainvoke({"query": query})
    for topic in expected_topics:
        assert topic.lower() in response["answer"].lower()
```

## Livrables
- Pipeline GitHub Actions complet (test → eval → build → deploy)
- Golden dataset pour l'évaluation LLM automatisée
- Scripts d'évaluation avec seuils configurables
- Notifications Slack/Teams en cas d'échec

## Format de sortie
Précise : plateforme CI (GitHub, GitLab, Jenkins) · cloud cible · seuils de métriques · fréquence de déploiement
