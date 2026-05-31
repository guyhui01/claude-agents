# Skill — Audit Qualité d'un Skill du Catalogue (grille v2.8 en autonomie)

> Certifications : **ISO/IEC 19011:2018** (lignes directrices audit) · **ISO 9001:2015 §9.2** (audit interne) · **CMMI V3.0** (appraisal SCAMPI, ISACA 2023) · **ISO/IEC 42001:2023** (AIMS) · ISO 9001:2015 Lead Auditor · CMMI Associate
> Agent : AGENT-AUDIT-METHODO-IA.md

## Objectif

Permettre à l'agent d'**auditer en autonomie la qualité d'un ou plusieurs skills du catalogue** (fichiers `.md` de `skills/`) en consommant la grille qualité **v2.8** — sans pilotage manuel. L'agent : (1) route le skill vers la bonne déclinaison de grille selon l'agent propriétaire, (2) délègue l'extraction factuelle à un sous-agent Explore, (3) cote sur **3 dimensions × 4 niveaux**, (4) produit un rapport standardisé, (5) recommande une vague de correction **V1/V2/V3**. C'est l'**objectif final déclaré du chantier audit v2.8** : industrialiser la méthodologie pilotée manuellement sur les 33 agents (Phases 1+2).

> **Frontière nette** — ce skill audite **un livrable du catalogue** (un fichier skill). Pour auditer un **livrable runtime** produit par un agent (User Story, Feature, PI, sortie IA) → [`audit-conformite-methodo.md`](audit-conformite-methodo.md). Ne jamais confondre les deux objets d'audit.

> **Source de vérité de la grille** : [`audits/audit-grilles-v2.8.md`](../../audits/audit-grilles-v2.8.md) — squelette commun + **5 déclinaisons** formalisées (§3.1 à §3.5) + workflow + patterns. Ce skill encode la **procédure d'exécution** ; il ne duplique pas les critères détaillés des 5 groupes — s'y référer systématiquement à l'étape de cotation.

## Cadre référentiels mobilisés

| Domaine | Référentiels |
|---|---|
| **Principes d'audit** | ISO/IEC 19011:2018 (7 principes) · ISO 9001:2015 §9.2 (programme d'audit interne) |
| **Maturité / appraisal** | CMMI V3.0 — méthode SCAMPI (benchmark, classes A/B/C) |
| **Audit IA** | ISO/IEC 42001:2023 (AI Management System) · NIST AI RMF 1.0 |
| **Biais & angles morts** | Kahneman *Thinking, Fast and Slow* (2011) · Tversky & Kahneman (1974) |
| **Grille interne** | grille v2.8 (3D × 4 niveaux × 5 déclinaisons) |

## Les 7 principes d'audit ISO/IEC 19011:2018 appliqués à l'audit de skills

L'audit qualité du catalogue n'est pas une relecture subjective : il s'ancre dans les **7 principes** de la norme d'audit des systèmes de management.

| # | Principe ISO 19011 | Application à l'audit d'un skill |
|---|---|---|
| 1 | **Intégrité** | L'auditeur coterait à l'identique que le skill ait été écrit par Guy, un autre agent ou lui-même. Aucune indulgence d'auteur. |
| 2 | **Présentation impartiale** | Le rapport reflète fidèlement les ✓ **et** les ✗. On ne masque pas un P1 pour « faire propre ». |
| 3 | **Conscience professionnelle** | Diligence : lire **tout** le skill, vérifier chaque référentiel cité, ne pas extrapoler. |
| 4 | **Confidentialité** | Les exemples sectoriels restent anonymisés (règle catalogue généraliste — banque CIB, luxe, énergie…). |
| 5 | **Indépendance** | L'auditeur (AGENT-AUDIT-METHODO-IA) est distinct de l'agent producteur. ⚠️ sur un même modèle LLM, les biais sont **corrélés** → §angles morts. |
| 6 | **Approche fondée sur les preuves** | Une cotation D1/D2/D3 s'appuie sur une **citation exacte** du skill (l'extraction Explore), jamais sur une impression. |
| 7 | **Approche par les risques** (ajoutée 2018) | Prioriser l'effort d'audit sur les skills **core mission** (N1/N2) — un P1 sur un skill mobilisé chaque semaine pèse plus qu'un P3 sur un skill N4. |

