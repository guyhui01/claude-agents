# Re-vérification méta-agent — 14 skills V1+ (v3.14.0) · grille v2.8 §3.2 Conseil/Direction
> Date : 2026-06-01 · Modèle : claude-opus-4-8 · Auditeur : AGENT-AUDIT-METHODO-IA (skill `audit-qualite-catalogue.md`)
> Périmètre : CHEF-PROJET-IA (8) + FINANCIAL-ANALYST (6) — les 14 « riches non sourcés » passés en V1+ lors de v3.14.0

## 1. Synthèse (verdict global)

Re-vérification post-V1+ pour confirmer (ou non) l'hypothèse de la trace NEXT_STEPS : « les 14 V1+ devraient passer ✓/P3 ».

**Résultat : 13/14 confirmés ✓/P3 — 1 P1 réel détecté.**

- **CHEF-PROJET-IA (8/8)** : tous ✓ ou P3. Référentiels datés, formules EVM/WSJF vérifiées exactes, ≥5 livrables actionnables/skill, 6 anti-patterns/skill, certifications déclarées. Le V1+ a effectivement remonté ces skills au-dessus de la barre.
- **FINANCIAL-ANALYST (5/6)** : ✓/P3. Formules EVM (`reporting-financier`) et VAN/TRI (`cost-benefit-analysis`) vérifiées exactes ; `business-case-ia` cohérent (ROI 271 % = 1 140K/420K, payback/VAN défendables).
- **⚠ `roi-transformation.md` = P1** : l'exemple chiffré annoté et le template CODIR contredisent le propre code Python du skill (détail §4). Le pass V1+ (ajout Sources/Anti-patterns) n'a pas touché au fond du calcul — le défaut préexistait et a survécu.

Le méta-agent a donc rempli son rôle : il n'a **pas** rubber-stampé les 14 et a isolé un défaut substantiel par la preuve (recalcul), conformément à l'anti-pattern « cotation sans preuve » et au principe ISO 19011 de présentation impartiale.

## 2. Méthode

- Groupe : **Conseil/Direction**, déclinaison **§3.2** de `audit-grilles-v2.8.md` (PMBOK 7, EVM ANSI/EIA-748, NPV/IRR Brealey-Myers, TCO Gartner, COSO ERM, Minto…).
- Extraction factuelle déléguée à **2 sous-agents Explore** (un par dossier), brief standard §3.1 (pas de cotation côté Explore — séparation des rôles).
- Cotation D1/D2/D3 par l'expert principal, **chaque non-conformité adossée à une citation/recalcul** (preuve). Recalcul manuel des formules financières (les extracteurs eux-mêmes ont fait des erreurs d'arithmétique → cotation jamais déléguée).

## 3. Tableau de cotation

### CHEF-PROJET-IA (§3.2)
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| cadrage-projet-ia | ✓ | ✓ | ✓ | **✓** |
| evm-valeur-acquise | ✓ | ✓ | ✓ | **✓** (formules EVM exactes vérifiées) |
| gestion-risques-projet | ✓ | ✓ | ✓ | **✓** |
| gouvernance-portefeuille | ✓ | ✓ | ✓ | **✓** (WSJF Fibonacci correct) |
| planification-hybride | ✓ | ✓ | ⚠ | **P3** (narratif mono-cas « Scoring Conversion ») |
| post-mortem-rex | ✓ | ✓ | ✓ | **✓** |
| reporting-codir | ✓ | ✓ | ✓ | **✓** |
| stakeholder-management | ✓ | ✓ | ✓ | **✓** |

### FINANCIAL-ANALYST (§3.2)
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| budget-projet | ✓ | ✓ | ⚠ | **P3** (source EVM non datée, renvoi interne) |
| business-case-ia | ✓ | ✓ | ⚠ | **P3** (sources sans édition/année — calculs exacts) |
| cost-benefit-analysis | ✓ | ✓ | ⚠ | **P3** (VAN/TRI code correct, limites bien posées) |
| investment-scoring | ✓ | ✓ | ⚠ | **P3** (formule WSJF renvoyée à `../safe/wsjf.md`) |
| reporting-financier | ✓ | ✓ | ✓ | **✓** (formules EVM exactes vérifiées) |
| **roi-transformation** | ⚠ | **✗** | ⚠ | **P1** (exemple chiffré faux vs code — §4) |

## 4. Finding P1 (bloquant)

**`skills/financial_analyst/roi-transformation.md`**

