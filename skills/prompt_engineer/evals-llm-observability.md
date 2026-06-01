# Skill — Évaluation LLM & Observabilité (Evals + LLM Ops)

> Certifications : Anthropic Claude Code in Action (2026), DeepLearning.AI Evaluating and Debugging Generative AI, AWS Certified AI Practitioner (AIF-C01)

## Objectif

Concevoir et mettre en œuvre un framework d'évaluation (evals) et d'observabilité pour des systèmes LLM en production : définition des métriques, pipeline d'evals automatisé, monitoring des dérives et tableaux de bord LLM Ops.

## Framework d'évaluation LLM (Evals)

### Les 4 niveaux d'évaluation

```
NIVEAU    TYPE                      MÉTHODE                    OUTIL
───────   ──────────────────────   ────────────────────────   ───────────────────────
L1        Fonctionnelle             Test unitaire prompt        Pytest, unittest
L2        Qualité output            LLM-as-judge               Claude, GPT-4o judge
L3        Sécurité / robustesse     Red teaming automatisé     Garak, PyRIT
L4        Business / ROI            A/B test production        Feature flags + metrics
```

### Métriques clés à instrumenter

```yaml
metriques_qualite:
  groundedness: "Réponse fondée sur le contexte fourni (RAG)"
  faithfulness: "Fidélité au corpus de référence"
  answer_relevance: "Pertinence par rapport à la question"
  context_precision: "Signal/bruit du contexte récupéré"
  hallucination_rate: "Taux d'affirmations invérifiables"

metriques_performance:
  latency_p50_p95_p99: "Temps de réponse (ms)"
  tokens_per_second: "Débit de génération"
  cost_per_query: "Coût USD par appel"
  cache_hit_rate: "Taux de cache Anthropic (objectif > 80%)"

metriques_business:
  task_completion_rate: "Taux de réussite tâche utilisateur"
  human_intervention_rate: "Fréquence d'escalade vers humain"
  user_satisfaction_score: "NPS / thumbs up/down"
  fallback_rate: "Taux de réponses génériques / refus"
```

### Pipeline d'evals automatisé

```python
# Structure type d'un pipeline d'evals Claude
eval_pipeline = {
    "dataset": "eval_set.jsonl",          # questions + réponses de référence
    "judge_model": "claude-opus-4-8",     # juge LLM
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

# Prompt LLM-as-judge type
judge_prompt = """
Évalue cette réponse de l'assistant sur une échelle 1-5 :
- Groundedness (fondé sur le contexte) : {score}/5
- Pertinence (répond à la question) : {score}/5
- Hallucination détectée : oui / non

Question : {question}
Contexte fourni : {context}
Réponse à évaluer : {response}
"""
```

## Stack d'observabilité LLM en production

```
COUCHE                OUTIL RECOMMANDÉ           RÔLE
──────────────────   ────────────────────────   ──────────────────────────────────
Tracing              LangSmith / Helicone       Trace complète prompt → response
Métriques            Prometheus + Grafana       Latence, coûts, tokens, erreurs
Logs                 OpenTelemetry → ELK        Logs structurés par appel LLM
Evals continues      Ragas / DeepEval           Scoring automatisé groundedness
Alerting             PagerDuty / Opsgenie       Alerte si drift détecté
Dashboard            Grafana (board LLM Ops)    Vue opérationnelle temps réel
```

### Dashboard LLM Ops — KPIs à afficher

```
┌────────────────────────────────────────────────────────┐
│  LLM OPS DASHBOARD                                     │
├──────────────┬──────────────┬──────────────────────────┤
│ Latence P95  │ Coût/jour    │ Hallucination rate        │
│ 1 240 ms    │ $12.40      │ 2.3%  ✅ (< 5%)           │
├──────────────┼──────────────┼──────────────────────────┤
│ Cache hits   │ Task compl.  │ Groundedness score        │
│ 78% ⚠       │ 91%  ✅     │ 0.87  ✅ (> 0.85)        │
├──────────────┴──────────────┴──────────────────────────┤
│  DRIFT ALERT : answer_relevance ↘ 0.73 (< 0.80)       │
│  → Recheck dataset RAG + re-run evals                  │
└────────────────────────────────────────────────────────┘
```

## Gestion des dérives (Drift)

```
TYPE DE DRIFT      SYMPTÔME                        ACTION
─────────────────  ──────────────────────────────  ──────────────────────────────
Data drift         Nouvelles requêtes hors corpus   Enrichir base RAG / fine-tune
Concept drift      Sens des termes a changé         Mettre à jour system prompt
Model drift        MAJ LLM change les outputs       Rejouer eval set complet
Prompt drift       Régression après modif prompt    Git blame prompt + rollback
Distribution shift Volume ou type d'usagers change  Ré-évaluer par segment
```

## Livrables

- Framework d'evals complet (dataset, métriques, seuils, cadence)
- Pipeline d'evals automatisé (CI/CD gate pré-déploiement)
- Dashboard Grafana LLM Ops (template importable)
- Runbook de gestion des alertes et dérives
- Rapport mensuel qualité LLM (évolution métriques clés)

## Format de sortie

Précise : **type de système LLM** (RAG / agent / chatbot / génération), **LLM utilisé** (Claude / GPT / Gemini), **volume d'appels/jour**, **stack observabilité existante**, **objectifs business** (conformité / qualité / coût / SLA).
