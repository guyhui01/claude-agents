# Skill — Scoring et Priorisation des Investissements
> Certifications : SAFe LPM (Scaled Agile), CFA Level I (CFA Institute), PMI-PBA (PMI), FRM (GARP)

## Objectif
Scorer et prioriser un portefeuille d'investissements IT/IA — grilles multicritères, WSJF portfolio, scoring risque/valeur — pour allouer les budgets aux projets à plus fort impact stratégique.

## Grille de scoring multicritères — Template

| Critère | Poids | Projet A | Projet B | Projet C |
|---|---|---|---|---|
| Alignement stratégique | 25% | 9 | 6 | 8 |
| ROI estimé (3 ans) | 25% | 8 | 9 | 5 |
| Faisabilité technique | 20% | 7 | 8 | 9 |
| Time-to-Value | 15% | 6 | 9 | 7 |
| Niveau de risque (inv.) | 15% | 7 | 6 | 8 |
| **Score pondéré** | | **7.5** | **7.6** | **7.3** |
| **Rang** | | **2** | **1** | **3** |

## WSJF Portfolio — Niveau Epic

```yaml
wsjf_portfolio:
  periode: "PI-12 à PI-14"
  budget_disponible: 500_000
  
  # Cotation relative, plus petit = 1 par colonne, Fibonacci (cf. skills/safe/wsjf.md)
  # size = taille relative ; durée en jours et budget suivis dans la grille multicritères
  epics:
    - id: "EPIC-01"
      titre: "Module Formation IA"
      bv: 3
      tc: 1
      rr_oe: 1
      size: 3
      cod: 5
      wsjf: 1.7
      rang: 3
      
    - id: "EPIC-02"
      titre: "Scoring CV IA"
      bv: 5
      tc: 5
      rr_oe: 3
      size: 1
      cod: 13
      wsjf: 13.0
      rang: 1
      budget_estime: 150_000
      
    - id: "EPIC-03"
      titre: "Intégration SIRH"
      bv: 1
      tc: 3
      rr_oe: 2
      size: 2
      cod: 6
      wsjf: 3.0
      rang: 2
      budget_estime: 180_000
      
  sequence_recommandee: ["EPIC-02", "EPIC-03", "EPIC-01"]
  budget_phases_1_2: 330_000  # Dans l'enveloppe
```

## Matrice Risque / Valeur

```
                    VALEUR ÉLEVÉE
                         │
  QUICK WIN             │    PROJET STRATÉGIQUE
  (Faire rapidement)    │    (Investir prioritairement)
  Risque faible,        │    Risque élevé, valeur élevée
  valeur élevée         │
────────────────────────┼────────────────────────────────
  Risque FAIBLE         │    Risque ÉLEVÉ
────────────────────────┼────────────────────────────────
  REMPLISSAGE           │    ÉVITER
  (Faire si capacité)   │    (Reporter ou ne pas faire)
  Risque faible,        │    Risque élevé,
  valeur faible         │    valeur faible
                         │
                    VALEUR FAIBLE
```

## Livrables
- Grille de scoring multicritères complète
- WSJF portfolio documenté
- Matrice Risque / Valeur
- Recommandation de priorisation motivée

## Format de sortie
Précise : liste des projets / epics à scorer, critères de décision stratégiques, budget disponible, contraintes de capacité.
