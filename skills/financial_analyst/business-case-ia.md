# Skill — Business Case Projets IA et Transformation Digitale
> Certifications : CFA Level I (CFA Institute), PMI-PBA (PMI), PMP (PMI), SAFe LPM (Scaled Agile)
> Agent : AGENT-FINANCIAL-ANALYST.md
> Référentiels : **NPV/VAN · ROI · Payback** (Brealey, Myers & Allen — *Principles of Corporate Finance*) · **PMI Business Case** · analyse de scénarios (sensibilité)

## Objectif
Construire un business case complet pour un projet IA ou de transformation digitale — quantification des bénéfices, estimation des coûts, analyse ROI, scénarios — pour obtenir l'arbitrage budgétaire des décideurs.

## Template Business Case Complet

### 1. Résumé Exécutif (1/2 page)

```
PROJET : [NOM] | SPONSOR : [NOM] | DATE : [DATE]
BUDGET DEMANDÉ : [X €] | ROI ESTIMÉ : [X%] | PAYBACK : [X mois]

RECOMMANDATION : [GO / NO GO / À AFFINER]
Justification : [2 phrases maximum]
```

### 2. Problème et Opportunité

```
ÉTAT ACTUEL (AS-IS)
────────────────────────────────────────────────────────────
Processus concerné    : [ex. Traitement des dossiers candidats RH]
Volume               : [ex. 15 000 dossiers / an]
Temps moyen          : [ex. 45 min / dossier]
Coût actuel          : [ex. 45 min × 15 000 × 60 € / h = 675 000 € / an]
Taux d'erreur        : [ex. 12% de rejets tardifs évitables]

ÉTAT CIBLE (TO-BE)
────────────────────────────────────────────────────────────
Processus amélioré   : [ex. Scoring IA + validation RH]
Temps moyen cible    : [ex. 15 min / dossier]
Gain temps estimé    : [ex. 30 min × 15 000 × 60 € / h = 450 000 € / an]
Amélioration qualité : [ex. Taux rejet → 4%]
```

### 3. Analyse Coûts / Bénéfices

```yaml
analyse_financiere:
  horizon: 3  # années
  
  couts:
    investissement_initial:
      developpement: 180_000
      infrastructure_cloud: 25_000
      formation_equipes: 15_000
      conduite_changement: 20_000
      total_capex: 240_000
      
    couts_recurrents_annuels:
      maintenance_evolution: 30_000
      infrastructure_cloud: 18_000
      support_utilisateurs: 12_000
      total_opex: 60_000
      
  benefices_annuels:
    gains_productivite: 450_000    # 30 min gagnées × 15K dossiers
    reduction_erreurs: 45_000      # Rejets tardifs évités
    reduction_formation_externe: 25_000
    total_benefices: 520_000
    
  resultats:
    cout_total_3ans: 420_000       # 240K + 3×60K
    benefices_total_3ans: 1_560_000 # 3×520K
    benefice_net_3ans: 1_140_000
    roi_3ans: "271%"
    payback_period: "5.5 mois"
    van_taux_10pct: 875_000
```

### 4. Analyse de risques

| Risque | Probabilité | Impact | Mitigation | Impact sur ROI |
|---|---|---|---|---|
| Adoption < 70% | Moyenne | Élevé | Plan change management | ROI → 180% |
| Délai AIPD CNIL | Haute | Moyen | Lancer AIPD J-60 | Payback → 8 mois |
| Performance modèle < 85% | Faible | Élevé | Pilote Sprint 1-2 | Arrêt si < seuil |

### 5. Scénarios

| Scénario | Hypothèse | ROI 3 ans | Payback |
|---|---|---|---|
| Optimiste | Adoption 90%, gains +20% | 340% | 4 mois |
| Réaliste | Adoption 75%, gains nominaux | 271% | 5.5 mois |
| Pessimiste | Adoption 50%, gains -30% | 120% | 11 mois |

## Livrables
- Business case complet (document Word / PowerPoint)
- Modèle financier Excel (coûts, bénéfices, scénarios)
- Résumé exécutif 1 page
- Présentation CODIR

## Format de sortie
Précise : projet IA concerné, données de volumétrie disponibles, coûts RH, budget indicatif, horizon d'analyse (2-3-5 ans).

## Anti-patterns
- ❌ **Business case sans hypothèses explicites** : des chiffres « tombés du ciel », non challengeables
- ❌ **ROI brut sans actualisation** : sur 3 ans, présenter aussi la VAN (cf. `cost-benefit-analysis.md`)
- ❌ **Un seul scénario** : toujours optimiste / réaliste / pessimiste (analyse de sensibilité)
- ❌ **Bénéfices intangibles gonflés** sans méthode de valorisation
- ❌ **Oublier le coût de conduite du changement** (souvent 15-20% du total)
- ❌ **Pas de critère d'arrêt** : prévoir le « kill » si le pilote n'atteint pas le seuil

## Sources
- **Brealey R., Myers S., Allen F.** — *Principles of Corporate Finance* (McGraw-Hill) — NPV, ROI, Payback
- **PMI** — *Business Case* (PMBOK 7 / Business Analysis)
- **Forrester** — *Total Economic Impact (TEI)* — cadre de valorisation bénéfices/risques

## Voir aussi
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — VAN/TRI et TCO (build/buy/cloud)
- [`roi-transformation.md`](roi-transformation.md) — calcul ROI détaillé + intangibles
- [`budget-projet.md`](budget-projet.md) — budget opérationnel issu du business case
- [`../consultant_ia/estimation-roi-rapide.md`](../consultant_ia/estimation-roi-rapide.md) — version rapide (cadrage)
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — alignement valeur produit
