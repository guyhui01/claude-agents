# Skill — Réponse aux Incidents de Sécurité IA
> Certifications : CISSP · CISM · CompTIA Security+

## Objectif
Détecter, contenir et remédier aux incidents de sécurité impactant les systèmes IA, avec des procédures adaptées aux spécificités des LLMs.

## Processus PICERL adapté à l'IA

### Préparation
```
Équipe IRT IA :
  → RSSI / Security Lead
  → Responsable IA / MLOps
  → DPO (si données personnelles)
  → Communication (si incident public)
  → Juridique (si réglementaire)

Outils à avoir en place :
  → SIEM avec règles IA actives
  → Runbooks documentés par type d'incident
  → Sandbox isolée pour l'analyse forensique
  → Contacts CERT-FR, ANSSI
```

### Identification (< 15 min pour critiques)
```python
# Classification automatique des alertes
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
    
    # Escalade si données sensibles impliquées
    if context.get("data_classification") in ["PII", "CONFIDENTIAL"]:
        if base_severity == "HIGH": return "CRITICAL"
        if base_severity == "MEDIUM": return "HIGH"
    
    return base_severity
```

### Confinement (< 30 min pour HIGH/CRITICAL)
```python
# Playbook de confinement automatisé
class IncidentContainment:
    async def contain_compromised_user(self, user_id: str, reason: str):
        # 1. Révoquer tous les tokens actifs
        await self.revoke_all_sessions(user_id)
        
        # 2. Bloquer la clé API
        await self.disable_api_key(user_id)
        
        # 3. Blacklister l'IP (si connue)
        await self.block_ip(self.get_last_ip(user_id))
        
        # 4. Capturer l'état pour investigation
        await self.snapshot_user_activity(user_id, lookback_hours=24)
        
        # 5. Notifier
        await self.notify_security_team(user_id, reason, severity="HIGH")
    
    async def isolate_compromised_model(self, model_id: str):
        # Retirer le modèle du trafic de production
        await self.update_traffic_weight(model_id, weight=0)
        await self.rollback_to_previous_version(model_id)
        await self.audit_all_inferences(model_id, lookback_days=7)
```

### Éradication et Remédiation — 6 runbooks par type d'incident

#### Runbook 1 — Prompt Injection (OWASP LLM01)
```
1. Isoler la session/utilisateur compromis (revoke_all_sessions)
2. Capturer le payload exact et le contexte (logs LangSmith/Helicone)
3. Analyser le vecteur : direct (user input) ou indirect (RAG/tool output)
4. Auditer les actions effectuées par l'agent durant l'attaque
   → tool_calls exécutés, données accédées, emails envoyés, etc.
5. Patcher la validation d'entrée (allowlist, sanitization, content_filter)
6. Mettre à jour le system prompt avec guardrails renforcés
7. Re-jouer le payload en sandbox pour vérifier la correction
8. Notifier les utilisateurs impactés si données personnelles touchées
```

#### Runbook 2 — Data Poisoning (OWASP LLM04)
```
1. Geler les ingestions en cours (kill switch pipeline RAG)
2. Identifier les documents corrompus (logs d'ingestion + diff snapshots)
3. Quantifier l'impact : combien de requêtes ont utilisé ces chunks ?
4. Purger le vector store + re-ingérer les sources saines depuis backup
5. Ré-évaluer le modèle fine-tuné si applicable (mesure du drift)
6. Renforcer la validation d'ingestion (source verification, hash, signing)
7. Mettre en place anomaly detection sur les futurs embeddings
8. Post-mortem : comment les docs corrompus sont entrés ?
```

#### Runbook 3 — Model Theft / Extraction (OWASP LLM10)
```
1. Identifier l'attaquant (IP, clés API, user-agent, pattern de requêtes)
2. Invalider toutes les clés API exposées ou suspectes
3. Bloquer l'IP/range au niveau WAF/Cloudflare
4. Implémenter watermarking sur les outputs (canary tokens dans réponses)
5. Renforcer le rate limiting (par IP, par user, par clé)
6. Activer monitoring spécifique (volume anormal, queries répétitives)
7. Si modèle propriétaire copié → déposer plainte + cease & desist
8. Réviser la stratégie d'exposition (API publique vs internal only)
```

#### Runbook 4 — Data Exfiltration (OWASP LLM06)
```
1. Couper immédiatement le système concerné (kubectl scale --replicas=0)
2. Identifier les données exposées : type (PII/santé/finance), volume, période
3. Snapshot des logs pour preuves (chain of custody)
4. Notifier DPO + RSSI + Juridique (déclenchement protocole RGPD)
5. Notification CNIL sous 72h (Art. 33) + personnes concernées si Art. 34
6. Analyser la cause : sur-permissions ? injection ? mauvaise config RAG ?
7. Corriger le système prompt (DLP guardrails, PII masking)
8. Red teaming avant remise en prod (tests d'exfiltration similaires)
9. Notifier le CERT-FR / ANSSI si incident d'ampleur
```

