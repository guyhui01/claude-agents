# Skill — FinOps & Optimisation des Coûts Cloud
> Certifications : FinOps Certified Practitioner (FinOps Foundation 2026), AWS Cost Optimization, Google Cloud FinOps, Microsoft Azure Cost Management

## Objectif
Réduire les coûts cloud de 20 à 40% sans impacter la performance — grâce au rightsizing, aux achats optimisés (Reserved/Spot/Savings Plans), à une tagging strategy rigoureuse et à des budgets/alertes proactifs.

## Frameworks FinOps & Outils

### Cycle FinOps — FinOps Foundation

```
INFORM ──────────► OPTIMIZE ──────────► OPERATE
   │                   │                    │
   ▼                   ▼                    ▼
Visibilité          Rightsizing          Automatisation
Cost allocation     Reserved Instances   Budgets & alertes
Tagging             Spot/Preemptible     Rapport hebdo
Dashboards          Architecture review  Accountability teams
```

### Tagging Strategy — Obligatoire pour Cost Allocation

```hcl
# tags_policy.tf — tags obligatoires par convention
locals {
  mandatory_tags = {
    Environment   = var.environment          # prod / staging / dev
    Team          = var.team                 # platform / data / product
    Project       = var.project_name         # nom du projet
    CostCenter    = var.cost_center          # code comptable
    Owner         = var.owner_email          # responsable
    ManagedBy     = "terraform"
    CreatedDate   = formatdate("YYYY-MM-DD", timestamp())
  }
}

# Vérification via AWS Config Rule ou GCP Organization Policy
resource "aws_config_rule" "required_tags" {
  name = "required-tags"
  source {
    owner             = "AWS"
    source_identifier = "REQUIRED_TAGS"
  }
  input_parameters = jsonencode({
    tag1Key = "Environment"
    tag2Key = "Team"
    tag3Key = "CostCenter"
    tag4Key = "Owner"
  })
}
```

### Infracost — Estimation des coûts IaC

```bash
# Installer Infracost
brew install infracost
infracost auth login

# Estimation avant apply
infracost breakdown --path ./infra/environments/prod \
  --terraform-var-file prod.tfvars \
  --format table

# Diff entre deux branches (utilisé dans CI)
infracost diff \
  --path ./infra \
  --compare-to main \
  --format json \
  --out-file infracost-diff.json

# Rapport HTML
infracost output --path infracost-diff.json --format html > cost-report.html
```

```yaml
# .github/workflows/infracost.yml
- name: Infracost estimate
  uses: infracost/actions/setup@v3
  with:
    api-key: ${{ secrets.INFRACOST_API_KEY }}
- name: Post cost estimate to PR
  run: |
    infracost diff \
      --path infra/ \
      --compare-to origin/main \
      --format json \
      --out-file /tmp/infracost.json
    infracost comment github \
      --path /tmp/infracost.json \
      --repo $GITHUB_REPOSITORY \
      --pull-request $PR_NUMBER \
      --github-token $GITHUB_TOKEN \
      --behavior update
```

### Rightsizing — Scripts d'analyse AWS

```python
# rightsizing_analysis.py
import boto3
import pandas as pd
from datetime import datetime, timedelta

def get_ec2_rightsizing_recommendations() -> pd.DataFrame:
    """Récupère les recommandations AWS Cost Explorer."""
    ce = boto3.client("ce", region_name="us-east-1")
    
    response = ce.get_rightsizing_recommendation(
        Service="AmazonEC2",
        Configuration={
            "RecommendationTarget": "CROSS_INSTANCE_FAMILY",
            "BenefitsConsidered": True,
        },
        PageSize=100,
    )
    
    recommendations = []
    for rec in response.get("RightsizingRecommendations", []):
        current = rec["CurrentInstance"]
        details = rec.get("ModifyRecommendationDetail", {})
        target = details.get("TargetInstances", [{}])[0]
        
        recommendations.append({
            "instance_id": current["ResourceId"],
            "current_type": current["InstanceType"],
            "recommended_type": target.get("ResourceDetails", {}).get("EC2ResourceDetails", {}).get("InstanceType", "N/A"),
            "monthly_savings_usd": float(target.get("EstimatedMonthlySavings", 0)),
            "savings_pct": float(target.get("EstimatedMonthlySavingsPercentage", 0)),
            "cpu_avg_14d": float(current.get("UtilizationMetrics", {}).get("Cpu", {}).get("Average", 0)),
            "mem_avg_14d": float(current.get("UtilizationMetrics", {}).get("Memory", {}).get("Average", 0)),
        })
    
    df = pd.DataFrame(recommendations)
    total_savings = df["monthly_savings_usd"].sum()
    print(f"Economie mensuelle potentielle : ${total_savings:,.0f}")
    return df.sort_values("monthly_savings_usd", ascending=False)


def get_underused_resources() -> dict:
    """Identifie les ressources sous-utilisées."""
    ec2 = boto3.client("ec2", region_name="eu-west-1")
    
    # EBS volumes non attachés
    unattached_volumes = ec2.describe_volumes(
        Filters=[{"Name": "status", "Values": ["available"]}]
    )["Volumes"]
    
    # Elastic IPs non utilisées
    unused_eips = [
        eip for eip in ec2.describe_addresses()["Addresses"]
        if "AssociationId" not in eip
    ]
    
    # Load balancers sans targets saines
    elb = boto3.client("elbv2", region_name="eu-west-1")
    empty_lbs = []
    for lb in elb.describe_load_balancers()["LoadBalancers"]:
        tgs = elb.describe_target_groups(LoadBalancerArn=lb["LoadBalancerArn"])["TargetGroups"]
        if not tgs:
            empty_lbs.append(lb["LoadBalancerName"])
    
    return {
        "unattached_ebs": len(unattached_volumes),
        "unused_eips": len(unused_eips),
        "empty_load_balancers": empty_lbs,
    }
```

