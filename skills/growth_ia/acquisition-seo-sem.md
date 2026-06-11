# Skill — Acquisition SEO/SEM & Content Marketing IA
> Certifications : Google Ads Certified (2026), SEMrush SEO Toolkit Certified, HubSpot Content Marketing, Google Analytics 4 Certified

## Objectif
Combiner acquisition organique (SEO technique + contenu IA) et paid search (Google Ads, Meta Ads) pour maximiser le trafic qualifié et le ROAS, en exploitant les outils IA pour accélérer la production et l'optimisation.

## SEO Technique — Fondations

### Audit SEO technique — Checklist Python

```python
# seo_audit.py
import httpx
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re

class SEOAuditor:
    """Audit SEO technique basique d un site."""

    def __init__(self, base_url: str):
        self.base_url = base_url
        self.session = httpx.Client(follow_redirects=True, timeout=10)

    def check_core_web_vitals(self, url: str) -> dict:
        """Appel PageSpeed Insights API."""
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

        # Extraction des éléments SEO on-page
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

### Configuration technique SEO — Next.js

```typescript
// app/layout.tsx — SEO metadata systématique
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://app.company.com"),
  title: {
    template: "%s | Company IA",
    default: "Company IA — Solution IA pour votre équipe",
  },
  description: "Description principale 150-160 caractères avec le mot-clé principal.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://app.company.com",
    siteName: "Company IA",
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
  headline: "Titre de l article",
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  author: { "@type": "Person", name: "Guy Hui-Bon-Hoa" },
  publisher: {
    "@type": "Organization",
    name: "Company IA",
    logo: { "@type": "ImageObject", url: "https://app.company.com/logo.png" },
  },
}
```

## Content Marketing IA — Workflows

### Calendrier éditorial IA-augmenté

```yaml
# editorial_calendar.yaml
strategy:
  topical_clusters:
    - pilier: "IA pour les équipes commerciales"
      keyword_principal: "intelligence artificielle vente" (2 400 req/mois)
      articles_satellites:
        - "outil ia scoring leads" (880)
        - "ia crm salesforce" (590)
        - "chatbot commercial ia" (720)
        - "automatisation prospection ia" (480)

  content_types:
    guides_seo:      # Long-form, 2000+ mots, ciblage informationnel
      frequence: 2/mois
      temps_production: 4h (avec IA)
    case_studies:    # Trust, ciblage transactionnel
      frequence: 1/mois
      temps_production: 6h
    comparatifs:     # Intent achat, backlinks naturels
      frequence: 1/mois
      temps_production: 5h
```

### Prompt Engineering pour la production de contenu SEO

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

    prompt = f"""Tu es un expert SEO et content marketing B2B SaaS.
    
Génère un article SEO optimisé sur : "{keyword}"

INTENT DE RECHERCHE : {search_intent}
TITRES CONCURRENTS (à surpasser) :
{chr(10).join(f'- {t}' for t in competitor_titles)}

EXIGENCES :
- H1 incluant le mot-clé principal
- Plan en 6-8 sections avec H2/H3 optimisés (variations sémantiques)
- {word_count} mots minimum
- Introduction avec accroche + annonce du plan
- Inclusion de données chiffrées (statistiques 2025-2026)
- CTA en fin d article
- FAQ schema.org (5 questions)
- Méta-description 150-158 caractères

Format : Markdown avec frontmatter YAML."""

    response = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=8000,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.content[0].text
```

## Google Ads — Structure de Campagne

### Architecture de campagne Search

```
STRUCTURE GOOGLE ADS — SAAS IA
─────────────────────────────────────────────────────────────
Campagne 1 : Brand
  └── Ad Group : [Brand Name]
      Keywords : "company ia", "company ia scoring", +company +ia
      Bid : CPC max (protéger la marque)

Campagne 2 : Concurrents
  └── Ad Group : [Concurrent 1], [Concurrent 2]
      Keywords : "alternative [concurrent]", "[concurrent] prix"
      Bid : Target CPA

Campagne 3 : Solution (intention achat)
  └── Ad Group : Scoring leads IA
      Keywords : "outil scoring leads ia", "logiciel scoring commercial"
      Landing page : /scoring-leads
  └── Ad Group : Chatbot commercial
      Keywords : "chatbot ia commercial", "assistant ia vente"
      Landing page : /chatbot-commercial

Campagne 4 : Informationnel (TOFU — nurturing)
  └── Ad Group : Comment IA vente
      Keywords : "comment ia améliore ventes", "ia augmentation taux conversion"
      Landing page : /guide-ia-vente (lead magnet)
```

