# Audit qualité — AGENT-RH-IA (groupe Transverse/Méta, grille §3.5)

> **Date** : 2026-06-01 · **Modèle** : Claude Opus 4.8 · **Méthode** : v2.8 (grille §3.5 RH/People)
> **Périmètre** : 11 skills `skills/rh_ia/` (1 575 L hors README) · **Cible release** : v3.19.0
> **Agent le plus sensible juridiquement** : RGPD recrutement · AI Act art. 6 + Annexe III (haut risque RH) · Code du travail L1132-1 / L1221-6-8-9

---

## 1. Synthèse exécutive

Audit-first complet des 11 skills RH avec **passe de vérification factuelle renforcée** (post-incident benchmarks LLM v3.18.1). Verdict global : **agent solide en actionabilité (D2), faible en conformité référentielle (D1) et profondeur (D3)**, avec **3 findings factuels P0/P1 critiques** confirmés par WebSearch.

**Résultats de cotation** :
- ✓ pur : **0/11**
- Proche ✓ : 1 (`verification-references-background-check` — meilleur sur le légal FR)
- 🔴 **P0 (factuel/conformité)** : **3** — `people-analytics`, `transformation-rh-ia`, `benchmark-remuneration-it`
- 🟠 **P1** : **2** — `cv-parsing-ats-scoring`, `detection-deepfake-entretien`
- 🟡 **P2** : **6** — les autres

**Constats transverses majeurs** :
- **0/11** skills ont une section `## Anti-patterns`
- **9/11** skills n'ont pas de section `## Sources`
- **~70 chiffres non sourcés** au total (salaires/TJM, benchmarks RH, ROI, prix outils, seuils)
- **1 mention clients réels** à anonymiser immédiatement (Mistral, Qonto, Alan, Contentsquare)
- **1 source mal attribuée** confirmée fabriquée/introuvable (« Greenhouse State of Recruiting 2024 »)

---

## 2. Méthode

1. **Cadrage** : grille §3.5 sous-domaine RH/People (déjà formalisée v2.8.4) — référentiels attendus : SHRM, Big Five (McCrae & Costa 1987), Schein (1985/2016), ATS standards, CNIL recrutement 2024, NIST deepfake 2023, AI Act art. 6, Code du travail L1132-1, DAMA-DMBOK 2.
2. **Extraction factuelle** : 1 sous-agent Explore, lecture exhaustive des 11 skills, extraction structurée (référentiels, livrables, **tous chiffres + traçabilité source**, sections, cross-links, mentions clients/modèles).
3. **WebSearch préalable** (règle `feedback_verification_factuelle`) : 6 recherches sur sources légales primaires + 1 vérification ciblée des sources attribuées à la table ROI suspecte.
4. **Cotation expert §3.5** : D1 (conformité) × D2 (actionabilité) × D3 (profondeur), ✓/⚠/✗.
5. **Rapport** (ce document) → validation Guy → V1+.

---

## 3. Tableau de cotation §3.5

| # | Skill | D1 Conformité | D2 Actionab. | D3 Profondeur | Verdict |
|---|---|:---:|:---:|:---:|:---:|
| 1 | recrutement-sourcing-it | ⚠ | ✓ | ✗ | P2 |
| 2 | redaction-offre-emploi | ⚠ | ✓ | ⚠ | P2 |
| 3 | evaluation-profils-techniques | ⚠ | ✓ | ⚠ | P2 |
| 4 | gepp-competences-ia | ⚠ | ✓ | ✗ | P2 |
| 5 | **people-analytics** | **✗** | ✓ | **✗** | 🔴 **P0** |
| 6 | **benchmark-remuneration-it** | ⚠ | ✓ | ⚠ | 🔴 **P0** (anonymisation) |
| 7 | **transformation-rh-ia** | ⚠ | ✓ | **✗** | 🔴 **P0** (source fabriquée) |
| 8 | detection-fraude-cv-profils | ⚠ | ✓ | ⚠ | P2 |
| 9 | detection-deepfake-entretien | ⚠ | ✓ | ⚠ | 🟠 P1 |
| 10 | verification-references-background-check | ✓⚠ | ✓ | ⚠ | P2 (proche ✓) |
| 11 | cv-parsing-ats-scoring | ✗ | ✓ | ⚠ | 🟠 P1 |

