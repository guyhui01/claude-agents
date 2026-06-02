# Audit qualité — Groupe `veille_strategique` (6 skills)

> **Date** : 2026-06-02 · **Modèle** : Claude Opus 4.8 · **Grille** : v2.8 §3.5 Transverse/Méta — sous-domaine **Engagement/Croissance (Growth + Veille)**
> **Méthode** : Explore (extraction factuelle 6 skills) → cotation D1/D2/D3 → passe de vérification (WebSearch préalable 7 requêtes) → recommandation V1+
> **Agent** : `AGENT-VEILLE-STRATEGIQUE.md` · **DERNIER groupe Transverse/Méta du chantier**

---

## 1. Synthèse exécutive

Groupe **mince et fortement personnalisé** (6 skills, 63-108 L) au profil typique « riche non sourcé » : contenu actionnable (radars, matrices, templates de diffusion) mais **0/6 Sources · 0/6 Anti-patterns · 0/6 Voir aussi** à l'entrée, et surtout **les frameworks canoniques du sous-domaine sont largement ABSENTS** (Porter, Ansoff, Gartner Hype Cycle, McKinsey Three Horizons, Wardley) alors que la grille §3.5 les attend explicitement sur ces skills.

La passe de vérification révèle le pattern récurrent du chantier (incidents v3.15.0 / v3.18.1 / v3.23.0) : **chiffres fabriqués**, dont **1 attribué à une source nommée** (« +45 %/an Gartner 2026 ») → **P0**, et un **tableau de benchmark LLM aux versions anachroniques + scores/pricing inventés**.

**Cotation : 0 ✓ · 1 P0 · 4 P1 · 1 P2.**

| Skill | L | D1 Conf. | D2 Action. | D3 Prof. | Verdict |
|---|:--:|:--:|:--:|:--:|:--:|
| `analyse-tendances` | 88 | ⚠ | ⚠ | ✗ | **P0** |
| `veille-concurrentielle` | 64 | ✗ | ⚠ | ✗ | **P1** |
| `benchmark-outils-ia` | 72 | ⚠ | ⚠ | ✗ | **P1** |
| `veille-ia-llm` | 88 | ⚠ | ✓ | ✗ | **P1** |
| `detection-signaux-faibles` | 85 | ✗ | ✓ | ✗ | **P1** |
| `synthese-periodique` | 108 | ⚠ | ✓ | ⚠ | **P2** |

---

## 2. Méthode & vérifications factuelles (WebSearch préalable)

7 requêtes WebSearch avant toute production (règle `feedback_verification_factuelle`) :

| Référentiel | Vérdict WebSearch | Datation retenue |
|---|---|---|
| Gartner Hype Cycle | ✅ Confirmé — Jackie Fenn, note « When to Leap on the Hype Cycle » | **1995** |
| Porter Five Forces | ✅ « How Competitive Forces Shape Strategy », HBR vol. 57 mars-avr., prix McKinsey 1979 | **1979** |
| Ansoff weak signals | ✅ « Managing Strategic Surprise by Response to Weak Signals », *California Management Review* | **1975** |
| McKinsey Three Horizons | ✅ *The Alchemy of Growth*, Baghai / Coley / White | **1999** |
| Wardley Maps | ✅ Créé par Simon Wardley chez Fotango, licence CC BY-SA | **2005** |
| HuggingFace Open LLM Leaderboard | ⚠ **Archivé (juin 2024)**, plus de soumissions — remplacé (LMArena, etc.) | archivé |
| Certifications SCIP / « CIA » | 🚩 SCIP = **Strategic Consortium of Intelligence Professionals** (≠ « & Competitive ») ; credential réel = **SIC** ; **« CIA — Certified Intelligence Analyst » introuvable chez SCIP** | corrigé |
| Gartner GenAI 2026 (contrôle) | 🚩 Réel : dépenses **GenAI +76,4 % en 2025** (644 Md$), **modèles +80,8 % en 2026**, **IA globale +47 % en 2026** — ≠ « +45 %/an GenAI » | requalifié |
| Versions modèles (contrôle) | 🚩 Gemini 1.5 Pro = **fév. 2024**, Llama 3.1 405B = **juil. 2024**, GPT-4o mini = **juil. 2024** — étiquetés « 2026 » dans le skill | corrigé |

---

## 3. Findings détaillés

### 🔴 P0 — `analyse-tendances` : statistique fabriquée attribuée à Gartner
- **L19** : « Marché GenAI entreprise : **+45 % / an (Gartner 2026)** » — chiffre non conforme aux publications Gartner (GenAI +76,4 % 2025 / +80,8 % modèles 2026 ; IA globale +47 % 2026). Pattern identique aux incidents « 87 % » (v3.20.0) et « Greenhouse 2024 » (v3.19.0).
- **L34** : « Coûts API en baisse constante (**−60 % en 2 ans**) » — non sourcé, non vérifiable.
- **Correction** : requalifier avec chiffre Gartner réel daté + neutraliser le −60 % (ordre de grandeur, renvoi pricing officiels).

