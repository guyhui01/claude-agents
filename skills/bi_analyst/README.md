# Skills — Business Intelligence Analyst

> Dossier rattaché à `AGENT-BI-ANALYST.md`
> Référentiels : Microsoft PL-300 (Power BI) · DP-600 (Fabric) · Tableau Certified Data Analyst · Looker · Databricks · dbt · AWS DEA-C01 · Kimball Group · DAMA DMBOK2

---

## Index des skills (12)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`modelisation-dimensionnelle.md`](modelisation-dimensionnelle.md) | Modèle dimensionnel (étoile, flocon, One Big Table, Data Vault 2.0) | PL-300 · DP-600 · Databricks |
| 2 | [`power-bi-reporting.md`](power-bi-reporting.md) | Développer un rapport Power BI (Desktop, Service, Fabric) | PL-300 · DP-600 |
| 3 | [`tableau-dashboard.md`](tableau-dashboard.md) | Développer un dashboard Tableau (Desktop, Prep, Cloud) | Tableau Certified Data Analyst |
| 4 | [`looker-lookml.md`](looker-lookml.md) | Développer avec Looker / LookML | Looker BI & Data Analytics |
| 5 | [`sql-analytique.md`](sql-analytique.md) | SQL analytique avancé (window functions, CTEs, dbt) | dbt Certified · Databricks |
| 6 | [`catalogue-kpis.md`](catalogue-kpis.md) | Construire le catalogue de KPIs et métriques (définitions, ownership) | PL-300 · Tableau · Google Data Analytics |
| 7 | [`reporting-codir.md`](reporting-codir.md) | Produire un reporting CODIR / exécutif (data storytelling) | PL-300 · Tableau · Google Data Analytics |
| 8 | [`gouvernance-bi.md`](gouvernance-bi.md) | Gouvernance BI (semantic layer, RLS, lineage, certifications) | PL-300 · DP-600 · Databricks |
| 9 | [`self-service-bi.md`](self-service-bi.md) | Former les utilisateurs au self-service BI | PL-300 · Tableau · Google Data Analytics |
| 10 | [`microsoft-fabric.md`](microsoft-fabric.md) | Concevoir sur Microsoft Fabric (OneLake, Semantic Model, Direct Lake) | DP-600 Fabric · PL-300 · Databricks |
| 11 | [`monitoring-alertes-bi.md`](monitoring-alertes-bi.md) | Mettre en place monitoring et alertes BI (anomaly detection) | PL-300 · DP-600 · Tableau |
| 12 | [`bi-augmentee-ia.md`](bi-augmentee-ia.md) | BI augmentée IA (Copilot Power BI, Q&A NL, Smart Narratives) | PL-300 · DP-600 · Claude Code 101 · Claude Code in Action |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONCEVOIR L'ARCHITECTURE BI ?
    → modelisation-dimensionnelle.md (étoile/flocon/Data Vault)
    → gouvernance-bi.md (semantic layer, RLS, lineage)
    → catalogue-kpis.md (définitions des métriques avant la viz)

  ... DÉVELOPPER UN RAPPORT ?
    → power-bi-reporting.md (Power BI)
    → tableau-dashboard.md (Tableau)
    → looker-lookml.md (Looker)
    → sql-analytique.md (transformer la data en amont)

  ... TRAVAILLER SUR MS FABRIC ?
    → microsoft-fabric.md (OneLake, Semantic Model, Direct Lake)

  ... PRODUIRE DU REPORTING EXÉCUTIF ?
    → reporting-codir.md (storytelling data)

  ... INDUSTRIALISER LA BI ?
    → self-service-bi.md (formation utilisateurs)
    → monitoring-alertes-bi.md (alertes, anomaly detection)
    → bi-augmentee-ia.md (Copilot, Q&A, narratives)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Pipelines ETL/ELT complexes | `AGENT-DATA-ENGINEER.md` | BI = consommation analytique ; DATA-ENG = production des données |
| Modèles ML et statistiques avancées | `AGENT-DATA-SCIENTIST.md` | BI = descriptif + diagnostic ; DATA-SCI = prédictif + prescriptif |
| Architecture Data / Data Mesh / OKR data | `AGENT-CDO-DIRECTEUR-IA.md` | BI = exécution ; CDO = stratégie data |
| Reporting financier stratégique (CODIR finance) | `AGENT-FINANCIAL-ANALYST.md` | BI = data viz ; FINANCIAL = analyse financière experte |
| MLOps et déploiement modèles | `AGENT-MLOPS-ENGINEER.md` | BI = consomme les outputs ; MLOPS = déploie les modèles |

---

## Référentiels et standards utilisés

- **Kimball Group** (modélisation dimensionnelle) : https://www.kimballgroup.com/
- **DAMA DMBOK2** : Data Management Body of Knowledge
- **Microsoft Fabric** : https://learn.microsoft.com/fabric/
- **Power BI** : https://learn.microsoft.com/power-bi/
- **dbt** : https://docs.getdbt.com/
- **Tableau** : https://help.tableau.com/
- **Looker / LookML** : https://cloud.google.com/looker/docs
- **Data Vault 2.0** (Linstedt) : pour entrepôts complexes
- **DORA / DataOps** : pour gouvernance et monitoring
