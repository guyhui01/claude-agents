# Skill — Diagnostic de Maturité IA

> Certifications : **CAP IABAC** · **Google Cloud Digital Leader** · **Azure AI-900** · **NIST AI RMF Certification** · **ISO/IEC 42001 Lead Implementer** · MIT Sloan AI Strategy Executive Programs · Wharton AI for Business
> Agent : AGENT-CONSULTANT-IA.md

## Objectif

Évaluer rigoureusement le **niveau de maturité IA** d'une organisation via **triangulation de 3+ référentiels normatifs** (Gartner AI Maturity · MIT Sloan/BCG · Cap Gemini Digital Mastery), couplé à la **gouvernance normative** (NIST AI RMF 1.0 · ISO/IEC 42001:2023 AIMS · AI Act UE 2024/1689) et benchmarké sur le **secteur réel** (McKinsey State of AI · Stanford HAI AI Index · Gartner Hype Cycle), afin de **prioriser les investissements** IA et définir une **roadmap chiffrée** réaliste.

## Cadre référentiels mobilisés (4 catégories)

| Catégorie | Référentiels normatifs |
|---|---|
| **Modèles de maturité IA** | Gartner AI Maturity Model · MIT Sloan/BCG · Cap Gemini Digital Mastery · Microsoft AI Maturity · IBM AI Ladder · CMMI for AI |
| **Gouvernance normative** | NIST AI RMF 1.0 (2023) · ISO/IEC 42001:2023 AIMS · ISO/IEC 23894:2023 · AI Act UE 2024/1689 · OECD AI Principles 2019/2024 |
| **Benchmarks marché** | McKinsey State of AI (annuel) · Stanford HAI AI Index (annuel) · Gartner Hype Cycle for AI (annuel) · PWC AI Predictions · Deloitte State of AI |
| **Compétences & Data** | DAMA-DMBOK 2 (2017) · EDM Council DCAM · Coursera/MIT AI for Business · Wharton/INSEAD AI Strategy |

## Gartner AI Maturity Model (2019/2020) — 5 niveaux

| Niveau | Nom | Caractéristiques clés | % entreprises (Gartner 2023) |
|:---:|---|---|:---:|
| **1** | **Awareness** | Discussions stratégiques, pas d'investissement concret | ~20% |
| **2** | **Active** | POCs isolés, expérimentations métier, pas de gouvernance | ~30% |
| **3** | **Operational** | IA en production sur quelques cas d'usage, gouvernance émergente, équipe data dédiée | ~30% |
| **4** | **Systemic** | IA intégrée à plusieurs processus business, plateforme MLOps, gouvernance mature | ~15% |
| **5** | **Transformational** | IA au cœur de la stratégie business, avantage compétitif mesuré, culture IA-first | ~5% |

**Mesure type** : positionnement organisation × benchmark sectoriel × ambition cible 18-36 mois.

## MIT Sloan / BCG AI Maturity — 4 cohorts (Reshaping Business With AI, 2018+)

Étude annuelle MIT SMR + BCG sur 3 000+ organisations dans 28 industries — segmentation en 4 cohorts mesurées sur **5 piliers** (Strategy / Talent / Data / Tech / Culture) :

| Cohort | % entreprises | Caractéristiques différenciantes |
|---|:---:|---|
| **Implementers** | ~18% | Adoption IA limitée, POCs sans business value claire |
| **Builders** | ~16% | Investissent dans la data/tech mais ROI faible (gap exécution) |
| **Practitioners** | ~27% | Cas d'usage prouvés mais cantonnés à quelques fonctions |
| ⭐ **Leaders** | ~39% | IA au cœur stratégie, **3× plus de ROI** que Practitioners |

**Différenciateurs Leaders (vs autres cohorts)** :
- 75% intègrent IA dans stratégie corporate (vs 25% Builders)
- 80% ont une plateforme MLOps unifiée (vs 30% Practitioners)
- 90% mesurent ROI IA via KPI business (vs 45% autres)
- Culture "Learn fast, fail fast" institutionnalisée
- Compétences hybrides Business + Data Science fortement valorisées

## Cap Gemini Digital Mastery (Westerman, Bonnet, McAfee 2012/2014)

