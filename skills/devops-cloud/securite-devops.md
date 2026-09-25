# Skill — DevOps Security (DevSecOps)
> Certifications: CKS (Certified Kubernetes Security Specialist 2026), AWS Security Specialty, HashiCorp Vault Associate, CompTIA Security+

## Objective
Integrate security at every stage of the DevOps cycle — dynamic secrets management, CI/CD vulnerability scanning, automated SAST/DAST and hardening of Kubernetes workloads with Pod Security Standards.

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

# Role with a limited lifetime
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
# vault_client.py — retrieving dynamic secrets
import hvac
import os

class VaultSecretsManager:
    def __init__(self):
        self.client = hvac.Client(
            url=os.environ["VAULT_ADDR"],
            token=None,  # Uses Kubernetes auth
        )
        # Auth via Kubernetes Service Account
        self.client.auth.kubernetes.login(
            role="api-service",
            jwt=open("/var/run/secrets/kubernetes.io/serviceaccount/token").read(),
        )

    def get_db_credentials(self) -> dict:
        """Get dynamic DB credentials with TTL."""
        creds = self.client.secrets.database.generate_credentials(name="api-service")
        return {
            "username": creds["data"]["username"],
            "password": creds["data"]["password"],
            "lease_id": creds["lease_id"],
            "lease_duration": creds["lease_duration"],
        }

    def get_secret(self, path: str, key: str) -> str:
        """Read a KV v2 secret."""
        response = self.client.secrets.kv.v2.read_secret_version(path=path)
        return response["data"]["data"][key]
```

### External Secrets Operator (K8s)

```yaml
# external-secret.yaml — sync Vault secrets to K8s
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
    name: api-secrets        # Name of the K8s Secret created
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

### Trivy — Full scan in CI

```yaml
# .github/workflows/security.yml
name: Security Scans

on:
  schedule:
    - cron: "0 6 * * 1"   # Monday 6 a.m.
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
      - name: Scan with Trivy
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

### K8s Pod Security Standards

```yaml
# Apply Restricted to a namespace
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
# LimitRange — avoid pods with no limits
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

### Audit & verification commands

```bash
# Kube-bench — CIS Kubernetes Benchmark audit
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml
kubectl logs job/kube-bench | grep FAIL

# Polaris — K8s best-practices audit
polaris audit --format=pretty --namespace=production

# Check containers running as root
kubectl get pods -n production -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.securityContext.runAsUser}{"\n"}{end}{end}'

# List all pod capabilities
kubectl get pods -n production -o json | jq '.items[].spec.containers[].securityContext.capabilities'

# Scan for cleartext secrets in ConfigMaps
kubectl get configmaps -A -o json | jq '.items[] | select(.data != null) | .data | to_entries[] | select(.value | test("password|secret|token|key"; "i"))'

# Check for missing NetworkPolicies
kubectl get namespaces -o json | jq -r '.items[].metadata.name' | xargs -I{} kubectl get networkpolicies -n {} 2>/dev/null || echo "No policies in {}"
```

## DevSecOps Security Matrix

| Phase | Tool | Type | Criticality |
|-------|-------|------|-----------|
| Code | Semgrep, Bandit | SAST | Blocking in CI |
| Dependencies | Dependabot, OWASP Dependency-Check | SCA | Warning |
| Secrets in code | GitLeaks, TruffleHog | Secret scan | Blocking |
| Container image | Trivy, Docker Scout | CVE scan | Blocking (CRITICAL) |
| IaC | Checkov, tfsec | IaC scan | Blocking |
| K8s runtime | Falco, Tetragon | Runtime security | Alerting |
| DAST | OWASP ZAP, Burp Suite | DAST | Staging gate |
| Compliance | Kube-bench, Polaris | Audit | Monthly report |

## Deliverables
- Complete DevSecOps CI/CD pipeline (SAST + SCA + image scan + IaC scan)
- HashiCorp Vault configuration with K8s roles and dynamic credentials
- External Secrets Operator deployed and configured
- Pod Security Standards + LimitRange for all prod namespaces
- Security audit report (kube-bench, Trivy, Semgrep)
- Security incident response runbook

## Output format
Specify: cloud provider, orchestrator (K8s/ECS), project languages, environments to secure, existing secrets tools, compliance constraints (SOC2/PCI/HIPAA/ISO27001), current security maturity level.
