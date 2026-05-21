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

### Éradication et Remédiation
```
Prompt Injection :
  1. Analyser le vecteur exact d'injection
  2. Patcher le input validation
  3. Mettre à jour le system prompt si compromis
  4. Auditer les actions effectuées par l'agent durant l'attaque

Data Poisoning :
  1. Identifier les documents corrompus (logs d'ingestion)
  2. Purger le vector store + re-ingérer les sources saines
  3. Ré-évaluer le modèle fine-tuné si applicable
  4. Renforcer la validation d'ingestion

Model Theft :
  1. Invalider toutes les clés API publiques
  2. Implémenter watermarking sur les outputs
  3. Renforcer le rate limiting
  4. Déposer plainte si attaque confirmée
```

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