Matrice 2×2 — **Digital Capabilities** (data, IA, plateformes, cloud) × **Leadership Capabilities** (vision, gouvernance, change management) :

```
                  HIGH LEADERSHIP CAPABILITIES
                              │
   CONSERVATIVES              │           DIGITAL MASTERS
   (Strong leadership,        │           (Strong in both — top
    weak digital execution)   │            performers, +26% revenue)
                              │
   LOW ──────────────────────┼────────────────────── HIGH
   DIGITAL CAPABILITIES       │           DIGITAL CAPABILITIES
                              │
   BEGINNERS                  │           FASHIONISTAS
   (Weak in both — at         │           (Strong digital, no
    risk of disruption)       │            strategic leadership)
                              │
                  LOW LEADERSHIP CAPABILITIES
```

**Étude 184 entreprises** : Digital Masters surperforment +26% de profitabilité moyenne vs Beginners. **Conservatives sont mieux placés** que Fashionistas pour devenir Masters (leadership > tech sans vision).

## Microsoft AI Maturity Model + IBM AI Ladder

**Microsoft (5 niveaux)** : Foundational → Approaching → Aspirational → Mature → Leading — axé déploiement Azure AI.

**IBM AI Ladder (4 marches)** : **Collect** (data foundation) → **Organize** (data governance) → **Analyze** (insights) → **Infuse** (IA embedded dans processus). Référence pour priorisation data avant IA.

## Grille d'évaluation enrichie — 8 dimensions (vs 6 historiques)

| # | Dimension | Indicateurs évalués | Score /5 | Pondération |
|:---:|---|---|:---:|:---:|
| 1 | **Stratégie & Vision IA** | Ambition IA documentée, alignement direction, budget annuel dédié, sponsor exécutif | | 15% |
| 2 | **Data & Infrastructure** | Qualité données, cloud/edge, DataOps, data catalog, real-time pipelines | | 15% |
| 3 | **Compétences & Talents** | Data scientists, ML engineers, prompt engineers, formation continue, partenariats académiques | | 12% |
| 4 | **Gouvernance & Éthique IA** | Comité IA, AI policy, biais/transparence, NIST AI RMF, ISO 42001 | | 12% |
| 5 | **Cas d'usage & Valeur business** | Nombre de cas en prod, ROI mesuré, adoption métier, time-to-value | | 15% |
| 6 | **Technologie & MLOps/LLMOps** | Plateforme MLOps unifiée, CI/CD modèles, monitoring drift, model registry | | 11% |
| 7 | **Sécurité & Conformité** *(nouveau)* | NIS2, AI Act classification, RGPD/DPIA, OWASP LLM Top 10, third-party risk | | 10% |
| 8 | **Culture & Change Management** *(nouveau)* | Adoption métier, formation utilisateurs, communication interne, gestion résistance | | 10% |

**Score global pondéré** = Σ (score dim. × pondération). Échelle 0-5 avec interprétation : 0-1.5 Initial · 1.5-2.5 Active · 2.5-3.5 Operational · 3.5-4.5 Systemic · 4.5-5 Transformational.

## Couplage NIST AI RMF 1.0 (janv. 2023) — 4 fonctions × diagnostic

| Fonction NIST | Question diagnostic | Score maturité |
|---|---|:---:|
| **Govern** | Qui est responsable IA ? Quelles politiques ? Quelle culture ? | Évalue dim. 1, 4 |
| **Map** | Quel contexte projet, acteurs, risque tolérable ? Classification AI Act ? | Évalue dim. 4, 7 |
| **Measure** | Comment quantifier risques, performance, biais ? Dashboard métriques ? | Évalue dim. 5, 6 |
| **Manage** | Comment traiter, monitorer, dégrader gracieusement ? Plan mitigation ? | Évalue dim. 4, 6, 7 |

**Règle** : tout score NIST < 3/5 sur **Govern** = blocage déploiement IA haut risque (AI Act art. 6, Annexe III) tant que la gouvernance n'est pas remontée.

## Couplage ISO/IEC 42001:2023 AIMS — AI Management System certifiable

Référentiel **AI Management System** certifiable (équivalent ISO 27001 pour cybersec) — cycle **PDCA** (Plan-Do-Check-Act) :

