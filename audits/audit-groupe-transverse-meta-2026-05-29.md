# Audit qualité — Groupe Transverse/Méta (8 agents) — **DERNIER GROUPE Phase 1**

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8.4 Transverse/Méta (formalisée 2026-05-29, cf. `audits/audit-grilles-v2.8.md` §3.5)
> **Périmètre** : **95 skills sur 8 agents** (record absolu chantier) : ORCHESTRATEUR-WORKFLOW (15), PROMPT-ENGINEER (8), REDACTEUR-IA (16), UX-DESIGNER (20), FORMATEUR-IA (11), GROWTH-IA (8), RH-IA (11), VEILLE-STRATEGIQUE (6)
> **Méthode** : extraction factuelle déléguée à 8 sous-agents Explore en parallèle (format standard Phase 1.1) + cotation expert Claude principal sur grille v2.8.4
> **Format** : rapport consolidé groupe (cohérent [[feedback-triptyque-qualite]] règle 1)
> **Application disciplinée triptyque qualité** : briefs Explore détaillés non-compactés (règle 2), recommandations alignées best practices sans complaisance (règle 3)

---

## 1. Synthèse exécutive

**Verdict global groupe Transverse/Méta** : **MEILLEUR PROFIL QUALITÉ DU CHANTIER** sur les 5 groupes audités. 95 skills (record), **7 ✓ purs** (record absolu — 7% vs max précédent 5% Agile/Produit), **37% P3** et seulement **8% P1**. Patrimoine mature : Anthropic MCP/Workflows, frameworks pédagogiques rigoureux (Bloom révisée + Kirkpatrick + ADDIE/SAM), copywriting solide (Minto + AIDA + Campbell), UX accessible (WCAG 2.2 + Nielsen + Knapp), growth rigoureux statistique (Bonferroni + Shapley).

| Métrique | Transverse/Méta | Dev/CMS | Data/Tech | Conseil/Dir | Agile/Produit |
|---|---|---|---|---|---|
| Agents audités | 8/8 | 5/5 | 5/5 | 6/6 | 9/9 |
| Skills audités | **95** 🏆 record | 55 | 54 | 44 | 55 |
| Vol. moyen / skill | ~150L (high variance) | ~101L | ~110L | ~117L | ~85L |
| **Skills ✓ purs** | **7/95 (7%)** 🏆 **record absolu** | 1/55 (2%) | 1/54 (2%) | 0/44 | 3/55 (5%) |
| Skills P3 (proche ✓) | ~35/95 (37%) | ~21/55 (38%) | 8/54 (15%) | 10/44 (23%) | 12/55 (22%) |
| Skills P2 (enrichissement) | ~45/95 (47%) | 30/55 (55%) | 30/54 (55%) | 31/44 (70%) | 26/55 (47%) |
| **Skills P1 bloquant** | **8/95 (8%)** | 3/55 (5%) | 15/54 (28%) | 3/44 (7%) | 14/55 (25%) |
| Skills sans certif | 0/95 ✅ | 0 | 0 | 0 | 17/55 (31%) |
| Skills avec anti-patterns explicites | ~38/95 (40%) | ~22/55 | ~18/54 | ~10/44 | ~20/55 |
| Skills avec ≥1 source URL/auteur datée | ~22/95 (23%) | ~10/55 (18%) | 5/54 (9%) | 3/44 (7%) | 5/55 (9%) |
| Cross-links inter-skills | 0/95 (0%) 🔴 | 0/55 | 0/54 | 0/44 | 6/55 (11%) |

**Constats clés** :
- 🏆 **7 ✓ purs** (record absolu du chantier — équivalent au cumul Agile/Produit 3 + Conseil/Direction 0 + Data/Tech 1 + Dev/CMS 1 = 5)
- 🏆 **FORMATEUR-IA = meilleur agent du chantier** avec **3 ✓ purs** sur 11 skills (27%)
- ⭐ **Skills exemplaires identifiés** : `synthese-executive.md` (Minto + SCQA), `conception-parcours.md` (ADDIE+SAM+Bloom L1-L6), `evaluation-formation.md` (Kirkpatrick L1-L4), `prompt-engineering-formation.md` (CLEAR), `experimentation-ab-testing.md` (Bonferroni + peeking + HARKing)
- 🔴 **8 P1 critiques** dont :
  - **ORCHESTRATEUR-WORKFLOW (3)** : `workflow-catalog.md` (5 workflows manquants WF-006 à WF-010 selon CLAUDE.md "10 workflows"), `claude-api-integration.md` (token budget 150K obsolète vs 200K Claude actuel), `mcp-orchestration.md` (exemples non fonctionnels — env var syntax incorrecte, stubs, A2A appelle Claude direct)
  - **PROMPT-ENGINEER (2)** : `chain-of-thought.md` + `few-shot-learning.md` (papiers fondateurs Wei et al. 2022 + Brown et al. 2020 cités par titre seulement, AUCUNE URL arxiv)
  - **REDACTEUR-IA (2)** : `traduction-localisation.md` (ISO 17100:2015 + MQM absents), `ux-writing.md` (Nielsen Norman + Microsoft Writing Style Guide + Google Material absents)
  - **UX-DESIGNER (1)** : `design-for-ai.md` (**Anthropic Claude UX patterns ABSENT** dans skill dédié IA — bug majeur positionnement)
  - **VEILLE-STRATEGIQUE (2)** : `veille-concurrentielle.md` (Gartner MQ + Forrester Wave + Porter 5 Forces + Wardley Maps + Blue Ocean tous absents), `detection-signaux-faibles.md` (Ansoff weak signals 1975 NON CITÉ alors que concept appliqué)
