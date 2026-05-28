# Skill — Évaluation LLM & Agents
> Certifications : Google Professional ML Engineer · DeepLearning.AI

## Objectif
Mesurer objectivement la qualité d'un LLM, d'un pipeline RAG ou d'un système agentique.

## Dimensions d'évaluation

### 1. Qualité des réponses LLM
| Métrique | Description | Outil |
|---|---|---|
| **Faithfulness** | La réponse est-elle fidèle aux sources ? | RAGAs, RAGAS |
| **Answer Relevance** | La réponse répond-elle à la question ? | RAGAs |
| **Hallucination Rate** | % de faits inventés | DeepEval, TruLens |
| **Coherence** | Logique interne de la réponse | LangSmith |
| **Toxicity** | Contenu nuisible, biais | Perspective API |

### 2. Évaluation RAG spécifique (RAGAs framework)
- **Context Precision** : le contexte récupéré est-il pertinent ?
- **Context Recall** : toute l'info nécessaire est-elle récupérée ?
- **Answer Faithfulness** : la réponse se base-t-elle sur le contexte ?
- **Answer Relevance** : la réponse est-elle utile à la question ?

### 3. Évaluation agents
- **Task Completion Rate** : % de tâches complétées avec succès
- **Steps Efficiency** : nombre d'étapes pour compléter la tâche
- **Tool Usage Accuracy** : bons tools appelés avec bons paramètres
- **Human Escalation Rate** : % de cas nécessitant intervention humaine

## Benchmarks publics de référence (2025-2026)

| Benchmark | Ce qu'il mesure | État 2026 |
|---|---|---|
| **GPQA Diamond** | Raisonnement PhD-level (bio/physique/chimie) | Actif — référence raisonnement |
| **IFEval** | Suivi d'instructions complexes | Actif — capacité contrôle |
| **MMLU-Pro** | MMLU + raisonnement (remplace MMLU classique) | Actif |
| **HumanEval+** / **LiveCodeBench** | Génération de code (saturé sur HumanEval pur) | Actif — code |
| **TruthfulQA** | Résistance aux fausses idées populaires | Actif |
| **SWE-bench Verified** | Capacité à résoudre des issues GitHub réelles | Référence agents code |
| **τ-bench** (Tau-Bench) | Tâches agentiques avec tools (airline, retail) | Référence agents 2025+ |
| **LMArena Elo** | Préférences humaines comparatives | Référence vibes |
| **MMLU** / **HumanEval** | ⚠ Saturés (2023) — éviter comme métrique principale | Obsolètes |

## Outils d'évaluation (2026)

| Outil | Usage | Note |
|---|---|---|
| **RAGAs** | Pipelines RAG (faithfulness, context_recall) | Standard de fait |
| **DeepEval** | Tests LLM (pytest-like, ~40 métriques) | Pour CI/CD |
| **Braintrust** | Eval + logging + dataset management | SaaS, recommandé prod |
| **LangSmith** | Tracing + évaluation LangChain | Couplé LangChain |
| **Promptfoo** | Comparaison de prompts (matrix tests) | CLI léger |
| **Inspect AI** (UK AISI) | Évaluations sécurité / red-team | Open source |
| **OpenAI Evals** | Framework de tests OpenAI | Si stack OpenAI |

## Golden Dataset — Template

Un golden dataset est la **vérité terrain** contre laquelle tu mesures le système. Curé manuellement, versionné en git.

```yaml
# golden_dataset.yaml — versionné en git, revu par un expert métier
version: "2026.05"
domain: "support_client_assurance"
samples:
  - id: "GS-001"
    category: "sinistre_simple"
    difficulty: "easy"
    question: "Comment déclarer un dégât des eaux ?"
    expected_answer_contains:        # mots-clés obligatoires
      - "formulaire en ligne"
      - "constat amiable"
      - "5 jours ouvrés"
    must_cite_source: "art-L113-2"   # référence légale attendue
    must_not_contain:                # garde-fous (hallucination)
      - "remboursement immédiat"
      - "100% pris en charge"
  - id: "GS-002"
    category: "edge_case"
    difficulty: "hard"
    question: "Mon assurance couvre-t-elle un sinistre à l'étranger pendant un télétravail ?"
    expected_answer_contains:
      - "extension territoriale"
      - "vérification contrat"
    must_escalate_to_human: true     # le système doit déclencher l'escalade
```

**Taille recommandée** : 50 cas minimum (POC), 200-500 (production), avec 20-30% d'edge cases.

## Format de rapport mensuel

```
RAPPORT D'ÉVAL — [Système] — [Mois]
====================================
Modèle      : claude-sonnet-4-6
Dataset     : golden_v2026.05 (N=247)

SCORES :
  Faithfulness         : 0.91 (cible ≥ 0.90)  ✓
  Context Recall       : 0.84 (cible ≥ 0.80)  ✓
  Answer Relevancy     : 0.88 (cible ≥ 0.85)  ✓
  Hallucination Rate   : 3.2% (cible ≤ 5%)    ✓
  Escalation Precision : 0.76 (cible ≥ 0.80)  ✗ → action plan

RÉGRESSIONS vs MOIS-1 :
  - 4 cas dégradés (cf. cases_regressed.csv)

ACTIONS :
  1. Améliorer le prompt d'escalade (voir PR #142)
  2. Enrichir le golden set avec 15 nouveaux edge cases télétravail
```

## Livrables
- Rapport d'évaluation avec scores par dimension
- Golden dataset de référence (50-200 Q/A)
- Tableau de bord métriques en continu
- Recommandations d'amélioration (prompt, RAG, modèle)

## Format de sortie
Précise : type de système (LLM seul, RAG, agent) · cas d'usage · métriques prioritaires · fréquence d'évaluation