---

## 4. Findings P0 (factuel / conformité — bloquants)

### P0-1 — `people-analytics` : 8 benchmarks « France IT » non sourcés ✗
Affirmations chiffrées présentées comme benchmarks marché, **sans aucune source** :
- Time to Fill IT France **45-60j** (senior 60-90j) · Time to Hire **20-30j** · Cost per Hire **3 000-8 000 €**
- InMail Response Rate **25-35% / 10-15%** · Turnover IT France **15-25%/an** · Absentéisme **< 4%** · eNPS seuils **> 30 / > 50**

**Vérification WebSearch** : les données benchmark publiques disponibles sont **US** (SHRM 2025 Recruiting Benchmarking : time to fill ~44j, cost per hire ~4 700 $). **Aucun benchmark « France IT » traçable** ne correspond aux fourchettes affichées. → Même nature que l'incident benchmarks LLM v3.18.1.

**Correctif proposé** : soit sourcer via baromètres FR datés (APEC, Numeum/Syntec Numérique, LinkedIn Talent Insights) avec millésime, soit requalifier en **« ordres de grandeur indicatifs à valider sur le périmètre client »** + retirer toute prétention « benchmark France » non sourcée.

### P0-2 — `transformation-rh-ia` : table ROI attribuée à une source introuvable ✗
Tableau « ROI de l'IA en recrutement » (Time to Fill 55j→38j **-31%**, Cost per Hire 5 500€→3 800€ **-31%**, InMail 22%→35% **+59%**, Screening 4h→45min **-81%**, Sat manager 3.6→4.2 **+17%**) attribué à :
> *« Sources : LinkedIn Talent Trends 2024, Greenhouse State of Recruiting 2024 »*

**Vérification WebSearch** :
- ✅ « LinkedIn Global Talent Trends 2024 » **existe** (mais ne contient pas ces avant/après spécifiques).
- ❌ **« Greenhouse State of Recruiting 2024 » est INTROUVABLE** — Greenhouse publie « Hiring benchmarks » / « Hire Standard », **pas** ce rapport. **Source mal nommée / non vérifiable → schéma de fabrication identique à v3.18.1.**

**Correctif proposé** : retirer les chiffres avant/après non vérifiables OU les requalifier en exemple illustratif explicite (« exemple type, non benchmark ») + corriger/supprimer l'attribution de source erronée. Prix ATS (Greenhouse/Lever/SmartRecruiters/Workable/Recruitee) également non sourcés → ajouter « tarifs indicatifs, sur devis, vérifier auprès de l'éditeur ».

### P0-3 — `benchmark-remuneration-it` : clients réels nommés + ~50 fourchettes non tracées ⚠→🔴
- 🔴 **Anonymisation (règle `feedback_anonymisation_clients`)** : ligne ~142 nomme **Mistral, Qonto, Alan, Contentsquare** comme exemples de positionnement « Licorne ». À remplacer par catégories génériques (« licornes tech FR », « scale-up Série C »).
- ~50 fourchettes salaires CDI + TJM freelance **sans traçabilité par ligne**. Section « Sources de référence » présente (Talent.io, Malt, Glassdoor, LinkedIn Salary, Robert Half, Hays) **mais non datées et non rattachées aux chiffres**.

