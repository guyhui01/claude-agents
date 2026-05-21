# Skill — Docker pour l'IA
> Certifications : Docker Certified Associate (DCA)

## Objectif
Containeriser des services IA avec support GPU, images optimisées et builds reproductibles.

## Dockerfile optimisé pour Python IA
```dockerfile
# Multi-stage build pour réduire la taille finale
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

FROM python:3.11-slim AS runtime
WORKDIR /app
# Copier seulement les dépendances installées
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Dockerfile avec support GPU (CUDA)
```dockerfile
FROM nvidia/cuda:12.3-cudnn8-runtime-ubuntu22.04
RUN apt-get update && apt-get install -y python3.11 python3-pip && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir torch torchvision --index-url https://download.pytorch.org/whl/cu121
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0"]
```

## docker-compose pour stack IA locale
```yaml
services:
  api:
    build: .
    ports: ["8000:8000"]
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    depends_on: [qdrant, redis]

  qdrant:
    image: qdrant/qdrant:latest
    ports: ["6333:6333"]
    volumes: ["qdrant_data:/qdrant/storage"]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  ollama:
    image: ollama/ollama:latest
    ports: ["11434:11434"]
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]

volumes:
  qdrant_data:
```

## Optimisations taille d'image
- Base `slim` ou `alpine` plutôt que `full`
- Multi-stage builds
- `.dockerignore` : exclure `.git`, `__pycache__`, `*.pyc`, `tests/`, `docs/`
- Éviter `pip install` en root (utiliser `--user`)

## Livrables
- Dockerfile multi-stage optimisé
- docker-compose.yml pour la stack locale
- .dockerignore configuré
- Documentation des variables d'environnement

## Format de sortie
Précise : type de service (API, worker, notebook) · GPU requis · services dépendants · taille cible de l'image
