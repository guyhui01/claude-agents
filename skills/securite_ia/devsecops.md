# Skill — DevSecOps & Sécurité dans le CI/CD
> Certifications : CISSP · CompTIA Security+ · AWS Security Specialty · AZ-500

## Objectif
Intégrer la sécurité à chaque étape du pipeline CI/CD pour détecter et corriger les vulnérabilités le plus tôt possible (Shift Left Security).

## Le pipeline DevSecOps

### SAST — Static Application Security Testing
```yaml
# GitHub Actions — SAST avec Semgrep
- name: Run SAST (Semgrep)
  uses: returntocorp/semgrep-action@v1
  with:
    config: >
      p/python
      p/javascript
      p/owasp-top-ten
      p/llm-security
  env:
    SEMGREP_APP_TOKEN: ${{ secrets.SEMGREP_TOKEN }}
```

### DAST — Dynamic Application Security Testing
```yaml
# OWASP ZAP dans le pipeline
- name: OWASP ZAP Scan
  uses: zaproxy/action-full-scan@v0.8.0
  with:
    target: 'https://staging.myapp.com'
    rules_file_name: '.zap/rules.tsv'
    cmd_options: '-a'
```

### SCA — Software Composition Analysis
```yaml
# Détection de dépendances vulnérables (Snyk)
- name: Snyk Security Scan
  uses: snyk/actions/python@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
  with:
    args: --severity-threshold=high

# Alternative : pip-audit (open source)
- name: pip-audit
  run: pip-audit --requirement requirements.txt
```

### Secrets Detection
```yaml
# Détection de secrets dans le code (GitGuardian / truffleHog)
- name: TruffleHog Secrets Scan
  uses: trufflesecurity/trufflehog@main
  with:
    path: ./
    base: main
    head: HEAD
    extra_args: --only-verified
```

### Container Security (Trivy)
```yaml
- name: Build Docker Image
  run: docker build -t myapp:${{ github.sha }} .

- name: Trivy Vulnerability Scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: myapp:${{ github.sha }}
    format: 'sarif'
    severity: 'CRITICAL,HIGH'
    exit-code: '1'
```

## Security Gates (quality gates sécurité)
```
Gate 1 (Commit)    : Secrets detection → block si secret trouvé
Gate 2 (PR)        : SAST + SCA → block si CRITICAL/HIGH
Gate 3 (Build)     : Container scan → block si CRITICAL
Gate 4 (Pre-prod)  : DAST → rapport, block si OWASP Critical
Gate 5 (Prod)      : CSPM continu (AWS Security Hub / Defender)
```

## ML/AI Specific Security dans CI/CD
```python
# Vérification de l'intégrité des modèles
import hashlib

def verify_model_checksum(model_path: str, expected_sha256: str) -> bool:
    sha256_hash = hashlib.sha256()
    with open(model_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest() == expected_sha256

# Scan des datasets avant entraînement
def scan_dataset_for_pii(df):
    import re
    pii_patterns = {
        'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
        'phone': r'\b(\+33|0)[1-9](\d{2}){4}\b',
        'ssn_fr': r'\b[12]\d{2}(0[1-9]|1[0-2])\d{5}\d{3}\d{2}\b'
    }
    findings = {}
    for col in df.select_dtypes(include='object').columns:
        for pii_type, pattern in pii_patterns.items():
            matches = df[col].str.contains(pattern, regex=True, na=False).sum()
            if matches > 0:
                findings[f"{col}:{pii_type}"] = matches
    return findings
```

## Livrables
- Pipeline DevSecOps complet (.github/workflows/)
- Rapport de vulnérabilités par niveau
- Security gates documentés
- Runbook de remédiation par type de vulnérabilité

## Format de sortie
Précise : stack technique · cloud provider · criticité de l'application · seuil de tolérance (CVSS score) · outils déjà en place
