# Skill — Reporting Financier CODIR
> Certifications : CMA (IMA), DSCG (France), PMP (PMI), SAFe LPM (Scaled Agile)

## Objectif
Produire un reporting financier synthétique pour le CODIR / Steering Committee — état budgétaire, variance analysis, EVM, prévision fin de projet — en format 1 page décisionnel.

## Rapport Financier CODIR — Template 1 page

```
REPORTING FINANCIER — [NOM PROJET] — [MOIS/ANNÉE]
Pour : Comité de Direction | Préparé par : [NOM] | Date : [DATE]
══════════════════════════════════════════════════════════════

STATUT GLOBAL : 🟢 ON TRACK / 🟡 À SURVEILLER / 🔴 EN RISQUE

BUDGET
─────────────────────────────────────────────────────────────
Budget approuvé       : 300 000 €
Engagé à ce jour      : 245 000 € (82%)
Consommé à ce jour    : 180 500 € (60%)
Prévision fin projet  : 258 000 € → Économie 42 000 €  ✅

EVM (EARNED VALUE MANAGEMENT)
─────────────────────────────────────────────────────────────
Valeur Planifiée (PV) : 210 000 €   (budget planifié M5)
Valeur Acquise (EV)   : 198 000 €   (travail réellement fait)
Coût Réel (AC)        : 180 500 €   (dépensé réellement)

CPI (Efficience coûts) : EV/AC = 1.10 ✅  (> 1 = sous le budget)
SPI (Efficience délai) : EV/PV = 0.94 ⚠  (< 1 = léger retard)

EAC (Prévision fin)   : BAC / CPI = 272 700 € ✅

VARIANCE SIGNIFICATIVE
─────────────────────────────────────────────────────────────
Dépassement Prestataires : +8 000 € (complexité SIRH)
  Action : Forfait fixe négocié Sprint 3 — validé

PROCHAINE DÉCISION
─────────────────────────────────────────────────────────────
Budget additionnel tests UAT (15 000 €) — Arbitrage demandé
Recommandation : Financer sur économies constatées (42 000 €)
```

## EVM — Formules clés

```python
# Earned Value Management
def calcul_evm(PV, EV, AC, BAC):
    CPI = EV / AC          # Cost Performance Index (> 1 = bon)
    SPI = EV / PV          # Schedule Performance Index (> 1 = en avance)
    CV  = EV - AC          # Cost Variance (positif = sous budget)
    SV  = EV - PV          # Schedule Variance (positif = en avance)
    EAC = BAC / CPI        # Estimate At Completion
    ETC = EAC - AC         # Estimate To Complete
    VAC = BAC - EAC        # Variance At Completion
    
    return { "CPI": round(CPI, 2), "SPI": round(SPI, 2),
             "CV": round(CV), "SV": round(SV),
             "EAC": round(EAC), "ETC": round(ETC), "VAC": round(VAC) }
```

## Livrables
- Rapport financier CODIR 1 page
- Calcul EVM (CPI, SPI, EAC)
- Variance analysis documentée
- Recommandations d'arbitrage

## Format de sortie
Précise : budget approuvé, consommé à date, valeur acquise (EV), avancement physique du projet, décisions en attente.