| Phase PDCA | Exigence ISO 42001 | Score maturité |
|---|---|:---:|
| **Plan** | AI policy, AI risk management, AI impact assessment, roles & responsibilities | Dim. 1, 4 |
| **Do** | AI system lifecycle, data management, security controls, third-party AI | Dim. 2, 6, 7 |
| **Check** | AI performance monitoring, internal audit, management review | Dim. 5, 6 |
| **Act** | Continual improvement, nonconformity handling, corrective actions | Dim. 8 |

**Certification ISO 42001** : objectif progressif sur 12-24 mois — différenciation marché (Conseil, banque, santé, industrie).

## Méthode de diagnostic structurée — 4 phases sur 4-8 semaines

### Phase 1 — Préparation (semaine 1)
- Cadrage avec Sponsor : périmètre, objectifs, KPI succès, timeline
- Identification parties prenantes : DSI, CDO/Directeur IA, DRH, métiers clés, RSSI, DPO, Juridique
- Communication interne kick-off

### Phase 2 — Collecte (semaines 2-4)
**Triangulation 3 sources** :
- **Interviews qualitatives** : 12-25 entretiens individuels (30-45 min) — direction, DSI, CDO, métiers, data scientists, RSSI, juridique, RH
- **Questionnaire auto-évaluation** : 60-80 questions sur 8 dimensions, échelle Likert 1-5, diffusé via Typeform/Qualtrics aux équipes data/IA + managers métier (cible 100-300 répondants)
- **Revue documentaire** : stratégie SI, organigrammes, projets IA en cours, gouvernance, contrats fournisseurs IA, charte IA, DPIA, AI registry

### Phase 3 — Analyse (semaines 5-6)
- Cotation 8 dimensions par triangulation sources + pondération
- Positionnement Gartner AI Maturity (1-5)
- Classification cohort MIT Sloan (Implementers/Builders/Practitioners/Leaders)
- Quadrant Cap Gemini (Beginners/Conservatives/Fashionistas/Digital Masters)
- Couplage NIST AI RMF (Govern/Map/Measure/Manage gaps)
- Benchmark sectoriel (McKinsey + Stanford AI Index + Gartner Hype Cycle)
- Identification quick wins (< 3 mois ROI) vs initiatives structurelles (12-18 mois)

### Phase 4 — Restitution (semaines 7-8)
- Pré-validation Sponsor (J-7 du COSTRAT)
- Présentation COSTRAT : 30-45 min, 15-20 slides
- Workshop priorisation roadmap avec parties prenantes
- Plan d'action 90 jours + roadmap 18-36 mois

## Questionnaire auto-évaluation — Structure type

**60-80 questions** réparties sur 8 dimensions × 8-10 questions chacune, échelle Likert 1-5 :

```
Stratégie & Vision IA (8 questions, exemples)
  Q1. Notre organisation a une vision IA documentée et communiquée
       1 (pas du tout) ─── 2 ─── 3 ─── 4 ─── 5 (totalement d'accord)
  Q2. Un budget annuel IA est alloué et tracé
  Q3. Un sponsor exécutif (DG/COMEX) porte la stratégie IA
  ...

Data & Infrastructure (8 questions)
  Q9. Nous disposons d'un data catalog unifié (avec lineage)
  Q10. Nos données critiques sont disponibles en temps réel
  ...

[8 dimensions × 8-10 questions = 64-80 questions]
```

**Calcul score** : moyenne pondérée × pondération dimension × triangulation interviews.

## Benchmark sectoriel — Croisement référentiels marché

| Source | Donnée extraite | Usage diagnostic |
|---|---|---|
| **McKinsey State of AI** annuel | % adoption GenAI par secteur, ROI moyen IA, fonctions plus matures | Comparer maturité client vs moyenne secteur |
| **Stanford HAI AI Index Report** annuel | Adoption IA par taille entreprise, investissements VC IA, publications | Benchmark international |
| **Gartner Hype Cycle for AI** annuel | Phases technos (Innovation Trigger → Plateau of Productivity), maturité techno | Évaluer technologies en cours d'adoption |
| **PWC AI Predictions** annuel | Trends, ROI projeté, freins adoption par secteur | Cadrage roadmap stratégique |
| **Deloitte State of AI in the Enterprise** annuel | Maturité entreprise par taille/secteur, ROI mesuré | Calibration cohort MIT Sloan |

