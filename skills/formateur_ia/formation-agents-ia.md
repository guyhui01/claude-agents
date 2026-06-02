# Skill — Formation aux Agents IA et Architectures Agentic

> Certifications : Anthropic Claude Code in Action (2026), CAP IABAC, AWS Certified AI Practitioner (AIF-C01), DeepLearning.AI — AI Agents in LangGraph

## Objectif

Concevoir et animer un module de formation aux agents IA : architectures agentic, patterns multi-agents, protocoles MCP/A2A, orchestration et déploiement — pour des profils techniques (dev, architecte, MLOps) et semi-techniques (PO, tech lead, chef de projet IA).

## Programme modulaire

### Module 1 — Comprendre les agents IA (2h — tous niveaux)

```
SÉQUENCE                                     DURÉE    FORMAT
─────────────────────────────────────────   ──────   ──────────────
Qu'est-ce qu'un agent IA ? (vs LLM simple)  30 min   Mini-conférence + démo
Les 5 patterns agents (ReAct, Tool Use…)    30 min   Slides + exemples concrets
Démo live : agent Claude avec outils        20 min   Démonstration
Atelier : cartographier un use case agent   30 min   TP par groupe
Synthèse + Q&A                              10 min   Plénière
```

### Module 2 — Architectures multi-agents (3h — profils tech/semi-tech)

```
SÉQUENCE                                     DURÉE    FORMAT
─────────────────────────────────────────   ──────   ──────────────
Patterns orchestration (séquentiel, paral.) 30 min   Slides + diagrammes
MCP — Model Context Protocol (concepts)     30 min   Schéma + démo outil MCP
A2A — Agent-to-Agent (protocole Google)     20 min   Présentation + cas
Atelier : concevoir un workflow multi-agent 60 min   TP sur cas métier réel
Critères de choix : LangGraph vs CrewAI     30 min   Comparatif
Retour d'expérience : pièges et bonnes prat 10 min   Discussion guidée
```

### Module 3 — Construire un agent avec Claude (demi-journée — profils tech)

```
SÉQUENCE                                     DURÉE    FORMAT
─────────────────────────────────────────   ──────   ──────────────
API Anthropic : tool use et function calling 30 min   Code + démo
Prompt engineering pour agents (system prompt agent) 30 min   Atelier
Gestion du contexte et mémoire agent        20 min   Explication + code
TP guidé : construire un agent pas à pas    90 min   Hands-on Claude Code
Évaluation et test d'un agent IA            20 min   Métriques + evals
Déploiement et monitoring (concepts)        10 min   Présentation
```

## Contenu pédagogique clé

### Les 5 patterns agents fondamentaux

```
PATTERN          DESCRIPTION                              CAS D'USAGE
──────────────   ──────────────────────────────────────   ──────────────────────
ReAct            Reason + Act en boucle (observation)     Recherche + calcul
Tool Use         Appel d'outils externes (API, DB, code)  Automatisation tâches
Reflexion        Auto-critique et amélioration itérative  Rédaction, code review
Planning         Décomposition tâche en sous-tâches        Projets complexes
Multi-agent      Orchestration de plusieurs agents spé.   Workflows complexes
```

### Comparatif frameworks agents 2026

```
FRAMEWORK      FORCE                    LIMITE               CIBLE
──────────────  ──────────────────────  ───────────────────  ──────────────────
LangGraph       Contrôle fin du flow    Courbe d'apprent.    Tech avancé
CrewAI          API simple, rôles       Moins de contrôle    PO/PM/Dev junior
AutoGen         Microsoft, multi-agent  Dépendance Azure     Contexte MS
Claude SDK      Natif Anthropic, cache  LLM unique           Ecosystème Claude
n8n/Make        Low-code, visuel        Scalabilité limite   Non-tech
```

## Activités pratiques

### Atelier "Concevoir un agent pour mon métier" (60 min)

```
ÉTAPE 1 — Identifier le use case (15 min)
→ Quel processus répétitif et coûteux en attention ?
→ Quelles sont les données d'entrée / les actions possibles ?
→ Quand faut-il un humain dans la boucle ?

ÉTAPE 2 — Architecturer l'agent (20 min)
→ Quels outils cet agent doit-il appeler ? (search, DB, API, code)
→ Quelle est la logique de décision ?
→ Comment gérer les erreurs et les cas limites ?

ÉTAPE 3 — Rédiger le system prompt agent (15 min)
→ Rôle et instructions de l'agent
→ Format des outputs
→ Contraintes et règles de sécurité

ÉTAPE 4 — Présenter et critiquer (10 min)
→ Présentation 2 min par groupe
→ Feedback pair : pertinence, risques, faisabilité
```

## Livrables de formation

- Guide "5 patterns agents IA" (A3 plastifié, pour ateliers)
- Comparatif frameworks agents 2026 (fiche recto-verso)
- Modèle de system prompt agent (template Confluence)
- TP hands-on annotés (avec corrigés) — 3 niveaux de difficulté
- Ressources complémentaires : docs Anthropic, LangGraph, CrewAI

## Format de sortie

Précise : **profil des participants** (dev / PO / architecte / mixte), **durée disponible** (2h / demi-journée / journée), **framework cible** (Claude SDK / LangGraph / CrewAI / no preference), **cas métier disponible** (optionnel pour TP), **niveau IA actuel** (1-5).

## Sources
- **Anthropic** — *Building Effective Agents* (2024) — patterns workflow & agents
- **Anthropic** — *Model Context Protocol (MCP)* (2024) — connexion outils
- **Wei et al.** — *Chain-of-Thought Prompting* (NeurIPS 2022) ; **Yao et al.** — *ReAct* (2023)
- Documentation **LangGraph** (LangChain), **CrewAI**, **AutoGen** (Microsoft)

## Anti-patterns
- Enseigner les frameworks (LangGraph/CrewAI) avant les patterns fondamentaux (ReAct, tool use)
- TP « agent » sans garde-fous (coûts, boucles infinies, observabilité)
- Présenter les patterns (ReAct, CoT) sans les attribuer aux publications
- Multi-agent par défaut alors qu'un prompt unique suffirait (sur-ingénierie)
- Ne pas évaluer ni monitorer l'agent produit en TP

## Voir aussi
- [formation-claude-code.md](formation-claude-code.md) — socle Claude Code / API
- [prompt-engineering-formation.md](prompt-engineering-formation.md) — prompts d'agents
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — cadrer le comportement d'un agent
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — raisonnement structuré
