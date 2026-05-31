# Audit qualité — AGENT-JURIDIQUE-IA (7 skills N2 core) — grille v2.8 §3.2 Conseil/Direction

> Date : 2026-05-31 · Modèle : Claude Opus 4.8 · Auditeur : AGENT-AUDIT-METHODO-IA (skill `audit-qualite-catalogue.md`)
> Périmètre : 7 N2 core JURIDIQUE-IA (hors `propriete-intellectuelle-ia.md` déjà V2 en v3.10.0, hors `nis2-conformite`/`veille-reglementaire`)
> Méthode : extraction factuelle déléguée à sous-agent Explore (méthode standard) → cotation expert grille §3.2

---

## 1. Synthèse

**Verdict global du domaine : sous le niveau attendu — 1 P0 + 6 P1, 0 ✓.** Le domaine JURIDIQUE-IA N2 a été le moins traité du chantier (seul `propriete-intellectuelle-ia` avait reçu une V2). L'audit confirme un **patrimoine actionnable solide** (templates juridiques riches : grilles AI Act, DPIA structurée, méthodo audit 5 phases, politique IA complète) mais **deux faiblesses structurelles transverses** :

1. **D3 = ✗ sur les 7 skills** : aucune section `## Sources`, aucun `## Anti-patterns`, aucun lien officiel, aucune date de référentiel.
2. **Affirmations juridiques non sourcées** : pour un domaine juridique, c'est le risque n°1 (jurisprudence « CJUE/EUIPO 2025 » sans arrêt, « droit français 2026 » vague, « consensus international 2026 », dates AI Act affirmées sans source). Déclenche directement la règle `feedback_verification_factuelle`.