#### Runbook 5 — Denial of Service / Token Burn (OWASP LLM04)
```
1. Identifier la source de la charge anormale (IP, user, endpoint)
2. Couper la source (block IP, désactiver clé API, kill threads agentiques)
3. Mettre en file d'attente les requêtes légitimes (Redis queue + circuit breaker)
4. Quantifier le coût engagé (Anthropic Console + token_cost metric)
5. Activer rate limiting d'urgence (10 req/min par user max)
6. Si boucle agent → ajouter max_iterations strict + termination condition
7. Si bombe prompt (10k tokens) → max_input_tokens dans le gateway
8. Post-mortem : pourquoi le circuit breaker n'a pas déclenché ?
```

#### Runbook 6 — Auth Bypass / Privilege Escalation
```
1. Révoquer toutes les sessions/JWT actifs (rotate signing key)
2. Identifier le mécanisme exploité (faille code, prompt injection, MFA bypass)
3. Auditer les actions effectuées avec privilèges escaladés (audit log SIEM)
4. Bloquer les comptes compromis (forcer reset password + MFA)
5. Patcher la vulnérabilité (CVE tracking si lib tierce)
6. Réviser les rôles RBAC/ABAC : principe du moindre privilège
7. Renforcer l'authentification (MFA obligatoire, WebAuthn pour admins)
8. Tester avec OWASP ZAP / Burp Suite avant remise en prod
9. Communiquer aux utilisateurs si nécessaire (changement de mot de passe)
```

### Template RCA (Root Cause Analysis) — méthode 5 Whys

```
INCIDENT : [titre court]
DATE     : [début → fin] · DURÉE : [HH:MM]
SÉVÉRITÉ : [P0/P1/P2/P3]

5 WHYS (cause racine) :
  Q1 : Pourquoi l'incident s'est-il produit ?
    R : [symptôme immédiat]
  Q2 : Pourquoi [R1] ?
    R : [cause technique]
  Q3 : Pourquoi [R2] ?
    R : [défaillance de processus]
  Q4 : Pourquoi [R3] ?
    R : [défaillance organisationnelle]
  Q5 : Pourquoi [R4] ?
    R : [cause racine systémique]

CAUSE RACINE FINALE : [synthèse en 1 phrase]

FACTEURS CONTRIBUTIFS :
  - [F1 : ex. absence de tests de régression sur prompts]
  - [F2 : ex. monitoring manquant sur métrique X]

CORRECTIFS (par horizon) :
  Immédiat (J+1)  : [hotfix déployé]
  Court terme (J+7) : [tests + monitoring]
  Systémique (J+30) : [revue process / formation / outillage]
```

### Tableau de suivi des incidents (template)

```
| ID         | Date début       | Sévérité | Type              | Système       | Statut       | Owner       | SLA résolution | Données exposées | RCA |
|------------|------------------|----------|-------------------|---------------|--------------|-------------|----------------|------------------|-----|
| INC-2026-01| 2026-05-15 14:32 | P0       | Prompt Injection  | chatbot-prod  | Résolu       | sec@corp    | 2h / cible 4h  | Non              | ✓   |
| INC-2026-02| 2026-05-18 09:10 | P1       | Token Burn        | agent-rag     | Post-mortem  | sre@corp    | 6h / cible 8h  | Non              | ⏳  |
| INC-2026-03| 2026-05-24 23:47 | P0       | Data Exfiltration | api-public    | Containment  | ciso@corp   | en cours       | PII (47 users)   | -   |
```

SLA recommandés : P0 ≤ 4h, P1 ≤ 8h, P2 ≤ 24h, P3 ≤ 72h.

### Notification RGPD (72h)
```
Si violation de données personnelles (Art. 33 RGPD) :

Notification CNIL sous 72h :
  → Nature de la violation
  → Catégories et nombre de personnes concernées
  → Conséquences probables
  → Mesures prises ou envisagées

Si risque élevé pour les personnes (Art. 34) :
  → Notification directe aux personnes concernées
  → Sans délai (pas de délai de 72h)
```

## Livrables
- Plan de réponse aux incidents IA (IRP)
- Runbooks par type d'incident (6 types minimum)
- Tableau de suivi des incidents (statut, SLA)
- Rapport post-incident (RCA + leçons apprises)
- Exercice de simulation annuel (tabletop exercise)

## Format de sortie
Précise : incident détecté · systèmes impactés · données exposées (type, volume) · phase actuelle (confinement/éradication/recovery) · obligations réglementaires déclenchées
