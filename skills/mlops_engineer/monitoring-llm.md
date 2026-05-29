# Skill — Monitoring LLM en Production
> Certifications : Databricks Certified ML Professional · AWS DevOps Engineer
> Référentiels : OWASP Top 10 for LLM Applications v2 (2024) · NIST AI RMF 1.0 (Govern/Map/Measure/Manage, 2023) · Google SRE Book (SLI/SLO/SLA, Beyer et al. O'Reilly 2016)

## Objectif
Observer, alerter et améliorer en continu la **performance, qualité et sécurité** d'un LLM en production — incluant la détection des vulnérabilités OWASP LLM Top 10 et le pilotage SLI/SLO conformément aux pratiques SRE.

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

## Sécurité LLM — OWASP Top 10 for LLM Applications v2 (2024)

Référentiel sécurité critique pour applications LLM en production. Chaque catégorie doit être instrumentée et alertée dans le monitoring.

| ID | Vulnérabilité | Détection / monitoring | Mitigation |
|---|---|---|---|
| **LLM01** | Prompt Injection (direct/indirect) | Patterns suspects dans prompts user (commandes d'override, instructions inverses), drift sémantique input vs domaine attendu | Filtrage input + system prompt verrouillé + Constitutional AI |
| **LLM02** | Sensitive Information Disclosure | Détection PII en outputs (regex emails/numéros + classifier PII), tokens "system prompt" leaké | Output filtering + tokenization secrets + DLP rules |
| **LLM03** | Supply Chain | Vérification provenance modèles (HuggingFace model card, hash SHA256), version pinning SDK Anthropic/OpenAI | SBOM ML + dependency scanning + model registry signé |
| **LLM04** | Data and Model Poisoning | Drift d'embeddings, anomalies dans distribution training data, performance dégradée sur évals | Validation pipeline RAG, datasheet for datasets (Gebru 2021) |
| **LLM05** | Improper Output Handling | XSS / SQL injection via outputs LLM (markdown rendu, code exécuté), commandes shell générées | Escaping output + sandboxing tool use + content security policy |
| **LLM06** | Excessive Agency | Tool use sans validation humaine sur actions sensibles (suppression, transactions), agents en boucle | Human-in-the-loop (HITL) + permission scoping + maxSteps limites |
| **LLM07** | System Prompt Leakage | Détection si system prompt apparaît en output (regex sur fragments connus) | Prompt obfuscation + alertes leak |
| **LLM08** | Vector and Embedding Weaknesses | Cross-tenant data leak via embeddings partagés, jailbreak via embeddings adversariaux | Isolation RAG par tenant + audit access patterns |
| **LLM09** | Misinformation | Hallucination rate (factuality score FActScore Min et al. 2023, TruthfulQA Lin et al. 2022) | RAG avec citations sources + confidence scoring + warning UI |
| **LLM10** | Unbounded Consumption | Coût/requête anormal, attaques DoS via prompts massifs, infinite loops d'agents | Rate limiting per user + token budget + circuit breaker |

**Instrumentation Langfuse pour OWASP LLM Top 10** :
```python
# Exemple : détection prompt injection (LLM01) + monitoring sécurité
@observe()
async def secured_llm_pipeline(query: str, user_id: str) -> str:
    # 1. Detection prompt injection patterns (LLM01)
    injection_score = await detect_injection_patterns(query)
    langfuse_context.update_current_observation(
        metadata={"security": {"injection_score": injection_score, "user_id": user_id}}
    )
    if injection_score > 0.8:
        langfuse.score(trace_id=..., name="security_alert", value=1,
                       comment="LLM01 prompt injection detected")
        return "Requête non traitée — patterns suspects détectés"

    # 2. PII detection en output (LLM02)
    result = await chain.ainvoke({"query": query})
    pii_detected = await scan_output_pii(result["answer"])
    if pii_detected:
        result["answer"] = redact_pii(result["answer"])
        langfuse.score(trace_id=..., name="pii_leak", value=1)

    return result["answer"]
```

## SLI / SLO formalisés (Google SRE)

Chaque dimension monitoring doit avoir un **SLI mesuré** et un **SLO cible** documenté :

| SLI (indicateur) | SLO (objectif) | Conséquence si dépassé |
|---|---|---|
| `availability_5xx_rate` | < 0.1% / 30 jours (99.9% uptime) | Page oncall, postmortem |
| `latency_p95` requêtes courtes | < 3000 ms | Alerte WARNING |
| `latency_p99` requêtes longues | < 10000 ms | Alerte WARNING |
| `hallucination_rate` | < 2% / semaine glissante (FActScore) | Review modèle + RAG |
| `injection_detection_rate` (LLM01) | > 95% true positive | Mise à jour patterns |
| `pii_leak_rate` (LLM02) | < 0.01% des réponses | Investigation urgente |
| `cost_per_conversation` | < cible budgétaire produit | Alerte FinOps |
| `user_feedback_thumbsup_rate` | > 80% | Itération prompts/RAG |

**Error budget** : 30 jours × (1 - SLO availability) = budget downtime acceptable. Au-delà → freeze releases + remédiation.

## Anti-patterns monitoring LLM

- ❌ **Pas d'instrumentation OWASP LLM Top 10** = exposition régulatoire (AI Act art. 9 risk management) et risque sécurité majeur
- ❌ **Monitoring qualité sans benchmark** (no FActScore, TruthfulQA, RAGAS) = détection hallucination au feeling
- ❌ **SLOs implicites** ("p95 doit être bas") = pas de chiffre cible, pas d'error budget
- ❌ **Pas de circuit breaker coût** (LLM10) = facture Anthropic surprise en cas de DoS ou boucle agent
- ❌ **Logs sans correlation_id** = impossible de tracer une requête utilisateur à travers RAG/tools/LLM

## Livrables
- Dashboard monitoring (latence, coût, qualité, **sécurité OWASP LLM Top 10**)
- Alertes configurées (latence, erreurs, coût, **prompt injection, PII leak, hallucination**)
- Pipeline de feedback utilisateur
- Rapport hebdomadaire qualité LLM
- **SLI/SLO documentés** avec error budget mensuel
- **Runbook incidents sécurité LLM** (OWASP LLM01-10)

## Sources

- OWASP Top 10 for LLM Applications v2 (2024) — genai.owasp.org
- NIST AI Risk Management Framework 1.0 (jan. 2023) — nist.gov/itl/ai-risk-management-framework
- Beyer et al. *Site Reliability Engineering* (Google / O'Reilly 2016) — sre.google
- Min et al. *FActScore* (EMNLP 2023) — arxiv 2305.14251
- Lin, Hilton, Evans *TruthfulQA* (ACL 2022) — arxiv 2109.07958

## Format de sortie
Précise : stack monitoring (Langfuse, LangSmith, Grafana) · volume de requêtes · SLOs définis · budget alerting · **couverture OWASP LLM Top 10 obligatoire**