**Bonne nouvelle** : 7/7 ont une certification déclarée (0 bug mécanique d'en-tête), et l'actionabilité est globalement bonne.

| Indicateur | Valeur |
|---|---:|
| Skills audités | 7 |
| ✓ purs | 0 |
| P0 | **1** (gouvernance-ethique-ia) |
| P1 | **6** |
| P2 / P3 | 0 / 0 |
| Sans certif déclarée | 0 % ✅ |
| Avec section Sources | 0 % 🔴 |
| Avec section Anti-patterns | 0 % 🔴 |

## 2. Méthode

- **Groupe** : Conseil/Direction → déclinaison **§3.2** de `audits/audit-grilles-v2.8.md`
- **Référentiels attendus (sous-domaine Juridique IA)** : AI Act UE 2024/1689 · RGPD 2016/679 · NIS2 2022/2555 · DORA 2022/2554 · ISO/IEC 42001:2023 · ISO/IEC 23894:2023 · ISO/IEC 27001:2022 · CNIL (DPIA, guides IA) · NIST AI RMF 1.0
- **Extraction** : sous-agent Explore, format factuel structuré par skill (référentiels + version, livrables, exemples, anti-patterns, sources, cross-links, signaux d'alerte). Aucune cotation déléguée (indépendance ISO 19011).

## 3. Tableau de cotation

| Skill | D1 Conformité | D2 Actionabilité | D3 Profondeur | Verdict |
|---|:---:|:---:|:---:|:---:|
| `rgpd-ia.md` | ✓ | ✓ | ✗ | **P1** |
| `ai-act-conformite.md` | ⚠ | ✓ | ✗ | **P1** |
| `audit-conformite-ia.md` | ⚠ | ✓ | ✗ | **P1** |
| `contrats-ia.md` | ⚠ | ✓ | ✗ | **P1** |
| `politique-ia-entreprise.md` | ⚠ | ✓ | ✗ | **P1** |
| `dpia-systemes-ia.md` | ⚠ | ⚠ | ✗ | **P1** |
| `gouvernance-ethique-ia.md` | ✗ | ✓ | ✗ | **P0** |

## 4. Findings P0 (refonte complète)

### F-P0.1 — `gouvernance-ethique-ia.md` (D1 ✗ + D3 ✗)
- **Constat** : les 7 principes éthiques ne sont rattachés à **aucun référentiel reconnu** ; la légitimité repose sur un « consensus international 2026 » (formulation floue, fabriquée), le Model Card est dit « standard Google/Hugging Face » sans lien, le seuil fairness « 5% threshold » est arbitraire et non sourcé.
- **Référence** : un skill de gouvernance éthique IA doit s'ancrer sur les référentiels officiels — **OECD AI Principles (2019)**, **UNESCO Recommendation on the Ethics of AI (2021)**, **EU Ethics Guidelines for Trustworthy AI (HLEG, 2019)**, **NIST AI RMF 1.0 (2023)**, **ISO/IEC 42001:2023** + **ISO/IEC 24028**.
- **Recommandation** : **V2 profonde prioritaire**. Réancrer les 7 principes sur OECD/UNESCO/HLEG, sourcer le Model Card (Mitchell et al. 2019), justifier ou sourcer les seuils (fairness metrics), ajouter Sources + Anti-patterns. WebSearch obligatoire sur les libellés exacts des référentiels avant publication.

## 5. Findings P1 (bloquants)

> Pattern commun aux 6 P1 : **D3 ✗** (ni Sources ni Anti-patterns) + imprécisions D1. Détail des axes spécifiques :

- **F-P1.1 `rgpd-ia.md`** *(le plus proche du ✓)* — *Constat* : articles RGPD cités avec précision (Art. 6/9/10/13-14/15/17/20/21/22/28/30/32/35) = D1 ✓, mais 0 source, 0 anti-pattern, PSD2 sans version, AI Act sans article. *Réf.* : grille §3.2 D3. *Reco* : ajouter `## Sources` (eur-lex RGPD + CNIL), `## Anti-patterns` (ex. « base légale = consentement par défaut », « droit à l'oubli = suppression sans traçabilité »), préciser PSD2 (Dir. 2015/2366) + article AI Act. **Effort léger** (proche V1+).
- **F-P1.2 `ai-act-conformite.md`** — *Constat* : taxonomie de risque correcte et bien structurée (D2 ✓), mais articles AI Act absents (Annexes citées sans art. 5/6/50/53), ISO 42001 non versionné, seuil GPAI « 10²⁵ FLOPs » et « modèles systémique » (terme inexact, AI Act = *systemic risk*) non sourcés, date « Août 2025 codes de pratique » affirmée sans source. *Réf.* : AI Act art. 5 (interdits), art. 6+Annexe III (haut risque), art. 50 (transparence), art. 51-55 (GPAI/systemic risk). *Reco* : **V2** — ancrer les articles exacts, versionner ISO 42001:2023, sourcer le calendrier officiel (WebSearch), corriger « systemic risk ».
- **F-P1.3 `audit-conformite-ia.md`** — *Constat* : méthodologie d'audit 5 phases très actionnable (D2 ✓) mais **sans aucun référentiel d'audit** (ni ISO/IEC 19011:2018, ni ISO/IEC 42001 audit, ni NIST AI RMF), OWASP LLM Top 10 sans version, ISO 42001 sans version, scoring /100 et seuil « <60 suspension » non sourcés. *Réf.* : ISO 19011:2018 (lignes directrices audit), OWASP LLM Top 10 (préciser v1.x / 2025). *Reco* : **V2** — ancrer la méthodo sur ISO 19011, versionner OWASP + ISO, justifier le scoring.
- **F-P1.4 `contrats-ia.md`** — *Constat* : clauses DPA (Art. 28/32) et Dir. 2016/943 correctes, mais « Position CJUE et EUIPO 2025 » **sans arrêt cité**, « droit français 2026 » vague, Fair Use « débat en cours » sans issue. *Incohérence cross-file* : recouvre la PI sans renvoyer à `propriete-intellectuelle-ia.md` (déjà V2 avec jurisprudence vérifiée NYT/Andersen/Getty/Thaler). *Reco* : **V2** — sourcer ou retirer les affirmations jurisprudentielles, cross-link vers `propriete-intellectuelle-ia.md`, WebSearch sur toute décision citée.
- **F-P1.5 `politique-ia-entreprise.md`** — *Constat* : template de politique IA complet (9 sections) et charte GenAI = D2 ✓, mais AI Act « risque inacceptable » sans art. 5, RGPD implicite, 0 source, 0 anti-pattern, aucun exemple sectoriel. *Reco* : **V2 légère / V3** — ajouter articles, Sources, Anti-patterns, 1 exemple sectoriel.
- **F-P1.6 `dpia-systemes-ia.md`** *(le plus faible des P1, 2 ⚠ + 1 ✗)* — *Constat* : structure DPIA en 4 sections solide mais **template plan d'action vide, zéro exemple chiffré/cas** (D2 ⚠), « Lignes directrices CNIL » sans date/lien, « DPIA presque toujours requise » sans source, durée « max 3 ans » sans article. *Réf.* : CNIL liste des traitements DPIA-obligatoires (délib. 2018-327), RGPD art. 35. *Reco* : **V2** — dater les guides CNIL, ajouter un exemple de DPIA partiellement renseigné, sourcer les seuils.

## 6. Findings P3 (cosmétique)
Néant identifié séparément — les manques cosmétiques (Sources/Anti-patterns) sont absorbés dans les P1/P0 ci-dessus.

## 7. Constats transversaux

1. **D3 ✗ généralisé (7/7)** : ni `## Sources` ni `## Anti-patterns` nulle part — gap structurel identique au reste du catalogue (cf. BILAN Phase 1), mais **aggravé en domaine juridique** où une affirmation non sourcée est un risque de crédibilité.
2. **ISO 42001 jamais versionné** (cité 2×, toujours « ISO 42001 » au lieu de « ISO/IEC 42001:2023 »).
3. **Articles AI Act systématiquement absents** alors que les articles RGPD sont, eux, bien cités → asymétrie de maîtrise RGPD (mûr) vs AI Act (superficiel).
4. **Aucun lien officiel** (eur-lex, cnil.fr, iso.org) dans aucun fichier.
5. **Aucun cross-link** entre les 7 skills ni vers `propriete-intellectuelle-ia.md` (déjà V2) → silos.
6. **Point fort** : actionabilité réelle (templates juridiques directement exploitables) + 100 % de certifs déclarées.

## 8. Métriques de synthèse

- Distribution : 0 % ✓ · 0 % P3 · 0 % P2 · **86 % P1 (6/7)** · **14 % P0 (1/7)**
- Sans certif déclarée : **0 %** ✅
- Avec ≥1 anti-pattern explicite : **0 %** 🔴
- Avec ≥1 source externe citée : **0 %** 🔴
- Couverture référentiels attendus : RGPD ✅ (articles précis) · AI Act ⚠ (articles absents) · ISO 42001 ⚠ (non versionné) · NIST AI RMF / ISO 19011 / OECD / UNESCO ✗ (absents)

## 9. Plan d'action recommandé

> Tri V1/V2/V3 selon nature du manque (mécanique vs substantiel) + critère 80/20 / positionnement « PO AI ».

| Vague | Skills | Nature | Justification |
|---|---|---|---|
| **V2 profonde — priorité 1** | `gouvernance-ethique-ia` (P0) | Réancrage référentiels éthiques (OECD/UNESCO/HLEG/NIST) + sources | Seul P0, fondations absentes |
| **V2 profonde — priorité 2** | `ai-act-conformite` · `audit-conformite-ia` · `contrats-ia` | Articles AI Act exacts, ISO 19011, jurisprudence vérifiée (**WebSearch obligatoire**), versions | Cœur du pitch « PO AI » + risque factuel juridique |
| **V2 légère** | `dpia-systemes-ia` · `politique-ia-entreprise` | Sources + dates CNIL + 1 exemple chiffré + articles | Templates déjà bons, manque ancrage |
| **V1+ (quasi mécanique)** | `rgpd-ia` | Ajout Sources + Anti-patterns + 2 articles → candidat ✓ | Déjà D1✓/D2✓, proche du ✓ pur |

**Transverse (à appliquer aux 7)** : section `## Sources` (eur-lex, cnil.fr, iso.org datés) + section `## Anti-patterns` + cross-links + versionnage ISO 42001:2023.

**Garde-fou factuel** : toute V2 de ce domaine exige des **WebSearch préalables** sur sources primaires (articles AI Act, jurisprudence, libellés certifs, dates calendrier) — règle `feedback_verification_factuelle`, incident v3.8.0 à ne pas reproduire.

**Estimation** : ~1 P0 + 5 V2 (dont 2 légères) + 1 V1+ ≈ 8-11h si tout est traité ; ou séquençage par priorité (P0 + 3 différenciateurs d'abord ≈ 6-7h).

## 10. Validation Guy

- [x] Verdicts validés
- [x] Périmètre arbitré : option 1 (P0 + 3 différenciateurs) **puis finalisation des 7**
- [x] Corrections exécutées : v3.12.0 (P0 + ai-act + audit + contrats) · v3.13.0 (rgpd + dpia + politique)

## 11. Vérification post-correction (boucle dogfooding) — 2026-05-31

Re-extraction Explore **indépendante** (regard neuf, principe d'indépendance ISO 19011 — pas d'auto-évaluation) sur les 7 skills corrigés, puis re-cotation grille §3.2.

| Skill | Verdict initial | Verdict post-V2 | Release |
|---|:--:|:--:|:--:|
| `gouvernance-ethique-ia` | **P0** | **✓** | v3.12.0 |
| `ai-act-conformite` | P1 | **✓** | v3.12.0 |
| `contrats-ia` | P1 | **✓** | v3.12.0 |
| `rgpd-ia` | P1 | **✓** | v3.13.0 |
| `dpia-systemes-ia` | P1 | **✓** | v3.13.0 |
| `politique-ia-entreprise` | P1 | **✓** | v3.13.0 |
| `audit-conformite-ia` | P1 | **P3** | v3.12.0 |

**Résultat : 1 P0 + 6 P1 → 6 ✓ + 1 P3.**

- Confirmé par extraction indépendante : **7/7** disposent de la ligne Référentiels + `## Cadre référentiels mobilisés` + `## Anti-patterns` + `## Sources` datées + `## Voir aussi` ; référentiels cités avec **articles/versions/dates précis**.
- **`audit-conformite-ia` maintenu P3** (non ✓) en toute rigueur : méthodologie solide mais **pas de cas sectoriel chiffré déroulé** (D2 ⚠ léger) → candidat V3-bundle. Anti-indulgence d'auteur appliquée.
- **Faux positifs Explore** : « audience Like Company 10 mars 2026 » et « CNIL reco avril 2025 » flaggés comme dates futures par le sous-agent (confusion liée à son cutoff d'entraînement) — en réalité **passées au 2026-05-31** et **WebSearch-vérifiées en v3.10.0**. Aucune correction nécessaire.

### Conclusion — méta-agent v3.11.0 validé en conditions réelles
Cycle complet **audit → correction → re-vérification** piloté de bout en bout : détection (1 P0 + 6 P1 + 1 incohérence cross-file) → corrections V2 (8 WebSearch, 0 invention) → remontée des verdicts (6 ✓ + 1 P3). Le skill `audit-qualite-catalogue.md` est opérationnel.
