# Skill — BI Monitoring and Alerting
> Certifications: PL-300 Microsoft · DP-600 Fabric · Tableau Certified Data Analyst

## Objective
Set up proactive KPI monitoring and BI alerting: alert thresholds, automatic subscriptions, anomaly detection — so decision-makers are notified in real time of significant deviations.

## BI alert types

```
TYPE                    TRIGGER                        CHANNEL         LATENCY
──────────────────────  ─────────────────────────────  ──────────────  ─────────────
Fixed threshold        KPI > or < threshold value      Email, Teams    Per refresh
                       e.g. error rate > 2%

Statistical anomaly    Deviation > N standard devs     Email, Webhook  Per refresh
                       vs historical trend

Data freshness         Dataset not refreshed for       Email, Teams    Real-time
                       X hours (SLA violation)

Budget/Target          Budget consumed > 80%           Email, Slack    Nightly refresh
                       Target < 70% mid-period

KPI drift              Change > X% vs previous week     Email, Teams    Weekly refresh
```

## Power BI — Dashboard alerts

```
CONFIGURATION IN POWER BI SERVICE:
  1. Open a dashboard (not a report)
  2. Click a KPI card or gauge
  3. Manage alerts → + Add an alert rule
  4. Configure:
     □ Condition: Above / Below
     □ Threshold: numeric value
     □ Check frequency: 24h / 1h
     □ Notification email: Power BI user

LIMITATIONS:
  - Only on KPI, Gauge, Card visuals
  - Only on Import-mode datasets (not DirectQuery)
  - 1 notification max per hour (avoids spam)
```

## Data Activator (Fabric) — Real-time alerts

```
# Data Activator enables alerts on streaming data
# or on Fabric datasets without a visual-type restriction

CONFIGURATION:
  1. Power BI → Right-click a visual → Set alert
  2. Or via Data Activator directly (Fabric)
  3. Define the condition (threshold, anomaly, state change)
  4. Define the action: Email, Teams, Power Automate flow

# Example: Alert when the weekly churn rate exceeds 3%
Trigger: weekly_churn_rate > 0.03
Action: Send Teams message to #bi-alerts channel
        "⚠️ Churn alert: {weekly_churn_rate:P} this week
         vs 3% target — See the Customer Retention dashboard"
```

## BI monitoring dashboard — Structure

```
PAGE 1 — DATA HEALTH
  □ Refresh status per dataset (✅ OK / ⚠️ Late / ❌ Failed)
  □ Last refresh time per dataset
  □ Refresh success rate over 30 days
  □ Data volume (rows loaded vs expected)

PAGE 2 — DATA QUALITY
  □ Null rate per key column
  □ Detected outliers (> 3σ)
  □ Duplicates on primary keys
  □ Late data (lag vs source)

PAGE 3 — BI PLATFORM USAGE
  □ Weekly active users
  □ Most-viewed reports (Top 10)
  □ Most-used datasets
  □ Average load time per report
```

## Anomaly Detection — Power BI

```
VISUAL: Smart Narrative + Anomaly Detection (time line)
ACTIVATION: Add the line chart → Analytics → Anomaly detection

PARAMETERS:
  Sensitivity: 1 (low) to 100 (very high) — recommended: 85
  Shape: Fills the anomaly band

DAX for manual anomaly detection:
Z-Score Revenue =
DIVIDE(
    [Net Revenue] - [Revenue Average 90d],
    [Revenue StdDev 90d],
    BLANK()
)
// Z-Score > 2 or < -2 = statistical anomaly (95% CI)
```

## Power Automate — Custom alert

```
FLOW: "BI Alert — Weekly Churn"

Trigger: Recurrence (every Monday 9:00 a.m.)

Action 1: Power BI — Run a DAX query
  Dataset: "Certified Finance"
  Query: EVALUATE { [Weekly Churn Rate] }

Action 2: Condition
  If [Weekly Churn Rate] > 0.03

  YES branch:
    Send email to bi-alerts@company.com
    Subject: "⚠️ Churn alert: {WeeklyChurnRate}% this week"
    Body:    "The churn rate of {WeeklyChurnRate}% exceeds the 3% threshold.
              Dashboard: [Power BI link]"

  NO branch: (do nothing)
```

## Deliverables
- Alert configuration on critical KPIs
- BI monitoring dashboard (data health + usage)
- Power Automate flows (custom business alerts)
- Alert matrix (KPI × threshold × owner × channel)
- Data incident runbook (procedure when a refresh fails)
- Documented freshness SLA per dataset

## Output format
Specify: **BI tool** (Power BI, Tableau, Fabric…), **KPIs to monitor** and their alert thresholds, **notification channels** (email, Teams, Slack, webhook), **frequency** (real-time, hourly, daily), **alert owners** (who receives what).
