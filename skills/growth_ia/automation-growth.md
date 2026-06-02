# Skill — Automatisation Growth avec IA
> Certifications : n8n Certified Expert (2026), Make.com Solution Partner, Clay Certified Expert, HubSpot Operations Certified

## Objectif
Automatiser les workflows growth — enrichissement de données, séquences outbound IA, scraping éthique et scoring de leads — avec n8n, Make, Clay et les APIs LLM pour démultiplier l'efficacité commerciale et marketing.

## n8n — Workflows d'Automatisation

### Workflow Enrichissement + Scoring Automatique

```yaml
# n8n workflow : inbound lead enrichment (JSON export)
name: "Inbound Lead Enrichment & Scoring"
trigger:
  type: webhook
  path: /leads/new
  method: POST

nodes:
  - id: receive_lead
    type: Webhook
    parameters:
      path: /leads/new

  - id: enrich_clearbit
    type: HTTP Request
    parameters:
      url: "https://company.clearbit.com/v2/companies/find"
      method: GET
      authentication: Bearer
      qs:
        domain: "{{$json['email'].split('@')[1]}}"

  - id: score_with_claude
    type: HTTP Request
    parameters:
      url: https://api.anthropic.com/v1/messages
      method: POST
      headers:
        x-api-key: "{{$credentials.anthropicApiKey}}"
        anthropic-version: "2023-06-01"
      body:
        model: claude-haiku-4-5
        max_tokens: 300
        messages:
          - role: user
            content: |
              Score ce lead de 0 à 100 pour un SaaS B2B IA (ICP : tech company 50-500 employees).
              Données : {{JSON.stringify($json)}}
              Réponds en JSON : {"score": X, "grade": "A/B/C/D", "reasons": ["...", "..."], "recommended_action": "..."}

  - id: route_by_score
    type: Switch
    conditions:
      - value: "{{$json['score']}}"
        operation: largerEqual
        value2: 70
        output: HIGH_PRIORITY
      - value: "{{$json['score']}}"
        operation: largerEqual
        value2: 40
        output: MEDIUM_PRIORITY
      - output: LOW_PRIORITY

  - id: create_hubspot_contact
    type: HubSpot
    parameters:
      operation: createContact
      fields:
        email: "{{$node.receive_lead.json['email']}}"
        firstname: "{{$node.receive_lead.json['first_name']}}"
        lead_score: "{{$node.score_with_claude.json['score']}}"
        lead_grade: "{{$node.score_with_claude.json['grade']}}"
        enriched_company: "{{$node.enrich_clearbit.json['name']}}"
        enriched_employees: "{{$node.enrich_clearbit.json['metrics']['employees']}}"

  - id: notify_sales_slack
    type: Slack
    conditions:
      runIf: score >= 70
    parameters:
      channel: "#sales-hot-leads"
      message: |
        *Nouveau lead A+* : {{$json['first_name']}} {{$json['last_name']}}
        Entreprise : {{$node.enrich_clearbit.json['name']}} ({{$node.enrich_clearbit.json['metrics']['employees']}} employés)
        Score : {{$node.score_with_claude.json['score']}}/100
        Raisons : {{$node.score_with_claude.json['reasons'].join(', ')}}
        Action : {{$node.score_with_claude.json['recommended_action']}}
```

### Workflow Veille Concurrentielle Automatique

```python
# n8n_competitive_intelligence.py
# Déclenché chaque semaine — surveille les concurrents

import anthropic
import httpx
from datetime import datetime

def monitor_competitor(competitor_name: str, domain: str) -> dict:
    """Scrape et analyse les changements d un concurrent."""
    client = anthropic.Anthropic()

    # Récupération de la page pricing
    resp = httpx.get(f"https://{domain}/pricing", timeout=15)
    page_text = resp.text[:5000]  # Limiter

    # Analyse IA des changements
    analysis = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=600,
        messages=[{
            "role": "user",
            "content": f"""Analyse cette page pricing de {competitor_name} et extrait :
1. Plans disponibles avec prix
2. Features différenciatrices vs la semaine dernière (compare avec : {{previous_snapshot}})
3. Changements de positionnement notables
4. Opportunités pour notre produit

Page : {page_text}

Format JSON : {{plans: [...], changes: [...], opportunities: [...]}}"""
        }]
    )

    return {
        "competitor": competitor_name,
        "date": datetime.now().isoformat(),
        "analysis": analysis.content[0].text,
        "url": f"https://{domain}/pricing",
    }
```

## Clay — Enrichissement & Outbound IA

### Workflow Clay pour Outbound Personnalisé

```
WORKFLOW CLAY — SEQUENCE OUTBOUND B2B
─────────────────────────────────────────────────────────────

1. SOURCE D'ENTRÉE
   LinkedIn Sales Navigator → Export CSV → Import Clay Table

2. ENRICHISSEMENT EN CASCADE
   Colonne 1 : Clearbit Enrichment (taille entreprise, secteur, tech stack)
   Colonne 2 : LinkedIn Recent Posts (3 derniers posts de la personne)
   Colonne 3 : Company News (Crunchbase — levées, acquisitions 90j)
   Colonne 4 : Tech Stack (BuiltWith — outils utilisés par l entreprise)
   Colonne 5 : Job Postings (quels profils ils recrutent = signaux d intention)

3. SCORING IA (Claude API via Clay HTTP Action)
   Colonne 6 : Prompt → Score ICP 0-100 + justification

4. PERSONNALISATION IA (Chaque email unique)
   Colonne 7 : Génération email 1 basé sur :
     - Post LinkedIn récent (preuve d attention)
     - Actualité entreprise (levée de fonds = bon timing)
     - Job posting détecté (signal croissance)
     - Tech stack (si utilise un outil compatible)
   
5. EXPORT VERS SÉQUENCE
   Apollo.io / Instantly / HubSpot Sequences → Email
```

