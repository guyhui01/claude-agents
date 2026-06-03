# WF-003 — Lancement Application IA

> Idée validée → architecture → code → déploiement → audit sécurité  
> Certifications mobilisées : Anthropic Claude Code in Action · TOGAF 10 · AWS SA · CKA · CISSP · CFA

---

## Carte d'identité

```yaml
id: "WF-003"
nom: "Lancement Application IA"
domaine: "Dev & Technique"
declencheur: "Business case validé, go-ahead pour développement d'une app IA"
resultat_final: "Application IA déployée, pipeline CI/CD opérationnel, audit sécurité passé"
duree_estimee: "90-180 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Workflow le plus dense du catalogue : 6 agents couvrant business case, architecture, code, CI/CD et audit sécurité sur 90-180 min. Requiert un raisonnement architectural profond et une cohérence technique bout en bout. Opus 4.8 obligatoire."
modele_alternatif: "claude-sonnet-4-6"  # uniquement pour des apps très simples sans RAG ni agents (CRUD basique)
agents_core:
  - FINANCIAL-ANALYST    # business case et ROI avant développement
  - PROMPT-ENGINEER      # conception des prompts LLM de l'application
  - AI-ARCHITECT         # architecture système IA (RAG, agents, MCP)
  - DEV-PYTHON-IA        # développement backend / ML (ou DEV-TYPESCRIPT-IA)
  - QA-AGILE             # tests fonctionnels & BDD avant déploiement
  - DEVOPS-CLOUD         # pipeline CI/CD, infrastructure cloud
  - SECURITE-IA          # audit sécurité, OWASP LLM Top 10
agents_optionnels:
  - DEV-TYPESCRIPT-IA    # si frontend React / Next.js ou API TypeScript
  - MLOPS-ENGINEER       # si pipeline ML avec monitoring de modèle
  - JURIDIQUE-IA         # si données personnelles ou usage IA à risque
  - DATA-ENGINEER        # si ingestion données volumineuses requise
  - PO-SCRUM             # si pilotage backlog application en cours de dev
statut: "disponible"
version: "1.2"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 0 | FINANCIAL-ANALYST | Validation business case et ROI avant dev | Go/No-Go financier |
| 1 | PROMPT-ENGINEER | Conception system prompts et chaînes LLM | Prompts validés, stratégie tokens |
| 2 | AI-ARCHITECT | Architecture système IA, choix stack | ADR, diagramme architecture |
| 3 | DEV-PYTHON-IA | Développement backend, intégrations API | Code source, tests unitaires |
| 4 | QA-AGILE | Tests fonctionnels BDD + scénarios évaluation LLM | Plan de tests + scénarios Gherkin + evals LLM |
| 5 | DEVOPS-CLOUD | Pipeline CI/CD, infra cloud, containers | Déploiement, pipeline GitHub Actions |
| 6 | SECURITE-IA | Audit OWASP LLM, pen test, rapport sécurité | Rapport sécurité, remédiation |
| opt | DEV-TYPESCRIPT-IA | Frontend Next.js / API TypeScript | UI déployée sur Vercel |
| opt | MLOPS-ENGINEER | Monitoring modèle, MLflow, drift detection | Observabilité ML |

---

## Paramètres contextuels

```
CONTEXTE TECHNIQUE (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Type d'app IA      : [Chatbot RAG / Agent autonome / App génération / Classification]
Cloud provider     : [AWS / GCP / Azure / On-premise / Vercel]
LLM cible          : [Claude Sonnet 4.6 / Claude Opus 4.8 / Mistral Large 2 / Llama 3.1 local / Modèle on-premise]
Stack tech         : [Python FastAPI / Next.js / LangChain / n8n / autre]
Base de données    : [PostgreSQL / MongoDB / Pinecone / Qdrant / autre]
Contraintes RGPD   : [Données personnelles : OUI/NON — Localisation données : EU/US]
Budget mensuel API : [ex. 200€/mois LLM]
SLA cible          : [ex. 99.9% / < 2s latence]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Brief technique + business case préliminaire)
        │
        ▼
[STEP-00 — FINANCIAL-ANALYST]
  Validation business case,
  TCO, ROI, go/no-go financier
        │
        ▼
