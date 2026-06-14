# Skills — Business Intelligence Analyst

> Folder attached to `AGENT-BI-ANALYST.md`
> Frameworks: Microsoft PL-300 (Power BI) · DP-600 (Fabric) · Tableau Certified Data Analyst · Looker · Databricks · dbt · AWS DEA-C01 · Kimball Group · DAMA DMBOK2

---

## Skill index (12)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`modelisation-dimensionnelle.md`](modelisation-dimensionnelle.md) | Dimensional model (star, snowflake, One Big Table, Data Vault 2.0) | PL-300 · DP-600 · Databricks |
| 2 | [`power-bi-reporting.md`](power-bi-reporting.md) | Build a Power BI report (Desktop, Service, Fabric) | PL-300 · DP-600 |
| 3 | [`tableau-dashboard.md`](tableau-dashboard.md) | Build a Tableau dashboard (Desktop, Prep, Cloud) | Tableau Certified Data Analyst |
| 4 | [`looker-lookml.md`](looker-lookml.md) | Develop with Looker / LookML | Looker BI & Data Analytics |
| 5 | [`sql-analytique.md`](sql-analytique.md) | Advanced analytical SQL (window functions, CTEs, dbt) | dbt Certified · Databricks |
| 6 | [`catalogue-kpis.md`](catalogue-kpis.md) | Build the KPI and metrics catalog (definitions, ownership) | PL-300 · Tableau · Google Data Analytics |
| 7 | [`reporting-codir.md`](reporting-codir.md) | Produce executive / leadership reporting (data storytelling) | PL-300 · Tableau · Google Data Analytics |
| 8 | [`gouvernance-bi.md`](gouvernance-bi.md) | BI governance (semantic layer, RLS, lineage, certification) | PL-300 · DP-600 · Databricks |
| 9 | [`self-service-bi.md`](self-service-bi.md) | Train users on self-service BI | PL-300 · Tableau · Google Data Analytics |
| 10 | [`microsoft-fabric.md`](microsoft-fabric.md) | Design on Microsoft Fabric (OneLake, Semantic Model, Direct Lake) | DP-600 Fabric · PL-300 · Databricks |
| 11 | [`monitoring-alertes-bi.md`](monitoring-alertes-bi.md) | Set up BI monitoring and alerting (anomaly detection) | PL-300 · DP-600 · Tableau |
| 12 | [`bi-augmentee-ia.md`](bi-augmentee-ia.md) | AI-augmented BI (Power BI Copilot, NL Q&A, Smart Narratives) | PL-300 · DP-600 · Claude Code 101 · Claude Code in Action |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... DESIGN THE BI ARCHITECTURE?
    → modelisation-dimensionnelle.md (star/snowflake/Data Vault)
    → gouvernance-bi.md (semantic layer, RLS, lineage)
    → catalogue-kpis.md (metric definitions before the viz)

  ... BUILD A REPORT?
    → power-bi-reporting.md (Power BI)
    → tableau-dashboard.md (Tableau)
    → looker-lookml.md (Looker)
    → sql-analytique.md (transform the data upstream)

  ... WORK ON MS FABRIC?
    → microsoft-fabric.md (OneLake, Semantic Model, Direct Lake)

  ... PRODUCE EXECUTIVE REPORTING?
    → reporting-codir.md (data storytelling)

  ... INDUSTRIALIZE BI?
    → self-service-bi.md (user training)
    → monitoring-alertes-bi.md (alerting, anomaly detection)
    → bi-augmentee-ia.md (Copilot, Q&A, narratives)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Complex ETL/ELT pipelines | `AGENT-DATA-ENGINEER.md` | BI = analytical consumption; DATA-ENG = data production |
| ML models and advanced statistics | `AGENT-DATA-SCIENTIST.md` | BI = descriptive + diagnostic; DATA-SCI = predictive + prescriptive |
| Data architecture / Data Mesh / data OKRs | `AGENT-CDO-DIRECTEUR-IA.md` | BI = execution; CDO = data strategy |
| Strategic financial reporting (finance leadership) | `AGENT-FINANCIAL-ANALYST.md` | BI = data viz; FINANCIAL = expert financial analysis |
| MLOps and model deployment | `AGENT-MLOPS-ENGINEER.md` | BI = consumes the outputs; MLOPS = deploys the models |

---

## Frameworks and standards used

- **Kimball Group** (dimensional modeling): https://www.kimballgroup.com/
- **DAMA DMBOK2**: Data Management Body of Knowledge
- **Microsoft Fabric**: https://learn.microsoft.com/fabric/
- **Power BI**: https://learn.microsoft.com/power-bi/
- **dbt**: https://docs.getdbt.com/
- **Tableau**: https://help.tableau.com/
- **Looker / LookML**: https://cloud.google.com/looker/docs
- **Data Vault 2.0** (Linstedt): for complex warehouses
- **DORA / DataOps**: for governance and monitoring
