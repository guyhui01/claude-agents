# Skill — Performance Applicative (Profiling, SLO, Optimisation)
> Certifications : AWS DVA-C02 · MongoDB Certified Developer Professional · Google Professional Cloud Developer

## Objectif
Mesurer, analyser et optimiser les performances d'une application : profiling, identification des goulets d'étranglement, SLO/SLI, stratégies de cache et optimisation des requêtes.

## SLO / SLI / SLA — Définitions

```
TERME  NOM                        EXEMPLE
─────  ─────────────────────────  ─────────────────────────────────────────────────
SLI    Service Level Indicator    P99 latence API = 850ms mesuré ce mois
SLO    Service Level Objective    P99 latence API < 1000ms (objectif interne)
SLA    Service Level Agreement    Disponibilité 99,9% (engagement contractuel client)
Error  Budget restant             Si SLO = 99.9%, budget = 43,8 min/mois d'indispo
Budget
```

## Dashboard SLO — Métriques clés

```
MÉTRIQUE              SLO CIBLE         ALERTE          OUTIL
────────────────────  ────────────────  ──────────────  ─────────────────────
Disponibilité         > 99,9%           < 99,5%         Datadog / Prometheus
Latence P50           < 200ms           > 300ms         Datadog APM
Latence P99           < 1000ms          > 1500ms        Datadog APM
Taux d'erreur         < 0,1%            > 0,5%          Sentry / Datadog
Throughput (RPS)      > 500 req/s       < 200 req/s     Grafana
```

## Profiling Node.js

```typescript
// Profiling CPU avec clinic.js
// $ npx clinic doctor -- node server.js
// $ npx clinic flame -- node server.js

// Profiling manuel avec perf_hooks
import { performance, PerformanceObserver } from 'perf_hooks'

const obs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`)
  }
})
obs.observe({ entryTypes: ['measure'] })

performance.mark('start-db-query')
const result = await db.query('SELECT ...')
performance.mark('end-db-query')
performance.measure('db-query', 'start-db-query', 'end-db-query')
```

## Optimisation des requêtes SQL

```sql
-- Identifier les requêtes lentes (PostgreSQL)
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- EXPLAIN ANALYZE avant optimisation
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.*, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > '2026-01-01'
GROUP BY u.id;

-- Index ciblé sur les filtres fréquents
CREATE INDEX CONCURRENTLY idx_orders_user_status
ON orders (user_id, status)
WHERE status IN ('pending', 'processing');

-- Index partiel pour les requêtes sur données récentes
CREATE INDEX CONCURRENTLY idx_orders_recent
ON orders (created_at DESC)
WHERE created_at > NOW() - INTERVAL '90 days';
```

## Stratégies de cache

```typescript
// Cache multi-niveaux
class OrderService {
  // L1: Cache mémoire (LRU in-process)
  private memCache = new LRUCache<string, Order>({ max: 1000, ttl: 60_000 })

  // L2: Redis (cache distribué)
  private redis: RedisClient

  async getOrder(id: string): Promise<Order> {
    // L1 — Mémoire
    const cached = this.memCache.get(id)
    if (cached) return cached

    // L2 — Redis
    const redisVal = await this.redis.get(`order:${id}`)
    if (redisVal) {
      const order = JSON.parse(redisVal)
      this.memCache.set(id, order)
      return order
    }

    // L3 — Base de données
    const order = await this.db.orders.findById(id)
    await this.redis.setEx(`order:${id}`, 300, JSON.stringify(order))  // TTL 5 min
    this.memCache.set(id, order)
    return order
  }

  async invalidateOrder(id: string): Promise<void> {
    this.memCache.delete(id)
    await this.redis.del(`order:${id}`)
  }
}
```

## Horizontal Scaling — Kubernetes HPA

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: orders-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: orders-api
  minReplicas: 2
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: { type: Utilization, averageUtilization: 70 }
    - type: Resource
      resource:
        name: memory
        target: { type: Utilization, averageUtilization: 80 }
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies: [{ type: Pods, value: 4, periodSeconds: 60 }]
    scaleDown:
      stabilizationWindowSeconds: 300
```

## Livrables
- Rapport de profiling (flame graph, hotspots identifiés)
- Plan d'optimisation priorisé (impact × effort)
- SLO/SLI définis et configurés (Datadog / Prometheus)
- Requêtes SQL optimisées (EXPLAIN ANALYZE avant/après)
- Configuration cache (Redis, in-memory)
- Dashboard de monitoring (Grafana / Datadog)

## Format de sortie
Précise : **stack et base de données**, **symptôme** (latence, CPU, mémoire, erreurs…), **volume** (req/s, data size), **infrastructure** (K8s, ECS, serverless…), **SLO existants ou à définir**, **contraintes** (budget cloud, complexité acceptable).
