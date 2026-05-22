# Skill — Gestion Budgétaire des Projets IT/IA
> Certifications : PMP (PMI), DSCG (France), CMA (IMA), PMI-PBA (PMI)

## Objectif
Construire, suivre et piloter le budget d'un projet IT/IA — décomposition CAPEX/OPEX, suivi de consommation, variance analysis, reporting mensuel — pour maintenir le projet dans l'enveloppe validée.

## Budget projet — Template WBS financier

```yaml
budget_projet:
  nom: "Projet RH IA — Module Scoring"
  version: "v1.2 — Validé Steering Committee"
  date_validation: "2026-04-01"
  sponsor: "DSI / DRH"
  chef_projet: "Guy HUIBONHOA"
  
  enveloppe_totale: 300_000  # €
  
  capex:
    developpement_interne:
      jours_hommes: 150
      tjm_moyen: 900
      total: 135_000
      
    prestataires_externes:
      integration_sirh: 45_000
      expertise_ia: 30_000
      total: 75_000
      
    licences_outils:
      anthropic_api: 12_000
      infrastructure_cloud: 18_000
      total: 30_000
      
    total_capex: 240_000
    
  opex_annuel:
    maintenance_evolution: 30_000
    infrastructure: 18_000
    support: 12_000
    total_opex: 60_000
```

## Suivi budgétaire — Tableau de bord mensuel

| Poste | Budget | Engagé | Consommé | Reste | % Conso | Statut |
|---|---|---|---|---|---|---|
| Dev interne | 135 000 | 135 000 | 94 500 | 40 500 | 70% | ✅ On track |
| Prestataires | 75 000 | 75 000 | 60 000 | 15 000 | 80% | ⚠ Surveiller |
| Licences | 30 000 | 30 000 | 21 000 | 9 000 | 70% | ✅ On track |
| Réserve risques | 20 000 | 5 000 | 5 000 | 15 000 | 25% | ✅ |
| **TOTAL** | **260 000** | **245 000** | **180 500** | **79 500** | **69%** | **✅** |

## Variance Analysis — Template mensuel

```
BUDGET REPORTING — [NOM PROJET] — [MOIS]
══════════════════════════════════════════════════════════

SYNTHÈSE FINANCIÈRE
─────────────────────────────────────────────────────────
Budget total    : 260 000 €
Engagé          : 245 000 € (94%)
Consommé M5     : 180 500 € (69%)
Prévision fin   : 255 000 € (−5 000 € vs budget)

VARIANCES SIGNIFICATIVES
─────────────────────────────────────────────────────────
Prestataires    : +8 000 € vs plan
  Cause    : Complexité intégration API SIRH > estimée
  Action   : Négociation forfait fixe Sprint 3 (J+3)
  Impact   : Budget absorbé dans réserve risques

Dev interne     : −12 000 € vs plan (en avance)
  Cause    : Réutilisation composants existants
  Action   : Aucune — économie bienvenue

PRÉVISION FIN DE PROJET
─────────────────────────────────────────────────────────
Scénario réaliste : 255 000 € (−5 000 € vs budget) ✅
Scénario risque   : 270 000 € (+10 000 €) si tests > estimés
```

## Livrables
- Budget WBS financier complet (YAML / Excel)
- Tableau de bord consommation mensuel
- Variance analysis
- Rapport financier Steering Committee

## Format de sortie
Précise : postes budgétaires identifiés, montants engagés vs consommés, écarts constatés, date de clôture prévisionnelle.