### 🟠 P1
1. **`veille-ia-llm` + `benchmark-outils-ia` — versions modèles anachroniques** : Gemini 1.5 Pro / Llama 3.1 405B / GPT-4o mini (modèles **2024**) étiquetés « 2026-02/03/04 ». Table vouée à pourrir. → politique catalogue v3.18.1 + `feedback_modeles_claude` : cadrage par **tier**, ancrage sur versions Anthropic à jour (Opus 4.8 / Sonnet 4.6 / Haiku 4.5), dates en placeholders « à actualiser », renvoi **leaderboards publics** (LMArena ; Open LLM Leaderboard **archivé juin 2024**).
2. **`benchmark-outils-ia` — pricing/scores fabriqués** : 3 $/5 $/3,5 $/4 $ par MTok + **scores 4,5÷5 / 4,0÷5 / 3,8÷5** subjectifs inventés. → conserver la grille 6 critères pondérés (saine) ; neutraliser les valeurs (renvoi pages pricing officielles + leaderboards) ; retirer les scores globaux fixes.
3. **`veille-concurrentielle` — Porter ABSENT + TJM fabriqués** : framework cœur du skill manquant ; TJM 1800-2500/1400-1800/800-1200 €/j non sourcés. → ajouter **Porter Five Forces (HBR 1979)** + SWOT/PESTEL ; TJM en fourchettes indicatives « à actualiser (baromètres Free-Work / Malt / Numeum) ».
4. **`detection-signaux-faibles` — Ansoff ABSENT + « +40 % » fabriqué** : la « Méthode SCIP » n'attribue pas le concept fondateur ; « offres LinkedIn PO IA +40 % » inventé. → ajouter **Ansoff weak signals (1975)** ; neutraliser le +40 % (qualitatif).
5. **Certifications erronées (README + 3 headers)** : « SCIP CI (SCIP) » imprécis ; **« CIA (SCIP) » faux**. → SCIP = « Strategic Consortium of Intelligence Professionals », credential réel **SIC** ; retirer « CIA ».

### 🟡 P2
- **`synthese-periodique`** : aucun framework de structuration → ajouter **Pyramide de Minto (1987)** (SCQA / message-clé) + Sources/Anti-patterns/Voir aussi.
- **README** : HF Open LLM Leaderboard archivé → noter + pointer leaderboards actifs.

---

## 4. Enrichissement V1+ appliqué (6/6)

- **`## Sources` datées (6/6)** : Gartner Hype Cycle 1995 · McKinsey 3 Horizons 1999 · Wardley Maps 2005 (CC BY-SA) → `analyse-tendances` ; Porter 1979 → `veille-concurrentielle` ; Ansoff 1975 → `detection-signaux-faibles` ; Minto 1987 → `synthese-periodique` ; SCIP / PESTEL / SWOT / leaderboards → partout.
- **`## Anti-patterns` (6/6)** : créés (ex : confondre signal faible et bruit, benchmark sans date/source, table de modèles non actualisée, veille sans recommandation actionnable).
- **`## Voir aussi` (6/6)** : maillage intra-dossier + cross-agents `growth_ia`, `consultant_ia`, `juridique_ia/veille-reglementaire`, `redacteur_ia`.

---

## 5. Anonymisation & cohérence

- ✅ **Aucun client réel** cité (Orange/CA/CHANEL/Accor/EDF/MBDA absents). « CAC40 » employé comme **segment** (conforme `feedback_anonymisation_clients`).
- ℹ️ Mentions « Guy HUIBONHOA » présentes dans les corps de skills (profil d'activation) — conservées (décision 2026-05-30) ; seules les valeurs chiffrées fabriquées associées sont neutralisées.
- ✅ Versions Anthropic alignées (Opus 4.8 / Sonnet 4.6 / Haiku 4.5).

---

## 6. Plan d'action / Release

- V1+ sur les 6 skills + corrections P0/P1/P2 + README → **release v3.24.0** (minor : enrichissement majeur d'un groupe).
- Commit + tag annoté (modèle Opus 4.8 mentionné) + push **sur accord Guy** + GitHub Release.
- **🔲 Clôture chantier** : après v3.24.0, **jalon de fin de chantier** = check des 38 `AGENT-*.md` (compteurs, certifs, cross-refs, anonymisation).

## 7. Validation Guy

- [x] Plan d'audit validé (WebSearch d'abord, 1 lot Explore)
- [x] Cotation validée (0 ✓ · 1 P0 · 4 P1 · 1 P2)
- [ ] V1+ appliqués → relecture
- [ ] Push v3.24.0
