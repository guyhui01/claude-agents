# Skill — SRE & Observability
> Certifications: Google SRE Foundation (2026), Prometheus Certified Associate, OpenTelemetry Certified Practitioner, Grafana Certified Professional

## Objective
Implement a complete observability strategy (metrics, logs, traces) aligned with SRE practices — measurable SLO/SLI, actionable alerting and Error Budgets to steer reliability.

## SLO / SLI / Error Budgets

### Defining SLIs and SLOs

```yaml
# slo-definitions.yaml — to version with the code
service: api-service
slos:
  - name: availability
    description: "Proportion of successful requests (HTTP 2xx/3xx)"
    sli:
      type: request_based
      good_events: "http_requests_total{status=~'2..|3..'}"
      total_events: "http_requests_total"
    target: 99.9          # 99.9% = 43.8 min downtime/month
    window: 30d

  - name: latency_p99
    description: "99% of requests under 500ms"
    sli:
      type: request_based
      good_events: "http_request_duration_seconds_bucket{le='0.5'}"
      total_events: "http_request_duration_seconds_count"
    target: 99.0
    window: 30d

  - name: freshness
    description: "Data refreshed within 5 minutes"
    sli:
      type: windows_based
      good_windows: "time() - data_last_updated_timestamp < 300"
    target: 99.5
    window: 7d
```

### Error Budget calculation

```python
# error_budget.py
from datetime import timedelta

def calculate_error_budget(slo_target: float, window_days: int = 30) -> dict:
    """
    Compute the Error Budget for a given SLO.

    slo_target: 0.999 for 99.9%
    """
    total_minutes = window_days * 24 * 60
    allowed_downtime_minutes = total_minutes * (1 - slo_target)
    allowed_downtime_seconds = allowed_downtime_minutes * 60

    return {
        "slo_target_pct": slo_target * 100,
        "window_days": window_days,
        "total_minutes": total_minutes,
        "error_budget_minutes": round(allowed_downtime_minutes, 2),
        "error_budget_seconds": round(allowed_downtime_seconds, 2),
        "error_budget_td": timedelta(minutes=allowed_downtime_minutes),
    }

# Examples
print(calculate_error_budget(0.999, 30))
# {'slo_target_pct': 99.9, 'window_days': 30, 'error_budget_minutes': 43.2, ...}

print(calculate_error_budget(0.9999, 30))
# error_budget_minutes: 4.32
```

## Prometheus / Grafana / Loki / Tempo stack

### Prometheus — alerting rules

```yaml
# prometheus/rules/api-slo.yml
groups:
  - name: slo-api-service
    rules:
      # Error rate over 5 minutes (fast burn)
      - alert: HighErrorRateFastBurn
        expr: |
          (
            sum(rate(http_requests_total{job="api-service", status=~"5.."}[5m]))
            /
            sum(rate(http_requests_total{job="api-service"}[5m]))
          ) > 14.4 * (1 - 0.999)
        for: 2m
        labels:
          severity: critical
          slo: availability
        annotations:
          summary: "High burn rate — Error Budget exhausted in <1h"
          description: "Service {{ $labels.job }}: error rate {{ $value | humanizePercentage }}"
          runbook_url: "https://wiki.company.com/runbooks/api-high-error-rate"

      # Moderate burn rate over 1 hour
      - alert: HighErrorRateSlowBurn
        expr: |
          (
            sum(rate(http_requests_total{job="api-service", status=~"5.."}[1h]))
            /
            sum(rate(http_requests_total{job="api-service"}[1h]))
          ) > 6 * (1 - 0.999)
        for: 15m
        labels:
          severity: warning
          slo: availability
        annotations:
          summary: "Moderate burn rate — Error Budget at risk"

      # P99 latency
      - alert: LatencyP99High
        expr: |
          histogram_quantile(0.99,
            sum by (le) (rate(http_request_duration_seconds_bucket{job="api-service"}[5m]))
          ) > 0.5
        for: 5m
        labels:
          severity: warning
```

### LLM-specific metrics (to add for agentic services)

Classic SLOs (availability, latency) are not enough for an LLM service. Also instrument:

```yaml
# prometheus/rules/llm-slo.yml
groups:
  - name: slo-llm-service
    rules:
      # LLM cost: alert if daily spend exceeds the budget
      - alert: LLMCostBudgetBurn
        expr: |
          sum(increase(llm_token_cost_usd_total[24h])) > 500
        for: 10m
        labels:
          severity: warning
          slo: cost
        annotations:
          summary: "24h LLM budget exceeded: ${{ $value | humanize }}"

      # Infinite agent loop: too many iterations on a single thread
      - alert: AgentLoopRunaway
        expr: |
          max_over_time(agent_iterations_per_thread[5m]) > 20
        for: 1m
        labels:
          severity: critical
          slo: cost
        annotations:
          summary: "Agent looping (>20 iterations) on thread {{ $labels.thread_id }}"

      # Hallucination rate (via async LLM-as-judge)
      - alert: HallucinationRateHigh
        expr: |
          (
            sum(rate(llm_response_judged_total{verdict="hallucinated"}[1h]))
            /
            sum(rate(llm_response_judged_total[1h]))
          ) > 0.10
        for: 15m
        labels:
          severity: warning
          slo: quality
        annotations:
          summary: "Hallucination rate > 10% over 1h"

      # Context window saturation
      - alert: ContextWindowSaturation
        expr: |
          histogram_quantile(0.95, rate(llm_input_tokens_bucket[10m])) > 150000
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "P95 of LLM inputs > 150k tokens — truncation / cost risk"
```

