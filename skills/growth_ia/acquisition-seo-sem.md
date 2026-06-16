# Skill — SEO/SEM Acquisition & AI Content Marketing
> Certifications: Google Ads Certified (2026), SEMrush SEO Toolkit Certified, HubSpot Content Marketing, Google Analytics 4 Certified

## Objective
Combine organic acquisition (technical SEO + AI content) and paid search (Google Ads, Meta Ads) to maximize qualified traffic and ROAS, leveraging AI tools to accelerate production and optimization.

## Technical SEO — Foundations

### Technical SEO audit — Python checklist

```python
# seo_audit.py
import httpx
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re

class SEOAuditor:
    """Basic technical SEO audit of a site."""

    def __init__(self, base_url: str):
        self.base_url = base_url
        self.session = httpx.Client(follow_redirects=True, timeout=10)

    def check_core_web_vitals(self, url: str) -> dict:
        """PageSpeed Insights API call."""
        api_url = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
        params = {"url": url, "strategy": "mobile", "key": "YOUR_API_KEY"}
        resp = self.session.get(api_url, params=params)
        data = resp.json()
        metrics = data.get("lighthouseResult", {}).get("audits", {})
        return {
            "lcp_ms":  metrics.get("largest-contentful-paint", {}).get("numericValue", 0),
            "fid_ms":  metrics.get("max-potential-fid", {}).get("numericValue", 0),
            "cls":     metrics.get("cumulative-layout-shift", {}).get("numericValue", 0),
            "ttfb_ms": metrics.get("server-response-time", {}).get("numericValue", 0),
            "score":   data.get("lighthouseResult", {}).get("categories", {}).get("performance", {}).get("score", 0) * 100,
        }

    def analyze_page(self, url: str) -> dict:
        resp = self.session.get(url)
        soup = BeautifulSoup(resp.text, "html.parser")

        # Extract on-page SEO elements
        title = soup.find("title")
        h1_tags = soup.find_all("h1")
        meta_desc = soup.find("meta", attrs={"name": "description"})
        canonical = soup.find("link", attrs={"rel": "canonical"})
        og_image = soup.find("meta", property="og:image")
        schema = soup.find_all("script", attrs={"type": "application/ld+json"})

        return {
            "url": url,
            "title": title.text if title else None,
            "title_length": len(title.text) if title else 0,
            "title_ok": 50 <= len(title.text) <= 60 if title else False,
            "h1_count": len(h1_tags),
            "h1_text": h1_tags[0].text if h1_tags else None,
            "meta_description": meta_desc.get("content") if meta_desc else None,
            "meta_desc_length": len(meta_desc.get("content", "")) if meta_desc else 0,
            "canonical": canonical.get("href") if canonical else None,
            "has_og_image": og_image is not None,
            "schema_types": len(schema),
            "word_count": len(soup.get_text().split()),
        }
```

### Technical SEO configuration — Next.js

```typescript
// app/layout.tsx — systematic SEO metadata
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://app.company.com"),
  title: {
    template: "%s | Company AI",
    default: "Company AI — AI solution for your team",
  },
  description: "Main description, 150-160 characters with the primary keyword.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.company.com",
    siteName: "Company AI",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", site: "@companyia" },
  robots: { index: true, follow: true, googleBot: { index: true } },
  alternates: { canonical: "https://app.company.com" },
}

// Schema.org JSON-LD — Article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Article title",
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  author: { "@type": "Person", name: "Guy Hui-Bon-Hoa" },
  publisher: {
    "@type": "Organization",
    name: "Company AI",
    logo: { "@type": "ImageObject", url: "https://app.company.com/logo.png" },
  },
}
```

## AI Content Marketing — Workflows

### AI-augmented editorial calendar

```yaml
# editorial_calendar.yaml
strategy:
  topical_clusters:
    - pillar: "AI for sales teams"
      main_keyword: "artificial intelligence sales" (2,400 queries/month)
      satellite_articles:
        - "ai lead scoring tool" (880)
        - "ai crm salesforce" (590)
        - "ai sales chatbot" (720)
        - "ai prospecting automation" (480)

  content_types:
    seo_guides:      # Long-form, 2000+ words, informational targeting
      frequency: 2/month
      production_time: 4h (with AI)
    case_studies:    # Trust, transactional targeting
      frequency: 1/month
      production_time: 6h
    comparisons:     # Purchase intent, natural backlinks
      frequency: 1/month
      production_time: 5h
```

### Prompt Engineering for SEO content production

```python
# content_seo_prompt.py
import anthropic

def generate_seo_article(
    keyword: str,
    search_intent: str,
    competitor_titles: list[str],
    word_count: int = 2000,
) -> str:
    client = anthropic.Anthropic()

    prompt = f"""You are a B2B SaaS SEO and content marketing expert.
    
Generate an SEO-optimized article about: "{keyword}"

SEARCH INTENT: {search_intent}
COMPETITOR TITLES (to outperform):
{chr(10).join(f'- {t}' for t in competitor_titles)}

REQUIREMENTS:
- H1 including the primary keyword
- 6-8 section outline with optimized H2/H3 (semantic variations)
- {word_count} words minimum
- Introduction with a hook + outline preview
- Inclusion of quantified data (2025-2026 statistics)
- CTA at the end of the article
- FAQ schema.org (5 questions)
- Meta description 150-158 characters

Format: Markdown with YAML frontmatter."""

    response = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=8000,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.content[0].text
```

