# Audit qualité — Agent REDACTEUR-IA (16 skills)

> **Date** : 2026-06-01 · **Modèle** : Claude Opus 4.8 · **Méthode** : v2.8, grille §3.5 (Transverse/Méta — sous-domaine UX/Contenu)
> **Auditeur** : méta-agent audit (extraction déléguée à 4 sous-agents Explore en parallèle) · **Passe de vérification factuelle** : 8 WebSearch préalables
> **Périmètre** : `skills/redacteur_ia/` — 16 skills (hors README)

---

## 1. Résumé exécutif

Groupe **homogène « riche non sourcé »** : contenu actionnable de bonne tenue (templates, structures, livrables concrets) mais **carence structurelle transverse** en sourçage, attribution académique et anti-patterns.

| Indicateur | Constat (16 skills) |
|---|---|
| Sources datées | **0/16** (frameworks cités sans année ni auteur) |
| Cross-links « Voir aussi » | **0/16** (catalogue totalement orphelin) |
| Sections anti-patterns explicites | **5/16** seulement |
| Exemples chiffrés présents | ~6/16 (tous fictifs/anonymisés — conformes) |
| Noms clients réels | **0** ✅ (anonymisation respectée) |
| Versions modèles Claude périmées | **0** (aucune version citée) |

**Cotation finale** : 0 ✓ pur · **1 P0 factuel** · **7 P1** · **8 P2**

---

## 2. Passe de vérification factuelle (résultats WebSearch)

| Élément audité | Skill | Verdict | Réalité vérifiée |
|---|---|---|---|
| « **87 % des projets IA échouent en production** » | presentation-pitch | 🔴 **FABRIQUÉ** | Aucune source ne donne 87 %. Gartner : *30 % des projets GenAI abandonnés après POC fin 2025* ; *85 % échouent par mauvaise qualité data* ; McKinsey : *~2/3 bloqués en pilote*. Type incident v3.19.0. |
| « E-E-A-T (**Google 2026**) » | seo-content | 🔴 **FAUX** | Le 2ᵉ E (Experience) ajouté par Google en **décembre 2022** (E-A-T depuis ~2014). |
| Benchmarks email (ouverture 20-25 % B2B…) | newsletter-email | ⚠️ **non sourcés + datés** | Données 2025 : ouverture 35-45 % (biais Apple MPP), clic ~2-3,4 %. Fourchettes du skill sous-estimées et sans source. |
| « 5 users suffit » | ux-writing | ⚠️ **non attribué** | Nielsen & Landauer **1993** ; popularisé par l'article NN/g **2000** (~85 % des problèmes d'utilisabilité). |
| « 95 % roadmap IA mauvais sens » | linkedin | ⚠️ exemple de hook | Présenté comme exemple illustratif → à neutraliser (« [chiffre illustratif] »). |

**Sources V1+ validées (pour publication)** : Pyramide Minto (1987) · Ogilvy *On Advertising* (1983) · Cialdini *Influence* (1984) · Tufte *Visual Display* (1983, 2ᵉ éd. 2001) · Nielsen 10 heuristiques (1994) + 5 users (Nielsen & Landauer 1993 / NN/g 2000) · WCAG 2.2 (W3C 2023) · AIDA (E. St. Elmo Lewis 1898) · SMART (Doran, *Management Review*, nov. 1981) · BLEU (Papineni et al., ACL 2002) · Campbell *Hero with a Thousand Faces* (1949) · Freytag *Die Technik des Dramas* (1863).

---

## 3. Cotation détaillée (D1 conformité · D2 actionabilité · D3 profondeur)

