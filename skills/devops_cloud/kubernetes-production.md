# Skill — Kubernetes in Production
> Certifications: CKA (Certified Kubernetes Administrator 2026), CKAD, CKS, AWS EKS Specialty

## Objective
Deploy and operate Kubernetes workloads in production with high availability, hardened security, autoscaling and network policies — following 2026 cloud-native standards.

## Production Kubernetes resources

### Deployment with best practices

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  namespace: production
  labels:
    app: api-service
    version: "2.4.1"
    team: platform
spec:
  replicas: 3
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: api-service
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0          # Zero downtime
  template:
    metadata:
      labels:
        app: api-service
        version: "2.4.1"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8080"
        prometheus.io/path: "/metrics"
    spec:
      serviceAccountName: api-service-sa
      automountServiceAccountToken: false  # Security
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 2000
        seccompProfile:
          type: RuntimeDefault
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: topology.kubernetes.io/zone
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: api-service
      containers:
        - name: api
          image: ghcr.io/company/api-service:2.4.1
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080
              protocol: TCP
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop: [ALL]
          resources:
            requests:
              cpu: "250m"
              memory: "256Mi"
            limits:
              cpu: "1000m"
              memory: "512Mi"
          env:
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: api-secrets
                  key: db-password
          envFrom:
            - configMapRef:
                name: api-config
          livenessProbe:
            httpGet:
              path: /health/live
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
            failureThreshold: 3
          volumeMounts:
            - name: tmp
              mountPath: /tmp
      volumes:
        - name: tmp
          emptyDir: {}
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app: api-service
                topologyKey: kubernetes.io/hostname
```

### HorizontalPodAutoscaler (HPA v2)

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
    - type: Pods
      pods:
        metric:
          name: http_requests_per_second
        target:
          type: AverageValue
          averageValue: "100"
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300  # 5 min before scale-down
      policies:
        - type: Percent
          value: 10
          periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
        - type: Percent
          value: 100
          periodSeconds: 60
```

### PodDisruptionBudget

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-service-pdb
  namespace: production
spec:
  minAvailable: 2        # Always 2 pods available during maintenance
  selector:
    matchLabels:
      app: api-service
```

### NetworkPolicy — Zero Trust

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-service-netpol
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: api-service
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: ingress-nginx
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 8080
  egress:
    - to:
        - podSelector:
            matchLabels:
              app: postgres
      ports:
        - protocol: TCP
          port: 5432
    - to: []     # DNS
      ports:
        - protocol: UDP
          port: 53
```

### RBAC — Least privilege

```yaml
# ServiceAccount + Role + RoleBinding
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api-service-sa
  namespace: production
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::123456789:role/api-service-irsa
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: api-service-role
  namespace: production
rules:
  - apiGroups: [""]
    resources: [configmaps]
    verbs: [get, list, watch]
  - apiGroups: [""]
    resources: [secrets]
    resourceNames: [api-secrets]     # Explicit name — no wildcard
    verbs: [get]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: api-service-rolebinding
  namespace: production
subjects:
  - kind: ServiceAccount
    name: api-service-sa
    namespace: production
roleRef:
  kind: Role
  name: api-service-role
  apiGroup: rbac.authorization.k8s.io
```

## Key operational commands

```bash
# Check a deployment's status
kubectl rollout status deployment/api-service -n production

# Immediate rollback
kubectl rollout undo deployment/api-service -n production

# Debug a pod in CrashLoopBackOff
kubectl describe pod <pod-name> -n production
kubectl logs <pod-name> -n production --previous

# Check cluster events
kubectl get events -n production --sort-by='.lastTimestamp' | tail -20

# Top pods by consumption
kubectl top pods -n production --sort-by=memory

# Force a node eviction for maintenance
kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data

# Check active network policies
kubectl get networkpolicies -n production -o wide

# RBAC audit — who can do what
kubectl auth can-i --list --as=system:serviceaccount:production:api-service-sa
```

## Production best practices

| Area | Recommendation |
|---------|---------------|
| Security | Pod Security Standards (Restricted), deny-all NetworkPolicy by default |
| Availability | PDB + multi-AZ topologySpreadConstraints |
| Resources | Requests/limits on all containers, LimitRange per namespace |
| Observability | Prometheus annotations, liveness + readiness probes |
| RBAC | IRSA/Workload Identity, no SA with cluster-admin |
| Images | Digest pinning in prod, Trivy scan in CI |

## Deliverables
- Production-ready Kubernetes manifests (Deployment, HPA, PDB, NetworkPolicy, RBAC)
- Per-environment Kustomize overlays (base/staging/production)
- Operational runbook (rollback, debug, manual scaling)
- Security audit report (kube-bench, Polaris, Checkov)
- Grafana dashboard for K8s workloads

## Output format
Specify: K8s provider (EKS/GKE/AKS/on-prem), target Kubernetes version, number of namespaces, ingress controller used (nginx/traefik/ALB), service mesh (Istio/Linkerd/none), image registry, secrets policy (Vault/ESO/native).