## 1. Rappel opérationnel de la grille v2.8

### 1.1 — Trois dimensions universelles

| # | Dimension | Question structurante |
|---|---|---|
| **D1** | **Conformité référentielle** | Le skill respecte-t-il scrupuleusement le référentiel officiel revendiqué par l'agent ? |
| **D2** | **Actionabilité** | Le contenu est-il directement utilisable (copier-coller, ou suivi pas à pas) sans retravail ? |
| **D3** | **Profondeur** | Le skill mobilise-t-il sources et retours d'expérience récents légitimant l'expertise certifiante ? |

### 1.2 — Échelle de cotation (par dimension)

| Cotation | Sens |
|---|---|
| **✓** | Conforme — répond aux **3** critères opérationnels du niveau attendu |
| **⚠** | À corriger — 1-2 manques sur 3 critères |
| **✗** | À refondre — manque structurel (0-1 critère sur 3) |
| **N/A** | Non applicable (rare — justifier explicitement) |

### 1.3 — Règles de verdict global par skill

| Verdict | Critère | Vague de correction (cf. §6) |
|---|---|---|
| **✓** | 3 dimensions ✓ | Aucune action |
| **P3** | 1 dimension ⚠ sur formatting/structure | V4 cosmétique (optionnel) |
| **P2** | 1-2 dimensions ⚠ sur contenu | V3 enrichissement (bundle) |
| **P1** | 1 dimension ✗ OU ≥2 ⚠ critiques | V2 profonde (ou V1 si mécanique) |
| **P0** | ≥2 dimensions ✗ | V2 refonte complète prioritaire |

### 1.4 — Métriques de synthèse (à calculer par agent audité)

- Distribution des verdicts (% ✓ / P3 / P2 / P1 / P0)
- % skills **sans certification déclarée** (bug structurel mécanique)
- % skills avec ≥1 **anti-pattern explicite** · % avec ≥1 **source externe** citée
- **Taux de couverture** des référentiels attendus (vs déclarés)

## 2. Table de routage — agent → groupe → déclinaison de grille

L'agent **choisit automatiquement** la déclinaison §3.x de `audits/audit-grilles-v2.8.md` selon l'agent propriétaire du skill audité.

| Groupe | §grille | Agents (33 audités v2.8) |
|---|:---:|---|
| **Agile/Produit** | §3.1 | PO-SAFE · PO-SCRUM · PRODUCT-MANAGER-SAFE · SCRUM-MASTER · RELEASE-TRAIN-ENGINEER · BUSINESS-ANALYST · QA-AGILE · QA-CYCLEV · CHANGE-MANAGER |
| **Conseil/Direction** | §3.2 | JURIDIQUE-IA · CDO-DIRECTEUR-IA · CHEF-PROJET-IA · CONSULTANT-IA · FINANCIAL-ANALYST · AUDIT-METHODO-IA |
| **Data/Tech** | §3.3 | DATA-SCIENTIST · DATA-ENGINEER · MLOPS-ENGINEER · SOLUTIONS-ARCHITECT · BI-ANALYST |
| **Dev/CMS** | §3.4 | DEV-TYPESCRIPT-IA · DEV-DRUPAL-PHP · CMS-DIGITAL · PIM-EXPERT · DAM-EXPERT |
| **Transverse/Méta** | §3.5 | ORCHESTRATEUR-WORKFLOW · PROMPT-ENGINEER · REDACTEUR-IA · UX-DESIGNER · FORMATEUR-IA · GROWTH-IA · RH-IA · VEILLE-STRATEGIQUE |

**Agents hors chantier 33 (rattachement au groupe le plus proche)** :

