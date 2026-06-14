# Skill — Incident Response for Production LLM Systems

> Certifications: CKA · AWS DevOps Engineer Professional (DOP-C02) · ITIL 4 Foundation · Google Professional DevOps Engineer · Anthropic Claude Code in Action (2026)

## Objective

Handle incidents specific to production LLM systems: detect, qualify, contain, resolve and document incidents (quality degradation, cost overruns, unavailability, unexpected behavior, prompt security flaws).

## LLM incident taxonomy

```
SEVERITY   TYPE                           EXAMPLES
─────────  ─────────────────────────────  ──────────────────────────────────────────
P0 - Crit  Security / Data leakage        Prompt injection → customer data leak
P0 - Crit  Total unavailability           LLM API down, no fallback
P1 - High  Severe quality degradation     Hallucinations > 20%, toxic outputs
P1 - High  Major cost overrun (> 5×budget) Token runaway, infinite agent loop
P2 - Med   Latency degradation            P95 > 10s, cascading timeouts
P2 - Med   Behavioral drift               Tone or style off-guidelines without update
P3 - Low   Monitoring anomaly             Missing metrics, broken dashboard
```

## LLM incident runbook — Standard procedure

### PHASE 1 — DETECTION & QUALIFICATION (< 5 min)

```yaml
detection:
  sources:
    - Grafana / Prometheus alerting (latency, errors, cost)
    - LLM-as-judge score < threshold (hallucination_rate, groundedness)
    - User ticket / team report
    - Security monitoring (prompt injection detected)

  qualification:
    questions:
      - "Which system is impacted? (RAG / agent / chatbot)"
      - "Since when? Any recently deployed change?"
      - "Which population is impacted? (all / segment / 1 user)"
      - "Is there a security / data leakage risk?"

    decision_tree:
      security_or_data_leakage: → "STOP: cut the system immediately, P0"
      severely_degraded_quality: → "P1: revert or rollback prompt, escalate"
      high_latency: → "P2: check API quota, enable rate limiting"
      abnormal_cost: → "P2: cut the expensive model, switch to an alternative model"
```

### PHASE 2 — CONTAINMENT (< 15 min)

```bash
# 1. Feature flag — disable the failing LLM component
curl -X PATCH /api/feature-flags/llm-agent -d '{"enabled": false}'

# 2. Roll the prompt back to the last stable version (Git)
git log --oneline prompts/ | head -5
git checkout <stable-commit> -- prompts/system-prompt-agent.txt

# 3. Switch to the fallback model (e.g. Haiku if Opus is failing)
# In the code: MODEL = os.getenv("LLM_FALLBACK_MODEL", "claude-haiku-4-5")

# 4. Emergency rate limiting (Nginx / API Gateway)
kubectl patch configmap api-gateway-config -p '{"data": {"rate_limit": "10/min"}}'

# 5. Cut access on a P0 security incident
kubectl scale deployment llm-service --replicas=0
```

### PHASE 3 — ROOT CAUSE INVESTIGATION (15-60 min)

```
INVESTIGATION CHECKLIST
──────────────────────────────────────────────────────────────
□ Trace back the last deployment (git log, ArgoCD history)
□ Compare metrics before/after the incident (Grafana diff)
□ Replay the offending requests in isolation (sandbox)
□ Check LangSmith / Helicone logs (full traces)
□ Analyze the active prompt (injection? drift?)
□ Check API quota / provider rate limit (Anthropic Console)
□ Check the RAG corpus (corrupted or stale data?)
□ Analyze the cost per call (token explosion?)
□ Search for 429 / 503 errors in the logs
□ Check the dependencies (vectorDB, embedding model, tools)
```

### LLM investigation tools (concrete)

