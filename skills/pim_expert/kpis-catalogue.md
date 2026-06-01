# Skill — KPIs & Pilotage du Catalogue Produit
> Certifications : Akeneo Certified Product Manager · CDMP · inriver Certified Professional

## Objectif
Définir et piloter les indicateurs clés de performance du catalogue produit : qualité, time-to-market, syndication, SLA qualité — pour rendre le catalogue actionnable, prioriser les enrichissements et justifier les investissements PIM devant le CODIR.

## Framework de KPIs catalogue (4 axes)

```
AXE 1 — QUALITÉ DES DONNÉES
  □ Taux de complétude global         % attributs requis remplis / total attendu
  □ Taux de complétude par canal      Complétude spécifique e-com / print / marketplace
  □ Taux d'exactitude                 % données cohérentes avec source ERP
  □ Taux de doublons                  % SKUs dupliqués détectés / total catalogue
  □ Score qualité moyen               Moyenne pondérée des 5 dimensions (cf. scoring-qualite)

AXE 2 — PERFORMANCE OPÉRATIONNELLE
  □ Time-to-market (TTM)              Délai création ERP → publication canal (en jours)
  □ Taux de rejet validation          % fiches rejetées en validation / soumises
  □ Backlog enrichissement            Nb fiches bloquées > 7 jours en enrichissement
  □ Délai moyen de traduction         Délai extraction → import locale complète

AXE 3 — SYNDICATION & DISTRIBUTION
  □ Taux de couverture canal          % SKUs actifs syndiqués sur chaque canal / total actifs
  □ Taux d'erreurs de sync            % erreurs API / push / export par canal
  □ Délai de synchronisation          Temps entre modification PIM et mise à jour canal
  □ Taux de rejet marketplace         % fiches rejetées par Amazon/FNAC / soumises

AXE 4 — IMPACT BUSINESS
  □ Taux de conversion (e-com)        Évolution post-amélioration qualité fiches
  □ Taux de retour produit            Corrélation avec qualité description produit
  □ Productivité enrichissement       Nb fiches enrichies / jour / ETP
  □ Coût d'onboarding                 Coût moyen € pour intégrer 1 nouveau fournisseur
```

## Tableau de bord CODIR — Template

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  CATALOGUE PRODUIT — Reporting Q2 2026                                         │
├─────────────────────────────┬──────────────┬────────────┬──────────────────────┤
│  INDICATEUR                 │  VALEUR      │  CIBLE     │  TENDANCE            │
├─────────────────────────────┼──────────────┼────────────┼──────────────────────┤
│  Complétude globale         │  91.3%       │  ≥ 95%     │  ▲ +2.1% vs Q1       │
│  Time-to-market moyen       │  4.2 jours   │  ≤ 3 jours │  ▼ -0.8j vs Q1      │
│  Couverture e-commerce      │  98.7%       │  100%      │  → stable            │
│  Erreurs sync marketplace   │  1.2%        │  ≤ 0.5%    │  ▲ amélioration req. │
│  Score qualité moyen        │  87/100      │  ≥ 90      │  ▲ +3 pts vs Q1      │
│  Backlog critique           │  23 fiches   │  ≤ 10      │  ▼ alerte            │
│  Taux retour lié desc.      │  2.1%        │  ≤ 1.5%    │  ▼ à surveiller     │
├─────────────────────────────┴──────────────┴────────────┴──────────────────────┤
│  🎯 ACTIONS Q3 : Enrichissement DE manquant (450 SKUs) · Correction sync FNAC  │
└────────────────────────────────────────────────────────────────────────────────┘
```

## SLA qualité par type de produit

```
TYPE PRODUIT            TTM CIBLE     COMPLÉTUDE PUB.  RÉVISION ANNUELLE
──────────────────────  ────────────  ───────────────  ─────────────────
Produit phare (A)       ≤ 2 jours     100%             Semestrielle
Produit courant (B)     ≤ 5 jours     100%             Annuelle
Produit longue traîne   ≤ 10 jours    ≥ 80%            À la demande
Produit saisonnier      ≤ 3 jours     100%             Chaque saison
Nouveau fournisseur     ≤ 15 jours    ≥ 70% (phase 1)  Trimestrielle
```

## Livrables
- Framework KPIs catalogue (dictionnaire indicateurs, formules, sources)
- Dashboard catalogue (Power BI / natif PIM / Metabase)
- Reporting CODIR mensuel (1 page, 4 axes, tendances + actions)
- SLA qualité par type de produit et canal
- Alertes automatiques (seuils, destinataires, fréquence)
- Plan d'amélioration trimestriel (OKRs catalogue)

## Format de sortie
Précise : **PIM utilisé**, **canaux à couvrir** dans les KPIs, **outil BI disponible** (Power BI, Tableau, natif PIM…), **fréquence de reporting** (hebdo / mensuel / CODIR trimestriel), **profil des destinataires** (Data Stewards, direction, marketing).

## Anti-patterns
- ❌ **KPIs sans cible ni seuil d'alerte** : reporting contemplatif → chaque indicateur assorti d'une cible + action
- ❌ **Complétude globale sans déclinaison par canal** : masque les écarts (e-com 96 % / print 85 %) → toujours décliner
- ❌ **Aucun KPI d'impact business** (conversion, retours) : vanity metrics déconnectées de la valeur → relier qualité ↔ business
- ❌ **Reporting CODIR > 1 page** : le décideur est noyé → synthèse Minto 1 page (cf. règle reporting)
- ❌ **SLA uniformes pour tous les produits** : sur-investit la longue traîne, sous-investit les produits phares → SLA différenciés A/B/C
- ❌ **KPIs figés sans revue** : indicateurs obsolètes → plan d'amélioration trimestriel (OKR)

## Sources
- **Akeneo PIM** (Serenity) — completeness/KPIs natifs — help.akeneo.com
- **DAMA-DMBOK 2** (2017) · **ISO 8000** — dimensions de qualité de données (complétude, exactitude, cohérence, unicité, actualité) — dama.org / iso.org
- **OKR** — Doerr J., *Measure What Matters* (2018) — plan d'amélioration trimestriel
- **Pyramide de Minto** (1987) — structure du reporting CODIR 1 page

## Voir aussi
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — score qualité alimentant l'axe 1
- [`enrichissement-produit.md`](enrichissement-produit.md) — KPIs opérationnels (TTM, backlog)
- [`syndication-canaux.md`](syndication-canaux.md) — couverture et erreurs de synchronisation
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — scorecard de gouvernance