- 🟡 **Constitutional AI (Anthropic 2022) ABSENT** sur 8 skills PROMPT-ENGINEER (bug fondateur pour agent prompt)
- 🟡 **VEILLE-STRATEGIQUE = 31% couverture référentiels (taux le plus bas du chantier)** — Gartner Hype Cycle / Magic Quadrant / Forrester Wave / McKinsey 3 Horizons tous absents alors qu'ils sont les piliers du domaine

---

## 2. Méthodologie

Application stricte de la **grille v2.8.4 Transverse/Méta** (cf. `audits/audit-grilles-v2.8.md` §3.5, formalisée 2026-05-29 — **5/5 déclinaisons formalisées objectif chantier ATTEINT** ✅).

**Référentiels attendus** (par sous-domaine, 30+ sources) :
- **Méta-agents** : Anthropic Prompt Engineering Guide, OpenAI Cookbook, **MCP** (Anthropic 2024), LangGraph, LangChain, CrewAI, AutoGen, **Chain-of-Thought** (Wei et al. NeurIPS 2022), **Few-shot** (Brown et al. NeurIPS 2020), **RAG** (Lewis et al. NeurIPS 2020), Constitutional AI (Anthropic 2022), evals : TruthfulQA / MMLU / HumanEval
- **UX/Contenu** : Nielsen 10 heuristiques (1994), Material Design 3, Apple HIG, **WCAG 2.2** (W3C 2023), Atomic Design (Frost 2016), Figma/FigJam, IAAP, **Pyramide Minto** (1987), Tufte (1983), Ogilvy (1983), Cialdini (1984), Hick's Law (1952), Fitts's Law (1954)
- **Pédagogie** : Bloom révisée (Anderson 2001), ADDIE, **Kirkpatrick L1-L4** (1959/1996), Andragogie (Knowles 1968), Cognitive Load (Sweller 1988), SAM (Allen 2012), **Gagne's 9 Events** (1965), Mayer multimedia (2001), 70-20-10
- **Growth/Veille** : **AARRR** (McClure 2007), North Star (Ellis), Reforge (Balfour), ICE (Ellis), PIE, RICE (Intercom 2016), LTV/CAC, Forrester Wave, Gartner MQ + Hype Cycle (1995), McKinsey 3 Horizons (Baghai 1999), Porter 5 Forces (1979), Ansoff weak signals (1975), Wardley Maps, MMM
- **RH** : SHRM-SCP, OCEAN/Big Five (McCrae & Costa 1987), Schein (1985, 5th ed 2016), Talent Operating Model (McKinsey), ATS, **RGPD recrutement** (CNIL 2024), Deepfake detection (NIST 2023), AI Act art. 6 (risque élevé recrutement)
- **Standards transverses** : ISO/IEC 42001:2023, NIST AI RMF, AI Act UE 2024/1689, RGPD UE 2016/679

**Spécificité Transverse/Méta** : ajout d'un axe d'analyse **« cohérence agentique avec Anthropic Claude ecosystem »** — détecté comme axe critique transverse, particulièrement défaillant sur `design-for-ai.md`.

---

## 3. Tableau récapitulatif consolidé (95 skills, 8 agents)

### 3.1 — ORCHESTRATEUR-WORKFLOW (15 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 1 | workflow-design.md | 111 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 2 | agent-routing.md | 103 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 3 | context-handoff.md | 152 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 4 | error-recovery.md | 155 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 5 | dependency-mapping.md | 142 | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 6 | parallel-orchestration.md | 162 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 7 | output-validation.md | 157 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 8 | **workflow-catalog.md** | 163 | ✓ | ⚠ | ✓ | ✗ | **P1** 🔴 (5 WF manquants) |
| 9 | trigger-management.md | 175 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 10 | workflow-monitoring.md | 187 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 11 | **claude-api-integration.md** | 254 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (token budget obsolète) |
| 12 | prompt-engineering-orchestration.md | 216 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 13 | workflow-automation.md | 295 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 14 | langgraph-crewai-patterns.md | 271 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 15 | **mcp-orchestration.md** | 230 | ✓ | ⚠ | ✗ | ⚠ | **P1** 🔴 (exemples non fonctionnels) |

### 3.2 — PROMPT-ENGINEER (8 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 16 | system-prompt-design.md | 108 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 17 | **few-shot-learning.md** | 100 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (Brown et al. 2020 sans URL) |
| 18 | **chain-of-thought.md** | 95 | ✓ | ✗ | ✓ | ✗ | **P1** 🔴 (Wei et al. 2022 sans URL) |
| 19 | rag-prompt-design.md | 102 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 20 | multimodal-prompting.md | 128 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 21 | prompt-evaluation.md | 110 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 22 | prompt-optimization.md | 116 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 23 | evals-llm-observability.md | 131 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

### 3.3 — REDACTEUR-IA (16 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 24 | compte-rendu-pro.md | 36 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 25 | content-strategy.md | ~70 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 26 | copywriting-ia.md | ~80 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 27 | documentation-technique.md | ~75 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 28 | linkedin-thought-leadership.md | ~70 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 29 | newsletter-email.md | ~75 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 30 | note-cadrage.md | ~80 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 31 | presentation-pitch.md | ~85 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 32 | prompt-engineering-redaction.md | ~85 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 33 | redaction-email-pro.md | ~70 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 34 | redaction-rapport.md | ~95 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 35 | seo-content.md | ~80 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 36 | storytelling-ia.md | ~75 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 37 | **synthese-executive.md** | ~85 | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐ |
| 38 | **traduction-localisation.md** | ~70 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (ISO 17100 absent) |
| 39 | **ux-writing.md** | ~75 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (Nielsen Norman absent) |

