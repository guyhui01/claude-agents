# Audit qualité — Cluster Delivery Mission (CONSULTANT-IA + CHEF-PROJET-IA + FINANCIAL-ANALYST) — grille v2.8 §3.2

> Date : 2026-05-31 · Modèle : Claude Opus 4.8 · Auditeur : AGENT-AUDIT-METHODO-IA (`audit-qualite-catalogue.md`)
> Périmètre : 21 skills N1/N2 (hors `consultant_ia/diagnostic-maturite-ia` + `benchmark-solutions-ia`, déjà V2 v3.8.0/v3.9.0)
> Méthode : 3 sous-agents Explore en parallèle (1 par agent-dossier) → cotation expert §3.2

---

## 1. Synthèse

**Verdict : 0 ✓ · ~2 P2 · ~19 P1 — mais le cluster se scinde nettement en DEUX profils**, ce qui change radicalement la stratégie de correction :

| Profil | Agents | Caractéristique | Type de fix |
|---|---|---|---|
| 🟢 **Riche mais non sourcé** | **CHEF-PROJET-IA** (8) + **FINANCIAL-ANALYST** (6) = 14 skills | Skills **longs, denses, excellents** (code Python EVM/WSJF/RAID/ADKAR, formules correctes, exemples chiffrés récurrents « Scoring Conversion IA »). Seul manque : D3 (0 Sources, 0 Anti-patterns, 0 cross-links) + référentiels non versionnés | **P1 MÉCANIQUE → V1+ batch** (rapide) |
| 🔴 **Mince** | **CONSULTANT-IA** (7) | Skills **courts (51-76 L)**, génériques, frameworks à peine nommés (McKinsey Pyramid/PROSCI ADKAR sans dates), chiffres non sourcés (ROI 2026, TJM 2026, durées) | **P1 SUBSTANTIEL → V2 profonde** |