- **Constat** : les résultats annotés du calculateur (ligne 93 : `ROI An1=87%, An2=210%, An3=334% | Payback=6.1 mois`) et le template CODIR (lignes 110-113 : investissement 233 000 €, ROI An1 87 %, ROI An3 334 %, payback 6 mois) sont **incohérents avec le propre code Python** du skill et ses inputs (lignes 82-92).

  Recalcul à partir du code (preuve) :
  - `gain_annuel_brut` = 45 × 2 × 46 × 60 × 0,80 = **198 720 €**
  - investissement_initial = 180 000 + 15 000 + 20 000 = 215 000 € · OPEX annuel = 18 000 €
  - ROI An1 = (198 720 − 233 000) / 233 000 = **−14,7 %** (annoncé : 87 %)
  - ROI An3 = (596 160 − 269 000) / 269 000 = **+121,6 %** (annoncé : 334 %)
  - Payback = 215 000 / (198 720 / 12) = **≈ 13 mois** (annoncé : 6,1 mois)

  Les chiffres annoncés impliquent un bénéfice annuel brut ≈ 430-436 K€ (pour ROI An1 87 % sur coût 233 K), soit **plus du double** de ce que produisent les inputs déclarés. L'exemple ne réconcilie ni sur le gain, ni sur le ROI, ni sur le payback.

- **Référence** : grille §3.2 D2 — « business cases chiffrés avec hypothèses explicites » ; règle `feedback_verification_factuelle` (aucun chiffre publié sans vérification). Un livrable de calcul ROI dont l'exemple de référence est faux est non actionnable : un consultant copiant ce Python devant un CODIR obtiendrait −15 %, pas +87 %.

- **Recommandation** : V1 mécanique (~15-20 min). Deux options de correction (décision de cadrage à valider — voir §10) :
  - **(a) Recalcul honnête** : conserver inputs + code, corriger le commentaire et le template CODIR aux vraies valeurs (−15 % / +122 % / ~13 mois). Inconvénient : un showcase à ROI An1 négatif est peu vendeur.
  - **(b) Re-scope des inputs** : ajuster les hypothèses (effectif et/ou heures gagnées) pour produire un cas positif **cohérent** (ex. gain ≈ 430 K€/an) et recalculer commentaire + CODIR en conséquence. Préserve l'intention narrative tout en rétablissant l'exactitude.

## 5. Findings P2

Aucun P2 bloquant. Piste transverse (P2 cross-agents, Phase 3) : **dater les sources financières** (Brealey-Myers-Allen → préciser l'édition/année ; Forrester TEI ; Gartner TCO) — actuellement implicites, ce qui plafonne D3 à ⚠ sur 4 skills FINANCIAL.

## 6. Findings P3

- `planification-hybride`, `budget-projet`, `business-case-ia`, `cost-benefit-analysis`, `investment-scoring` : ⚠ D3 mineur (sources non datées ou narratif mono-cas). Cosmétique, non prioritaire.

## 7. Constats transversaux

- **CHEF-PROJET-IA** : qualité homogène et élevée (formules EVM/WSJF exactes, 14 templates code/YAML, anti-patterns systématiques). Le V1+ a été efficace.
- **FINANCIAL-ANALYST** : socle conforme, mais **risque récurrent sur les exemples chiffrés annotés** (résultats hardcodés en commentaire/template au lieu d'être produits par exécution). `roi-transformation` est le cas avéré ; les autres ont été recalculés et tiennent. Recommandation méthode : pour tout skill à calcul, l'exemple annoté doit être issu d'une exécution réelle, pas saisi à la main.
- **Sources financières non datées** : pattern à corriger en bundle Phase 3.

## 8. Métriques de synthèse

- Distribution (14 skills) : **✓ = 7 (50 %)** · **P3 = 6 (43 %)** · **P1 = 1 (7 %)** · P0 = 0.
- % sans certification déclarée : **0 %** (14/14 déclarent).
- % avec ≥1 anti-pattern explicite : **100 %**.
- % avec ≥1 source externe : **100 %** (datation partielle côté FINANCIAL).
- Formules vérifiées par recalcul : EVM (×2) exactes · VAN/TRI exactes · ROI (`roi-transformation`) **fausses dans l'exemple**.

## 9. Plan d'action recommandé

| Priorité | Action | Vague | Budget |
|---|---|:---:|---|
| **P1** | Corriger `roi-transformation.md` (option a ou b §4) | V1 | ~15-20 min |
| P2 | Dater sources financières (4 skills) | V3 bundle | lot Phase 3 |
| P3 | Diversifier narratif `planification-hybride` | V4 | optionnel |

Après correction du P1 → les 14 V1+ seront tous ✓/P3 → cluster delivery (CONSULTANT-IA + CHEF-PROJET-IA + FINANCIAL-ANALYST) **entièrement validé**. Candidat tag **v3.15.0**.

## 10. Validation Guy

- [ ] Verdict P1 `roi-transformation` validé ?
- [ ] Option de correction retenue : **(a) recalcul honnête** ou **(b) re-scope inputs cohérent** ?
- [ ] Datation des sources financières → bundle Phase 3 (différé) : OK ?
