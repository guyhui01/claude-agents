# Audit qualité — Groupe `growth_ia` (AGENT-GROWTH-IA)

> **Date** : 2026-06-02 · **Modèle** : Claude Opus 4.8 · **Grille** : v2.8 §3.5 Transverse/Méta — sous-domaine **Engagement/Croissance**
> **Méthode** : extraction Explore (2 lots de 4) → cotation D1/D2/D3 → **passe de vérification factuelle avec exécution réelle du code** (scipy/numpy) → recommandations V1+.
> **WebSearch préalable** : 6 recherches sur référentiels growth (AARRR, North Star, LTV/CAC, Reforge, ICE/RICE, attribution GA4).

---

## 1. Périmètre

8 skills · 2 017 lignes (hors README) · dossier `skills/growth_ia/`.

| # | Skill | Lignes | Objet |
|---|---|---:|---|
| 1 | `acquisition-seo-sem.md` | 251 | Acquisition SEO technique + SEM/paid |
| 2 | `experimentation-ab-testing.md` | 249 | Design & analyse de tests A/B, feature flags |
| 3 | `product-analytics.md` | 238 | Tracking, funnels, cohortes, rétention, NSM |
| 4 | `lifecycle-marketing.md` | 247 | RFM, séquences email, lead scoring, NPS |
| 5 | `growth-frameworks.md` | 244 | AARRR, North Star, ICE, HEART, Growth Loops |
| 6 | `attribution-ltv-cac.md` | 220 | Attribution multi-touch, LTV/CAC/payback |
| 7 | `ia-personalisation.md` | 245 | Reco ALS, churn scoring, SHAP, contenu dynamique |
| 8 | `automation-growth.md` | 260 | n8n/Make/Clay + LLM, outbound, enrichissement |

**Profil** : skills denses, très actionnables (code Python/SQL/TS, formules, dashboards), mais **0/8 sources datées**, **1/8 anti-patterns**, **0/8 cross-links** à l'entrée. Risque factuel concentré sur les **exemples chiffrés calculés** et les **benchmarks non sourcés**.

---

## 2. Cotation §3.5 — Engagement/Croissance

| Skill | D1 Conformité | D2 Actionabilité | D3 Profondeur | Synthèse |
|---|:---:|:---:|:---:|---|
| acquisition-seo-sem | ⚠ | ✓ | ⚠ | exemple CPA faux + 0 source |
| experimentation-ab-testing | ⚠ | ✓ | ⚠ | **2 exemples faux** + anti-patterns présents |
| product-analytics | ⚠ | ✓ | ⚠ | seuils stickiness non sourcés, 0 source |
| lifecycle-marketing | ⚠ | ✓ | ⚠ | RFM/NPS sans attribution, 0 source |
| growth-frameworks | ⚠ | ✓ | ✗ | **ICE faux** + AARRR/NSM/ICE non datés |
| attribution-ltv-cac | ⚠ | ✓ | ⚠ | **calculs exacts** ✅ ; benchmarks non sourcés |
| ia-personalisation | ⚠ | ✓ | ⚠ | hyperparamètres ad-hoc, 0 source |
| automation-growth | ⚠ | ✓ | ⚠ | seuils/délais arbitraires, 0 source |

**Bilan : 0 ✓ · 0 P0 · 4 P1 · 3 P2.**
- D1 ⚠ généralisé : frameworks corrects mais **aucune attribution datée**, benchmarks énoncés comme faits sans source.
- D2 ✓ généralisé : densité de livrables actionnables élevée (vrai point fort du groupe).
- D3 ⚠/✗ : 0 source académique/industrielle, anti-patterns quasi absents, et surtout **exemples chiffrés faux** (défaut de profondeur majeur, incident type v3.15.0).

---

## 3. Passe de vérification factuelle — exemples chiffrés (exécution réelle scipy/numpy)

> Conformément à `feedback_exemples_executes` : chaque exemple a été **réexécuté** à partir du code exact du skill. Vérité-terrain ci-dessous.

### P1-A — `growth-frameworks.md` : ICE scoring faux (l. 204-209)
Code : `ice_score = round((impact × confidence × ease) / 100, 1)`.

