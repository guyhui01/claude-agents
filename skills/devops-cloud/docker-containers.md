# Skill — Docker & Containerization
> Certifications: Docker Certified Associate (DCA 2026), CKA, AWS ECS/EKS Specialty

## Objective
Build optimized, secure and reproducible Docker images, with multi-stage patterns, service compositions and best practices for production environments.

## Multi-Stage Builds & Optimization

### Production Python image (multi-stage)

```dockerfile
# Dockerfile — Python API production
# Stage 1: builder — install dependencies
FROM python:3.12-slim AS builder

WORKDIR /build

# Install uv (replaces pip, 10-100x faster)
RUN pip install uv==0.4.0

# Copy only the dependency files first (cache layer)
COPY pyproject.toml uv.lock ./

# Install in an isolated venv
RUN uv venv /opt/venv && \
    uv pip install --no-cache -r pyproject.toml

# Stage 2: production — minimal image
FROM python:3.12-slim AS production

# Security: no root
RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

# Copy only the venv from the builder
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy the application code
COPY --chown=appuser:appuser src/ ./src/

# Read-only filesystem + non-root user
USER appuser

# Built-in healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD python -c "import httpx; httpx.get('http://localhost:8080/health').raise_for_status()"

EXPOSE 8080
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8080", "--workers", "4"]
```

### Production Node.js image

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

### .dockerignore — essential

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

## Docker Compose — Local & staging environments

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
      - ./src:/app/src:ro    # Hot reload in dev only
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

  # Dev-only tools
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

### Advanced Docker Build — key commands

```bash
# Multi-arch build (AMD64 + ARM64) with BuildKit
docker buildx create --use --name multiarch-builder
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --cache-from type=registry,ref=ghcr.io/company/api:cache \
  --cache-to type=registry,ref=ghcr.io/company/api:cache,mode=max \
  --tag ghcr.io/company/api:latest \
  --push .

# Analyze size and layers
docker history ghcr.io/company/api:latest
dive ghcr.io/company/api:latest   # dive tool

# Security scan with Trivy
trivy image --severity HIGH,CRITICAL ghcr.io/company/api:latest

# Scan with Docker Scout
docker scout cves ghcr.io/company/api:latest

# Inspect layers for optimization
docker image inspect ghcr.io/company/api:latest | jq '.[0].RootFS.Layers | length'

# Build with secrets (keep them out of the layers)
docker buildx build \
  --secret id=npmrc,src=$HOME/.npmrc \
  --secret id=pip,src=$HOME/.pip/pip.conf \
  -t company/api:latest .
```

## Security best practices

| Rule | Why |
|-------|----------|
| Minimal base image (slim/alpine/distroless) | Reduced attack surface |
| Non-root user (`USER appuser`) | Avoids privilege escalation |
| `--no-cache` on `apt install` | No APT cache in the layers |
| `readOnlyRootFilesystem` | Prevents runtime modifications |
| No secrets in ARG/ENV | Visible in `docker history` |
| `--secret` for build credentials | Secrets mounted in memory, not committed |
| Pin base image versions | Reproducibility + no regression |
| Systematic scan (Trivy/Scout) | CVE detection before deployment |

### Using secrets in the Dockerfile (BuildKit)

```dockerfile
# Install from a private repo without exposing the token
RUN --mount=type=secret,id=pip,target=/root/.pip/pip.conf \
    pip install --no-cache-dir private-package==1.2.3
```

## Deliverables
- Optimized multi-stage Dockerfiles (Python, Node, Go, Java)
- Per-environment docker-compose.yml (dev, test, staging)
- Image analysis report (size, layers, CVEs)
- Multi-arch build pipeline with registry cache
- Docker security guide (Pod Security, rootless mode)
- .dockerignore and layering best practices

## Output format
Specify: language/runtime (Python/Node/Go/Java), version, target registry (ECR/GCR/GHCR), required architectures (amd64/arm64), image size constraints, environments to support (dev/staging/prod), service mesh or sidecar patterns.
