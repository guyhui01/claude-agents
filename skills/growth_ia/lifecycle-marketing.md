# Skill — Lifecycle Marketing & Marketing Automation
> Certifications: HubSpot Marketing Automation Certified (2026), Braze Certified Practitioner, Klaviyo Partner, Customer Success Alliance

## Objective
Design complete lifecycle journeys — RFM segmentation, onboarding/activation/re-engagement email sequences, lead scoring, and NPS measurement — to maximize activation, retention, and customer value.

## RFM Segmentation

### RFM Model — Calculation and Segmentation

```python
# rfm_segmentation.py
import pandas as pd
import numpy as np
from datetime import datetime

def calculate_rfm(
    orders_df: pd.DataFrame,     # Columns: customer_id, order_date, order_value
    analysis_date: datetime = None,
    quantiles: int = 5,
) -> pd.DataFrame:
    """
    Compute RFM scores and segment customers.

    R (Recency)   : Number of days since the last purchase (lower = better)
    F (Frequency) : Number of orders over the period
    M (Monetary)  : Total amount spent
    """
    if analysis_date is None:
        analysis_date = datetime.now()

    rfm = orders_df.groupby("customer_id").agg(
        recency  = ("order_date",  lambda x: (analysis_date - x.max()).days),
        frequency= ("order_id",    "count"),
        monetary = ("order_value", "sum"),
    ).reset_index()

    # Scoring 1-5 per quintile
    # Recency: inverted (small = best = score 5)
    rfm["r_score"] = pd.qcut(rfm["recency"],  q=quantiles, labels=range(5, 0, -1)).astype(int)
    rfm["f_score"] = pd.qcut(rfm["frequency"], q=quantiles, labels=range(1, 6)).astype(int)
    rfm["m_score"] = pd.qcut(rfm["monetary"],  q=quantiles, labels=range(1, 6)).astype(int)
    rfm["rfm_score"] = rfm["r_score"].astype(str) + rfm["f_score"].astype(str) + rfm["m_score"].astype(str)

    # Segmentation
    def segment(row):
        r, f, m = row["r_score"], row["f_score"], row["m_score"]
        if r >= 4 and f >= 4 and m >= 4: return "Champions"
        elif r >= 3 and f >= 3:           return "Loyal Customers"
        elif r >= 4 and f <= 2:           return "New Customers"
        elif r >= 3 and f <= 2:           return "Potential Loyalists"
        elif r == 2 and f >= 3:           return "At Risk"
        elif r <= 2 and f >= 4:           return "Cant Lose Them"
        elif r <= 2 and f <= 2:           return "Lost"
        else:                             return "Hibernating"

    rfm["segment"] = rfm.apply(segment, axis=1)
    return rfm


def rfm_action_map() -> dict:
    return {
        "Champions":          "Reward, advocates, premium upsell",
        "Loyal Customers":    "Loyalty program, early access to new features",
        "New Customers":      "Accelerated onboarding, first purchase follow-up",
        "Potential Loyalists":"Email nurturing, 2nd purchase incentive",
        "At Risk":            "Re-engagement campaign, personalized offer",
        "Cant Lose Them":     "Urgent win-back, direct sales call",
        "Lost":               "Breakup email + last effort, or removal",
        "Hibernating":        "Light newsletter, occasional promo",
    }
```

## Email Sequences — Automation

### Onboarding Email (B2B SaaS) — YAML workflow

```yaml
# onboarding_sequence.yaml
trigger: signup_completed
goal: first_value_reached (aha_moment)
delay_default: 24h

emails:
  - id: welcome
    delay: 0h
    subject: "Welcome to [Product] — here's how to get started"
    goal_check: none
    content: |
      - Link to the dashboard
      - 3 actions to get your first value
      - Link to the getting-started video (2 min)
      - Customer Success Calendly if Pro+ plan

  - id: activation_nudge
    delay: 24h
    send_if: aha_moment NOT reached
    subject: "Have you tried [key feature]?"
    content: |
      - Focus on a single feature (key feature)
      - Animated screenshot (GIF)
      - CTA: "Try it now"

  - id: social_proof
    delay: 72h
    send_if: aha_moment NOT reached
    subject: "How [Similar client] achieved [result] in 1 week"
    content: |
      - Customer testimonial from the same sector
      - Concrete quantified result
      - CTA: "Reproduce this result"

  - id: urgency_trial
    delay: 5d
    send_if: aha_moment NOT reached AND trial_ends_in < 14d
    subject: "You have [X] trial days left — don't lose your data"
    content: |
      - Visual countdown
      - Summary of what they've configured
      - Upgrade CTA with early-bird discount

  - id: trial_ending
    delay: trial_end - 3d
    send_if: not converted
    subject: "Your trial ends in 3 days"
    content: |
      - What they lose at the end of the trial
      - Plan options (with Freemium if available)
      - Conversion FAQ
```

### Re-engagement Sequence

