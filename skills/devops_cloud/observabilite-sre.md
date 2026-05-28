# Skill — SRE & Observabilité
> Certifications : Google SRE Foundation (2026), Prometheus Certified Associate, OpenTelemetry Certified Practitioner, Grafana Certified Professional

## Objectif
Implémenter une stratégie d'observabilité complète (métriques, logs, traces) alignée sur les pratiques SRE — SLO/SLI mesurables, alerting actionnable et Error Budgets pour piloter la fiabilité.

## SLO / SLI / Error Budgets

### Définition des SLIs et SLOs

```yaml
# slo-definitions.yaml — à versionner avec le code
service: api-service
slos:
  - name: availability
    description: "Proportion de requêtes réussies (HTTP 2xx/3xx)"
    sli:
      type: request_based
      good_events: "http_requests_total{status=~'2..|3..'}"
      total_events: "http_requests_total"
    target: 99.9          # 99.9% = 43.8 min downtime/mois
    window: 30d

  - name: latency_p99
    description: "99% des requêtes sous 500ms"
    sli:
      type: request_based
      good_events: "http_request_duration_seconds_bucket{le='0.5'}"
      total_events: "http_request_duration_seconds_count"
    target: 99.0
    window: 30d

  - name: freshness
    description: "Données rafraîchies dans les 5 minutes"
    sli:
      type: windows_based
      good_windows: "time() - data_last_updated_timestamp < 300"
    target: 99.5
    window: 7d
```

### Calcul Error Budget

```python
# error_budget.py
from datetime import timedelta

def calculate_error_budget(slo_target: float, window_days: int = 30) -> dict:
    """
    Calcule l'Error Budget pour un SLO donné.
    
    slo_target: 0.999 pour 99.9%
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

# Exemples
print(calculate_error_budget(0.999, 30))
# {'slo_target_pct': 99.9, 'window_days': 30, 'error_budget_minutes': 43.2, ...}

print(calculate_error_budget(0.9999, 30))
# error_budget_minutes: 4.32
```

## Stack Prometheus / Grafana / Loki / Tempo

### Prometheus — règles d'alerting

```yaml
# prometheus/rules/api-slo.yml
groups:
  - name: slo-api-service
    rules:
      # Taux d'erreur sur 5 minutes (fast burn)
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
          summary: "Burn rate élevé — Error Budget épuisé en <1h"
          description: "Service {{ $labels.job }} : taux erreur {{ $value | humanizePercentage }}"
          runbook_url: "https://wiki.company.com/runbooks/api-high-error-rate"

      # Burn rate modéré sur 1 heure
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
          summary: "Burn rate modéré — Error Budget à risque"

      # Latence P99
      - alert: LatencyP99High
        expr: |
          histogram_quantile(0.99,
            sum by (le) (rate(http_request_duration_seconds_bucket{job="api-service"}[5m]))
          ) > 0.5
        for: 5m
        labels:
          severity: warning
```

### Métriques spécifiques LLM (à ajouter pour les services agentiques)

Les SLOs classiques (availability, latency) ne suffisent pas pour un service LLM. Instrumenter en plus :

```yaml
# prometheus/rules/llm-slo.yml
groups:
  - name: slo-llm-service
    rules:
      # Coût LLM : alerte si la dépense quotidienne dépasse le budget
      - alert: LLMCostBudgetBurn
        expr: |
          sum(increase(llm_token_cost_usd_total[24h])) > 500
        for: 10m
        labels:
          severity: warning
          slo: cost
        annotations:
          summary: "Budget LLM 24h dépassé : ${{ $value | humanize }}"

      # Boucle agent infinie : trop d'itérations sur un seul thread
      - alert: AgentLoopRunaway
        expr: |
          max_over_time(agent_iterations_per_thread[5m]) > 20
        for: 1m
        labels:
          severity: critical
          slo: cost
        annotations:
          summary: "Agent en boucle (>20 itérations) sur thread {{ $labels.thread_id }}"

      # Taux d'hallucination (via LLM-as-judge async)
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
          summary: "Taux d'hallucination > 10% sur 1h"

      # Context window saturation
      - alert: ContextWindowSaturation
        expr: |
          histogram_quantile(0.95, rate(llm_input_tokens_bucket[10m])) > 150000
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "P95 des inputs LLM > 150k tokens — risque de troncature / coût"
```

**Instrumentation Python (extension OpenTelemetry)** :

```python
token_cost_counter = meter.create_counter(
    "llm_token_cost_usd",
    description="Coût cumulé en USD par modèle et par endpoint",
)
agent_iter_gauge = meter.create_gauge(
    "agent_iterations_per_thread",
    description="Nombre d'itérations actuelles par thread agentique",
)

@tracer.start_as_current_span("llm.call")
def call_llm(prompt: str, model: str = "claude-sonnet-4-6") -> str:
    response = client.messages.create(model=model, max_tokens=1024,
        messages=[{"role": "user", "content": prompt}])
    # Coût = input × prix_input + output × prix_output (Anthropic pricing)
    cost = (response.usage.input_tokens * INPUT_PRICE[model]
            + response.usage.output_tokens * OUTPUT_PRICE[model]) / 1_000_000
    token_cost_counter.add(cost, {"model": model, "endpoint": "agent"})
    return response.content[0].text
```

### OpenTelemetry — instrumentation Python

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

    # ── Métriques ─────────────────────────────────────────────
    metric_exporter = OTLPMetricExporter(endpoint=otlp_endpoint, insecure=True)
    metric_reader = PeriodicExportingMetricReader(metric_exporter, export_interval_millis=30000)
    metrics.set_meter_provider(MeterProvider(metric_readers=[metric_reader]))

    # ── Auto-instrumentation ──────────────────────────────────
    FastAPIInstrumentor().instrument()
    SQLAlchemyInstrumentor().instrument()

    logging.info(f"OpenTelemetry initialized for {service_name}")

# Dans main.py
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
# logging_config.py — JSON structuré pour Loki
import structlog
import logging

def configure_logging():
    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.JSONRenderer(),  # JSON pour Loki
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
    trace_id=span_context.trace_id  # Corrélation avec Tempo
)
```

## Dashboards & Runbooks

### Dashboard Grafana as Code (Grafonnet)

```bash
# Générer un dashboard JSON depuis du code
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

### Checklist SRE Production

| Pratique | Statut |
|----------|--------|
| SLOs définis et documentés | Obligatoire |
| Error Budget policy (gel des releases) | Obligatoire |
| Alertes multi-window (fast+slow burn) | Obligatoire |
| Runbook pour chaque alerte | Obligatoire |
| Tracing distribué activé | Recommandé |
| Logs structurés JSON + corrélation trace_id | Recommandé |
| On-call rotation documentée | Obligatoire |
| Blameless post-mortem après chaque incident | Recommandé |

## Livrables
- SLO definitions fichier YAML versionné
- Règles Prometheus multi-window (fast + slow burn)
- Dashboard Grafana SLO + RED metrics (Rate, Errors, Duration)
- Configuration OpenTelemetry collector (métriques + traces + logs)
- Stack docker-compose Prometheus/Grafana/Loki/Tempo pour le dev local
- Runbooks pour les alertes critiques

## Format de sortie
Précise : stack technique (Prometheus/Datadog/CloudWatch/etc.), SLO cibles (disponibilité, latence, fraîcheur), environnement (K8s/ECS/Lambda), langages à instrumenter, volume de logs/traces estimé, budget infrastructure monitoring.
