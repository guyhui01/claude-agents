# Skill — FinOps & Cloud Cost Optimization
> Certifications: FinOps Certified Practitioner (FinOps Foundation 2026), AWS Cost Optimization, Google Cloud FinOps, Microsoft Azure Cost Management

## Objective
Cut cloud costs by 20-40% without impacting performance — through rightsizing, optimized purchasing (Reserved/Spot/Savings Plans), a rigorous tagging strategy and proactive budgets/alerts.

## FinOps frameworks & tools

### FinOps cycle — FinOps Foundation

```
INFORM ──────────► OPTIMIZE ──────────► OPERATE
   │                   │                    │
   ▼                   ▼                    ▼
Visibility          Rightsizing          Automation
Cost allocation     Reserved Instances   Budgets & alerts
Tagging             Spot/Preemptible     Weekly report
Dashboards          Architecture review  Team accountability
```

### Tagging Strategy — Mandatory for Cost Allocation

```hcl
# tags_policy.tf — mandatory tags by convention
locals {
  mandatory_tags = {
    Environment   = var.environment          # prod / staging / dev
    Team          = var.team                 # platform / data / product
    Project       = var.project_name         # project name
    CostCenter    = var.cost_center          # accounting code
    Owner         = var.owner_email          # owner
    ManagedBy     = "terraform"
    CreatedDate   = formatdate("YYYY-MM-DD", timestamp())
  }
}

# Enforcement via AWS Config Rule or GCP Organization Policy
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

### Infracost — IaC cost estimation

```bash
# Install Infracost
brew install infracost
infracost auth login

# Estimate before apply
infracost breakdown --path ./infra/environments/prod \
  --terraform-var-file prod.tfvars \
  --format table

# Diff between two branches (used in CI)
infracost diff \
  --path ./infra \
  --compare-to main \
  --format json \
  --out-file infracost-diff.json

# HTML report
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

### Rightsizing — AWS analysis scripts

```python
# rightsizing_analysis.py
import boto3
import pandas as pd
from datetime import datetime, timedelta

def get_ec2_rightsizing_recommendations() -> pd.DataFrame:
    """Retrieve AWS Cost Explorer recommendations."""
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
    print(f"Potential monthly savings: ${total_savings:,.0f}")
    return df.sort_values("monthly_savings_usd", ascending=False)


def get_underused_resources() -> dict:
    """Identify underused resources."""
    ec2 = boto3.client("ec2", region_name="eu-west-1")

    # Unattached EBS volumes
    unattached_volumes = ec2.describe_volumes(
        Filters=[{"Name": "status", "Values": ["available"]}]
    )["Volumes"]

    # Unused Elastic IPs
    unused_eips = [
        eip for eip in ec2.describe_addresses()["Addresses"]
        if "AssociationId" not in eip
    ]

    # Load balancers with no healthy targets
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

### Purchasing strategy — Reserved vs Spot vs On-Demand

```
WORKLOAD TYPE          RECOMMENDATION                  SAVINGS
─────────────────────────────────────────────────────────────
Production (stable)    Reserved 1 year (All Upfront)  ~40%
Production (stable)    Savings Plans 1 year            ~35%
Staging                On-Demand or RI 1 year No-Upfront ~20%
Dev/Test               Spot Instances + shutdown scheduler ~70%
ML Training            Spot (with checkpoints)         ~70%
Batch/Analytics        Spot Fleet with fallback         ~60%
```

```bash
# Enable automatic shutdown of dev/test instances (evenings + weekends)
# AWS Instance Scheduler
aws cloudformation deploy \
  --template-file instance-scheduler.yaml \
  --stack-name dev-scheduler \
  --parameter-overrides \
    DefaultTimezone=Europe/Paris \
    Regions=eu-west-1 \
    StartedTags="ScheduleAction=Started" \
    StoppedTags="ScheduleAction=Stopped"

# Typical dev savings: 730h/month ──► 128h/month (18% of the time)
```

### Budgets & Alerts — AWS CLI

```bash
# Create a monthly budget with progressive alerts
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

## FinOps dashboard — Key KPIs

| KPI | Calculation | Target |
|-----|--------|---------|
| Cloud Unit Cost | Total cost / business unit (MAU, requests, etc.) | Downward trend |
| RI Coverage | RI cost / total on-demand cost | > 70% |
| Spot Coverage | Spot cost / total non-RI cost | > 40% dev/test |
| Waste Rate | Unused resources / total cost | < 5% |
| Rightsizing Savings | Savings achieved / savings identified | > 80% |
| Tagging Coverage | Tagged resources / total resources | > 98% |

## Deliverables
- Monthly rightsizing report (instance by instance, potential savings)
- Tagging policy as code + current coverage audit
- Infracost pipeline in CI (automatic estimate on every PR)
- AWS Cost Explorer / Grafana dashboards with costs per team/project
- Reserved Instances / Savings Plans recommendations
- Off-hours dev/test shutdown automation

## Output format
Specify: cloud provider(s), current monthly spend, breakdown by service/team, on-demand instances to analyze, commitment constraints (Reserved 1 or 3 years), reduction target (%), visualization tools used.