| # | Skill | L | D1 | D2 | D3 | Verdict | Action prioritaire |
|---|---|---:|:--:|:--:|:--:|:--:|---|
| 1 | compte-rendu-pro | 159 | ⚠ | ✓ | ⚠ | **P2** | Dater Cornell, sources, cross-links |
| 2 | content-strategy | 68 | ⚠ | ⚠ | ✗ | **P1** | E-E-A-T source + anti-patterns + sources |
| 3 | copywriting-ia | 59 | ⚠ | ⚠ | ✗ | **P1** | **Ogilvy 1983 + Cialdini 1984** + AIDA/PAS/FAB attribués + anti-patterns |
| 4 | documentation-technique | 82 | ✓ | ✓ | ⚠ | **P2** | OpenAPI/C4 datés + anti-patterns + cross-links |
| 5 | linkedin-thought-leadership | 70 | ✗ | ⚠ | ✗ | **P1** | Neutraliser « 95 % » + frameworks nommés + anti-patterns |
| 6 | newsletter-email | 66 | ⚠ | ✓ | ✗ | **P1** | **Sourcer/cadrer benchmarks** + anti-patterns |
| 7 | note-cadrage | 151 | ⚠ | ✓ | ⚠ | **P2** | **SMART = Doran 1981** + définir DACI + cross-links |
| 8 | presentation-pitch | 134 | ⚠ | ✓ | ✗ | 🔴 **P0** | **Retirer/sourcer « 87 % »** + Freytag 1863 + anti-patterns |
| 9 | prompt-engineering-redaction | 88 | ⚠ | ✓ | ⚠ | **P2** | Anthropic guide + CoT/Few-shot attribués |
| 10 | redaction-email-pro | 166 | ⚠ | ✓ | ⚠ | **P2** | Sources + cross-links |
| 11 | redaction-rapport | 131 | ⚠ | ✓ | ⚠ | **P1** | **Pyramide Minto 1987** + cross-links |
| 12 | seo-content | 72 | ✗ | ✓ | ⚠ | **P1** | **Corriger E-E-A-T → déc. 2022** + anti-patterns |
| 13 | storytelling-ia | 81 | ⚠ | ✓ | ⚠ | **P2** | **Campbell 1949** + Tufte 1983 + anti-patterns |
| 14 | synthese-executive | 149 | ⚠ | ✓ | ⚠ | **P2** | **Dater Minto 1987** + SCQA attribué |
| 15 | traduction-localisation | 73 | ⚠ | ✓ | ✗ | **P2** | **BLEU = Papineni 2002** + anti-patterns |
| 16 | ux-writing | 77 | ⚠ | ✓ | ⚠ | **P1** | **Nielsen 1993/2000 + WCAG 2.2** + anti-patterns |

---

## 4. Faux positifs Explore écartés

- « Certification *Anthropic Claude Code in Action* suspecte » (documentation-technique, prompt-engineering-redaction) → **certification réelle de Guy** (Anthropic 2026). Conservée.
- Exemples chiffrés fictifs clairement contextualisés (4,2 % churn, 2,3 M€, 4,3 jours, 47 réclamations, 47 % réduction…) → **conformes** (pédagogiques, anonymisés, datés « 2026 »). Pas de correction.

---

## 5. Plan V1+ recommandé (→ v3.20.0)

**Corrections factuelles prioritaires** (P0/P1) :
1. `presentation-pitch` : remplacer « 87 % » par chiffre sourcé (Gartner 30 % POC / McKinsey 2/3 pilote) **ou** marquer explicitement « [exemple illustratif] ».
2. `seo-content` : « Google 2026 » → « Google, décembre 2022 (E-A-T depuis 2014) ».
3. `newsletter-email` : cadrer les benchmarks en « ordres de grandeur » + source (Mailchimp/HubSpot 2025) + note biais Apple MPP.

**Enrichissement transverse V1+ sur les 16** :
- `## Sources` datées (mapping grille §3.5 ci-dessus).
- `## Anti-patterns` (3-5 bullets) sur les 11 skills qui en sont dépourvus.
- `## Voir aussi` : maillage interne (ex. presentation-pitch ↔ synthese-executive ↔ storytelling-ia ↔ note-cadrage ; copywriting ↔ seo-content ↔ newsletter ; redaction-rapport ↔ synthese-executive ↔ compte-rendu-pro) + liens cross-agents (UX-DESIGNER, PROMPT-ENGINEER).

**Hors périmètre V1+** (respect 80/20) : pas de V2 profonde — les skills sont actionnables, le gap est sourçage/factuel, pas de contenu.

---

## 6. Grille §3.5 — observations

Conforme. Mapping sources→skills déjà prévu (Minto→redaction-rapport/synthese-executive/presentation-pitch ; Ogilvy+Cialdini→copywriting ; Tufte→storytelling). Aucune correction de grille nécessaire.