### Bidding Strategy & ROAS cible

```python
# google_ads_optimizer.py
def calculate_target_cpa(
    ltv: float,
    close_rate: float,       # Taux SQL -> client
    sqls_to_trial_rate: float,  # Taux trial -> SQL
    trial_conversion_rate: float,
    payback_months: int = 12,
) -> dict:
    """Calcule le CPA cible pour Google Ads."""
    revenue_per_customer = ltv * (payback_months / 24)  # Récupérer sur 12 mois
    revenue_per_sql = revenue_per_customer * close_rate
    revenue_per_trial = revenue_per_sql * sqls_to_trial_rate
    target_cpa_trial = revenue_per_trial * trial_conversion_rate * 0.3  # Marge 70%

    return {
        "target_cpa_trial": round(target_cpa_trial, 2),
        "target_cpa_sql": round(revenue_per_sql * 0.25, 2),
        "max_cpc_estimate": round(target_cpa_trial / 10, 2),  # 1/10 du CPA cible
    }

# Exemple SaaS B2B
result = calculate_target_cpa(
    ltv=12_000, close_rate=0.25, sqls_to_trial_rate=0.4,
    trial_conversion_rate=0.30, payback_months=12
)
# target_cpa_trial: 54.0€, target_cpa_sql: 375.0€, max_cpc_estimate: 5.4€
```

## Livrables
- Audit SEO technique complet (Core Web Vitals, on-page, structure)
- Stratégie de contenu avec topical clusters et calendrier éditorial
- Templates de prompts IA pour production de contenu SEO
- Structure de campagne Google Ads + Meta Ads
- Dashboard GA4 + Search Console + Ads (KPIs consolidés)
- Rapport mensuel SEO/SEM (trafic, conversions, ROAS)

## Format de sortie
Précise : secteur (B2B/B2C), ICP (persona cible), budget publicité mensuel, mots-clés prioritaires, objectif (trafic / leads / ROAS), marché géographique, stack analytics (GA4/Mixpanel/autre), délai pour premiers résultats.

## Sources
- **Google Search Central** — documentation officielle SEO (Core Web Vitals, données structurées Schema.org, indexation)
- **Google** — *Search Quality Rater Guidelines* + E-E-A-T (le 2ᵉ « E », Experience, ajouté en décembre 2022)
- **HubSpot** — *Pillar–Cluster model* (topic clusters, 2017) — architecture de contenu par silos thématiques
- **Semrush / Ahrefs** — documentation officielle — volumes de recherche et difficulté mots-clés (les volumes cités sont illustratifs, à re-sourcer par outil)
- **Google Ads Help** — Smart Bidding (tCPA/tROAS) ; le CPA cible se dérive de la LTV et du payback (cf. [attribution-ltv-cac.md](attribution-ltv-cac.md))

## Anti-patterns
- **Bourrage de mots-clés** (keyword stuffing) au lieu d'un contenu utile « people-first » — pénalisé par le Helpful Content System.
- **Publier du contenu IA non relu** : risque factuel, absence d'expérience réelle (E-E-A-T), duplication — toujours faire relire/enrichir par un humain.
- **Fixer les enchères sans modèle de payback** : un CPA décorrélé de la LTV/marge brûle le budget (cf. exemple CPA du skill).
- **Cannibalisation** : plusieurs pages ciblant la même intention se concurrencent dans la SERP.
- **Ignorer les Core Web Vitals / l'intention de recherche** au profit du seul volume.

## Voir aussi
- [attribution-ltv-cac.md](attribution-ltv-cac.md) — dériver le CPA/CAC cible de la LTV et du payback
- [product-analytics.md](product-analytics.md) — mesurer la conversion acquisition → activation
- [`../redacteur_ia/seo-content.md`](../redacteur_ia/seo-content.md) — production éditoriale SEO (E-E-A-T, structure)
- [`../redacteur_ia/copywriting-ia.md`](../redacteur_ia/copywriting-ia.md) — rédaction persuasive des annonces et landing pages
