# Skill — Application Performance (Profiling, SLO, Optimization)
> Certifications: AWS DVA-C02 · MongoDB Certified Developer Professional · Google Professional Cloud Developer

## Objective
Measure, analyze and optimize an application's performance: profiling, bottleneck identification, SLO/SLI, caching strategies and query optimization.

## SLO / SLI / SLA — Definitions

```
TERM   NAME                       EXAMPLE
─────  ─────────────────────────  ─────────────────────────────────────────────────
SLI    Service Level Indicator    P99 API latency = 850ms measured this month
SLO    Service Level Objective    P99 API latency < 1000ms (internal target)
SLA    Service Level Agreement    99.9% availability (contractual commitment to client)
Error  Remaining budget           If SLO = 99.9%, budget = 43.8 min/month of downtime
Budget
```

## SLO dashboard — Key metrics

```
METRIC                SLO TARGET        ALERT           TOOL
────────────────────  ────────────────  ──────────────  ─────────────────────
Availability          > 99.9%           < 99.5%         Datadog / Prometheus
P50 latency           < 200ms           > 300ms         Datadog APM
P99 latency           < 1000ms          > 1500ms        Datadog APM
Error rate            < 0.1%            > 0.5%          Sentry / Datadog
Throughput (RPS)      > 500 req/s       < 200 req/s     Grafana
```

## Node.js profiling

```typescript
// CPU profiling with clinic.js
// $ npx clinic doctor -- node server.js
// $ npx clinic flame -- node server.js

// Manual profiling with perf_hooks
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

## SQL query optimization

```sql
-- Identify slow queries (PostgreSQL)
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- EXPLAIN ANALYZE before optimizing
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.*, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > '2026-01-01'
GROUP BY u.id;

-- Targeted index on frequent filters
CREATE INDEX CONCURRENTLY idx_orders_user_status
ON orders (user_id, status)
WHERE status IN ('pending', 'processing');

-- Partial index for queries on recent data
CREATE INDEX CONCURRENTLY idx_orders_recent
ON orders (created_at DESC)
WHERE created_at > NOW() - INTERVAL '90 days';
```

## Caching strategies

```typescript
// Multi-level cache
class OrderService {
  // L1: In-memory cache (in-process LRU)
  private memCache = new LRUCache<string, Order>({ max: 1000, ttl: 60_000 })

  // L2: Redis (distributed cache)
  private redis: RedisClient

  async getOrder(id: string): Promise<Order> {
    // L1 — Memory
    const cached = this.memCache.get(id)
    if (cached) return cached

    // L2 — Redis
    const redisVal = await this.redis.get(`order:${id}`)
    if (redisVal) {
      const order = JSON.parse(redisVal)
      this.memCache.set(id, order)
      return order
    }

    // L3 — Database
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

## Deliverables
- Profiling report (flame graph, identified hotspots)
- Prioritized optimization plan (impact × effort)
- Defined and configured SLO/SLI (Datadog / Prometheus)
- Optimized SQL queries (EXPLAIN ANALYZE before/after)
- Cache configuration (Redis, in-memory)
- Monitoring dashboard (Grafana / Datadog)

## Output format
Specify: **stack and database**, **symptom** (latency, CPU, memory, errors…), **volume** (req/s, data size), **infrastructure** (K8s, ECS, serverless…), **existing or to-be-defined SLOs**, **constraints** (cloud budget, acceptable complexity).
