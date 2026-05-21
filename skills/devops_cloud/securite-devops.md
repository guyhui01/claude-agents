# Skill — Sécurité DevOps (DevSecOps)
> Certifications : CKS (Certified Kubernetes Security Specialist 2026), AWS Security Specialty, HashiCorp Vault Associate, CompTIA Security+

## Objectif
Intégrer la sécurité à chaque étape du cycle DevOps — secrets management dynamique, scanning de vulnérabilités en CI/CD, SAST/DAST automatisé et durcissement des workloads Kubernetes avec Pod Security Standards.

## Secrets Management

### HashiCorp Vault — Configuration & Usage

```hcl
# vault-config.tf
resource "vault_mount" "database" {
  path        = "database"
  type        = "database"
  description = "Dynamic database credentials"
}

resource "vault_database_secret_backend_connection" "postgres" {
  backend       = vault_mount.database.path
  name          = "prod-postgres"
  allowed_roles = ["api-service", "analytics"]

  postgresql {
    connection_url = "postgresql://{{username}}:{{password}}@postgres:5432/appdb"
    username       = "vault-admin"
    password       = var.vault_db_admin_password
    max_open_connections = 5
  }
}

# Rôle avec durée de vie limitée
resource "vault_database_secret_backend_role" "api_service" {
  backend               = vault_mount.database.path
  name                  = "api-service"
  db_name               = vault_database_secret_backend_connection.postgres.name
  creation_statements   = ["CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO \"{{name}}\";"]
  revocation_statements = ["DROP ROLE IF EXISTS \"{{name}}\";"]
  default_ttl           = "1h"
  max_ttl               = "24h"
}
```

```python
# vault_client.py — récupération de secrets dynamiques
import hvac
import os

class VaultSecretsManager:
    def __init__(self):
        self.client = hvac.Client(
            url=os.environ["VAULT_ADDR"],
            token=None,  # Utilise Kubernetes auth
        )
        # Auth via Kubernetes Service Account
        self.client.auth.kubernetes.login(
            role="api-service",
            jwt=open("/var/run/secrets/kubernetes.io/serviceaccount/token").read(),
        )

    def get_db_credentials(self) -> dict:
        """Obtenir des credentials DB dynamiques avec TTL."""
        creds = self.client.secrets.database.generate_credentials(name="api-service")
        return {
            "username": creds["data"]["username"],
            "password": creds["data"]["password"],
            "lease_id": creds["lease_id"],
            "lease_duration": creds["lease_duration"],
        }

    def get_secret(self, path: str, key: str) -> str:
        """Lire un secret KV v2."""
        response = self.client.secrets.kv.v2.read_secret_version(path=path)
        return response["data"]["data"][key]
```

### External Secrets Operator (K8s)

```yaml
# external-secret.yaml — synchroniser les secrets Vault vers K8s
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: api-secrets
  namespace: production
spec:
  refreshInterval: "5m"
  secretStoreRef:
    name: vault-backend
    kind: ClusterSecretStore
  target:
    name: api-secrets        # Nom du Secret K8s créé
    creationPolicy: Owner
    deletionPolicy: Delete
  data:
    - secretKey: db-password
      remoteRef:
        key: secret/data/prod/database
        property: password
    - secretKey: api-key
      remoteRef:
        key: secret/data/prod/api
        property: key
---
apiVersion: external-secrets.io/v1beta1
kind: ClusterSecretStore
metadata:
  name: vault-backend
spec:
  provider:
    vault:
      server: "https://vault.company.com"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "external-secrets-operator"
```

## Scanning & SAST/DAST

### Trivy — Scan complet dans CI