**Règle** : benchmark **toujours sectoriel** (banque ≠ santé ≠ industrie ≠ retail) — comparaison inter-sectorielle = anti-pattern majeur.

## Exemple chiffré sectoriel — Groupe hospitalier européen multi-pays

**Contexte anonymisé** : groupe hospitalier européen présent dans 4 pays Europe (mix CHU publics + cliniques privées), ~15 000 lits, ~45 000 personnels (médical + para-médical + administratif), CA ~5 Md€/an. Diagnostic maturité IA mené sur **6 semaines** par cabinet conseil externe + équipe Direction Médicale Innovation.

**Méthode appliquée** :
- 22 interviews (DG, DMI, DSI, CDO, RSSI, DPO, 8 chefs de service, 5 médecins, 3 data scientists, 2 cadres infirmiers)
- Questionnaire 72 questions diffusé à 850 personnels (220 répondants — médical 45%, para-médical 35%, admin/support 20%)
- Revue documentaire : stratégie SI, charte IA, 12 projets IA en cours, DPIA, contrats fournisseurs

**Scoring 8 dimensions T0 vs benchmark sectoriel santé** :

| Dimension | Score T0 /5 | Benchmark sectoriel santé | Écart |
|---|:---:|:---:|:---:|
| Stratégie & Vision IA | 3.0 | 2.8 | +0.2 ✅ |
| Data & Infrastructure | 2.0 | 2.5 | -0.5 🔴 |
| Compétences & Talents | 2.5 | 2.4 | +0.1 ✅ |
| Gouvernance & Éthique IA | 3.5 | 2.6 | +0.9 ⭐ |
| Cas d'usage & Valeur business | 2.0 | 2.7 | -0.7 🔴 |
| Technologie & MLOps/LLMOps | 1.5 | 2.0 | -0.5 🔴 |
| Sécurité & Conformité | 3.8 | 3.2 | +0.6 ⭐ |
| Culture & Change Management | 2.5 | 2.3 | +0.2 ✅ |
| **Score global pondéré** | **2.6/5** | **2.5/5** | +0.1 |

**Classifications croisées** :
- **Gartner** : niveau **2 "Active"** (POCs isolés, gouvernance émergente)
- **MIT Sloan cohort** : **Builders** (investissements data forts mais ROI faible)
- **Cap Gemini quadrant** : **Conservatives** (Leadership Capabilities fortes, Digital Capabilities faibles)
- **NIST AI RMF gap** : Govern 3.5/5 ✅, Map 2.8/5 🟡, Measure 1.8/5 🔴, Manage 2.5/5 🟡

**Cas d'usage IA identifiés (audit existant + opportunités)** :
- En production (5) : aide à la lecture radiologique (5 sites pilotes), chatbot pré-consultation, planification bloc opératoire (1 site), détection précoce septicémie (POC unité USI), copilot codification CIM-10
- En POC (7) : génomique oncologique, prédiction réadmissions, scribe médical, vision IA dermatologie, parcours patient optimisé, recherche clinique matching essais, optimisation stocks pharmacie
- Recommandés (12) : voir roadmap

**Roadmap 18 mois recommandée** :

| Phase | Durée | Objectif | Investissement | ROI cible |
|---|:---:|---|:---:|---|
| **Phase 1 — Foundations + Quick wins** | T0-T+6 | Plateforme MLOps unifiée + scaling 3 cas prouvés (radiologie IA, scribe médical, chatbot pré-conso) | 4.5 M€ | Productivité radiologues +25%, temps administratif médecins -30%, NPS patients +8 pts |
| **Phase 2 — Scaling cas d'usage** | T+6-T+12 | MLOps mature + déploiement 5 nouveaux cas (septicémie, réadmissions, génomique limitée, dermatologie, optimisation bloc) | 5 M€ | Mortalité septicémie -15%, réadmissions -8%, taux occupation bloc +12% |
| **Phase 3 — Transformational** | T+12-T+18 | Génomique de précision étendue, recherche clinique IA, parcours patient end-to-end IA | 2.5 M€ | Time-to-treatment cancer -20%, recrutement essais cliniques x2 |