| Initiative | Affiché | Réel | |
|---|:---:|:---:|---|
| G-01 Onboarding (7·8·9) | 5.0 | 5.0 | ✅ |
| G-03 Email D7 (6·8·8) | **4.8** | **3.8** | ❌ |
| G-04 Slack (8·6·3) | **3.2** | **1.4** | ❌ |
| G-02 Referral (9·5·4) | 1.8 | 1.8 | ✅ |

Le **classement** affiché est également faux : Slack (1.4) est placé devant Referral (1.8). Sortie correcte :
```
1. [5.0] Onboarding tooltip contextuel (3j)
2. [3.8] Email séquence réengagement D7 (2j)
3. [1.8] Referral program 2-sided (15j)
4. [1.4] Intégration Slack native (20j)
```

### P1-B — `experimentation-ab-testing.md` : taille d'échantillon fausse (l. 79-81)
Entrées : baseline 3.5 %, MDE +0.7pp (+20 % relatif), α=0.05, power=0.80, 800 visiteurs/j.

| Sortie | Affiché | Réel |
|---|:---:|:---:|
| n / variante | ~2 700 | **11 858** |
| Durée | ~3.5 semaines | **8.6 semaines** |

Écart ×4,4. **Effet de bord pédagogique** : 8.6 semaines > 8 → la vraie sortie déclenche le `warning "Trop long (>8 semaines) — augmenter le MDE"`. L'exemple actuel masque ce garde-fou.

### P1-C — `experimentation-ab-testing.md` : A/B test CTA faux (l. 151-153)
Entrées : control 3200/112, variant 3150/142, χ² de Pearson sans correction.

| Sortie | Affiché | Réel |
|---|:---:|:---:|
| Lift relatif | +26.0 % | **+28.8 %** |
| p-value | 0.0231 | **0.0404** |
| Winner | VARIANT | VARIANT ✅ (significatif, conclusion inchangée) |

### P1-D — `acquisition-seo-sem.md` : CPA cible faux (l. 238)
Entrées : LTV 12 000€, close 0.25, sql→trial 0.4, trial conv 0.30, payback 12.

| Sortie | Affiché | Réel |
|---|:---:|:---:|
| target_cpa_trial | ~90€ | **54€** |
| target_cpa_sql | ~150€ | **375€** |
| max_cpc | (n/a) | 5.4€ |

### ✅ Contrôle négatif — `attribution-ltv-cac.md` (l. 168-170) : EXACT
LTV 15 167€ · ratio 8.4x · payback 6.6 mois → **conformes au code**. Seul skill chiffré juste ; sert de référence de bonne pratique pour les corrections.

---

## 4. Conformité référentielle (D1) — attributions manquantes / à corriger

| Framework cité | État actuel | Correction attendue (WebSearch vérifié) |
|---|---|---|
| AARRR | sans source | **Dave McClure, « Startup Metrics for Pirates », 2007** (Ignite Seattle / 500 Startups) |
| North Star Metric | sans source | **Sean Ellis (~2010)**, codifié par **Amplitude** (J. Cutler, 2017+) |
| ICE | sans source | **Sean Ellis** (GrowthHackers) ; distinguer **RICE = Intercom, 2017** |
| HEART | sans source | **Google — Rodden, Hutchinson, Fu, CHI 2010** |
| Growth Loops | sans source | **Reforge — Brian Balfour, Casey Winters, Kevin Kwok** ; Racecar Framework (Hockenmaier & Rachitsky) |
| LTV/CAC 3:1 + payback <12 mois | présenté comme « norme SaaS » | **David Skok / Matrix Partners (~2010)** — valable pour SaaS mature en régime stable ; affiner par Bessemer/Scale/Battery |
| Benchmarks growth (activation 40 %, signup 3 %, rétention 40 %, K-factor 0.15) | présentés comme faits | **ordres de grandeur à qualifier** (varient par secteur/stade) — pas de source canonique |
| Quick Ratio > 4 | sans source | **Social Capital / Mamoon Hamid (~2015)** |
| RFM | sans source | modèle marketing direct — **Hughes 1994** / Bult & Wansbeek 1995 |
| NPS | sans source | **Fred Reichheld, HBR déc. 2003** |
| Attribution GA4 | 5 modèles présentés | noter : GA4 a **déprécié first-click/linear/time-decay/position-based en 2023**, conserve **data-driven (Shapley) + last-click** |
| Reco ALS / SHAP | sans source | **ALS : Hu, Koren, Volinsky 2008** ; **SHAP : Lundberg & Lee, NeurIPS 2017** |

