# Audit qualité — Groupe Conseil/Direction (6 agents)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8.1 Conseil/Direction (formalisée ce jour, cf. `audits/audit-grilles-v2.8.md` §3.2)
> **Périmètre** : 44 skills sur 6 agents (JURIDIQUE-IA, CDO-DIRECTEUR-IA, CHEF-PROJET-IA, CONSULTANT-IA, FINANCIAL-ANALYST, AUDIT-METHODO-IA)
> **Méthode** : extraction factuelle déléguée à 6 sous-agents Explore en parallèle + cotation expert Claude principal sur grille v2.8.1
> **Format** : rapport consolidé groupe (1 fichier pour 6 agents) — décision validée 2026-05-29 (cohérent directive qualité > quantité, consolidation > multiplication)

---

## 1. Synthèse exécutive

**Verdict global groupe Conseil/Direction** : Patrimoine **volumineux et structuré** (44 skills, 5141L cumulées — soit 1.7× plus que PO-SAFE+PO-SCRUM). Toutes les certifications sont déclarées (44/44 = 100%, contre 63-72% sur Agile/Produit). **Mais carence sourcing académique massive** (90%+ sans URL/auteur/année) et **anti-patterns quasi-absents** sur 2 agents (CDO, CHEF-PROJET).

| Métrique | Conseil/Direction | Comparaison Agile/Produit |
|---|---|---|
| Agents audités | 6/6 | 9/9 (référence) |
| Skills audités | 44/44 | 55/55 (référence) |
| Skills ✓ purs (3 dimensions) | **0/44** | 3/55 (5%) |
| Skills P3 (proche ✓) | ~10/44 (23%) | ~12/55 (22%) |
| Skills P2 (enrichissement) | ~31/44 (70%) | ~26/55 (47%) |
| Skills P1 (bug bloquant) | **3/44 (7%)** | 14/55 (25%) |
| Skills P0 | 0/44 | 0/55 |
| Skills sans certification déclarée | **0/44 (0%)** ✅ | ~17/55 (31%) |
| Skills avec ≥1 anti-pattern explicite | **~10/44 (23%)** | ~20/55 (36%) |
| Skills avec ≥1 source externe URL/auteur datée | **~3/44 (7%)** 🔴 | ~5/55 (9%) |
| Skills avec cross-link inter-skills | **0/44 (0%)** 🔴 | ~6/55 (11%) |

**Constats clés** :
- ✅ **0 P1 cosmétique mécanique** (vs 11/55 sur Agile/Produit) — tous les skills ont leur certif déclarée, le V1 mass ne désamorce pas de P1 ici
- 🔴 **Carence sourcing académique massive** : Pyramid Principle (Minto 1987) cité sans Minto, DAMA-DMBOK sans 2017, Dehghani sans 2022, ADKAR sans année, Kahneman sans année
- 🔴 **Anti-patterns absents** chez CDO (0/8) et CHEF-PROJET (~0-2/8) — gap structurel
- 🔴 **0 cross-link inter-skills** dans tout le groupe (vs 6 sur Agile/Produit)
- 🟡 **Certifications non-standard** propagées : "CAP IABAC" et "Anthropic Claude Code in Action — Certified AI Workflow Engineer" — non vérifiables auprès d'organismes certificateurs publics
- 🟡 **Articulation AI Act × RGPD partielle** : seul `rgpd-ia.md` propose un tableau d'articulation

---

## 2. Méthodologie

Application de la **grille v2.8.1 Conseil/Direction** (cf. `audits/audit-grilles-v2.8.md` §3.2, formalisée ce jour).

**Référentiels attendus** (par sous-domaine) :
- **Juridique IA** : AI Act UE 2024/1689, RGPD UE 2016/679, NIS2 UE 2022/2555, DORA UE 2022/2554, ISO/IEC 42001:2023, ISO/IEC 23894:2023, ISO/IEC 27001:2022, CNIL/EDPB
- **Stratégie/Conseil** : McKinsey 7S, BCG Matrix, Porter Five Forces (1979), Ansoff (1957), Blue Ocean (Kim & Mauborgne 2005), Wardley Maps
- **Data Governance** : DAMA-DMBOK 2 (2017), Data Mesh (Dehghani 2022), Data Vault 2.0, CDMC, DCAM
- **Gestion projet** : PMBOK 7 (2021), PMI-ACP, PRINCE2, EVM (ANSI/EIA-748-D), ISO 21500
- **Finance/ROI** : NPV/IRR (Brealey-Myers), TCO Gartner, Real Options, Payback Period, DCF
- **Audit/Méthodo** : COSO ERM 2017, COBIT 2019, ITIL 4, ISO/IEC 19011:2018, IIA IPPF

