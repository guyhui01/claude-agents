# Skill — LLM Evaluation & Observability (Evals + LLM Ops)

> Certifications: Anthropic Claude Code in Action (2026), DeepLearning.AI Evaluating and Debugging Generative AI, AWS Certified AI Practitioner (AIF-C01)

## Objective

Design and implement an evaluation (evals) and observability framework for production LLM systems: metric definition, automated evals pipeline, drift monitoring and LLM Ops dashboards.

## LLM evaluation framework (Evals)

### The 4 evaluation levels

```
LEVEL     TYPE                      METHOD                     TOOL
───────   ──────────────────────   ────────────────────────   ───────────────────────
L1        Functional                Prompt unit test            Pytest, unittest
L2        Output quality            LLM-as-judge               Claude, GPT-4o judge
L3        Security / robustness     Automated red teaming      Garak, PyRIT
L4        Business / ROI            Production A/B test        Feature flags + metrics
```

### Key metrics to instrument

```yaml
quality_metrics:
  groundedness: "Answer grounded in the provided context (RAG)"
  faithfulness: "Faithfulness to the reference corpus"
  answer_relevance: "Relevance to the question"
  context_precision: "Signal/noise of the retrieved context"
  hallucination_rate: "Rate of unverifiable claims"

performance_metrics:
  latency_p50_p95_p99: "Response time (ms)"
  tokens_per_second: "Generation throughput"
  cost_per_query: "USD cost per call"
  cache_hit_rate: "Anthropic cache rate (target > 80%)"

business_metrics:
  task_completion_rate: "User task success rate"
  human_intervention_rate: "Frequency of escalation to a human"
  user_satisfaction_score: "NPS / thumbs up/down"
  fallback_rate: "Rate of generic answers / refusals"
```

### Automated evals pipeline

```python
# Typical structure of a Claude evals pipeline
eval_pipeline = {
    "dataset": "eval_set.jsonl",          # questions + reference answers
    "judge_model": "claude-opus-4-8",     # LLM judge
    "metrics": [
        "groundedness",
        "answer_relevance",
        "hallucination_rate"
    ],
    "threshold": {
        "groundedness": 0.85,
        "answer_relevance": 0.80,
        "hallucination_rate": 0.05        # max 5%
    },
    "trigger": "pre-deploy + daily-cron"
}

# Typical LLM-as-judge prompt
judge_prompt = """
Evaluate this assistant response on a 1-5 scale:
- Groundedness (grounded in the context): {score}/5
- Relevance (answers the question): {score}/5
- Hallucination detected: yes / no

Question: {question}
Provided context: {context}
Response to evaluate: {response}
"""
```

## Production LLM observability stack

```
LAYER                 RECOMMENDED TOOL           ROLE
──────────────────   ────────────────────────   ──────────────────────────────────
Tracing              LangSmith / Helicone       Full prompt → response trace
Metrics              Prometheus + Grafana       Latency, cost, tokens, errors
Logs                 OpenTelemetry → ELK        Structured logs per LLM call
Continuous evals     Ragas / DeepEval           Automated groundedness scoring
Alerting             PagerDuty / Opsgenie       Alert if drift detected
Dashboard            Grafana (LLM Ops board)    Real-time operational view
```

### LLM Ops dashboard — KPIs to display

```
┌────────────────────────────────────────────────────────┐
│  LLM OPS DASHBOARD                                     │
├──────────────┬──────────────┬──────────────────────────┤
│ Latency P95  │ Cost/day     │ Hallucination rate        │
│ 1,240 ms    │ $12.40      │ 2.3%  ✅ (< 5%)           │
├──────────────┼──────────────┼──────────────────────────┤
│ Cache hits   │ Task compl.  │ Groundedness score        │
│ 78% ⚠       │ 91%  ✅     │ 0.87  ✅ (> 0.85)        │
├──────────────┴──────────────┴──────────────────────────┤
│  DRIFT ALERT : answer_relevance ↘ 0.73 (< 0.80)       │
│  → Recheck RAG dataset + re-run evals                  │
└────────────────────────────────────────────────────────┘
```

## Drift management

```
DRIFT TYPE         SYMPTOM                         ACTION
─────────────────  ──────────────────────────────  ──────────────────────────────
Data drift         New queries outside the corpus   Enrich RAG store / fine-tune
Concept drift      Meaning of terms has changed     Update the system prompt
Model drift        LLM update changes the outputs   Replay the full eval set
Prompt drift       Regression after a prompt change Git blame prompt + rollback
Distribution shift Volume or user type changes      Re-evaluate per segment
```

## Deliverables

- Complete evals framework (dataset, metrics, thresholds, cadence)
- Automated evals pipeline (pre-deployment CI/CD gate)
- Grafana LLM Ops dashboard (importable template)
- Alert and drift management runbook
- Monthly LLM quality report (evolution of key metrics)

## Output format

Specify: **LLM system type** (RAG / agent / chatbot / generation), **LLM used** (Claude / GPT / Gemini), **calls/day volume**, **existing observability stack**, **business goals** (compliance / quality / cost / SLA).

## Anti-patterns
- ❌ **Metrics without a reference set (golden set)**: non-reproducible scores → versioned dataset
- ❌ **Uncalibrated LLM judge**: leniency bias → precise criteria + scored reference cases
- ❌ **Observability without alerting**: invisible drift → thresholds + alerts (hallucination rate, latency, cost)
- ❌ **No cost / cache hit rate tracking**: budget drift → cost-per-call metrics
- ❌ **One-shot evals** (not continuous): silent regressions → evals pipeline in CI/CD

## Sources
- **RAGAS** — Es et al., *EACL 2024* (arXiv 2309.15217) — faithfulness, answer/context relevance · **DeepEval**
- **MMLU / TruthfulQA / HumanEval** benchmarks · **LLM-as-a-Judge** · red teaming **Garak / PyRIT** (NIST AI RMF)
- **LLM observability**: Langfuse · LangSmith · Helicone · OpenTelemetry — langfuse.com / smith.langchain.com

## See also
- [`prompt-evaluation.md`](prompt-evaluation.md) — unit evaluation of a prompt
- [`rag-prompt-design.md`](rag-prompt-design.md) — RAGAS metrics for RAG
- [`../orchestrateur_workflow/workflow-monitoring.md`](../orchestrateur_workflow/workflow-monitoring.md) — workflow monitoring
- [`../ai_architect/evaluation-llm.md`](../ai_architect/evaluation-llm.md) — evaluation on the AI architecture side
