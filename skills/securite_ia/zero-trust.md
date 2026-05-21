# Skill — Architecture Zero Trust
> Certifications : CISSP · AWS Security Specialty · AZ-500 · Google PCSE

## Objectif
Implémenter une architecture Zero Trust pour les systèmes IA : "Never Trust, Always Verify" appliqué aux LLMs, APIs et pipelines de données.

## Principes Zero Trust (NIST SP 800-207)
```
1. Toutes les ressources sont considérées comme hostiles
2. L'accès est accordé sur le principe du moindre privilège
3. Chaque demande d'accès est authentifiée, autorisée et chiffrée
4. Les accès sont dynamiques et réévalués en continu
5. Toutes les transactions sont loggées et auditées
```

## Architecture Zero Trust pour les systèmes IA

### Identity & Access (IAM)
```python
# Politique IAM pour un agent IA (AWS)
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LLMAgentMinimalAccess",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",      # Lecture seule sur bucket spécifique
                "bedrock:InvokeModel" # LLM spécifique seulement
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
Zones réseau pour un système IA :
  Zone 1 (DMZ)           : API Gateway, WAF, Load Balancer
  Zone 2 (Application)   : LLM Service, RAG Service, Agent Runtime
  Zone 3 (Data)          : Vector DB, Data Lake, Model Registry
  Zone 4 (Management)    : Logging, Monitoring, CI/CD

Règles :
  → Zone 1 → Zone 2 : HTTPS/443 seulement, JWT vérifié
  → Zone 2 → Zone 3 : mTLS, allowlist d'IPs
  → Zone 4 : accès management uniquement, MFA requis
```

### Service Mesh (mTLS entre microservices)
```yaml
# Istio PeerAuthentication — mTLS strict
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: llm-services
spec:
  mtls:
    mode: STRICT  # Rejette tout trafic non-mTLS

---
# AuthorizationPolicy — principe du moindre privilège
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

### Audit & Monitoring continu
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
        "prompt_hash": prompt_hash,  # Ne pas logger le prompt en clair (PII)
        "tokens_input": tokens_used,
        "action": action_taken,
        "source_ip": request.client.host,
        "user_agent": request.headers.get("user-agent")
    }
    # Envoi immutable (WORM) vers SIEM
    siem_logger.info(audit_log)
```

## Checklist Zero Trust pour les projets IA
- [ ] MFA obligatoire pour tous les accès humains
- [ ] Service accounts avec permissions minimales
- [ ] mTLS entre tous les services
- [ ] Chiffrement at rest (AES-256) + in transit (TLS 1.3)
- [ ] Rotation automatique des secrets (< 90 jours)
- [ ] Audit logs immuables (minimum 1 an)
- [ ] Network policies Kubernetes restrictives
- [ ] WAF devant toutes les APIs publiques

## Livrables
- Architecture Zero Trust documentée (diagramme)
- Politiques IAM par composant
- Configuration Service Mesh (Istio)
- Rapport d'audit de conformité ZT

## Format de sortie
Précise : infrastructure cloud · composants du système IA · menaces prioritaires · réglementation (NIS2, ISO 27001) · niveau de maturité ZT actuel