| Agent | Groupe de rattachement | Raison |
|---|---|---|
| AI-ARCHITECT | Data/Tech (§3.3) | Architecture IA, voisin SOLUTIONS-ARCHITECT |
| TECH-LEAD · DEV-PYTHON-IA | Dev/CMS (§3.4) code ; Data/Tech (§3.3) si ML | Selon nature du skill |
| DEVOPS-CLOUD | Data/Tech (§3.3) | CI/CD, voisin MLOPS-ENGINEER |
| SECURITE-IA | Conseil/Direction (§3.2) conformité ; Data/Tech technique | Selon nature du skill |

> En cas d'ambiguïté de rattachement, poser **une seule question** à Guy avant de coter (règle de l'agent).

## 3. Workflow d'audit (6 étapes exécutables)

```
1. CADRAGE      → router l'agent vers son groupe (§2) + ouvrir la déclinaison §3.x
2. EXTRACTION   → déléguer à un sous-agent Explore (brief standard §3.1 ci-dessous)
3. COTATION     → appliquer la grille déclinée : D1/D2/D3 ✓/⚠/✗ + verdict P0-P3 (§4)
4. RAPPORT      → produire audits/audit-<agent>-<AAAA-MM-JJ>.md (template §5)
5. VALIDATION   → soumettre verdicts + plan d'action à Guy (jamais auto-promotion)
6. CORRECTIONS  → exécuter par vagues V1/V2/V3 (§6) après arbitrage, commit par vague
```

### 3.1 — Brief-type pour le sous-agent Explore (extraction factuelle)

> ⚠️ **Leçon Phase 1.2 — méthode standard obligatoire, jamais dégradée** : un brief ultra-compact (tableau + bullets) pour économiser des tokens est **proscrit** par Guy (qualité ≠ quantité dégradée). Extraction factuelle **structurée par skill**, sans cotation (la cotation reste à l'expert Claude principal — séparation des rôles, principe d'indépendance ISO 19011).

```
Lis exhaustivement tous les skills de skills/<dossier_agent>/.
Pour CHAQUE skill, extrais factuellement (PAS de cotation, PAS de jugement) :
- Référentiels/frameworks cités (avec version et auteur si présents)
- Livrables actionnables proposés (templates, code, diagrammes, checklists)
- Exemples chiffrés / cas sectoriels présents
- Anti-patterns explicités (oui/non + lesquels)
- Sources externes citées (oui/non + lesquelles, avec dates)
- Cross-links internes (Voir aussi)
- Certification déclarée en en-tête (oui/non + lesquelles)
- Signaux d'alerte factuels (version obsolète, chiffre non sourcé, terme inexact)
Sortie : un bloc structuré par skill, format identique pour tous.
```

## 4. Critères de cotation développés (par dimension)

### D1 — Conformité référentielle

| Cote | Critère de décision | Exemple de signal |
|---|---|---|
| **✓** | Vocabulaire exact, version datée, auteur cité, aucun mélange inter-référentiels | « Scrum Guide **2020** : 1 seul Sprint Goal » · « AI Act art. 6 haut risque » |
| **⚠** | Bon esprit mais 1-2 imprécisions | « CRISP-DM » cité sans ses 6 phases · framework cité sans auteur/année |
| **✗** | Déviation majeure / confusion de référentiel | Scrum Guide 2017 · MoSCoW appliqué à des Features · Kimball confondu avec Inmon |

### D2 — Actionabilité

| Cote | Critère de décision | Exemple de signal |
|---|---|---|
| **✓** | **≥3 livrables** prêts à coller + exemples chiffrés réalistes | Template Jira + script cérémonie minuté + Mermaid + cas chiffré sectoriel |
| **⚠** | Contenu correct mais templates partiels ou exemples génériques | Théorie juste, mais « MyApp » au lieu d'un cas sectoriel |
| **✗** | Majoritairement conceptuel, aucun livrable réutilisable | Que des définitions, zéro template/code |

### D3 — Profondeur

| Cote | Critère de décision | Exemple de signal |
|---|---|---|
| **✓** | Sources **2023+**, anti-patterns explicités, métriques modernes, cas variés | Section `## Sources` datée + `## Anti-patterns` + DORA/Flow metrics |
| **⚠** | Solide mais sources implicites ou datées (<2022) | Bon contenu sans aucune référence externe |
| **✗** | Daté, aucune source, anti-patterns absents | Version obsolète, exemples génériques mono-sectoriels |