**Budget global** : **12 M€** sur 18 mois (CAPEX 7 M€ + OPEX 5 M€)

**Conformité réglementaire intégrée** :
- AI Act classification : 8 cas haut risque (Annexe III), 4 cas risque limité — DPIA + documentation technique obligatoire
- ISO/IEC 42001 : objectif certification AIMS T+18 mois (différenciation marché santé)
- NIST AI RMF : couverture 4 fonctions intégrée à la gouvernance projet IA

**Gains projetés T+18 mois** (post-implémentation) :
- Cohort MIT Sloan : passage **Builders → Practitioners** (cible **Leaders** T+36)
- Gartner : niveau 2 → **niveau 3.5 "Operational/Systemic"**
- Productivité personnel médical : +18% (temps libéré sur tâches valeur ajoutée clinique)
- Réduction durée séjour moyenne : -8% (parcours optimisé + détection précoce)
- Mortalité hospitalière : -12% (détection précoce septicémie + AI-assisted triage)
- NPS patients : 32 → **52**
- ROI programme IA : **22 mois** (gains qualité + productivité > investissement)

## 8 anti-patterns diagnostic maturité IA

- ❌ **Modèle de maturité unique non triangulé** (Gartner seul) → biais cabinet conseil, pas de robustesse — minimum 3 référentiels (Gartner + MIT Sloan + Cap Gemini)
- ❌ **Scoring 1-5 sans benchmark sectoriel** → interprétation impossible, "3/5" peut signifier excellent (santé) ou faible (tech)
- ❌ **Diagnostic IT-only** (oublier dimensions métier, culture, change management) → roadmap technocentrée vouée à l'échec adoption
- ❌ **Pas de couplage NIST AI RMF + ISO 42001** → diagnostic maturité sans audit gouvernance, blocage déploiement haut risque inévitable
- ❌ **Benchmark générique inter-sectoriel** (banque ≠ santé ≠ industrie) → comparaisons faussées, plans d'action mal calibrés
- ❌ **Recommandations génériques** ("améliorer culture data", "investir MLOps") → pas actionnables, non chiffrées, non priorisées
- ❌ **Pas de quick wins (< 3 mois)** identifiés → roadmap démotivante, perte de momentum projet
- ❌ **Diagnostic livré sans pré-validation Sponsor** → rejet à la restitution COSTRAT = perte 4-8 semaines + crédibilité cabinet

## Outils

- **Plateformes diagnostic assistées** : Gartner Ignition · Forrester Decision Tools · IBM AI Adoption Assessment · Microsoft AI Maturity Assessment · BCG Build · McKinsey QuantumBlack diagnostic
- **Questionnaires & enquêtes** : Typeform · Qualtrics · SurveyMonkey · MS Forms · Confluence Forms
- **Interviews qualitatives** : Notion · Dovetail · NVivo (analyse qualitative) · Otter.ai (transcription)
- **Radar/visualisation** : PowerBI · Tableau · Miro (radar collaboratif) · Lucidchart · D3.js custom
- **Benchmark sectoriel** : Gartner Subscriptions · Forrester Wave · IDC MarketScape · McKinsey Insights · Stanford AI Index (gratuit)
- **Documentation diagnostic** : Confluence · Notion · SharePoint · GitBook (rapports clients)
- **Cartographie cas d'usage IA** : Productboard · Aha! · Notion · Airtable (AI Use Case Registry)

## Livrables

- **Radar de maturité IA 8 dimensions** (visualisation T0 + cible 18 mois)
- **Rapport diagnostic complet** (40-60 pages) : méthodo, scoring détaillé, benchmark sectoriel, gaps NIST AI RMF/ISO 42001, recommandations
- **Synthèse exécutive COSTRAT** (10-15 slides)
- **Benchmark sectoriel chiffré** (positionnement vs McKinsey + Stanford AI Index + Gartner)
- **Cartographie cas d'usage IA** (en prod + POC + recommandés × niveau de risque AI Act × ROI estimé)
- **Quick wins identifiés** (< 3 mois ROI, plan détaillé)
- **Roadmap 18-36 mois** chiffrée (phases × investissement × ROI projeté × jalons)
- **Plan d'action 90 jours** (immédiat post-restitution)
- **AI Risk Register initial** (couplage NIST AI RMF)
- **Plan de conformité ISO/IEC 42001** (si certification visée)