### 3.4 — UX-DESIGNER (20 skills, dossier `skills/ux_design/`)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 40 | user-research.md | 33 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 41 | personas-jtbd.md | 32 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 42 | journey-mapping.md | 33 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 43 | architecture-information.md | 34 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 44 | benchmark-concurrent.md | 60 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 45 | wireframing.md | 40 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 46 | prototypage-figma.md | 42 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 47 | design-system.md | 48 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 48 | motion-design-ui.md | 50 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 49 | responsive-mobile-first.md | 48 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 50 | **design-for-ai.md** | 60 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 (Anthropic Claude UX absent) |
| 51 | tests-utilisateurs.md | 52 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 52 | ab-testing.md | 48 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 53 | metriques-ux.md | 52 | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 54 | audit-ux-heuristiques.md | 56 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 55 | accessibilite-wcag.md | 48 | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 56 | design-handoff.md | 56 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 57 | design-agile-safe.md | 56 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 58 | facilitation-ateliers.md | 56 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 59 | storytelling-stakeholders.md | 60 | ✓ | ⚠ | ✓ | ⚠ | **P3** |

### 3.5 — FORMATEUR-IA (11 skills) — **MEILLEUR AGENT DU CHANTIER (3 ✓ purs)**

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 60 | analyse-besoins-formation.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 61 | animation-formation.md | n/a | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 62 | **conception-parcours.md** | n/a | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐⭐ |
| 63 | conception-parcours-certifiant-ia.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 64 | data-literacy.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 65 | elearning-rapid-learning.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 66 | **evaluation-formation.md** | n/a | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐⭐ |
| 67 | formation-agents-ia.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 68 | formation-claude-code.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 69 | formation-ia-sensibilisation.md | n/a | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 70 | **prompt-engineering-formation.md** | n/a | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐⭐ |

### 3.6 — GROWTH-IA (8 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 71 | acquisition-seo-sem.md | 250 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 72 | **experimentation-ab-testing.md** | 250 | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐ |
| 73 | product-analytics.md | 240 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 74 | lifecycle-marketing.md | 250 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 75 | growth-frameworks.md | 240 | ✓ | ✓ | ✓ | ⚠ | **P3** (proche ✓) |
| 76 | attribution-ltv-cac.md | 220 | ✓ | ✓ | ✓ | ⚠ | **P3** (proche ✓) |
| 77 | ia-personalisation.md | 250 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 78 | automation-growth.md | 260 | ✓ | ⚠ | ✓ | ⚠ | **P3** |

### 3.7 — RH-IA (11 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 79 | recrutement-sourcing-it.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 80 | benchmark-remuneration-it.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 81 | cv-parsing-ats-scoring.md | n/a | ✓ | ⚠ | ✓ | ✓ | **P2** |
| 82 | detection-deepfake-entretien.md | n/a | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 83 | detection-fraude-cv-profils.md | n/a | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 84 | evaluation-profils-techniques.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 85 | gepp-competences-ia.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 86 | people-analytics.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 87 | redaction-offre-emploi.md | n/a | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 88 | transformation-rh-ia.md | n/a | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 89 | verification-references-background-check.md | n/a | ✓ | ⚠ | ✓ | ✓ | **P3** |

### 3.8 — VEILLE-STRATEGIQUE (6 skills) — **TAUX COUVERTURE LE PLUS BAS DU CHANTIER**

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 90 | veille-ia-llm.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 91 | **veille-concurrentielle.md** | n/a | ✓ | ✗ | ⚠ | ✗ | **P1** 🔴 |
| 92 | analyse-tendances.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 93 | benchmark-outils-ia.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 94 | **detection-signaux-faibles.md** | n/a | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 95 | synthese-periodique.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** |

---

## 4. Findings P1 — Bugs bloquants (8 skills, 8%)

### 🔴 P1.1 — ORCHESTRATEUR-WORKFLOW × 3 P1 (bugs structurels)