```yaml
investigation_toolbox:
  quality_evaluation:
    - tool: RAGAs eval suite
      usage: "replay the golden dataset, check faithfulness/groundedness vs baseline"
      cmd: "ragas evaluate --dataset golden.jsonl --baseline v2026-04"
    - tool: DeepEval
      usage: "pytest-like tests on a representative prod sample"
      cmd: "deepeval test run incident_replay.py"

  tracing_and_replay:
    - tool: LangSmith
      usage: "traces of problematic requests with inputs/outputs/tokens/cost"
      url_pattern: "https://smith.langchain.com/projects/{project}/traces?filter=error"
    - tool: Helicone
      usage: "historical cost dashboard per endpoint, request replay"
      url: "https://www.helicone.ai/dashboard"
    - tool: Langfuse (open source self-hosted)
      usage: "tracing + eval + prompt management, alternative to LangSmith"

  prompt_versioning:
    - tool: Git history on the prompts/ folder
      cmd: "git log --oneline -p prompts/system-prompt-agent.txt | head -50"
    - tool: Diff between current and stable version
      cmd: "git diff <last-stable-tag> HEAD -- prompts/"

  token_analysis:
    - tool: Anthropic Console — Usage tab
      url: "https://console.anthropic.com/settings/usage"
      usage: "per-day call detail, spike identification"
    - tool: Token burn analysis (custom script)
      cmd: "python scripts/analyze_token_spike.py --from '2h ago' --threshold 50000"

  rag_corpus:
    - tool: Qdrant snapshot diff
      usage: "check whether the vector corpus changed (failed ingestion?)"
    - tool: Sandbox re-indexing
      usage: "re-index a sample on a test cluster for comparison"
```

### PHASE 4 — RESOLUTION & RESTORATION

```yaml
action_types:
  prompt_regression:
    - Fix the offending system prompt
    - Replay the full eval set (> required threshold)
    - Deploy via CI/CD with an evals gate

  token_overrun:
    - Identify long requests (token > 10k)
    - Add a strict max_tokens in the API calls
    - Enable prompt caching (cache_control: ephemeral)
    - Implement a circuit breaker on agent loops

  data_leakage:
    - Cut the system immediately
    - Notify DPO + CISO (GDPR 72h obligation)
    - Analyze traces to quantify the exposure
    - Fix the system prompt (missing guardrails)
    - Red teaming before going back to prod

  api_down:
    - Activate the configured fallback model
    - Queue the requests (Redis queue)
    - Communicate to users (status page)
    - Contact provider support on an SLA breach
```

### PHASE 5 — POST-MORTEM (within 48h)

```
LLM POST-MORTEM TEMPLATE
──────────────────────────────────────────────────────────────
Title         : [P0/P1/P2] — Short description — Date
Impact duration : [HH:MM] — [start datetime] → [end datetime]
Systems       : [Names of impacted components]

TIMELINE
  HH:MM — Detection: [how the incident was detected]
  HH:MM — Qualification: [severity decision]
  HH:MM — Containment: [mitigation action]
  HH:MM — Root cause identified
  HH:MM — Resolution deployed
  HH:MM — Full restoration verified

ROOT CAUSE
  [Precise technical description of the root cause]

CONTRIBUTING FACTORS
  - [Factor 1: e.g. no evals gate in CI]
  - [Factor 2: e.g. no circuit breaker on the agent]

ACTION ITEMS
  | Action                          | Owner  | Deadline |
  | Add an eval gate to CI/CD       | DevOps | D+7      |
  | Implement a circuit breaker     | Dev    | D+14     |
  | Document the runbook in the wiki | DevOps | D+3      |
```

## Deliverables

- LLM incident runbook (Confluence / wiki format)
- Escalation matrix (P0→P3 × owners × deadlines)
- LLM post-mortem template (Confluence-importable)
- Post-incident production-readiness checklist
- Incident monitoring dashboard (Grafana + alerts)

## Output format

Specify: **incident type** (security / quality / cost / availability), **impacted system** (RAG / agent / chatbot), **LLM provider** (Anthropic / OpenAI / other), **current monitoring stack**, **GDPR constraints** (sensitive data involved?).