### Cas-limites à maîtriser

- **Le ✓ pur est rare** — sur tout le chantier, peu de skills l'obtiennent (ex. `story-mapping.md`, `planning-poker.md`, `archimate-modeling.md`). N'attribuer 3 ✓ que si **aucune** dimension n'appelle de réserve. Dans le doute → ⚠.
- **Faux positif = risque n°1** (ISO 19011 présentation impartiale) : coter ✓ par complaisance pour éviter la friction est plus grave qu'un rejet non fondé. Chaque ✓ s'adosse à une preuve.
- **P1 mécanique vs substantiel** : un P1 « certif manquante en en-tête » ou « anti-pattern absent » est **mécanique** → V1 (10 min). Un P1 « profondeur absente, référentiel non couvert » est **substantiel** → V2 (1,5-2h). Le tri conditionne la planification.
- **Vérification factuelle obligatoire** (règle `feedback_verification_factuelle`) : avant d'affirmer qu'un libellé de certification, un % statistique, un nom de cohorte/niveau de framework ou une date est **conforme ou erroné**, lancer un **WebSearch** sur la source primaire. Ne jamais coter D1 sur une croyance — incident v3.8.0 (cohorts MIT Sloan inventés) à ne pas reproduire.

## 5. Template de rapport d'audit standardisé (10 sections)

Fichier : `audits/audit-<agent>-<AAAA-MM-JJ>.md`

```markdown
# Audit qualité — AGENT-<NOM> (grille v2.8 §3.x <groupe>)
> Date : AAAA-MM-JJ · Modèle : <modèle Claude utilisé> · Auditeur : AGENT-AUDIT-METHODO-IA

## 1. Synthèse (verdict global + chiffres clés)
## 2. Méthode (groupe, déclinaison §3.x, périmètre N skills, extraction Explore)
## 3. Tableau de cotation (1 ligne/skill : D1 | D2 | D3 | Verdict)
## 4. Findings P1 (bloquants — constat · référence · recommandation)
## 5. Findings P2 (enrichissements à planifier)
## 6. Findings P3 (cosmétique fine)
## 7. Constats transversaux (patterns récurrents sur l'agent)
## 8. Métriques de synthèse (§1.4)
## 9. Plan d'action recommandé (V1/V2/V3 — cf. §6)
## 10. Validation Guy (verdicts validés / ajustés / arbitrages)
```

Chaque finding suit le **format 3 parties** de l'agent : **constat · référence certifiante · recommandation concrète**.

## 6. Logique de recommandation des vagues V1/V2/V3

| Vague | Cible | Nature | Budget indicatif |
|---|---|---|---|
| **V1 mécanique** | P1 cosmétiques + P3 | Certif déclarée manquante, en-tête standardisé, anti-pattern à ajouter, source absente — correction mécanique transverse | ~10 min/skill |
| **V2 profonde** | P1 stratégiques + P0 | Refonte de contenu : référentiels datés, exemples chiffrés sectoriels, sources primaires (WebSearch), anti-patterns explicités | 1,5-2h/skill |
| **V3 bundles** | P2 cross-agents | Enrichissements thématiques groupés : Sources / Anti-patterns / Cross-links / Diversification sectorielle | par lot |

**Règle de tri** : un P1 **mécanique** (manque déclaratif) bascule en V1 ; un P1 **substantiel** (déviation de fond, profondeur absente) reste en V2. Le critère **80/20 + « Mission 6 mois »** arbitre l'effort : enrichir d'abord les skills core réellement mobilisés en mission, éviter le verticalisme coûteux (anti usine à gaz).

## 7. Exemple d'audit déroulé de bout en bout (illustratif)

> Cas **illustratif anonymisé** d'un audit complet appliqué à un skill fictif `skills/scrum/priorisation-backlog.md` (agent PO-SCRUM → groupe **Agile/Produit §3.1**).