## Format de sortie

Pour chaque mission diagnostic, précise :
- **Secteur client** : banque/finance · santé · industrie · retail · télécom · énergie · public · scale-up tech · défense
- **Taille organisation** : PME (< 250 collab.) · ETI (250-5 000) · grand groupe (5 000-50 000) · multinational (> 50 000)
- **Maturité IA estimée a priori** : nulle (greenfield) · POCs isolés · production limitée · scaling · mature (recalibrage)
- **Budget d'étude** : diagnostic léger (15-30 K€, 3 sem.) · standard (40-80 K€, 6 sem.) · approfondi (100-200 K€, 8 sem. + plan transformation)
- **Délai de rendu attendu** : 3-8 semaines selon profondeur
- **Sponsorship** : DG · CDO · Directeur Innovation · DSI · COMEX
- **Réglementation sectorielle applicable** : AI Act haut risque (santé, recrutement, scoring crédit, biométrie, infra critiques), DORA (banque), MDR/IVDR (santé), ITAR (défense)

## Sources

- **Gartner AI Maturity Model** — Gartner Research (2019-2024) — 5 niveaux Awareness/Active/Operational/Systemic/Transformational
- **Ransbotham S., Kiron D., Gerbert P., Reeves M.** — *Reshaping Business With Artificial Intelligence*, MIT Sloan Management Review en partenariat avec BCG (2017+, mise à jour annuelle) — 4 cohorts Implementers/Builders/Practitioners/Leaders
- **Westerman G., Bonnet D., McAfee A.** — *Leading Digital: Turning Technology into Business Transformation* (HBR Press, 2014) + Cap Gemini Digital Mastery (2012, rev. 2017)
- **NIST AI Risk Management Framework 1.0** — National Institute of Standards and Technology (janvier 2023) — 4 fonctions Govern/Map/Measure/Manage
- **ISO/IEC 42001:2023** — Information technology — Artificial intelligence — Management system (AIMS) — certifiable
- **ISO/IEC 23894:2023** — Information technology — Artificial intelligence — Guidance on risk management
- **AI Act UE** — Règlement (UE) 2024/1689 du 13 juin 2024 — JO L 2024/1689 (4 niveaux risque)
- **OECD AI Principles** — OECD Council Recommendation (2019, révision 2024)
- **McKinsey State of AI** — McKinsey Global Institute (rapport annuel 2017+, ex. *The State of AI in 2024: Generative AI's breakout year*)
- **Stanford HAI AI Index Report** — Stanford Human-Centered AI Institute (annuel 2017+)
- **Gartner Hype Cycle for AI** — Gartner Research (annuel)
- **DAMA-DMBOK 2** — *DAMA Data Management Body of Knowledge*, 2nd edition (DAMA International, Technics Publications, 2017) — couplage data foundations
- **CMMI for Development & AI extensions** — Carnegie Mellon Software Engineering Institute
- **IBM AI Ladder** — IBM Cloud and Cognitive Software whitepapers (2019+)

## Voir aussi

- [benchmark-solutions-ia.md](benchmark-solutions-ia.md) — benchmark fournisseurs/solutions IA (Gartner MQ, Forrester Wave, IDC MarketScape)
- [feuille-route-ia.md](feuille-route-ia.md) — formalisation feuille de route IA post-diagnostic
- [transformation-digitale.md](transformation-digitale.md) — programme de transformation digitale englobant IA
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — AI Act conformité opérationnelle (classification 4 niveaux)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — gouvernance éthique IA, comité IA
- [`../juridique_ia/audit-conformite-ia.md`](../juridique_ia/audit-conformite-ia.md) — audit conformité IA (ISO 42001, NIST AI RMF)
- [`../juridique_ia/politique-ia-entreprise.md`](../juridique_ia/politique-ia-entreprise.md) — AI policy entreprise
- [`../scrum/po-ai-product.md`](../scrum/po-ai-product.md) — vision produit IA (PSPO-AI Scrum.org)
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — AI Risk Register NIST AI RMF
