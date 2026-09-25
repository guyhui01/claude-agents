# QA V-Model Skill — Performance Testing

> Certification: CT-PT · CTAL-TTA
> Agent: AGENT-QA-CYCLEV.md
> Methodology: V-model

## Performance test types (ISTQB)

| Type | Goal | Scenario |
|---|---|---|
| **Load** | Behavior under normal and peak load | X concurrent users |
| **Stress** | Behavior beyond the limits | Overload up to breaking point |
| **Volume** | Behavior with a large data volume | Massive database |
| **Endurance (Soak)** | Stability over time | X hours continuously |
| **Spike** | Reaction to sudden peaks | Sharp spike then back to normal |

## Performance KPIs

| KPI | Definition | Typical target threshold |
|---|---|---|
| Response time | Delay between request and response | < 2s (page), < 500ms (API) |
| Throughput | Requests processed / second | [X] req/s per SLA |
| Error rate | % of requests in error | < 1% |
| CPU usage | % CPU under load | < 80% |
| Memory usage | RAM consumed | < 80% |
| P95 response time | 95% of requests under this delay | < 3s |

## Performance test plan template

```
PERFORMANCE TEST PLAN — [Project] — [Date]

Goal: [SLA to validate]
Environment: [server, DB, network specs]
Tool: [JMeter / Gatling / k6 / LoadRunner]

Scenarios:
| # | Type | Users | Duration | Ramp-up | Goal |
|---|------|-------|----------|---------|------|
| 1 | Load | 100 | 30 min | 5 min | RT < 2s |
| 2 | Stress | 500 | 15 min | 2 min | No crash |
| 3 | Endurance | 50 | 4h | 10 min | No memory leak |

Success criteria:
- P95 response time < [X]s
- Error rate < 1%
- No crash or timeout
```
