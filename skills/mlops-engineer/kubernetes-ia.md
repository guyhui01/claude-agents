# Skill — Kubernetes for AI
> Certifications: CKA · CKAD

## Objective
Deploy and orchestrate AI services on Kubernetes with GPU scaling and high availability.

## Deployment for an LLM API
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: llm-api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: llm-api
  template:
    metadata:
      labels:
        app: llm-api
    spec:
      containers:
        - name: llm-api
          image: registry/llm-api:v1.2.0
          ports:
            - containerPort: 8000
          env:
            - name: ANTHROPIC_API_KEY
              valueFrom:
                secretKeyRef:
                  name: llm-secrets
                  key: anthropic-api-key
          resources:
            requests:
              memory: "2Gi"
              cpu: "500m"
            limits:
              memory: "4Gi"
              cpu: "2"
          livenessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 30
            periodSeconds: 10
```

## HPA — Horizontal Pod Autoscaler
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: llm-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: llm-api
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

## GPU Node — Local model deployment
```yaml
spec:
  containers:
    - name: vllm
      image: vllm/vllm-openai:latest
      resources:
        limits:
          nvidia.com/gpu: 1
      args:
        - "--model"
        - "meta-llama/Llama-3.1-8B-Instruct"
        - "--max-model-len"
        - "8192"
  nodeSelector:
    accelerator: nvidia-gpu
```

## Secrets for API keys
```bash
kubectl create secret generic llm-secrets \
  --from-literal=anthropic-api-key=$ANTHROPIC_API_KEY \
  --from-literal=openai-api-key=$OPENAI_API_KEY
```

## Deliverables
- Kubernetes manifests (Deployment, Service, HPA, Secrets)
- GPU node configuration (if local models)
- Ingress with TLS
- Monitoring (Prometheus + Grafana)

## Output format
Specify: cloud provider (EKS, GKE, AKS) · GPU required · min/max replicas · network constraints
