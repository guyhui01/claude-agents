# Audit qualité — Groupe UX-DESIGNER (`skills/ux_design/`, 20 skills)

> **Date** : 2026-06-02 · **Modèle** : Claude Opus 4.8 · **Grille** : v2.8 §3.5 (Transverse/Méta, sous-domaine UX/Contenu)
> **Méthode** : extraction Explore ×4 lots → cotation experte → passe de vérification factuelle (WebSearch préalable) → V1+ → release v3.21.0
> **Périmètre** : 20 skills (hors README)

---

## 1. Synthèse

Groupe **sain mais mince** : 20 skills courts (22-41 lignes), bien structurés (Objectif / Livrables / Format de sortie partout), réellement **actionnables**. Faiblesse systémique : **0/20** disposaient de `## Sources`, `## Anti-patterns`, `## Voir aussi`, et la quasi-totalité des référentiels étaient cités **sans date ni attribution**.

**Bonne nouvelle de la passe de vérification** : **aucun chiffre fabriqué** (contraste avec incidents v3.19.0 « Greenhouse 2024 » et v3.20.0 « 87 % » / « E-E-A-T Google 2026 »). Les chiffres présents (ratios WCAG, durées motion, tailles tactiles, seuils SUS/NPS) sont des **conventions réelles**, simplement non sourcées. **0 client réel** cité (anonymisation 100 % OK). **0 ID modèle obsolète**.

| Indicateur | Avant | Après V1+ |
|---|:---:|:---:|
| Skills avec `## Sources` | 0/20 | **20/20** |
| Skills avec `## Anti-patterns` | 0/20 | **20/20** |
| Skills avec `## Voir aussi` | 0/20 | **20/20** |
| Liens orphelins | — | **0** |
| Corrections factuelles | — | **6 P1 + 2 P2** |

---

## 2. Cotation §3.5 (synthèse par dimension)

- **D1 — Conformité référentielle** : ⚠ dominant (18/20). Bons référentiels mais non datés/attribués. Plus proches de ✓ : `accessibilite-wcag` (WCAG 2.2 + RGAA 4.1 + ratios corrects) et `audit-ux-heuristiques` (Nielsen attribué). 6 skills à 0 référentiel nommé.
- **D2 — Actionabilité** : ✓/⚠. Solide partout (livrables + checklists + format). Plafonné à ⚠ par l'absence d'exemples chiffrés **sectoriels variés**.
- **D3 — Profondeur** : ✗ (20/20) avant V1+ — aucune source, aucun anti-pattern. = gisement V1+ traité.

**Verdict** : 0 ✓ pur ; les 20 relèvent d'un V1+ mécanique (méthode rodée). Aucun V2 d'exception jugé nécessaire (skills volontairement concis, critère 80/20 « mission 6 mois »).

---

## 3. Passe de vérification — corrections appliquées

| Sév. | Skill | Correction |
|:---:|---|---|
| P1 | `responsive-mobile-first` | « Breakpoints **standards** 2026 » → « **conventions courantes** » + note : aucun standard normatif de breakpoints. (Tailles tactiles 44pt/48dp confirmées correctes.) |
| P1 | `metriques-ux` | SUS daté Brooke 1986/1996 + seuils attribués Sauro/Bangor ; HEART → Rodden et al. 2010 ; NPS → Reichheld 2003 ; CUQ → Holmes et al. 2019 ; « NPS > 50 » requalifié en ordre de grandeur sectoriel. |
| P1 | `tests-utilisateurs` | Règle des « 5 utilisateurs » attribuée (Nielsen & Landauer 1993 / Nielsen 2000) **avec nuance** (variabilité réelle, CUE Molich). |
| P1 | `user-research` | « 5 à 8 » et « n ≥ 30 » nuancés (saturation thématique / marge d'erreur) ; affinity mapping → Beyer & Holtzblatt 1998. |
| P1 | `personas-jtbd` | JTBD attribué **aux deux écoles** : Ulwick (ODI 1999) + Christensen (popularisation 2003). |
| P1 | `ab-testing` | **Google Optimize fermé le 30/09/2023** → retiré, remplacé par GrowthBook ; seuils 95 %/80 % attribués (Fisher / Cohen 1988). |
| P2 | `accessibilite-wcag` | WCAG 2.2 daté **5 oct. 2023** (= ISO/IEC 40500:2025) ; ajout **European Accessibility Act** (dir. 2019/882, applicable 28/06/2025) ; RGAA 4.1.2 ; mention WCAG 3.0 **non normatif**. |
| P2 | `motion-design-ui` | 12 principes → Thomas & Johnston 1981 ; durées reliées à Material/seuil de Doherty 1982 ; ajout `prefers-reduced-motion` (WCAG 2.3.3). |

**Faux positif Explore écarté** : `benchmark-concurrent` « Airbnb pour le e-commerce » — usage **correct** du benchmark inspirationnel (best-in-class UX hors secteur), pas une erreur factuelle.

---

## 4. Sources de vérification (WebSearch préalable)

WCAG 2.2 (W3C, 5 oct. 2023) · Nielsen 10 heuristiques (1994, rév. 2020) · Atomic Design (Frost 2016) · Hick (1952) · Fitts (1954) · ISO 9241-210:2019 · Material Design 3 (2021) · Apple HIG · SUS (Brooke 1986/1996) · règle des 5 users (Nielsen & Landauer 1993 / Nielsen 2000, nuance Molich CUE) · HEART (Rodden et al. 2010) · JTBD (Ulwick / Christensen) · IAAP CPACC/WAS · Design Tokens Community Group (format 2025.10, non-standard W3C).

---

## 5. Enrichissements V1+ (20/20)

Sur chaque skill : `## Sources` (datées + attribuées) · `## Anti-patterns` (3-5 bullets) · `## Voir aussi` (maillage intra-ux_design + cross-agents `redacteur_ia` / `business_analyst` / `prompt_engineer` / `growth_ia`). Réciprocité assurée avec les liens déjà posés par `redacteur_ia/ux-writing` vers ux_design.

**Contrôles finaux** : 0 lien orphelin · 0 client réel · 0 ID modèle obsolète · 20/20 sections présentes.

---

## 6. Suite

- Commit `feat(ux_design)` (Opus 4.8) → push + tag **v3.21.0** + GitHub Release **sur accord Guy**.
- **NEXT Transverse/Méta restant** (par ROI) : `formateur_ia` (11 — Bloom/Kirkpatrick/Knowles) · `growth_ia` (8 — AARRR/Reforge) · `veille_strategique` (6 — Gartner/Porter/Ansoff).
