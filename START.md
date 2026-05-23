# Démarrage rapide — Claude Agents Library

> 32 agents IA spécialisés · 31 dossiers de skills · 10 workflows · 3 serveurs MCP
> Auteur : Guy HUIBONHOA · [github.com/guyhui01](https://github.com/guyhui01)

---

## 🎯 Choisir son point d'entrée

| Tu veux… | Commande |
|---|---|
| **Lancer un workflow complet** (cadrage, delivery, lancement app, conseil, veille) | → Orchestrateur + Workflow |
| **Travailler sur une tâche précise** (US, wireframe, audit, etc.) | → Agent unique |
| **Chaîner manuellement plusieurs agents** | → Orchestrateur seul |

---

## 1. Orchestrateur + Workflow (recommandé)

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte ce rôle.
Charge ensuite workflows/WF-001-cadrage-produit-ia.md et lance le workflow.
```

### Workflows disponibles

| ID | Workflow | Quand l'utiliser | Durée |
|---|---|---|---|
| [WF-001](workflows/WF-001-cadrage-produit-ia.md) | Cadrage Produit IA | Brief client → backlog priorisé | 45-90 min |
| [WF-002](workflows/WF-002-delivery-safe.md) | Delivery Agile SAFe | PI Planning à livraison | 60-120 min |
| [WF-003](workflows/WF-003-lancement-app-ia.md) | Lancement Application IA | Conception → déploiement | 90-180 min |
| [WF-004](workflows/WF-004-mission-conseil-ia.md) | Mission Conseil IA | Audit + roadmap client | 60-90 min |
| [WF-005](workflows/WF-005-veille-growth.md) | Veille & Growth | Veille marché + plan d'action | 30-60 min |
| [WF-006](workflows/WF-006-avant-vente-proposition-commerciale.md) | Avant-vente / Proposition commerciale | RFP → proposition technico-commerciale | 75-120 min |
| [WF-007](workflows/WF-007-onboarding-mission-j1.md) | Onboarding Mission J1 | Prise de poste → kit d'intégration mission | 45-75 min |
| [WF-008](workflows/WF-008-audit-conformite-ia-act-rgpd.md) | Audit conformité IA Act / RGPD | Audit système IA + plan remédiation | 90-150 min |
| [WF-009](workflows/WF-009-recrutement-it-ia.md) | Recrutement IT / IA | Brief poste → shortlist profilée | 60-90 min |
| [WF-010](workflows/WF-010-post-mortem-projet.md) | Post-mortem Projet | Clôture → rapport REX + actions | 45-75 min |

Index complet : [workflows/README.md](workflows/README.md)

---

## 2. Agent unique

```
Lis le fichier AGENT-<NOM>.md et adopte ce rôle.
Confirme que tu es prêt en listant les skills disponibles.
```

### Dev & Technique (11)
- `AGENT-AI-ARCHITECT.md` — Architecture IA, RAG, multi-agents, MCP/A2A
- `AGENT-SOLUTIONS-ARCHITECT.md` — Architecture d'entreprise, TOGAF, urbanisme SI, roadmap transformation
- `AGENT-DEV-PYTHON-IA.md` — Python IA, LangChain, RAG, agents
- `AGENT-DEV-TYPESCRIPT-IA.md` — TS IA, Next.js, Vercel AI SDK, MCP
- `AGENT-DEV-DRUPAL-PHP.md` — Drupal 10, Commerce 2.x, modules custom
- `AGENT-MLOPS-ENGINEER.md` — Docker, K8s, MLflow, model serving
- `AGENT-DATA-ENGINEER.md` — Pipelines ETL, Spark, dbt, Airflow
- `AGENT-DATA-SCIENTIST.md` — ML, stats, modélisation, Python/SQL
- `AGENT-DEVOPS-CLOUD.md` — CI/CD, Kubernetes, Terraform, AWS/GCP/Azure
- `AGENT-SECURITE-IA.md` — OWASP LLM, red teaming, CISSP
- `AGENT-PROMPT-ENGINEER.md` — System prompts, CoT, RAG, evals

### Agile & Produit (9)
- `AGENT-PO-SCRUM.md` — User Stories, backlog, cérémonies Scrum
- `AGENT-PO-SAFE.md` — PI Planning, WSJF, ART, portfolio epics
- `AGENT-PRODUCT-MANAGER-SAFE.md` — Vision Programme, roadmap ART, go-to-market
- `AGENT-RELEASE-TRAIN-ENGINEER.md` — PI Planning, coordination ART, I&A
- `AGENT-SCRUM-MASTER.md` — Facilitation, coaching équipe, métriques
- `AGENT-QA-AGILE.md` — BDD/Gherkin, ATDD, tests exploratoires
- `AGENT-QA-CYCLEV.md` — Plans de tests, recette, UAT, performance
- `AGENT-UX-DESIGNER.md` — Figma, wireframing, design system
- `AGENT-BUSINESS-ANALYST.md` — Élicitation, BPMN, spécifications

### Management & Conseil (10)
- `AGENT-CHEF-PROJET-IA.md` — Cadrage, planning, EVM, COPIL
- `AGENT-CONSULTANT-IA.md` — Diagnostic maturité, feuille de route, ROI
- `AGENT-CDO-DIRECTEUR-IA.md` — Stratégie data, gouvernance, OKR
- `AGENT-CHANGE-MANAGER.md` — ADKAR, plan adoption, résistances
- `AGENT-FINANCIAL-ANALYST.md` — Business case IA, ROI, TCO, EVM
- `AGENT-FORMATEUR-IA.md` — Conception parcours, e-learning
- `AGENT-GROWTH-IA.md` — Acquisition, automation, analytics
- `AGENT-REDACTEUR-IA.md` — Copywriting, SEO, prompting éditorial
- `AGENT-JURIDIQUE-IA.md` — RGPD, AI Act, contrats IA
- `AGENT-VEILLE-STRATEGIQUE.md` — Veille IA, signaux faibles, benchmark

### RH & Talent (1)
- `AGENT-RH-IA.md` — Sourcing IT/IA, GEPP, anti-fraude, ATS, people analytics

### Orchestration (1)
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Conception et pilotage de workflows multi-agents

---

## 3. Outils complémentaires

### Serveurs MCP (Jira / Confluence / Journal de missions)

```powershell
# Installation
cd "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers"
# Suivre mcp-servers/README.md
```

Une fois configurés, tu peux pousser tes livrables directement depuis Claude Code :
- WF-001 → Jira (`jira_bulk_create_backlog`)
- WF-004 → Confluence (`confluence_publish_report`)
- Toute mission → journal (`log_workflow_run`)

### Skills

Chaque agent référence ses skills dans son fichier (table "Skills disponibles"). Les skills sont des fiches markdown actionnables stockées dans `skills/<domaine>/<nom>.md`.

---

## 4. Mémoire & contexte

- **Profil utilisateur** : `~/.claude/CLAUDE.md` (instructions globales)
- **Mémoire auto** : `~/.claude/projects/.../memory/MEMORY.md` (mise à jour conversationnelle)
- **Contexte projet** : `memory/CLAUDE.md` (préférences, conventions)

---

## 5. Commandes utiles

```
/model              # Changer de modèle (Opus 4.7, Sonnet 4.6, Haiku 4.5)
/clear              # Nettoyer le contexte conversation
/help               # Aide Claude Code
! <commande>        # Exécuter une commande shell directement
```

---

> 💡 **Astuce** : pour les tâches mécaniques (édit, refactor), reste sur Sonnet 4.6.
> Bascule sur Opus 4.7 pour les vrais arbitrages d'architecture, audits et raisonnements complexes.
