# Skill — Analyse Coût/Bénéfice et TCO
> Certifications : CFA Level I (CFA Institute), CMA (IMA), PMI-PBA (PMI), FRM (GARP)
> Agent : AGENT-FINANCIAL-ANALYST.md
> Référentiels : **TCO** (Gartner) · **NPV/VAN & IRR/TRI** (Brealey, Myers & Allen — *Principles of Corporate Finance*) · **DCF** (flux actualisés) · comparaison Build/Buy/Cloud

## Objectif
Réaliser une analyse coût/bénéfice complète et calculer le TCO (Total Cost of Ownership) d'une solution IT/IA — comparaison build vs buy vs cloud, analyse sur 3-5 ans — pour guider les décisions d'investissement.

## TCO — Build vs Buy vs Cloud

```yaml
tco_comparison:
  solution: "Plateforme IA RH"
  horizon_ans: 3
  
  option_build:
    description: "Développement sur mesure"
    investissement_initial:
      dev_equipe_interne: 200_000
      architecture: 40_000
      total: 240_000
    couts_annuels:
      maintenance: 45_000
      infrastructure: 25_000
      evolution: 30_000
      total: 100_000
    tco_3ans: 540_000
    avantages: ["Contrôle total", "Différenciation", "Données en interne"]
    risques: ["Délai > 12 mois", "Dépendance équipe", "Coût réel souvent × 1.5"]
    
  option_buy:
    description: "Solution éditeur (SaaS)"
    investissement_initial:
      implementation: 30_000
      formation: 15_000
      total: 45_000
    couts_annuels:
      licence: 80_000
      support: 12_000
      total: 92_000
    tco_3ans: 321_000
    avantages: ["Time-to-market 3 mois", "Mises à jour incluses", "Support éditeur"]
    risques: ["Dépendance éditeur", "Moins de personnalisation", "Coût licence croissant"]
    
  option_cloud_native:
    description: "API LLM (Anthropic/OpenAI) + dev léger"
    investissement_initial:
      dev_integration: 60_000
      formation: 10_000
      total: 70_000
    couts_annuels:
      api_usage: 36_000  # volume-based
      maintenance: 20_000
      total: 56_000
    tco_3ans: 238_000
    avantages: ["Flexibilité maximale", "Coût proportionnel à l'usage", "Innovation continue"]
    risques: ["Dépendance provider IA", "Coûts variables", "RGPD à gérer"]
    
  recommandation: "Option Cloud Native — TCO le plus faible + flexibilité"
```

## Analyse coût/bénéfice — NPV/VAN

```python
def calculer_van(
    flux_nets_annuels: list,  # [an1, an2, an3, ...]
    investissement_initial: float,
    taux_actualisation: float = 0.10  # 10% standard
) -> float:
    
    van = -investissement_initial
    for annee, flux in enumerate(flux_nets_annuels, 1):
        van += flux / (1 + taux_actualisation) ** annee
    return round(van)

# EXEMPLE — Option Cloud Native
flux = [520_000 - 56_000, 520_000 - 56_000, 520_000 - 56_000]  # bénéfices - OPEX
van = calculer_van(flux, investissement_initial=70_000, taux_actualisation=0.10)
# VAN = 975 000 € → Investissement très attractif
```

## TRI / IRR — taux de rentabilité interne

Le **TRI (Taux de Rentabilité Interne / IRR)** est le taux d'actualisation qui annule la VAN.
Règle de décision : **investir si TRI > coût du capital (WACC)**.

```python
# Sans dépendance : recherche par bisection. (En pratique : numpy_financial.irr)
def calculer_tri(flux_nets_annuels: list, investissement_initial: float) -> float:
    def van(taux):
        v = -investissement_initial
        for annee, flux in enumerate(flux_nets_annuels, 1):
            v += flux / (1 + taux) ** annee
        return v
    bas, haut = 0.0, 1.0          # 0% à 100%
    for _ in range(100):          # bisection
        mid = (bas + haut) / 2
        if van(mid) > 0: bas = mid
        else:            haut = mid
    return round(mid * 100, 1)

# EXEMPLE — Option Cloud Native (flux ci-dessus)
tri = calculer_tri(flux, investissement_initial=70_000)
# TRI très élevé (flux annuels >> investissement) → bien au-dessus d'un WACC ~10%
```
> Limite : le TRI suppose un réinvestissement des flux au taux du TRI (optimiste). Pour des flux non conventionnels (signes multiples), préférer la **VAN** ou le **TRI modifié (MIRR)**.

## Tableau comparatif de décision

| Critère | Build | Buy | Cloud Native |
|---|---|---|---|
| TCO 3 ans | 540 000 € | 321 000 € | 238 000 € |
| Time-to-market | 12-18 mois | 3-4 mois | 4-6 mois |
| Flexibilité | ●●● | ●○○ | ●●● |
| Risque technique | ●●● | ●○○ | ●●○ |
| Conformité RGPD | ●●● | ●●○ | ●●○ |
| **Score global** | **6/10** | **7/10** | **9/10** |

## Livrables
- Analyse TCO sur 3-5 ans (3 options)
- Calcul VAN / TRI par option
- Tableau de décision multicritères
- Recommandation documentée avec justification

## Format de sortie
Précise : options à comparer (build/buy/cloud), horizon d'analyse, taux d'actualisation, contraintes RGPD/sécurité.

## Anti-patterns
- ❌ **TCO sans coûts cachés** : oublier formation, conduite du changement, dette technique, sortie/réversibilité
- ❌ **Comparer des options sur des horizons différents** : toujours le même horizon + même taux
- ❌ **VAN sans justifier le taux d'actualisation** : le taux = coût du capital (WACC), à expliciter
- ❌ **Ignorer le TRI / le coût du capital** : une VAN positive à 10% peut être négative à 15%
- ❌ **« Build » sous-estimé** : le coût réel d'un développement interne est souvent × 1,5
- ❌ **TCO = uniquement le prix de licence** : intégrer exploitation, support, montée de version

## Sources
- **Gartner** — *Total Cost of Ownership (TCO)* — concept créé par Bill Kirwin (Gartner, 1987), méthodologie de référence du secteur
- **Brealey R., Myers S., Allen F. & Edmans A.** — *Principles of Corporate Finance*, McGraw-Hill, 14e éd. (2022) — NPV, IRR, DCF
- **WACC** — coût moyen pondéré du capital (taux d'actualisation)

## Voir aussi
- [`business-case-ia.md`](business-case-ia.md) — business case mobilisant VAN/TRI
- [`roi-transformation.md`](roi-transformation.md) — ROI et payback
- [`budget-projet.md`](budget-projet.md) — TCO → budget opérationnel
- [`../consultant_ia/cadrage-poc-ia.md`](../consultant_ia/cadrage-poc-ia.md) — décision build/buy/cloud en cadrage
- [`../juridique_ia/contrats-ia.md`](../juridique_ia/contrats-ia.md) — réversibilité et coûts de sortie (SaaS)
