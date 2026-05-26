# Skill — Catalogue de KPIs et Métriques
> Certifications : PL-300 Microsoft · Tableau Certified Data Analyst (Salesforce) · Google Data Analytics

## Objectif
Construire et maintenir un catalogue de KPIs : définir les métriques, leurs règles de gestion, leurs propriétaires et leurs cibles — pour garantir un langage commun dans l'entreprise et éliminer les chiffres contradictoires entre équipes.

## Problème des métriques non gouvernées

```
SYMPTÔME                        CAUSE                         IMPACT
──────────────────────────────  ────────────────────────────  ─────────────────────────────────
"Le chiffre du CODIR ≠          Définitions différentes       Perte de confiance dans la donnée
le chiffre de la DSI"           (avec ou sans retours ?)

"Revenue" a 4 définitions       Pas de règle de gestion       Décisions contradictoires
différentes selon les équipes   officielle documentée

Le KPI a changé sans prévenir   Pas de propriétaire désigné   Comparaisons historiques faussées
```

## Structure d'une fiche KPI

```markdown
## KPI — Chiffre d'Affaires Net

### Identité
- **Nom officiel** : Chiffre d'Affaires Net (CA Net)
- **Nom technique** : net_revenue
- **Domaine** : Finance / Commercial
- **Propriétaire** : Directeur Financier
- **Steward data** : Équipe BI / Data

### Définition
Montant total des ventes après déduction des remises, retours et avoirs,
hors taxes, sur la période sélectionnée.

### Règle de gestion
```
CA Net = SUM(gross_revenue) - SUM(discounts) - SUM(returns) - SUM(credit_notes)
Filtre  : status IN ('confirmed', 'shipped', 'delivered') [exclure 'cancelled', 'pending']
Taxe    : hors TVA (montant HT uniquement)
Devise  : EUR par défaut (avec conversion au taux du jour de la commande)
```

### Source de données
- Table : `fact_orders`
- Champs : `gross_revenue`, `discount_amount`, `return_amount`
- Fraîcheur : J-1 (refresh nocturne à 2h00)

### Périmètre
- ✅ Inclus : toutes les commandes confirmées + livrées
- ❌ Exclus : commandes annulées, commandes en attente de confirmation

### Cibles et seuils
| Période | Cible | Alerte rouge |
|---------|-------|-------------|
| Mensuel | +8% vs N-1 | < -5% vs N-1 |
| Annuel  | 12M€ | < 10M€ |

### Disponible dans
- Power BI : rapport Finance → page "Revenus"
- Measure DAX : `[Net Revenue]`
- dbt model : `marts.finance.fct_revenue` colonne `net_revenue`
```

## Taxonomie de KPIs par domaine

```
DOMAINE COMMERCIAL
  • CA Net / CA Brut / CA récurrent (MRR/ARR)
  • Taux de conversion (Leads → Clients)
  • Panier moyen (Average Order Value)
  • Customer Acquisition Cost (CAC)
  • Lifetime Value (LTV) — ratio LTV/CAC
  • Taux de churn client

DOMAINE OPÉRATIONNEL
  • OTD (On Time Delivery)
  • Taux de rupture de stock
  • Délai moyen de traitement
  • NPS (Net Promoter Score)
  • Taux de résolution premier contact (FCR)

DOMAINE FINANCIER
  • EBITDA / Marge brute / Marge nette
  • DSO (Days Sales Outstanding)
  • Cash burn rate
  • Budget vs Réalisé (Variance)
  • ROI / ROE / ROCE

DOMAINE RH
  • Taux de turnover
  • eNPS (Employee NPS)
  • Temps moyen de recrutement (TTFH)
  • Taux d'absentéisme
  • Formation : heures / coût par ETP

DOMAINE PRODUIT / DIGITAL
  • MAU / DAU (utilisateurs actifs)
  • Taux de rétention (Retention Rate)
  • Time to Value (TTV)
  • Feature adoption rate
  • DORA metrics (DevOps)
```

## Matrice de priorisation des KPIs

```
CRITÈRE           PONDÉRATION   DESCRIPTION
────────────────  ───────────   ─────────────────────────────────────
Impact décision   40%           Ce KPI change-t-il un comportement ?
Fiabilité donnée  30%           La source est-elle fiable et fraîche ?
Fréquence usage   20%           Combien de personnes le consultent ?
Facilité calcul   10%           Coût de production du KPI

Score total → Prioriser les KPIs > 70/100 pour la V1
```

## Livrables
- Catalogue de KPIs (fiches complètes par métrique)
- Dictionnaire de données (règles de gestion officielles)
- Cartographie propriétaires (RACI par domaine)
- Tableau de bord de gouvernance (KPIs sans propriétaire, sans définition)
- Processus de création de nouveaux KPIs (formulaire + validation)

## Format de sortie
Précise : **domaine** (commercial, finance, RH, produit…), **audience** (CODIR, managers, opérationnels), **nombre de KPIs** à définir, **outils BI utilisés**, **problème à résoudre** (chiffres contradictoires ? gouvernance inexistante ? nouveau rapport CODIR ?).
