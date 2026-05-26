# Skill — Reporting CODIR / Exécutif
> Certifications : PL-300 Microsoft · Tableau Certified Data Analyst · Google Data Analytics Professional

## Objectif
Produire des reportings exécutifs percutants pour le CODIR : synthèse visuelle des KPIs stratégiques, storytelling data, commentaires d'analyse — en transformant la donnée brute en insights décisionnels.

## Principes du reporting exécutif

```
RÈGLE                           APPLICATION CONCRÈTE
──────────────────────────────  ────────────────────────────────────────────────────────
1 message = 1 diapo / page      Le titre affirme la conclusion ("CA en hausse de 8% vs N-1")
                                Non : "Évolution du CA" (neutre, ne dit rien)

Contexte avant détail           Commencer par le résumé (Executive Summary 1 page)
                                Détail disponible en annexe / drill-down

Comparaison obligatoire         Jamais un chiffre seul → vs objectif / vs N-1 / vs budget
                                "3,2M€" n'a pas de sens sans référence

Signaux visuels clairs          ▲ vert = en avance   ▼ rouge = en retard   → gris = stable
                                Feux tricolores pour les KPIs (RAG status)

Commentaire analytique          "Pourquoi ?" avant "Quoi ?"
(pas descriptif)                ❌ "Le CA a baissé de 5%"
                                ✅ "La baisse de 5% du CA est liée à l'arrêt de la promo Black Friday
                                    (-3pts) et à la fermeture du marché DE (-2pts)"
```

## Structure type d'un reporting mensuel CODIR

```
PAGE 1 — EXECUTIVE SUMMARY (5 min de lecture max)
  ┌─────────────────────────────────────────────────────────────────┐
  │  TITRE : Performance mai 2026 — synthèse stratégique            │
  │                                                                   │
  │  ▲ CA Net : 3,8M€ (+12% vs N-1) ✅ Objectif atteint             │
  │  ▼ Marge brute : 42% (-2pts vs N-1) ⚠️ Sous l'objectif (44%)   │
  │  ▲ NPS Client : 67 (+5pts vs mars) ✅                            │
  │  → Taux de churn : 2,1% (stable)                                │
  │                                                                   │
  │  FAITS SAILLANTS :                                               │
  │  • Forte croissance segment Enterprise (+28%) portée par 3 deals│
  │  • Pression sur la marge liée aux coûts logistiques (+15%)      │
  │  • Lancement feature X — adoption à 34% en 4 semaines           │
  └─────────────────────────────────────────────────────────────────┘

PAGE 2 — CA & REVENUS
  • Courbe évolution CA mensuel (12 mois glissants + objectif)
  • Répartition CA par segment (Enterprise / Mid-market / SMB)
  • Top 10 clients (nouveaux + extensions)

PAGE 3 — MARGE & RENTABILITÉ
  • Évolution marge brute (bridge waterfall : prix, mix, coûts)
  • P&L simplifié (CA → EBITDA)
  • Budget vs Réalisé (variance + explication)

PAGE 4 — CLIENTS & NPS
  • Évolution NPS (verbatim top positif / négatif)
  • Funnel acquisition (Leads → Qualified → Won)
  • Churn et rétention

PAGE 5 — PLAN D'ACTIONS
  • Décisions à prendre (1 ligne = 1 décision)
  • Actions en cours (responsable + deadline)
  • Points d'attention pour le prochain mois
```

## Graphiques recommandés par cas

```
BESOIN                          GRAPHIQUE RECOMMANDÉ         À ÉVITER
──────────────────────────────  ─────────────────────────    ─────────────────────────
Évolution dans le temps         Courbe (line chart)          Barres groupées si > 3 séries
Comparaison entre catégories    Barres horizontales          Camembert si > 5 catégories
Part de marché / composition    Barre empilée 100%           Camembert 3D (toujours)
Contribution à la variation     Waterfall / Bridge           Tableau seul
Distribution                    Histogramme / Box plot       Barres si nombreuses catégories
Corrélation                     Scatter plot                 Barres
Géographique                    Carte choroplèthe            Tableau seul si < 5 régions
KPI vs objectif                 Gauge / Bullet chart         Jauge ronde (peu précise)
```

## Waterfall Chart — Analyse bridge

```
RECETTE POUR UN BRIDGE CA :

CA N-1      3 500 K€    (base de départ)
+ Volume    + 450 K€    (+12,9% unités vendues)
+ Mix       + 120 K€    (montée en gamme)
- Prix      - 80 K€     (pression tarifaire SMB)
+ Nouveaux  + 210 K€    (3 nouveaux comptes Enterprise)
- Churns    - 400 K€    (perte Mega Corp en mars)
            ─────────
CA N        3 800 K€    (+8,6% vs N-1)
```

## Livrables
- Rapport CODIR mensuel (format PDF + Power BI live)
- Template réutilisable (structure + charte graphique)
- Commentaires analytiques rédigés (pas descriptifs)
- Version mobile (Power BI mobile layout)
- Archive mensuelle (historique sur SharePoint / OneLake)

## Format de sortie
Précise : **fréquence** (mensuel, hebdo, trimestriel), **audience** (CODIR, DG, investisseurs…), **KPIs prioritaires**, **format de rendu** (Power BI live, PDF exporté, PowerPoint, email), **données disponibles** (sources, fraîcheur), **contraintes** (confidentialité, RLS).
