# Skill — Transformation RH par l'IA
> Certifications : ATD CPTD (ATD) · CIPD Level 5 (CIPD) · PROSCI Change Management

## Objectif
Accompagner les équipes RH dans l'intégration de l'IA dans leurs processus : choix et déploiement d'ATS IA, automatisation du recrutement, qualification automatique de CV, entretiens assistés — tout en intégrant les enjeux éthiques et réglementaires (RGPD, biais algorithmiques).

## Cartographie des processus RH automatisables par l'IA

```
RECRUTEMENT
──────────────────────────────────────────────────────
Rédaction d'offres       → LLM (Claude Sonnet 4.6 ou équivalent marché) sur brief RH structuré
Sourcing booléen         → LinkedIn Recruiter, Seek Out, Hireez
Screening CV             → ATS IA : Greenhouse, Lever, SmartRecruiters
Qualification initiale   → Chatbot RH : MYA, Paradox (Olivia), Eightfold AI
Scheduling entretiens    → Calendly IA, GoodTime.io, Cronofy
Notes d'entretien        → Transcription IA : Fireflies, Otter.ai, Notion AI
Scorecard automatisée    → Structuration via LLM post-entretien
Onboarding digital       → Workflows automatisés : Workday, BambooHR, Rippling

FORMATION & DÉVELOPPEMENT
──────────────────────────────────────────────────────
Détection gaps compétences → Analyse SIRH + LLM
Recommandations parcours  → LMS IA : 360Learning, Cornerstone, Docebo AI
Génération contenu formation → Claude Opus 4.8 / Sonnet 4.6 (ou équivalent marché) + LMS
Évaluation post-formation  → Quiz génératif + analyse résultats

PEOPLE ANALYTICS
──────────────────────────────────────────────────────
Prédiction turnover       → Modèles ML sur données SIRH
Analyse engagement        → NLP sur enquêtes pulse
Reporting automatisé      → Power BI + Copilot, Tableau AI
```

## ATS IA — Comparatif Fonctionnel

| ATS | Points forts | Idéal pour | Prix indicatif |
|---|---|---|---|
| **Greenhouse** | Pipeline structuré, intégrations riches, scorecard | Scale-up, PME tech | ~6 000-15 000 €/an |
| **Lever** | UX candidat, CRM recrutement, nurturing | Croissance rapide | ~5 000-12 000 €/an |
| **SmartRecruiters** | Marketplace d'apps RH, volume | Grands groupes | ~15 000-40 000 €/an |
| **Workable** | Rapport qualité/prix, IA sourcing intégrée | PME < 200 salariés | ~3 000-8 000 €/an |
| **Eightfold AI** | Matching IA avancé, mobilité interne | > 500 salariés | Sur devis |
| **Paradox (Olivia)** | Chatbot recrutement, scheduling | Volume, retail, call center | Sur devis |
| **Recruitee** | Simple, collaboratif, prix abordable | Startups | ~2 000-5 000 €/an |

> ⚠️ **Prix indicatifs, ordres de grandeur non contractuels** (tarification souvent sur devis,
> au siège/volume). À vérifier auprès de chaque éditeur au moment du cadrage.

## Workflow de recrutement augmenté par l'IA

```
WORKFLOW RECRUTEMENT IA — 6 ÉTAPES
──────────────────────────────────────────────────────
ÉTAPE 1 — BRIEF & OFFRE (IA générative)
  Input : Brief manager (poste, stack, contexte)
  Outil : Claude Sonnet 4.6 / Opus 4.8 (ou équivalent frontier du marché) + template structuré
  Output: Offre rédigée, vérifiée, publiée automatiquement

ÉTAPE 2 — SOURCING (IA de matching)
  Input : Offre + critères ATS
  Outil : LinkedIn Recruiter IA, Eightfold, Seek Out
  Output: Longlist 15-20 profils qualifiés

ÉTAPE 3 — SCREENING (ATS IA)
  Input : CVs + lettre de motivation
  Outil : SmartRecruiters / Greenhouse scoring
  Output: Score 0-100, shortlist automatique, alertes biais

ÉTAPE 4 — QUALIFICATION (chatbot + planning)
  Input : Shortlist validée par le RH
  Outil : Paradox Olivia (Q&A) + GoodTime (scheduling)
  Output: Entretien planifié, fiche pré-qualif complète

ÉTAPE 5 — ENTRETIEN (IA assistée)
  Input : Entretien visio/présentiel
  Outil : Fireflies / Notion AI (transcription + résumé)
  Output: Compte-rendu structuré, scorecard pré-remplie

ÉTAPE 6 — DÉCISION & OFFRE
  Input : Scorecards + recommandation IA
  Outil : ATS dashboard + LLM pour synthèse Go/No-Go
  Output: Lettre d'offre générée, onboarding déclenché
```

