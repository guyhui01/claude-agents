# Skill — Monitoring LLM en Production
> Certifications : Databricks Certified ML Professional · AWS DevOps Engineer

## Objectif
Observer, alerter et améliorer en continu la qualité et les performances d'un LLM en production.

## Dimensions du monitoring LLM

### 1. Performance technique
- **Latence** : p50, p95, p99 (objectif : p95 < 3s pour les requêtes courtes)
- **Throughput** : requêtes/minute, tokens/seconde
- **Disponibilité** : uptime, taux d'erreur API (RateLimitError, TimeoutError)
- **Coût** : tokens consommés × prix, coût par conversation

### 2. Qualité des réponses
- **Hallucination rate** : % de réponses non ancrées dans les sources
- **Toxicity** : détection de contenu nuisible
- **Relevance** : pertinence de la réponse par rapport à la requête
- **User feedback** : thumbs up/down, corrections explicites

### 3. Drift de distribution
- **Topic drift** : les sujets des requêtes changent-ils ?
- **Embedding drift** : les requêtes s'éloignent-elles du domaine d'entraînement ?

## Langfuse — Setup et instrumentation
```python
from langfuse import Langfuse
from langfuse.decorators import observe, langfuse_context

langfuse = Langfuse(public_key="...", secret_key="...", host="https://cloud.langfuse.com")

@observe()  # Trace automatique de la fonction
async def rag_pipeline(query: str) -> str:
    langfuse_context.update_current_observation(
        input=query,
        metadata={"user_id": user_id, "session_id": session_id}
    )
    result = await chain.ainvoke({"query": query})
    langfuse_context.update_current_observation(
        output=result["answer"],
        usage={"input": result["usage"]["input_tokens"], "output": result["usage"]["output_tokens"]}
    )
    return result["answer"]
```

## Alertes (exemple avec Grafana)
```yaml
# Alerte si latence p95 > 5s sur 5 minutes
- alert: LLMHighLatency
  expr: histogram_quantile(0.95, llm_request_duration_seconds_bucket) > 5
  for: 5m
  annotations:
    summary: "LLM latence élevée détectée"

# Alerte si taux d'erreur > 5%
- alert: LLMHighErrorRate
  expr: rate(llm_requests_total{status="error"}[5m]) / rate(llm_requests_total[5m]) > 0.05
```

## Feedback loop
```python
# Collecter le feedback utilisateur et l'envoyer à Langfuse
async def submit_feedback(trace_id: str, score: Literal[0, 1], comment: str = ""):
    langfuse.score(trace_id=trace_id, name="user_feedback",
                   value=score, comment=comment)
    # Stocker dans une DB pour fine-tuning futur
    await db.feedback.insert({"trace_id": trace_id, "score": score, "comment": comment})
```

## Livrables
- Dashboard monitoring (latence, coût, qualité)
- Alertes configurées (latence, erreurs, coût)
- Pipeline de feedback utilisateur
- Rapport hebdomadaire qualité LLM

## Format de sortie
Précise : stack monitoring (Langfuse, LangSmith, Grafana) · volume de requêtes · SLOs définis · budget alerting
