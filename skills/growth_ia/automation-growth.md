# Skill — Growth Automation with AI
> Certifications: n8n Certified Expert (2026), Make.com Solution Partner, Clay Certified Expert, HubSpot Operations Certified

## Objective
Automate growth workflows — data enrichment, AI outbound sequences, ethical scraping, and lead scoring — with n8n, Make, Clay, and LLM APIs to multiply sales and marketing efficiency.

## n8n — Automation Workflows

### Automatic Enrichment + Scoring Workflow

```yaml
# n8n workflow: inbound lead enrichment (JSON export)
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
              Score this lead from 0 to 100 for a B2B AI SaaS (ICP: tech company 50-500 employees).
              Data: {{JSON.stringify($json)}}
              Respond in JSON: {"score": X, "grade": "A/B/C/D", "reasons": ["...", "..."], "recommended_action": "..."}

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
        *New A+ lead*: {{$json['first_name']}} {{$json['last_name']}}
        Company: {{$node.enrich_clearbit.json['name']}} ({{$node.enrich_clearbit.json['metrics']['employees']}} employees)
        Score: {{$node.score_with_claude.json['score']}}/100
        Reasons: {{$node.score_with_claude.json['reasons'].join(', ')}}
        Action: {{$node.score_with_claude.json['recommended_action']}}
```

### Automatic Competitive Intelligence Workflow

```python
# n8n_competitive_intelligence.py
# Triggered weekly — monitors competitors

import anthropic
import httpx
from datetime import datetime

def monitor_competitor(competitor_name: str, domain: str) -> dict:
    """Scrape and analyze a competitor's changes."""
    client = anthropic.Anthropic()

    # Fetch the pricing page
    resp = httpx.get(f"https://{domain}/pricing", timeout=15)
    page_text = resp.text[:5000]  # Limit

    # AI analysis of changes
    analysis = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=600,
        messages=[{
            "role": "user",
            "content": f"""Analyze this {competitor_name} pricing page and extract:
1. Available plans with prices
2. Differentiating features vs. last week (compare with: {{previous_snapshot}})
3. Notable positioning changes
4. Opportunities for our product

Page: {page_text}

JSON format: {{plans: [...], changes: [...], opportunities: [...]}}"""
        }]
    )

    return {
        "competitor": competitor_name,
        "date": datetime.now().isoformat(),
        "analysis": analysis.content[0].text,
        "url": f"https://{domain}/pricing",
    }
```

## Clay — Enrichment & AI Outbound

### Clay Workflow for Personalized Outbound

```
CLAY WORKFLOW — B2B OUTBOUND SEQUENCE
─────────────────────────────────────────────────────────────

1. INPUT SOURCE
   LinkedIn Sales Navigator → CSV Export → Import to Clay Table

2. CASCADING ENRICHMENT
   Column 1: Clearbit Enrichment (company size, sector, tech stack)
   Column 2: LinkedIn Recent Posts (person's last 3 posts)
   Column 3: Company News (Crunchbase — funding rounds, acquisitions 90d)
   Column 4: Tech Stack (BuiltWith — tools used by the company)
   Column 5: Job Postings (which profiles they hire = intent signals)

3. AI SCORING (Claude API via Clay HTTP Action)
   Column 6: Prompt → ICP Score 0-100 + justification

4. AI PERSONALIZATION (Each email unique)
   Column 7: Email 1 generation based on:
     - Recent LinkedIn post (proof of attention)
     - Company news (funding round = good timing)
     - Detected job posting (growth signal)
     - Tech stack (if using a compatible tool)
   
5. EXPORT TO SEQUENCE
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
    """Generate an ultra-personalized first prospecting email."""
    client = anthropic.Anthropic()

    context_parts = []
    if prospect.get("recent_linkedin_post"):
        context_parts.append(f"Recent LinkedIn post: {prospect['recent_linkedin_post'][:200]}")
    if prospect.get("company_news"):
        context_parts.append(f"Company news: {prospect['company_news']}")
    if prospect.get("hiring"):
        context_parts.append(f"Detected hiring: {', '.join(prospect['hiring'])}")
    if prospect.get("tech_stack"):
        context_parts.append(f"Tools used: {', '.join(prospect['tech_stack'])}")

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=400,
        messages=[{
            "role": "user",
            "content": f"""Write a B2B prospecting email (80-100 words max) for:

SENDER: {sender['name']}, {sender['role']} at {sender['company']}
RECIPIENT: {prospect['name']}, {prospect['title']} at {prospect['company']}

PERSONALIZED CONTEXT:
{chr(10).join(context_parts) if context_parts else 'Standard profile'}

PRODUCT VALUE: {product_value_props[0]}

RULES:
- Reference 1 specific context element in the hook
- Body: recognized problem → solution in 1 sentence
- CTA: soft open-ended question (not "do you have 15 min?")
- No buzzwords, no "I hope you're doing well"
- Tone: professional but human

Format: Subject | Body"""
        }]
    )

    parts = response.content[0].text.split("|", 1)
    return {
        "subject": parts[0].strip() if len(parts) > 1 else "Personalized subject",
        "body": parts[1].strip() if len(parts) > 1 else response.content[0].text,
        "prospect_id": prospect.get("id"),
    }
```

