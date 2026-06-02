# Audit qualité — Groupe FORMATEUR-IA (`skills/formateur_ia/`, 11 skills)

> **Date** : 2026-06-02 · **Modèle** : Claude Opus 4.8 · **Grille** : v2.8 §3.5 (Transverse/Méta, sous-domaine Pédagogie/Formation)
> **Méthode** : extraction Explore ×3 lots → cotation experte → passe de vérification factuelle (WebSearch préalable, dont traque des neuromythes) → V1+ → release v3.22.0
> **Périmètre** : 11 skills (hors README)

---

## 1. Synthèse

Groupe **riche et très actionnable** (skills de 111 à 225 lignes) : templates, plans détaillés, grilles d'évaluation, exemples chiffrés, exercices, comparatifs d'outils. C'est le groupe le plus dense en livrables audité jusqu'ici. Faiblesse systémique : **0/11** `## Sources`, **0/11** `## Anti-patterns`, **0/11** `## Voir aussi`, référentiels pédagogiques **non datés/attribués**, et plusieurs skills n'en citent aucun.

**Passe de vérification** : **aucun neuromythe présent** (la recherche préalable a armé le V1+ pour les exclure activement). **1 erreur de calcul** détectée et corrigée (payback). **1 chiffre fabriqué** (« 10× »). **0 client réel**. **0 ID modèle obsolète** (Opus 4.8 / Sonnet 4.6 / Haiku 4.5 corrects).

| Indicateur | Avant | Après V1+ |
|---|:---:|:---:|
| `## Sources` | 0/11 | **11/11** |
| `## Anti-patterns` | 0/11 | **11/11** |
| `## Voir aussi` | 0/11 | **11/11** |
| Liens orphelins | — | **0** |
| Corrections factuelles | — | **2 P1 + 2 P2** |

---

## 2. Cotation §3.5 (synthèse par dimension)

- **D1 — Conformité référentielle** : ⚠ dominant. Bons référentiels (Bloom, ADDIE/SAM, Kirkpatrick, Phillips, 70-20-10) mais non datés/attribués ; 6 skills sans cadre pédagogique nommé (data-literacy, elearning, formation-claude-code, formation-ia-sensibilisation, prompt-engineering-formation, formation-agents-ia).
- **D2 — Actionabilité** : ✓ — **le plus fort des groupes audités** (templates, chiffres, ROI, exercices, comparatifs outillés).
- **D3 — Profondeur** : ✗ avant V1+ (0 source, 0 anti-pattern) malgré un contenu riche → gisement V1+ traité.

**Verdict** : 0 ✓ pur ; V1+ mécanique sur les 11. Pas de V2 d'exception (80/20, skills déjà denses).

---

## 3. Passe de vérification — corrections appliquées

| Sév. | Skill | Correction |
|:---:|---|---|
| **P1** | `evaluation-formation` | **Payback « 1,5 mois » faux.** Bénéfices 203 750 € = **annuels** (productivité × 45 semaines), coûts 95 000 €. Recalcul : 95 000 ÷ 203 750 × 12 ≈ **5,6 mois**. Label « MESURÉS à T+3 mois » → « BÉNÉFICES ANNUELS ESTIMÉS ». ROI 114 % et « 2,14 € » confirmés justes. *(Incident de type v3.15.0 roi-transformation.)* |
| **P1** | `formation-ia-sensibilisation` | « Investir 2 min de plus = **10× meilleure sortie** » → multiplicateur **fabriqué** → reformulé sans chiffre. |
| **P2** | `conception-parcours` | « **Règle des 3-5-10** » + « 5 jours spaced repetition » → requalifiés en **repères pratiques (non normatifs)** + ancrage effet d'espacement / Ebbinghaus 1885 (intervalles croissants J+1/J+3/J+7). |
| **P2** | 3 headers + README | **CPLP → CPTD** : l'ATD a renommé le CPLP en CPTD en 2020, donc « CPLP 2026 » est impossible. |

**Faux positifs Explore écartés** :
- Certifications **Claude 101 / Claude Code 101 / Claude Code in Action** = **réelles** (parcours Anthropic ; cohérent avec faux positif déjà écarté en v3.20.0).
- **CPTD / CPTM** = certifications réelles (ATD / Training Industry).

---

## 4. Sources de vérification (WebSearch préalable)

Bloom 1956 / révision Anderson & Krathwohl 2001 · ADDIE (FSU/US Army 1975) · Kirkpatrick (1959/1994, New World 2016) · Phillips ROI niveau 5 (1997) · Knowles andragogie (1970/1980) · Sweller CLT (1988) · Gagné 9 events (1965) · Mayer multimédia (2001) · SAM Allen & Sites (2012) · 70-20-10 McCall/Lombardo/Eichinger (années 1980, **empirique/nuancé**) · Ebbinghaus (1885).

**Neuromythes confirmés à NE PAS véhiculer** (intégrés comme anti-patterns) : « Learning Pyramid » NTL (% sans fondement), cône de Dale **chiffré** (Dale 1946 n'a jamais mis de %), « on retient 10/20/90 % de… » (Treichler 1967, faux), styles d'apprentissage **VAK/VARK** (réfutés, Pashler et al. 2008).

---

## 5. Enrichissements V1+ (11/11)

`## Sources` (datées + attribuées) · `## Anti-patterns` (3-6 bullets, dont un anti-pattern « ne pas véhiculer les neuromythes » sur les skills d'animation/conception) · `## Voir aussi` (maillage intra-formateur_ia + cross-agents `prompt_engineer`, `redacteur_ia`, `business_analyst`, `ux_design`).

**Contrôles finaux** : 0 lien orphelin · 0 client réel · 0 ID modèle obsolète · 11/11 sections présentes · plus aucune mention CPLP.

---

## 6. Suite

- Commit `feat(formateur_ia)` (Opus 4.8) → push + tag **v3.22.0** + GitHub Release **sur accord Guy**.
- **NEXT Transverse/Méta restant** : `growth_ia` (8 — AARRR/Reforge/North Star) · `veille_strategique` (6 — Gartner/Porter/Ansoff).
- **Jalon de fin de chantier planifié** : check complet des 38 `AGENT-*.md` (compteurs, tables de skills, certifs, cross-refs) une fois tout le contenu des skills stabilisé.
