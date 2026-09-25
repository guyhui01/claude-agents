# Skill — AI Security Incident Response
> Certifications: CISSP · CISM · CompTIA Security+

## Objective
Detect, contain and remediate security incidents impacting AI systems, with procedures tailored to LLM specifics.

## PICERL process adapted to AI

### Preparation
```
AI IRT team:
  → CISO / Security Lead
  → AI / MLOps Lead
  → DPO (if personal data)
  → Communications (if public incident)
  → Legal (if regulatory)

Tools to have in place:
  → SIEM with active AI rules
  → Documented runbooks per incident type
  → Isolated sandbox for forensic analysis
  → CERT-FR, ANSSI contacts
```

### Identification (< 15 min for critical)
```python
# Automatic alert classification
INCIDENT_SEVERITY = {
    "prompt_injection_confirmed": "CRITICAL",
    "data_exfiltration_suspected": "CRITICAL",
    "model_poisoning_detected": "CRITICAL",
    "api_brute_force": "HIGH",
    "unusual_token_usage": "MEDIUM",
    "rate_limit_exceeded": "LOW",
    "failed_auth_spike": "MEDIUM"
}

def classify_incident(alert_type: str, context: dict) -> str:
    base_severity = INCIDENT_SEVERITY.get(alert_type, "LOW")
    
    # Escalate if sensitive data is involved
    if context.get("data_classification") in ["PII", "CONFIDENTIAL"]:
        if base_severity == "HIGH": return "CRITICAL"
        if base_severity == "MEDIUM": return "HIGH"
    
    return base_severity
```

### Containment (< 30 min for HIGH/CRITICAL)
```python
# Automated containment playbook
class IncidentContainment:
    async def contain_compromised_user(self, user_id: str, reason: str):
        # 1. Revoke all active tokens
        await self.revoke_all_sessions(user_id)
        
        # 2. Disable the API key
        await self.disable_api_key(user_id)
        
        # 3. Blacklist the IP (if known)
        await self.block_ip(self.get_last_ip(user_id))
        
        # 4. Capture state for investigation
        await self.snapshot_user_activity(user_id, lookback_hours=24)
        
        # 5. Notify
        await self.notify_security_team(user_id, reason, severity="HIGH")
    
    async def isolate_compromised_model(self, model_id: str):
        # Remove the model from production traffic
        await self.update_traffic_weight(model_id, weight=0)
        await self.rollback_to_previous_version(model_id)
        await self.audit_all_inferences(model_id, lookback_days=7)
```

### Eradication and Remediation — 6 runbooks per incident type

#### Runbook 1 — Prompt Injection (OWASP LLM01)
```
1. Isolate the compromised session/user (revoke_all_sessions)
2. Capture the exact payload and context (LangSmith/Helicone logs)
3. Analyze the vector: direct (user input) or indirect (RAG/tool output)
4. Audit the actions performed by the agent during the attack
   → tool_calls executed, data accessed, emails sent, etc.
5. Patch input validation (allowlist, sanitization, content_filter)
6. Update the system prompt with reinforced guardrails
7. Replay the payload in a sandbox to verify the fix
8. Notify affected users if personal data was touched
```

#### Runbook 2 — Data Poisoning (OWASP LLM04)
```
1. Freeze ongoing ingestions (RAG pipeline kill switch)
2. Identify the corrupted documents (ingestion logs + snapshot diffs)
3. Quantify the impact: how many requests used these chunks?
4. Purge the vector store + re-ingest clean sources from backup
5. Re-evaluate the fine-tuned model if applicable (drift measurement)
6. Reinforce ingestion validation (source verification, hash, signing)
7. Put anomaly detection in place on future embeddings
8. Post-mortem: how did the corrupted docs get in?
```

#### Runbook 3 — Model Theft / Extraction (OWASP LLM10)
```
1. Identify the attacker (IP, API keys, user-agent, request pattern)
2. Invalidate all exposed or suspicious API keys
3. Block the IP/range at the WAF/Cloudflare level
4. Implement watermarking on the outputs (canary tokens in responses)
5. Reinforce rate limiting (per IP, per user, per key)
6. Enable specific monitoring (abnormal volume, repetitive queries)
7. If a proprietary model was copied → file a complaint + cease & desist
8. Review the exposure strategy (public API vs internal only)
```