**Étape 1 — Cadrage** : propriétaire = PO-SCRUM → groupe Agile/Produit → ouvrir grille §3.1 (référentiels attendus : Scrum Guide 2020, SAFe 6, WSJF POPM 6, sources scrum.org/scaledagileframework.com 2023+).

**Étape 2 — Extraction Explore** (sortie factuelle, extraits) :
- Référentiels cités : « MoSCoW », « WSJF », « RICE » — *aucune version/auteur*
- Livrables : 1 tableau de priorisation MoSCoW ; *pas d'exemple chiffré WSJF, pas de template Jira*
- Anti-patterns : **absents**
- Sources externes : **aucune**
- Certification en-tête : **absente**
- Signal d'alerte : « WSJF = somme des 4 critères » (formule incomplète : WSJF = Cost of Delay / Job Size)

**Étape 3 — Cotation** (grille §3.1) :

| Dim. | Cote | Justification (preuve) |
|---|:---:|---|
| **D1** | **✗** | WSJF mal défini (formule incomplète) + frameworks sans version/auteur → déviation majeure |
| **D2** | **⚠** | 1 tableau MoSCoW utilisable mais ni exemple WSJF chiffré ni template Jira (<3 livrables) |
| **D3** | **✗** | 0 source, 0 anti-pattern, contenu daté |

→ **Verdict : P1** (1 dimension ✗ + une 2ᵉ ✗ ⇒ proche P0 ; ici classé **P1 substantiel** car le cœur WSJF est faux).

**Étape 4 — Findings (format 3 parties)** :
- *Constat* : la formule WSJF est fausse (somme au lieu de CoD/Job Size). *Référence* : SAFe 6 POPM — WSJF = Cost of Delay ÷ Job Size, cotation **relative par colonne**. *Reco* : réécrire la section WSJF avec la formule officielle + exemple chiffré 5 features.

**Étape 5 — Reco vague** : P1 **substantiel** (WSJF faux + profondeur absente) → **V2 profonde** (1,5-2h) : ajout Scrum Guide 2020 daté, formule WSJF correcte + exemple chiffré, RICE (Intercom 2016) sourcé, section Anti-patterns (« WSJF en absolu », « MoSCoW sur Epics »), en-tête certifié, `## Sources`.

**Métriques synthèse (si agent complet audité)** : ex. PO-SCRUM 14 skills → 1 ✓ / 3 P3 / 6 P2 / 4 P1 / 0 P0 · 29 % sans certif déclarée · 36 % avec anti-patterns · 50 % avec sources.

## Anti-patterns d'audit

