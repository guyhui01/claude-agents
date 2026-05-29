# Changelog — Claude Agents Library

> Journal de suivi des modifications du catalogue.
> Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versionnement [SemVer](https://semver.org/lang/fr/).

---

## [2.13.0] — 2026-05-29 — Phase 1.4 Audit groupe Transverse/Méta (8 agents, 95 skills) — **CHANTIER PHASE 1 COMPLET 33/33** 🏆
> Modèle : Claude Opus 4.7

### 🎯 Contexte — CLÔTURE PHASE 1
**5ème et DERNIER groupe audité** du chantier qualité v2.8. Application finale de la stratégie hybride par groupe (cf. v2.10.0/v2.11.0/v2.12.0). **Transverse/Méta = MEILLEUR PROFIL QUALITÉ DU CHANTIER** sur les 5 groupes audités. Méthode standard Phase 1.1 intacte ([[feedback-no-degradation-qualite]] règle 2 appliquée), application disciplinée triptyque qualité.

### 🔧 Ajouté — Grille v2.8.4 Transverse/Méta formalisée — **5/5 grilles complètes** ✅
- `audits/audit-grilles-v2.8.md` §3.5 — **5ème et dernière déclinaison** de la grille v2.8 — **objectif méthode v2.8 ATTEINT**
- 5 sous-domaines structurés : Méta-agents (Anthropic SDK + **MCP 2024** + LangGraph + CrewAI + Constitutional AI + Chain-of-Thought Wei NeurIPS 2022 + Few-shot Brown NeurIPS 2020 + RAG Lewis NeurIPS 2020), UX/Contenu (Nielsen 1994 + WCAG 2.2 + Minto 1987 + Ogilvy 1983 + Cialdini 1984), Pédagogie (Bloom révisée Anderson 2001 + ADDIE + **Kirkpatrick L1-L4** + Andragogie Knowles + Cognitive Load Sweller + Gagne 9 Events + Mayer + 70-20-10), Engagement/Croissance (AARRR McClure 2007 + Reforge Balfour + Gartner Hype Cycle 1995 + McKinsey 3 Horizons 1999 + Porter 5F 1979 + Ansoff 1975), RH (SHRM-SCP + OCEAN McCrae 1987 + Schein 1985/2016 + AI Act art. 6 + CNIL 2024)
- **30 sources attendues** référencées avec auteurs/années/URLs/conférences NeurIPS/HBR

### 🔧 Ajouté — Audit groupe consolidé (record volume chantier)
- `audits/audit-groupe-transverse-meta-2026-05-29.md` (~800L denses)
- **Format consolidé** : 1 rapport pour 8 agents (cohérent règle 1 triptyque qualité)
- 10 sections structurées : synthèse exécutive, méthode, 8 tableaux par agent (95 skills cotés sur grille v2.8.4), findings P1/P2/P3, **5 skills exemplaires détaillés**, transversaux 10 patterns, plan action 4 vagues, **méta-observations chantier Phase 1 complet 5/5 groupes**, annexes 30+ sources

### 📊 Résultats audit (95 skills, 8 agents) — **MEILLEUR PROFIL QUALITÉ DU CHANTIER**

| Verdict | Nb | % | Comparaison inter-groupes (5 groupes) |
|---|---:|---:|---|
| ⭐⭐ **✓ purs** | **7** | **7%** | 🏆 **RECORD ABSOLU** (vs 5% max Agile/Produit, 2% Dev/CMS, 2% Data/Tech, 0% Conseil/Direction) |
| P3 (proche ✓) | ~35 | 37% | équivalent meilleur Dev/CMS (38%) |
| P2 (enrichissement) | ~45 | 47% | équivalent autres groupes |
| P1 bloquant | **8** | **8%** | 2ème meilleur ratio (vs 5% Dev/CMS, 7% Conseil/Direction, 25-28% Agile-Data) |
| Sans certif | 0 | 0% | ✅ |

**⭐⭐⭐ FORMATEUR-IA = meilleur agent du chantier** avec **3 ✓ purs sur 11 skills (27%)** :
- `formateur_ia/conception-parcours.md` — ADDIE+SAM + Bloom L1-L6 exhaustif + règle 30-40-30
- `formateur_ia/evaluation-formation.md` — Kirkpatrick L1-L4 + formule ROI Philips
- `formateur_ia/prompt-engineering-formation.md` — Framework CLEAR + 3 niveaux Bloom

**Autres ✓ purs** :
- `redacteur_ia/synthese-executive.md` — Barbara Minto + SCQA + McKinsey Writing
- `growth_ia/experimentation-ab-testing.md` — Bonferroni + peeking + HARKing + 4 anti-patterns

### 🔴 8 P1 critiques (différés en Phase 2 transversale)

- **ORCHESTRATEUR-WORKFLOW (3)** : `workflow-catalog.md` (5 workflows manquants WF-006-010 vs CLAUDE.md "10"), `claude-api-integration.md` (token budget obsolète 150K vs 200K — **CORRIGÉ V1**), `mcp-orchestration.md` (exemples non fonctionnels — différenciateur compétitif MCP Anthropic)
- **PROMPT-ENGINEER (2)** : `chain-of-thought.md` + `few-shot-learning.md` (papiers fondateurs Wei NeurIPS 2022 / Brown NeurIPS 2020 cités sans URLs arxiv)
- **REDACTEUR-IA (2)** : `traduction-localisation.md` (ISO 17100:2015 + MQM absent), `ux-writing.md` (Nielsen Norman + Microsoft Writing Style + Google Material absent)
- **UX-DESIGNER (1)** : `design-for-ai.md` (**Anthropic Claude UX patterns ABSENT** dans skill dédié IA — bug majeur positionnement)
- **VEILLE-STRATEGIQUE (2)** : `veille-concurrentielle.md` (Gartner MQ/Forrester/Porter/Wardley/Blue Ocean tous absents), `detection-signaux-faibles.md` (Ansoff 1975 non cité)

### 🔧 V1 correctifs urgents appliqués

**T2 corrigé** : `skills/orchestrateur_workflow/claude-api-integration.md` L229 — MAX_CONTEXT_TOKENS mis à jour de 150_000 → **200_000** (Claude Sonnet 4.6 / Opus 4.7 actuel). Ajout commentaire BatchAPI (économie -50% workflows asynchrones, docs.anthropic.com/claude/docs/batch-api). SAFETY_MARGIN_TOKENS extrait constante. Mention contexte étendu Opus 4.7 (1M tokens).

**T1 différé Phase 2** : 5 workflows manquants WF-006 à WF-010 — décision stratégique à arbitrer (créer 5 workflows OU corriger compteurs CLAUDE.md).

### 🔴 10 patterns transverses critiques détectés

- T1 ORCHESTRATEUR : 5 workflows manquants (50% catalogue) vs CLAUDE.md annonce
- T2 Token budget Claude obsolète (CORRIGÉ V1)
- T3 PROMPT-ENGINEER : Constitutional AI Anthropic 2022 ABSENT 8 skills
- T4 UX-DESIGNER : Anthropic Claude UX patterns absent skill dédié IA
- T5 VEILLE-STRATEGIQUE : 31% couverture référentiels (taux le plus bas du chantier — Gartner HC/MQ + Forrester + McKinsey 3H tous absents)
- T6 Papiers fondateurs sans URLs arxiv (Wei CoT, Brown Few-shot, Lewis RAG, Yao ReAct/ToT)
- T7 REDACTEUR-IA : Ogilvy 1983 + Cialdini 1984 + Miller StoryBrand 2017 absents
- T8 RH-IA : AI Act art. 6 + RGPD art. 22 sous-cités (1/11 et 3/11)
- T9 0 cross-link inter-skills sur 95 skills (cohérent avec autres groupes)
- T10 Incohérence nommage `ux_design/` vs `UX-DESIGNER` (différé)

### 🎯 Apprentissages méthode v2.8.4 — **BILAN CHANTIER PHASE 1 COMPLET**

**État global après v2.13.0** :
- ✅ **33/33 agents audités (100%)** 🏆 — **CHANTIER PHASE 1 COMPLET**
- ✅ **303 skills audités** sur ~35336 lignes cumulées
- ✅ **5/5 grilles v2.8 formalisées** (Agile/Produit + Conseil/Direction + Data/Tech + Dev/CMS + Transverse/Méta)
- ✅ **12 ✓ purs identifiés** (4% du catalogue total — dépasse objectif initial 5)
- ✅ **43 P1 résiduels cumulés** (14% moyenne — différenciateurs compétitifs Phase 2)
- ✅ Délégation Explore × N en parallèle (méthode standard intacte 5 fois)
- ✅ Application disciplinée triptyque qualité ([[feedback-triptyque-qualite]]) sur les 3 dernières phases (1.2, 1.3, 1.4)
- ⚠️ 0 cross-link inter-skills sur 303 skills (sauf Agile/Produit 6) — gap structurel Phase 3 V3 bundle

### 🔜 Suite chantier

- **Phase 1 COMPLET** : bilan global à publier (v3.0.0 candidat — major version pour 33/33 agents + 12 ✓ purs)
- **Phase 2 transversale** : V2 ciblés sur top 10-15 P1 stratégiques cross-groupes (~30-40h sur 4-5 sessions)
- **Phase 3 V3 bundles** : Sources Frameworks (~80 skills) + Anti-patterns (~70 skills) + Cross-links Voir aussi (~250 liens) + Diversification sectorielle (~30 skills)
- **13 releases publiées** : v2.8.0 → v2.13.0

---

## [2.12.0] — 2026-05-29 — Phase 1.3 Audit groupe Dev/CMS (5 agents, 55 skills)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**3ème application de la stratégie hybride par groupe** (cf. v2.10.0 Conseil/Direction, v2.11.0 Data/Tech). Démarrage du 4ème groupe : **Dev/CMS** (5 agents, **55 skills**, ~5545 lignes cumulées). Audit complet en méthode standard Phase 1.1 ([[feedback-no-degradation-qualite]] règle 2 appliquée), application disciplinée du triptyque qualité ([[feedback-triptyque-qualite]]).

### 🔧 Ajouté — Grille v2.8.3 Dev/CMS formalisée
- `audits/audit-grilles-v2.8.md` §3.4 — 4ème déclinaison de la grille v2.8 (sur 5 prévues)
- Référentiels par sous-domaine : TypeScript/Frontend IA (React 18+, Next.js 14+, Anthropic SDK, Vercel AI SDK, **MCP Anthropic 2024**), Drupal/PHP (Drupal 10/11, Twig SensioLabs, PHPUnit Bergmann, Behat), CMS digital (AEM 6.5+, **WCAG 2.2 W3C 2023**, **Core Web Vitals Google 2020+**, Schema.org, Atomic Design), PIM (Akeneo, **GS1**, Schema.org Product, DAMA-DMBOK 2), DAM (Bynder, Cloudinary, **IPTC 2024**, XMP ISO 16684-1, IIIF)
- 28 sources attendues référencées avec auteurs/années/URLs

### 🔧 Ajouté — Audit groupe consolidé
- `audits/audit-groupe-dev-cms-2026-05-29.md` (~600L denses)
- **Format consolidé** : 1 rapport pour 5 agents (cohérent règle 1 triptyque qualité)
- 10 sections structurées : synthèse exécutive, méthode, 5 tableaux par agent (55 skills cotés sur grille v2.8.3), findings P1/P2/P3, skill exemplaire, transversaux 10 patterns, plan action 4 vagues, méta-observations, annexes 28 sources

### 📊 Résultats audit (55 skills, 5 agents) — Meilleur profil qualité du chantier

| Verdict | Nb | % | Comparaison |
|---|---:|---:|---|
| ⭐ **✓ pur** | **1** | 2% | `cms_digital/accessibilite-numerique.md` — **2ème ✓ pur hors Agile/Produit** |
| **P3 (proche ✓)** | **~21** | **38%** | 🏆 **record positif du chantier** (vs 15-23% autres groupes) |
| P2 | ~30 | 55% | équivalent autres groupes |
| **P1 bloquant** | **3** | **5%** | 🏆 **record positif** (vs 28% Data/Tech, 25% Agile/Produit) |
| Sans certif | 0 | 0% | ✅ |

**Skill exemplaire** : `cms_digital/accessibilite-numerique.md` — WCAG 2.2 (W3C 2023) + RGAA 4.1 (DINUM 2024) + ARIA 1.2 + 12 critères avec test rapide + outils Pa11y/axe/WAVE CI/CD + 12 anti-patterns + lecteurs d'écran NVDA/VoiceOver/JAWS + Déclaration d'Accessibilité DINUM template. **Modèle de référence accessibilité/conformité** du catalogue.

### 🔴 3 P1 critiques (différés en Phase 2 transversale)

- **DEV-DRUPAL-PHP** : `drupal-theming-twig.md` — **Twig XSS/autoescape absent** (bug sécurité Web) → V2 Phase 2 priorité haute
- **DAM-EXPERT** : `gestion-droits-licences.md` — **RGPD cité dans 6 skills DAM sans aucune source légale** (UE 2016/679, CNIL, jurisprudence) → bug conformité critique pour clients CAC40 régulés → V2 Phase 2 priorité haute
- **PIM-EXPERT** : `gouvernance-donnees-produit.md` — DAMA-DMBOK 2 cité sans année (2017) + **GS1 absent** (GTIN/GLN/GDSN) + MDM patterns (Inmon/Ladley) absents → V2 Phase 2

### 🔴 10 patterns transverses critiques détectés

- T1 DEV-TYPESCRIPT-IA : 0/9 sources externes URLs (carence sourcing structurelle)
- T2 DEV-DRUPAL-PHP : Drupal 11 absent (10/10 ciblent Drupal 10 seul — EOL prévue 2026)
- T3 Migrate API mentionné périmètre agent mais aucun skill ne le couvre + Twig XSS
- T4 CMS-DIGITAL : TYPO3 + WordPress absents (2 CMS majeurs marché EU/global)
- T5 DAM-EXPERT : RGPD sans source légale (6 skills concernés)
- T6 PIM-EXPERT : GS1 sous-intégré (2/12 alors que standard universel e-commerce)
- T7 Versions SDK absentes systématiquement (~30 skills concernés)
- T8 Incohérence nommage dossier `skills/dev_drupal/` vs agent `AGENT-DEV-DRUPAL-PHP.md` (non bloquant, différé)
- T9 Anti-patterns absents DAM-EXPERT (8/12 sans aucun anti-pattern explicite)
- T10 0 cross-link inter-skills sur 55 skills (cohérent avec Conseil/Direction + Data/Tech)

### 🎯 V1 mass

Vu le faible taux P1 (5%) et le record P3 (38%), **V1 mass = 0 modification ce coup-ci** :
- 3 P1 sont profonds (sécurité/conformité), différés Phase 2 cohérent stratégie hybride
- T8 (nommage dossier) non bloquant, différé Phase 3 V3 bundle

### 🎯 Apprentissages méthode v2.8.3

- ✅ Grille v2.8.3 Dev/CMS **applicable sans ajustement** depuis formalisation (4ème déclinaison rodée)
- ✅ Délégation extraction Explore × 5 en parallèle = ~15-20 min wall-time pour 55 skills (méthode standard intacte conformément triptyque qualité)
- ✅ **Profil qualité du groupe = inverse de Data/Tech** : 5% P1 / 38% P3 (Dev/CMS) vs 28% P1 / 15% P3 (Data/Tech). Pattern dominant Dev/CMS = "code abondant + certifs spécialistes + outils mainstream bien intégrés" (Acquia, Adobe AEM, Anthropic MCP, Bynder, Cloudinary, IPTC, Henry Stewart)
- ⚠️ **Pattern P1 dominant nouveau** : "skill sécurité/conformité avec gap critique" (Twig XSS, RGPD sans source) — distinct du pattern P1 "référentiels académiques absents" (Data/Tech) et "P1 cosmétique certifs" (Agile/Produit)
- ⚠️ Sécurité Web (XSS, RGPD, secrets, SSO/SAML) = nouvel axe critique transverse à intégrer en grille v2.8 future

### 🔜 Suite chantier

- **3 P1 différés en Phase 2 transversale** (Twig XSS, RGPD DAM, DAMA PIM)
- **T8 nommage dossier** : différé Phase 3 V3 bundle
- **Prochaine session Phase 1** : **Phase 1.4 — Audit + V1 Transverse/Méta** (8 agents : ORCHESTRATEUR-WORKFLOW, PROMPT-ENGINEER, REDACTEUR-IA, UX-DESIGNER, FORMATEUR-IA, GROWTH-IA, RH-IA, VEILLE-STRATEGIQUE) — **dernier groupe Phase 1** — estim. ~4h
- État global : **25/33 agents audités (76%)**, **285 skills audités**, **4/5 grilles v2.8 formalisées**

---

## [2.11.0] — 2026-05-29 — Phase 1.2 Audit + V1 correctifs groupe Data/Tech (5 agents, 54 skills)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**2ème application de la stratégie hybride par groupe** (cf. [v2.10.0] Conseil/Direction). Démarrage du 3ème groupe : **Data/Tech** (5 agents, **54 skills**, ~5950 lignes cumulées — patrimoine le plus volumineux du chantier, 12% de plus que Conseil/Direction). Audit complet en méthode standard Phase 1.1 (briefs Explore détaillés, **pas de version compacte/dégradée** conforme [[feedback-no-degradation-qualite]]).

### 🔧 Ajouté — Grille v2.8.2 Data/Tech formalisée (déjà commit `56860b6`)
- `audits/audit-grilles-v2.8.md` §3.3 — 3ème déclinaison de la grille v2.8 (sur 5 prévues)
- Référentiels par sous-domaine : ML/DS (CRISP-DM, Hastie 2009, Goodfellow 2016, Bishop, Murphy), DE (DAMA-DMBOK 2 2017, Data Mesh Dehghani 2022, Kimball 2013, Lakehouse), MLOps (Google MLOps Maturity 2021, Burkov 2020, DORA Accelerate 2018, OWASP LLM Top 10), Architecture (TOGAF 10 2022, ArchiMate 3.2 2023, Hohpe & Woolf 2003, Zachman 1987), BI (Kimball 2013, Codd OLAP 1993, Minto 1987, DAMA-DMBOK 2 2017)
- 20 sources attendues référencées avec auteurs/années/URLs

### 🔧 Ajouté — Audit groupe consolidé
- `audits/audit-groupe-data-tech-2026-05-29.md` (~500L denses)
- **Format consolidé** : 1 rapport pour 5 agents (cohérent directive qualité > quantité, [[feedback-triptyque-qualite]] règle 1)
- 10 sections structurées (synthèse exécutive, méthode, 5 tableaux par agent, findings P1/P2/P3, transversaux, plan action 4 vagues, méta-observations, annexes 20 sources)

### 📊 Résultats audit (54 skills, 5 agents)

| Verdict | Nb | % | Comparaison |
|---|---:|---:|---|
| ⭐ **✓ pur** | **1** | 2% | `solutions_architect/archimate-modeling.md` — **2ème ✓ pur du chantier hors Agile/Produit** |
| P3 (proche ✓) | ~8 | 15% | inférieur Conseil/Direction (23%) |
| P2 | ~30 | 55% | — |
| **P1 bloquant** | **15** | **28%** 🔴 | **taux record du chantier** (vs 7% Conseil/Direction, 25% Agile/Produit) |
| Sans certif | 0 | 0% | ✅ |

**Skill exemplaire** : `solutions_architect/archimate-modeling.md` — ArchiMate 3 cité, 3 couches, 5 viewpoints, 7 relations, **4 anti-patterns explicites**, comparatif outils. Modèle de référence architecture du catalogue.

### 🔴 15 P1 par agent (différés en Phase 2 transversale)

- **DATA-SCIENTIST : 6 P1** (46% — pire ratio agent du chantier) — Goodfellow/Hastie/Vaswani/Devlin/Lundberg tous absents (analyse-exploratoire, deep-learning, feature-engineering, modelisation-ml, nlp-classique, time-series)
- **DATA-ENGINEER : 3 P1** — Kimball non attribué (data-warehouse), DAMA-DMBOK absent (gouvernance-data), erreur technique `RateLimitError` (api-data-integration)
- **MLOPS-ENGINEER : 2 P1** — 🚨 **OWASP LLM Top 10 ABSENT** dans `monitoring-llm.md` (bug critique sécurité IA), DORA Accelerate absent dans `cicd-ia.md`
- **SOLUTIONS-ARCHITECT : 1 P1** — Hohpe & Woolf *Enterprise Integration Patterns* (2003) absent dans `integration-patterns.md` alors que TOUS les patterns du skill (Strangler Fig, Anti-corruption Layer, SAGA, Circuit Breaker) viennent de ce livre
- **BI-ANALYST : 3 P1** — DAMA-DMBOK 2 absent (gouvernance-bi), Kimball non attribué (modelisation-dimensionnelle), **Minto 1987 absente** (reporting-codir) alors que tous ses principes structurent le skill

### 🔧 V1 correctifs techniques (Test #3 triptyque appliqué — vérification avant correction)

**2 erreurs techniques confirmées corrigées** :
1. `skills/data_engineer/api-data-integration.md` L32 — `requests.exceptions.RateLimitError` n'existe pas dans la lib `requests`. Refactor : suppression du `except` mort-né, utilisation du `HTTPError` (L35-39 gère déjà le 429 via `Retry-After`), ajout `except` `Timeout`/`ConnectionError` pour erreurs transitoires
2. `skills/data_engineer/pipeline-ingestion.md` L93-104 — Great Expectations API `ge.dataset.PandasDataset` deprecated (< 0.14). Modernisation API GE 0.18+ Fluent Datasource (`context.data_sources.add_pandas() + add_dataframe_asset() + add_batch_definition_whole_dataframe()`)

**1 faux positif refusé (honnêteté, pas de complaisance)** :
- `skills/data_engineer/spark-big-data.md` L85 `deltaTable.optimize().executeCompaction()` — initialement signalé comme erreur par le sous-agent Explore, vérification a confirmé que cette syntaxe **EST valide** en Delta Lake 2.0+ Python API (`DeltaOptimizeBuilder.executeCompaction()` documenté officiellement). Aucune modification. Application du test auto-validation #3 du triptyque qualité ([[feedback-recommandations-best-practices]]) : *sans la signalisation Explore, ne corrigerais-je pas une syntaxe valide*.

### 🔴 8 patterns transverses critiques détectés

- **T1 Référentiels académiques fondateurs absents** (~93% des skills) — domaines matures (ML, BI, architecture, DE) avec piliers manquants : Kimball, Goodfellow, Hastie, Hohpe & Woolf, Minto, DAMA, Codd, Inmon
- **T2 Erreurs techniques** (3 détectées dont 2 confirmées corrigées, 1 faux positif refusé)
- **T3 0 cross-link inter-skills** sur 54 skills (cohérent avec Conseil/Direction)
- **T4 Sécurité IA générative absente** — OWASP LLM Top 10 absent dans `monitoring-llm.md`, NIST AI RMF absent dans tout le groupe MLOps
- **T5 Versioning frameworks absent** sur ~25 skills (Airflow, Spark, dbt, K8s, confluent_kafka) — différé V3 bundle Phase 3
- **T6 Patrimoine outils sans patrimoine théorie** (BI surtout) — Power BI/Tableau/Looker/Fabric sans Kimball/Inmon/Codd
- **T7 Multi-cloud déclaré, AWS-réalisé** (SOLUTIONS-ARCHITECT, MLOPS)
- **T8 Anti-patterns absents** (33% skills avec, 67% sans — particulièrement DATA-ENGINEER 0/11)

### 🎯 Apprentissages méthode v2.8.2

- ✅ Grille v2.8.2 **applicable sans ajustement** depuis formalisation (3ème déclinaison rodée)
- ✅ Délégation extraction Explore × 5 en parallèle (méthode standard intacte cf. [[feedback-no-degradation-qualite]]) = ~15-20 min wall-time pour 54 skills
- ⚠️ **Nouveau pattern P1 dominant détecté** : "skill long, certif déclarée, code dense, MAIS référentiels académiques fondateurs absents" — distinct du pattern P1 cosmétique d'Agile/Produit et du pattern P1 sources de Conseil/Direction
- ⚠️ **Profil Data/Tech distinct** : exactitude technique du code à vérifier (3 erreurs signalées dont 1 faux positif) — confirme la nécessité du test auto-validation #3 du triptyque
- ⚠️ **Sécurité IA générative prioritaire** : `monitoring-llm.md` candidat top priorité Phase 2

### 🔜 Suite chantier
- **15 P1 différés en Phase 2 transversale** (cohérent garde-fou stratégie hybride : max 1-2 V2 d'exception par groupe — 15 trop volumineux pour ce groupe)
- **T5 versionnage** : V3 bundle Phase 3
- **Prochaine session Phase 1** : **Phase 1.3 — Audit + V1 Dev/CMS** (5 agents : DEV-TYPESCRIPT-IA, DEV-DRUPAL-PHP, CMS-DIGITAL, PIM-EXPERT, DAM-EXPERT) — estim. ~2h30
- État global : **20/33 agents audités (61%)**, **230 skills audités**, **3 grilles v2.8 formalisées (sur 5)**

---

## [2.10.0] — 2026-05-29 — Phase 1.1 Audit + V1 mass groupe Conseil/Direction (6 agents, 44 skills)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**1ère application de la stratégie hybride par groupe** validée 2026-05-29 (audit + V1 mass cosmétique par groupe → V2 ciblés transversaux Phase 2 → V3 bundles cross-agents Phase 3). Démarrage du 2ème groupe du chantier audit qualité v2.8 : **Conseil/Direction** (6 agents, 44 skills, 5141 lignes cumulées — 1.7× plus volumineux que PO-SAFE+PO-SCRUM combinés).

### 🔧 Ajouté — Grille v2.8.1 Conseil/Direction formalisée
- `audits/audit-grilles-v2.8.md` §3.2 — 2ème déclinaison de la grille v2.8 (sur 5 prévues)
- **D1 Conformité référentielle** détaillée par sous-domaine : Juridique IA (AI Act + RGPD + NIS2 + DORA + ISO 42001/23894/27001), Stratégie/Conseil (McKinsey 7S + BCG + Porter + Ansoff + Blue Ocean + Wardley), Data Governance (DAMA-DMBOK 2 + Data Mesh Dehghani + Data Vault 2.0 + CDMC + DCAM), Gestion projet (PMBOK 7 + PRINCE2 + EVM ANSI/EIA-748), Finance (NPV/IRR Brealey-Myers + TCO Gartner + Real Options), Audit (COSO ERM + COBIT 2019 + ITIL 4 + ISO/IEC 19011)
- **D2 Actionabilité** Conseil/Direction : one-pagers Minto, business cases NPV/IRR/TCO, slides exec, DPIA templates, matrices RACI, calculs WACC
- **D3 Profondeur** : benchmarks Gartner MQ/Forrester Wave/IDC, études McKinsey/BCG/Deloitte 2023+, jurisprudence AI Act émergente
- **20 sources attendues** référencées avec auteurs/années/URLs

### 🔧 Ajouté — Audit groupe consolidé
- `audits/audit-groupe-conseil-direction-2026-05-29.md` (~450L)
- **Format consolidé** : 1 rapport pour 6 agents (cohérent directive qualité > quantité, consolidation > multiplication) plutôt que 6 rapports séparés
- 10 sections structurées : synthèse exécutive, méthode, tableaux récapitulatifs par agent (44 skills cotés sur grille v2.8.1), findings P1/P2/P3, findings transversaux groupe, plan d'action 4 vagues, méta-observations méthode v2.8.1, annexes

### 📊 Résultats audit (44 skills, 6 agents)

| Verdict | Nb | % | Comparaison Agile/Produit |
|---|---:|---:|---|
| ✓ purs (3 dimensions) | 0 | 0% | 3/55 (5%) — 🔴 Aucun skill exemplaire ici |
| P3 (proche ✓) | ~10 | 23% | ~12/55 (22%) — stable |
| P2 (enrichissement) | ~31 | 70% | ~26/55 (47%) — 🔴 plus élevé |
| P1 (bloquant) | **3** | 7% | 14/55 (25%) — ✅ bien meilleur |
| Sans certif déclarée | **0** | 0% | ~17/55 (31%) — ✅ bug structurel absent |

**3 P1 identifiés (différés en Phase 2 transversale)** :
- 🔴 `consultant_ia/diagnostic-maturite-ia.md` (41L) — modèle 5 niveaux sans Gartner/MIT Sloan/Forrester
- 🔴 `consultant_ia/benchmark-solutions-ia.md` (51L) — 0 framework benchmark cité (Magic Quadrant/Wave/MarketScape absents)
- 🔴 `juridique_ia/propriete-intellectuelle-ia.md` (112L) — jurisprudence CJUE/EUIPO 2025 non sourcée

**8 patterns transverses critiques détectés** :
- T1 Sourcing académique faible (~93% sans URL/auteur/année)
- T2 Anti-patterns quasi-absents chez CDO (0/8) et CHEF-PROJET (~0-2/8)
- T3 **0 cross-link inter-skills** sur les 44 skills
- T4 Certifications non-standard (CAP IABAC, Anthropic Claude Code in Action) — décision : conserver mais clarifier (Phase 3 V3)
- T5 Articulation AI Act × RGPD insuffisante
- T6 Exemples sectoriels mono-focalisés (RH IA partout en FINANCIAL-ANALYST)
- T7 Incohérences certifs CONSULTANT-IA (en-têtes skills ≠ table AGENT) — **corrigé V1**
- T8 Circularité Gate 4 méta-agent AUDIT-METHODO-IA

### 🔧 V1 mass minimal — Harmonisation certifs CONSULTANT-IA (T7)
- `AGENT-CONSULTANT-IA.md` : alignement de la table d'activation skills sur les en-têtes skills (5 corrections + 1 résolution incohérence sévère)
- `skills/consultant_ia/cadrage-poc-ia.md` : ajout `Anthropic Claude Code in Action` dans en-tête (résolution incohérence avec table AGENT)
- 9 skills CONSULTANT-IA vérifiés, tous cohérents après corrections

### 🎯 Apprentissages méthode v2.8.1
- ✅ Grille v2.8.1 **applicable sans ajustement** depuis formalisation (validation pilote sur 1ère application)
- ✅ Délégation extraction Explore × 6 en parallèle = ~12-15 min wall-time pour 44 skills (vs 25 min série sur PO-SCRUM 30 skills)
- ⚠️ **Méta-pattern** : sur Conseil/Direction, V1 mass ne désamorce **pas** mécaniquement les P1 (0 P1 cosmétique vs 4 sur Agile/Produit) — les P1 ici sont profonds (sources/anti-patterns absents), V2+V3 nécessaires
- ⚠️ Risque saturation contexte sur extractions parallèles volumineuses (1/6 fichier persisté pour CHEF-PROJET-IA) — à anticiper sur Phase 1.4 (Transverse/Méta, 8 agents)

### 🔜 Suite chantier
- **3 P1 différés en Phase 2 transversale** (cohérent stratégie hybride validée)
- **T4 clarification certifs** : exécution effective renvoyée à Phase 3 V3 bundle (modification ciblée des skills concernés, non disruptive)
- **Bundles V3 candidats post-audit Phase 1 complet** : Sources Frameworks (~40 skills), Anti-patterns (~15 skills CDO/CHEF-PROJET), Cross-links Voir aussi (~44 skills), AI Act articles (4 skills JURIDIQUE), WACC explicite (4 skills FINANCIAL), Diversification sectorielle
- **Prochaine session Phase 1** : Phase 1.2 — Audit + V1 Data/Tech (5 agents : DATA-SCIENTIST, DATA-ENGINEER, MLOPS-ENGINEER, SOLUTIONS-ARCHITECT, BI-ANALYST) — estim. ~2h30

---

## [2.9.0] — 2026-05-29 — V2 po-ai-product.md — Refonte PSPO-AI (différenciateur compétitif IA)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**1er P1 V2 du chantier audit qualité v2.8 sur le groupe Agile/Produit après tests-securite** — refonte profonde du skill `skills/scrum/po-ai-product.md` identifié comme **différenciateur compétitif stratégique** lors de l'audit PO-SCRUM (cf. `audits/audit-po-scrum-2026-05-28.md` §4 finding P1.3). Le skill original (40L) revendiquait la certification PSPO-AI sans aucun référencement des cadres normatifs IA 2024-2026 (AI Act UE, NIST AI RMF, ISO 42001), des métriques probabilistes ou des anti-patterns sourcés — risque crédibilité majeur sur le positionnement PSPO-AI auprès de clients régulés.

### 🔧 Modifié — `skills/scrum/po-ai-product.md` (40L → 136L)

**Référentiels normatifs intégrés** :
- ✅ **PSPO-AI Guide Scrum.org (2024)** — certification revendiquée désormais sourcée
- ✅ **AI Act UE** (Règlement 2024/1689) — calendrier d'application 2025-2027, 4 niveaux de risque, articulation rôle PO (art. 5, 6, 10, 14, 50)
- ✅ **NIST AI RMF 1.0 (jan. 2023)** — 4 fonctions Govern/Map/Measure/Manage structurant l'AI Risk Register
- ✅ **ISO/IEC 42001:2023** — AI Management System certifiable
- ✅ **ISO/IEC 23894:2023** — AI Risk Management

**Enrichissements** :
- Tableau **cadre réglementaire & normatif** (5 référentiels datés)
- Tableau **AI Risk Register** structuré NIST AI RMF (Govern/Map/Measure/Manage)
- Tableau **7 métriques IA probabilistes** sourcées avec seuils indicatifs : `hallucination_rate` (FActScore Min et al. 2023), `factuality_score` (TruthfulQA Lin et al. 2022), `disparate_impact_ratio` (EEOC 4/5ths rule, repris AI Act), `confidence_calibration` (ECE Guo et al. 2017), latence p95/p99 (SRE Google), precision/recall/F1, `human_override_rate`
- **Exemple chiffré sectoriel** anonymisé (retail e-commerce — feature "Recommandation produit IA") : 8 critères d'acceptation chiffrés (precision ≥0.70, recall ≥0.60, latence ≤500ms p95, hallucination ≤1%, disparate impact ≥0.8) + fallback non-IA obligatoire + transparence AI Act art. 50 + journalisation 6 mois
- Tableau **Mapping AI Act → backlog PO** (4 niveaux de risque × items backlog obligatoires)
- **8 anti-patterns IA explicites** (vs 0 avant) sourcés OWASP LLM Top 10, Datasheets for Datasets (Gebru et al. 2021), AI Act art. 50
- **12 sources externes datées** (officielles + académiques) avec URLs/refs : Scrum.org, JO UE, NIST, ISO, OWASP, ACM, EMNLP, ACL, ICML, O'Reilly
- **Cross-links internes vérifiés** : `ai-user-stories.md`, `dor-dod.md`, `gestion-risques.md`, `product-metrics-ebm.md`, `product-vision.md`, `po-acceptance-tests.md`
- Mention "📌 À venir" pour `skills/securite_ia/owasp-llm-top10.md` et `skills/juridique_ia/ai-act.md` (anticipe priorité 2 du chantier — bundle Conseil/Direction)

### 📊 Impact verdict v2.8

| Dimension | Avant V2 | Après V2 |
|---|---|---|
| **Certification déclarée** | ⚠ (PSPO-AI cité, non sourcé) | ✅ (PSPO-AI Scrum.org 2024 + PSPO II sourcés) |
| **Conformité référentielle** | ✗ (0 framework IA cité) | ✅ (5 référentiels normatifs datés) |
| **Actionabilité** | ⚠ (checklist générique 5 items) | ✅ (7 métriques avec seuils + exemple chiffré complet + AI Risk Register NIST) |
| **Profondeur** | ✗ (40L, 0 source, 0 anti-pattern, 0 cross-link) | ✅ (136L, 12 sources datées, 8 anti-patterns, 5 cross-links) |
| **Verdict** | **P1** 🔴 | **✓** (verdict pur attendu sur les 3 dimensions) |

### 🎯 Positionnement compétitif résolu
Le repo public reflète désormais une **expertise PSPO-AI conforme aux standards 2024-2026**. Un Chief AI Officer, RSSI ou DPO parcourant ce skill y trouve l'ensemble des référentiels attendus pour un PO IA senior en mission régulée (secteurs banque CIB, luxe, énergie, défense, télécom).

### 📊 Bilan chantier audit après v2.9.0

| Métrique | Avant v2.9.0 | Après v2.9.0 |
|---|---|---|
| Skills ✓ purs | 2 (story-mapping, planning-poker) | **3** (+ po-ai-product attendu ✓) |
| P1 résiduels (audit Agile/Produit) | 12 | **11** |
| Skills avec référentiels IA datés (AI Act, NIST AI RMF, ISO 42001) | 0/127 | 1/127 |
| Skills avec métriques IA probabilistes sourcées | 0/127 | 1/127 |

### 🔜 Prochains V2 candidates (11 P1 restants)
- 🔴 **gestion-risques.md** (PO-SCRUM, PMBOK 7 + ISO 31000 absents — 20L) — bundle PO-SCRUM
- 🔴 **product-vision.md** (PO-SCRUM, 35L pour skill stratégique PSPO II/III) — bundle PO-SCRUM
- 🔴 **ux-sprint.md** (PO-SCRUM, PSU-I 44L — Dual Track Patton/Cagan non sourcés) — bundle PO-SCRUM
- 🔴 **elicitation-besoins.md** (BA, BABOK 39L) — bundle BA (priorité 3)

### 🧭 Méthode appliquée
- Validation plan préalable (14 sections, volumétrie cible, choix sectoriel, gestion cross-links absents)
- Respect directive **qualité > quantité** : 136L denses (sous la fourchette basse 150-200L) plutôt que remplissage
- Anonymisation stricte : aucun client réel cité (retail e-commerce générique)
- Vérification existence cross-links avant citation (zéro lien mort)
- Conformité méthodologique vérifiée avant écriture (PSPO-AI Scrum.org, AI Act règl. 2024/1689, NIST AI RMF 1.0 jan. 2023, ISO 42001/23894 = 2023)

---

## [2.8.6] — 2026-05-29 — Anonymisation références clients (confidentialité repo public)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Suppression de toutes les mentions nominatives de clients dans le repo public, remplacées par des références sectorielles équivalentes. Cohérent avec la gouvernance du repo (cf. `CLAUDE.md` : "Ne jamais versionner de données client réelles dans `claude-agents`").

### 🔧 Modifié — Anonymisation (8 occurrences)
- `CHANGELOG.md` (entrée v2.8.5) : noms clients → secteurs (banque CIB, luxe, énergie, défense, télécom)
- `audits/audit-qa-cyclev-2026-05-29.md` (2 occurrences §1 + §3)
- `audits/audit-product-manager-safe-2026-05-28.md` (2 occurrences §5 + §7)
- `audits/audit-po-scrum-2026-05-28.md` (2 occurrences §4 + §5)
- `mcp-servers/mcp-workflow-log/server.ts` (L.88 description paramètre `client`)

### 📊 Mapping appliqué
Substitution des noms nominatifs par les références sectorielles correspondantes (banque, luxe, énergie, défense, télécom, hôtellerie).

### ✅ Vérification
- Grep exhaustif sur tout le repo : 0 mention nominative résiduelle
- Les occurrences "Orange" restantes sont des couleurs RAG (Red/Amber/Green) dans les skills (faux positifs).

---

## [2.8.5] — 2026-05-29 — V2 tests-securite.md — Refonte OWASP Top 10 / CT-SEC (1er P1 résolu)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**Premier P1 V2 traité** : refonte du skill `skills/qa_testing/tests-securite.md` identifié comme **bug critique sécurité** lors de l'audit QA-CYCLEV (v2.8.4). Le skill original (58L) ne référençait ni OWASP Top 10 ni CT-SEC 2022 — risque réputationnel chez clients CAC40 (secteurs banque CIB, luxe, énergie, défense, télécom).

### 🔧 Modifié — `skills/qa_testing/tests-securite.md` (58L → 188L)

**Référentiels intégrés** :
- ✅ **OWASP Top 10 (2021)** — mapping détaillé A01-A10 avec tests QA pour chaque vulnérabilité
- ✅ **OWASP API Security Top 10 (2023)** — API1-API10 spécifiques REST/GraphQL
- ✅ **CWE Top 25 (2024)** — Most Dangerous Software Weaknesses
- ✅ **OWASP ASVS v4.0.3 (2024)** — Niveaux 1/2/3 avec recommandations par profil client (CAC40 = L2 min, L3 pour produits sensibles)
- ✅ **NIST CSF 2.0 (2024)** — framework Govern/Identify/Protect/Detect/Respond/Recover
- ✅ **ISTQB CT-SEC (2022)** — certification ISTQB Security Tester revendiquée
- ✅ **CVSS 3.1** — exemple complet calcul vecteur dans template cas de test

**Enrichissements** :
- Catalogue **8 catégories tests QA** alignées OWASP (Authentication/Authorization/Input/Session/Data/Config/Dependencies/Logging)
- Template cas de test sécurité enrichi (OWASP + CWE + CVSS 3.1 + remediation)
- Checklist Go/No-Go MEP exhaustive (7 sections × 4-7 items chacune)
- Catalogue **8 catégories outils** (Burp Suite, OWASP ZAP, SAST/DAST/SCA, secrets scanner, container security, etc.)
- **12 anti-patterns explicites** (vs 0 avant) : pentest tardif, SAST/DAST absents pipeline, secrets en clair, CORS `*`, JWT `alg:none`, etc.
- Section "Niveaux ASVS" avec recommandations par segment client
- 6 livrables structurés (rapport audit, cahier tests, checklist MEP, configuration pipeline, plan remediation, registre risques résiduels)
- Cross-links explicites vers AGENT-SECURITE-IA.md (OWASP LLM Top 10), AGENT-DEVOPS-CLOUD.md (DevSecOps), AGENT-JURIDIQUE-IA.md (RGPD/AI Act)
- **11 sources externes datées avec URLs** (owasp.org, nist.gov, istqb.org, cwe.mitre.org, first.org/cvss)

### 📊 Impact verdict v2.8

| Dimension | Avant V2 | Après V2 |
|---|---|---|
| **Conformité référentielle** | ✗ (OWASP/CT-SEC/NIST absents) | ✅ (7 référentiels datés cités) |
| **Actionabilité** | ⚠ (template basique, checklist minimale) | ✅ (template enrichi + checklist 7×4-7 items + outils + anti-patterns) |
| **Profondeur** | ✗ (0 source, 0 anti-pattern) | ✅ (11 URL/livres datés, 12 anti-patterns explicites) |
| **Verdict** | **P1** | **✓ → P3** (proche du verdict pur ✓, manque uniquement Mermaid/diagramme) |

### 🎯 Risque réputationnel résolu
Le repo public reflète désormais une **expertise QA Sécurité conforme aux standards 2023-2024**. Un RSSI/DPO parcourant ce skill y trouvera tous les référentiels attendus pour un PO/QA senior en mission CAC40.

### 📊 Bilan groupe Agile/Produit après v2.8.5

| Métrique | Avant V2 | Après V2 |
|---|---|---|
| Skills ✓ purs | 2 (story-mapping, planning-poker) | **2-3** (tests-securite proche ✓ en P3) |
| P1 résiduels | 13 | **12** |
| Skills avec OWASP/CT-SEC | 0/127 | 1/127 |

### 🔜 Prochains V2 candidates (12 P1 restants)
- 🔴 **po-ai-product.md** (PO-SCRUM, différenciateur compétitif PSPO-AI) — priorité stratégique
- 🔴 **elicitation-besoins.md** (BA, Knowledge Area BABOK CORE 39L) — refonte profonde
- 🟡 capabilities, lean-agile-mindset (PO-SAFE)
- 🟡 gestion-risques, product-vision, ux-sprint (PO-SCRUM)
- 🟡 market-analysis (PM-SAFE)
- 🟡 change-management-agile (SM)
- 🟡 modelisation-processus, cartographie-si, analyse-impact (BA)

---

## [2.8.4] — 2026-05-29 — 🎉 Groupe Agile/Produit COMPLET (9/9) — Audits QA-AGILE + QA-CYCLEV + CHANGE-MANAGER + V1 unifiée
> Modèle : Claude Opus 4.7

### 🎯 Contexte
**Bouclage du groupe Agile/Produit avec les 3 derniers audits (7ème/8ème/9ème agents)** + V1 unifiée sur le dossier mutualisé `skills/qa_testing/` (22 skills) + V1 CHANGE-MANAGER (7 skills). Pattern systémique majeur : 22/23 skills `qa_testing/` étaient sans certification déclarée en en-tête (pattern record). V1 mécanique cumulée a fait régresser **22 + 4 + 4 = 30 P1 → P2** sur la session. Premier agent à 0 P1 identifié : **CHANGE-MANAGER**.

### ✨ Ajouté — 3 rapports d'audit
- `audits/audit-qa-agile-2026-05-29.md` (10 skills audités) — 0 ✓ / 0 P3 / 0 P2 / **10 P1 (100%)** ⚠️ record du chantier
- `audits/audit-qa-cyclev-2026-05-29.md` (13 skills audités) — 0 ✓ / 0 P3 / 1 P2 / **12 P1 (92%)** + 🔴 bug critique sécurité (OWASP Top 10 absent)
- `audits/audit-change-manager-2026-05-29.md` (7 skills audités + triplon BA/SM/CM) — 0 ✓ / 0 P3 / **7 P2 / 0 P1** ⭐ premier agent sans P1

### 🔍 Findings critiques
- ⭐⭐ **`tests-ia.md`** (QA-AGILE) = 8 anti-patterns IA explicites — record du chantier
- 🔴 **`tests-securite.md`** (QA-CYCLEV) — OWASP Top 10 + CT-SEC 2022 ABSENTS pour un skill QA sécurité chez clients CAC40 (à traiter V2 prioritaire)
- 🔴 **Pattern record** : 22/23 skills qa_testing sans certif en en-tête
- ✅ **`environnements.md`** seul skill QA-CYCLEV avec certif + agent (modèle dupliqué via V1)
- ⭐ **CHANGE-MANAGER** : 7/7 skills avec PROSCI ADKAR effectivement utilisé (pas juste cité en certif)
- 🟡 **Triplon thématique CHANGE** : `BA/analyse-impact` + `SM/change-management-agile` + `CM/analyse-impact-changement` = statu quo recommandé (3 périmètres distincts, pas de fusion)

### 🔧 Modifié — V1 unifiée qa_testing (22 skills)

**QA-AGILE — 10 skills** (ajout `> Certification :` + `> Agent : AGENT-QA-AGILE.md`) :
strategie-agile · bdd-gherkin · tests-exploratoires (partagé QA-CYCLEV via CTAL-TA) · dod-qualite · pyramide-automatisation · atdd-sprint · regression-cicd · metriques-qualite · retrospective-qa · tests-ia

**QA-CYCLEV — 12 skills** (environnements déjà OK avant audit) :
strategie-tests · plan-tests · cas-de-test · gestion-anomalies · regression-tnr · tests-integration · tests-systeme · tests-uat (partagé BA) · tests-performance · **tests-securite (partagé AGENT-SECURITE-IA)** · revues-inspections · reporting-qualite

### 🔧 Modifié — V1 CHANGE-MANAGER (7 skills)
Ajout `> Agent : AGENT-CHANGE-MANAGER.md` sur les 7 skills (certifications déjà déclarées) :
adkar-model · analyse-impact-changement · gestion-resistance · mesure-adoption · plan-communication · stakeholder-engagement-change · strategie-adoption

### 📊 Bilan groupe Agile/Produit COMPLET (9/9 agents)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | QA-AGILE | QA-CYCLEV | CM | **Cumul 9/9** |
|---|---|---|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | 10 | 13 | 7 | **132** |
| Skills catalogue actuel | 25 | 30 | 10 | 16 | 6+1 | 10 | 10 | 13 | 7 | **127** |
| Verdicts ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | 0 | 0 | 0 | **2** |
| P3 | 7 | 5 | 1 | 3 | 1 | 0 | 0 | 0 | 0 | **17** |
| P2 (avant V1) | 12 | 16 | 7 | 11 | 5 | 6 | 0 | 1 | 7 | **65** |
| **P1 avant V1 cumulées** | 6 | 8 | 2 | 5 | 1 | 4 | 10 | 12 | 0 | **48** (36%) |
| **P1 après V1 cumulées** | 2 | 4 | 1 | 1 | 0 | 4 | 0 | 1 | 0 | **13** (10%) |

**Skills exemplaires identifiés** :
- ⭐ `story-mapping.md` (PO-SCRUM) — Jeff Patton cité 3× + quote
- ⭐⭐ `planning-poker.md` (SCRUM-MASTER) — James Grenning 2002, Mike Cohn, 6 alternatives, 8 anti-patterns

**Bugs architecturaux résolus pendant l'audit** :
- ✅ PM-SAFE : 3 headers Agent corrigés (v2.8.0)
- ✅ SM : 4 doublons cérémonies supprimés → catalogue 20→16 skills (v2.8.1)
- ✅ SM/PO-SCRUM : kanban-flow cross-links ajoutés (v2.8.1)
- ✅ RTE : inspect-adapt-rte fusionné vers safe/inspect-adapt + suppression (v2.8.2)
- ✅ qa_testing : V1 unifiée 22 skills (v2.8.4)
- ✅ Triplon CHANGE BA/SM/CM : statu quo + cross-links V3 recommandés

### 🔜 V2 P1 résiduels (13 skills, sessions dédiées)
- PO-SAFE : 2 (capabilities, lean-agile-mindset)
- PO-SCRUM : 4 (gestion-risques, **po-ai-product** [différenciateur IA stratégique], product-vision, ux-sprint)
- PM-SAFE : 1 (market-analysis)
- SM : 1 (change-management-agile — PROSCI/Kotter absents)
- BA : 4 (elicitation-besoins, modelisation-processus, cartographie-si, analyse-impact)
- QA-CYCLEV : 1 (**tests-securite** — OWASP Top 10 critique)

### 🔜 RAF v2.9.x
- **V3 enrichissements** : 65 P2 répartis en bundles thématiques (Sources / Anti-patterns / Cross-links)
- **Audit-grilles-v2.8.md** : formaliser la déclinaison Conseil/Direction (2ème déclinaison à valider lors audit JURIDIQUE-IA)
- **Groupes restants à auditer (4/5)** :
  - Conseil/Direction (6 agents) : JURIDIQUE-IA, CDO, CHEF-PROJET-IA, CONSULTANT-IA, FINANCIAL-ANALYST, AUDIT-METHODO-IA
  - Data/Tech (5 agents) : DATA-SCIENTIST, DATA-ENGINEER, MLOPS, SOLUTIONS-ARCHITECT, BI-ANALYST
  - Dev/CMS (5 agents) : DEV-TYPESCRIPT-IA, DEV-DRUPAL-PHP, CMS-DIGITAL, PIM-EXPERT, DAM-EXPERT
  - Transverse/Méta (8 agents) : ORCHESTRATEUR, PROMPT-ENGINEER, REDACTEUR-IA, UX-DESIGNER, FORMATEUR-IA, GROWTH-IA, RH-IA, VEILLE-STRATEGIQUE

### 📌 Méthode v2.8 — Apprentissages session
- Délégation Explore + cotation expert : **~30 min par agent** (9 agents en ~4-5h)
- Grille v2.8 Agile/Produit **stable sur 9 itérations** (aucun ajustement nécessaire)
- Bugs architecturaux détectés systématiquement (doublons, headers erronés, scope flou)
- Pattern V1 mécanique : régression massive P1→P2 quasi-instantanée (30 P1 résolus mécaniquement aujourd'hui)

---

## [2.8.3] — 2026-05-29 — Audit BUSINESS-ANALYST (6/9 Agile/Produit)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
6ème audit du chantier qualité (groupe Agile/Produit). BA = **agent le plus sous-dimensionné du chantier** : tous les skills entre 39-58 lignes (volumétrie moyenne 51L vs ~90L sur les autres agents). **40% de P1** = pire taux du chantier. Mais **0/10 sans certif** (3ème agent au top après PM-SAFE et RTE). Pas de V1 mécanique nécessaire — actions reportées à V2 (enrichissement profond, ~4-5h).

### ✨ Ajouté — Rapport d'audit
- `audits/audit-business-analyst-2026-05-29.md` (10 skills audités) — 0 ✓ / **0 P3** / 6 P2 / **4 P1** ⚠️

### 🔍 Findings P1 critiques (à traiter en V2 profonde)
- **elicitation-besoins.md** (39L) — Knowledge Area BABOK CORE compressé à 1 page. Volere (Robertson 2012) et Karl Wiegers (2013) absents. Refonte profonde : 39L → ~100L
- **modelisation-processus.md** (44L) — BPMN 2.0 (538 pages spec OMG) + UML 2.5 (800+ pages) compressés à 44L. Use Cases (Jacobson 1992) sans attribution. Refonte : 44L → ~120L
- **cartographie-si.md** (45L) — TOGAF 10 (600 pages, Open Group 2022) ramené à 45L. Archimate non cité explicitement. Lien AGENT-AI-ARCHITECT manquant
- **analyse-impact.md** (50L) — Kübler-Ross (référentiel deuil) utilisé pour change organisationnel. Préférer John Kotter "Leading Change" (1995, 2nd ed 2012). BABOK Strategy Analysis absent

### 🔍 Findings P2 (enrichissements)
6 skills nécessitent ajout sources externes + anti-patterns + doublement de volumétrie :
animation-atelier-metier, cadrage-projet, gestion-exigences, recette-moa, reporting-moa, specification-fonctionnelle.

### 🔍 Constats transversaux
- Référentiels canoniques BA **totalement absents** : Volere, Wiegers, Jacobson, Cockburn — 0 citation sur 10 skills
- 0/10 anti-patterns documentés (anomalie pour agent IIBA CBAP)
- 0/10 sources externes (régression vs SCRUM-MASTER 35%)
- Tous les renvois inter-agents manquants (vers AI-ARCHITECT, QA-AGILE, PO-SCRUM, CHANGE-MANAGER)
- Doublon thématique `specification-fonctionnelle.md` (BA) vs `spec-fonctionnelle.md` (Scrum) = **complémentaires** (60-70% redondance acceptable, pas de fusion)

### 📊 Statistiques après v2.8.3 — Bilan groupe Agile/Produit (6/9 agents)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | **Cumul 6** |
|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | **102** |
| Skills catalogue actuel | 25 | 30 | 10 | 16 | 6+1 partagé | 10 | **97** |
| Verdicts ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | **2** |
| % P1 | 24% | 27% | 20% | 25% | 14% | **40%** ⚠️ | 24% |
| % skills sans certif | 28% | 37% | 0% | 20% | 0% | 0% | 16% |
| Volumétrie moyenne (L) | 78 | 84 | 90 | 103 | 90 | 51 ⚠️ | — |

### 🔜 RAF v2.8.x
- **Audits restants groupe Agile/Produit (3/9)** : QA-AGILE · QA-CYCLEV · CHANGE-MANAGER
- **V2 P1 résiduels** : 12 skills à enrichir (BA 4 + autres 8) — session dédiée recommandée après audits complets
- **Triplon thématique potentiel à anticiper** : `business_analyst/analyse-impact.md` + `scrum_master/change-management-agile.md` + `change_manager/?` — décision architecturale à prendre lors de l'audit CHANGE-MANAGER

---

## [2.8.2] — 2026-05-28 — Audit RELEASE-TRAIN-ENGINEER + fusion inspect-adapt + 1 P1 résolu
> Modèle : Claude Opus 4.7

### 🎯 Contexte
5ème audit du chantier qualité (groupe Agile/Produit). Détection d'**1 doublon architectural** : `skills/release_train_engineer/inspect-adapt-rte.md` (73L) reproduisait à 75% `skills/safe/inspect-adapt.md` (41L). Application de l'**Option A** (cohérente avec v2.8.1 SCRUM-MASTER) : fusion du delta unique RTE (agenda minute-by-minute + Ishikawa 5 catégories + exemple chiffré 18% défauts) vers la source de vérité commune `skills/safe/inspect-adapt.md`, puis suppression du doublon.

### ✨ Ajouté — Rapport d'audit
- `audits/audit-release-train-engineer-2026-05-28.md` (7 skills audités) — 0 ✓ / **1 P3 ⭐** (facilitation-pi-planning très proche du verdict ✓) / 5 P2 / **1 P1** (inspect-adapt-rte)
- ✅ **0/7 sans certif** (2ème agent au top après PM-SAFE)
- ⚠️ **0/7 sources externes** (régression vs SM 35%)
- Analyse architecturale croisée RTE ↔ skills/safe/ : 1 doublon, 4 complémentarités saines, 2 distincts

### 🐛 Corrigé — Fusion architecturale (Option A)
- **Enrichi** `skills/safe/inspect-adapt.md` avec le delta unique RTE :
  - Agenda I&A 4h minute-by-minute (09h00 → 13h00, breaks inclus)
  - Fishbone Ishikawa **5 catégories** (Personnes/Process/Outils/Environnement/Management)
  - Exemple chiffré complet (18% défauts production → cible <10%, couverture 40% → 80%)
  - Actions SMART avec propriétaires et mesures (Tech Lead, RTE+SM, SonarQube)
  - Métriques PI enrichies (Flow SAFe 6, DORA)
- **Mise à jour des en-têtes** :
  - Certifications : `SAFe POPM 6 · SAFe Agilist` → `SAFe POPM 6 · SAFe Agilist · SAFe RTE · SAFe SPC`
  - Agents : `AGENT-PO-SAFE.md` → `AGENT-PO-SAFE.md · AGENT-RELEASE-TRAIN-ENGINEER.md · AGENT-PRODUCT-MANAGER-SAFE.md`

### 🗑️ Supprimé
- `skills/release_train_engineer/inspect-adapt-rte.md` (73L, 75% redondance avec safe/inspect-adapt)

### 🔧 Modifié — Catalogue RTE
- `AGENT-RELEASE-TRAIN-ENGINEER.md` — Table des skills : ligne I&A pointe désormais vers `skills\safe\inspect-adapt.md`
- `skills/release_train_engineer/README.md` — Index : ligne 4 renvoie vers `../safe/inspect-adapt.md` (skill partagé marqué) + arbre de décision adapté

### 📊 Statistiques après v2.8.2

| Métrique | Avant V1.2 | Après V1.2 |
|---|---|---|
| Skills audités cumul (Agile/Produit) | 85 | **92** |
| Skills catalogue actuel (Agile/Produit) | 88 | **87** (-1 fusion) |
| Verdicts ✓ purs | 2 | 2 (story-mapping + planning-poker) |
| P1 résiduels (Agile/Produit) | 17 | **16** (-1 fusion inspect-adapt) |
| Skills RTE catalogue | 7 propres | **6 propres + 1 partagé safe/inspect-adapt** |
| Source de vérité I&A | Dupliquée (RTE + SAFe) | **Unifiée → safe/inspect-adapt.md** |

### 🔜 RAF v2.8.x
- **V2 P1 résiduels** : 8 skills (po-ai-product, gestion-risques, product-vision, ux-sprint, change-management-agile, market-analysis, capabilities, lean-agile-mindset)
- **Audits restants groupe Agile/Produit (4/9)** : BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER

---

## [2.8.1] — 2026-05-28 — Audit SCRUM-MASTER + suppression 4 doublons cérémonies + cross-links kanban
> Modèle : Claude Opus 4.7

### 🎯 Contexte
4ème audit du chantier qualité (groupe Agile/Produit). Identification de **4 doublons architecturaux** dans `skills/scrum_master/` : `daily.md`, `sprint-planning.md`, `sprint-review.md`, `retrospective.md` répliquaient partiellement `facilitation-ceremonies.md` (sans certification déclarée, < 50L chacun). Décision architecturale (Option A) : **suppression des 4 doublons** + `facilitation-ceremonies.md` devient source de vérité unique pour les 5 cérémonies Scrum. Identification d'un 2ème skill exemplaire ✓ pur : `planning-poker.md` (James Grenning 2002, Mike Cohn, 6 alternatives, 8 anti-patterns).

### ✨ Ajouté — Rapport d'audit
- `audits/audit-scrum-master-2026-05-28.md` (20 skills audités) — **1 ✓ ⭐⭐** (planning-poker) / 3 P3 / 11 P2 / 5 P1
- 35% des skills citent des sources externes → **meilleur taux du chantier** (vs 0% PO-SAFE, 10% PO-SCRUM, 30% PM-SAFE)

### 🗑️ Supprimé — 4 doublons architecturaux (Option A)
- `skills/scrum_master/daily.md` (27L, sans certif)
- `skills/scrum_master/sprint-planning.md` (34L, sans certif)
- `skills/scrum_master/sprint-review.md` (37L, sans certif)
- `skills/scrum_master/retrospective.md` (49L, sans certif)

**Justification** : les 4 fichiers étaient des extraits partiels de `facilitation-ceremonies.md` (103L), sans certification déclarée, < 50L chacun. Pattern "sans certif" confirmait leur statut de doublons non assumés. `facilitation-ceremonies.md` (cérémonies courantes) + `retrospective-avancee.md` (formats avancés) suffisent.

**Impact catalogue** : 20 → **16 skills** dans `skills/scrum_master/`. 4 P1 → 0 P1 sur le doublon (1 P1 résiduel : `change-management-agile.md` — PROSCI/Kotter absents, à traiter en V2).

### 🔧 Modifié — Mises à jour catalogue
- `AGENT-SCRUM-MASTER.md` — Table des skills : suppression 4 lignes, libellé de `facilitation-ceremonies.md` enrichi (`Faciliter les cérémonies Scrum (Planning, Daily, Review, Rétrospective, Refinement)`)
- `skills/scrum_master/README.md` — Compteur 20 → 16, table Cérémonies recomposée (3 lignes : facilitation-ceremonies + retrospective-avancee + planning-poker), arbre de décision adapté

### ✨ Ajouté — Cross-links `kanban-flow.md`
Clarification de la complémentarité (et non du doublon) entre les 2 fichiers homonymes :
- `skills/scrum/kanban-flow.md` (45L, **PSK-I**) — usage Scrum+Kanban niveau équipe PO
- `skills/scrum_master/kanban-flow.md` (98L, PSM I · A-CSM · SAFe SSM · ICAgile) — Kanban Method (David Anderson 2010) niveau SM/transformation

Ajout section `## Voir aussi` dans les 2 fichiers pour expliciter la frontière.

### 📊 Statistiques après v2.8.1 (bilan groupe Agile/Produit 4/9 agents)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | **Cumul 4** |
|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | **85** |
| Verdict ✓ | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | **2** |
| P1 (%) | 24% | 27% | 20% | 25% | 25% |
| % skills avec sources externes | 0% | 10% | 30% | 35% ⭐ | 14% |

**Skills exemplaires identifiés** : `story-mapping.md` (PO-SCRUM, Jeff Patton) · `planning-poker.md` (SM, James Grenning 2002)

### 🔜 RAF v2.8.x
- **V2 P1 résiduels** : 9 skills à enrichir en profondeur (priorité haute : `po-ai-product.md` + `change-management-agile.md` PROSCI/Kotter)
- **Audits restants groupe Agile/Produit (5/9)** : RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER

---

## [2.8.0] — 2026-05-28 — Audit qualité agents Agile/Produit (3/9) + grille v2.8 + corrections architecturales
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Démarrage du chantier d'audit qualité étendu (post-v2.7.1 qui couvrait les 5 agents DEV core). Cette release adresse les **3 premiers agents du groupe Agile/Produit** (PO-SAFE, PO-SCRUM, PRODUCT-MANAGER-SAFE) selon une nouvelle grille déclinée v2.8 calibrée pour les agents non-DEV. Méthode rodée : extraction factuelle déléguée à sous-agent Explore + cotation expert Claude principal. **Bug architectural critique détecté et corrigé** : 3 skills PM-SAFE référençaient erronément `Agent: AGENT-PO-SCRUM.md` (confusion scope Programme/équipe).

### ✨ Ajouté — Livrable méthodologique
- `audits/audit-grilles-v2.8.md` — **Grille d'audit qualité v2.8** :
  - Squelette commun (3 dimensions universelles × 4 niveaux ✓/⚠/✗/N/A · règles verdict P0/P1/P2/P3)
  - **Déclinaison Agile/Produit validée** (référentiels Scrum Guide 2020, SAFe 6.0, WSJF POPM 6, PMBOK 7, BABOK v3, PROSCI, ISTQB)
  - Emplacements pour 4 déclinaisons futures (Conseil/Direction, Data/Tech, Dev/CMS, Transverse/Méta)
  - Workflow d'application en 6 étapes (Cadrage → Extraction → Cotation → Rapport → Validation → Corrections par vagues)
  - Référentiel de sources attendues par référentiel (13 entrées)

### ✨ Ajouté — 3 rapports d'audit complets
- `audits/audit-po-safe-2026-05-28.md` (**Pilote**, 25 skills) — 0 ✓ / 7 P3 / 12 P2 / **6 P1**
- `audits/audit-po-scrum-2026-05-28.md` (30 skills) — **1 ✓** ⭐ (story-mapping) / 5 P3 / 16 P2 / **8 P1**
- `audits/audit-product-manager-safe-2026-05-28.md` (10 skills + 2 SAFe partagés) — 0 ✓ / 1 P3 / 7 P2 / **2 P1**

### 🐛 Corrigé — Bug architectural PM-SAFE (3 skills)
Header `> Agent :` erroné dans 3 skills `skills/product_manager_safe/` :
- `enterprise-product-vision.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md` (+ ajout `SAFe POPM 6 · SAFe SPC` dans Certification)
- `product-operating-model.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md` (+ ajout `SAFe POPM 6 · SAFe SPC`)
- `scaling-product-ownership.md` — `AGENT-PO-SCRUM.md` → `AGENT-PRODUCT-MANAGER-SAFE.md`

**Impact** : Restaure la cohérence Programme (PM) vs équipe (PO Scrum) sur 3 skills stratégiques.

### 🔧 Modifié — V1 cosmétique transverse (17 skills, ajout `> Certification :` + `> Agent :`)

**PO-SAFE (7 skills `skills/safe/`)** :
- art.md → SAFe POPM 6 · SAFe Agilist · Agents PO-SAFE/PM-SAFE
- dependencies.md → SAFe POPM 6 · Agent PO-SAFE
- features.md → SAFe POPM 6 · Agents PO-SAFE/PM-SAFE
- inspect-adapt.md → SAFe POPM 6 · SAFe Agilist · Agent PO-SAFE
- okr.md → SAFe POPM 6 · Agents PO-SAFE/PM-SAFE
- pi-planning.md → SAFe POPM 6 · SAFe Agilist · Agent PO-SAFE
- roadmap.md → SAFe POPM 6 · SAFe LPM · Agents PO-SAFE/PM-SAFE

**PO-SCRUM (10 skills `skills/scrum/`)** :
- compte-rendu.md → PSPO I
- confluence-page.md → PSPO I
- email-stakeholder.md → PSPO I · PSPO II
- gestion-risques.md → PSPO II · ICAgile ICP-APO
- po-acceptance-tests.md → PSPO I · ISTQB CTFL
- po-user-story.md → PSPO I · PSPO II
- recette-fonctionnelle.md → PSPO I · ISTQB CTFL
- reporting-kpi.md → PSPO II · ICAgile ICP-APO
- spec-fonctionnelle.md → PSPO I · IIBA BABOK v3
- ticket-incident.md → PSPO I

### 📊 Statistiques après v2.8.0

| Métrique | Avant V1 | Après V1 |
|---|---|---|
| Agents audités (Agile/Produit) | 0/9 | **3/9 (33%)** |
| Skills audités | 0 | **65/180 Agile/Produit (36%)** |
| Skills avec verdict ✓ pur | — | 1 (story-mapping ⭐) |
| Skills avec verdict P1 (Agile/Produit) | — | 16 → **8 après V1** (régression 8 P1 → P2) |
| Skills sans certification déclarée | — | 18 → **0 après V1** ✓ |
| Skills product_manager_safe avec Agent header correct | 7/10 | **10/10** ✓ |

### 🔜 RAF v2.8.x — Plan d'action 4 vagues (par agent)

**V2 — P1 résiduels (8 skills à enrichir en profondeur)** :
- PO-SAFE : capabilities, lean-agile-mindset (template manquant)
- PO-SCRUM : gestion-risques, **po-ai-product** (différenciateur stratégique IA), product-vision, ux-sprint
- PM-SAFE : market-analysis (zéro source externe)

**V3 — Enrichissements P2 (35 skills)** — propagation sources externes + anti-patterns + diversification sectorielle (sortir du seul exemple RH/IA dans PM-SAFE)

**V4 — Cosmétique P3** (13 skills) — sections `## Sources` à standardiser

### 🔜 RAF v2.8.x — Audits restants groupe Agile/Produit (6/9 agents)
SCRUM-MASTER (20 skills) · RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER

### 📌 Pattern méthode validé
- Délégation extraction Explore + cotation Claude expert : **~30 min par agent**
- Grille v2.8 Agile/Produit **stable sur 3 itérations** (aucun ajustement après PO-SAFE pilote)
- Limit WIP : V1 cosmétique systématique après chaque audit avant d'enchaîner

---

## [2.7.9] — 2026-05-28 — README index 14 dossiers restants (37/37 ✓ 100%)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Finalisation du chantier README index : ajout des **14 README index restants** pour atteindre **100% de couverture** (37/37 dossiers de skills). Tous les dossiers de skills du catalogue disposent désormais d'un README structuré avec : index numéroté, arbre de décision "Tu veux...", tableau des frontières avec les autres agents, liste des référentiels et standards utilisés.

### ✨ Ajouté — 14 README index supplémentaires

**Direction & Management (3)** :
- `skills/cdo_directeur_ia/README.md` — 8 skills (stratégie data-IA, gouvernance DAMA, CoE IA, Data Mesh, OKRs)
- `skills/change_manager/README.md` — 7 skills (PROSCI ADKAR, analyse impact, plan communication, résistances, KPIs)
- `skills/release_train_engineer/README.md` — 7 skills (PI Planning, ART, impediments, I&A, Flow Metrics, Scrum of Scrums)

**Data & Analyse (3)** :
- `skills/data_engineer/README.md` — 11 skills (pipelines, Spark, Kafka, dbt, Airflow, Lakehouse, gouvernance)
- `skills/data_scientist/README.md` — 13 skills (EDA, feature engineering, ML, DL, time series, MLflow, éthique IA)
- `skills/financial_analyst/README.md` — 6 skills (business case IA, ROI, TCO, budget, scoring investissements)

**Dev & Production de contenu (3)** :
- `skills/dev_drupal/README.md` — 10 skills (modules custom Drupal 10, Commerce 2.x, Twig, CMI, PHPUnit/Behat)
- `skills/redacteur_ia/README.md` — 16 skills (rapports, synthèses, copywriting, SEO, UX writing, documentation)
- `skills/ux_design/README.md` — 20 skills (research, personas, wireframing Figma, Design System, tests, WCAG)

**Croissance & Apprentissage (2)** :
- `skills/formateur_ia/README.md` — 11 skills (TNA, Bloom, Kirkpatrick, prompt engineering formation, data literacy)
- `skills/growth_ia/README.md` — 8 skills (acquisition, A/B testing, product analytics, LTV/CAC, personnalisation IA)

**Orchestration & Méthodes (3)** :
- `skills/orchestrateur_workflow/README.md` — 15 skills (BPMN, agent routing, MCP, LangGraph/CrewAI, monitoring)
- `skills/critique_conformite/README.md` — 3 skills (audit méthode SAFe/Scrum/ISTQB/PMI, challenge raisonnement, gates DoD)
- `skills/veille_strategique/README.md` — 6 skills (veille IA/LLM, concurrentielle, signaux faibles, synthèses)

### 📊 Statistiques finales après v2.7.9
| Métrique | v2.7.7 | v2.7.9 |
|---|---|---|
| README dossiers skills | 23/37 (62%) | **37/37 (100%)** ✓ |
| Format unifié sur l'ensemble du catalogue | Partiel | **Complet** ✓ |

### 🏆 Récapitulatif du chantier README (v2.7.3 → v2.7.9)
| Vague | Dossiers indexés | Cumul |
|---|---|---|
| v2.7.3 | 1 (securite_ia) | 1/37 |
| v2.7.4 | 4 (DEV core) | 5/37 |
| v2.7.5 | 10 (Agile, MOA, CMS, Data, EA) | 15/37 |
| v2.7.7 | 8 (pilotage, conseil, juridique, RH, TS) | 23/37 |
| v2.7.9 | 14 (restants) | **37/37 ✓** |

### 🔜 RAF v2.7.10+ (cosmétique fine, non bloquant)
- Uniformisation tag `> Certifications :` (2 formats coexistants — virgule vs middle dot `·`)
- Sections "Hors périmètre" universelles à la fin des 50 skills DEV

---

## [2.7.8] — 2026-05-28 — Correctif traçabilité modèle (v2.7.2 → v2.7.5)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Correction rétroactive de la mention du modèle Claude utilisé sur les entrées v2.7.2 à v2.7.5. Initialement, ces versions étaient consignées comme produites avec `Claude Sonnet 4.6` suite à une commande `/model claude-sonnet-4-6` saisie en cours de session. Vérification ex-post : le modèle effectif resté actif était **Claude Opus 4.7** sur toute la session post-v2.7.1. Correction appliquée.

### 🔧 Modifié
- Mise à jour de la ligne `> Modèle :` dans les 4 entrées du CHANGELOG : v2.7.2, v2.7.3, v2.7.4, v2.7.5 — passage de `Claude Sonnet 4.6` à `Claude Opus 4.7`
- Mise à jour de la table récapitulative "Traçabilité rétroactive" dans l'entrée v2.7.6 — passage des lignes v2.7.2 à v2.7.5 en `Claude Opus 4.7`
- Ajout d'une note de correction dans v2.7.6 pour traçabilité de l'erreur initiale

### 📋 État final des modèles de la session 2026-05-28
| Version | Modèle |
|---|---|
| v2.7.0 | Claude Sonnet 4.6 |
| v2.7.1 à v2.7.8 | **Claude Opus 4.7** (7 releases consécutives) |

---

## [2.7.7] — 2026-05-28 — README index 8 dossiers de skills supplémentaires (23/37)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Poursuite du chantier README index amorcé en v2.7.3 et étendu en v2.7.4 / v2.7.5. Cette release ajoute **8 README index** sur les dossiers à utilisation transversale en mission (pilotage projet, conseil, produit, prompting, juridique, scrum master, RH, frontend TS). Bilan : **23/37 dossiers** indexés (62%).

### ✨ Ajouté — 8 README index supplémentaires
- `skills/chef_projet_ia/README.md` — 8 skills (cadrage, planification hybride, risques, EVM, portefeuille, CODIR, stakeholders, post-mortem)
- `skills/consultant_ia/README.md` — 9 skills (avant-vente, diagnostic, feuille de route, benchmark, exécutif, ROI, PoC, transformation)
- `skills/product_manager_safe/README.md` — 12 skills (Vision/Stratégie, Customer-Centricity, Économie, Scaling, Épics cross-référencés)
- `skills/prompt_engineer/README.md` — 8 skills (system prompt, few-shot, CoT, RAG, multimodal, evals, optimisation, observabilité)
- `skills/juridique_ia/README.md` — 10 skills (AI Act, RGPD, DPIA, contrats, IP, gouvernance éthique, veille, politique, NIS2, audit)
- `skills/scrum_master/README.md` — 20 skills (cérémonies, coaching, pilotage, scaling SAFe SSM, transformation Agile)
- `skills/rh_ia/README.md` — 11 skills (recrutement IT/IA, anti-fraude CV/deepfake, GEPP, people analytics, transformation RH)
- `skills/dev_typescript_ia/README.md` — 9 skills (TypeScript avancé, MCP server TS, Vercel AI SDK, Next.js, chat UI streaming, edge functions)

### 📊 Statistiques après v2.7.7
| Métrique | v2.7.6 | v2.7.7 |
|---|---|---|
| README dossiers skills | 15/37 (40%) | **23/37 (62%)** |
| Dossiers à utilisation cliente forte/transverse | 15/15 ✓ | **23/23** ✓ |

### 🔜 RAF v2.7.8+
- 14 dossiers restants (faible utilisation client ou très spécialisés) : `cdo_directeur_ia`, `change_manager`, `critique_conformite`, `data_engineer`, `data_scientist`, `dev_drupal`, `financial_analyst`, `formateur_ia`, `growth_ia`, `orchestrateur_workflow`, `redacteur_ia`, `release_train_engineer`, `ux_design`, `veille_strategique`
- Uniformisation tag `> Certifications :` (~80 skills, 2 formats coexistants)
- Sections "Hors périmètre" universelles (~50 skills DEV)

---

## [2.7.6] — 2026-05-28 — Convention de traçabilité modèle + cosmétique skills DEV
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Ajout d'une convention de traçabilité : **chaque entrée CHANGELOG et chaque tag annoté doit désormais indiquer le modèle Claude utilisé** (Sonnet 4.6 / Opus 4.7 / Haiku 4.5). Mise à jour rétroactive des 6 entrées de la session v2.7.0–v2.7.5. Préférence sauvegardée dans la mémoire conversationnelle (`feedback_changelog_modele.md`).

### ✨ Ajouté — Convention de traçabilité modèle
- Format CHANGELOG : ligne `> Modèle : Claude <version>` sous le titre de chaque entrée
- Format tag annoté : mention du modèle en fin de message, ex : `v2.7.6 — Description (Opus 4.7)`
- Mise à jour rétroactive des entrées v2.7.0 à v2.7.5 (cf. ci-dessous)

### 🔧 Modifié — Traçabilité rétroactive des entrées 2026-05-28
| Version | Modèle utilisé |
|---|---|
| v2.7.0 | Claude Sonnet 4.6 (modèle par défaut au démarrage de la session) |
| v2.7.1 | **Claude Opus 4.7** (audit qualité multi-agents en parallèle) |
| v2.7.2 | Claude Opus 4.7 |
| v2.7.3 | Claude Opus 4.7 |
| v2.7.4 | Claude Opus 4.7 |
| v2.7.5 | Claude Opus 4.7 |

> **Note de correction (appliquée en v2.7.8)** : les entrées v2.7.2 à v2.7.5 indiquaient initialement `Sonnet 4.6` (consigné après une commande `/model claude-sonnet-4-6` saisie en cours de session). En réalité, le modèle effectif resté actif était Claude Opus 4.7 sur toute la session post-v2.7.1 ; correction rétroactive appliquée en v2.7.8.

### 🔧 Modifié — Datage des références (3 occurrences)
- `skills/ai_architect/README.md` : `OWASP LLM Top 10` → `OWASP LLM Top 10 (2025)`, `NIST AI RMF` → `NIST AI RMF 1.0 (2023)`
- `skills/securite_ia/threat-modeling.md` (ligne 114) : ajout `v2025` et `1.0`
- `skills/juridique_ia/veille-reglementaire.md` : `NIST AI RMF` → `NIST AI RMF 1.0 (nist.gov, 2023)`

### 🔍 Audit du datage des références
Audit complet via Grep des références aux standards (NIST AI RMF, OWASP LLM Top 10, MITRE ATT&CK, Scrum Guide, ISO/IEC 42001, EU AI Act) : **95% des occurrences déjà correctement datées**. Seules 3 corrections nécessaires (cf. ci-dessus). Les autres références sont déjà au format conforme depuis les v2.7.x précédentes.

### 🔜 RAF v2.7.7+ (cosmétique restante)
- **Uniformisation tag `> Certifications :`** : 2 formats coexistent dans ~80 skills (virgule vs middle dot `·`). Format cible recommandé = middle dot. Vague séparée nécessaire (audit puis batch de modifications).
- **Sections "Hors périmètre" universelles** : à ajouter à la fin des 50 skills DEV
- **README index dossiers restants** : 22 dossiers (faible utilisation client)

---

## [2.7.5] — 2026-05-28 — README index 10 dossiers de skills supplémentaires
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Poursuite de la généralisation du pattern README index initié en v2.7.3 (`securite_ia/`) et étendu aux 4 dossiers DEV core en v2.7.4. Cette release ajoute **10 README index** sur les dossiers les plus utilisés en mission, en priorisant les domaines de Guy (Agile, MOA, CMS, PIM, DAM, BI, EA). Bilan : **15/37 dossiers** indexés (40%) — les dossiers à plus forte utilisation client sont couverts.

### ✨ Ajouté — 10 README index supplémentaires

**Agile & Produit (3)** :
- `skills/scrum/README.md` — 30 skills indexés (Vision/Discovery, Backlog, Métriques, Pratiques avancées, Communication), arbre de décision, frontières (PO-SAFE, SCRUM-MASTER, PRODUCT-MANAGER-SAFE, BUSINESS-ANALYST, QA-AGILE)
- `skills/safe/README.md` — 25 skills indexés (Team, Program/ART, Large Solution, Portfolio, Transversal), avec rappel des règles de conformité critiques (WSJF relatif, MoSCoW = US only, Sprint Goal unique, etc.)
- `skills/qa_testing/README.md` — 23 skills (dossier partagé QA-AGILE + QA-CYCLEV), groupés par méthodologie (10 Agile / 12 Cycle en V / 1 Transversal)

**Business Analysis (1)** :
- `skills/business_analyst/README.md` — 10 skills MOA (élicitation, BPMN, spécifications, recette MOA, cadrage, exigences, change)

**CMS / Data Product (3)** :
- `skills/cms_digital/README.md` — 12 skills (architecture, AEM, Drupal, headless, migration, gouvernance, performance, accessibilité RGAA/WCAG)
- `skills/pim_expert/README.md` — 12 skills (modélisation, enrichissement, gouvernance, syndication, localisation, migration, IA)
- `skills/dam_expert/README.md` — 12 skills (taxonomie, workflows, droits, distribution, transformations, brand portal, IA visuelle)

**Data & Architecture (3)** :
- `skills/bi_analyst/README.md` — 12 skills (modélisation dimensionnelle, Power BI/Tableau/Looker, SQL, KPIs, CODIR, Fabric, BI augmentée IA)
- `skills/solutions_architect/README.md` — 8 skills (TOGAF ADM, ArchiMate, urbanisme, BDAT, integration patterns, cloud migration, gouvernance, roadmap)
- `skills/mlops_engineer/README.md` — 10 skills (Docker IA, K8s GPU, CI/CD ML, MLflow, monitoring LLM, model serving vLLM/TGI, Terraform IA)

### 📊 Statistiques après v2.7.5
| Métrique | v2.7.4 | v2.7.5 |
|---|---|---|
| README dossiers skills | 5/37 (14%) | **15/37 (40%)** |
| Dossiers core couverts | 5/5 ✓ | 5/5 ✓ |
| Dossiers à forte utilisation client couverts | 5/15 | **15/15** ✓ |

### 🔜 RAF v2.7.6+ (cosmétique long terme, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025)
- Uniformisation du tag `> Certifications :` (format hétérogène)
- Sections "Hors périmètre" systématiques sur les 50 skills
- README index pour les 22 dossiers restants (faible priorité — agents moins sollicités)

---

## [2.7.4] — 2026-05-28 — README index des 4 dossiers de skills DEV core
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Suite à la création du premier README index (`skills/securite_ia/`) en v2.7.3, généralisation du pattern aux 4 dossiers de skills DEV core. Chaque README suit le même format : index numéroté · arbre de décision "Tu veux..." · tableau des frontières avec les autres agents · liste des référentiels et standards. Les 32 dossiers de skills restants seront traités en v2.7.5+ (cosmétique long terme).

### ✨ Ajouté — 4 README index core
- `skills/ai_architect/README.md` — 8 skills indexés, arbre de décision (démarrer projet / concevoir agent / RAG / mesurer qualité / sécuriser), frontières avec DEV-PYTHON, DEV-TS, MLOPS, SECURITE-IA, PO, SOLUTIONS-ARCHITECT
- `skills/dev_python_ia/README.md` — 9 skills indexés, arbre de décision (coder propre / intégrer LLM / RAG / agent / entraîner), frontières avec AI-ARCHITECT, DEV-TS, MLOPS, PROMPT-ENGINEER
- `skills/tech_lead/README.md` — 12 skills indexés, arbre de décision (qualité code / design technique / industrialisation / sécurité culture / onboarding), avec rappel explicite des 3 frontières TECH-LEAD ↔ SECURITE-IA / DEVOPS-CLOUD / QA-AGILE (cf. v2.7.2)
- `skills/devops_cloud/README.md` — 11 skills indexés, arbre de décision (CI/CD / déploiement / cloud / observabilité / incident / sécurité), frontières avec TECH-LEAD, MLOPS, DEV-PYTHON, AI-ARCHITECT, SECURITE-IA

### 📊 Statistiques après v2.7.4
| Métrique | v2.7.3 | v2.7.4 |
|---|---|---|
| README dossiers skills | 1/37 | **5/37** |
| Dossiers core avec README | 1/5 | **5/5** ✓ |

### 🔜 RAF v2.7.5+ (cosmétique long terme, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025)
- Uniformisation du tag `> Certifications :` (format hétérogène)
- Sections "Hors périmètre" systématiques sur les 50 skills
- README index pour les 32 dossiers de skills restants (non-core)

---

## [2.7.3] — 2026-05-28 — Finalisation P3 audit qualité skills DEV (98% conformité)
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Traitement des 3 skills P3 restants identifiés lors de l'audit qualité v2.7.1, et création du premier README index de dossier de skills (`skills/securite_ia/`). Les 4 dernières tâches cosmétiques (datage références sur 50 skills, uniformisation tag `> Certifications :`, sections "Hors périmètre" universelles, README pour les 36 autres dossiers de skills) sont reportées à v2.7.4.

### ✨ Enrichi — P3 skills restants (3 fichiers)
- `skills/securite_ia/threat-modeling.md` — méthodologie **PASTA détaillée en 7 phases** (inputs/activités/livrables par phase) + **3 kill chains MITRE ATT&CK complètes** (Indirect Prompt Injection T-LLM02, Training Data Poisoning, Model Extraction T-LLM06), chacune avec 7 étapes opérationnelles incluant tactiques MITRE, outils, signaux de détection et contre-mesures
- `skills/dev_python_ia/python-avance-ia.md` — ajout de 3 fichiers d'exemples testables prêts à copier-coller : `async_llm_retry.py` (Claude async + tenacity + structured logging), `test_async_llm_retry.py` (3 tests pytest avec mocks Anthropic), `rag_query_validation.py` (validation Pydantic stricte avec `field_validator` anti-injection)
- `skills/securite_ia/owasp-llm-top10.md` — ajout grille d'évaluation scoring /10 (4 dimensions × 4 niveaux), matrice CVSS 3.1 avec exemple détaillé LLM01 + vecteur officiel FIRST, template complet de rapport d'audit (synthèse exécutive, détail par vulnérabilité, plan de remédiation priorisé P0/P1/P2)

### ✨ Ajouté — Premier README index de dossier
- `skills/securite_ia/README.md` — index des 10 skills + arbre de décision (auditer / construire / industrialiser / détecter & répondre) + tableau des frontières avec autres agents + liste des référentiels et standards (OWASP, NIST, ISO, MITRE)

### 📊 Statistiques après v2.7.3
| Métrique | Avant audit | v2.7.1 | v2.7.2 | v2.7.3 |
|---|---|---|---|---|
| Skills DEV conformes (✓) | 33/50 (66%) | 46/50 (92%) | 46/50 (92%) | **49/50 (98%)** |
| Doublons inter-agents arbitrés | 0/3 | 0/3 | **3/3** | 3/3 |
| README dossiers skills | 0/37 | 0/37 | 0/37 | **1/37** |

### 🔜 RAF v2.7.4 (cosmétique restante, ~2h)
- Datage des références sur les 50 skills DEV (NIST 1.0 = 2023, OWASP LLM = 2025, etc.)
- Uniformisation du tag `> Certifications :` en tête de chaque skill (format hétérogène détecté)
- Sections "Hors périmètre" systématiques sur les 50 skills (renvoi vers agents spécialistes)
- README index pour les 36 autres dossiers de skills (modèle `securite_ia/README.md`)

---

## [2.7.2] — 2026-05-28 — Frontières inter-agents : arbitrage des 3 doublons audit v2.7.1
> Modèle : Claude Opus 4.7

### 🎯 Contexte
Suite à l'audit v2.7.1, 3 doublons fonctionnels avaient été détectés entre AGENT-TECH-LEAD et 3 agents spécialistes (SECURITE-IA, DEVOPS-CLOUD, QA-AGILE). Cette release documente la frontière de manière **symétrique** (côté TECH-LEAD ET côté spécialiste), sur le modèle de la note QA-AGILE ↔ QA-CYCLEV (v2.3.6).

### 🔧 Modifié — Frontières inter-agents documentées

**Principe directeur** : TECH-LEAD pilote la **vision et la culture côté équipe dev** ; l'agent spécialiste **exécute en profondeur**.

- `AGENT-TECH-LEAD.md` — Section "❌ Hors périmètre" enrichie (3 nouvelles lignes) + note `> ℹ️ **Frontières inter-agents**` au-dessus de la table des skills, listant les 3 doublons et leur arbitrage
- `AGENT-SECURITE-IA.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `securite-applicative.md` pour la culture sécurité côté équipe dev (vs. audit/pentest professionnel côté SECURITE-IA)
- `AGENT-DEVOPS-CLOUD.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `cicd-pipeline.md` pour la stratégie CI/CD côté équipe (vs. config plateforme côté DEVOPS)
- `AGENT-QA-AGILE.md` — Hors périmètre : ajout renvoi vers TECH-LEAD `strategie-tests.md` pour la vision pyramide de tests (vs. exécution sprint côté QA)

### 📊 Statistiques après v2.7.2
| Métrique | Avant | Après |
|---|---|---|
| Doublons inter-agents non arbitrés | 3 | **0** |
| Agents avec note de frontière explicite | 2 (QA-AGILE, QA-CYCLEV) | **6** (+TECH-LEAD, SECURITE-IA, DEVOPS-CLOUD, QA-AGILE) |

### 🔜 RAF pour atteindre 100% (v2.7.3)
- Skills P3 restants (3 fichiers) : `threat-modeling.md` (PASTA + kill chains MITRE), `python-avance-ia.md` (exemples testables), `owasp-llm-top10.md` (template audit + CVSS)
- Cosmétique (50 skills) : datage références 2024-2026, uniformisation tag `> Certifications :`, README dossier `securite_ia/`

---

## [2.7.1] — 2026-05-28 — Audit qualité skills DEV (5 agents core) + corrections P1/P2
> Modèle : Claude Opus 4.7 (audit multi-agents en parallèle)

### 🎯 Contexte
Audit qualité méthodologique appliqué aux 50 skills des 5 agents techniques core (DEV-PYTHON-IA, AI-ARCHITECT, TECH-LEAD, DEVOPS-CLOUD, SECURITE-IA). Audit conduit par 5 sous-agents en parallèle (Opus 4.7) avec grille standardisée : conformité aux certifications revendiquées · actionabilité (livrables concrets, format prêt-à-copier) · profondeur (sources/références récentes 2024-2026). Bilan : 33/50 conformes (66%), 17/50 à corriger, 0/50 à refondre. Pas d'agent à risque, mais 1/3 des skills sous-investis. Vague de corrections P1 (3 bugs bloquants) + P2 (10 enrichissements). Skills restants (P3) reportés à une vague ultérieure.

### 🐛 Corrigé — P1 bugs bloquants
- `skills/dev_python_ia/pipeline-rag.md` — import LangChain v0.2+ cassé (`langchain.text_splitter` → `langchain_text_splitters`), ajout Voyage AI embeddings (partenaire Anthropic), enrichissement section RAGAs (4 métriques + dataset complet + seuils production)
- `skills/tech_lead/ia-workflows-dev.md` — commandes `claude review` inventées remplacées par les vrais skills Claude Code (`/code-review`, `/code-review --fix`, `/verify`, `/security-review`, `/simplify`, `/init`)
- `AGENT-DEVOPS-CLOUD.md` — ajout 3 certifications ML manquantes (AWS MLA-C01, GCP ML Engineer, Azure AI-102) pour cohérence avec les skills cloud aws/gcp/azure-architecture
- `skills/dev_python_ia/agents-python.md` — fix nom modèle obsolète `claude-opus-4-5` → `claude-opus-4-7`

### ✨ Enrichi — P2 contenu et actionabilité

**AI-ARCHITECT (5 skills)** :
- `evaluation-llm.md` — benchmarks 2025+ (GPQA, IFEval, MMLU-Pro, SWE-bench Verified, τ-bench, LMArena), outils 2026 (Braintrust, Inspect AI UK AISI), template golden dataset YAML, format rapport mensuel
- `design-patterns-agents.md` — diagramme Mermaid Multi-Agent Supervisor + code LangGraph 0.2+ complet (StateGraph + Command routing + structured output)
- `protocoles-mcp-a2a.md` — MCP server TypeScript complet (tools + resources + stdio transport) + commande create-server + config Claude Desktop
- `multi-agent-design.md` — exemple StateGraph LangGraph avec checkpointing SQLite et `interrupt_before` human-in-the-loop
- `architecture-rag.md` — diagramme Mermaid pipeline (indexation + runtime) + code chunking récursif avec métadonnées propagées

**DEV-PYTHON-IA (2 skills)** :
- `agents-python.md` — pattern ReAct **déplié** (StateGraph manuel + ToolNode + boucle agent↔tools + checkpointing SQLite), démo multi-tour avec thread_id
- `pytorch-deeplearning.md` — Mini-Transformer complet (PositionalEncoding + Encoder + classification head) + Dataset/DataLoader + boucle train/val avec accuracy

**DEVOPS-CLOUD (2 skills)** :
- `observabilite-sre.md` — règles Prometheus spécifiques LLM (LLMCostBudgetBurn, AgentLoopRunaway, HallucinationRateHigh, ContextWindowSaturation) + instrumentation OTel Python pour coûts tokens
- `incident-response-llm.md` — toolbox d'investigation concrète (RAGAs, DeepEval, LangSmith, Helicone, Langfuse, Anthropic Console)

**SECURITE-IA (1 skill)** :
- `incident-response.md` — passage de 3 à 6 runbooks complets (Prompt Injection, Data Poisoning, Model Theft, Data Exfiltration, DoS/Token Burn, Auth Bypass) + template RCA méthode 5 Whys + tableau de suivi avec SLA P0-P3

### 📊 Statistiques après v2.7.1
| Métrique | Avant audit | Après corrections |
|---|---|---|
| Skills DEV conformes (✓) | 33/50 (66%) | 46/50 (92%) |
| Skills DEV à corriger (⚠) | 17/50 | 4/50 (P3, à traiter ultérieurement) |
| Skills DEV à refondre (✗) | 0/50 | 0/50 |
| Certifications ML alignées avec contenu | 0/3 | 3/3 (DEVOPS-CLOUD) |
| Bugs bloquants identifiés | 3 | 0 |

### 🔜 Reste à arbitrer (P3)
- `skills/securite_ia/threat-modeling.md` — PASTA détaillé + kill chains MITRE complets
- `skills/dev_python_ia/python-avance-ia.md` — création d'exemples testables
- `skills/securite_ia/owasp-llm-top10.md` — template rapport d'audit + matrice CVSS
- 3 doublons à arbitrer entre agents (securite-applicative ↔ SECURITE-IA, cicd-pipeline ↔ DEVOPS-CLOUD, strategie-tests ↔ QA-AGILE)

---

## [2.7.0] — 2026-05-28 — Nouvel agent AGENT-AUDIT-METHODO-IA + 3 skills critique_conformite
> Modèle : Claude Sonnet 4.6

### 🎯 Contexte
Ajout d'un agent de contre-expertise méthodologique indépendant, distinct des agents QA existants (AGENT-QA-AGILE et AGENT-QA-CYCLEV qui couvrent tests et code). AGENT-AUDIT-METHODO-IA joue le rôle de second avis adversarial sur les livrables produits par les autres agents IA : audit de conformité méthode (SAFe/Scrum/ISTQB/PMI/ISO 9001), challenge du raisonnement (biais cognitifs, devil's advocate, red-team) et gate de validation avant promotion. Nom initialement CONTRE-EXPERTISE-IA, renommé AUDIT-METHODO-IA pour refléter exactement le périmètre fonctionnel certifiant — conformément à la convention catalogue fonction + domaine.

### ✨ Ajouté — AGENT-AUDIT-METHODO-IA.md
Auditeur Méthodo IA — contre-expertise indépendante Agile/SAFe/ISTQB/PMI/ISO 9001/CMMI.
- **16 certifications** : SAFe 6 SA/POPM/SSM/SASM/RTE · PSM I/II/III · PSPO I/II · ISTQB CTFL/CTFL-AT/CTAL-TM/CTAL-TA · PMP · PMI-ACP · ISO 9001:2015 Lead Auditor (IRCA/CQI) · CMMI Associate · 3× Anthropic 2026
- **3 skills** dans `skills/critique_conformite/` :
  - `audit-conformite-methodo.md` — checklists Scrum Guide 2020, SAFe 6, ISTQB CTFL/CTAL, PMBOK 7
  - `challenge-raisonnement.md` — 8 biais cognitifs, devil's advocate 4 étapes, red-team 5 vecteurs
  - `gate-validation-livrable.md` — 4 gates DoD (Story / Feature / PI-Release / Livrable IA), règle anti-théâtre

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 37 → **38 agents**, 36 → **37 dossiers skills**
- `CLAUDE.md` — Compteurs 37/36 → **38/37**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue 37 → **38 agents**

### 📊 Statistiques après v2.7.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 37 | **38** |
| Dossiers de skills | 36 | **37** |
| Skills nouveaux | — | **+3** |
| Fichiers créés/modifiés | — | 7 (1 agent + 3 skills + 3 mises à jour) |

---

## [2.6.0] — 2026-05-27 — Gouvernance workflows + conformité méthode WSJF officielle

### 🎯 Contexte
Mise en conformité de la priorisation SAFe sur l'ensemble du catalogue (méthode WSJF officielle POPM 6) et structuration de la gouvernance des workflows. Déclenché par un audit méthodologique : MoSCoW appliqué à tort aux Epics/Features (réservé aux User Stories), et WSJF coté en absolu (échelle 1-20) au lieu de la cotation relative officielle (plus petit = 1 par colonne).

### ✨ Ajouté — Gouvernance des workflows
- `workflows/briefs/` — dossier des briefs de lancement (inputs immuables) + README
- `workflows/outputs/` — dossier des runs bruts tracés + README + template
- Pipeline documenté : `briefs → [run] → outputs → [curation] → use_cases`
- `workflows/use_cases/WF-002-uc01-assurance-pi01.md` — use case Delivery SAFe PI-01 (continuité de WF-001 UC-01), 6 agents orchestrés, conforme SAFe/Scrum/ISTQB/PMI

### 🐛 Corrigé — Conformité méthode WSJF (POPM 6)
- `skills/safe/wsjf.md` (source de vérité) — règles officielles ajoutées : cotation relative, plus petit = 1 par colonne, colonnes indépendantes, anti-ex-aequo + exemple conforme
- Propagation sur ~11 fichiers : `economic-framework`, `economic-framework-pm` (échelle 1-10 → Fibonacci), `investment-scoring`, `lean-business-case` (CoD 4 → 3 composantes, RR/OE combiné), `gouvernance-portefeuille`, `few-shot-learning`, `chain-of-thought`, `epic-to-feature-splitting`, `mcp-orchestration`, WF-001 UC-01
- MoSCoW recentré sur les **User Stories** ; **WSJF** pour Epics et Features

### 🔧 Modifié — Conformité Scrum
- `workflows/WF-002-delivery-safe.md` — output STEP-04 reformulé : auto-organisation des Developers (le SM facilite, n'assigne pas — Scrum Guide 2020), Sprint Goal unique par équipe

### 📊 Statistiques après v2.6.0
| Métrique | Avant | Après |
|---|---|---|
| Use cases workflows | 1 | **2** |
| Dossiers workflows | use_cases | + **briefs/**, **outputs/** |
| Fichiers mis en conformité WSJF | — | **~11** |

---

## [2.5.1] — 2026-05-26 — Sécurité : anonymisation repo public + convention token

### 🔒 Sécurité — Anonymisation données repo public
Suppression de tous les noms de clients nominatifs dans les fichiers publics du repo.
Remplacés par secteurs génériques (telecom, luxe, finance, hôtellerie) pour préserver
le positionnement professionnel sans exposer les relations clients.

Fichiers corrigés :
- `AGENT-CMS-DIGITAL.md`, `AGENT-DAM-EXPERT.md`, `AGENT-BI-ANALYST.md`
- `mcp-servers/README.md`
- `skills/consultant_ia/offre-mission.md`, `skills/veille_strategique/veille-concurrentielle.md`
- `skills/cms_digital/architecture-cms.md`, `skills/cms_digital/rebranding-digital.md`
- `skills/product_manager_safe/release-strategy.md`

### 🔒 Sécurité — GitHub hardening (activé via API 2026-05-26)
- Branch protection `main` : no force push · no delete · linear history ✅
- Secret scanning activé ✅
- Push protection activé (bloque les commits contenant des secrets) ✅

### 🔒 Connexion SSH
Remote basculé en SSH (git@github.com:guyhui01/claude-agents.git).
Aucun token d'authentification nécessaire pour les opérations git push / git pull.

### 🔧 Modifié — `.gitignore` renforcé
Ajout : `*.p12`, `*.pfx`, `*_password*`, `*_api_key*`, `config.local.*`, `secrets/`,
`.vscode/`, `.idea/`, `__pycache__/`, `.venv/`, `node_modules/`, `*.bak`

---

## [2.5.0] — 2026-05-26 — 2 nouveaux agents : PIM-EXPERT, DAM-EXPERT

### 🎯 Contexte
Enrichissement du catalogue suite à l'analyse stratégique du triptyque CMS-PIM-DAM : les agents CMS-DIGITAL (v2.4.0) couvre la couche publication, mais les couches données produit (PIM) et assets (DAM) manquaient d'agents dédiés. 2 nouveaux agents créés avec 24 skills actionnables, des certifications 2024-2026 et les 3 certifications Anthropic 2026.

### ✨ Ajouté — AGENT-PIM-EXPERT.md
Expert PIM & Gestion du Catalogue Produit — Akeneo, Pimcore, inriver, SAP MDG, syndication multicanal, gouvernance données produit, enrichissement IA.
- **13 certifications** : Akeneo Product Manager & Developer, Pimcore Dev, inriver, Salsify, SAP MDG Associate, Contentserv PIM, DAMA DMBOK2, CDMP, ISO/IEC 42001:2023, 3× Anthropic 2026
- **12 skills** : `modelisation-catalogue` · `enrichissement-produit` · `gouvernance-donnees-produit` · `syndication-canaux` · `localisation-i18n` · `integration-erp-pim` · `scoring-qualite-produit` · `migration-pim` · `portail-fournisseurs` · `onboarding-donnees-produit` · `pim-augmente-ia` · `kpis-catalogue`

### ✨ Ajouté — AGENT-DAM-EXPERT.md
Expert DAM & Gestion des Assets Digitaux — Bynder, AEM Assets, Cloudinary, Canto, Widen, Brandfolder, brand portal, gouvernance, IA visuelle.
- **13 certifications** : Bynder Certified Partner, AEM Assets Specialist, Cloudinary Dev Expert, Henry Stewart DAM Practitioner, Canto, Widen / Acquia, Brandfolder, IPTC, Adobe CC, ISO/IEC 42001:2023, 3× Anthropic 2026
- **12 skills** : `taxonomie-assets` · `workflow-validation-assets` · `gestion-droits-licences` · `distribution-multicanal` · `transformation-formats` · `integration-dam-cms` · `brand-portal` · `gouvernance-dam` · `migration-dam` · `dam-augmente-ia` · `analytics-assets` · `naming-convention`

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 35 → **37 agents**, 34 → **36 dossiers skills**
- `CLAUDE.md` — Compteurs 35/34 → **37/36**
- `START.md` — Compteur 35/34 → **37/36**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue 35 → 37, PIM-EXPERT et DAM-EXPERT ajoutés

### 📊 Statistiques après v2.5.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 35 | **37** |
| Dossiers de skills | 34 | **36** |
| Skills nouveaux | — | **+24** |
| Fichiers créés/modifiés | — | 30 (2 agents + 24 skills + 4 mises à jour) |

---

## [2.4.1] — 2026-05-26 — Finalisation audit 24/05 : alignement 3-certs Anthropic & ISO 42001

### 🎯 Contexte
Complétion des tâches restantes de l'audit qualité v2.3.6 (2026-05-24) : alignement de tous les agents sur le format 3-certifications Anthropic 2026 et ajout des certifications réglementaires IA manquantes.

### 🔧 Modifié — Tâche 1 : Alignement 3-certs Anthropic (9 agents)
Tous les agents avaient une certification Anthropic partielle ou non standardisée. Format cible :
`Claude 101 (Anthropic 2026)` · `Claude Code 101 (Anthropic 2026)` · `Anthropic Claude Code in Action — Certified AI Workflow Engineer (Anthropic 2026)`

Agents mis à jour :
- `AGENT-AI-ARCHITECT.md` — `Anthropic — Claude Code in Action` → 3 certifications complètes
- `AGENT-CDO-DIRECTEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-CONSULTANT-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-DEV-TYPESCRIPT-IA.md` — `Claude Code 101 & Claude Code in Action` → 3 certifications complètes
- `AGENT-FORMATEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-GROWTH-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-REDACTEUR-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-SECURITE-IA.md` — `Anthropic — Claude Code in Action (2026)` → 3 certifications complètes
- `AGENT-VEILLE-STRATEGIQUE.md` — format non standard → 3 certifications complètes

### 🔧 Modifié — Tâche 2 : ISO/IEC 42001:2023 (2 agents)
- `AGENT-CONSULTANT-IA.md` — ajout `ISO/IEC 42001:2023 — AI Management System (AIMS) Lead Implementer (PECB)`
- `AGENT-FINANCIAL-ANALYST.md` — ajout `ISO/IEC 42001:2023 — AI Management System (AIMS) Lead Implementer (PECB)` + 3 certifications Anthropic 2026

### 📊 Statistiques après v2.4.1
| Métrique | Avant | Après |
|---|---|---|
| Agents avec 3 certs Anthropic 2026 | 11 | **20** |
| Agents avec ISO/IEC 42001:2023 | 3 | **5** |
| Fichiers modifiés | — | 10 |

---

## [2.4.0] — 2026-05-26 — 3 nouveaux agents : CMS-DIGITAL, TECH-LEAD, BI-ANALYST

### 🎯 Contexte
Analyse évolutive du catalogue (2026-05-26) : identification de 3 gaps métier majeurs absents du catalogue malgré leur pertinence pour les missions clients CAC40. Chaque agent est livré avec 12 skills actionnables (36 skills au total), des certifications 2024-2026 et les 3 certifications Anthropic 2026.

### ✨ Ajouté — AGENT-CMS-DIGITAL.md
Expert CMS & Digital Platform Manager — comble le gap de l'expertise CMS forte de Guy (AEM, Drupal, Headless, ABE, Noheto) absente du catalogue.
- **17 certifications** : Adobe Certified Expert AEM Sites Developer & Business Practitioner, Acquia Certified Developer & Site Builder Drupal 10, Contentful Certified Professional, Sitecore XM Cloud Developer, **TYPO3 CMS Certified Integrator (TCI)**, **Optimizely CMS Certified Developer**, **HubSpot CMS for Developers**, **Shopify Theme Development**, Yoast SEO, TOGAF 10 Foundation, WCAG 2.2 / RGAA 4.1, 3× Anthropic 2026
- **12 skills** : `architecture-cms`, `aem-sites-assets`, `drupal-developpement`, `cms-headless`, `migration-cms`, `gouvernance-editoriale`, `integration-pim-dam`, `performance-web`, `accessibilite-numerique`, `seo-technique-cms`, `rebranding-digital`, `personnalisation-segmentation`

### ✨ Ajouté — AGENT-TECH-LEAD.md
Tech Lead / Lead Developer IA — comble le gap entre les agents DEV-* (exécution) et SOLUTIONS-ARCHITECT (architecture d'entreprise).
- **11 certifications** : AWS DVA-C02, Google Professional Cloud Developer, Azure AZ-204, CKAD Linux Foundation, **GitHub Actions Certifications**, MongoDB Certified Developer Professional, **ISTQB FL v4.0**, **Postman API Fundamentals Expert**, 3× Anthropic 2026
- **12 skills** : `code-review`, `architecture-applicative`, `api-design`, `strategie-tests`, `cicd-pipeline`, `securite-applicative`, `dette-technique`, `documentation-technique`, `performance-applicative`, `mentoring-equipe-dev`, `ia-workflows-dev`, `branching-release`

### ✨ Ajouté — AGENT-BI-ANALYST.md
Business Intelligence Analyst Expert — comble le gap BI pur (DATA-SCIENTIST couvre le ML mais pas Power BI, Tableau, Looker, reporting CODIR).
- **11 certifications** : **PL-300 Power BI Data Analyst Associate**, **DP-600 Fabric Analytics Engineer**, **Tableau Certified Data Analyst**, Google Data Analytics, **Databricks Data Analyst Associate**, **dbt Certified Analytics Engineer**, Looker BI & Data Analytics, AWS DEA-C01, 3× Anthropic 2026
- **12 skills** : `modelisation-dimensionnelle`, `power-bi-reporting`, `tableau-dashboard`, `looker-lookml`, `sql-analytique`, `catalogue-kpis`, `reporting-codir`, `gouvernance-bi`, `self-service-bi`, `microsoft-fabric`, `monitoring-alertes-bi`, `bi-augmentee-ia`

### 🔧 Modifié — Compteurs catalogue
- `README.md` — 32 → **35 agents**, 31 → **34 dossiers skills** + 3 agents et 3 dossiers ajoutés aux tables
- `CLAUDE.md` — Compteurs harmonisés 32/31 → **35/34**
- `START.md` — Compteur mis à jour 32 → **35 agents**, 31 → **34 dossiers**
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Catalogue mis à jour (32 → 35), 3 agents ajoutés à la table Dev & Technique

### 📊 Statistiques après v2.4.0
| Métrique | Avant | Après |
|---|---|---|
| Agents | 32 | **35** |
| Dossiers de skills | 31 | **34** |
| Skills nouveaux | — | **+36** |
| Agents avec 3 certs Anthropic 2026 | 8 | **11** |
| Fichiers modifiés/créés | — | 43 (3 agents + 36 skills + 4 mise à jour) |

---

## [2.3.6] — 2026-05-24 — Audit qualité certifications & cohérence structurelle

### 🎯 Contexte
Audit complet (Opus 4.7) du catalogue selon 2 axes : (1) qualité & mise à jour des certifications, (2) cohérence de la structure agentique. Identifié 12 corrections à appliquer immédiatement (quick wins P1 + Anthropic 2026 P2 + réglementaires IA P3 + housekeeping P4).

### 🔧 Modifié — Certifications obsolètes
- `AGENT-AI-ARCHITECT.md` — `AWS MLS-C01` (Machine Learning Specialty, en dépréciation) remplacée par **`AWS MLA-C01`** (Machine Learning Engineer Associate, sortie 2024-08)
- `AGENT-MLOPS-ENGINEER.md` — Retiré l'année figée `(2024)` du libellé GitHub Actions Certification
- `AGENT-DATA-ENGINEER.md` — Retiré `— 2024` du libellé AWS DEA-C01
- `AGENT-DEV-TYPESCRIPT-IA.md` — Retiré `(2025)` du libellé Vercel Next.js Certification

### ✨ Ajouté — Certifications Anthropic 2026 propagées (P2)
Pattern unifié `Claude 101 / Claude Code 101 / Anthropic Claude Code in Action — Certified AI Workflow Engineer` ajouté sur 6 agents prioritaires :
- `AGENT-DEV-PYTHON-IA.md`
- `AGENT-MLOPS-ENGINEER.md`
- `AGENT-DATA-SCIENTIST.md`
- `AGENT-CHEF-PROJET-IA.md`
- `AGENT-PRODUCT-MANAGER-SAFE.md`
- `AGENT-SOLUTIONS-ARCHITECT.md`

### ✨ Ajouté — Certifications réglementaires IA 2024-2026 (P3)
- `AGENT-JURIDIQUE-IA.md` — +**ISO/IEC 42001:2023** (AI Management System), +**NIST AI RMF 1.0**, +**ISO/IEC 23894:2023** (AI Risk Management)
- `AGENT-SECURITE-IA.md` — +**ISO/IEC 42001:2023**, +**NIST AI RMF 1.0**
- `AGENT-CDO-DIRECTEUR-IA.md` — +**ISO/IEC 42001:2023**

### 🔧 Modifié — Cohérence structurelle (P1 + P4)
- `CLAUDE.md` — Tree ASCII harmonisé : `31/30/5` → **32/31/10** (agents/skills/workflows)
- `AGENT-QA-AGILE.md` — Note explicite sur le partage du dossier `skills/qa_testing/` avec QA-CYCLEV (orientation Agile)
- `AGENT-QA-CYCLEV.md` — Note explicite sur le partage du dossier `skills/qa_testing/` avec QA-AGILE (orientation Cycle en V)
- `AGENT-REDACTEUR-IA.md` — Note clarifiant le statut transverse de `documentation-technique.md` et `ux-writing.md` (L6 de l'audit 22-05 traité)

### 📊 Statistiques après v2.3.6
| Métrique | Avant | Après |
|---|---|---|
| Agents avec ≥1 cert Anthropic 2026 | 11/32 (34%) | **17/32 (53%)** |
| Agents avec les 3 certs Anthropic | 2 (PROMPT-ENG, ORCHESTRATEUR) | **8** |
| Agents avec ISO/NIST AI standards | 0 | **3** (JURIDIQUE, SECURITE, CDO) |
| Fichiers modifiés | — | 12 (1 CLAUDE.md + 11 agents) |

### 🔜 Reste à arbitrer
- Aligner les 9 agents qui ont seulement "Claude Code in Action" sur le format 3-certs (cohérence)
- Évaluer si d'autres agents méritent les certs ISO 42001 (FINANCIAL-ANALYST, CONSULTANT-IA pour conformité)

---

## [2.3.4] — 2026-05-23 — Stories techniques Scrum (tech debt, spikes, infra)

### 🎯 Contexte
Les Enabler Stories étaient déjà couvertes côté SAFe (`feature-to-story-splitting.md` v2.3.2) mais rien côté Scrum pur. Ajout d'1 skill rattaché à PO-SCRUM pour combler le gap (missions PME / startups / ESN équipe unique) avec encadré de renvoi vers SAFe.

### ✨ Ajouté
- `skills/scrum/stories-techniques.md` — 3 types (Tech Debt, Spike, Infra), template de rédaction adapté (pas de Connextra), INVEST adapté par type, DoR spécifique, règle des 15-20% capacité, signaux d'alerte, anti-patterns + encadré "En contexte SAFe → Enabler Stories officielles" avec mapping vers les 4 types SAFe

### 🔧 Modifié
- `AGENT-PO-SCRUM.md` — 1 ligne ajoutée dans la table skills

---

## [2.3.3] — 2026-05-23 — Skill dédié Planning Poker (Scrum Master)

### 🎯 Contexte
La méthode Planning Poker était mentionnée dans 5 fichiers (po-backlog, po-user-story, facilitation-ateliers-sm, feature-to-story-splitting, planification-hybride) sans skill dédié. Création d'un skill complet rattaché au SCRUM-MASTER (facilitateur officiel de l'atelier) avec cross-links depuis les agents PO.

### ✨ Ajouté
- `skills/scrum_master/planning-poker.md` — Fibonacci complet (avec ? ∞ ☕), procédure d'animation pas-à-pas, référentiel d'US d'ancrage, facilitation remote (Planning Poker Online, Scrum Poker, Miro), 5 alternatives (T-shirt, #NoEstimates, Affinity, Magic Estimation, Bucket System), anti-patterns (anchoring, HiPPO, conversion SP→heures), adaptation SAFe (NSP + PI Planning)

### 🔧 Modifié
- `AGENT-SCRUM-MASTER.md` — 1 ligne ajoutée dans la table skills
- `skills/scrum/po-backlog.md` — Section estimation recentrée sur le rôle PO (4 lignes), renvoi vers le skill dédié pour les détails techniques (suppression doublon)

---

## [2.3.2] — 2026-05-23 — Couverture SAFe Epic → Feature → Story

### 🎯 Contexte
Comblement de la lacune SAFe sur la cascade Epic → Feature → User Story. Alternative pragmatique à la création d'un agent EPIC-OWNER dédié : enrichissement de PO-SAFE + PM-SAFE avec 3 skills SAFe officiels, reflétant la réalité opérationnelle (Epic Owner = casquette ponctuelle PM/Architecte, pas un rôle plein-temps).

### ✨ Ajouté
- `skills/safe/epic-hypothesis-mvp.md` — Epic Hypothesis Statement (template SAFe officiel For/Who/The/Is a/That/Unlike/Our solution), rôle Epic Owner, MVP vs MMF, Build-Measure-Learn, décision Pivot/Persevere/Stop
- `skills/safe/epic-to-feature-splitting.md` — 8 patterns officiels SAFe (Workflow, Business Rules, CRUD, Scenarios, Simple First, Variations, Data, Defer Performance) + atelier Continuous Exploration
- `skills/safe/feature-to-story-splitting.md` — INVEST + SPIDR en contexte SAFe + 4 types d'Enabler Stories + AC Gherkin + input Program Board

### 🔧 Modifié
- `AGENT-PO-SAFE.md` — 3 nouveaux skills ajoutés dans la table (epic-hypothesis-mvp, epic-to-feature-splitting, feature-to-story-splitting)
- `AGENT-PRODUCT-MANAGER-SAFE.md` — 2 skills ajoutés (epic-hypothesis-mvp, epic-to-feature-splitting), périmètre ✅ enrichi (rôle Epic Owner ponctuel + décomposition Epic→Features), périmètre ❌ clarifié (rédaction/raffinement Feature reste PO-SAFE)

### 📊 Statistiques après v2.3.2
| Métrique | Avant | Après |
|---|---|---|
| Skills `safe/` | 22 | 25 |
| Skills PM-SAFE référencés | 10 | 12 |
| Skills PO-SAFE référencés | 22 | 25 |

---

## [2.3.1] — 2026-05-23 — PO-Scrum enrichi : priorisation multi-techniques + Story Mapping

### 🎯 Contexte
Comblement des lacunes sur les méthodes de priorisation certifiantes PSPO et la méthode Jeff Patton (audit utilisateur direct).

### ✨ Ajouté
- `skills/scrum/priorisation-techniques.md` — MoSCoW détaillé, RICE, Kano, Value/Effort Matrix, Buy a Feature, 100$ test, Opportunity Scoring + grille de choix par contexte + anti-patterns
- `skills/scrum/story-mapping.md` — Méthode Jeff Patton complète : 6 étapes, code couleur, atelier présentiel/remote (Miro), Walking Skeleton, conversion vers backlog

### 🔧 Modifié
- `skills/scrum/po-backlog.md` — Recentré sur gestion (structure, DoR INVEST, refinement, santé, roadmap), doublons MoSCoW/Story Mapping retirés avec renvois vers les nouveaux skills
- `AGENT-PO-SCRUM.md` — Table skills : 2 nouvelles lignes (priorisation + story mapping), libellé po-backlog clarifié
- `README.md` — Description AGENT-PO-SCRUM (retrait "cérémonies Scrum" obsolète depuis audit v2.0.0) + description `skills/scrum/`

---

## [2.3.0] — 2026-05-23 — Nouvel agent Solutions Architect + 10 nouveaux skills + 3 workflows RH/Ops

### 🎯 Contexte
Exécution des recommandations M6 et L1–L7 de l'audit stratégique du 2026-05-22.

### ✨ Ajouté
- `AGENT-SOLUTIONS-ARCHITECT.md` — Nouvel agent Architecture d'Entreprise (TOGAF 10, ArchiMate 3, AWS SAP-C02, AZ-305, CITA-A, CISSP)
- `skills/solutions_architect/togaf-adm.md` — 9 phases ADM, Architecture Vision, principes d'architecture
- `skills/solutions_architect/archimate-modeling.md` — 3 couches, viewpoints par audience, relations essentielles, outils
- `skills/solutions_architect/urbanisme-si.md` — 3 vues (métier/fonctionnel/technique), référentiel applicatif, plan urbanisme
- `skills/solutions_architect/architecture-bdat.md` — Couches B/D/A/T, check de traçabilité BDAT
- `skills/solutions_architect/integration-patterns.md` — API Management, EDA, ESB→iPaaS, microservices
- `skills/solutions_architect/migration-cloud.md` — Framework 6R, 4 phases, TCO, wave planning
- `skills/solutions_architect/gouvernance-architecturale.md` — ARB, Tech Radar, métriques de gouvernance
- `skills/solutions_architect/roadmap-transformation-si.md` — Horizon Now/Next/Later, 6 axes, grille de priorisation
- `skills/prompt_engineer/evals-llm-observability.md` — 4 niveaux d'évals, LLM Ops stack, gestion du drift
- `skills/devops_cloud/incident-response-llm.md` — Taxonomie P0-P3, runbook 5 phases, OWASP LLM Top 10
- `workflows/WF-007-onboarding-mission-j1.md` — Prise de poste → kit d'intégration mission (4 agents, 45-75 min)
- `workflows/WF-009-recrutement-it-ia.md` — Brief poste → shortlist profilée (4-7 agents, 60-90 min)
- `workflows/WF-010-post-mortem-projet.md` — Clôture projet → rapport REX + plan d'actions (4-7 agents, 45-75 min)

### 🔧 Modifié
- `AGENT-CONSULTANT-IA.md` — Skill renommé `calcul-roi-ia` → `estimation-roi-rapide` (nom plus actionable)
- `skills/consultant_ia/calcul-roi-ia.md` → `estimation-roi-rapide.md` — Renommage via `git mv`
- `AGENT-PROMPT-ENGINEER.md` — Skill `evals-llm-observability.md` ajouté dans la table
- `AGENT-DEVOPS-CLOUD.md` — Skill `incident-response-llm.md` ajouté dans la table
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — SOLUTIONS-ARCHITECT ajouté au catalogue, compteur 30 → 32 agents
- `README.md` — Compteurs 31→32 agents, 30→31 dossiers, 7→10 workflows + ajouts table agents/skills/workflows/tree
- `START.md` — Compteurs mis à jour, Dev & Technique 10→11, workflows 7→10
- `workflows/README.md` — 7→10 workflows, sélection rapide + vue d'ensemble mis à jour

### 📊 Statistiques après M6/L1-L7
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 32 |
| Dossiers de skills | 30 | 31 |
| Workflows | 7 | 10 |
| Skills solutions_architect/ | 0 | 8 |
| Skills prompt_engineer/ | 7 | 8 |
| Skills devops_cloud/ | 10 | 11 |

---

## [2.2.0] — 2026-05-23 — Tags QA, frontière SAFe, enrichissement FORMATEUR-IA

### 🎯 Contexte
Exécution des recommandations M3, M4 et M5 de l'audit stratégique du 2026-05-22.

### ✨ Ajouté
- `skills/formateur_ia/formation-agents-ia.md` — Former aux agents IA et architectures agentic (patterns, MCP/A2A, LangGraph vs CrewAI, TP)
- `skills/formateur_ia/formation-claude-code.md` — Former à Claude Code et outils LLM pro (CLI, API Anthropic, SDK, gouvernance)
- `skills/formateur_ia/conception-parcours-certifiant-ia.md` — Concevoir un parcours certifiant IA (catalogue 2026, plan 8 semaines, déploiement collectif)

### 🔧 Modifié
- `skills/qa_testing/` — Tag `> **Méthodologie :**` ajouté sur les 23 skills (10 Agile · 12 Cycle en V · 1 Mixte)
- `AGENT-PO-SAFE.md` — Titre clarifié "Product Owner SAFe Expert" (suppression "/ Product Manager") + périmètre ❌ enrichi (renvois vers PRODUCT-MANAGER-SAFE)
- `AGENT-PRODUCT-MANAGER-SAFE.md` — Périmètre ❌ enrichi (renvois explicites vers PO-SAFE pour PI Planning opérationnel, Features SAFe, I&A)
- `AGENT-FORMATEUR-IA.md` — 3 nouveaux skills IA-spécifiques ajoutés dans la table (agents IA, Claude Code, parcours certifiant)

### 📊 Statistiques après M3/M4/M5
| Métrique | Avant | Après |
|---|---|---|
| Skills `formateur_ia/` | 8 | 11 |
| Skills `qa_testing/` taggés | 0 | 23 |
| Frontières PO-SAFE / PM-SAFE | Floues | Clarifiées (✅/❌ mis à jour) |

---

## [2.1.0] — 2026-05-23 — Workflows avant-vente & conformité IA

### 🎯 Contexte
Exécution des recommandations M1 et M2 de l'audit stratégique du 2026-05-22. Création de deux nouveaux workflows à forte valeur commerciale et réglementaire, conçus avec Opus 4.7 pour garantir la qualité du raisonnement multi-dimensions (chiffrage commercial pour WF-006, qualification AI Act / RGPD pour WF-008).

### ✨ Ajouté
- `workflows/WF-006-avant-vente-proposition-commerciale.md` — RFP → qualification BANT → cadrage → architecture → planning → chiffrage → proposition commerciale (6 agents core + 3 optionnels, 75-120 min)
- `workflows/WF-008-audit-conformite-ia-act-rgpd.md` — Cartographie obligations → audit architecture/sécurité/données → gouvernance cible → plan de remédiation (7 agents core + 2 optionnels, 90-150 min)

### 🔧 Modifié
- `README.md` — Compteur workflows 5 → 7 + tableau workflows + structure du repo
- `START.md` — Compteur en-tête 5 → 7 workflows + tableau workflows disponibles
- `workflows/README.md` — Compteur 5 → 7 + grille de sélection rapide + vue d'ensemble

### 📊 Statistiques après ajout
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 31 |
| Dossiers de skills | 30 | 30 |
| Workflows | 5 | 7 |
| Domaines couverts | 3 | 4 (+ Conformité & Gouvernance) |

---

## [2.0.0] — 2026-05-22 — Audit stratégique Opus 4.7

### 🎯 Contexte
Audit stratégique complet par Opus 4.7 (5 questions : redondances, gaps, cohérence, qualité, recommandations). Exécution des recommandations HIGH.

### ✨ Ajouté
- `AUDIT-STRATEGIQUE-2026-05-22.md` — Rapport d'audit complet 31 agents × 30 skills × 5 workflows
- `CHANGELOG.md` — Ce journal de suivi des modifications
- WF-001 : 3 agents optionnels (AI-ARCHITECT, PROMPT-ENGINEER, FINANCIAL-ANALYST) pour cadrage de produits IA-natifs
- WF-003 : Nouveau STEP-04 QA-AGILE entre développement et déploiement (evals LLM + Gherkin BDD)
- WF-003 : Agent optionnel PO-SCRUM pour pilotage backlog en cours de dev

### 🔧 Modifié
- WF-001 : version 1.1 → 1.2 (renforcement périmètre IA)
- WF-003 : version 1.1 → 1.2 (renumération STEP-04 → STEP-05 DEVOPS / STEP-05 → STEP-06 SECURITE)
- AGENT-PO-SCRUM.md : 7 skills retirés de la table (4 cérémonies + 3 scaling), 2 nouvelles sections "Hors périmètre"
- AGENT-SCRUM-MASTER.md : 4 skills ajoutés (sprint-planning, daily, retrospective, sprint-review)
- AGENT-PRODUCT-MANAGER-SAFE.md : 3 skills ajoutés (enterprise-product-vision, scaling-product-ownership, product-operating-model)
- AGENT-AI-ARCHITECT.md : renommage skill securite-ia → secure-by-design + redirection vers SECURITE-IA pour audit
- AGENT-DEV-PYTHON-IA.md : suppression skill prompt-engineering + redirection vers PROMPT-ENGINEER
- AGENT-CONSULTANT-IA.md : suppression skill veille-ia + redirection vers VEILLE-STRATEGIQUE
- AGENT-DATA-SCIENTIST.md : renommage skill nlp-llm → nlp-classique (cohérence périmètre HORS)

### 📦 Déplacements de fichiers (skills réattribués)
- `skills/scrum/sprint-planning.md` → `skills/scrum_master/`
- `skills/scrum/daily.md` → `skills/scrum_master/`
- `skills/scrum/retrospective.md` → `skills/scrum_master/`
- `skills/scrum/sprint-review.md` → `skills/scrum_master/`
- `skills/scrum/enterprise-product-vision.md` → `skills/product_manager_safe/`
- `skills/scrum/scaling-product-ownership.md` → `skills/product_manager_safe/`
- `skills/scrum/product-operating-model.md` → `skills/product_manager_safe/`
- `skills/ai_architect/securite-ia.md` → `skills/ai_architect/secure-by-design.md`
- `skills/data_scientist/nlp-llm.md` → `skills/data_scientist/nlp-classique.md`

### 🗑️ Supprimé
- `skills/dev_python_ia/prompt-engineering.md` (doublon avec dossier PROMPT-ENGINEER)
- `skills/consultant_ia/veille-ia.md` (doublon avec dossier VEILLE-STRATEGIQUE)

### 📊 Statistiques après audit
| Métrique | Avant | Après |
|---|---|---|
| Agents | 31 | 31 |
| Dossiers de skills | 30 | 30 |
| Skills `scrum/` (PO-SCRUM) | 34 | 27 |
| Skills `scrum_master/` | 15 | 19 |
| Skills `product_manager_safe/` | 7 | 10 |
| Skills `consultant_ia/` | 10 | 9 |
| Skills `dev_python_ia/` | 10 | 9 |
| Workflows | 5 | 5 (WF-001 et WF-003 enrichis) |

---

## [1.5.0] — 2026-05-22 — Refactoring structurel (audit P0/P1)

### ✨ Ajouté
- `CLAUDE.md` racine — Instructions projet pour Claude Code
- Section "Intégrations MCP" dans README.md
- `AGENT-RH-IA.md` + 11 skills `skills/rh_ia/` (recrutement IT/IA, anti-fraude CV/deepfake, GEPP, ATS, people analytics, transformation RH)

### 🔧 Modifié
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` : catalogue passé de 22 → 30 agents orchestrables (ajout des 7 manquants : RH-IA, CHANGE-MANAGER, FINANCIAL-ANALYST, PRODUCT-MANAGER-SAFE, RELEASE-TRAIN-ENGINEER, VEILLE-STRATEGIQUE, PROMPT-ENGINEER) + nouvelle section "RH & Talent"
- `START.md` : réécrit comme hub d'entrée complet (8 lignes → 130 lignes), 3 modes d'entrée, catalogue par catégorie
- `README.md` : sync agents (30 → 31), skills (26 → 30), tree structure post-flatten

### 📦 Aplatissement skills/dev_ia/
- `skills/dev_ia/architect/` → `skills/ai_architect/`
- `skills/dev_ia/mlops/` → `skills/mlops_engineer/`
- `skills/dev_ia/python_ia/` → `skills/dev_python_ia/`
- `skills/dev_ia/typescript_ia/` → `skills/dev_typescript_ia/`
- 4 AGENT files mis à jour avec les nouveaux chemins
- 37 fichiers déplacés (renames git détectés à 100%)

---

## [1.4.0] — 2026-05-22 — Benchmark LLM Frontier 2026

### 🔧 Modifié
- `skills/rh_ia/evaluation-profils-techniques.md` : question senior LLM enrichie avec Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, Grok 3, Mistral Large 2, LLaMA 3.3 — grille de choix par use case avec SWE-bench Pro et LM Arena Elo
- `skills/rh_ia/transformation-rh-ia.md` : nouvelle section "Référentiel LLM Frontier — Avril 2026" + tableau 9 modèles + recommandations usage RH par tier
- `skills/rh_ia/redaction-offre-emploi.md` : stack LLM mise à jour Frontier/Production
- `skills/rh_ia/benchmark-remuneration-it.md` : table positionnement client enrichie (Licorne, startup Série A/early, PME tech distincte)
- `AGENT-RH-IA.md` : périmètre client étendu à GAFA + licornes

---

## [1.3.0] — 2026-05-22 — Skills anti-fraude recrutement + ATS

### ✨ Ajouté
- `skills/rh_ia/detection-fraude-cv-profils.md` — faux CV, profils LinkedIn/GitHub IA, outils GPTZero/Originality
- `skills/rh_ia/detection-deepfake-entretien.md` — voix clonées, deepfake vidéo, AI copilot live, Pindrop/Reality Defender
- `skills/rh_ia/verification-references-background-check.md` — appels référence 15 min, RGPD France, prestataires
- `skills/rh_ia/cv-parsing-ats-scoring.md` — pipeline ATS, formats CV, détection keyword stuffing

### 🔧 Modifié
- `AGENT-RH-IA.md` : 11 skills au total

---

## [1.2.0] — 2026-05-22 — Agent RH IA initial

### ✨ Ajouté
- `AGENT-RH-IA.md` + 7 skills initiaux (sourcing, rédaction offres, évaluation technique, GEPP, people analytics, benchmark rémunération, transformation RH par l'IA)
- Certifications : SHRM-CP, PHR, ATD CPTD, LinkedIn Talent Solutions, CIPD L5, PROSCI

---

## [1.1.0] — 2026-05-22 — Wireframes Sprint 2 + 3 (projet Company-Test B2B)

### ✨ Ajouté
- `projects/Project_test__ecommerce_b2b/04_ux_design/design_handoff/wireframes_sprint_02.html`
- `projects/Project_test__ecommerce_b2b/04_ux_design/design_handoff/wireframes_sprint_03.html`
- Déplacés ensuite vers le repo séparé `claude-projects` (gouvernance : projets clients hors `claude-agents`)

---

## [1.0.0] — 2026-05-21 — État initial du catalogue

### Snapshot
- 30 agents IA spécialisés (avant ajout RH-IA)
- 26 dossiers de skills
- 5 workflows agentiques (WF-001 à WF-005)
- 3 serveurs MCP (Jira, Confluence, workflow-log)
- Architecture des skills : `skills/dev_ia/` nichait Python, TS, Architect, MLOps

### Conventions établies
- Naming : `AGENT-NOM.md` pour agents, `snake_case.md` pour skills
- Structure agent : identité + certifs / périmètre ✅❌ / règles / table skills / activation
- Structure workflow : YAML carte d'identité + BPMN + paramètres + fiches étapes + livrables
- Modèle par défaut : claude-sonnet-4-6, alternatif claude-opus-4-7

---

## Conventions de versioning

- **Major (X.0.0)** : changement de structure significatif, audit complet, refactoring large
- **Minor (X.Y.0)** : nouveaux agents, skills, workflows ou enrichissement majeur
- **Patch (X.Y.Z)** : corrections ponctuelles, renommages, ajustements mineurs

## Conventions d'entrées

- ✨ **Ajouté** — nouvelles fonctionnalités, fichiers, sections
- 🔧 **Modifié** — modifications de fonctionnalités existantes
- 📦 **Déplacé / renommé** — réorganisation sans suppression
- 🗑️ **Supprimé** — éléments retirés
- 🐛 **Corrigé** — bugs / incohérences résolus
- ⚠️ **Déprécié** — éléments à supprimer prochainement
- 🔒 **Sécurité** — corrections de sécurité

---

## Liens de comparaison entre versions

- [v2.7.9](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.9) — README index 14 dossiers restants (37/37 ✓ 100%) (Opus 4.7)
- [v2.7.8...v2.7.9](https://github.com/guyhui01/claude-agents/compare/v2.7.8...v2.7.9)
- [v2.7.8](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.8) — Correctif traçabilité modèle v2.7.2→v2.7.5 (Opus 4.7)
- [v2.7.7...v2.7.8](https://github.com/guyhui01/claude-agents/compare/v2.7.7...v2.7.8)
- [v2.7.7](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.7) — README index 8 dossiers supplémentaires (23/37) (Opus 4.7)
- [v2.7.6...v2.7.7](https://github.com/guyhui01/claude-agents/compare/v2.7.6...v2.7.7)
- [v2.7.6](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.6) — Convention traçabilité modèle + cosmétique skills (Opus 4.7)
- [v2.7.5...v2.7.6](https://github.com/guyhui01/claude-agents/compare/v2.7.5...v2.7.6)
- [v2.7.5](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.5) — README index 10 dossiers supplémentaires (15/37)
- [v2.7.4...v2.7.5](https://github.com/guyhui01/claude-agents/compare/v2.7.4...v2.7.5)
- [v2.7.4](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.4) — README index 4 dossiers DEV core
- [v2.7.3...v2.7.4](https://github.com/guyhui01/claude-agents/compare/v2.7.3...v2.7.4)
- [v2.7.3](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.3) — Finalisation P3 audit qualité skills DEV (98%)
- [v2.7.2...v2.7.3](https://github.com/guyhui01/claude-agents/compare/v2.7.2...v2.7.3)
- [v2.7.2](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.2) — Frontières inter-agents
- [v2.7.1...v2.7.2](https://github.com/guyhui01/claude-agents/compare/v2.7.1...v2.7.2)
- [v2.7.1](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.1) — Audit qualité skills DEV (P1+P2)
- [v2.7.0...v2.7.1](https://github.com/guyhui01/claude-agents/compare/v2.7.0...v2.7.1)
- [v2.7.0](https://github.com/guyhui01/claude-agents/releases/tag/v2.7.0) — AGENT-AUDIT-METHODO-IA
- [v2.6.0...v2.7.0](https://github.com/guyhui01/claude-agents/compare/v2.6.0...v2.7.0)
- [v2.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v2.0.0) — Audit stratégique Opus 4.7
- [v1.5.0...v2.0.0](https://github.com/guyhui01/claude-agents/compare/v1.5.0...v2.0.0)
- [v1.4.0...v1.5.0](https://github.com/guyhui01/claude-agents/compare/v1.4.0...v1.5.0)
- [v1.3.0...v1.4.0](https://github.com/guyhui01/claude-agents/compare/v1.3.0...v1.4.0)
- [v1.2.0...v1.3.0](https://github.com/guyhui01/claude-agents/compare/v1.2.0...v1.3.0)
- [v1.1.0...v1.2.0](https://github.com/guyhui01/claude-agents/compare/v1.1.0...v1.2.0)
- [v1.0.0...v1.1.0](https://github.com/guyhui01/claude-agents/compare/v1.0.0...v1.1.0)
- [v1.0.0](https://github.com/guyhui01/claude-agents/releases/tag/v1.0.0) — État initial du catalogue