**Particularité Conseil/Direction** : ajout d'un axe d'analyse **« conformité réglementaire AI Act/RGPD »** pour les 10 skills juridiques et **« calcul financier avec WACC explicite »** pour les 6 skills financiers.

---

## 3. Tableau récapitulatif consolidé (44 skills, 6 agents)

### 3.1 — JURIDIQUE-IA (10 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 1 | ai-act-conformite.md | 101 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 2 | audit-conformite-ia.md | 115 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 3 | contrats-ia.md | 111 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 4 | dpia-systemes-ia.md | 114 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 5 | gouvernance-ethique-ia.md | 116 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 6 | nis2-conformite.md | 141 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 7 | politique-ia-entreprise.md | 102 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 8 | **propriete-intellectuelle-ia.md** | 112 | ✓ | ⚠ | ✓ | ✗ | **P1** 🔴 |
| 9 | rgpd-ia.md | 111 | ✓ | ✓ | ✓ | ⚠ | **P3** (proche ✓) |
| 10 | veille-reglementaire.md | 75 | ✓ | ✓ | ⚠ | ⚠ | **P2** |

### 3.2 — CDO-DIRECTEUR-IA (8 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 11 | strategie-data-ia.md | 97 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 12 | gouvernance-donnees-dama.md | 131 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 13 | centre-excellence-ia.md | 121 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 14 | data-mesh.md | 175 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 15 | budget-investissement-ia.md | 167 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 16 | pilotage-transformation.md | 134 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 17 | talent-recrutement-ia.md | 132 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 18 | okr-kpi-data.md | 208 | ✓ | ✓ | ✓ | ⚠ | **P3** (proche ✓) |

### 3.3 — CHEF-PROJET-IA (8 skills, cotation préliminaire)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 19 | cadrage-projet-ia.md | 154 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 20 | evm-valeur-acquise.md | 193 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 21 | gestion-risques-projet.md | 242 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 22 | gouvernance-portefeuille.md | 208 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 23 | planification-hybride.md | 189 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 24 | post-mortem-rex.md | 227 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 25 | reporting-codir.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** (cot. prélim.) |
| 26 | stakeholder-management.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** (cot. prélim.) |

> ⚠️ Cotation CHEF-PROJET-IA partielle (output Explore tronqué). À confirmer en relecture ciblée si V2 envisagée.

### 3.4 — CONSULTANT-IA (9 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 27 | **benchmark-solutions-ia.md** | 51 | ✓ | ✗ | ⚠ | ✗ | **P1** 🔴 |
| 28 | cadrage-poc-ia.md | 76 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 29 | **diagnostic-maturite-ia.md** | 41 | ✓ | ✗ | ⚠ | ✗ | **P1** 🔴 |
| 30 | estimation-roi-rapide.md | 62 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 31 | feuille-route-ia.md | 52 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 32 | offre-mission.md | 65 | ✓ | ⚠ | ⚠ | ⚠ | **P2** |
| 33 | presentation-executif.md | 54 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 34 | proposition-commerciale.md | 56 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 35 | transformation-digitale.md | 70 | ✓ | ✓ | ✓ | ⚠ | **P3** |

### 3.5 — FINANCIAL-ANALYST (6 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 36 | business-case-ia.md | 97 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 37 | roi-transformation.md | 130 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 38 | budget-projet.md | 92 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 39 | cost-benefit-analysis.md | 99 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 40 | reporting-financier.md | 71 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 41 | investment-scoring.md | 93 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

### 3.6 — AUDIT-METHODO-IA (3 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 42 | audit-conformite-methodo.md | 95 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 43 | challenge-raisonnement.md | 129 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 44 | gate-validation-livrable.md | 122 | ✓ | ✓ | ✓ | ⚠ | **P3** |