## Éthique IA en RH — Cadre & Risques

```
RISQUES ÉTHIQUES & RÉGLEMENTAIRES
──────────────────────────────────────────────────────
BIAIS ALGORITHMIQUES
  Risque   : Discrimination indirecte (genre, âge, origine)
  Exemples : Amazon (outil de tri CV) · HireVue (analyse vidéo)
  Mitigation :
    · Audit régulier des modèles (métriques de biais)
    · Maintien d'une décision humaine finale (RGPD Art. 22)
    · Entraînement sur données diversifiées et équilibrées

RGPD & DONNÉES CANDIDATS
  Obligations :
    · Consentement explicite pour traitement automatisé
    · Droit d'opposition à la décision automatisée
    · Durée de conservation : 2 ans max (candidature non retenue)
    · Registre des traitements à jour (CNIL)

IA ACT EUROPÉEN (Règlement UE 2024/1689)
  Classification : recrutement / sélection / évaluation de candidats =
    SYSTÈME À HAUT RISQUE (art. 6 §2 + Annexe III, pt 4 « Emploi »)
  Échéance déployeur : obligations haut risque applicables au 2 août 2026
  Sanctions : jusqu'à 15 M€ ou 3 % du CA mondial
  Obligations :
    · Transparence sur l'utilisation de l'IA (informer candidats)
    · Supervision humaine obligatoire (human-in-the-loop)
    · Documentation technique + gestion des risques du système IA
    · Évaluation de conformité avant mise en service

BONNES PRATIQUES
  □ Politique IA RH documentée et partagée
  □ Formation des recruteurs à la lecture critique des scores IA
  □ Clause contractuelle prestataires ATS (sous-traitance RGPD)
  □ Bilan annuel biais algorithmiques avec DPO
  □ Charte usage IA en recrutement accessible aux candidats
```

## Matrice de maturité RH IA

```
NIVEAU 1 — INITIALE
  Processus manuels, pas d'ATS, tableurs Excel
  → Action : ATS basique (Recruitee/Workable) + LLM pour offres

NIVEAU 2 — STRUCTURÉE
  ATS en place, pas de scoring IA, peu d'automatisation
  → Action : Activer scoring IA ATS + chatbot pré-qualification

NIVEAU 3 — AUGMENTÉE
  IA sur sourcing et screening, reporting manuel
  → Action : People analytics, prédiction turnover, LMS IA

NIVEAU 4 — INTELLIGENTE
  Pipeline full IA avec supervision humaine, analytics prédictif
  → Action : Optimisation continue, audit biais, formation équipes
```

## Plan de transformation RH IA — Structure 6 mois

```
PHASE 1 — DIAGNOSTIC (M1)
  · Cartographie des processus RH actuels
  · Audit des outils (ATS, SIRH, LMS existants)
  · Évaluation maturité IA (niveau 1-4)
  · Identification des quick wins

PHASE 2 — CHOIX & CADRAGE (M2)
  · Sélection ATS IA (RFP si > 500 salariés)
  · Validation juridique RGPD / IA Act
  · Plan de conduite du changement (ADKAR)
  · Budget et ROI prévisionnel

PHASE 3 — DÉPLOIEMENT PILOTE (M3-M4)
  · Déploiement sur 1-2 postes pilotes
  · Formation équipe RH (outil + éthique)
  · Ajustements sur retours terrain
  · Mesure KPIs baseline

PHASE 4 — GÉNÉRALISATION (M5-M6)
  · Déploiement complet
  · Tableau de bord IA RH opérationnel
  · Rapport ROI : Time to Fill, Cost per Hire
  · Audit biais post-déploiement (DPO)
```

## ROI de l'IA en recrutement — Cadre de mesure

> ⚠️ **Pas de benchmark figé.** Les gains varient fortement selon le contexte (volume,
> maturité de départ, qualité des données). Mesure **ton propre baseline avant déploiement**,
> puis compare. Le tableau ci-dessous est un **exemple illustratif de structuration** d'un
> dashboard avant/après — **les valeurs ne sont pas des références de marché, à recalibrer
> sur ton périmètre**.

**Indicateurs à suivre** (avant IA → après IA, sur ton propre périmètre) :
- **Time to Fill** (jours médians entre ouverture et acceptation)
- **Cost per Hire** (coût complet par embauche : sourcing + temps recruteur + outils)
- **Taux de réponse sourcing** (InMail/messages personnalisés)
- **Temps de screening CV** (heures par poste)
- **Satisfaction manager** (enquête post-recrutement, échelle 1-5)

