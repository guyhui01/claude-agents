# Skill — Sécurité des APIs & LLM Endpoints
> Certifications : CISSP · GIAC GWEB · CompTIA Security+ · AZ-500

## Objectif
Sécuriser les APIs exposant des LLMs ou des agents IA contre les attaques OWASP API Top 10 et les menaces spécifiques à l'IA.

## OWASP API Security Top 10 appliqué aux LLM APIs

### API1 — Broken Object Level Authorization
```python
# ❌ Vulnérable : utilisateur accède aux conversations d'autrui
@app.get("/api/conversations/{conversation_id}")
async def get_conversation(conversation_id: str):
    return db.get(conversation_id)  # Pas de vérification du propriétaire

# ✅ Sécurisé
@app.get("/api/conversations/{conversation_id}")
async def get_conversation(conversation_id: str,
                            current_user = Depends(get_current_user)):
    conversation = db.get(conversation_id)
    if conversation.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Access denied")
    return conversation
```

### API4 — Unrestricted Resource Consumption (Rate Limiting)
```python
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

@app.post("/api/v1/chat")
@limiter.limit("20/minute")      # 20 requêtes par minute par IP
@limiter.limit("500/day")        # 500 par jour
async def chat(request: Request, body: ChatRequest,
               current_user = Depends(get_current_user)):
    
    # Limite aussi par utilisateur (évite abus d'un compte)
    user_usage = await get_user_daily_usage(current_user.id)
    if user_usage.tokens_today > 100_000:
        raise HTTPException(status_code=429, detail="Daily token limit reached")
    
    # Limite la taille du prompt
    if len(body.message) > 10_000:
        raise HTTPException(status_code=400, detail="Message too long")
    
    return await llm_service.chat(body)
```

### API8 — Security Misconfiguration
```python
# Configuration sécurisée d'une API LLM (FastAPI)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app = FastAPI(
    docs_url=None,         # Désactiver Swagger en production
    redoc_url=None,        # Désactiver ReDoc en production
    openapi_url=None       # Désactiver le schéma OpenAPI public
)

# CORS restrictif
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://app.mycompany.com"],  # Pas de *
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Authorization", "Content-Type"]
)

# Trusted hosts uniquement
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["api.mycompany.com", "localhost"]
)
```

## WAF Rules pour les APIs LLM
```yaml
# AWS WAF — règles spécifiques LLM
Rules:
  - Name: BlockLargePrompts
    Statement:
      SizeConstraintStatement:
        FieldToMatch:
          Body: {}
        ComparisonOperator: GT
        Size: 50000  # Max 50KB par requête
    Action:
      Block: {}

  - Name: RateLimitPerIP
    Statement:
      RateBasedStatement:
        Limit: 100       # 100 requêtes par 5 minutes par IP
        AggregateKeyType: IP
    Action:
      Block: {}

  - Name: BlockSQLinjection
    Statement:
      SqliMatchStatement:
        FieldToMatch:
          Body: {}
    Action:
      Block: {}
```

## Headers de sécurité HTTP
```python
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Content-Security-Policy"] = "default-src 'none'"
    response.headers["X-Request-ID"] = str(uuid.uuid4())  # Traçabilité
    return response
```

## Livrables
- Audit de sécurité API (OWASP API Top 10)
- Configuration WAF + rate limiting
- Headers de sécurité implémentés
- Tests de sécurité automatisés (Postman + OWASP ZAP)

## Format de sortie
Précise : framework API (FastAPI, Express, Spring) · cloud provider · volume de requêtes · données traitées · niveau d'exposition (public/B2B/interne)
