# Skill — Incident Response pour Systèmes LLM en Production

> Certifications : CKA · AWS DevOps Engineer Professional (DOP-C02) · ITIL 4 Foundation · Google Professional DevOps Engineer · Anthropic Claude Code in Action (2026)

## Objectif

Gérer les incidents spécifiques aux systèmes LLM en production : détecter, qualifier, contenir, résoudre et documenter les incidents (dégradation qualité, surcoûts, indisponibilité, comportements inattendus, failles de sécurité prompt).

## Taxonomie des incidents LLM

```
SÉVÉRITÉ   TYPE                           EXEMPLES
─────────  ─────────────────────────────  ──────────────────────────────────────────
P0 - Crit  Sécurité / Data leakage        Prompt injection → fuite données client
P0 - Crit  Indisponibilité totale         API LLM down, fallback absent
P1 - Haut  Dégradation qualité sévère     Hallucinations > 20%, outputs toxiques
P1 - Haut  Surcoût majeur (> 5×budget)    Token runaway, boucle infinie agent
P2 - Moyen Dégradation latence            P95 > 10s, timeouts en cascade
P2 - Moyen Drift comportemental           Ton ou style hors charte sans update
P3 - Bas   Anomalie monitoring            Métriques absentes, dashboard cassé
```

## Runbook d'incident LLM — Procédure standard

### PHASE 1 — DÉTECTION & QUALIFICATION (< 5 min)

```yaml
detection:
  sources:
    - Alerting Grafana / Prometheus (latence, erreurs, coûts)
    - LLM-as-judge score < seuil (hallucination_rate, groundedness)
    - Ticket utilisateur / signalement équipe
    - Monitoring sécurité (prompt injection détectée)

  qualification:
    questions:
      - "Quel système est impacté ? (RAG / agent / chatbot)"
      - "Depuis quand ? Changement déployé récemment ?"
      - "Quelle est la population impactée ? (tous / segment / 1 user)"
      - "Y a-t-il un risque sécurité / data leakage ?"
    
    decision_tree:
      securite_ou_data_leakage: → "STOP : couper le système immédiatement, P0"
      qualite_degradee_severerement: → "P1 : revert ou rollback prompt, escalader"
      latence_elevee: → "P2 : vérifier quota API, activer rate limiting"
      cout_anormal: → "P2 : couper le modèle cher, basculer sur modèle alternatif"
```

### PHASE 2 — CONTAINMENT (< 15 min)

```bash
# 1. Feature flag — désactiver le composant LLM défaillant
curl -X PATCH /api/feature-flags/llm-agent -d '{"enabled": false}'

# 2. Rollback prompt vers la dernière version stable (Git)
git log --oneline prompts/ | head -5
git checkout <commit-stable> -- prompts/system-prompt-agent.txt

# 3. Basculer sur modèle de fallback (ex: Haiku si Opus défaillant)
# Dans le code : MODEL = os.getenv("LLM_FALLBACK_MODEL", "claude-haiku-4-5")

# 4. Rate limiting d'urgence (Nginx / API Gateway)
kubectl patch configmap api-gateway-config -p '{"data": {"rate_limit": "10/min"}}'

# 5. Couper l'accès si P0 sécurité
kubectl scale deployment llm-service --replicas=0
```

### PHASE 3 — INVESTIGATION ROOT CAUSE (15-60 min)

```
CHECKLIST INVESTIGATION
──────────────────────────────────────────────────────────────
□ Retracer le dernier déploiement (git log, ArgoCD history)
□ Comparer les métriques avant/après incident (Grafana diff)
□ Rejouer les requêtes incriminées en isolation (sandbox)
□ Vérifier les logs LangSmith / Helicone (traces complètes)
□ Analyser le prompt en vigueur (injection ? drift ?)
□ Vérifier quota API / rate limit provider (Anthropic Console)
□ Vérifier le corpus RAG (données corrompues ou obsolètes ?)
□ Analyser le coût par appel (token explosion ?)
□ Rechercher les erreurs 429 / 503 dans les logs
□ Vérifier les dépendances (vectorDB, embedding model, tools)
```

### Outils d'investigation LLM (concrets)