*Exemple illustratif de présentation (valeurs fictives, non benchmark) :*

| Indicateur | Avant IA | Après IA | Variation |
|---|---|---|---|
| Time to Fill | *baseline* | *mesuré* | *à calculer* |
| Cost per Hire | *baseline* | *mesuré* | *à calculer* |

> Pour des **repères de marché sourcés**, consulter des baromètres datés (ex. SHRM Recruiting
> Benchmarking — données US ; APEC / Numeum pour la France) plutôt que des chiffres non tracés.

## Référentiel LLM par tier

> ⚠️ Le paysage LLM évolue en continu — **aucun score figé ici**. Pour les benchmarks
> (SWE-bench, GPQA, LMArena Elo), se référer aux **classements publics à jour** :
> lmarena.ai · swebench.com · llm-stats.com. Un « #1 » écrit dans un support est faux le mois suivant.

| Tier | Modèles (familles) | Usage RH typique |
|---|---|---|
| **Frontier / Premium** | Claude **Opus 4.8** · OpenAI GPT · Google Gemini · xAI Grok · DeepSeek | Analyse CV complexe, offres premium, évaluation senior, agents de sourcing |
| **Production** | Claude **Sonnet 4.6** · équivalents multimodaux | Qualification initiale, scoring ATS, people analytics, chatbots RH |
| **Éco / rapide** | Claude **Haiku 4.5** · modèles « flash/mini » concurrents | Tâches simples à fort volume, latence faible |
| **Souverain / on-premise** | Mistral (RGPD FR/EU) · Llama (open-source, self-hosted) | Données sensibles, contraintes de résidence data EU |

> Critères de sélection : qualité sur la tâche (evals maison) · coût/token · latence · context window · multimodal · souveraineté/résidence data · réversibilité (anti lock-in).

**Usage RH recommandé par tier :**
- **Premium** → analyse CV complexe, génération d'offres premium, questions d'évaluation senior, agents de sourcing autonomes
- **Production** → qualification initiale, scoring ATS IA, dashboards people analytics, chatbots RH
- **Éco/Rapide** → volume élevé, screening de masse, réponses auto candidats
- **Souverain/Open-source** → données RH sensibles, contexte RGPD strict, déploiement on-premise client

## Livrables
- Audit de maturité RH IA (niveau 1-4) avec recommandations
- Comparatif ATS IA personnalisé selon contexte client
- Roadmap transformation RH IA (6-12 mois)
- Politique IA RH + charte éthique candidats
- Formation équipe RH : usage IA + lecture critique des scores

## Format de sortie
Précise : taille de l'équipe RH, volume de recrutements annuels, ATS actuel (si existant), budget transformation, enjeux prioritaires (rapidité / qualité / coût / conformité).

## Anti-patterns
- ❌ Déployer un scoring/filtrage IA de CV sans qualification AI Act haut risque (art. 6 + Annexe III) ni supervision humaine.
- ❌ Présenter des gains de ROI chiffrés sans baseline mesuré sur le périmètre client (chiffres « marché » non sourcés).
- ❌ Automatiser une décision de rejet sans droit à l'intervention humaine (RGPD art. 22).
- ❌ Choisir un ATS IA sans clause de sous-traitance RGPD ni audit de biais contractualisé.
- ❌ Confondre « assistance IA » et « décision IA » : la décision finale reste humaine et traçable.

## Sources
- Règlement UE 2024/1689 (AI Act) — art. 6 §2 + Annexe III pt 4 (emploi, haut risque) — eur-lex.europa.eu · artificialintelligenceact.eu
- RGPD UE 2016/679 — art. 22 (décision automatisée), art. 5 (minimisation) — cnil.fr
- CNIL — Guide du recrutement (19 fiches, dont nouvelles technologies & discrimination) — cnil.fr/fr/le-guide-du-recrutement
- PROSCI ADKAR — modèle de conduite du changement — prosci.com
- NIST AI RMF 1.0 (2023) · ISO/IEC 42001:2023 (AIMS) — gouvernance IA

## Voir aussi
- `skills/rh_ia/cv-parsing-ats-scoring.md` — scoring ATS (haut risque AI Act)
- `skills/rh_ia/people-analytics.md` — KPIs et dashboards RH
- `skills/juridique_ia/` — conformité RGPD / AI Act / non-discrimination
- `skills/formateur_ia/` — montée en compétences des équipes RH sur l'IA
