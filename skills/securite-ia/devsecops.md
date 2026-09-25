# Skill — DevSecOps & Security in CI/CD
> Certifications: CISSP · CompTIA Security+ · AWS Security Specialty · AZ-500

## Objective
Integrate security into every stage of the CI/CD pipeline to detect and fix vulnerabilities as early as possible (Shift Left Security).

## The DevSecOps pipeline

### SAST — Static Application Security Testing
```yaml
# GitHub Actions — SAST with Semgrep
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
# OWASP ZAP in the pipeline
- name: OWASP ZAP Scan
  uses: zaproxy/action-full-scan@v0.8.0
  with:
    target: 'https://staging.myapp.com'
    rules_file_name: '.zap/rules.tsv'
    cmd_options: '-a'
```

### SCA — Software Composition Analysis
```yaml
# Vulnerable dependency detection (Snyk)
- name: Snyk Security Scan
  uses: snyk/actions/python@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
  with:
    args: --severity-threshold=high

# Alternative: pip-audit (open source)
- name: pip-audit
  run: pip-audit --requirement requirements.txt
```

### Secrets Detection
```yaml
# Secrets detection in code (GitGuardian / truffleHog)
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

## Security Gates (security quality gates)
```
Gate 1 (Commit)    : Secrets detection → block if a secret is found
Gate 2 (PR)        : SAST + SCA → block if CRITICAL/HIGH
Gate 3 (Build)     : Container scan → block if CRITICAL
Gate 4 (Pre-prod)  : DAST → report, block if OWASP Critical
Gate 5 (Prod)      : Continuous CSPM (AWS Security Hub / Defender)
```

## ML/AI Specific Security in CI/CD
```python
# Model integrity verification
import hashlib

def verify_model_checksum(model_path: str, expected_sha256: str) -> bool:
    sha256_hash = hashlib.sha256()
    with open(model_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest() == expected_sha256

# Scan datasets before training
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

## Deliverables
- Complete DevSecOps pipeline (.github/workflows/)
- Vulnerability report by severity level
- Documented security gates
- Remediation runbook per vulnerability type

## Output format
Specify: tech stack · cloud provider · application criticality · tolerance threshold (CVSS score) · tools already in place
