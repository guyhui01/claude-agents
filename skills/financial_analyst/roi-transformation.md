# Skill — Calcul ROI Transformation Digitale et IA
> Certifications : CFA Level I (CFA Institute), CMA (IMA), SAFe LPM (Scaled Agile), PMP (PMI)
> Agent : AGENT-FINANCIAL-ANALYST.md
> Référentiels : **ROI · Payback** (Brealey, Myers & Allen) · **Forrester TEI** (Total Economic Impact — valorisation tangibles/intangibles) · **Time-to-Value** · couplage VAN (cf. cost-benefit-analysis)

## Objectif
Calculer et présenter le ROI d'une transformation digitale ou IA — méthodologie, quantification des gains tangibles et intangibles, Time-to-Value, comparaison de scénarios — pour arbitrer les investissements.

## Méthodologie ROI — Framework

```
ROI = (Bénéfices nets / Coûts totaux) × 100

Bénéfices nets = Bénéfices totaux − Coûts totaux

TYPES DE BÉNÉFICES
────────────────────────────────────────────────────────────
Tangibles (quantifiables)
  ✓ Gains de productivité (temps × coût horaire)
  ✓ Réduction coûts opérationnels
  ✓ Réduction erreurs et reprises
  ✓ Augmentation revenus (si applicable)
  ✓ Réduction coûts de recrutement / turnover

Intangibles (à valoriser)
  ✓ Satisfaction collaborateurs (CSAT → retention)
  ✓ Amélioration image employeur
  ✓ Conformité réglementaire (évitement d'amendes)
  ✓ Avantage concurrentiel (time-to-market)
```

## Calcul ROI — Template complet

```python
# Calculateur ROI Transformation IA
def calcul_roi(
    effectif_concerne: int,
    gain_temps_heures_semaine: float,
    cout_horaire_moyen: float,
    semaines_par_an: int = 46,
    taux_adoption: float = 0.80,
    
    cout_developpement: float = 0,
    cout_infrastructure_annuel: float = 0,
    cout_formation: float = 0,
    cout_change_management: float = 0,
    
    horizons_ans: list = [1, 2, 3]
) -> dict:
    
    # Gain annuel brut
    gain_annuel_brut = (
        effectif_concerne
        * gain_temps_heures_semaine
        * semaines_par_an
        * cout_horaire_moyen
        * taux_adoption
    )
    
    # Coûts
    investissement_initial = cout_developpement + cout_formation + cout_change_management
    cout_annuel_recurrent = cout_infrastructure_annuel
    
    resultats = {}
    for n in horizons_ans:
        cout_total = investissement_initial + (n * cout_annuel_recurrent)
        benefice_total = n * gain_annuel_brut
        roi = ((benefice_total - cout_total) / cout_total) * 100
        resultats[f"an_{n}"] = {
            "gain_brut": round(benefice_total),
            "cout_total": round(cout_total),
            "roi_pct": round(roi, 1),
            "benefice_net": round(benefice_total - cout_total)
        }
    
    # Payback period (en mois)
    payback_mois = round((investissement_initial / (gain_annuel_brut / 12)), 1)
    resultats["payback_mois"] = payback_mois
    
    return resultats

# EXEMPLE — Solution RH IA
resultats = calcul_roi(
    effectif_concerne=45,
    gain_temps_heures_semaine=2.0,
    cout_horaire_moyen=60,
    taux_adoption=0.80,
    cout_developpement=180_000,
    cout_infrastructure_annuel=18_000,
    cout_formation=15_000,
    cout_change_management=20_000,
)
# Résultat : ROI An1=87%, An2=210%, An3=334% | Payback=6.1 mois
```

## Valorisation des intangibles

| Intangible | Méthode de valorisation | Valeur estimée |
|---|---|---|
| Réduction turnover RH (+5% retention) | Coût remplacement × postes × taux réduction | 75 000 € / an |
| Évitement amende IA Act (conformité) | Amende max × probabilité sans projet | 50 000 € (probabilité 10% × 500K€ max) |
| Gain NPS employeur | Valeur recrutement accéléré | 30 000 € / an |

## Template présentation ROI — CODIR

```
ROI TRANSFORMATION RH IA — Synthèse Directoire
═══════════════════════════════════════════════════════════

INVESTISSEMENT : 233 000 €
ROI AN 1       : 87%   (gain net 203 000 €)
ROI AN 3       : 334%  (gain net 778 000 €)
PAYBACK        : 6 mois

GAINS CLÉS
─────────────────────────────────────────────────────────
Productivité RH   : +33% (30 min gagnées/dossier × 15K dossiers)
Qualité recrutement: -67% taux rejet tardif (12% → 4%)
Conformité        : AIPD validée CNIL — risque amende éliminé

RISQUE PRINCIPAL : Adoption < 70% → ROI réduit à 120% (toujours positif)
```

## Livrables
- Calcul ROI documenté (Python / Excel)
- Scénarios optimiste / réaliste / pessimiste
- Valorisation intangibles
- Slide CODIR synthèse 1 page

## Format de sortie
Précise : effectif concerné, gains de temps estimés, coût horaire moyen, coûts projet, horizon d'analyse.

## Anti-patterns
- ❌ **ROI brut non actualisé** présenté comme une VAN : sur 3 ans, actualiser (cf. `cost-benefit-analysis.md`)
- ❌ **Ignorer le taux d'adoption** : un ROIcalculé à 100% d'adoption est irréaliste (pondérer)
- ❌ **Intangibles non valorisés OU survalorisés** sans méthode (utiliser un cadre type Forrester TEI)
- ❌ **Gains de productivité = 100% convertis en €** : le temps gagné n'est pas toujours réalloué
- ❌ **Payback sans actualisation** pour les horizons longs (discounted payback)
- ❌ **Présenter un seul chiffre de ROI** sans fourchette ni scénario pessimiste

## Sources
- **Brealey R., Myers S., Allen F.** — *Principles of Corporate Finance* (McGraw-Hill) — ROI, Payback
- **Forrester** — *Total Economic Impact (TEI)* — valorisation bénéfices + risques + flexibilité
- **WACC / discounted payback** — pour les horizons longs (couplage VAN)

## Voir aussi
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — VAN/TRI (vue actualisée complémentaire du ROI)
- [`business-case-ia.md`](business-case-ia.md) — ROI intégré au business case + scénarios
- [`reporting-financier.md`](reporting-financier.md) — restitution CODIR
- [`../consultant_ia/estimation-roi-rapide.md`](../consultant_ia/estimation-roi-rapide.md) — ROI rapide (cadrage)
- [`../consultant_ia/transformation-digitale.md`](../consultant_ia/transformation-digitale.md) — transformation IA globale
