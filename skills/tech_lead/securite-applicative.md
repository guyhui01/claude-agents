# Skill — Application Security (OWASP Top 10)
> Certifications: AWS DVA-C02 · Azure Developer Associate AZ-204 · ISTQB FL v4.0

## Objective
Identify and fix application vulnerabilities per the OWASP Top 10 2021: injection, authentication, data exposure, IDOR — with secure code examples and a review checklist.

## OWASP Top 10 — 2021

```
A01  Broken Access Control         e.g. IDOR, privilege escalation, role bypass
A02  Cryptographic Failures        e.g. cleartext data, MD5, hardcoded keys
A03  Injection                     e.g. SQL Injection, Command Injection, stored XSS
A04  Insecure Design               e.g. no rate limiting, bypassable business logic
A05  Security Misconfiguration     e.g. missing headers, debug in prod, overly permissive CORS
A06  Vulnerable Components         e.g. outdated dependencies with known CVEs
A07  Auth & Session Failures       e.g. brute force possible, session fixation, weak JWT
A08  Software & Data Integrity     e.g. insecure CI/CD, unverified updates
A09  Security Logging Failures     e.g. no logging of intrusion attempts, inaccessible logs
A10  Server-Side Request Forgery   e.g. SSRF to AWS metadata (169.254.169.254)
```

## A01 — Access control (IDOR)

```typescript
// ❌ Vulnerable — IDOR: any user can view any order
app.get('/api/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id)  // No ownership check!
  res.json(order)
})

// ✅ Secure — Ownership verification
app.get('/api/orders/:id', authenticate, async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    userId: req.user.id  // Filter on the current user
  })
  if (!order) return res.status(404).json({ error: 'Not found' })
  res.json(order)
})
```

## A03 — SQL Injection

```typescript
// ❌ Vulnerable — Direct concatenation
const query = `SELECT * FROM users WHERE email = '${email}'`
// Payload: ' OR 1=1 --

// ✅ Secure — Parameterized query
const user = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]  // Parameter escaped automatically
)

// ✅ Secure — ORM (Prisma/Sequelize/TypeORM)
const user = await prisma.user.findUnique({ where: { email } })
```

## A03 — XSS

```typescript
// ❌ Vulnerable — innerHTML with user data
element.innerHTML = userInput

// ✅ Secure — textContent or sanitization
element.textContent = userInput  // No HTML interpretation

// ✅ Secure — DOMPurify when HTML is required
import DOMPurify from 'dompurify'
element.innerHTML = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p'],
  ALLOWED_ATTR: []
})
```

## A07 — Secure JWT

```typescript
import jwt from 'jsonwebtoken'

// ❌ Bad — alg: none possible, weak secret
const token = jwt.sign(payload, 'secret')

// ✅ Good — strong algorithm, short expiry, robust secret
const token = jwt.sign(payload, process.env.JWT_SECRET!, {
  algorithm: 'HS256',
  expiresIn: '15m',     // Short-lived (separate refresh token)
  issuer: 'my-app',
  audience: 'my-app-users',
})

// Strict verification
const decoded = jwt.verify(token, process.env.JWT_SECRET!, {
  algorithms: ['HS256'],  // Rejects alg: none
  issuer: 'my-app',
})
```

## Security Headers — Express

```typescript
import helmet from 'helmet'

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'", "'nonce-${nonce}'"],
      styleSrc:    ["'self'", "'unsafe-inline'"],
      imgSrc:      ["'self'", "data:", "https://cdn.my-site.com"],
      connectSrc:  ["'self'", "https://api.my-site.com"],
      frameAncestors: ["'none'"],  // Prevents clickjacking
    }
  },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
}))

// Rate limiting
import rateLimit from 'express-rate-limit'
app.use('/api/auth', rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 min
  max: 10,                    // 10 attempts max
  message: 'Too many attempts, try again in 15 minutes',
}))
```

## SAST audit — Tools

```
TOOL            TYPE      LANGUAGES     INTEGRATION
──────────────  ────────  ────────────  ─────────────────────────
Semgrep         SAST      Multi         CI/CD, VS Code
CodeQL          SAST      Multi         Native GitHub Actions
Snyk            SCA+SAST  Multi         CI/CD, IDE
npm audit       SCA       Node.js       npm / yarn (native)
Trivy           Container Multi         Docker build, K8s
Gitleaks        Secrets   All           Pre-commit, CI
```

## Deliverables
- Security review report (OWASP Top 10 checklist)
- Secure code (pull request with fixes)
- Semgrep / Snyk report (CI export)
- Security headers configured and tested
- Secure development guide (team)
- Security incident runbook

## Output format
Specify: **stack** (Node.js, Python, Java…), **application type** (public API, intranet, fintech…), **scope** (full audit or specific feature), **constraints** (PCI-DSS, ISO 27001, HDS compliance…), **urgency** (preventive audit vs ongoing incident).
