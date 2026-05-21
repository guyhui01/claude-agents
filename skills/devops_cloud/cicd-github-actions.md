# Skill — Pipelines CI/CD GitHub Actions
> Certifications : GitHub Actions Certified (2026), CKA, AWS DevOps Professional, HashiCorp Terraform Associate

## Objectif
Concevoir et implémenter des pipelines CI/CD robustes avec GitHub Actions, couvrant tests automatisés, build multi-architecture, déploiement progressif et gestion sécurisée des secrets.

## Frameworks & Patterns CI/CD

### Structure de pipeline recommandée

```
.github/
  workflows/
    ci.yml          # Tests + build (tous les PRs)
    cd-staging.yml  # Déploiement staging (merge main)
    cd-prod.yml     # Déploiement production (tag semver)
    security.yml    # Scans sécurité (hebdo + PR)
  actions/
    setup-env/      # Composite action réutilisable
```

### Pipeline CI complet avec matrix strategy

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

permissions:
  contents: read
  packages: write
  security-events: write

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # ── Linting & Static Analysis ──────────────────────────────
  lint:
    name: Lint & SAST
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip
      - run: pip install ruff mypy bandit
      - run: ruff check . --output-format=github
      - run: mypy src/ --ignore-missing-imports
      - run: bandit -r src/ -f json -o bandit-report.json
      - uses: actions/upload-artifact@v4
        with:
          name: sast-report
          path: bandit-report.json

  # ── Tests avec matrix ──────────────────────────────────────
  test:
    name: Tests (${{ matrix.python-version }}, ${{ matrix.os }})
    needs: lint
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        python-version: ["3.11", "3.12"]
        os: [ubuntu-latest, windows-latest]
        exclude:
          - os: windows-latest
            python-version: "3.11"
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
          cache: pip
      - run: pip install -e ".[dev]"
      - name: Run tests with coverage
        run: |
          pytest tests/ \
            --cov=src \
            --cov-report=xml \
            --cov-report=term-missing \
            --junit-xml=test-results.xml \
            -v
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-${{ matrix.os }}-${{ matrix.python-version }}
          path: coverage.xml

  # ── Build & Push Docker ────────────────────────────────────
  build:
    name: Build & Push Image
    needs: test
    runs-on: ubuntu-latest
    outputs:
      image-digest: ${{ steps.push.outputs.digest }}
      image-tag: ${{ steps.meta.outputs.tags }}
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-qemu-action@v3
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Extract Docker metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha,prefix=sha-
            type=raw,value=latest,enable=${{ github.ref == 'refs/heads/main' }}
      - name: Build & Push multi-arch
        id: push
        uses: docker/build-push-action@v6
        with:
          context: .
          platforms: linux/amd64,linux/arm64
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # ── Scan sécurité image ────────────────────────────────────
  scan-image:
    name: Trivy Image Scan
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name != 'pull_request'
    steps:
      - uses: aquasecurity/trivy-action@master
        with:
          image-ref: ${{ needs.build.outputs.image-tag }}
          format: sarif
          output: trivy-results.sarif
          severity: CRITICAL,HIGH
          exit-code: 1
      - uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: trivy-results.sarif
```

### Pipeline CD Production avec approbation

```yaml
# .github/workflows/cd-prod.yml
name: Deploy Production

on:
  push:
    tags:
      - "v[0-9]+.[0-9]+.[0-9]+"

jobs:
  deploy-prod:
    name: Deploy to Production
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://app.example.com
    steps:
      - uses: actions/checkout@v4
      - name: Configure AWS credentials (OIDC — no long-lived keys)
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789:role/GitHubActionsDeployRole
          aws-region: eu-west-1
      - name: Deploy to EKS
        run: |
          aws eks update-kubeconfig --name prod-cluster --region eu-west-1
          helm upgrade --install myapp ./helm/myapp \
            --namespace production \
            --set image.tag=${{ github.ref_name }} \
            --set replicaCount=3 \
            --wait --timeout 5m
      - name: Smoke tests post-deploy
        run: |
          curl -f https://app.example.com/health || exit 1
      - name: Notify Slack on failure
        if: failure()
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {"text": "Deployment FAILED: ${{ github.ref_name }} — ${{ github.actor }}"}
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Secrets Management — bonnes pratiques

| Niveau | Méthode | Usage |
|--------|---------|-------|
| Repo secrets | `secrets.*` | Tokens API, credentials basiques |
| Env secrets | Environment protection rules | Credentials prod (require approval) |
| OIDC federation | `role-to-assume` | AWS/GCP/Azure — zero long-lived keys |
| Vault | `hashicorp/vault-action` | Secrets dynamiques, rotation auto |

```yaml
# Récupération depuis HashiCorp Vault
- name: Import secrets from Vault
  uses: hashicorp/vault-action@v3
  with:
    url: https://vault.company.com
    method: jwt
    role: github-actions
    secrets: |
      secret/data/prod/db password | DB_PASSWORD ;
      secret/data/prod/api key    | API_KEY
```

## Bonnes Pratiques & Patterns Avancés

### Reusable Workflows

```yaml
# .github/workflows/reusable-deploy.yml
on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
      image-tag:
        required: true
        type: string
    secrets:
      KUBE_CONFIG:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ inputs.environment }}
    steps:
      - name: Deploy
        env:
          KUBECONFIG_DATA: ${{ secrets.KUBE_CONFIG }}
        run: |
          echo "$KUBECONFIG_DATA" | base64 -d > kubeconfig
          export KUBECONFIG=./kubeconfig
          kubectl set image deployment/app app=${{ inputs.image-tag }}
```

### Checklist pipeline production

- [ ] OIDC auth (pas de secrets AWS/GCP long-lived)
- [ ] Permissions minimales (`permissions: contents: read`)
- [ ] `actions/checkout@v4` pinné sur SHA pour supply chain
- [ ] Cache layers activé (GHA cache ou registry cache)
- [ ] Matrix exclusions pour éviter les combinaisons inutiles
- [ ] Environment `production` avec required reviewers
- [ ] Notifications Slack/Teams en cas d'échec
- [ ] Artifacts uploadés pour debug post-mortem

## Livrables
- Pipeline CI complet (lint, test matrix, build multi-arch, scan image)
- Pipeline CD par environnement (staging auto, prod gate d'approbation)
- Reusable workflows mutualisés
- Documentation des secrets et rotation
- Badge de statut et rapport de couverture dans le README

## Format de sortie
Précise : langage/framework du projet, cloud provider cible (AWS/GCP/Azure), registry Docker (ECR/GCR/GHCR), environnements à gérer (dev/staging/prod), stratégie de branching (gitflow/trunk), seuil de coverage cible.
