# Skill — Kubernetes en Production
> Certifications : CKA (Certified Kubernetes Administrator 2026), CKAD, CKS, AWS EKS Specialty

## Objectif
Déployer et opérer des workloads Kubernetes en production avec haute disponibilité, sécurité renforcée, autoscaling et politiques réseau — en suivant les standards cloud-native 2026.

## Ressources Kubernetes Production

### Deployment avec best practices

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
      maxUnavailable: 0          # Zéro downtime
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
      automountServiceAccountToken: false  # Sécurité
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
      stabilizationWindowSeconds: 300  # 5 min avant scale-down
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
  minAvailable: 2        # Toujours 2 pods disponibles pendant maintenance
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

### RBAC — Moindre privilège

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
    resourceNames: [api-secrets]     # Nom explicite — pas de wildcard
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

## Commandes opérationnelles clés

```bash
# Vérifier l'état d'un déploiement
kubectl rollout status deployment/api-service -n production

# Rollback immédiat
kubectl rollout undo deployment/api-service -n production

# Debug pod en CrashLoopBackOff
kubectl describe pod <pod-name> -n production
kubectl logs <pod-name> -n production --previous

# Vérifier les events du cluster
kubectl get events -n production --sort-by='.lastTimestamp' | tail -20

# Top pods par consommation
kubectl top pods -n production --sort-by=memory

# Forcer l'éviction d'un node pour maintenance
kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data

# Vérifier les policies réseau actives
kubectl get networkpolicies -n production -o wide

# Audit RBAC — qui peut faire quoi
kubectl auth can-i --list --as=system:serviceaccount:production:api-service-sa
```

## Bonnes Pratiques Production

| Domaine | Recommandation |
|---------|---------------|
| Sécurité | Pod Security Standards (Restricted), NetworkPolicy deny-all par défaut |
| Disponibilité | PDB + topologySpreadConstraints multi-AZ |
| Ressources | Requests/limits sur tous les containers, LimitRange par namespace |
| Observabilité | Annotations Prometheus, liveness + readiness probes |
| RBAC | IRSA/Workload Identity, pas de SA avec cluster-admin |
| Images | Digest pinning en prod, scan Trivy dans CI |

## Livrables
- Manifests Kubernetes prêts pour production (Deployment, HPA, PDB, NetworkPolicy, RBAC)
- Kustomize overlays par environnement (base/staging/production)
- Runbook opérationnel (rollback, debug, scaling manuel)
- Rapport d'audit sécurité (kube-bench, Polaris, Checkov)
- Dashboard Grafana workloads K8s

## Format de sortie
Précise : provider K8s (EKS/GKE/AKS/on-prem), version Kubernetes cible, nombre de namespaces, ingress controller utilisé (nginx/traefik/ALB), service mesh (Istio/Linkerd/none), registry d'images, politique de secrets (Vault/ESO/native).
