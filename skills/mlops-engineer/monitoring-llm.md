# Skill — LLM Monitoring in Production
> Certifications: Databricks Certified ML Professional · AWS DevOps Engineer
> Frameworks: OWASP Top 10 for LLM Applications v2 (2024) · NIST AI RMF 1.0 (Govern/Map/Measure/Manage, 2023) · Google SRE Book (SLI/SLO/SLA, Beyer et al. O'Reilly 2016)

## Objective
Continuously observe, alert on and improve the **performance, quality and security** of an LLM in production — including detection of OWASP LLM Top 10 vulnerabilities and SLI/SLO steering in line with SRE practices.

## LLM monitoring dimensions

### 1. Technical performance
- **Latency**: p50, p95, p99 (target: p95 < 3s for short requests)
- **Throughput**: requests/minute, tokens/second
- **Availability**: uptime, API error rate (RateLimitError, TimeoutError)
- **Cost**: tokens consumed × price, cost per conversation

### 2. Response quality
- **Hallucination rate**: % of answers not grounded in the sources
- **Toxicity**: harmful-content detection
- **Relevance**: relevance of the answer to the request
- **User feedback**: thumbs up/down, explicit corrections

### 3. Distribution drift
- **Topic drift**: are the request topics changing?
- **Embedding drift**: are requests moving away from the training domain?

## Langfuse — Setup and instrumentation
```python
from langfuse import Langfuse
from langfuse.decorators import observe, langfuse_context

langfuse = Langfuse(public_key="...", secret_key="...", host="https://cloud.langfuse.com")

@observe()  # Automatic tracing of the function
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

## Alerts (example with Grafana)
```yaml
# Alert if p95 latency > 5s over 5 minutes
- alert: LLMHighLatency
  expr: histogram_quantile(0.95, llm_request_duration_seconds_bucket) > 5
  for: 5m
  annotations:
    summary: "High LLM latency detected"

# Alert if error rate > 5%
- alert: LLMHighErrorRate
  expr: rate(llm_requests_total{status="error"}[5m]) / rate(llm_requests_total[5m]) > 0.05
```

## Feedback loop
```python
# Collect user feedback and send it to Langfuse
async def submit_feedback(trace_id: str, score: Literal[0, 1], comment: str = ""):
    langfuse.score(trace_id=trace_id, name="user_feedback",
                   value=score, comment=comment)
    # Store in a DB for future fine-tuning
    await db.feedback.insert({"trace_id": trace_id, "score": score, "comment": comment})
```

## LLM security — OWASP Top 10 for LLM Applications v2 (2024)

Critical security framework for production LLM applications. Each category must be instrumented and alerted in the monitoring.

| ID | Vulnerability | Detection / monitoring | Mitigation |
|---|---|---|---|
| **LLM01** | Prompt Injection (direct/indirect) | Suspicious patterns in user prompts (override commands, reversed instructions), semantic input drift vs expected domain | Input filtering + locked system prompt + Constitutional AI |
| **LLM02** | Sensitive Information Disclosure | PII detection in outputs (email/number regex + PII classifier), leaked "system prompt" tokens | Output filtering + secret tokenization + DLP rules |
| **LLM03** | Supply Chain | Model provenance verification (HuggingFace model card, SHA256 hash), Anthropic/OpenAI SDK version pinning | ML SBOM + dependency scanning + signed model registry |
| **LLM04** | Data and Model Poisoning | Embedding drift, anomalies in training-data distribution, degraded eval performance | RAG validation pipeline, datasheet for datasets (Gebru 2021) |
| **LLM05** | Improper Output Handling | XSS / SQL injection via LLM outputs (rendered markdown, executed code), generated shell commands | Output escaping + tool-use sandboxing + content security policy |
| **LLM06** | Excessive Agency | Tool use without human validation on sensitive actions (deletion, transactions), looping agents | Human-in-the-loop (HITL) + permission scoping + maxSteps limits |
| **LLM07** | System Prompt Leakage | Detection if the system prompt appears in output (regex on known fragments) | Prompt obfuscation + leak alerts |
| **LLM08** | Vector and Embedding Weaknesses | Cross-tenant data leak via shared embeddings, jailbreak via adversarial embeddings | Per-tenant RAG isolation + access-pattern audit |
| **LLM09** | Misinformation | Hallucination rate (FActScore factuality score, Min et al. 2023, TruthfulQA Lin et al. 2022) | RAG with source citations + confidence scoring + warning UI |
| **LLM10** | Unbounded Consumption | Abnormal cost/request, DoS attacks via massive prompts, infinite agent loops | Per-user rate limiting + token budget + circuit breaker |

**Langfuse instrumentation for the OWASP LLM Top 10**:
```python
# Example: prompt-injection detection (LLM01) + security monitoring
@observe()
async def secured_llm_pipeline(query: str, user_id: str) -> str:
    # 1. Detect prompt-injection patterns (LLM01)
    injection_score = await detect_injection_patterns(query)
    langfuse_context.update_current_observation(
        metadata={"security": {"injection_score": injection_score, "user_id": user_id}}
    )
    if injection_score > 0.8:
        langfuse.score(trace_id=..., name="security_alert", value=1,
                       comment="LLM01 prompt injection detected")
        return "Request not processed — suspicious patterns detected"

    # 2. PII detection in output (LLM02)
    result = await chain.ainvoke({"query": query})
    pii_detected = await scan_output_pii(result["answer"])
    if pii_detected:
        result["answer"] = redact_pii(result["answer"])
        langfuse.score(trace_id=..., name="pii_leak", value=1)

    return result["answer"]
```

## Formalized SLI / SLO (Google SRE)

Each monitoring dimension must have a **measured SLI** and a documented **target SLO**:

| SLI (indicator) | SLO (target) | Consequence if exceeded |
|---|---|---|
| `availability_5xx_rate` | < 0.1% / 30 days (99.9% uptime) | Page oncall, postmortem |
| `latency_p95` short requests | < 3000 ms | WARNING alert |
| `latency_p99` long requests | < 10000 ms | WARNING alert |
| `hallucination_rate` | < 2% / rolling week (FActScore) | Model + RAG review |
| `injection_detection_rate` (LLM01) | > 95% true positive | Pattern update |
| `pii_leak_rate` (LLM02) | < 0.01% of responses | Urgent investigation |
| `cost_per_conversation` | < product budget target | FinOps alert |
| `user_feedback_thumbsup_rate` | > 80% | Prompt/RAG iteration |

**Error budget**: 30 days × (1 - availability SLO) = acceptable downtime budget. Beyond that → freeze releases + remediation.

## LLM monitoring anti-patterns

- ❌ **No OWASP LLM Top 10 instrumentation** = regulatory exposure (AI Act art. 9 risk management) and major security risk
- ❌ **Quality monitoring without a benchmark** (no FActScore, TruthfulQA, RAGAS) = hallucination detection by gut feeling
- ❌ **Implicit SLOs** ("p95 should be low") = no target figure, no error budget
- ❌ **No cost circuit breaker** (LLM10) = a surprise Anthropic bill on a DoS or agent loop
- ❌ **Logs without a correlation_id** = impossible to trace a user request across RAG/tools/LLM

## Deliverables
- Monitoring dashboard (latency, cost, quality, **OWASP LLM Top 10 security**)
- Configured alerts (latency, errors, cost, **prompt injection, PII leak, hallucination**)
- User feedback pipeline
- Weekly LLM quality report
- **Documented SLI/SLO** with a monthly error budget
- **LLM security incident runbook** (OWASP LLM01-10)

## Sources

- OWASP Top 10 for LLM Applications v2 (2024) — genai.owasp.org
- NIST AI Risk Management Framework 1.0 (Jan. 2023) — nist.gov/itl/ai-risk-management-framework
- Beyer et al. *Site Reliability Engineering* (Google / O'Reilly 2016) — sre.google
- Min et al. *FActScore* (EMNLP 2023) — arxiv 2305.14251
- Lin, Hilton, Evans *TruthfulQA* (ACL 2022) — arxiv 2109.07958

## Output format
Specify: monitoring stack (Langfuse, LangSmith, Grafana) · request volume · defined SLOs · alerting budget · **OWASP LLM Top 10 coverage mandatory**
