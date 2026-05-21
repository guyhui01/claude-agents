# Skill — Budget & Investissement IA (Capex/Opex, TCO, ROI, FinOps)

> Certifications : AWS Certified Cloud Practitioner + FinOps Certified Practitioner (FinOps Foundation) 2026, Google Cloud Cost Management Professional, PMI-PBA (Business Analysis)

## Objectif

Structurer le budget Data-IA d'une organisation (Capex vs Opex), calculer le TCO d'une plateforme IA, évaluer le ROI d'un portefeuille de projets et mettre en oeuvre une démarche FinOps pour maîtriser les coûts cloud.

## Cadre de budgétisation Data-IA

### Classification Capex vs Opex

| Catégorie | Capex | Opex |
|-----------|-------|------|
| Infrastructure cloud initiale | Oui (si on-premise) | Non (si cloud) |
| Licences logicielles perpétuelles | Oui | Non |
| Abonnements SaaS / PaaS | Non | Oui |
| Développement projets IA | Oui (actif immo.) | Non |
| Masse salariale équipes data | Non | Oui |
| Formation & certifications | Mixte | Oui |
| Coûts cloud (compute, storage) | Non | Oui |

**Règle 2026 : tendance vers 80% Opex (cloud-first) — les DSI doivent justifier tout Capex sur des actifs immatériels IA.**

### Structure budgétaire type (ETI 1000-5000 personnes)

```
BUDGET DATA-IA ANNUEL — 3,5 M€ exemple

1. PLATEFORME & INFRASTRUCTURE          1 000 k€  (29%)
   ├── Cloud (compute, storage, réseau)    600 k€
   ├── Licences outils data (catalogue,    
   │   qualité, orchestration)             250 k€
   └── Sécurité & conformité               150 k€

2. RESSOURCES HUMAINES                  1 500 k€  (43%)
   ├── Équipe interne (salaires chargés) 1 100 k€
   │   (CDO + 2 DE + 2 DS + 1 MLOps
   │   + 1 Data Analyst + 1 Steward)
   └── Consultants / freelances            400 k€

3. PROJETS IA (use cases)                700 k€  (20%)
   ├── POC & prototypes (5 × 40 k€)       200 k€
   ├── Mise en production (3 projets)      350 k€
   └── Maintenance modèles en prod         150 k€

4. FORMATION & ENABLEMENT               200 k€   (6%)
   ├── Certifications équipe               80 k€
   ├── Formation métiers                   70 k€
   └── Événements & veille                 50 k€

5. GOUVERNANCE & CONFORMITÉ             100 k€   (2%)
   ├── Audit data quality                  50 k€
   └── Conseil juridique (RGPD, AI Act)    50 k€
```

## Calcul du TCO d'une plateforme IA

### Template TCO 3 ans (Lakehouse IA sur AWS/Azure/GCP)

```python
# Modèle TCO simplifié — Python
class TCO_IA_Platform:
    def __init__(self, nb_users, data_volume_tb, nb_models_prod):
        self.users = nb_users
        self.volume = data_volume_tb
        self.models = nb_models_prod

    def compute_annual(self):
        # Coûts cloud (estimatif 2026)
        storage = self.volume * 25          # 25 €/TB/an (S3/GCS)
        compute_etl = self.volume * 150     # ETL/ELT processing
        compute_ml = self.models * 2000     # Training + inference
        data_transfer = self.volume * 10    # Egress

        # Licences
        orchestration = 18000               # Airflow/Prefect cloud
        catalogue = 15000 * (self.users/50) # Collibra/DataHub
        monitoring = 12000                  # Monte Carlo/Soda

        # RH (en k€)
        salaires = 550000                   # 2 Data Engineers seniors

        total_cloud = storage + compute_etl + compute_ml + data_transfer
        total_licences = orchestration + catalogue + monitoring
        total = total_cloud + total_licences + salaires

        return {
            "cloud": total_cloud,
            "licences": total_licences,
            "rh": salaires,
            "total_annuel": total,
            "cout_par_user": total / self.users
        }

# Usage
tco = TCO_IA_Platform(nb_users=200, data_volume_tb=50, nb_models_prod=5)
print(tco.compute_annual())
```

## Calcul du ROI d'un portefeuille IA

### Framework de qualification de la valeur

| Type de valeur | Mesure | Exemples |
|----------------|--------|---------|
| Réduction de coûts | € économisés/an | Automatisation traitement, réduction erreurs |
| Augmentation de revenus | € générés/an | Recommandation, personnalisation |
| Évitement de risques | € risque évité | Fraude, non-conformité |
| Gains de productivité | ETP économisés × coût | RPA, aide à la décision |
| Amélioration NPS | Valeur par point NPS | Rétention client |

### Template ROI use case IA

```
Projet : Modèle de prédiction de churn B2B

INVESTISSEMENT
  Développement & mise en prod       : 120 000 €
  Infrastructure ML (1 an)           :  30 000 €
  Maintenance & monitoring (1 an)    :  20 000 €
  TOTAL INVESTI                      : 170 000 €

VALEUR GÉNÉRÉE (an 1)
  Clients sauvegardés : 50 clients × taux succès 60% = 30
  Revenu moyen/client/an             :  25 000 €
  Valeur préservée                   : 750 000 €
  Coût acquisition nouveau client    :   8 000 €
  Acquisition évitée (30 clients)    : 240 000 €
  VALEUR TOTALE AN 1                 : 990 000 €

ROI AN 1  = (990 000 - 170 000) / 170 000 = 482%
Payback   = 170 000 / (990 000/12)        = 2,1 mois
```

## FinOps Data — Maîtrise des coûts cloud

### Les 3 phases FinOps (FinOps Foundation)

| Phase | Actions | Outils |
|-------|---------|--------|
| **Inform** | Tagging, dashboards coûts, showback | AWS Cost Explorer, Azure Cost Management |
| **Optimize** | Reserved instances, auto-scaling, archivage cold data | Spot instances, S3 Intelligent-Tiering |
| **Operate** | Budgets alertes, FinOps rituel mensuel, chargeback | CloudHealth, Apptio Cloudability |

### KPIs FinOps Data

| KPI | Définition | Cible |
|-----|-----------|-------|
| Cloud unit cost | Coût cloud / TB traité | < 50 € |
| Forecast accuracy | Ecart prévision vs réel | < 10% |
| Savings rate | % réservations / total | > 30% |
| Untagged spend | % dépenses sans tags | < 5% |

## Livrables

- Budget Data-IA annuel détaillé (Capex/Opex, par catégorie)
- Modèle TCO 3 ans pour la plateforme data
- Business cases ROI pour les 3-5 use cases prioritaires
- Tableau de bord FinOps mensuel (coûts cloud par équipe/projet)
- Politique de tagging et chargeback cloud
- Présentation CODIR budget (narrative + chiffres-clés)

## Format de sortie

Précise : **taille organisation** (CA, effectifs), **cloud provider(s)** utilisés, **stack data existante** (licences en cours), **volume de données** (TB), **nombre d'équipes data**, **projets IA en cours ou planifiés**, **horizon budget** (1 an / 3 ans), **interlocuteur** (CFO / DSI / CDO).