### Stratégie d'achat — Reserved vs Spot vs On-Demand

```
WORKLOAD TYPE          RECOMMENDATION                  SAVINGS
─────────────────────────────────────────────────────────────
Production (stable)    Reserved 1 an (All Upfront)    ~40%
Production (stable)    Savings Plans 1 an              ~35%
Staging                On-Demand ou RI 1 an No-Upfront ~20%
Dev/Test               Spot Instances + scheduler arrêt ~70%
ML Training            Spot (avec checkpoints)         ~70%
Batch/Analytics        Spot Fleet avec fallback         ~60%
```

```bash
# Activer l'arrêt automatique des instances dev/test (evenings + weekends)
# AWS Instance Scheduler
aws cloudformation deploy \
  --template-file instance-scheduler.yaml \
  --stack-name dev-scheduler \
  --parameter-overrides \
    DefaultTimezone=Europe/Paris \
    Regions=eu-west-1 \
    StartedTags="ScheduleAction=Started" \
    StoppedTags="ScheduleAction=Stopped"

# Économie typique dev : 730h/mois ──► 128h/mois (18% du temps)
```

### Budgets & Alertes — AWS CLI

```bash
# Créer un budget mensuel avec alertes progressives
aws budgets create-budget \
  --account-id 123456789 \
  --budget '{
    "BudgetName": "Monthly-Total-2026",
    "BudgetLimit": {"Amount": "50000", "Unit": "USD"},
    "TimeUnit": "MONTHLY",
    "BudgetType": "COST",
    "CostFilters": {},
    "CostTypes": {
      "IncludeTax": true,
      "IncludeSubscription": true,
      "UseBlended": false
    }
  }' \
  --notifications-with-subscribers '[
    {
      "Notification": {
        "NotificationType": "ACTUAL",
        "ComparisonOperator": "GREATER_THAN",
        "Threshold": 80,
        "ThresholdType": "PERCENTAGE"
      },
      "Subscribers": [{"SubscriptionType": "EMAIL", "Address": "finops@company.com"}]
    },
    {
      "Notification": {
        "NotificationType": "FORECASTED",
        "ComparisonOperator": "GREATER_THAN",
        "Threshold": 100,
        "ThresholdType": "PERCENTAGE"
      },
      "Subscribers": [{"SubscriptionType": "SNS", "Address": "arn:aws:sns:eu-west-1:123456789:finops-alerts"}]
    }
  ]'
```

## Tableau de bord FinOps — KPIs clés

| KPI | Calcul | Objectif |
|-----|--------|---------|
| Cloud Unit Cost | Coût total / unité métier (MAU, requêtes, etc.) | Trend baisse |
| RI Coverage | Coût RI / Coût total on-demand | > 70% |
| Spot Coverage | Coût Spot / Coût total non-RI | > 40% dev/test |
| Waste Rate | Ressources inutilisées / Coût total | < 5% |
| Rightsizing Savings | Economie réalisée / Economie identifiée | > 80% |
| Tagging Coverage | Ressources taguées / Total ressources | > 98% |

## Livrables
- Rapport de rightsizing mensuel (instance par instance, économies potentielles)
- Tagging policy as code + audit de couverture actuelle
- Pipeline Infracost dans CI (estimation automatique sur chaque PR)
- Dashboards AWS Cost Explorer / Grafana avec coûts par équipe/projet
- Recommandations Reserved Instances / Savings Plans
- Automatisation arrêt dev/test hors horaires

## Format de sortie
Précise : cloud provider(s), dépense mensuelle actuelle, décomposition par service/équipe, instances on-demand à analyser, contraintes d'engagement (Reserved 1 ou 3 ans), objectif de réduction (%), outils de visualisation utilisés.