```yaml
investigation_toolbox:
  evaluation_qualite:
    - tool: RAGAs eval suite
      usage: "rejouer le golden dataset, vérifier faithfulness/groundedness vs baseline"
      cmd: "ragas evaluate --dataset golden.jsonl --baseline v2026-04"
    - tool: DeepEval
      usage: "tests pytest-like sur sample représentatif de la prod"
      cmd: "deepeval test run incident_replay.py"

  tracing_et_replay:
    - tool: LangSmith
      usage: "traces de requêtes problématiques avec inputs/outputs/tokens/coûts"
      url_pattern: "https://smith.langchain.com/projects/{project}/traces?filter=error"
    - tool: Helicone
      usage: "dashboard historique des coûts par endpoint, replay de requêtes"
      url: "https://www.helicone.ai/dashboard"
    - tool: Langfuse (open source self-hosted)
      usage: "tracing + eval + prompt management, alternative à LangSmith"

  prompt_versioning:
    - tool: Git history sur dossier prompts/
      cmd: "git log --oneline -p prompts/system-prompt-agent.txt | head -50"
    - tool: Diff entre version actuelle et version stable
      cmd: "git diff <last-stable-tag> HEAD -- prompts/"

  analyse_token:
    - tool: Anthropic Console — Usage tab
      url: "https://console.anthropic.com/settings/usage"
      usage: "détail des appels par jour, identification des spikes"
    - tool: Token burn analysis (script custom)
      cmd: "python scripts/analyze_token_spike.py --from '2h ago' --threshold 50000"

  rag_corpus:
    - tool: Qdrant snapshot diff
      usage: "vérifier si le corpus vectoriel a changé (ingestion défaillante ?)"
    - tool: Re-indexation sandbox
      usage: "réindexer un échantillon sur un cluster de test pour comparaison"
```

### PHASE 4 — RÉSOLUTION & RESTAURATION

```yaml
actions_type:
  prompt_regression:
    - Corriger le system prompt incriminé
    - Rejouer eval set complet (> seuil requis)
    - Déployer via CI/CD avec gate d'evals
  
  surcoût_token:
    - Identifier les requêtes longues (token > 10k)
    - Ajouter max_tokens stricte dans les appels API
    - Activer le prompt caching (cache_control: ephemeral)
    - Implémenter circuit breaker si boucle agent
  
  data_leakage:
    - Couper immédiatement le système
    - Notifier DPO + RSSI (obligation RGPD 72h)
    - Analyser traces pour quantifier l'exposition
    - Corriger le system prompt (guardrails manquants)
    - Red teaming avant remise en prod
  
  api_down:
    - Activer le fallback model configuré
    - Mettre en file d'attente les requêtes (Redis queue)
    - Communiquer aux utilisateurs (status page)
    - Contacter le support provider si SLA breach
```

### PHASE 5 — POST-MORTEM (dans les 48h)

```
TEMPLATE POST-MORTEM LLM
──────────────────────────────────────────────────────────────
Titre         : [P0/P1/P2] — Description courte — Date
Durée impact  : [HH:MM] — [datetime début] → [datetime fin]
Systèmes      : [Noms des composants impactés]

TIMELINE
  HH:MM — Détection : [comment l'incident a été détecté]
  HH:MM — Qualification : [décision de sévérité]
  HH:MM — Containment : [action de mitigation]
  HH:MM — Root cause identifiée
  HH:MM — Résolution déployée
  HH:MM — Vérification restauration complète

ROOT CAUSE
  [Description technique précise de la cause racine]

CONTRIBUTING FACTORS
  - [Facteur 1 : ex. absence de gate d'evals en CI]
  - [Facteur 2 : ex. pas de circuit breaker sur l'agent]

ACTION ITEMS
  | Action                          | Owner  | Deadline |
  | Ajouter eval gate en CI/CD      | DevOps | J+7      |
  | Implémenter circuit breaker     | Dev    | J+14     |
  | Documenter runbook dans wiki    | DevOps | J+3      |
```

## Livrables

- Runbook d'incident LLM (format Confluence / wiki)
- Matrice d'escalade (P0→P3 × responsables × délais)
- Template post-mortem LLM (importable Confluence)
- Checklist de remise en production post-incident
- Dashboard monitoring incidents (Grafana + alertes)

## Format de sortie

Précise : **type d'incident** (sécurité / qualité / coût / dispo), **système impacté** (RAG / agent / chatbot), **provider LLM** (Anthropic / OpenAI / autre), **stack monitoring actuelle**, **contraintes RGPD** (données sensibles concernées ?).
