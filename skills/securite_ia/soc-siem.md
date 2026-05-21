# Skill — SOC, SIEM & Détection des Incidents IA
> Certifications : CISSP · CISM · CompTIA Security+

## Objectif
Monitorer en continu les systèmes IA pour détecter les comportements anormaux, les attaques et les incidents de sécurité.

## Architecture SOC pour les systèmes IA

### Sources de logs à collecter
```
Application Layer :
  → Logs d'inférence LLM (user_id, model, tokens, latency)
  → Logs d'accès API (method, endpoint, status, IP)
  → Logs d'authentification (succès, échecs, MFA)
  → Logs des agents IA (actions, tools utilisés)

Infrastructure Layer :
  → Logs Kubernetes (pod events, resource usage)
  → Logs réseau (VPC flow logs, WAF)
  → Logs cloud (AWS CloudTrail, Azure Activity Log)

Data Layer :
  → Accès aux données sensibles (S3, vector DB)
  → Requêtes SQL sur le data warehouse
  → Modifications de schéma
```

### Règles de détection (SIEM)
```python
# Règles Sigma (YAML) pour les incidents LLM
title: Possible Prompt Injection via High Token Count
description: Détection d'injection de prompt via des requêtes anormalement longues
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

### Alertes et playbooks de réponse
```python
class SecurityAlert:
    CRITICAL = {
        "prompt_injection_success": {
            "description": "Injection confirmée — réponse anormale détectée",
            "response": [
                "1. Bloquer immédiatement l'utilisateur/IP",
                "2. Invalider la session",
                "3. Capturer les logs de la conversation",
                "4. Notifier RSSI + équipe sécurité",
                "5. Analyser le vecteur d'attaque",
                "6. Patch si 0-day"
            ],
            "sla_response": "15 minutes"
        },
        "data_exfiltration_suspected": {
            "description": "Volume anormal de données dans les réponses LLM",
            "response": [
                "1. Throttler les requêtes de l'utilisateur",
                "2. Analyser les 50 dernières conversations",
                "3. Vérifier les logs d'accès aux données",
                "4. Déclencher DPIA si données personnelles exposées"
            ],
            "sla_response": "30 minutes"
        }
    }
```

## Dashboard SOC IA (métriques)
| Métrique | Normal | Alerte |
|---|---|---|
| Taux d'erreur API | < 1% | > 5% |
| Latence P99 | < 5s | > 30s |
| Tokens input moyen | < 500 | > 3000 |
| Échecs auth / heure | < 10 | > 50 |
| Conversations bloquées | < 0,1% | > 1% |
| Coût tokens / heure | Baseline ± 20% | > 2x baseline |

## Livrables
- Architecture de collecte des logs IA
- Règles Sigma de détection
- Playbooks de réponse aux incidents
- Dashboard SOC temps réel (Grafana / Kibana)
- Rapport mensuel de sécurité

## Format de sortie
Précise : stack de logs (ELK, Splunk, Datadog, Azure Sentinel) · volume de logs/jour · types d'incidents prioritaires · équipe SOC (interne, externalisé) · SLA de réponse
