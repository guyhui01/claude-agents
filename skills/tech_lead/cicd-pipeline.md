# Skill — CI/CD Pipeline (GitHub Actions, GitLab CI)
> Certifications : GitHub Actions Certifications (GitHub 2024) · CKAD (Linux Foundation 2024) · AWS DVA-C02

## Objectif
Concevoir et implémenter un pipeline CI/CD robuste : build, lint, tests, sécurité, déploiement progressif — pour automatiser la livraison de valeur en garantissant la qualité et la sécurité.

## Pipeline CI/CD — Stages types

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  TRIGGER │→│   BUILD  │→│   TEST   │→│ SECURITY │→│  STAGING │→│   PROD   │
│  PR/Push │  │ Compile  │  │ Unit     │  │ SAST     │  │ Deploy   │  │ Blue/Grn │
│          │  │ Lint     │  │ Integr.  │  │ Deps Scan│  │ Smoke    │  │ Canary   │
│          │  │ Type     │  │ Coverage │  │ Secret   │  │ E2E      │  │ +Monitor │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
```

## GitHub Actions — Pipeline complet

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '22'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  lint-and-type:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '${{ env.NODE_VERSION }}', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  test:
    runs-on: ubuntu-latest
    needs: lint-and-type
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_DB: testdb, POSTGRES_PASSWORD: test }
        options: >-
          --health-cmd pg_isready --health-interval 10s
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '${{ env.NODE_VERSION }}', cache: 'npm' }
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v4

  security:
    runs-on: ubuntu-latest
    needs: lint-and-type
    steps:
      - uses: actions/checkout@v4
      - name: SAST — CodeQL
        uses: github/codeql-action/analyze@v3
        with: { languages: typescript }
      - name: Dependency audit
        run: npm audit --audit-level=high
      - name: Secret scan — Gitleaks
        uses: gitleaks/gitleaks-action@v2

  build-and-push:
    runs-on: ubuntu-latest
    needs: [test, security]
    if: github.event_name == 'push'
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with: { registry: '${{ env.REGISTRY }}', username: '${{ github.actor }}', password: '${{ secrets.GITHUB_TOKEN }}' }
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    runs-on: ubuntu-latest
    needs: build-and-push
    environment: staging
    steps:
      - run: |
          kubectl set image deployment/app app=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          kubectl rollout status deployment/app --timeout=5m
```

## Stratégies de déploiement

```
STRATÉGIE       DESCRIPTION                          DOWNTIME  ROLLBACK   COMPLEXITÉ
──────────────  ───────────────────────────────────  ────────  ─────────  ──────────
Recreate        Stop all → Deploy new                Oui       Simple     Faible
Rolling Update  Replace instances progressivement    Non       Auto K8s   Faible
Blue/Green      2 envs, switch trafic                Non       Immédiat   Moyen
Canary          % trafic progressif (5→25→100%)      Non       Immédiat   Élevé
Feature Flags   Deploy complet, activation par flag  Non       Toggle     Élevé
```

## Kubernetes — Canary Deployment

```yaml
# k8s/canary-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-canary
spec:
  replicas: 1  # 1 pod canary sur 10 = 10% du trafic
  selector:
    matchLabels: { app: mon-app, track: canary }
  template:
    metadata:
      labels: { app: mon-app, track: canary }
    spec:
      containers:
        - name: app
          image: ghcr.io/org/app:v2.0.0
          resources:
            requests: { cpu: 100m, memory: 128Mi }
            limits:   { cpu: 500m, memory: 512Mi }
          readinessProbe:
            httpGet: { path: /health, port: 3000 }
            initialDelaySeconds: 5
            periodSeconds: 10
```

## Livrables
- Pipeline CI/CD complet (GitHub Actions ou GitLab CI YAML)
- Dockerfile optimisé (multi-stage, non-root user)
- Configuration Kubernetes (Deployment, Service, HPA, PDB)
- Runbook de déploiement et rollback
- Tableau de bord CI (temps de build, taux d'échec, DORA metrics)

## Format de sortie
Précise : **plateforme CI/CD** (GitHub Actions, GitLab, Jenkins…), **stack** (Node.js, Python, Java…), **cible de déploiement** (K8s, ECS, Cloud Run, Vercel…), **stratégie de déploiement souhaitée**, **contraintes** (SLA, downtime toléré, tests de régression).