<GATEWAY — Go financier validé ?>
  ├── NON ──▶ (FIN — Projet non lancé, recommandations alternatives)
  └── OUI ──▶
        │
        ▼
[STEP-01 — PROMPT-ENGINEER]
  Conception system prompts,
  stratégie few-shot / RAG,
  test prompts baseline
        │
        ▼
[STEP-02 — AI-ARCHITECT]
  Architecture système IA,
  choix stack et modèle LLM,
  ADR et diagramme
        │
        ▼
═══════════════════════════
  FORK PARALLÈLE
═══════════════════════════
  ├── [STEP-03A — DEV-PYTHON-IA]
  │    Backend, API, intégrations
  │
  └── [STEP-03B — DEV-TYPESCRIPT-IA] (optionnel)
       Frontend Next.js, UI
═══════════════════════════
  JOIN
═══════════════════════════
        │
        ▼
[STEP-04 — QA-AGILE]
  Plan de tests fonctionnels,
  scénarios Gherkin BDD,
  evals LLM (golden dataset)
        │
        ▼
<GATEWAY — Tests fonctionnels OK ?>
  ├── NON ──▶ (Correction bugs → retour STEP-03)
  └── OUI ──▶
        │
        ▼
[STEP-05 — DEVOPS-CLOUD]
  Pipeline CI/CD,
  containerisation,
  déploiement cloud
        │
        ▼
[STEP-06 — SECURITE-IA]
  Audit OWASP LLM Top 10,
  pen test, rapport sécurité
        │
        ▼
<GATEWAY — Audit sécurité passé ?>
  ├── NON ──▶ (Remédiation → retour STEP-03, STEP-04 ou STEP-05)
  └── OUI ──▶
        │
        ▼
(FIN — App IA déployée, sécurisée, documentée)
```

---

## Étapes détaillées

### STEP-00 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-00"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Validation du business case avant développement"
  input:
    - "Brief projet : objectif, périmètre, cible utilisateur"
    - "Estimation coûts développement (jours / ressources)"
    - "Coûts opérationnels estimés (API LLM, cloud, maintenance)"
    - "Gains attendus : productivité, CA, réduction coûts"
  output_attendu:
    - "Business case 1-page : coûts / bénéfices / ROI / payback"
    - "TCO 3 ans (infra + API + ressources humaines)"
    - "Analyse de sensibilité (scénarios optimiste / réaliste / pessimiste)"
    - "Décision Go / No-Go avec justification"
  condition_passage: "Go validé avant lancement du développement"
  si_echec: "Présenter alternatives ou scope réduit (MVP)"
  duree_estimee: "15 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-01 — PROMPT-ENGINEER

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-PROMPT-ENGINEER"
  role: "Conception des prompts LLM de l'application"
  input:
    - "Cas d'usage principaux de l'app"
    - "LLM cible (Claude Sonnet 4.6 / Opus 4.8 / Mistral Large 2 / modèle local)"
    - "Contraintes : ton, longueur réponse, langue, sécurité"
    - "Architecture envisagée (RAG / agents / chaîne simple)"
  output_attendu:
    - "System prompt principal (production-ready)"
    - "Stratégie few-shot ou CoT si applicable"
    - "Prompts RAG (retrieval + grounding)"
    - "Estimation coût tokens / requête + optimisation cache"
    - "Baseline de test (5 cas nominaux + 3 cas limites)"
  duree_estimee: "15-20 min"
  execution: "séquentielle après STEP-00"
```

### STEP-02 — AI-ARCHITECT

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-AI-ARCHITECT"
  role: "Architecture système IA et choix de stack"
  input:
    - "Prompts et stratégie LLM (STEP-01)"
    - "Contraintes cloud, RGPD, budget infra"
    - "SLA, volumes, contraintes de latence"
    - "Systèmes existants à intégrer"
  output_attendu:
    - "Diagramme d'architecture (C4 Level 2)"
    - "ADR (Architecture Decision Records) principaux"
    - "Choix stack : LLM / Vector DB / API / Frontend"
    - "Plan d'intégration avec SI existants"
    - "Checklist de risques architecturaux"
  condition_passage: "Architecture validée avant développement"
  duree_estimee: "20 min"
  execution: "séquentielle après STEP-01"
