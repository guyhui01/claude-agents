# Skill — API & LLM Endpoint Security
> Certifications: CISSP · GIAC GWEB · CompTIA Security+ · AZ-500

## Objective
Secure APIs that expose LLMs or AI agents against the OWASP API Top 10 attacks and AI-specific threats.

## OWASP API Security Top 10 applied to LLM APIs

### API1 — Broken Object Level Authorization
```python
# ❌ Vulnerable: a user accesses someone else's conversations
@app.get("/api/conversations/{conversation_id}")
async def get_conversation(conversation_id: str):
    return db.get(conversation_id)  # No owner check

# ✅ Secure
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
@limiter.limit("20/minute")      # 20 requests per minute per IP
@limiter.limit("500/day")        # 500 per day
async def chat(request: Request, body: ChatRequest,
               current_user = Depends(get_current_user)):
    
    # Also limit per user (prevents account abuse)
    user_usage = await get_user_daily_usage(current_user.id)
    if user_usage.tokens_today > 100_000:
        raise HTTPException(status_code=429, detail="Daily token limit reached")
    
    # Limit the prompt size
    if len(body.message) > 10_000:
        raise HTTPException(status_code=400, detail="Message too long")
    
    return await llm_service.chat(body)
```

### API8 — Security Misconfiguration
```python
# Secure configuration of an LLM API (FastAPI)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app = FastAPI(
    docs_url=None,         # Disable Swagger in production
    redoc_url=None,        # Disable ReDoc in production
    openapi_url=None       # Disable the public OpenAPI schema
)

# Restrictive CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://app.mycompany.com"],  # No *
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Authorization", "Content-Type"]
)

# Trusted hosts only
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["api.mycompany.com", "localhost"]
)
```

## WAF Rules for LLM APIs
```yaml
# AWS WAF — LLM-specific rules
Rules:
  - Name: BlockLargePrompts
    Statement:
      SizeConstraintStatement:
        FieldToMatch:
          Body: {}
        ComparisonOperator: GT
        Size: 50000  # Max 50KB per request
    Action:
      Block: {}

  - Name: RateLimitPerIP
    Statement:
      RateBasedStatement:
        Limit: 100       # 100 requests per 5 minutes per IP
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

## HTTP security headers
```python
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Content-Security-Policy"] = "default-src 'none'"
    response.headers["X-Request-ID"] = str(uuid.uuid4())  # Traceability
    return response
```

## Deliverables
- API security audit (OWASP API Top 10)
- WAF + rate limiting configuration
- Implemented security headers
- Automated security tests (Postman + OWASP ZAP)

## Output format
Specify: API framework (FastAPI, Express, Spring) · cloud provider · request volume · data processed · exposure level (public/B2B/internal)