**Python instrumentation (OpenTelemetry extension)**:

```python
token_cost_counter = meter.create_counter(
    "llm_token_cost_usd",
    description="Cumulative cost in USD per model and per endpoint",
)
agent_iter_gauge = meter.create_gauge(
    "agent_iterations_per_thread",
    description="Current number of iterations per agentic thread",
)

@tracer.start_as_current_span("llm.call")
def call_llm(prompt: str, model: str = "claude-sonnet-4-6") -> str:
    response = client.messages.create(model=model, max_tokens=1024,
        messages=[{"role": "user", "content": prompt}])
    # Cost = input × input_price + output × output_price (Anthropic pricing)
    cost = (response.usage.input_tokens * INPUT_PRICE[model]
            + response.usage.output_tokens * OUTPUT_PRICE[model]) / 1_000_000
    token_cost_counter.add(cost, {"model": model, "endpoint": "agent"})
    return response.content[0].text
```

### OpenTelemetry — Python instrumentation

```python
# otel_setup.py
from opentelemetry import trace, metrics
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.instrumentation.sqlalchemy import SQLAlchemyInstrumentor
import logging

def setup_telemetry(service_name: str, otlp_endpoint: str = "http://otel-collector:4317"):
    # ── Tracing ──────────────────────────────────────────────
    trace_exporter = OTLPSpanExporter(endpoint=otlp_endpoint, insecure=True)
    tracer_provider = TracerProvider(
        resource=Resource.create({
            "service.name": service_name,
            "service.version": os.getenv("APP_VERSION", "unknown"),
            "deployment.environment": os.getenv("ENVIRONMENT", "dev"),
        })
    )
    tracer_provider.add_span_processor(BatchSpanProcessor(trace_exporter))
    trace.set_tracer_provider(tracer_provider)

    # ── Metrics ───────────────────────────────────────────────
    metric_exporter = OTLPMetricExporter(endpoint=otlp_endpoint, insecure=True)
    metric_reader = PeriodicExportingMetricReader(metric_exporter, export_interval_millis=30000)
    metrics.set_meter_provider(MeterProvider(metric_readers=[metric_reader]))

    # ── Auto-instrumentation ──────────────────────────────────
    FastAPIInstrumentor().instrument()
    SQLAlchemyInstrumentor().instrument()

    logging.info(f"OpenTelemetry initialized for {service_name}")

# In main.py
from otel_setup import setup_telemetry
setup_telemetry("api-service")

tracer = trace.get_tracer(__name__)
meter = metrics.get_meter(__name__)
request_counter = meter.create_counter("api.requests", description="Total API requests")

@app.post("/process")
async def process_item(item: Item):
    with tracer.start_as_current_span("process_item") as span:
        span.set_attribute("item.id", item.id)
        span.set_attribute("user.id", item.user_id)
        request_counter.add(1, {"endpoint": "/process"})
        result = await business_logic(item)
        span.set_attribute("result.status", result.status)
        return result
```

### Loki — Structured Logging

```python
# logging_config.py — structured JSON for Loki
import structlog
import logging

def configure_logging():
    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.JSONRenderer(),  # JSON for Loki
        ],
        context_class=dict,
        logger_factory=structlog.PrintLoggerFactory(),
    )

log = structlog.get_logger()
log.info("request_processed",
    user_id=user.id,
    endpoint="/api/process",
    duration_ms=145,
    status=200,
    trace_id=span_context.trace_id  # Correlation with Tempo
)
```

## Dashboards & Runbooks

### Grafana Dashboard as Code (Grafonnet)

```bash
# Generate a JSON dashboard from code
cat > dashboard.jsonnet << 'EOF'
local grafana = import 'grafonnet/grafana.libsonnet';
local dashboard = grafana.dashboard;
local row = grafana.row;
local prometheus = grafana.prometheus;
local graphPanel = grafana.graphPanel;

dashboard.new(
  'API Service SLO',
  tags=['slo', 'api'],
  time_from='now-24h',
)
.addPanel(
  graphPanel.new('Error Rate')
  .addTarget(prometheus.target(
    'sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))',
    legendFormat='Error Rate'
  ))
)
EOF
jsonnet -J vendor dashboard.jsonnet > dashboard.json
```

### Production SRE checklist

| Practice | Status |
|----------|--------|
| SLOs defined and documented | Mandatory |
| Error Budget policy (release freeze) | Mandatory |
| Multi-window alerts (fast+slow burn) | Mandatory |
| Runbook for each alert | Mandatory |
| Distributed tracing enabled | Recommended |
| Structured JSON logs + trace_id correlation | Recommended |
| Documented on-call rotation | Mandatory |
| Blameless post-mortem after each incident | Recommended |

## Deliverables
- Versioned SLO definitions YAML file
- Multi-window Prometheus rules (fast + slow burn)
- Grafana SLO + RED metrics dashboard (Rate, Errors, Duration)
- OpenTelemetry collector configuration (metrics + traces + logs)
- Prometheus/Grafana/Loki/Tempo docker-compose stack for local dev
- Runbooks for critical alerts

## Output format
Specify: technical stack (Prometheus/Datadog/CloudWatch/etc.), target SLOs (availability, latency, freshness), environment (K8s/ECS/Lambda), languages to instrument, estimated log/trace volume, monitoring infrastructure budget.