```yaml
# .github/workflows/security.yml
name: Security Scans

on:
  schedule:
    - cron: "0 6 * * 1"   # Lundi 6h
  pull_request:

jobs:
  sast-code:
    name: SAST — Semgrep
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1
        with:
          config: >
            p/security-audit
            p/owasp-top-ten
            p/python
          auditOn: pull_request
          publishResults: true
        env:
          SEMGREP_APP_TOKEN: ${{ secrets.SEMGREP_APP_TOKEN }}

  container-scan:
    name: Trivy Container Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t app:test .
      - name: Scan avec Trivy
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: app:test
          format: sarif
          output: trivy-container.sarif
          severity: CRITICAL,HIGH
          exit-code: 1
          ignore-unfixed: true
      - uses: github/codeql-action/upload-sarif@v3
        if: always()
        with:
          sarif_file: trivy-container.sarif

  iac-scan:
    name: IaC Security — Checkov
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: bridgecrewio/checkov-action@master
        with:
          directory: infra/
          framework: terraform,kubernetes
          output_format: sarif
          output_file_path: checkov.sarif
          soft_fail: false
          check: CKV_AWS_*,CKV_K8S_*
      - uses: github/codeql-action/upload-sarif@v3
        if: always()
        with:
          sarif_file: checkov.sarif

  dast:
    name: DAST — OWASP ZAP
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: OWASP ZAP Full Scan
        uses: zaproxy/action-full-scan@v0.10.0
        with:
          target: "https://staging.app.company.com"
          rules_file_name: ".zap/rules.tsv"
          cmd_options: "-a"
```

### Pod Security Standards K8s

```yaml
# Appliquer Restricted à un namespace
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: v1.30
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/audit: restricted
---
# LimitRange — éviter les pods sans limites
apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: production
spec:
  limits:
    - type: Container
      default:
        cpu: "500m"
        memory: "256Mi"
      defaultRequest:
        cpu: "100m"
        memory: "128Mi"
      max:
        cpu: "4"
        memory: "8Gi"
```

### Audit & Commandes de vérification

```bash
# Kube-bench — audit CIS Kubernetes Benchmark
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml
kubectl logs job/kube-bench | grep FAIL

# Polaris — audit best practices K8s
polaris audit --format=pretty --namespace=production

# Vérifier les containers qui tournent en root
kubectl get pods -n production -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.securityContext.runAsUser}{"\n"}{end}{end}'

# Lister toutes les capabilities des pods
kubectl get pods -n production -o json | jq '.items[].spec.containers[].securityContext.capabilities'

# Scan des secrets en clair dans les ConfigMaps
kubectl get configmaps -A -o json | jq '.items[] | select(.data != null) | .data | to_entries[] | select(.value | test("password|secret|token|key"; "i"))'

# Vérifier les NetworkPolicies manquantes
kubectl get namespaces -o json | jq -r '.items[].metadata.name' | xargs -I{} kubectl get networkpolicies -n {} 2>/dev/null || echo "No policies in {}"
```

## Matrice Sécurité DevSecOps

| Phase | Outil | Type | Criticité |
|-------|-------|------|-----------|
| Code | Semgrep, Bandit | SAST | Bloquant en CI |
| Dépendances | Dependabot, OWASP Dependency-Check | SCA | Warning |
| Secrets dans le code | GitLeaks, TruffleHog | Secret scan | Bloquant |
| Container image | Trivy, Docker Scout | CVE scan | Bloquant (CRITICAL) |
| IaC | Checkov, tfsec | IaC scan | Bloquant |
| Runtime K8s | Falco, Tetragon | Runtime security | Alerting |
| DAST | OWASP ZAP, Burp Suite | DAST | Staging gate |
| Compliance | Kube-bench, Polaris | Audit | Rapport mensuel |

## Livrables
- Pipeline CI/CD DevSecOps complet (SAST + SCA + image scan + IaC scan)
- Configuration HashiCorp Vault avec rôles K8s et credentials dynamiques
- External Secrets Operator déployé et configuré
- Pod Security Standards + LimitRange pour tous les namespaces prod
- Rapport d'audit sécurité (kube-bench, Trivy, Semgrep)
- Runbook de réponse à incident sécurité

## Format de sortie
Précise : cloud provider, orchestrateur (K8s/ECS), langages du projet, environnements à sécuriser, outils de secrets existants, contraintes de conformité (SOC2/PCI/HIPAA/ISO27001), niveau de maturité sécurité actuel.
