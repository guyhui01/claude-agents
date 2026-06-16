# Skill — Product Analytics
> Certifications: Amplitude Analytics Certified (2026), Mixpanel Certified, Google Analytics 4 Certified, Product Analytics Professional (reforge.com)

## Objective
Instrument a product to understand user behavior — defining a rigorous tracking plan, conversion funnel analysis, cohort analysis, and retention curves to guide product decisions.

## Tracking Plan — Event Taxonomy

### Naming Convention & Event Schema

```typescript
// event-tracking.ts — Standardized taxonomy
// Convention: [Noun]_[Verb] in snake_case

// Objects (Nouns): page, cta, feature, form, session, user, subscription
// Actions (Verbs): viewed, clicked, started, completed, failed, submitted

interface TrackingEvent {
  name: string                // Event name
  properties: Record<string, unknown>  // Properties
  user_id?: string            // User ID (if authenticated)
  anonymous_id: string        // Cookie / device ID
  timestamp: string           // ISO 8601
  context: {
    session_id: string
    page_url: string
    referrer: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

// Event types by category
const EVENTS = {
  // Navigation
  PAGE_VIEWED:              "page_viewed",

  // Acquisition
  SIGNUP_STARTED:           "signup_started",
  SIGNUP_COMPLETED:         "signup_completed",
  PLAN_SELECTED:            "plan_selected",

  // Activation (value received)
  ONBOARDING_STEP_COMPLETED: "onboarding_step_completed",
  FIRST_PROJECT_CREATED:    "first_project_created",
  AHA_MOMENT_REACHED:       "aha_moment_reached",    // Aha moment defined by product

  // Engagement features
  FEATURE_USED:             "feature_used",
  AI_QUERY_SUBMITTED:       "ai_query_submitted",
  REPORT_GENERATED:         "report_generated",
  COLLABORATION_INVITE_SENT: "collaboration_invite_sent",

  // Monetization
  UPGRADE_CLICKED:          "upgrade_clicked",
  SUBSCRIPTION_STARTED:     "subscription_started",
  SUBSCRIPTION_CANCELLED:   "subscription_cancelled",
  PAYMENT_FAILED:           "payment_failed",
} as const

// Unified analytics wrapper (Amplitude + Mixpanel + Segment)
class Analytics {
  private amplitude: AmplitudeClient
  private mixpanel: MixpanelClient

  track(event: keyof typeof EVENTS, properties: Record<string, unknown>) {
    const enriched = {
      ...properties,
      app_version: process.env.NEXT_PUBLIC_VERSION,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    }
    this.amplitude.logEvent(EVENTS[event], enriched)
    this.mixpanel.track(EVENTS[event], enriched)
    console.debug("[Analytics]", EVENTS[event], enriched)
  }

  identify(userId: string, traits: Record<string, unknown>) {
    this.amplitude.setUserId(userId)
    this.amplitude.setUserProperties(traits)
    this.mixpanel.identify(userId)
    this.mixpanel.people.set(traits)
  }
}
```

## Funnel Analysis

### Activation funnel — SQL

```sql
-- Sign-up -> activation funnel (Mixpanel/Amplitude/Snowflake)
WITH funnel AS (
  SELECT
    user_id,
    MIN(CASE WHEN event_name = 'signup_completed'       THEN timestamp END) AS signup_at,
    MIN(CASE WHEN event_name = 'first_project_created'  THEN timestamp END) AS project_at,
    MIN(CASE WHEN event_name = 'ai_query_submitted'     THEN timestamp END) AS ai_query_at,
    MIN(CASE WHEN event_name = 'aha_moment_reached'     THEN timestamp END) AS aha_at
  FROM events
  WHERE timestamp >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY user_id
),
funnel_steps AS (
  SELECT
    COUNT(*)                                              AS signups,
    COUNT(project_at)                                     AS created_project,
    COUNT(ai_query_at)                                    AS submitted_query,
    COUNT(aha_at)                                         AS reached_aha,
    -- Rate per step
    ROUND(100.0 * COUNT(project_at)  / COUNT(*), 1)      AS step1_cvr_pct,
    ROUND(100.0 * COUNT(ai_query_at) / COUNT(project_at), 1) AS step2_cvr_pct,
    ROUND(100.0 * COUNT(aha_at)      / COUNT(ai_query_at), 1) AS step3_cvr_pct,
    -- Median time between steps
    PERCENTILE_CONT(0.5) WITHIN GROUP (
      ORDER BY EXTRACT(EPOCH FROM project_at - signup_at) / 3600
    ) AS median_hours_to_project
  FROM funnel
  WHERE signup_at IS NOT NULL
)
SELECT * FROM funnel_steps;

-- Funnel segmentation by acquisition source
SELECT
  u.acquisition_source,
  COUNT(DISTINCT f.user_id)                              AS signups,
  ROUND(100.0 * COUNT(f.aha_at) / COUNT(DISTINCT f.user_id), 1) AS overall_activation_rate
FROM funnel f
JOIN users u ON f.user_id = u.id
WHERE f.signup_at IS NOT NULL
GROUP BY u.acquisition_source
ORDER BY overall_activation_rate DESC;
```

## Cohort Analysis & Retention

### Retention curves — Python