## Google Ads — Campaign Structure

### Search campaign architecture

```
GOOGLE ADS STRUCTURE — AI SAAS
─────────────────────────────────────────────────────────────
Campaign 1: Brand
  └── Ad Group: [Brand Name]
      Keywords: "company ai", "company ai scoring", +company +ai
      Bid: max CPC (protect the brand)

Campaign 2: Competitors
  └── Ad Group: [Competitor 1], [Competitor 2]
      Keywords: "alternative [competitor]", "[competitor] price"
      Bid: Target CPA

Campaign 3: Solution (purchase intent)
  └── Ad Group: AI lead scoring
      Keywords: "ai lead scoring tool", "sales scoring software"
      Landing page: /lead-scoring
  └── Ad Group: Sales chatbot
      Keywords: "ai sales chatbot", "ai sales assistant"
      Landing page: /sales-chatbot

Campaign 4: Informational (TOFU — nurturing)
  └── Ad Group: How AI sales
      Keywords: "how ai improves sales", "ai conversion rate increase"
      Landing page: /ai-sales-guide (lead magnet)
```

### Bidding Strategy & target ROAS

```python
# google_ads_optimizer.py
def calculate_target_cpa(
    ltv: float,
    close_rate: float,       # SQL -> customer rate
    sqls_to_trial_rate: float,  # trial -> SQL rate
    trial_conversion_rate: float,
    payback_months: int = 12,
) -> dict:
    """Calculate the target CPA for Google Ads."""
    revenue_per_customer = ltv * (payback_months / 24)  # Recover over 12 months
    revenue_per_sql = revenue_per_customer * close_rate
    revenue_per_trial = revenue_per_sql * sqls_to_trial_rate
    target_cpa_trial = revenue_per_trial * trial_conversion_rate * 0.3  # 70% margin

    return {
        "target_cpa_trial": round(target_cpa_trial, 2),
        "target_cpa_sql": round(revenue_per_sql * 0.25, 2),
        "max_cpc_estimate": round(target_cpa_trial / 10, 2),  # 1/10 of the target CPA
    }

# B2B SaaS example
result = calculate_target_cpa(
    ltv=12_000, close_rate=0.25, sqls_to_trial_rate=0.4,
    trial_conversion_rate=0.30, payback_months=12
)
# target_cpa_trial: €54.0, target_cpa_sql: €375.0, max_cpc_estimate: €5.4
```

## Deliverables
- Complete technical SEO audit (Core Web Vitals, on-page, structure)
- Content strategy with topical clusters and editorial calendar
- AI prompt templates for SEO content production
- Google Ads + Meta Ads campaign structure
- GA4 + Search Console + Ads dashboard (consolidated KPIs)
- Monthly SEO/SEM report (traffic, conversions, ROAS)

## Output format
Specify: sector (B2B/B2C), ICP (target persona), monthly ad budget, priority keywords, objective (traffic / leads / ROAS), geographic market, analytics stack (GA4/Mixpanel/other), timeline for first results.

## Sources
- **Google Search Central** — official SEO documentation (Core Web Vitals, Schema.org structured data, indexing)
- **Google** — *Search Quality Rater Guidelines* + E-E-A-T (the 2nd "E," Experience, added in December 2022)
- **HubSpot** — *Pillar–Cluster model* (topic clusters, 2017) — content architecture by thematic silos
- **Semrush / Ahrefs** — official documentation — search volumes and keyword difficulty (the volumes cited are illustrative, to be re-sourced per tool)
- **Google Ads Help** — Smart Bidding (tCPA/tROAS); the target CPA is derived from LTV and payback (see [attribution-ltv-cac.md](attribution-ltv-cac.md))

## Anti-patterns
- **Keyword stuffing** instead of useful "people-first" content — penalized by the Helpful Content System.
- **Publishing unreviewed AI content**: factual risk, no real experience (E-E-A-T), duplication — always have a human review/enrich it.
- **Setting bids with no payback model**: a CPA decoupled from LTV/margin burns the budget (see the skill's CPA example).
- **Cannibalization**: several pages targeting the same intent compete in the SERP.
- **Ignoring Core Web Vitals / search intent** in favor of volume alone.

## See also
- [attribution-ltv-cac.md](attribution-ltv-cac.md) — derive the target CPA/CAC from LTV and payback
- [product-analytics.md](product-analytics.md) — measure acquisition → activation conversion
- [`../redacteur_ia/seo-content.md`](../redacteur_ia/seo-content.md) — SEO editorial production (E-E-A-T, structure)
- [`../redacteur_ia/copywriting-ia.md`](../redacteur_ia/copywriting-ia.md) — persuasive ad and landing-page copywriting