## Make (Zapier) — Marketing Automations

### Make Scenario: Trigger → Automatic Nurturing

```
MAKE SCENARIO — LEAD MAGNET DOWNLOAD → NURTURING
─────────────────────────────────────────────────────────────

Trigger: Typeform submission (AI guide download)
         ↓
Module 1: Add HubSpot contact
         ↓
Module 2: Wait 30 minutes
         ↓
Module 3: Send email "guide received + quick win"
         ↓
Module 4: Wait 2 days
         ↓
Module 5: Condition: Opened the email?
    YES ──► Add to "engaged" sequence (5 emails over 14d)
    NO  ──► Add to "low-engagement" sequence (2 emails over 30d)
         ↓
Module 6: Score += 10 if open, += 20 if click
         ↓
Module 7: If score >= 60 → Notify sales on Slack
```

## Deliverables
- Complete n8n workflows (enrichment, scoring, notification)
- Personalized outbound sequences with Clay (50-200 leads/week)
- Make nurturing automation with conditions and branching
- Automation monitoring (delivery rate, replies, conversions)
- Compliance guide (GDPR, CAN-SPAM, LinkedIn ToS)
- Automation ROI (time saved, leads generated)

## Output format
Specify: lead volume to process (week/month), existing tools (CRM, email, enrichment), target ICP (sector, company size, role), objective (outbound volume, qualify inbound, nurturing), GDPR constraints (B2B Europe), tooling budget (Clay, Apollo, Instantly), available resources for setup.

## Sources
- **EU GDPR 2016/679** — legal basis for processing, B2B legitimate interest, right to object (prospecting)
- **CAN-SPAM Act (US, 2003)** — commercial sending rules (opt-out, sender identification)
- **LinkedIn — User Agreement / ToS** — governs scraping and automation on the platform (Sales Navigator)
- **Official documentation**: n8n, Make, Clay, HubSpot (workflows, API); **Anthropic API** (Claude models — scoring/generation)
- The scoring thresholds (0-100), increments, and sequence delays cited are **starting values to calibrate** via A/B testing (see [experimentation-ab-testing.md](experimentation-ab-testing.md))

## Anti-patterns
- **Non-compliant outbound**: scraping/prospecting in violation of the GDPR, CAN-SPAM, or LinkedIn ToS.
- **Over-automation with no human QA**: letting an LLM send emails in production with no review (hallucination risk, off-brand tone).
- **No API fallback**: a workflow that breaks if an enrichment (Clearbit) fails, with no plan B.
- **Generic sequences at scale**: volume with no relevant personalization → perceived as spam, hurts deliverability.
- **Compliance declared but not implemented**: citing the GDPR with no real opt-out or unsubscribe management.

## See also
- [lifecycle-marketing.md](lifecycle-marketing.md) — nurturing sequences and lead scoring on the lifecycle side
- [ia-personalisation.md](ia-personalisation.md) — ML scoring and message personalization
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — make the LLM prompts used in workflows reliable
- [`../../AGENT-ORCHESTRATEUR-WORKFLOW.md`](../../AGENT-ORCHESTRATEUR-WORKFLOW.md) — multi-step orchestration and workflow governance
