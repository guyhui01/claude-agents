# Skill — Analyse Coût/Bénéfice et TCO
> Certifications : CFA Level I (CFA Institute), CMA (IMA), PMI-PBA (PMI), FRM (GARP)

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