```python
# reengagement_automation.py
import anthropic
from datetime import datetime, timedelta

def generate_personalized_reengagement(
    user: dict,
    last_features_used: list[str],
    days_inactive: int,
) -> str:
    """Generate a personalized re-engagement email with AI."""
    client = anthropic.Anthropic()

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": f"""Generate a short re-engagement email (150 words max) for:
- First name: {user['first_name']}
- Sector: {user['industry']}
- Last features used: {', '.join(last_features_used)}
- Inactive for: {days_inactive} days
- Current plan: {user['plan']}

Tone: friendly, direct, value-centered. No guilt-tripping tone.
Include: 1 insight about their sector + 1 clear CTA.
Format: Subject + Email body + CTA (button)"""
        }]
    )
    return response.content[0].text
```

## Lead Scoring

### Hybrid Scoring Model

```python
# lead_scoring.py
from dataclasses import dataclass

@dataclass
class Lead:
    # Demographic (Fit Score)
    company_size: int
    industry: str
    role: str
    country: str
    # Behavioral (Engagement Score)
    pages_visited: int
    content_downloads: int
    email_opens: int
    email_clicks: int
    demo_requested: bool
    pricing_page_visited: bool
    trial_started: bool

DEMO_SCORING_RULES = {
    # Fit Score (max 50 points)
    "company_size_100_500":   15,
    "company_size_500_plus":  20,
    "industry_saas_tech":     15,
    "role_c_level":           15,
    "role_vp_director":       10,
    # Engagement Score (max 50 points)
    "pricing_page_visited":   15,
    "demo_requested":         25,
    "trial_started":          20,
    "content_download":        5,
    "email_click":             2,
}

def calculate_lead_score(lead: Lead) -> dict:
    score = 0
    breakdown = []

    if lead.company_size >= 500:
        score += 20; breakdown.append("Company 500+ (+20)")
    elif lead.company_size >= 100:
        score += 15; breakdown.append("Company 100-500 (+15)")

    if lead.pricing_page_visited:
        score += 15; breakdown.append("Pricing page visited (+15)")
    if lead.demo_requested:
        score += 25; breakdown.append("Demo requested (+25)")
    if lead.trial_started:
        score += 20; breakdown.append("Trial started (+20)")
    score += min(lead.email_clicks * 2, 10)

    grade = "A" if score >= 70 else "B" if score >= 50 else "C" if score >= 30 else "D"
    mql = score >= 50
    sql = score >= 70 or lead.demo_requested

    return {
        "score": score,
        "grade": grade,
        "is_mql": mql,
        "is_sql": sql,
        "breakdown": breakdown,
        "recommended_action": "Hand off to sales" if sql else "Nurturing automation" if mql else "Content marketing",
    }
```

## Deliverables
- RFM model with segmentation and an action plan per segment
- Complete email sequences (onboarding, activation, re-engagement)
- Lead scoring model (fit + behavioral) calibrated on the data
- Lifecycle dashboard (activation rate, retention, LTV per cohort)
- Braze/Klaviyo/HubSpot configuration with automated flows
- Quarterly NPS report with verbatim analysis

## Output format
Specify: business type (B2B SaaS/B2C/e-commerce), automation tool (HubSpot/Braze/Klaviyo/Mailchimp), CRM used (Salesforce/HubSpot), available data (purchase history, product events), main objective (activation/retention/churn), contact volume, priority segment(s).

## Sources
- **RFM** — historical direct-marketing model; formalized by **Arthur Hughes**, *Strategic Database Marketing* (1994) and **Bult & Wansbeek** (*Marketing Science*, 1995)
- **Fred Reichheld** — *The One Number You Need to Grow* (Harvard Business Review, Dec. 2003) — Net Promoter Score (NPS)
- **MQL / SQL** — qualification model popularized by SiriusDecisions / Forrester (Demand Waterfall) — the point thresholds must be **calibrated** on real conversion data
- **HubSpot** — *Lifecycle stages* & *Flywheel* — official documentation on onboarding / nurturing / retention

## Anti-patterns
- **Email fatigue**: sending with no frequency cap or marketing-pressure management → unsubscribes and spam complaints.
- **Uncalibrated lead scoring**: weights set by intuition, never re-weighted on observed conversion rates.
- **Segmenting without action**: producing RFM segments with no differentiated activation plan per segment.
- **NPS with no verbatim**: tracking the score without analyzing comments → no corrective action.
- **Generic onboarding**: the same sequence for everyone, with no trigger tied to the "aha moment."

## See also
- [ia-personalisation.md](ia-personalisation.md) — personalize messages and scoring with ML
- [attribution-ltv-cac.md](attribution-ltv-cac.md) — LTV per cohort and retention's impact on value
- [automation-growth.md](automation-growth.md) — automate lifecycle sequences
- [`../redacteur_ia/newsletter-email.md`](../redacteur_ia/newsletter-email.md) — email writing (subjects, CTAs, deliverability)