**Constat transverse (comme JURIDIQUE)** : **0/21** ont section `## Sources` ou `## Voir aussi` ; **21/21** ont une certif déclarée (0 bug mécanique d'en-tête).

**Bonne nouvelle** : CHEF-PROJET-IA + FINANCIAL-ANALYST sont **substantiellement excellents** — un simple passage V1+ (ajout Sources/Anti-patterns/cross-links + versionnage référentiels) devrait les faire monter à ✓/P3 rapidement. L'effort lourd (V2) ne concerne que les 7 skills CONSULTANT-IA, qui sont précisément les plus stratégiques pour le pitch (cadrage, roadmap, proposition commerciale, ROI, présentation exécutive).

## 2. Méthode
- Groupe Conseil/Direction → grille §3.2. Référentiels attendus : PMBOK 7, PRINCE2, EVM ANSI/EIA-748, ISO 31000:2018, PfMP, McKinsey 7S/3 Horizons, Porter, Minto 1987, NPV/IRR/TCO Gartner, PROSCI ADKAR, AI Act.
- Extraction factuelle déléguée à 3 Explore parallèles (méthode standard, non dégradée).

## 3. Tableaux de cotation

### CONSULTANT-IA (7) — profil mince
| Skill | L | D1 | D2 | D3 | Verdict |
|---|:--:|:--:|:--:|:--:|:--:|
| `cadrage-poc-ia` | 76 | ⚠ | ⚠ | ✗ | **P1** |
| `estimation-roi-rapide` | 62 | ⚠ | ✓ | ✗ | **P1** |
| `feuille-route-ia` | 52 | ⚠ | ⚠ | ✗ | **P1** |
| `presentation-executif` | 54 | ⚠ | ✓ | ✗ | **P1** |
| `proposition-commerciale` | 56 | ⚠ | ✓ | ✗ | **P1** |
| `transformation-digitale` | 70 | ⚠ | ✓ | ⚠ | **P2** |
| `offre-mission` | 66 | N/A | ✓ | ✗ | **P1** ⚠ (outil perso, cf. §5) |

### CHEF-PROJET-IA (8) — profil riche / non sourcé
| Skill | L | D1 | D2 | D3 | Verdict |
|---|:--:|:--:|:--:|:--:|:--:|
| `cadrage-projet-ia` | 153 | ✓ | ✓ | ✗ | **P1** méca |
| `evm-valeur-acquise` | 192 | ✓ | ✓ | ✗ | **P1** méca |
| `gestion-risques-projet` | 241 | ✓ | ✓ | ✗ | **P1** méca |
| `gouvernance-portefeuille` | 207 | ✓ | ✓ | ✗ | **P1** méca |
| `planification-hybride` | 188 | ✓ | ✓ | ✗ | **P1** méca |
| `post-mortem-rex` | 226 | ✓ | ✓ | ✗ | **P1** méca |
| `reporting-codir` | 126 | ✓ | ✓ | ✗ | **P1** méca |
| `stakeholder-management` | 186 | ✓ | ✓ | ✗ | **P1** méca |

### FINANCIAL-ANALYST (6) — profil riche / non sourcé
| Skill | L | D1 | D2 | D3 | Verdict |
|---|:--:|:--:|:--:|:--:|:--:|
| `budget-projet` | 91 | ⚠ | ✓ | ✗ | **P1** méca |
| `business-case-ia` | 96 | ⚠ | ✓ | ✗ | **P1** méca |
| `cost-benefit-analysis` | 98 | ⚠ | ✓ | ✗ | **P1** (+ fix IRR) |
| `investment-scoring` | 92 | ✓ | ✓ | ✗ | **P1** méca |
| `reporting-financier` | 70 | ✓ | ✓ | ✗ | **P1** méca |
| `roi-transformation` | 129 | ✓ | ✓ | ✗ | **P1** méca |

## 4. Findings transverses (priorisés)

**T1 — D3 ✗ généralisé (21/21)** : ni Sources, ni Anti-patterns, ni cross-links. Pour les 14 skills CHEF-PROJET+FINANCIAL, c'est le **seul** manque → V1+ mécanique. Versionner les référentiels (PMBOK **7 (2021)**, PRINCE2 **7 (2023)**, ISO **31000:2018**, EVM **ANSI/EIA-748**, Mendelow **1991**, ADKAR PROSCI, WSJF SAFe, Storytelling with Data Knaflic **2015**).

**T2 — CONSULTANT-IA mince (7)** : frameworks à nommer/dater (McKinsey **3 Horizons** pour feuille-route, **Minto 1987** pour presentation-executif, **PROSCI ADKAR** daté pour transformation), exemples sectoriels chiffrés à ajouter.

**T3 — 🔴 Chiffres non sourcés (règle `feedback_verification_factuelle`)** : « Benchmarks ROI IA 2026 » (estimation-roi), « TJM consulting France 2026 », « durées de phases », « 4-8 semaines ». → **soit sourcer, soit reformuler en « indicatif, à calibrer »** (ne pas publier de % comme des faits).

**T4 — `cost-benefit-analysis` : IRR déclaré en en-tête mais ABSENT du contenu** → incohérence à corriger (ajouter le calcul IRR/TRI ou retirer la mention).

**T5 — `evm-valeur-acquise` : coefficient contingence `0.1` empirique non justifié** + `gestion-risques` : seuil fairness « <0.05 » non sourcé → justifier ou sourcer.

## 5. Cas particulier — `offre-mission.md` (décision Guy requise)

Ce skill est **fortement personnel** (TJM, frais plateformes Malt/Comet 2026, CV « Guy HUIBONHOA 20 ans », « grands groupes CAC40 — telecom/luxe/finance/hôtellerie »). Questions :
- **Généraliste ou outil perso ?** Le catalogue est public/généraliste (cf. `feedback_catalogue_generaliste`). Soit on le **généralise** (méthode de construction d'offre, sans TJM/plateformes datés), soit on l'**assume comme outil perso** (et on le sort du périmètre qualité).
- **« CAC40 »** : à remplacer par « grands comptes » (cf. `feedback_anonymisation_clients`).

## 6. Plan d'action recommandé

| Vague | Périmètre | Effort | ROI |
|---|---|:--:|:--:|
| **V1+ mécanique (batch)** | CHEF-PROJET-IA (8) + FINANCIAL-ANALYST (6) = 14 skills : ajout Sources + Anti-patterns + cross-links + versionnage référentiels + fix IRR/coef 0.1/fairness | ~2-3h | 🟢 **Très élevé** (14 skills → ✓/P3 rapidement, contenu déjà excellent) |
| **V2 profonde** | CONSULTANT-IA : les 5-6 skills stratégiques (cadrage-poc, feuille-route, proposition-commerciale, presentation-executif, estimation-roi) — frameworks datés + exemples sectoriels + sourcing | ~1 session | 🟡 Élevé (cœur du pitch, mais skills minces à étoffer) |
| **Décision** | `offre-mission` : généraliser ou sortir du périmètre | — | — |

**Recommandation** : commencer par le **V1+ batch (14 skills CHEF-PROJET + FINANCIAL)** — ratio ROI/effort imbattable (ils sont déjà denses, il manque juste la couche D3). Puis V2 sur les CONSULTANT minces.

## 7. Validation Guy
- [ ] Verdicts validés / ajustés
- [ ] Périmètre arbitré : (a) V1+ batch 14 d'abord · (b) V2 consultant d'abord · (c) tout
- [ ] Décision `offre-mission` (généraliser / sortir)
