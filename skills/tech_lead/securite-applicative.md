# Skill — Sécurité Applicative (OWASP Top 10)
> Certifications : AWS DVA-C02 · Azure Developer Associate AZ-204 · ISTQB FL v4.0

## Objectif
Identifier et corriger les vulnérabilités applicatives selon l'OWASP Top 10 2021 : injection, authentification, exposition de données, IDOR — avec des exemples de code sécurisé et une checklist de revue.

## OWASP Top 10 — 2021

```
A01  Broken Access Control         Ex: IDOR, escalade de privilèges, bypass de rôle
A02  Cryptographic Failures        Ex: données en clair, MD5, clés en dur
A03  Injection                     Ex: SQL Injection, Command Injection, XSS stocké
A04  Insecure Design               Ex: absence de rate limiting, logique métier contournable
A05  Security Misconfiguration     Ex: headers manquants, debug en prod, CORS trop permissif
A06  Vulnerable Components         Ex: dépendances obsolètes avec CVE connues
A07  Auth & Session Failures       Ex: brute force possible, session fixation, JWT faible
A08  Software & Data Integrity     Ex: CI/CD non sécurisé, mise à jour sans vérification
A09  Security Logging Failures     Ex: pas de log des tentatives d'intrusion, logs inaccessibles
A10  Server-Side Request Forgery   Ex: SSRF vers metadata AWS (169.254.169.254)
```

## A01 — Contrôle d'accès (IDOR)

```typescript
// ❌ Vulnérable — IDOR : tout utilisateur peut voir n'importe quelle commande
app.get('/api/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id)  // Pas de vérification ownership !
  res.json(order)
})

// ✅ Sécurisé — Vérification de l'ownership
app.get('/api/orders/:id', authenticate, async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    userId: req.user.id  // Filtre sur l'utilisateur courant
  })
  if (!order) return res.status(404).json({ error: 'Not found' })
  res.json(order)
})
```

## A03 — Injection SQL

```typescript
// ❌ Vulnérable — Concaténation directe
const query = `SELECT * FROM users WHERE email = '${email}'`
// Payload: ' OR 1=1 --

// ✅ Sécurisé — Requête paramétrée
const user = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]  // Paramètre échappé automatiquement
)

// ✅ Sécurisé — ORM (Prisma/Sequelize/TypeORM)
const user = await prisma.user.findUnique({ where: { email } })
```

## A03 — XSS

```typescript
// ❌ Vulnérable — innerHTML avec données utilisateur
element.innerHTML = userInput

// ✅ Sécurisé — textContent ou sanitisation
element.textContent = userInput  // Pas d'interprétation HTML

// ✅ Sécurisé — DOMPurify si HTML requis
import DOMPurify from 'dompurify'
element.innerHTML = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p'],
  ALLOWED_ATTR: []
})
```

## A07 — JWT Sécurisé

```typescript
import jwt from 'jsonwebtoken'

// ❌ Mauvais — alg: none possible, secret faible
const token = jwt.sign(payload, 'secret')

// ✅ Bon — algorithme fort, expiration courte, secret robuste
const token = jwt.sign(payload, process.env.JWT_SECRET!, {
  algorithm: 'HS256',
  expiresIn: '15m',     // Courte durée (refresh token séparé)
  issuer: 'mon-app',
  audience: 'mon-app-users',
})

// Vérification stricte
const decoded = jwt.verify(token, process.env.JWT_SECRET!, {
  algorithms: ['HS256'],  // Rejette alg: none
  issuer: 'mon-app',
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
      imgSrc:      ["'self'", "data:", "https://cdn.mon-site.com"],
      connectSrc:  ["'self'", "https://api.mon-site.com"],
      frameAncestors: ["'none'"],  // Empêche le clickjacking
    }
  },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
}))

// Rate limiting
import rateLimit from 'express-rate-limit'
app.use('/api/auth', rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 min
  max: 10,                    // 10 tentatives max
  message: 'Trop de tentatives, réessayez dans 15 minutes',
}))
```

## Audit SAST — Outils

```
OUTIL           TYPE      LANGAGES      INTÉGRATION
──────────────  ────────  ────────────  ─────────────────────────
Semgrep         SAST      Multi         CI/CD, VS Code
CodeQL          SAST      Multi         GitHub Actions natif
Snyk            SCA+SAST  Multi         CI/CD, IDE
npm audit       SCA       Node.js       npm / yarn (natif)
Trivy           Container Multi         Docker build, K8s
Gitleaks        Secrets   Tous          Pre-commit, CI
```

## Livrables
- Rapport de revue sécurité (OWASP Top 10 checklist)
- Code sécurisé (pull request avec corrections)
- Rapport Semgrep / Snyk (export CI)
- Security headers configurés et testés
- Guide de développement sécurisé (équipe)
- Runbook incidents de sécurité

## Format de sortie
Précise : **stack** (Node.js, Python, Java…), **type d'application** (API publique, intranet, fintech…), **périmètre** (audit complet ou feature spécifique), **contraintes** (conformité PCI-DSS, ISO 27001, HDS…), **urgence** (audit préventif vs incident en cours).
