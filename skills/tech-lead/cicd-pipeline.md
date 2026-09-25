# Skill — CI/CD Pipeline (GitHub Actions, GitLab CI)
> Certifications: GitHub Actions Certifications (GitHub 2024) · CKAD (Linux Foundation 2024) · AWS DVA-C02

## Objective
Design and implement a robust CI/CD pipeline: build, lint, tests, security, progressive deployment — to automate value delivery while guaranteeing quality and security.

## CI/CD pipeline — Typical stages

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  TRIGGER │→│   BUILD  │→│   TEST   │→│ SECURITY │→│  STAGING │→│   PROD   │
│  PR/Push │  │ Compile  │  │ Unit     │  │ SAST     │  │ Deploy   │  │ Blue/Grn │
│          │  │ Lint     │  │ Integr.  │  │ Deps Scan│  │ Smoke    │  │ Canary   │
│          │  │ Type     │  │ Coverage │  │ Secret   │  │ E2E      │  │ +Monitor │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
```

## GitHub Actions — Full pipeline

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

## Deployment strategies

```
STRATEGY        DESCRIPTION                          DOWNTIME  ROLLBACK   COMPLEXITY
──────────────  ───────────────────────────────────  ────────  ─────────  ──────────
Recreate        Stop all → Deploy new                Yes       Simple     Low
Rolling Update  Replace instances progressively      No        Auto K8s   Low
Blue/Green      2 envs, switch traffic               No        Immediate  Medium
Canary          Progressive % traffic (5→25→100%)    No        Immediate  High
Feature Flags   Full deploy, activation by flag      No        Toggle     High
```

## Kubernetes — Canary Deployment

```yaml
# k8s/canary-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-canary
spec:
  replicas: 1  # 1 canary pod out of 10 = 10% of traffic
  selector:
    matchLabels: { app: my-app, track: canary }
  template:
    metadata:
      labels: { app: my-app, track: canary }
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

## Deliverables
- Complete CI/CD pipeline (GitHub Actions or GitLab CI YAML)
- Optimized Dockerfile (multi-stage, non-root user)
- Kubernetes configuration (Deployment, Service, HPA, PDB)
- Deployment and rollback runbook
- CI dashboard (build time, failure rate, DORA metrics)

## Output format
Specify: **CI/CD platform** (GitHub Actions, GitLab, Jenkins…), **stack** (Node.js, Python, Java…), **deployment target** (K8s, ECS, Cloud Run, Vercel…), **desired deployment strategy**, **constraints** (SLA, tolerated downtime, regression tests).