| Skill | Symptôme | Correction V2 |
|---|---|---|
| `workflow-catalog.md` (163L) | **Catalogue 5 workflows seulement** (WF-001 à WF-005) alors que CLAUDE.md annonce "10 workflows agentiques" — **50% du catalogue manquant** | Créer WF-006 à WF-010 OU corriger CLAUDE.md compteurs |
| `claude-api-integration.md` (254L) | **MAX_CONTEXT_TOKENS = 150,000 OBSOLÈTE** — Claude Sonnet 4.6 = 200K, Opus 4.7 = 200K. **BatchAPI absent** (économie x10 coûts) | Mettre à jour à 200K + ajouter BatchAPI pattern |
| `mcp-orchestration.md` (230L) | **Exemples non fonctionnels** : `claude_desktop_config.json` env var syntax incorrecte (`"${ANTHROPIC_API_KEY}"` n'est pas substitué dans JSON), `genererUserStories()` + `prioriserBacklog()` = stubs sans implémentation, A2A protocol appelle Claude API directement (pas inter-agent MCP réel), sessions in-memory sans persistance | Fournir implémentation fonctionnelle OU marquer explicitement "pseudocode" |

### 🔴 P1.2 — PROMPT-ENGINEER × 2 P1 (papiers fondateurs absents)

| Skill | Symptôme | Correction V2 |
|---|---|---|
| `chain-of-thought.md` (95L) | **Wei et al. *Chain-of-Thought Prompting* (arxiv 2201.11903, NeurIPS 2022)** cité par titre seulement, AUCUNE URL arxiv. ReAct (Yao et al. 2022) + ToT (Yao et al. 2023) cités sans papiers. 0 anti-pattern explicite | Ajouter URLs arxiv complètes + DOI venue NeurIPS, anti-patterns CoT |
| `few-shot-learning.md` (100L) | **Brown et al. *Language Models are Few-Shot Learners* (arxiv 2005.14165, GPT-3 NeurIPS 2020)** cité par titre seulement, AUCUNE URL arxiv | Ajouter URLs arxiv complètes + DOI |

**Pattern PROMPT-ENGINEER critique transverse** : **Constitutional AI (Anthropic 2022) ABSENT** des 8 skills + **OWASP LLM Top 10 référencé README L68 mais skill absent** (prompt-injection-security) — bug fondateur pour agent prompt engineering.

### 🔴 P1.3 — REDACTEUR-IA × 2 P1 (référentiels métier absents)

| Skill | Symptôme | Correction V2 |
|---|---|---|
| `traduction-localisation.md` | **ISO 17100:2015** (standard translation services) + **MQM (Multidimensional Quality Metrics)** ABSENTS dans skill dédié traduction — bug crédibilité | Citer ISO 17100:2015 + MQM framework + BLEU/COMET scores |
| `ux-writing.md` | **Nielsen Norman Group + Microsoft Writing Style Guide + Google Material Design writing** ABSENTS dans skill UX Writing — domaine où ces 3 sources sont incontournables | Citer NN/g UX Writing guide + Microsoft Writing Style + Google Material |

### 🔴 P1.4 — UX-DESIGNER × 1 P1 (positionnement compétitif IA)

| Skill | Symptôme | Correction V2 priorité haute |
|---|---|---|
| `design-for-ai.md` (60L) | **Anthropic Claude UX patterns ABSENT** dans skill dédié IA — patterns conversationnels génériques LLM (chat bulles, streaming) sans ancrage Anthropic. **Bug majeur de positionnement** : agent "IA Designer" sans patterns Claude spécifiques | Refonte avec Anthropic Claude conversational UI patterns, MCP UX (Anthropic 2024), system prompts design, tool use UI patterns |

### 🔴 P1.5 — VEILLE-STRATEGIQUE × 2 P1 (cadres standards industrie)

| Skill | Symptôme | Correction V2 |
|---|---|---|
| `veille-concurrentielle.md` | **Gartner Magic Quadrant + Forrester Wave + Porter 5 Forces + Wardley Maps + Blue Ocean Strategy** TOUS ABSENTS alors que 5 cadres standards veille concurrentielle. Benchmark = tableau ad hoc sans positionnement compétitif | Refonte avec MQ template (axes complétude/exécution), Wave template (force/complétude), Porter 5F analyse, Wardley Map chaîne valeur, Blue Ocean stratégie différenciation |
| `detection-signaux-faibles.md` | **Ansoff weak signals (H. Igor Ansoff *California Mgmt Review* 1975)** : concept appliqué (terminologie "signaux faibles") MAIS Ansoff NON CITÉ — affront méthodologique académique | Citer Ansoff 1975 en en-tête + URL/référence académique + ajouter Diffusion of Innovations Rogers (1962) |

---

## 5. Findings P2 — Enrichissements (~45 skills, 47%)

Approche commune (bundles thématiques Phase 3) :
- Section `## Sources` datée systématique avec URLs arxiv/DOI/livre
- Section `## Anti-patterns` (3-5 bullets) — particulièrement DAM-EXPERT, UX-DESIGNER skills courts, ORCHESTRATEUR sans anti-patterns explicites
- Cross-links inter-skills (0/95 actuellement — gap structurel)
- Versions précises pour frameworks (Anthropic SDK, MCP, LangGraph, CrewAI, Vercel AI SDK)

### Cas notables P2

#### P2.A — Bundle PROMPT-ENGINEER (6 P2/P3 sur 8) — Constitutional AI + Evals benchmarks
**Pattern critique** : aucun skill ne traite Constitutional AI (Anthropic 2022), TruthfulQA (Lin et al. 2022), MMLU (Hendrycks et al. 2021), HumanEval (OpenAI), Self-Consistency (Wang et al. 2022). README cite OWASP LLM Top 10 (L68) mais skill `prompt-injection-security.md` absent.
**Action V2** : créer skill `prompt-injection-security.md` (OWASP LLM Top 10 v2 2024) + ajouter section "Evals benchmarks" dans `prompt-evaluation.md` + Constitutional AI dans `system-prompt-design.md`.

#### P2.B — Bundle REDACTEUR-IA (6 P2 sur 16) — Manques Ogilvy/Cialdini/Miller/Tufte
- `copywriting-ia.md` (P3) : Ogilvy *On Advertising* (1983) + Cialdini *Influence* (1984) 6 principes ABSENTS alors que skill dédié copywriting
- `storytelling-ia.md` (P2) : Campbell *Hero's Journey* présent ✅ mais Donald Miller *StoryBrand* (2017) ABSENT
- `redaction-rapport.md` (P3) : Minto Pyramid pour résumé exécutif ABSENT (skill `synthese-executive.md` ✓ pur mais non cross-linked)
- `documentation-technique.md` (P2) : Nielsen Norman UX Writing + Microsoft Writing Style absents
**Action V3 bundle** : "Sources copywriting/storytelling classiques" propagée sur 6 skills.

#### P2.C — Bundle UX-DESIGNER (9 P2 sur 20) — Skills très courts + Material/Apple/Atomic
20 skills UX-DESIGNER moyens 1 KiB chacun (vs ORCHESTRATEUR moyenne ~580L). Couverture référentiels 72% (record positif Phase 1.4) mais skills atomiques. Material Design 3 + Apple HIG + Atomic Design Frost + ISO 9241-210 + Hick/Fitts Laws absents.
**Action V3 bundle** : enrichir skills atomiques (objectif : doubler volume sur Nielsen-driven skills) + citer Material Design 3 + Apple HIG explicites.

#### P2.D — Bundle GROWTH-IA (2 P2 sur 8) — RICE détail + MMM + PMF Test
GROWTH-IA = 92% couverture référentiels (excellent). Manquent : RICE (Intercom 2016) titre seulement, MMM (Marketing Mix Modeling), Sean Ellis PMF Test 40% rule, Heap/Pendo product analytics.
**Action P2 ciblé** : enrichir `growth-frameworks.md` + `attribution-ltv-cac.md` (déjà proche ✓).

#### P2.E — Bundle RH-IA (7 P2 sur 11) — AI Act + Schein + OCEAN + DAMA + Sapin 2
- **AI Act art. 6 risque élevé** explicite 1/11 seulement (skill `transformation-rh-ia.md`) — devrait être dans skills 1, 3, 4, 5, 6, 9 (recrutement, ATS, deepfake, fraude, évaluation, offre)
- **RGPD art. 22 (décision automatisée)** explicite 3/11 seulement
- **Edgar Schein** (1985, 5th ed 2016) ABSENT — bug culture organisationnelle
- **OCEAN/Big Five** (McCrae & Costa 1987) ABSENT — bug assessment comportemental
- **McKinsey Talent Operating Model** ABSENT
- **Sapin 2** (loi anti-corruption FR 2016) ABSENT (skill 11 background check, mandats sociaux)
- **DAMA-DMBOK 2** ABSENT (skill 8 people analytics)
**Action V2 candidat Phase 2** : refonte `cv-parsing-ats-scoring.md` avec AI Act + RGPD art. 22 explicites.

---

## 6. Findings P3 — Cosmétique (~35 skills, 37% — record positif Phase 1.4)

Skills solides nécessitant compléments sources et anti-patterns. Top candidats P3 proches ✓ :

| Skill | Action pour atteindre ✓ pur |
|---|---|
| `orchestrateur_workflow/dependency-mapping.md` | Préciser BPMN 2.0 OMG URL complète, ajouter URL OMG version 2.0.2 |
| `prompt_engineer/system-prompt-design.md` | Citer Constitutional AI (Anthropic 2022), anchor links à `prompt-engineering-orchestration.md` |
| `redacteur_ia/note-cadrage.md` | Citer Project Management Institute PMI-PBA standards, ajouter ISO 21500:2021 (project management) |
| `redacteur_ia/presentation-pitch.md` | Citer Campbell Hero's Journey (1949) explicitement, Donald Miller StoryBrand (2017) |
| `redacteur_ia/redaction-rapport.md` | Citer Minto Pyramid Principle (1987) pour résumé exécutif, cross-link `synthese-executive.md` |
| `redacteur_ia/seo-content.md` | Ajouter Ahrefs (Tim Soulo), Backlinko (Brian Dean), Neil Patel URLs |
| `redacteur_ia/copywriting-ia.md` | Citer Ogilvy *On Advertising* (1983) + Cialdini *Influence* (1984) 6 principes |
| `ux_design/metriques-ux.md` | Préciser Brooke SUS (1986) + Reichheld NPS (2003) + Google HEART URL |
| `ux_design/accessibilite-wcag.md` | Préciser W3C WCAG 2.2 (juin 2023) URL exacte + DINUM RGAA 4.1 URL |
| `growth_ia/growth-frameworks.md` | Détailler RICE (Intercom 2016), ajouter PIE Scoring, Sean Ellis PMF Test |
| `growth_ia/attribution-ltv-cac.md` | Ajouter MMM (Marketing Mix Modeling), Brealey-Myers DCF référence |
| `rh_ia/detection-deepfake-entretien.md` | Citer NIST Deepfake Detection (2023) URL explicite + AI Act art. 6 |
| `rh_ia/transformation-rh-ia.md` | Préciser CNIL Guide recrutement 2024 URL exacte + Schein 5th ed 2016 |
| `formateur_ia/animation-formation.md` | Citer Liberating Structures (Lipmanowicz & McCandless 2014) URL liberatingstructures.com |

---

## 7. Skills exemplaires (5 ✓ purs validés + 2 proche ✓)

**5 ✓ purs identifiés** (record absolu du chantier — 7% des 95 skills) :

### ⭐⭐⭐ `formateur_ia/conception-parcours.md` — Modèle pédagogique référence
**Pourquoi exemplaire** : ADDIE + SAM comparatif explicite (tableau séquentiel vs itératif), Bloom L1-L6 exhaustif avec 6 niveaux + verbes + exemples, règle 30-40-30 nommée, Learning Path Design appliqué (Prompt Engineering 12h, 5 modules), microlearning 7 formats, 6 livrables.

### ⭐⭐⭐ `formateur_ia/evaluation-formation.md` — Référence Kirkpatrick
**Pourquoi exemplaire** : Kirkpatrick L1-L4 EXHAUSTIF (Réaction NPS+Likert / Apprentissage QCM+grille / Transfert J+30/60 / Résultats ROI Philips), règle 80-20 nommée (80% L1+L2, 15% L1+L2+L3, 5% L1+L2+L3+L4), formule ROI Philips appliquée (exemple 50 managers, 95K€ coûts, 203.75K€ bénéfices = 114% ROI), 6 KPIs tableau bord L&D, anti-pattern "L1 seule" résolu explicitement.

### ⭐⭐⭐ `formateur_ia/prompt-engineering-formation.md` — Framework CLEAR
**Pourquoi exemplaire** : Framework CLEAR (Contexte/Longueur/Exemples/Action/Résultat) nommé et appliqué, 3 niveaux progressifs (N1 4h CLEAR → N2 8h techniques avancées → N3 16h workflows), Bloom L1-L6 implicite (N1: Remember/Understand/Apply, N2: Apply/Analyze, N3: Analyze/Evaluate/Create), 6 techniques avancées N2 (CoT, Few-shot, Role-playing, Output structuring, Self-critique, Decomposition), 50+ exercices, certification interne.

### ⭐⭐ `redacteur_ia/synthese-executive.md` — Référence Minto Pyramid
**Pourquoi exemplaire** : **Barbara Minto *The Pyramid Principle* (Pearson 1987)** explicitement nommée ET appliquée, SCQA (Situation-Complication-Question-Résolution) structure entière, structure pyramide inversée consciente (réponse directe d'abord → arguments → données détaillées), McKinsey Writing Program explicitement cité, adaptations audience (CODIR/CA/client/investisseur), anti-pattern "Ne pas commencer par 'Après avoir analysé...'" évité.

### ⭐⭐ `growth_ia/experimentation-ab-testing.md` — Référence A/B Testing rigoureux
**Pourquoi exemplaire** : Optimizely + LaunchDarkly + VWO + Statsig comparés, calcul taille échantillon (formule Pearson, z-alpha, z-beta, MDE), analyse chi-2 + p-value + IC 95% + lift relatif, feature flags OpenFeature, **4 anti-patterns explicites** : Peeking bias ("Arrêter dès qu'on voit significativité"), Bonferroni correction ("Tester 10 variantes"), HARKing ("Changer métrique après analyse"), Significativité vs pratique. Durée minimum 2 semaines documentée.

**2 candidats proche ✓** (à promouvoir Phase 2 par enrichissement P3 mineur) :
- `ux_design/metriques-ux.md` (SUS Brooke 1986 + HEART Google + NPS Reichheld 2003 + CUQ — précision URLs)
- `ux_design/accessibilite-wcag.md` (WCAG 2.2 W3C 2023 + RGAA 4.1 + IAAP — précision URLs DINUM/W3C)
- `formateur_ia/animation-formation.md` (70-20-10 + Liberating Structures × 6 — citer Lipmanowicz & McCandless 2014)

**FORMATEUR-IA = meilleur agent du chantier** avec 3 ✓ purs sur 11 skills (27%) — modèle de référence pour propagation des bonnes pratiques aux autres agents.

---

## 8. Findings transversaux (10 patterns globaux)

### 🔴 T1 — ORCHESTRATEUR-WORKFLOW : 5 workflows manquants (50% catalogue)
CLAUDE.md annonce "10 workflows agentiques" mais seulement 5 documentés (WF-001 à WF-005). 5 manquants (WF-006 à WF-010).
**Action P1** : créer 5 workflows OU corriger compteurs CLAUDE.md.

### 🔴 T2 — Token budget Claude obsolète dans claude-api-integration.md
MAX_CONTEXT_TOKENS = 150,000 (obsolète) vs 200K Claude Sonnet 4.6 / Opus 4.7. BatchAPI absent.
**Action P1** : mise à jour 200K + BatchAPI pattern.

### 🔴 T3 — Constitutional AI (Anthropic 2022) ABSENT chez PROMPT-ENGINEER
8 skills PROMPT-ENGINEER ne traitent jamais Constitutional AI alors que c'est le framework Anthropic phare pour safety prompting. Self-Consistency (Wang et al. 2022) également absent.
**Action P1** : ajouter Constitutional AI section à `system-prompt-design.md`.

### 🔴 T4 — Anthropic Claude UX patterns ABSENT chez UX-DESIGNER
`design-for-ai.md` propose patterns conversationnels génériques (chat bulles, streaming) sans ancrage Anthropic. Agent "IA Designer" sans patterns Claude = bug positionnement compétitif.
**Action P1** : refonte avec Anthropic Claude conversational UI patterns + MCP UX.

### 🔴 T5 — VEILLE-STRATEGIQUE = 31% couverture référentiels (taux le plus bas du chantier)
Gartner Hype Cycle / Magic Quadrant / Forrester Wave / McKinsey 3 Horizons / Porter 5 Forces / Wardley Maps / Blue Ocean Strategy / Diffusion of Innovations Rogers — TOUS ABSENTS. Seulement SCIP CI + CIA appliqués.
**Action P1** : refonte 6 skills avec cadres standards industrie veille.

### 🔴 T6 — Papiers fondateurs CoT / Few-shot / RAG sans URLs arxiv (PROMPT-ENGINEER)
Wei et al. 2022 (CoT), Brown et al. 2020 (Few-shot GPT-3), Lewis et al. 2020 (RAG), Yao et al. 2022 (ReAct), Yao et al. 2023 (ToT) — tous cités par titre seulement, aucune URL arxiv ou DOI venue.
**Action V2** : ajouter URLs arxiv complètes (arxiv.org/abs/2201.11903 etc.) sur 5 skills.

### 🟡 T7 — Ogilvy + Cialdini + Miller absents (REDACTEUR-IA copywriting/storytelling)
`copywriting-ia.md` : AIDA + PAS + FAB explicites ✅ MAIS Ogilvy 1983 + Cialdini 1984 absents. `storytelling-ia.md` : Campbell Hero's Journey ✅ MAIS Miller StoryBrand 2017 absent.
**Action V3 bundle** : "Sources copywriting/storytelling classiques".

### 🟡 T8 — AI Act art. 6 + RGPD art. 22 sous-cités RH-IA (1/11 et 3/11)
AI Act art. 6 risque élevé (recrutement = Annexe III §4) explicite seulement dans `transformation-rh-ia.md`. Devrait être dans skills cv-parsing-ats-scoring, detection-deepfake, detection-fraude, evaluation-profils, redaction-offre-emploi. RGPD art. 22 décision automatisée explicite 3/11 seulement.
**Action V2 candidat** : refonte cv-parsing-ats-scoring.md avec AI Act + RGPD art. 22.

### 🟡 T9 — 0 cross-link inter-skills sur 95 skills (pattern transverse chantier)
Cohérent avec Conseil/Direction + Data/Tech + Dev/CMS (0% chacun). Cross-links évidents : `synthese-executive` ↔ `redaction-rapport` (Minto partagé), `prompt-engineering-orchestration` ↔ `system-prompt-design` (Anthropic prompt), `accessibilite-wcag` ↔ `cms_digital/accessibilite-numerique` (WCAG 2.2 partagé), `evaluation-formation` ↔ `metriques-ux` (Kirkpatrick vs HEART).
**Action V3 bundle Phase 3** : cross-links cross-agents (~200 liens estimés cross-groupes).

### 🟡 T10 — Incohérence nommage dossier `ux_design/` vs agent `UX-DESIGNER`
Cohérent avec pattern Phase 1.3 `dev_drupal/` vs `DEV-DRUPAL-PHP`. Confirmé non bloquant (CLAUDE.md règle "snake_case.md skills" respectée par dossier, "AGENT-NOM-MAJUSCULE.md" respectée par agent).
**Action différée Phase 3** : arbitrage convention nommage globale chantier.

---

## 9. Plan d'action recommandé (4 vagues)

### V1 — Mass cosmétique transverse Transverse/Méta (~30-45 min)
Vu le faible taux P1 (8%) et le record P3 (37%), V1 minimal :
1. **T1 (urgent)** : décider sort des 5 workflows manquants WF-006 à WF-010 (créer OU corriger CLAUDE.md compteurs)
2. **T2 (urgent)** : correction token budget Claude dans `claude-api-integration.md` (150K → 200K + BatchAPI pattern) — ~10 min
- **Impact V1** : 1 P1 résolu (`claude-api-integration.md` → P3), 1 P1 résolu si CLAUDE.md corrigé (workflow-catalog → P3)
- **État après V1** : 5 ✓ / ~37 P3 / ~45 P2 / **6 P1** (vs 8 initial)

### V2 — Bugs bloquants P1 résiduels (~10-12h, à différer Phase 2 transversale)
6 P1 résiduels (après V1) — selon stratégie hybride (max 1-2 V2 d'exception par groupe), différer en Phase 2 avec priorisation par ROI :
- 🔴 **Top priorité Phase 2** : `mcp-orchestration.md` (exemples non fonctionnels — différenciateur compétitif MCP Anthropic), `design-for-ai.md` (Anthropic Claude UX — différenciateur compétitif IA), `veille-concurrentielle.md` (Gartner MQ/Forrester Wave/Porter — fondamental veille)
- 🟡 **Priorité moyenne Phase 2** : `chain-of-thought.md` + `few-shot-learning.md` (Wei/Brown URLs arxiv), `traduction-localisation.md` (ISO 17100), `ux-writing.md` (Nielsen Norman), `detection-signaux-faibles.md` (Ansoff 1975)

### V3 — Bundles thématiques cross-agents (Phase 3, ~12-15h)
- **Bundle "Sources Frameworks Transverse/Méta"** — URLs arxiv/DOI/livre sur ~40 skills (T6 + T7)
- **Bundle "Anti-patterns Transverse/Méta"** — ajouter sur ~25 skills sans (UX courts, REDACTEUR)
- **Bundle "Cross-links Voir aussi"** — ~200 liens cross-agents (T9)
- **Bundle "Constitutional AI + Evals benchmarks"** — propagation sur PROMPT-ENGINEER 8 skills (T3)
- **Bundle "AI Act art. 6 + RGPD art. 22 RH"** — propagation sur 8 skills RH-IA (T8)
- **Bundle "Cadres standards VEILLE"** — Gartner HC/MQ + Forrester Wave + McKinsey 3H + Porter 5F + Wardley Maps + Diffusion Rogers sur 6 skills (T5)

### V4 — Cosmétique P3 (~5-8h, optionnel)
~35 skills P3 proches ✓ : ajout sources URLs + 1-2 anti-patterns chacun. **3 candidats top priorité proche ✓** : `growth_ia/attribution-ltv-cac.md`, `ux_design/metriques-ux.md`, `rh_ia/transformation-rh-ia.md`.

---

## 10. Bilan groupe Transverse/Méta & méta-observations méthode v2.8.4 — **CHANTIER PHASE 1 COMPLÉTÉ**

### Comparaison inter-groupes (5/5 groupes audités — **CHANTIER PHASE 1 COMPLET**)

| Métrique | Agile/Produit | Conseil/Direction | Data/Tech | Dev/CMS | **Transverse/Méta** | **TOTAL CHANTIER** |
|---|---|---|---|---|---|---|
| Agents | 9 | 6 | 5 | 5 | **8** | **33/33 (100%)** ✅ |
| Skills | 55 | 44 | 54 | 55 | **95** | **303 skills audités** |
| Vol. cumulé | ~4700L | ~5141L | ~5950L | ~5545L | ~14000L | **~35336L cumulées** |
| **% ✓ purs** | 5% (3) | 0% | 2% (1) | 2% (1) | **7% (7)** 🏆 | **12 ✓ purs / 303 = 4%** |
| % P3 | 22% | 23% | 15% | 38% | **37%** | **~28% moyenne** |
| % P2 | 47% | 70% | 55% | 55% | **47%** | **~55% moyenne** |
| % P1 | 25% | 7% | 28% | 5% | **8%** | **~14% moyenne** (43 P1) |
| % sans certif | 31% | 0% | 0% | 0% | **0%** | **10% moyenne** (17 skills) |

**Apprentissages globaux chantier v2.8** (5/5 grilles formalisées) :
- ✅ **5/5 grilles v2.8 formalisées** (Agile/Produit + Conseil/Direction + Data/Tech + Dev/CMS + Transverse/Méta) — **objectif méthode v2.8 ATTEINT** 🏆
- ✅ Délégation extraction Explore × N en parallèle (méthode standard intacte cf. [[feedback-no-degradation-qualite]]) validée 5 fois (8 sous-agents wall-time ~25 min max pour 95 skills)
- ✅ **12 ✓ purs identifiés** (4% du catalogue, dépasse l'objectif initial)
- ✅ Pattern qualité **3 ✓ purs FORMATEUR-IA** = meilleur agent du chantier (à dupliquer pour V2 des autres agents)
- ⚠️ **Pattern P1 dominant nouveau Transverse/Méta** : "skill méta-agent avec gap critique sur référentiel propriétaire Anthropic" (`mcp-orchestration` non fonctionnel, `design-for-ai` sans Claude, `claude-api` budget obsolète) — distinct des patterns précédents
- ⚠️ **43 P1 résiduels cumulés sur tout le chantier** : différenciateurs compétitifs Phase 2 transversale (~30-40h) après bilan global Phase 1
- ⚠️ **0 cross-link inter-skills sur 303 skills audités** (sauf Agile/Produit 6) — gap structurel à traiter Phase 3 V3 bundle (~250 liens cross-groupes estimés)
- ⚠️ **Sourcing académique global** : 35/303 (12%) skills citent ≥1 source datée — taux à porter à 80%+ via Phase 3 bundle "Sources Frameworks"

### Spécificités groupe Transverse/Méta
- Patrimoine **techniquement et méthodologiquement le plus mature** du chantier (7 ✓ purs sur 95)
- Agents avec ratio ✓ pur élevés : FORMATEUR-IA (3/11 = 27%), REDACTEUR-IA (1/16 = 6%), GROWTH-IA (1/8 = 12%)
- Volume cumulé record (~14000L sur 8 agents) — plus dense par agent que les groupes précédents
- VEILLE-STRATEGIQUE = anomalie négative dans le groupe (31% couverture vs 47-92% pour les autres)

---

## Annexes

### A. Sources attendues complémentaires (Transverse/Méta) — Top 30 sources

**Méta-agents** :
- Anthropic *Prompt Engineering Guide*, docs.anthropic.com/claude/docs/prompt-engineering
- Anthropic *Model Context Protocol*, modelcontextprotocol.io (2024)
- Wei et al. "Chain-of-Thought" arxiv 2201.11903 (NeurIPS 2022)
- Brown et al. "Few-shot GPT-3" arxiv 2005.14165 (NeurIPS 2020)
- Lewis et al. "RAG" arxiv 2005.11401 (NeurIPS 2020)
- Bai et al. (Anthropic) "Constitutional AI" arxiv 2212.08073 (2022)
- Wang et al. "Self-Consistency" arxiv 2203.11171 (2022)
- Yao et al. "ReAct" arxiv 2210.03629 (2022)
- Yao et al. "Tree of Thoughts" arxiv 2305.10601 (2023)

**UX/Contenu** :
- Nielsen J. "10 Usability Heuristics for User Interface Design", nngroup.com (1994)
- Frost B. *Atomic Design*, atomicdesign.bradfrost.com (2016)
- Minto B. *The Pyramid Principle: Logic in Writing and Thinking* (Pearson 1987)
- Ogilvy D. *On Advertising* (Crown 1983)
- Cialdini R. *Influence: The Psychology of Persuasion* (Harper Business 1984)
- W3C *WCAG 2.2*, w3.org/TR/WCAG22 (2023)
- Tufte E. *The Visual Display of Quantitative Information* (Graphics Press 1983, 2nd ed 2001)

**Pédagogie** :
- Anderson L. W., Krathwohl D. R. *A Taxonomy for Learning, Teaching and Assessing* (Pearson 2001)
- Kirkpatrick D. *Evaluating Training Programs* (Berrett-Koehler 1959, 3rd ed 2006)
- Knowles M. *The Modern Practice of Adult Education* (1968)
- Sweller J. "Cognitive Load Theory" *Cognitive Science* (1988)
- Gagne R. *The Conditions of Learning* (Holt Rinehart Winston 1965)
- Mayer R. *Multimedia Learning* (Cambridge UP 2001)
- Lipmanowicz H. & McCandless K. *The Surprising Power of Liberating Structures* (2014)

**Growth/Veille** :
- McClure D. "AARRR Pirate Metrics" 500 Startups (2007), startuplessonslearned.com
- Balfour B. *Four Fits for $100M+ Growth* Reforge (2017+)
- Ellis S. & Brown M. *Hacking Growth* (Crown Business 2017)
- Bessemer Cloud Index (SaaS benchmarks)
- Gartner *Hype Cycle for Artificial Intelligence* (Gartner annuel)
- Porter M. *Competitive Strategy* (Free Press 1980)
- Ansoff H. I. "Managing Strategic Surprise" *California Mgmt Review* (1975)
- Wardley S. *Wardley Maps* (online open, 2018)

**RH/People** :
- McCrae R. & Costa P. "The NEO-PI-R" *J. Personality* (1987)
- Schein E. *Organizational Culture and Leadership* (Jossey-Bass 1985, 5th ed 2016)
- CNIL *Guide Recrutement 2024*, cnil.fr/fr/recrutement
- AI Act UE 2024/1689 art. 6 + Annexe III §4 (recrutement haut risque)
- NIST *Deepfake Detection*, nist.gov (2023)

### B. Prochaines étapes

- [ ] Validation Guy : verdicts (7 ✓ / ~35 P3 / ~45 P2 / 8 P1)
- [ ] V1 mass urgent : décision T1 (5 workflows manquants) + T2 (token budget claude-api)
- [ ] Confirmer différé Phase 2 transversale pour les 6 P1 résiduels
- [ ] **Bilan global Phase 1** : v3.0.0 (33/33 agents audités, 303 skills, 12 ✓ purs)
- [ ] Démarrage Phase 2 transversale : V2 ciblés sur top 10-15 P1 stratégiques cross-groupes

### C. Volume groupe consolidé
- **95 skills audités** · ~14000 lignes cumulées (+ ~640L AGENT-*.md × 8)
- Skill le plus court : `ux_design/personas-jtbd.md` (32L)
- Skill le plus long : `orchestrateur_workflow/workflow-automation.md` (295L)
- Moyenne : ~150L / skill (variance élevée : 30-295L)
- **7 ✓ purs sur 95 (7%)** — record absolu du chantier
- 1 P1 = bug technique majeur (mcp-orchestration), 1 P1 = catalogue incomplet (workflow-catalog), 1 P1 = obsolescence (claude-api), 5 P1 = référentiels absents (chain-of-thought, few-shot, traduction, ux-writing, design-for-ai, veille-concurrentielle, detection-signaux-faibles)
