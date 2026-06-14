# Skill — IAM & Access Management for AI Systems
> Certifications: CISSP · AWS Security Specialty · AZ-500 · Google PCSE

## Objective
Design and implement identity and access management (IAM) for LLM applications, AI agents and data pipelines.

## Access control models

### RBAC (Role-Based Access Control)
```python
# Role definitions for an AI system
ROLES = {
    "ai_user": [
        "llm:invoke",
        "rag:query"
    ],
    "ai_developer": [
        "llm:invoke",
        "rag:query",
        "model:read",
        "experiment:create"
    ],
    "ai_admin": [
        "llm:*",
        "rag:*",
        "model:*",
        "experiment:*",
        "config:write"
    ],
    "data_reader": [
        "data:read",
        "report:read"
    ]
}

def check_permission(user_role: str, action: str) -> bool:
    permissions = ROLES.get(user_role, [])
    return any(
        p == action or (p.endswith('*') and action.startswith(p[:-1]))
        for p in permissions
    )
```

### ABAC (Attribute-Based Access Control)
```python
# Attribute-based access control (finer-grained than RBAC)
def evaluate_abac_policy(subject: dict, resource: dict,
                          action: str, environment: dict) -> bool:
    # Rule: access to production models only
    # if the user is senior AND it is business hours AND access is from the internal network
    if resource.get('environment') == 'production':
        return (
            subject.get('level') in ['senior', 'lead'] and
            9 <= environment.get('hour', 0) <= 18 and
            environment.get('network') == 'internal'
        )
    return subject.get('department') == resource.get('owner_department')
```

## JWT Authentication for LLM APIs
```python
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta

SECRET_KEY = "your-secret-key"  # In practice: from AWS Secrets Manager
ALGORITHM = "RS256"              # Asymmetric key for the APIs

def create_access_token(data: dict, expires_delta: timedelta = timedelta(hours=1)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({
        "exp": expire,
        "iat": datetime.utcnow(),
        "jti": str(uuid.uuid4())  # Unique token ID (for revocation)
    })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, PUBLIC_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None or is_token_revoked(payload.get("jti")):
            raise credentials_exception
        return payload
    except JWTError:
        raise credentials_exception
```

## API Key Management for LLMs
```python
import secrets
import hashlib
from datetime import datetime

class APIKeyManager:
    def generate_key(self, user_id: str, scope: list[str],
                      expires_days: int = 90) -> dict:
        raw_key = f"sk-{secrets.token_urlsafe(32)}"
        key_hash = hashlib.sha256(raw_key.encode()).hexdigest()
        
        self.store({
            "key_hash": key_hash,
            "user_id": user_id,
            "scope": scope,                # e.g.: ["llm:invoke", "rag:query"]
            "created_at": datetime.utcnow(),
            "expires_at": datetime.utcnow() + timedelta(days=expires_days),
            "last_used": None,
            "usage_count": 0
        })
        
        return {"key": raw_key, "expires_days": expires_days}
    
    def validate_key(self, raw_key: str, required_scope: str) -> bool:
        key_hash = hashlib.sha256(raw_key.encode()).hexdigest()
        record = self.get_by_hash(key_hash)
        
        return (
            record is not None and
            record["expires_at"] > datetime.utcnow() and
            required_scope in record["scope"]
        )
```

## Deliverables
- Documented IAM architecture (roles, permissions, flows)
- RBAC/ABAC implementation for the AI system
- Secret rotation policy (Runbook)
- Access audit report (monthly)

## Output format
Specify: number of users · role types · cloud provider · systems to protect (LLM, data, agents) · compliance requirements (SOC2, ISO 27001)