```

### STEP-03 — DEV-PYTHON-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-DEV-PYTHON-IA"
  role: "Développement backend et intégrations API"
  input:
    - "Architecture validée (STEP-02)"
    - "Prompts production (STEP-01)"
    - "Spécifications API (endpoints, auth, rate limits)"
  output_attendu:
    - "Code Python structuré (FastAPI / LangChain / SDK Anthropic)"
    - "Tests unitaires (coverage > 80%)"
    - "README technique d'installation"
    - "Variables d'environnement documentées (.env.example)"
  duree_estimee: "30-60 min"
  execution: "parallèle possible avec DEV-TYPESCRIPT-IA"
```

### STEP-04 — QA-AGILE

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-QA-AGILE"
  role: "Tests fonctionnels & evals LLM avant déploiement"
  input:
    - "Code source développé (STEP-03)"
    - "Cas d'usage principaux (STEP-01)"
    - "System prompts production (STEP-01)"
  output_attendu:
    - "Scénarios Gherkin BDD pour cas nominaux + limites + erreurs"
    - "Plan de tests fonctionnels (manuel + automatisé)"
    - "Evals LLM : golden dataset 20-50 cas + métriques (faithfulness, relevancy)"
    - "Tests d'acceptation des prompts (réussite ≥ 90% sur baseline)"
    - "Rapport qualité fonctionnelle"
  condition_passage: "Tests passants ≥ 90% + 0 bug Critical sur cas nominaux"
  si_echec: "Retour STEP-03 (correction code) ou STEP-01 (ajustement prompts)"
  duree_estimee: "15-25 min"
  execution: "séquentielle après STEP-03"
```

### STEP-05 — DEVOPS-CLOUD

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-DEVOPS-CLOUD"
  role: "Pipeline CI/CD et déploiement cloud"
  input:
    - "Code source développé et testé (STEP-03 + STEP-04)"
    - "Architecture cible (STEP-02)"
    - "SLA et contraintes de déploiement"
  output_attendu:
    - "Dockerfile et docker-compose"
    - "Pipeline GitHub Actions (build + test + deploy)"
    - "Infrastructure as Code (Terraform ou CDK)"
    - "Monitoring et alertes (CloudWatch / Datadog)"
    - "Runbook déploiement et rollback"
  duree_estimee: "20-30 min"
  execution: "séquentielle après STEP-04"
```

### STEP-06 — SECURITE-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-SECURITE-IA"
  role: "Audit sécurité OWASP LLM et rapport"
  input:
    - "Code source et architecture déployée"
    - "Prompts système (pour audit injection)"
    - "Flux de données et droits d'accès"
  output_attendu:
    - "Rapport audit OWASP LLM Top 10 (LLM01-LLM10)"
    - "Vulnérabilités identifiées (Critical / High / Medium / Low)"
    - "Plan de remédiation priorisé"
    - "Checklist sécurité go-live"
  condition_passage: "0 vulnérabilité Critical, < 2 High non résiduelles"
  si_echec: "Bloquer le déploiement production, corriger et re-tester"
  duree_estimee: "15 min"
  execution: "séquentielle — clôture avant mise en production"
```

---

## Livrables finaux

```
CHECKLIST WF-003
──────────────────────────────────────────────────────
□ Business case validé : ROI / TCO / Go-No-Go
□ System prompt production-ready + baseline de test
□ Architecture C4 Level 2 + ADR
□ Code source documenté (Python et/ou TypeScript)
□ Tests unitaires (coverage > 80%)
□ Scénarios Gherkin BDD + plan de tests fonctionnels
□ Evals LLM : golden dataset + métriques (faithfulness, relevancy)
□ Dockerfile + docker-compose
□ Pipeline CI/CD GitHub Actions opérationnel
□ Infrastructure as Code déployée
□ Rapport audit sécurité OWASP LLM
□ Runbook déploiement et rollback
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-003 depuis workflows/WF-003-lancement-app-ia.md.

Contexte technique :
- Type d'app IA : [à renseigner]
- Cloud provider : [à renseigner]
- LLM cible : [à renseigner]
- Contraintes RGPD : [à renseigner]

Lance STEP-00 avec AGENT-FINANCIAL-ANALYST pour valider le business case.
```