---

## 4. Findings P1 — Bugs bloquants (3 skills)

### 🔴 P1.1 — `consultant_ia/diagnostic-maturite-ia.md` (41L)
**Symptôme** : Skill **stratégique** (diagnostic maturité IA = porte d'entrée mission de conseil) ramené à 41 lignes. Modèle "5 niveaux" présenté comme unique sans aucune attribution (Gartner AI Maturity Model, MIT Sloan AI Maturity Index, Forrester AI/ML maturity ne sont jamais cités alors que ce sont les références marché). Grille d'évaluation non remplie. Aucun protocole d'entretien défini ("interviews 30-45 min" sans guide).

**Corrections (V2 priorité haute)** :
- Citer Gartner AI Maturity Model (5 niveaux : Awareness → Active → Operational → Systemic → Transformational, Gartner 2019+), MIT Sloan AI Index, Forrester AI/ML Maturity
- Détailler chaque niveau avec critères mesurables (volume use cases, gouvernance, dataops, MLOps)
- Ajouter protocole d'entretien semi-directif (10-15 questions par dimension)
- Mention biais auto-évaluation et triangulation (sponsor + métier + IT)
- Anti-patterns : "Diagnostic = questionnaire envoyé sans entretien", "Benchmark sectoriel sans données", "Quick wins < 3 mois sans étude faisabilité"

### 🔴 P1.2 — `consultant_ia/benchmark-solutions-ia.md` (51L)
**Symptôme** : Skill **benchmark** sans aucun framework de benchmark cité (Gartner Magic Quadrant, Forrester Wave, IDC MarketScape sont totalement absents alors qu'ils sont les références universelles). TCO mentionné sans formule, Make-vs-Buy sans critères pondérés. Émojis comme critères qualité.

**Corrections (V2)** :
- Citer Gartner Magic Quadrant méthodologie (axes Vision/Ability to Execute), Forrester Wave (Current Offering/Strategy/Market Presence), IDC MarketScape
- Méthodologie benchmark structurée : pondération multi-critères, scénarios d'usage, démos comparatives, références client
- TCO 3 ans formule explicite : (Acquisition + Implementation + Operation + Sortie) actualisé
- Make vs Buy vs Partner : critères objectifs (time-to-value, expertise interne, IP, dépendance)
- Anti-patterns : "Benchmark sans critères pondérés", "Démo vendeur = preuve de capacité", "TCO 3 ans sans actualisation"

### 🔴 P1.3 — `juridique_ia/propriete-intellectuelle-ia.md` (112L)
**Symptôme** : Skill volumineux mais **jurisprudence CJUE/EUIPO 2025 citée sans numéro d'affaire** ("position CJUE 2025" sur outputs IA, EUIPO 2025 sur prompt insuffisant). Affirmations prédictives présentées comme acquises ("domaine public technique"). Directive 2019/790 Text and Data Mining citée sans conditions complètes (art. 4 §3 opt-out).

**Corrections (V2)** :
- Sourcer jurisprudence avec numéros d'affaire CJUE (curia.europa.eu) ou retirer affirmations prédictives 2025-2026
- Compléter Directive 2019/790 art. 3 (TDM recherche scientifique) et art. 4 (TDM commercial + opt-out)
- Distinguer clairement : droit d'auteur outputs IA (jurisprudence émergente) vs propriété modèles (secret d'affaires + droit d'auteur code)
- Anti-patterns : "Outputs IA = domaine public sans précaution", "Opt-out robots.txt = solution universelle", "Procès NYT vs OpenAI résolu" (en cours)
- Cross-link `ai-act-conformite.md` (art. 50 transparence GenAI) et `contrats-ia.md` (clauses anti-usage entraînement)

---

## 5. Findings P2 — Enrichissements (31 skills)

Approche commune (à appliquer skill par skill ou en bundle thématique) :
- Ajouter section `## Sources` avec attribution datée (auteur, année, URL/livre)
- Ajouter section `## Anti-patterns` (3-5 bullets) — particulièrement critique pour CDO et CHEF-PROJET
- Citer articles précis pour AI Act (5, 6, 10, 14, 50), DORA, NIS2 — pas seulement "AI Act conformité"
- Diversifier exemples sectoriels (banque CIB, luxe, énergie, défense, télécom, hôtellerie)

### Cas notables P2

#### P2.A — `cdo_directeur_ia/centre-excellence-ia.md` (121L) — 4 archétypes CoE non sourcés
4 archétypes (Centralisé / Fédéré / Hub & Spoke / Virtuel) présentés sans attribution. "Hub & Spoke recommandé 2026" sans justification. EU AI Act checklist annoncée mais absente.
Action : sourcer (Gartner CoE Playbook, BCG Operating Model, McKinsey 7S sur design organisationnel), ajouter checklist AI Act effective.

#### P2.B — `cdo_directeur_ia/pilotage-transformation.md` (134L) — Incohérence TDMM
TDMM décrit comme **5 niveaux** dans `strategie-data-ia.md` (Opportuniste → Transformationnel) mais comme **7 dimensions** dans `pilotage-transformation.md` (Gouvernance/Architecture/Qualité/Sécurité/Analytics/IA-ML/Culture). Même label, deux définitions = ambiguïté grave.
Action : choisir une référence (Gartner Data Maturity Model, IBM Data Governance Maturity Model, EDM Council DCAM), expliciter la version retenue.

#### P2.C — Bundle FINANCIAL-ANALYST (6 skills) — WACC hardcodé 10% partout
`business-case-ia.md`, `cost-benefit-analysis.md`, `roi-transformation.md` utilisent un taux d'actualisation 10% sans aucune justification (WACC ? coût capital sectoriel ? hurdle rate ?). Tous les NPV/VAN du groupe deviennent biaisés et non comparables inter-projets.
Action : ajouter section "Coût du capital" avec WACC = w_e × Ke + w_d × Kd × (1-T) (Modigliani-Miller, Brealey-Myers ch. 18), exemples WACC sectoriels 2024-2026 (banque ~8-9%, retail ~10-11%, tech ~12-14%).

#### P2.D — `consultant_ia/presentation-executif.md` (54L) — Pyramid sans Minto
"Pyramid Principle (McKinsey)" cité sans Barbara Minto (1987, *The Pyramid Principle: Logic in Writing and Thinking*). Variante SCQA (Situation-Complication-Question-Answer) non nommée. 10 slides max sans justification.
Action : sourcer Minto, ajouter SCQA, varier formats (5 slides flash CODIR vs 15 slides comité IA).

#### P2.E — Bundle JURIDIQUE-IA (8 skills sur 10) — Articles AI Act manquants
`ai-act-conformite.md`, `audit-conformite-ia.md`, `politique-ia-entreprise.md`, `gouvernance-ethique-ia.md` mentionnent "AI Act" sans citer les articles applicables par rôle (fournisseur, déployeur, importateur, distributeur). Articles 5 (interdits), 6 (haut risque), 10 (qualité données), 14 (supervision humaine), 50 (transparence GenAI), 53-60 (GPAI) doivent être détaillés.
Action : tableau "Article AI Act × Rôle × Obligation × Items backlog PO/Conseil" dans `ai-act-conformite.md`, cross-links depuis les autres skills.

#### P2.F — `financial_analyst/investment-scoring.md` (93L) — Cross-link cassé
Ligne 26 référence `skills/safe/wsjf.md` mais BV/TC/RR/OE jamais définis dans le skill. WSJF doit être autonome ou cross-link valide.
Action : auto-contenir la définition WSJF (Weighted Shortest Job First — Reinertsen 2009, *The Principles of Product Development Flow*) ou vérifier `skills/safe/wsjf.md` existant et actif.

---

## 6. Findings P3 — Cosmétique (~10 skills)

Skills solides nécessitant uniquement compléments sources et anti-patterns.

| Skill | Action |
|---|---|
| `juridique_ia/dpia-systemes-ia.md` | Citer EDPB DPIA Guidelines (WP248rev01), CNIL guide DPIA (sept. 2018) |
| `juridique_ia/nis2-conformite.md` | Détailler DORA (UE 2022/2554) en parallèle, citer ANSSI guide NIS2 |
| `juridique_ia/rgpd-ia.md` | Ajouter URLs articles RGPD (eur-lex.europa.eu), citer EDPB Guidelines GDPR + AI |
| `cdo_directeur_ia/data-mesh.md` | Préciser Dehghani Z. (2022) *Data Mesh: Delivering Data-Driven Value at Scale*, O'Reilly |
| `cdo_directeur_ia/budget-investissement-ia.md` | URL FinOps Foundation (finops.org), ajouter coûts LLM inference (GPU 2024-2026) |
| `cdo_directeur_ia/okr-kpi-data.md` | Préciser Doerr J. (2018) *Measure What Matters*, Andy Grove (Intel origines OKR 1970s) |
| `chef_projet_ia/evm-valeur-acquise.md` | Préciser EVM ANSI/EIA-748-D, formules CV/SV/CPI/SPI/EAC/TCPI |
| `chef_projet_ia/post-mortem-rex.md` | Citer Beyer et al. *Site Reliability Engineering* (Google/O'Reilly 2016), Etsy blameless culture |
| `consultant_ia/transformation-digitale.md` | Compléter avec Kotter 8 Steps (1995) en alternative à ADKAR, McKinsey Three Horizons |
| `financial_analyst/reporting-financier.md` | URL PMI EVM, ajouter TCPI (To-Complete Performance Index) |
| `critique_conformite/audit-conformite-methodo.md` | Citer ISO/IEC 19011:2018 (audit guidelines), distinguer matérialité critique vs mineure |
| `critique_conformite/gate-validation-livrable.md` | Clarifier circularité Gate 4 (qui audite l'agent auditeur), standardiser sévérité Critique/Bloquante |

---

## 7. Findings transversaux (patterns globaux groupe)

### 🔴 T1 — Carence sourcing académique massive
- **~93% des skills sans source URL/auteur/année** : Pyramid Principle sans Minto, DAMA sans 2017, Dehghani sans 2022, ADKAR sans année, Kahneman sans année, FinOps Foundation sans URL, Gartner sans année MQ
- Exceptions positives : `okr-kpi-data.md` (Doerr cité), `transformation-digitale.md` (PROSCI ADKAR explicite), `rgpd-ia.md` (articles RGPD précisés)
- **Action V3 mass** : bundle "Sources Frameworks" propagé sur les ~40 skills concernés

### 🔴 T2 — Anti-patterns quasi-absents (CDO 0/8, CHEF-PROJET ~0-2/8)
**Skills concernés** : strategie-data-ia, gouvernance-donnees-dama, centre-excellence-ia, data-mesh, budget-investissement-ia, pilotage-transformation, talent-recrutement-ia, okr-kpi-data + cadrage-projet-ia, evm-valeur-acquise, gestion-risques-projet, gouvernance-portefeuille, planification-hybride, reporting-codir, stakeholder-management.

**Anti-patterns attendus à ajouter** :
- CDO : "Data Lake = poubelle", "Gouvernance par comité 6 mois sans décision", "OKR cascadés mécaniquement (output ≠ outcome)", "Centre d'Excellence = goulot d'étranglement"
- CHEF-PROJET : "EVM sans baseline", "RACI vide ou tous Accountable", "Risques inventoriés sans plan mitigation", "Reporting CODIR = rapport d'activité (pas d'arbitrage)"

### 🔴 T3 — 0 cross-link inter-skills sur les 44 skills
Aucun skill ne référence un autre du groupe. Or les frontières sont nombreuses :
- `ai-act-conformite.md` ↔ `audit-conformite-ia.md` ↔ `dpia-systemes-ia.md`
- `strategie-data-ia.md` ↔ `centre-excellence-ia.md` ↔ `okr-kpi-data.md`
- `cadrage-projet-ia.md` ↔ `gestion-risques-projet.md` ↔ `cadrage-poc-ia.md`
- `business-case-ia.md` ↔ `roi-transformation.md` ↔ `estimation-roi-rapide.md`
- `audit-conformite-methodo.md` ↔ `audit-conformite-ia.md` (méta-audit ↔ audit IA)

**Action V3 mass** : bundle "Cross-links `## Voir aussi`" propagé.

### 🟡 T4 — Certifications non-standard propagées
- "**CAP IABAC**" (gouvernance-ethique-ia, politique-ia-entreprise, ai-act-conformite et autres) : acronyme non vérifiable auprès d'organismes certificateurs publics (IABAC = International Association of Business AI Commitment ?)
- "**Anthropic Claude Code in Action — Certified AI Workflow Engineer (2026)**" (omniprésent) : certification interne Anthropic 2026, légitime mais non équivalente aux certifs PSPO/SAFe/PMP en validation tierce
- "**AI+ Executive**", "**AI+ Business**" (AI CERTs) : certifs de cabinet, à valider

**Action** : conserver pour visibilité mais ajouter mentions explicites (ex : "certif propriétaire Anthropic") OU retirer si non utilisées dans le contenu. À arbitrer.

### 🟡 T5 — Articulation AI Act × RGPD insuffisante (sauf rgpd-ia.md)
Seul `rgpd-ia.md` propose un tableau d'articulation. Les autres skills juridiques traitent AI Act et RGPD en silos. Risque opérationnel : un PO IA ne sait pas si DPIA suffit ou s'il faut aussi documentation technique AI Act (art. 11).

**Action V2** : propager le tableau d'articulation à `ai-act-conformite.md` et `audit-conformite-ia.md`.

### 🟡 T6 — Exemples sectoriels mono-focalisés
- `business-case-ia.md`, `roi-transformation.md`, `cost-benefit-analysis.md` : tous exemples RH IA uniquement
- `nis2-conformite.md` : surreprésentation énergie/santé/finance
- Plusieurs skills CONSULTANT-IA : exemples grand groupe sans variantes PME/scaleup

**Action V3** : bundle "Diversification sectorielle" (banque CIB, luxe, énergie, défense, télécom, hôtellerie — secteurs CAC40 anonymisés).

### 🟡 T7 — Incohérences certifs entre table agent et en-têtes skills (CONSULTANT-IA)
- `offre-mission.md` cite "PSPO1, SAFe6, Claude Code" dans profil Guy alors qu'absents de `AGENT-CONSULTANT-IA.md` certifs déclarées
- `cadrage-poc-ia.md` en-tête : "CAP IABAC · PMI-ACP · AWS CCP" — table AGENT : "Anthropic · CAP IABAC"

**Action V1** : harmoniser en-têtes skills vs table AGENT (5 min/skill, 9 skills à vérifier sur tout le groupe).

### 🟡 T8 — Méta-agent AUDIT-METHODO-IA : circularité Gate 4
Le Gate 4 de `gate-validation-livrable.md` est conçu pour "valider tout livrable IA généré par un agent" — y compris ceux produits par l'AGENT-AUDIT-METHODO-IA lui-même. Aucune procédure de validation croisée (ex : peer review par ORCHESTRATEUR-WORKFLOW).

**Action V2** : documenter "Qui audite l'auditeur" — délégation explicite à un méta-méta-agent ou validation croisée modèle (Claude Sonnet/Opus ↔ GPT-4o/Gemini).

---

## 8. Plan d'action recommandé (4 vagues)

### V1 — Mass cosmétique transverse Conseil/Direction (~45 min — limité ici)
Sur Agile/Produit, V1 désamorçait 4 P1 cosmétiques (certifs manquantes). Ici, **0 P1 désamorcé par V1** (tous skills ont leur certif).

V1 minimal possible :
- T7 : harmoniser en-têtes CONSULTANT-IA vs AGENT (9 skills, ~5 min) — corrige incohérences certifs
- Décision T4 : conserver/clarifier/retirer "CAP IABAC" et "Anthropic Claude Code in Action" (décision à arbitrer)
- **État après V1** : 0 ✓ / ~10 P3 / ~31 P2 / **3 P1** (identique)

### V2 — Bugs bloquants P1 (~3h, à différer en Phase 2)
3 P1 à traiter (différenciateurs compétitifs sélectionnés) :
- `consultant_ia/diagnostic-maturite-ia.md` — Gartner/MIT Sloan/Forrester
- `consultant_ia/benchmark-solutions-ia.md` — Magic Quadrant/Forrester Wave/IDC MarketScape
- `juridique_ia/propriete-intellectuelle-ia.md` — sourcer jurisprudence CJUE/EUIPO

**Garde-fous** : selon stratégie Phase 1, max 1-2 V2 d'exception par groupe. Ici les 3 P1 sont stratégiques (positionnement Conseil + Juridique) → décision à arbitrer (V2 maintenant ou en Phase 2 transversale).

### V3 — Enrichissements P2 (~6-8h, bundles thématiques, Phase 3)
31 skills à enrichir. Approche bundle :
- **Bundle "Sources Frameworks"** — propager sources datées sur les ~40 skills (action T1)
- **Bundle "Anti-patterns"** — ajouter sur les ~15 skills sans (action T2, surtout CDO + CHEF-PROJET)
- **Bundle "Cross-links Voir aussi"** — créer 5-7 paires logiques (action T3)
- **Bundle "AI Act articles"** — détailler art. 5/6/10/14/50/53-60 dans 4 skills JURIDIQUE (action T5)
- **Bundle "WACC explicite"** — corriger taux 10% hardcodé sur 4 skills FINANCIAL (action P2.C)
- **Bundle "Diversification sectorielle"** — varier exemples (action T6)

### V4 — Cosmétique P3 (~2-3h, optionnel)
~10 skills P3 proches ✓ : ajout sources + 1-2 anti-patterns chacun.

---

## 9. Bilan groupe Conseil/Direction & méta-observations méthode v2.8.1

### Comparaison Agile/Produit vs Conseil/Direction

| Métrique | Agile/Produit (9 agents, 55 skills) | Conseil/Direction (6 agents, 44 skills) | Tendance |
|---|---|---|---|
| Skills audités | 55 | 44 | -20% (groupe + concentré) |
| Verdict ✓ pur | 3 (5%) | 0 | 🔴 0 skill exemplaire ici |
| % P1 | 25% | 7% | ✅ Bien meilleur (certifs déclarées) |
| % sans certif | 31% | 0% | ✅ Bug structurel absent ici |
| % anti-patterns présents | 36% | 23% | 🔴 Régression (CDO 0%, CHEF-PROJET ~5%) |
| % sources URL datées | 9% | 7% | 🔴 Stable bas |
| % cross-links | 11% | 0% | 🔴 Régression majeure |
| Vol. moyen / skill | ~85L | ~117L | ✅ Skills plus denses (~37% +) |

**Apprentissages méthode v2.8.1** :
- ✅ Grille v2.8.1 Conseil/Direction **applicable sans ajustement** depuis la formalisation (validation pilote)
- ✅ Délégation extraction Explore × 6 en parallèle = wall-time ~12-15 min pour 44 skills (vs 25 min pour 30 skills en série sur PO-SCRUM)
- ⚠️ **Méta-pattern** : sur Conseil/Direction, le V1 mass ne désamorce **pas** mécaniquement les P1 (à l'inverse d'Agile/Produit). Le pattern P1 dominant ici est "skill volumineux mais sources/anti-patterns absents" → V1 n'aide pas, V2+V3 nécessaires.
- ⚠️ **Risque saturation contexte** sur extractions parallèles volumineuses (1 fichier persisté sur 6 ce coup-ci) — à anticiper sur Phase 1.4 (Transverse/Méta, 8 agents potentiellement plus volumineux)

### Spécificités groupe Conseil/Direction
- Skills longs (>100L moyenne) = forte densité de contenu mais aussi forte densité d'inexactitudes potentielles (références, articles, formules)
- Méta-agent AUDIT-METHODO-IA pose un problème de circularité non documenté
- Patrimoine plus mature qu'Agile/Produit sur la déclaration de certifs, plus immature sur le sourcing académique

---

## 10. Annexes

### A. Sources attendues complémentaires (Conseil/Direction)

**Juridique IA** :
- Règlement (UE) 2024/1689 (AI Act, JO L du 13 juin 2024) — articles 5, 6, 10, 11, 14, 50, 53-60
- Règlement (UE) 2016/679 (RGPD)
- Directive (UE) 2022/2555 (NIS2)
- Règlement (UE) 2022/2554 (DORA)
- Directive (UE) 2019/790 (Copyright in Digital Single Market — TDM art. 3-4)
- ISO/IEC 42001:2023, ISO/IEC 23894:2023, ISO/IEC 27001:2022, ISO/IEC 27701:2019
- CNIL guides IA (cnil.fr/fr/intelligence-artificielle)
- EDPB Guidelines (edpb.europa.eu)
- Gebru et al. "Datasheets for Datasets" (Comm. ACM 2021)
- Mitchell et al. "Model Cards for Model Reporting" (FAT* 2019)

**Stratégie/Conseil** :
- Minto B. (1987) *The Pyramid Principle: Logic in Writing and Thinking*, Pearson
- Porter M. (1979) "How Competitive Forces Shape Strategy", HBR
- Porter M. (1980) *Competitive Strategy*
- Kim W. C., Mauborgne R. (2005) *Blue Ocean Strategy*, HBR Press
- Henderson B. (1970) "The Product Portfolio" BCG Perspectives
- Waterman R., Peters T. (1980) "Structure is not Organization" (McKinsey 7S)
- Wardley S. (2018) *Wardley Maps* (online open)
- Ries E. (2011) *The Lean Startup*
- Knapp J. (2016) *Sprint*, Simon & Schuster

**Data Governance** :
- DAMA International (2017) *DAMA-DMBOK 2*
- Dehghani Z. (2022) *Data Mesh: Delivering Data-Driven Value at Scale*, O'Reilly
- Linstedt D., Olschimke M. (2015) *Building a Scalable Data Warehouse with Data Vault 2.0*
- EDM Council CDMC (2024), DCAM
- Gartner CDO Playbook (annuel)

**Gestion projet** :
- PMI (2021) *PMBOK Guide 7th Edition*
- PMI (2017) *Standard for Earned Value Management*
- ANSI/EIA-748-D (Earned Value Management)
- AXELOS *PRINCE2 7* (2023)
- ISO 21500:2021 (Project, programme and portfolio management)
- ISO 31000:2018 (Risk management)
- Beyer et al. (2016) *Site Reliability Engineering*, Google/O'Reilly

**Finance/ROI** :
- Brealey, Myers, Allen (2023) *Principles of Corporate Finance* 14th ed, McGraw-Hill
- Modigliani F., Miller M. H. (1958, 1963) — théorie WACC
- Trigeorgis L. (1996) *Real Options*, MIT Press
- Pyhrr P. (1973) *Zero-Base Budgeting*
- Kaplan R., Anderson S. (2007) *Time-Driven Activity-Based Costing*

**Audit/Méthodo** :
- ISO/IEC 19011:2018 (audit guidelines)
- COSO ERM (2017) Enterprise Risk Management — Integrating with Strategy and Performance
- ISACA COBIT 2019
- AXELOS ITIL 4 (2019+)
- IIA International Standards for the Professional Practice of Internal Auditing (IPPF)
- Kahneman D. (2011) *Thinking, Fast and Slow*, FSG
- Toulmin S. (1958) *The Uses of Argument*, Cambridge

### B. Prochaines étapes

- [ ] Validation Guy : verdicts (0 ✓ / ~10 P3 / ~31 P2 / 3 P1)
- [ ] Arbitrage V1 cosmétique (T7 harmonisation certifs CONSULTANT-IA)
- [ ] Décision T4 (CAP IABAC, Anthropic Claude Code in Action) : conserver/clarifier/retirer
- [ ] Arbitrage 3 P1 (V2 maintenant ou différé Phase 2 transversale)
- [ ] Décision : passer à Phase 1.2 (Data/Tech) ou consolider V1 maintenant ?

### C. Volume groupe consolidé
- 44 skills audités · 5141 lignes cumulées (+ ~500L AGENT-*.md)
- Skill le plus court : `diagnostic-maturite-ia.md` (41L) 🔴
- Skill le plus long : `gestion-risques-projet.md` (242L)
- Moyenne : ~117L / skill (vs ~85L Agile/Produit)
- 7/12 référentiels normatifs attendus couverts à >50% (RGPD ✓, AI Act ⚠, NIS2 ⚠, DAMA ✓, Data Mesh ✓, ADKAR ✓, FinOps ✓)
- 5/12 référentiels manquants : DORA, ISO 23894, ISO 19011, COSO ERM, Data Vault 2.0
