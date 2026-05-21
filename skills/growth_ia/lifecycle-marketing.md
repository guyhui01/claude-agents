# Skill — Lifecycle Marketing & Marketing Automation
> Certifications : HubSpot Marketing Automation Certified (2026), Braze Certified Practitioner, Klaviyo Partner, Customer Success Alliance

## Objectif
Concevoir des parcours lifecycle complets — segmentation RFM, séquences email d'onboarding/activation/réengagement, scoring de leads et mesure du NPS — pour maximiser l'activation, la rétention et la valeur client.

## Segmentation RFM

### Modèle RFM — Calcul et Segmentation

```python
# rfm_segmentation.py
import pandas as pd
import numpy as np
from datetime import datetime

def calculate_rfm(
    orders_df: pd.DataFrame,     # Colonnes: customer_id, order_date, order_value
    analysis_date: datetime = None,
    quantiles: int = 5,
) -> pd.DataFrame:
    """
    Calcule les scores RFM et segmente les clients.

    R (Recency)   : Nombre de jours depuis le dernier achat (plus bas = mieux)
    F (Frequency) : Nombre de commandes sur la période
    M (Monetary)  : Valeur totale dépensée
    """
    if analysis_date is None:
        analysis_date = datetime.now()

    rfm = orders_df.groupby("customer_id").agg(
        recency  = ("order_date",  lambda x: (analysis_date - x.max()).days),
        frequency= ("order_id",    "count"),
        monetary = ("order_value", "sum"),
    ).reset_index()

    # Scoring 1-5 par quintile
    # Recency : inversé (petit = meilleur = score 5)
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
        "Champions":          "Récompenser, ambassadeurs, upsell premium",
        "Loyal Customers":    "Programme fidélité, early access nouveautés",
        "New Customers":      "Onboarding accéléré, first purchase follow-up",
        "Potential Loyalists":"Email nurturing, incitation 2ème achat",
        "At Risk":            "Campagne réengagement, offre personnalisée",
        "Cant Lose Them":     "Win-back urgent, appel commercial direct",
        "Lost":               "Email de breakup + dernier effort, ou suppression",
        "Hibernating":        "Newsletter légère, promo ponctuelle",
    }
```

## Séquences Email — Automation

### Onboarding Email (SaaS B2B) — YAML workflow

```yaml
# onboarding_sequence.yaml
trigger: signup_completed
goal: first_value_reached (aha_moment)
delay_default: 24h

emails:
  - id: welcome
    delay: 0h
    subject: "Bienvenue sur [Produit] — voici comment démarrer"
    goal_check: none
    content: |
      - Lien vers le tableau de bord
      - 3 actions pour obtenir votre première valeur
      - Lien vers la vidéo de démarrage (2 min)
      - Calendly du Customer Success si plan Pro+

  - id: activation_nudge
    delay: 24h
    send_if: aha_moment NOT reached
    subject: "Avez-vous essayé [feature clé] ?"
    content: |
      - Focus sur 1 seule fonctionnalité (feature clé)
      - Capture d écran animée (GIF)
      - CTA : "Essayer maintenant"

  - id: social_proof
    delay: 72h
    send_if: aha_moment NOT reached
    subject: "Comment [Client similaire] a obtenu [résultat] en 1 semaine"
    content: |
      - Témoignage client du même secteur
      - Résultat concret chiffré
      - CTA : "Reproduire ce résultat"

  - id: urgency_trial
    delay: 5d
    send_if: aha_moment NOT reached AND trial_ends_in < 14d
    subject: "Il vous reste [X] jours d essai — ne perdez pas vos données"
    content: |
      - Compte à rebours visuel
      - Récapitulatif de ce qu ils ont configuré
      - CTA upgrade avec remise early-bird

  - id: trial_ending
    delay: trial_end - 3d
    send_if: not converted
    subject: "Votre essai se termine dans 3 jours"
    content: |
      - Ce qu ils perdent à la fin de l essai
      - Options de plan (avec Freemium si disponible)
      - FAQ sur la conversion
```

### Séquence de Réengagement

```python
# reengagement_automation.py
import anthropic
from datetime import datetime, timedelta

def generate_personalized_reengagement(
    user: dict,
    last_features_used: list[str],
    days_inactive: int,
) -> str:
    """Génère un email de réengagement personnalisé avec IA."""
    client = anthropic.Anthropic()

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": f"""Génère un email de réengagement court (150 mots max) pour:
- Prénom: {user['first_name']}
- Secteur: {user['industry']}
- Dernières features utilisées: {', '.join(last_features_used)}
- Inactif depuis: {days_inactive} jours
- Plan actuel: {user['plan']}

Ton : amical, direct, centré sur la valeur. Pas de ton culpabilisant.
Inclure : 1 insight sur leur secteur + 1 CTA clair.
Format : Objet + Corps email + CTA (bouton)"""
        }]
    )
    return response.content[0].text
```

## Lead Scoring

### Modèle de Scoring Hybride

```python
# lead_scoring.py
from dataclasses import dataclass

@dataclass
class Lead:
    # Démographique (Fit Score)
    company_size: int
    industry: str
    role: str
    country: str
    # Comportemental (Engagement Score)
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
        score += 20; breakdown.append("Entreprise 500+ (+20)")
    elif lead.company_size >= 100:
        score += 15; breakdown.append("Entreprise 100-500 (+15)")

    if lead.pricing_page_visited:
        score += 15; breakdown.append("Page pricing visitée (+15)")
    if lead.demo_requested:
        score += 25; breakdown.append("Démo demandée (+25)")
    if lead.trial_started:
        score += 20; breakdown.append("Essai démarré (+20)")
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
        "recommended_action": "Passer au commercial" if sql else "Nurturing automation" if mql else "Content marketing",
    }
```

## Livrables
- Modèle RFM avec segmentation et plan d'action par segment
- Séquences email complètes (onboarding, activation, réengagement)
- Modèle de lead scoring (fit + behavioral) calibré sur les données
- Dashboard lifecycle (activation rate, rétention, LTV par cohorte)
- Configuration Braze/Klaviyo/HubSpot avec flows automatisés
- Rapport NPS trimestriel avec analyse verbatim

## Format de sortie
Précise : type de business (B2B SaaS/B2C/e-commerce), outil automation (HubSpot/Braze/Klaviyo/Mailchimp), CRM utilisé (Salesforce/HubSpot), données disponibles (historique achats, events produit), objectif principal (activation/retention/churn), volume de contacts, segment(s) prioritaire(s).
