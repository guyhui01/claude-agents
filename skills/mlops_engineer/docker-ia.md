# Skill — Docker for AI
> Certifications: Docker Certified Associate (DCA)

## Objective
Containerize AI services with GPU support, optimized images and reproducible builds.

## Optimized Dockerfile for Python AI
```dockerfile
# Multi-stage build to reduce the final size
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

FROM python:3.11-slim AS runtime
WORKDIR /app
# Copy only the installed dependencies
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Dockerfile with GPU support (CUDA)
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

## docker-compose for a local AI stack
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

## Image-size optimizations
- `slim` or `alpine` base rather than `full`
- Multi-stage builds
- `.dockerignore`: exclude `.git`, `__pycache__`, `*.pyc`, `tests/`, `docs/`
- Avoid `pip install` as root (use `--user`)

## Deliverables
- Optimized multi-stage Dockerfile
- docker-compose.yml for the local stack
- Configured .dockerignore
- Environment variables documentation

## Output format
Specify: service type (API, worker, notebook) · GPU required · dependent services · target image size
