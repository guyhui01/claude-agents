# Skill — SOC, SIEM & AI Incident Detection
> Certifications: CISSP · CISM · CompTIA Security+

## Objective
Continuously monitor AI systems to detect abnormal behavior, attacks and security incidents.

## SOC architecture for AI systems

### Log sources to collect
```
Application Layer:
  → LLM inference logs (user_id, model, tokens, latency)
  → API access logs (method, endpoint, status, IP)
  → Authentication logs (success, failures, MFA)
  → AI agent logs (actions, tools used)

Infrastructure Layer:
  → Kubernetes logs (pod events, resource usage)
  → Network logs (VPC flow logs, WAF)
  → Cloud logs (AWS CloudTrail, Azure Activity Log)

Data Layer:
  → Access to sensitive data (S3, vector DB)
  → SQL queries on the data warehouse
  → Schema changes
```

### Detection rules (SIEM)
```python
# Sigma rules (YAML) for LLM incidents
title: Possible Prompt Injection via High Token Count
description: Detection of prompt injection via abnormally long requests
logsource:
    product: llm-service
    service: inference
detection:
    selection:
        prompt_tokens: ">5000"
        user_role: "standard"
    condition: selection
level: medium
tags:
    - owasp.llm01

---
title: LLM API Key Brute Force
description: Multiple API key failures from same IP
logsource:
    product: api-gateway
    service: auth
detection:
    selection:
        event: "api_key_invalid"
    timeframe: 5m
    condition: selection | count() by source_ip > 20
level: high
tags:
    - owasp.llm04
```

### Alerts and response playbooks
```python
class SecurityAlert:
    CRITICAL = {
        "prompt_injection_success": {
            "description": "Confirmed injection — abnormal response detected",
            "response": [
                "1. Immediately block the user/IP",
                "2. Invalidate the session",
                "3. Capture the conversation logs",
                "4. Notify CISO + security team",
                "5. Analyze the attack vector",
                "6. Patch if 0-day"
            ],
            "sla_response": "15 minutes"
        },
        "data_exfiltration_suspected": {
            "description": "Abnormal data volume in LLM responses",
            "response": [
                "1. Throttle the user's requests",
                "2. Analyze the last 50 conversations",
                "3. Check the data access logs",
                "4. Trigger a DPIA if personal data is exposed"
            ],
            "sla_response": "30 minutes"
        }
    }
```

## AI SOC dashboard (metrics)
| Metric | Normal | Alert |
|---|---|---|
| API error rate | < 1% | > 5% |
| P99 latency | < 5s | > 30s |
| Average input tokens | < 500 | > 3000 |
| Auth failures / hour | < 10 | > 50 |
| Blocked conversations | < 0.1% | > 1% |
| Token cost / hour | Baseline ± 20% | > 2x baseline |

## Deliverables
- AI log collection architecture
- Sigma detection rules
- Incident response playbooks
- Real-time SOC dashboard (Grafana / Kibana)
- Monthly security report

## Output format
Specify: log stack (ELK, Splunk, Datadog, Azure Sentinel) · log volume/day · priority incident types · SOC team (in-house, outsourced) · response SLA