**Correctif proposé** : (a) anonymiser les 4 licornes ; (b) dater les sources (millésime baromètres) + disclaimer « fourchettes indicatives France 2025, à recouper » ; (c) ajouter réf. **Directive UE 2023/970 transparence salariale** (fourchette obligatoire en offre dès 7 juin 2026, interdiction de demander l'historique de rémunération).

---

## 5. Findings P1

### P1-1 — `cv-parsing-ats-scoring` : AI Act art. 6 absent sur le skill le plus haut-risque
Le scoring/filtrage automatisé de CV est **explicitement classé haut risque (AI Act Annexe III, pt 4 — emploi)**. Le skill ne cite **ni AI Act art. 6, ni CNIL recrutement, ni transparence algorithmique** (information du candidat). Poids des critères (30-40% mots-clés, etc.) présentés comme « typiques » sans source.
**Correctif** : ajouter cadre AI Act art. 6 + Annexe III (obligations déployeur dès 02/08/2026), CNIL (information candidat, droit à l'humain dans la boucle — RGPD art. 22), requalifier les poids comme « paramétrables, exemple ».

### P1-2 — `detection-deepfake-entretien` : NIST + AI Act attendus, absents
Grille §3.5 attend **NIST deepfake (2023)** et **AI Act art. 6** pour ce skill précis ; aucun n'est cité. Latence voix synthétique « 0.5-2s » et prix outils (Resemble Detect ~0,006 $/min) non sourcés. Cas « faux candidats » à sourcer (le phénomène de fraude à l'emploi par travailleurs IT nord-coréens est documenté DOJ/Mandiant 2024 — à citer plutôt qu'affirmer).
**Correctif** : ajouter réf. NIST + AI Act (systèmes de reconnaissance biométrique / deepfake), cadrer les chiffres comme ordres de grandeur, sourcer le cas réel.

---

## 6. Findings P2 (V1+ standard)

| Skill | Manque D1 | Manque D3 |
|---|---|---|
| recrutement-sourcing-it | CNIL recrutement, L1132-1 ; InMail 25-30% non sourcé | Sources + Anti-patterns absents |
| redaction-offre-emploi | « transparence salariale 2024 » imprécis → **Dir. UE 2023/970** (appl. 07/06/2026) + L1132-1 | Anti-patterns absents |
| evaluation-profils-techniques | **Big Five (McCrae & Costa 1987)** absent alors qu'attendu ici ; méthode STAR sans source | Anti-patterns absents (garde-fou LLM ✅ déjà présent) |
| gepp-competences-ia | Code du travail GEPP (L2242-20, accord GPEC) absent | Sources + Anti-patterns absents |
| detection-fraude-cv-profils | Présomption de bonne foi candidat (L1221-6) / RGPD absents ; prix outils non sourcés | Sources + Anti-patterns absents |
| verification-references-background-check | **Proche ✓** (RGPD, CASF L133-6, CNIL, ENIC-NARIC bien posés) ; manque L1221-8/9 (information préalable, confidentialité des résultats) | Anti-patterns absents ; prix prestataires non sourcés |

> ⚠️ **Faux positif Explore écarté** : l'extraction signale « Claude Code 101 » (gepp, l.108) comme hallucination potentielle. **C'est FAUX** — « Claude Code 101 » est une formation Anthropic réelle (Guy en est certifié, cf. profil 2026). À conserver.

---

## 7. Findings transverses

1. **Anti-patterns** : **0/11** skills en disposent → bundle `## Anti-patterns` à généraliser (3-5 puces/skill, axées conformité RH).
2. **Sources** : **9/11** sans section `## Sources` datée.
3. **Cross-links** : quasi inexistants (1 seul, implicite). Maillage à créer : intra-rh_ia + vers `juridique_ia` (RGPD/AI Act/discrimination) et `formateur_ia` (GEPP→montée en compétences).
4. **Modèles Claude** : versions citées (Opus 4.8 / Sonnet 4.6 / Haiku 4.5) **à jour** — RAS.
5. **Garde-fous LLM benchmarks** (encadrés « ne jamais figer un score ») présents dans `evaluation-profils-techniques` + `transformation-rh-ia` (hérités v3.18.1) — **bonne pratique à conserver**.

### Correction de la grille §3.5 elle-même
La grille cite Big Five « *Journal of Personality* (1987) ». La référence exacte (WebSearch, PubMed 3820081) est :
> McCrae, R. R., & Costa, P. T. (1987). *Validation of the Five-Factor Model of Personality Across Instruments and Observers.* **Journal of Personality and Social Psychology**, 52(1), 81-90.
→ Corriger l'intitulé du journal dans `audit-grilles-v2.8.md` §3.5.

---

## 8. Sources légales vérifiées (WebSearch 2026-06-01)

| Référence | Détail vérifié | URL |
|---|---|---|
| AI Act UE 2024/1689 art. 6 + Annexe III | Recrutement/sélection/évaluation candidats = **haut risque** ; obligations déployeur applicables **02/08/2026** ; amendes jusqu'à 15 M€ / 3% CA | artificialintelligenceact.eu/article/6 ; /annex/3 |
| CNIL — Guide du recrutement | Guide **19 fiches** (fondamentaux RGPD + Q/R nouvelles technologies/discrimination) ; finalité, minimisation, AIPD, interdiction données sensibles | cnil.fr/fr/le-guide-du-recrutement |
| Code du travail L1132-1 | Non-discrimination (motifs prohibés) | legifrance — LEGIARTI000042026716 |
| Code du travail L1221-6/8/9 | L1221-6 : lien direct & nécessaire + bonne foi ; L1221-8 : information préalable des méthodes, résultats confidentiels ; L1221-9 : pas de collecte par dispositif non porté à connaissance | legifrance — section recrutement |
| Dir. UE 2023/970 transparence salariale | Fourchette en offre, interdiction historique de rémunération, transposition **07/06/2026**, tous employeurs | eur-lex 2023/970 |
| Big Five — McCrae & Costa 1987 | **JPSP** 52(1):81-90, PubMed 3820081 | pubmed.ncbi.nlm.nih.gov/3820081 |
| Schein — Org. Culture & Leadership | 1985, 5e éd. 2016 ; 3 niveaux : artefacts / valeurs affichées / postulats de base | (ouvrage de référence) |
| SHRM 2025 Recruiting Benchmarking | Données **US** : time to fill ~44j, cost per hire ~4 700 $ (sert à invalider les benchmarks « France IT » non sourcés) | shrm.org |

---

## 9. Plan d'action V1+ proposé (release v3.19.0)

**Ampleur validée par Guy : V1+ sur les 11 skills** (Sources légales datées + Anti-patterns conformité + cross-links), avec traitement P0 prioritaire.

**Vague A — P0 factuel/conformité (bloquant)** :
- A1 `benchmark-remuneration-it` : anonymiser les 4 licornes + dater sources + disclaimer + Dir. 2023/970
- A2 `people-analytics` : sourcer ou requalifier les 8 benchmarks « France IT »
- A3 `transformation-rh-ia` : corriger/retirer la table ROI + source « Greenhouse State of Recruiting 2024 » erronée

**Vague B — P1** :
- B1 `cv-parsing-ats-scoring` : AI Act art. 6 + Annexe III + CNIL + RGPD art. 22
- B2 `detection-deepfake-entretien` : NIST 2023 + AI Act + sourcing cas réel

**Vague C — V1+ standard sur les 11** :
- Section `## Sources` datée (9 skills sans)
- Section `## Anti-patterns` conformité (11 skills)
- Cross-links intra-rh_ia + vers `juridique_ia` / `formateur_ia`
- Corrections D1 ciblées (L1132-1, L1221-6/8/9, L2242-20, McCrae & Costa 1987, Schein 1985/2016)

**Vague D — Grille** : corriger l'intitulé du journal Big Five dans `audit-grilles-v2.8.md` §3.5.

**Commit + tag v3.19.0 + GitHub Release** (push sur accord explicite Guy). CHANGELOG mentionnant le modèle Opus 4.8. Anonymisation respectée dans tout exemple.

---

## 10. Validation Guy — RÉALISÉ (v3.19.0)

- [x] Verdicts §3 validés
- [x] Périmètre P0 confirmé (3 findings)
- [x] Arbitrage : **requalifier** les chiffres non sourcés en exemple illustratif + disclaimer/sources datées (grilles salaires)
- [x] V1+ vagues A→D exécutées sur les 11 skills + grille §3.5 corrigée
- [x] Anonymisation appliquée (GAFAM/licornes nommées retirées) + mentions stigmatisantes par nationalité retirées
- CHANGELOG v3.19.0 rédigé · **push + tag + Release sur accord explicite Guy**