```python
# clay_email_personalization.py
import anthropic

def generate_personalized_email(
    prospect: dict,
    sender: dict,
    product_value_props: list[str],
) -> dict:
    """Génère un email 1 de prospection ultra-personnalisé."""
    client = anthropic.Anthropic()

    context_parts = []
    if prospect.get("recent_linkedin_post"):
        context_parts.append(f"Post LinkedIn récent : {prospect['recent_linkedin_post'][:200]}")
    if prospect.get("company_news"):
        context_parts.append(f"Actualité entreprise : {prospect['company_news']}")
    if prospect.get("hiring"):
        context_parts.append(f"Recrutements détectés : {', '.join(prospect['hiring'])}")
    if prospect.get("tech_stack"):
        context_parts.append(f"Outils utilisés : {', '.join(prospect['tech_stack'])}")

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=400,
        messages=[{
            "role": "user",
            "content": f"""Écris un email de prospection B2B (80-100 mots max) pour :

EXPÉDITEUR : {sender['name']}, {sender['role']} chez {sender['company']}
DESTINATAIRE : {prospect['name']}, {prospect['title']} chez {prospect['company']}

CONTEXTE PERSONNALISÉ :
{chr(10).join(context_parts) if context_parts else 'Profil standard'}

VALEUR PRODUIT : {product_value_props[0]}

RÈGLES :
- Référencer 1 élément de contexte spécifique dans l accroche
- Corps : problème reconnu → solution en 1 phrase
- CTA : question ouverte douce (pas "avez-vous 15 min ?")
- Pas de buzzwords, pas de "j espère que vous allez bien"
- Ton : professionnel mais humain

Format : Objet | Corps"""
        }]
    )

    parts = response.content[0].text.split("|", 1)
    return {
        "subject": parts[0].strip() if len(parts) > 1 else "Objet personnalisé",
        "body": parts[1].strip() if len(parts) > 1 else response.content[0].text,
        "prospect_id": prospect.get("id"),
    }
```

## Make (Zapier) — Automatisations Marketing

### Scénario Make : Trigger → Nurturing Automatique

```
SCÉNARIO MAKE — LEAD MAGNET DOWNLOAD → NURTURING
─────────────────────────────────────────────────────────────

Trigger : Typeform submission (téléchargement guide IA)
         ↓
Module 1 : Ajouter contact HubSpot
         ↓
Module 2 : Attendre 30 minutes
         ↓
Module 3 : Envoyer email "guide reçu + quick win"
         ↓
Module 4 : Attendre 2 jours
         ↓
Module 5 : Condition : A ouvert l email ?
    OUI ──► Ajouter à séquence "engaged" (5 emails sur 14j)
    NON ──► Ajouter à séquence "low-engagement" (2 emails sur 30j)
         ↓
Module 6 : Score += 10 si ouverture, += 20 si clic
         ↓
Module 7 : Si score >= 60 → Notifier commercial Slack
```

## Livrables
- Workflows n8n complets (enrichissement, scoring, notification)
- Séquences outbound personnalisées avec Clay (50-200 leads/semaine)
- Automatisation nurturing Make avec conditions et branching
- Monitoring des automatisations (taux de livraison, réponses, conversions)
- Guide compliance (RGPD, CAN-SPAM, LinkedIn ToS)
- ROI de l'automatisation (temps économisé, leads générés)

## Format de sortie
Précise : volume de leads à traiter (semaine/mois), outils existants (CRM, email, enrichissement), ICP cible (secteur, taille entreprise, rôle), objectif (outbound volume, qualify inbound, nurturing), contraintes RGPD (B2B Europe), budget outils (Clay, Apollo, Instantly), ressources disponibles pour setup.

## Sources
- **RGPD UE 2016/679** — base légale du traitement, intérêt légitime B2B, droit d'opposition (prospection)
- **CAN-SPAM Act (US, 2003)** — règles d'envoi commercial (opt-out, identification de l'expéditeur)
- **LinkedIn — User Agreement / ToS** — encadre le scraping et l'automatisation sur la plateforme (Sales Navigator)
- **Documentation officielle** : n8n, Make, Clay, HubSpot (workflows, API) ; **Anthropic API** (modèles Claude — scoring/génération)
- Les seuils de scoring (0-100), incréments et délais des séquences cités sont des **valeurs de départ à calibrer** par A/B testing (cf. [experimentation-ab-testing.md](experimentation-ab-testing.md))

## Anti-patterns
- **Outbound non conforme** : scraping/prospection en violation du RGPD, du CAN-SPAM ou des ToS LinkedIn.
- **Sur-automatisation sans QA humaine** : laisser un LLM envoyer des emails en production sans relecture (risque d'hallucination, ton hors-marque).
- **Pas de fallback API** : workflow qui casse si un enrichissement (Clearbit) échoue, sans plan B.
- **Séquences génériques à grande échelle** : volume sans personnalisation pertinente → perçu comme spam, nuit à la délivrabilité.
- **Compliance déclarée mais non implémentée** : citer le RGPD sans opt-out réel ni gestion des désinscriptions.

## Voir aussi
- [lifecycle-marketing.md](lifecycle-marketing.md) — séquences nurturing et lead scoring côté lifecycle
- [ia-personalisation.md](ia-personalisation.md) — scoring ML et personnalisation des messages
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — fiabiliser les prompts LLM utilisés dans les workflows
- [`../../AGENT-ORCHESTRATEUR-WORKFLOW.md`](../../AGENT-ORCHESTRATEUR-WORKFLOW.md) — orchestration multi-étapes et gouvernance des workflows