#### Runbook 4 — Data Exfiltration (OWASP LLM06)
```
1. Immediately shut down the affected system (kubectl scale --replicas=0)
2. Identify the exposed data: type (PII/health/finance), volume, time window
3. Snapshot the logs for evidence (chain of custody)
4. Notify DPO + CISO + Legal (trigger the GDPR protocol)
5. CNIL notification within 72h (Art. 33) + data subjects if Art. 34
6. Analyze the cause: over-permissions? injection? misconfigured RAG?
7. Fix the system prompt (DLP guardrails, PII masking)
8. Red teaming before going back to prod (similar exfiltration tests)
9. Notify CERT-FR / ANSSI if it is a large-scale incident
```

#### Runbook 5 — Denial of Service / Token Burn (OWASP LLM04)
```
1. Identify the source of the abnormal load (IP, user, endpoint)
2. Cut off the source (block IP, disable API key, kill agentic threads)
3. Queue legitimate requests (Redis queue + circuit breaker)
4. Quantify the cost incurred (Anthropic Console + token_cost metric)
5. Enable emergency rate limiting (10 req/min per user max)
6. If an agent loop → add a strict max_iterations + termination condition
7. If a prompt bomb (10k tokens) → max_input_tokens in the gateway
8. Post-mortem: why didn't the circuit breaker trip?
```

#### Runbook 6 — Auth Bypass / Privilege Escalation
```
1. Revoke all active sessions/JWTs (rotate signing key)
2. Identify the exploited mechanism (code flaw, prompt injection, MFA bypass)
3. Audit the actions performed with escalated privileges (SIEM audit log)
4. Block compromised accounts (force password reset + MFA)
5. Patch the vulnerability (CVE tracking if third-party lib)
6. Review the RBAC/ABAC roles: principle of least privilege
7. Reinforce authentication (mandatory MFA, WebAuthn for admins)
8. Test with OWASP ZAP / Burp Suite before going back to prod
9. Communicate to users if necessary (password change)
```

### RCA template (Root Cause Analysis) — 5 Whys method

```
INCIDENT : [short title]
DATE     : [start → end] · DURATION : [HH:MM]
SEVERITY : [P0/P1/P2/P3]

5 WHYS (root cause):
  Q1: Why did the incident happen?
    A: [immediate symptom]
  Q2: Why [A1]?
    A: [technical cause]
  Q3: Why [A2]?
    A: [process failure]
  Q4: Why [A3]?
    A: [organizational failure]
  Q5: Why [A4]?
    A: [systemic root cause]

FINAL ROOT CAUSE: [one-sentence summary]

CONTRIBUTING FACTORS:
  - [F1: e.g. no regression tests on prompts]
  - [F2: e.g. missing monitoring on metric X]

FIXES (by horizon):
  Immediate (D+1)  : [hotfix deployed]
  Short term (D+7) : [tests + monitoring]
  Systemic (D+30)  : [process review / training / tooling]
```

### Incident tracking table (template)

```
| ID         | Start date       | Severity | Type              | System        | Status       | Owner       | Resolution SLA | Data exposed     | RCA |
|------------|------------------|----------|-------------------|---------------|--------------|-------------|----------------|------------------|-----|
| INC-2026-01| 2026-05-15 14:32 | P0       | Prompt Injection  | chatbot-prod  | Resolved     | sec@corp    | 2h / target 4h | No               | ✓   |
| INC-2026-02| 2026-05-18 09:10 | P1       | Token Burn        | agent-rag     | Post-mortem  | sre@corp    | 6h / target 8h | No               | ⏳  |
| INC-2026-03| 2026-05-24 23:47 | P0       | Data Exfiltration | api-public    | Containment  | ciso@corp   | in progress    | PII (47 users)   | -   |
```

Recommended SLAs: P0 ≤ 4h, P1 ≤ 8h, P2 ≤ 24h, P3 ≤ 72h.

### GDPR notification (72h)
```
In case of a personal data breach (Art. 33 GDPR):

CNIL notification within 72h:
  → Nature of the breach
  → Categories and number of data subjects concerned
  → Likely consequences
  → Measures taken or planned

If high risk to individuals (Art. 34):
  → Direct notification to the data subjects concerned
  → Without delay (no 72h window)
```

## Deliverables
- AI incident response plan (IRP)
- Runbooks per incident type (6 types minimum)
- Incident tracking table (status, SLA)
- Post-incident report (RCA + lessons learned)
- Annual simulation exercise (tabletop exercise)

## Output format
Specify: incident detected · affected systems · data exposed (type, volume) · current phase (containment/eradication/recovery) · regulatory obligations triggered
