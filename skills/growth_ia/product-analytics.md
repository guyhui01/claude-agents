# Skill — Product Analytics
> Certifications : Amplitude Analytics Certified (2026), Mixpanel Certified, Google Analytics 4 Certified, Product Analytics Professional (reforge.com)

## Objectif
Instrumenter un produit pour comprendre le comportement utilisateur — définition d'un plan de tracking rigoureux, analyse des funnels de conversion, cohort analysis et courbes de rétention pour orienter les décisions produit.

## Plan de Tracking — Taxonomy des Événements

### Naming Convention & Schéma d'événements

```typescript
// event-tracking.ts — Taxonomy standardisée
// Convention : [Noun]_[Verb] en snake_case

// Objets (Nouns) : page, cta, feature, form, session, user, subscription
// Actions (Verbs) : viewed, clicked, started, completed, failed, submitted

interface TrackingEvent {
  name: string                // Nom de l événement
  properties: Record<string, unknown>  // Propriétés
  user_id?: string            // ID utilisateur (si authentifié)
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

// Types d événements par catégorie
const EVENTS = {
  // Navigation
  PAGE_VIEWED:              "page_viewed",

  // Acquisition
  SIGNUP_STARTED:           "signup_started",
  SIGNUP_COMPLETED:         "signup_completed",
  PLAN_SELECTED:            "plan_selected",

  // Activation (valeur reçue)
  ONBOARDING_STEP_COMPLETED: "onboarding_step_completed",
  FIRST_PROJECT_CREATED:    "first_project_created",
  AHA_MOMENT_REACHED:       "aha_moment_reached",    // Moment aha défini par product

  // Engagement features
  FEATURE_USED:             "feature_used",
  AI_QUERY_SUBMITTED:       "ai_query_submitted",
  REPORT_GENERATED:         "report_generated",
  COLLABORATION_INVITE_SENT: "collaboration_invite_sent",

  // Monétisation
  UPGRADE_CLICKED:          "upgrade_clicked",
  SUBSCRIPTION_STARTED:     "subscription_started",
  SUBSCRIPTION_CANCELLED:   "subscription_cancelled",
  PAYMENT_FAILED:           "payment_failed",
} as const

// Wrapper analytics unifié (Amplitude + Mixpanel + Segment)
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

## Analyse des Funnels

### Funnel d'activation — SQL

```sql
-- Funnel sign-up -> activation (Mixpanel/Amplitude/Snowflake)
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
    -- Taux par étape
    ROUND(100.0 * COUNT(project_at)  / COUNT(*), 1)      AS step1_cvr_pct,
    ROUND(100.0 * COUNT(ai_query_at) / COUNT(project_at), 1) AS step2_cvr_pct,
    ROUND(100.0 * COUNT(aha_at)      / COUNT(ai_query_at), 1) AS step3_cvr_pct,
    -- Temps médian entre étapes
    PERCENTILE_CONT(0.5) WITHIN GROUP (
      ORDER BY EXTRACT(EPOCH FROM project_at - signup_at) / 3600
    ) AS median_hours_to_project
  FROM funnel
  WHERE signup_at IS NOT NULL
)
SELECT * FROM funnel_steps;

-- Segmentation du funnel par source d acquisition
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

## Cohort Analysis & Rétention

### Courbes de rétention — Python

```python
# retention_analysis.py
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def calculate_retention_cohorts(
    events_df: pd.DataFrame,  # Colonnes: user_id, event_date, event_name
    cohort_event: str = "signup_completed",
    retention_event: str = "feature_used",
    periods: int = 12,        # Semaines ou mois
    period_type: str = "week",
) -> pd.DataFrame:
    """Calcule la matrice de rétention par cohorte."""

    # Cohorte = date de signup
    cohorts = (events_df[events_df["event_name"] == cohort_event]
               .groupby("user_id")["event_date"]
               .min()
               .reset_index()
               .rename(columns={"event_date": "cohort_date"}))

    # Activité
    activity = (events_df[events_df["event_name"] == retention_event]
                .groupby("user_id")["event_date"]
                .min()
                .reset_index())

    df = cohorts.merge(activity, on="user_id", how="left")

    # Calcul de la période
    if period_type == "week":
        df["cohort_period"] = df["cohort_date"].dt.to_period("W")
        df["period_number"] = ((df["event_date"] - df["cohort_date"])
                               .dt.days // 7).clip(lower=0)
    else:  # month
        df["cohort_period"] = df["cohort_date"].dt.to_period("M")
        df["period_number"] = ((df["event_date"].dt.year - df["cohort_date"].dt.year) * 12
                               + df["event_date"].dt.month - df["cohort_date"].dt.month)

    # Matrice de rétention
    cohort_counts = df.groupby(["cohort_period", "period_number"])["user_id"].nunique()
    cohort_sizes  = cohorts.groupby(cohorts["cohort_date"].dt.to_period(period_type[0].upper()))["user_id"].nunique()

    retention_matrix = cohort_counts.unstack()
    retention_pct = retention_matrix.divide(cohort_sizes, axis=0) * 100

    return retention_pct.fillna(0).round(1)


def plot_retention_heatmap(retention_df: pd.DataFrame, title: str = "Rétention par cohorte"):
    fig, ax = plt.subplots(figsize=(14, 8))
    sns.heatmap(
        retention_df,
        annot=True, fmt=".0f",
        cmap="YlGn",
        vmin=0, vmax=100,
        ax=ax,
        cbar_kws={"label": "Taux de rétention (%)"},
    )
    ax.set_title(title, pad=20, fontsize=14)
    ax.set_xlabel("Période après inscription")
    ax.set_ylabel("Cohorte d inscription")
    plt.tight_layout()
    return fig
```

### KPIs Product Analytics — Dashboard

```python
# product_kpis.py
def calculate_engagement_metrics(df: pd.DataFrame, date: str) -> dict:
    """Calcule les KPIs produit clés."""
    today_users = df[df["event_date"] == date]["user_id"].nunique()
    week_users  = df[df["event_date"] >= (pd.Timestamp(date) - pd.Timedelta(days=7)).date()]["user_id"].nunique()
    month_users = df[df["event_date"] >= (pd.Timestamp(date) - pd.Timedelta(days=28)).date()]["user_id"].nunique()

    return {
        "DAU": today_users,
        "WAU": week_users,
        "MAU": month_users,
        "DAU_MAU_ratio": round(today_users / month_users, 3) if month_users else 0,  # Stickiness
        # Stickiness : 0.2+ = bon, 0.3+ = excellent
        "stickiness_label": "Excellent" if today_users / max(month_users, 1) > 0.3 else "Bon" if today_users / max(month_users, 1) > 0.2 else "A améliorer",
    }
```

## Livrables
- Plan de tracking complet (Amplitude/Mixpanel) avec taxonomy documentée
- Dashboard produit : DAU/WAU/MAU, funnel activation, rétention
- Rapport de cohort analysis mensuel
- Alertes automatiques sur métriques critiques (churn, activation rate)
- Guide de self-serve analytics pour l'équipe produit
- Benchmark secteur pour les KPIs clés

## Format de sortie
Précise : type de produit (B2B SaaS/B2C/marketplace), stack analytics actuelle (GA4/Mixpanel/Amplitude/autre), warehouse disponible (Snowflake/BigQuery/Redshift), outil de BI (Looker/Metabase/Tableau), objectif principal (activation/retention/monetisation), accès aux événements existants ou setup from scratch.
