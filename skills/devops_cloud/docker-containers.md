# Skill — Docker & Conteneurisation
> Certifications : Docker Certified Associate (DCA 2026), CKA, AWS ECS/EKS Specialty

## Objectif
Construire des images Docker optimisées, sécurisées et reproductibles, avec des patterns multi-stage, des compositions de services et les meilleures pratiques pour les environnements de production.

## Multi-Stage Builds & Optimisation

### Image Python production (multi-stage)

```dockerfile
# Dockerfile — Python API production
# Stage 1 : builder — installe les dépendances
FROM python:3.12-slim AS builder

WORKDIR /build

# Installer uv (remplace pip, 10-100x plus rapide)
RUN pip install uv==0.4.0

# Copier uniquement les fichiers de dépendances d'abord (cache layer)
COPY pyproject.toml uv.lock ./

# Installer dans un venv isolé
RUN uv venv /opt/venv && \
    uv pip install --no-cache -r pyproject.toml

# Stage 2 : production — image minimale
FROM python:3.12-slim AS production

# Sécurité : pas de root
RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

# Copier uniquement le venv du builder
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copier le code applicatif
COPY --chown=appuser:appuser src/ ./src/

# Filesystem en lecture seule + utilisateur non-root
USER appuser

# Healthcheck intégré
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD python -c "import httpx; httpx.get('http://localhost:8080/health').raise_for_status()"

EXPOSE 8080
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8080", "--workers", "4"]
```

### Image Node.js production

```dockerfile
# Dockerfile — Next.js production
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

### .dockerignore — indispensable

```
# .dockerignore
.git
.github
.gitignore
.env*
!.env.example
node_modules
__pycache__
*.pyc
.pytest_cache
.coverage
htmlcov/
dist/
build/
*.egg-info/
.mypy_cache
.ruff_cache
Dockerfile*
docker-compose*.yml
*.md
docs/
tests/
```

## Docker Compose — Environnements locaux & staging

```yaml
# docker-compose.yml
services:
  api:
    build:
      context: .
      target: production
      cache_from:
        - ghcr.io/company/api:latest
    image: company/api:local
    environment:
      DATABASE_URL: postgresql://postgres:secret@db:5432/appdb
      REDIS_URL: redis://cache:6379
    env_file:
      - .env.local
    ports:
      - "8080:8080"
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 10s
      timeout: 5s
      retries: 5
    volumes:
      - ./src:/app/src:ro    # Hot reload en dev uniquement
    networks:
      - backend
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 512M

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./db/init:/docker-entrypoint-initdb.d:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 3s
      retries: 10
    networks:
      - backend

  cache:
    image: redis:7-alpine
    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru
    volumes:
      - redis_data:/data
    networks:
      - backend

  # Outils de dev uniquement
  adminer:
    image: adminer:4
    ports:
      - "8081:8080"
    profiles:
      - dev
    networks:
      - backend

volumes:
  postgres_data:
  redis_data:

networks:
  backend:
    driver: bridge
```

### Docker Build Avancé — commandes clés

```bash
# Build multi-arch (AMD64 + ARM64) avec BuildKit
docker buildx create --use --name multiarch-builder
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --cache-from type=registry,ref=ghcr.io/company/api:cache \
  --cache-to type=registry,ref=ghcr.io/company/api:cache,mode=max \
  --tag ghcr.io/company/api:latest \
  --push .

# Analyser la taille et les layers
docker history ghcr.io/company/api:latest
dive ghcr.io/company/api:latest   # outil dive

# Scan de sécurité avec Trivy
trivy image --severity HIGH,CRITICAL ghcr.io/company/api:latest

# Scan avec Docker Scout
docker scout cves ghcr.io/company/api:latest

# Inspecter les layers pour optimisation
docker image inspect ghcr.io/company/api:latest | jq '.[0].RootFS.Layers | length'

# Build avec secrets (ne pas les laisser dans les layers)
docker buildx build \
  --secret id=npmrc,src=$HOME/.npmrc \
  --secret id=pip,src=$HOME/.pip/pip.conf \
  -t company/api:latest .
```

## Bonnes Pratiques Sécurité

| Règle | Pourquoi |
|-------|----------|
| Image base minimale (slim/alpine/distroless) | Réduction de la surface d'attaque |
| Utilisateur non-root (`USER appuser`) | Évite l'escalade de privilèges |
| `--no-cache` lors du `apt install` | Pas de cache APT dans les layers |
| `readOnlyRootFilesystem` | Empêche les modifications à l'exécution |
| Pas de secrets dans les ARG/ENV | Visibles dans `docker history` |
| `--secret` pour les credentials de build | Secrets montés en mémoire, non committs |
| Pinning des versions d'images base | Reproductibilité + pas de régression |
| Scan systématique (Trivy/Scout) | Détection CVE avant déploiement |

### Utilisation des secrets dans le Dockerfile (BuildKit)

```dockerfile
# Installer depuis un repo privé sans exposer le token
RUN --mount=type=secret,id=pip,target=/root/.pip/pip.conf \
    pip install --no-cache-dir private-package==1.2.3
```

## Livrables
- Dockerfiles multi-stage optimisés (Python, Node, Go, Java)
- docker-compose.yml par environnement (dev, test, staging)
- Rapport d'analyse des images (taille, layers, CVEs)
- Pipeline de build multi-arch avec cache registry
- Guide de sécurité Docker (Pod Security, rootless mode)
- .dockerignore et bonnes pratiques de layering

## Format de sortie
Précise : langage/runtime (Python/Node/Go/Java), version, registry cible (ECR/GCR/GHCR), architectures requises (amd64/arm64), contraintes de taille d'image, environnements à supporter (dev/staging/prod), service mesh ou sidecar patterns.
