# Skill — Zero Trust Architecture
> Certifications: CISSP · AWS Security Specialty · AZ-500 · Google PCSE

## Objective
Implement a Zero Trust architecture for AI systems: "Never Trust, Always Verify" applied to LLMs, APIs and data pipelines.

## Zero Trust principles (NIST SP 800-207)
```
1. All resources are considered hostile
2. Access is granted on the principle of least privilege
3. Every access request is authenticated, authorized and encrypted
4. Access is dynamic and continuously re-evaluated
5. Every transaction is logged and audited
```

## Zero Trust architecture for AI systems

### Identity & Access (IAM)
```python
# IAM policy for an AI agent (AWS)
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LLMAgentMinimalAccess",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",      # Read-only on a specific bucket
                "bedrock:InvokeModel" # Specific LLM only
            ],
            "Resource": [
                "arn:aws:s3:::data-lake-prod/rag-knowledge-base/*",
                "arn:aws:bedrock:eu-west-1::foundation-model/anthropic.*"
            ],
            "Condition": {
                "StringEquals": {"aws:PrincipalTag/Environment": "production"},
                "IpAddress": {"aws:SourceIp": ["10.0.0.0/8"]}
            }
        }
    ]
}
```

### Network Segmentation
```
Network zones for an AI system:
  Zone 1 (DMZ)           : API Gateway, WAF, Load Balancer
  Zone 2 (Application)   : LLM Service, RAG Service, Agent Runtime
  Zone 3 (Data)          : Vector DB, Data Lake, Model Registry
  Zone 4 (Management)    : Logging, Monitoring, CI/CD

Rules:
  → Zone 1 → Zone 2: HTTPS/443 only, JWT verified
  → Zone 2 → Zone 3: mTLS, IP allowlist
  → Zone 4: management access only, MFA required
```

### Service Mesh (mTLS between microservices)
```yaml
# Istio PeerAuthentication — strict mTLS
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: llm-services
spec:
  mtls:
    mode: STRICT  # Rejects all non-mTLS traffic

---
# AuthorizationPolicy — principle of least privilege
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: llm-agent-policy
spec:
  selector:
    matchLabels:
      app: llm-agent
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/api-gateway/sa/gateway"]
    to:
    - operation:
        methods: ["POST"]
        paths: ["/api/v1/inference"]
```

### Continuous Audit & Monitoring
```python
import logging
from datetime import datetime

def audit_llm_request(user_id: str, model: str, prompt_hash: str,
                       tokens_used: int, action_taken: str):
    audit_log = {
        "timestamp": datetime.utcnow().isoformat(),
        "user_id": user_id,
        "session_id": session.id,
        "model": model,
        "prompt_hash": prompt_hash,  # Do not log the prompt in clear text (PII)
        "tokens_input": tokens_used,
        "action": action_taken,
        "source_ip": request.client.host,
        "user_agent": request.headers.get("user-agent")
    }
    # Immutable (WORM) send to the SIEM
    siem_logger.info(audit_log)
```

## Zero Trust checklist for AI projects
- [ ] Mandatory MFA for all human access
- [ ] Service accounts with minimal permissions
- [ ] mTLS between all services
- [ ] Encryption at rest (AES-256) + in transit (TLS 1.3)
- [ ] Automatic secret rotation (< 90 days)
- [ ] Immutable audit logs (at least 1 year)
- [ ] Restrictive Kubernetes network policies
- [ ] WAF in front of all public APIs

## Deliverables
- Documented Zero Trust architecture (diagram)
- IAM policies per component
- Service Mesh configuration (Istio)
- ZT compliance audit report

## Output format
Specify: cloud infrastructure · AI system components · priority threats · regulation (NIS2, ISO 27001) · current ZT maturity level