- ❌ **Brief Explore compact** pour économiser des tokens → extraction dégradée (qualité dégradée proscrite, Phase 1.2)
- ❌ **Coter ✓ par complaisance** sans vérifier les 3 critères opérationnels → faux positif (plus dangereux qu'un rejet — ISO 19011 présentation impartiale)
- ❌ **Inventer un verdict ✓ pur** alors qu'aucune dimension n'est réellement irréprochable (le ✓ pur est rare)
- ❌ **Auditer sans conscience des biais corrélés** producteur/auditeur sur un même modèle LLM → proposer une validation croisée (autre modèle) pour les enjeux forts
- ❌ **Affirmer une non-conformité D1** (libellé certif, %, date, niveau framework) sans WebSearch préalable sur la source primaire
- ❌ **Confondre** audit qualité d'un skill catalogue (ce skill) et audit d'un livrable runtime ([`audit-conformite-methodo.md`](audit-conformite-methodo.md))
- ❌ **Indulgence d'auteur** : coter plus doucement parce que le skill a été écrit par Guy ou par soi-même (viole l'intégrité ISO 19011)
- ❌ **Cotation sans preuve** : juger sur une impression globale au lieu d'une citation exacte issue de l'extraction (viole l'approche fondée sur les preuves)

## Outils

- **Sous-agent Explore** : extraction factuelle exhaustive par skill (étape 2 — délégation)
- **WebSearch** : vérification des sources primaires avant cotation D1 (libellés certifs, % , dates, niveaux frameworks)
- **Grille v2.8** : `audits/audit-grilles-v2.8.md` (squelette + 5 déclinaisons + workflow)
- **Rapports d'audit existants** : `audits/audit-<agent>-*.md` (modèles de référence calibrés sur le chantier)
- **Bilan chantier** : `audits/BILAN-PHASE-1-CHANTIER-V2.8.md` · **cartographie core** : `audits/CARTOGRAPHIE-SKILLS-CORE-MISSION.md` (priorisation N1/N2 pour l'approche par les risques)

## Livrables

- **Rapport d'audit standardisé** `audits/audit-<agent>-<AAAA-MM-JJ>.md` (10 sections)
- **Tableau de cotation** D1/D2/D3 + verdict P0-P3 par skill
- **Métriques de synthèse** par agent (distribution verdicts, % certif/anti-patterns/sources, taux de couverture référentiels)
- **Plan d'action priorisé** par vagues V1/V2/V3 avec budget indicatif
- **Liste des findings** P1/P2/P3 au format 3 parties (constat · référence · reco)
- **Recommandation de validation croisée** (autre modèle) si enjeu fort détecté

## Format de sortie

Pour chaque mission d'audit, préciser :
- **Périmètre** : 1 skill · 1 agent complet · 1 groupe · catalogue entier
- **Groupe & déclinaison** : Agile/Produit §3.1 · Conseil/Direction §3.2 · Data/Tech §3.3 · Dev/CMS §3.4 · Transverse/Méta §3.5
- **Profondeur d'audit** (approche par les risques ISO 19011) : exhaustif (tous skills) · ciblé core mission (N1/N2 only) · échantillon
- **Niveau de formalisme du rapport** : complet 10 sections · synthèse rapide (tableau + findings P1) · note de cotation unitaire (1 skill)
- **Posture** : audit seul · audit + corrections V1 dans la foulée · audit + plan V2/V3 à planifier

## Sources

- **ISO/IEC 19011:2018** — *Guidelines for auditing management systems* — iso.org/standard/70017.html (7 principes : intégrité, présentation impartiale, conscience professionnelle, confidentialité, indépendance, approche fondée sur les preuves, **approche par les risques** ajoutée en 2018 ; lignes directrices programme d'audit + compétence des auditeurs)
- **ISO 9001:2015 §9.2** — Audit interne (programme d'audit, critères, périmètre, objectivité, preuves) — iso.org
- **CMMI V3.0** — CMMI Institute (ISACA, avril 2023) — méthode d'appraisal **SCAMPI** (Standard CMMI Appraisal Method for Process Improvement, SEI) : ratings benchmark, classes A/B/C selon ARC
- **ISO/IEC 42001:2023** — *Information technology — Artificial intelligence — Management system* (AIMS) — audit de conformité des systèmes IA — iso.org
- **NIST AI RMF 1.0** — AI Risk Management Framework (NIST, janvier 2023) — nist.gov
- **Kahneman D.** — *Thinking, Fast and Slow* (Farrar, Straus and Giroux, 2011) — biais cognitifs ; **Tversky A. & Kahneman D.** — *Judgment under Uncertainty: Heuristics and Biases* (Science, 1974)
- **Grille interne** : `audits/audit-grilles-v2.8.md` (squelette commun + 5 déclinaisons + workflow 6 étapes + patterns à propager)

## Voir aussi

- [`audit-conformite-methodo.md`](audit-conformite-methodo.md) — audit de conformité d'un **livrable runtime** (Scrum/SAFe/ISTQB/PMI), à ne pas confondre avec l'audit d'un skill catalogue
- [`challenge-raisonnement.md`](challenge-raisonnement.md) — biais cognitifs, devil's advocate, red-team (mobilisé pour le principe d'indépendance / angles morts corrélés LLM)
- [`gate-validation-livrable.md`](gate-validation-livrable.md) — gates DoD avant promotion d'un livrable
- [`../../audits/audit-grilles-v2.8.md`](../../audits/audit-grilles-v2.8.md) — **source de vérité** de la grille (5 déclinaisons détaillées)