---

## 5. Actionabilité (D2) — point fort confirmé
≥3 livrables actionnables par skill : scripts Python/SQL/TS, formules, dashboards, YAML workflows, tableaux de benchmarks. Exemples chiffrés présents partout (mais 4/5 faux — cf. §3). Cas sectoriels surtout SaaS B2B → **diversification sectorielle** possible en V3.

---

## 6. Profondeur (D3) — principaux gaps
- **0/8 `## Sources`** datées.
- **1/8 `## Anti-patterns`** (seul `experimentation-ab-testing`, sous forme `common_mistakes`).
- **0/8 `## Voir aussi`** / cross-links.
- Exemples chiffrés faux (§3) = défaut de profondeur central.

---

## 7. Anonymisation & versions
- **Clients réels** : aucun. Exemples génériques (SaaS B2B) + illustrations publiques North Star (Slack/Airbnb/Spotify/LinkedIn = usage inspirationnel admis).
- Mention « Guy Hui-Bon-Hoa » dans un exemple Schema.org JSON-LD (`acquisition-seo-sem.md` l. 100) : profil d'activation perso, admis (cf. `feedback_catalogue_generaliste`).
- **Modèles IA** : `claude-opus-4-8`, `claude-haiku-4-5` → **à jour, 0 ID obsolète**.

---

## 8. Synthèse des findings

| ID | Skill | Sévérité | Finding | Action |
|---|---|:---:|---|---|
| P1-A | growth-frameworks | P1 | ICE 4.8/3.2 + classement faux | corriger commentaires → 3.8 / 1.4 + ordre |
| P1-B | experimentation-ab-testing | P1 | taille échantillon ~2700/3.5sem fausse | corriger → 11 858 / 8.6 sem (+ exposer warning) |
| P1-C | experimentation-ab-testing | P1 | A/B test lift/p faux | corriger → +28.8 % / 0.0404 |
| P1-D | acquisition-seo-sem | P1 | CPA ~90/~150 faux | corriger → 54€ / 375€ |
| P2-E | tous (7/8) | P2 | 0 `## Sources` | ajouter Sources datées (§4) |
| P2-F | tous (7/8) | P2 | anti-patterns absents | ajouter `## Anti-patterns` (3-5/skill) |
| P2-G | tous (8/8) | P2 | 0 cross-links | ajouter `## Voir aussi` (intra + cross-agents) |

---

## 9. Recommandation — V1+ sur les 8 skills

1. **Corriger les 4 exemples chiffrés** (P1-A→D) avec les valeurs **exécutées** ci-dessus.
   - Cas B (échantillon) : aligner les commentaires sur 11 858 / 8.6 sem **et** ajouter une ligne montrant que l'exemple dépasse 8 semaines → recommander d'augmenter le MDE (transforme le bug en démonstration du garde-fou). *Arbitrage Guy.*
2. **`## Sources`** datées sur les 8 (cf. §4 — attributions vérifiées WebSearch).
3. **`## Anti-patterns`** sur les 7 manquants (formaliser `common_mistakes` d'experimentation en `## Anti-patterns`).
4. **`## Voir aussi`** sur les 8 : maillage intra-growth + cross-agents (product-analytics↔BI-ANALYST, acquisition↔REDACTEUR-IA, ia-personalisation↔AI-ARCHITECT/DATA-SCIENTIST, attribution↔FINANCIAL-ANALYST, frameworks↔PO-SCRUM product-vision).
5. **Benchmarks** : requalifier en « ordres de grandeur » + source quand elle existe (Skok, Social Capital), disclaimer « varie par secteur/stade ».

**Release cible** : `v3.23.0` (minor — enrichissement majeur d'un groupe de skills).

---

## 10. Reste du chantier Transverse/Méta
- `veille_strategique` (6 skills) — dernier groupe (Gartner Hype Cycle, Porter 1979, Ansoff 1975, McKinsey 3 Horizons, Wardley).
- Puis **jalon de fin de chantier** : check des 38 `AGENT-*.md` (compteurs, certifs, cross-refs, anonymisation).