```python
# retention_analysis.py
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def calculate_retention_cohorts(
    events_df: pd.DataFrame,  # Columns: user_id, event_date, event_name
    cohort_event: str = "signup_completed",
    retention_event: str = "feature_used",
    periods: int = 12,        # Weeks or months
    period_type: str = "week",
) -> pd.DataFrame:
    """Compute the retention matrix per cohort."""

    # Cohort = signup date
    cohorts = (events_df[events_df["event_name"] == cohort_event]
               .groupby("user_id")["event_date"]
               .min()
               .reset_index()
               .rename(columns={"event_date": "cohort_date"}))

    # Activity
    activity = (events_df[events_df["event_name"] == retention_event]
                .groupby("user_id")["event_date"]
                .min()
                .reset_index())

    df = cohorts.merge(activity, on="user_id", how="left")

    # Period calculation
    if period_type == "week":
        df["cohort_period"] = df["cohort_date"].dt.to_period("W")
        df["period_number"] = ((df["event_date"] - df["cohort_date"])
                               .dt.days // 7).clip(lower=0)
    else:  # month
        df["cohort_period"] = df["cohort_date"].dt.to_period("M")
        df["period_number"] = ((df["event_date"].dt.year - df["cohort_date"].dt.year) * 12
                               + df["event_date"].dt.month - df["cohort_date"].dt.month)

    # Retention matrix
    cohort_counts = df.groupby(["cohort_period", "period_number"])["user_id"].nunique()
    cohort_sizes  = cohorts.groupby(cohorts["cohort_date"].dt.to_period(period_type[0].upper()))["user_id"].nunique()

    retention_matrix = cohort_counts.unstack()
    retention_pct = retention_matrix.divide(cohort_sizes, axis=0) * 100

    return retention_pct.fillna(0).round(1)


def plot_retention_heatmap(retention_df: pd.DataFrame, title: str = "Cohort retention"):
    fig, ax = plt.subplots(figsize=(14, 8))
    sns.heatmap(
        retention_df,
        annot=True, fmt=".0f",
        cmap="YlGn",
        vmin=0, vmax=100,
        ax=ax,
        cbar_kws={"label": "Retention rate (%)"},
    )
    ax.set_title(title, pad=20, fontsize=14)
    ax.set_xlabel("Period after signup")
    ax.set_ylabel("Signup cohort")
    plt.tight_layout()
    return fig
```

### Product Analytics KPIs — Dashboard

```python
# product_kpis.py
def calculate_engagement_metrics(df: pd.DataFrame, date: str) -> dict:
    """Compute the key product KPIs."""
    today_users = df[df["event_date"] == date]["user_id"].nunique()
    week_users  = df[df["event_date"] >= (pd.Timestamp(date) - pd.Timedelta(days=7)).date()]["user_id"].nunique()
    month_users = df[df["event_date"] >= (pd.Timestamp(date) - pd.Timedelta(days=28)).date()]["user_id"].nunique()

    return {
        "DAU": today_users,
        "WAU": week_users,
        "MAU": month_users,
        "DAU_MAU_ratio": round(today_users / month_users, 3) if month_users else 0,  # Stickiness
        # Stickiness: 0.2+ = good, 0.3+ = excellent
        "stickiness_label": "Excellent" if today_users / max(month_users, 1) > 0.3 else "Good" if today_users / max(month_users, 1) > 0.2 else "Needs improvement",
    }
```

## Deliverables
- Complete tracking plan (Amplitude/Mixpanel) with documented taxonomy
- Product dashboard: DAU/WAU/MAU, activation funnel, retention
- Monthly cohort analysis report
- Automatic alerts on critical metrics (churn, activation rate)
- Self-serve analytics guide for the product team
- Sector benchmark for key KPIs

## Output format
Specify: product type (B2B SaaS/B2C/marketplace), current analytics stack (GA4/Mixpanel/Amplitude/other), available warehouse (Snowflake/BigQuery/Redshift), BI tool (Looker/Metabase/Tableau), main objective (activation/retention/monetization), access to existing events or setup from scratch.

## Sources
- **Dave McClure** — *Startup Metrics for Pirates (AARRR)*, 2007 (Ignite Seattle / 500 Startups) — Acquisition→Activation→Retention→Referral→Revenue funnel
- **Sean Ellis** (~2010) — *North Star Metric* / *One Metric That Matters*; framework codified by **Amplitude** (*The North Star Playbook*, 2017+)
- **Amplitude / Mixpanel** — official documentation: tracking plan (event taxonomy), funnels, cohorts, retention curves
- **DAU/MAU Stickiness**: ratio popularized by Mixpanel/Amplitude — the thresholds (≈0.2 "good" / ≈0.3 "excellent") are **orders of magnitude** varying by product type, to validate per cohort

## Anti-patterns
- **Vanity metrics**: tracking cumulative totals (signups, page views) instead of cohort-actionable metrics.
- **Tracking with no plan**: event sprawl, inconsistent naming → unusable data (define the taxonomy BEFORE instrumenting).
- **No explicit activation / "aha moment" definition**: an unmeasurable activation funnel.
- **North Star = revenue**: choosing a lagging indicator rather than a leading proxy of customer value.
- **Cohorts too short**: concluding on retention before having enough time perspective.

## See also
- [growth-frameworks.md](growth-frameworks.md) — AARRR, North Star, and the metrics decomposition tree
- [attribution-ltv-cac.md](attribution-ltv-cac.md) — from funnel to economic value (LTV/CAC)
- [experimentation-ab-testing.md](experimentation-ab-testing.md) — test the levers identified by the analysis
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — link North Star and product vision (PO side)
