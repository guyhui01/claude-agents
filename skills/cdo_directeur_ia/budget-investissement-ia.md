# Skill — AI Budget & Investment (Capex/Opex, TCO, ROI, FinOps)

> Certifications: AWS Certified Cloud Practitioner + FinOps Certified Practitioner (FinOps Foundation) 2026, Google Cloud Cost Management Professional, PMI-PBA (Business Analysis)

## Objective

Structure an organization's Data-AI budget (Capex vs Opex), compute the TCO of an AI platform, assess the ROI of a project portfolio, and implement a FinOps approach to control cloud costs.

## Data-AI budgeting framework

### Capex vs Opex classification

| Category | Capex | Opex |
|-----------|-------|------|
| Initial cloud infrastructure | Yes (if on-premise) | No (if cloud) |
| Perpetual software licenses | Yes | No |
| SaaS / PaaS subscriptions | No | Yes |
| AI project development | Yes (capitalized asset) | No |
| Data team payroll | No | Yes |
| Training & certifications | Mixed | Yes |
| Cloud costs (compute, storage) | No | Yes |

**2026 rule: a trend toward 80% Opex (cloud-first) — CIOs must justify any Capex on intangible AI assets.**

### Typical budget structure (mid-market 1000-5000 people)

```
ANNUAL DATA-AI BUDGET — €3.5M example

1. PLATFORM & INFRASTRUCTURE            €1,000k  (29%)
   ├── Cloud (compute, storage, network)   €600k
   ├── Data tool licenses (catalog,
   │   quality, orchestration)             €250k
   └── Security & compliance               €150k

2. HUMAN RESOURCES                      €1,500k  (43%)
   ├── Internal team (loaded salaries)   €1,100k
   │   (CDO + 2 DE + 2 DS + 1 MLOps
   │   + 1 Data Analyst + 1 Steward)
   └── Consultants / freelancers           €400k

3. AI PROJECTS (use cases)               €700k   (20%)
   ├── PoC & prototypes (5 × €40k)        €200k
   ├── Production deployment (3 projects)  €350k
   └── Maintenance of models in prod       €150k

4. TRAINING & ENABLEMENT                €200k    (6%)
   ├── Team certifications                 €80k
   ├── Business training                   €70k
   └── Events & monitoring                 €50k

5. GOVERNANCE & COMPLIANCE              €100k    (2%)
   ├── Data quality audit                  €50k
   └── Legal counsel (GDPR, AI Act)        €50k
```

## Computing the TCO of an AI platform

### 3-year TCO template (AI Lakehouse on AWS/Azure/GCP)

```python
# Simplified TCO model — Python
class TCO_AI_Platform:
    def __init__(self, nb_users, data_volume_tb, nb_models_prod):
        self.users = nb_users
        self.volume = data_volume_tb
        self.models = nb_models_prod

    def compute_annual(self):
        # Cloud costs (2026 estimate)
        storage = self.volume * 25          # €25/TB/year (S3/GCS)
        compute_etl = self.volume * 150     # ETL/ELT processing
        compute_ml = self.models * 2000     # Training + inference
        data_transfer = self.volume * 10    # Egress

        # Licenses
        orchestration = 18000               # Airflow/Prefect cloud
        catalog = 15000 * (self.users/50)   # Collibra/DataHub
        monitoring = 12000                  # Monte Carlo/Soda

        # HR (in €k)
        salaries = 550000                   # 2 senior Data Engineers

        total_cloud = storage + compute_etl + compute_ml + data_transfer
        total_licenses = orchestration + catalog + monitoring
        total = total_cloud + total_licenses + salaries

        return {
            "cloud": total_cloud,
            "licenses": total_licenses,
            "hr": salaries,
            "total_annual": total,
            "cost_per_user": total / self.users
        }

# Usage
tco = TCO_AI_Platform(nb_users=200, data_volume_tb=50, nb_models_prod=5)
print(tco.compute_annual())
```

## Computing the ROI of an AI portfolio

### Value qualification framework

| Value type | Measure | Examples |
|----------------|--------|---------|
| Cost reduction | € saved/year | Processing automation, error reduction |
| Revenue increase | € generated/year | Recommendation, personalization |
| Risk avoidance | € risk avoided | Fraud, non-compliance |
| Productivity gains | FTEs saved × cost | RPA, decision support |
| NPS improvement | Value per NPS point | Customer retention |

### AI use-case ROI template

```
Project: B2B churn-prediction model

INVESTMENT
  Development & production rollout    : €120,000
  ML infrastructure (1 year)          :  €30,000
  Maintenance & monitoring (1 year)   :  €20,000
  TOTAL INVESTED                      : €170,000

VALUE GENERATED (year 1)
  Customers retained: 50 customers × 60% success rate = 30
  Average revenue/customer/year       :  €25,000
  Value preserved                     : €750,000
  New-customer acquisition cost       :   €8,000
  Acquisition avoided (30 customers)  : €240,000
  TOTAL VALUE YEAR 1                  : €990,000

YEAR 1 ROI = (990,000 - 170,000) / 170,000 = 482%
Payback    = 170,000 / (990,000/12)        = 2.1 months
```

## FinOps Data — Controlling cloud costs

### The 3 FinOps phases (FinOps Foundation)

| Phase | Actions | Tools |
|-------|---------|--------|
| **Inform** | Tagging, cost dashboards, showback | AWS Cost Explorer, Azure Cost Management |
| **Optimize** | Reserved instances, auto-scaling, cold-data archiving | Spot instances, S3 Intelligent-Tiering |
| **Operate** | Budget alerts, monthly FinOps ritual, chargeback | CloudHealth, Apptio Cloudability |

### FinOps Data KPIs

| KPI | Definition | Target |
|-----|-----------|-------|
| Cloud unit cost | Cloud cost / TB processed | < €50 |
| Forecast accuracy | Forecast vs actual gap | < 10% |
| Savings rate | % reservations / total | > 30% |
| Untagged spend | % spend without tags | < 5% |

## Deliverables

- Detailed annual Data-AI budget (Capex/Opex, by category)
- 3-year TCO model for the data platform
- ROI business cases for the 3-5 priority use cases
- Monthly FinOps dashboard (cloud costs per team/project)
- Cloud tagging and chargeback policy
- Executive-committee budget presentation (narrative + key figures)

## Output format

Specify: **organization size** (revenue, headcount), **cloud provider(s)** used, **existing data stack** (current licenses), **data volume** (TB), **number of data teams**, **AI projects ongoing or planned**, **budget horizon** (1 year / 3 years), **stakeholder** (CFO / CIO / CDO).
