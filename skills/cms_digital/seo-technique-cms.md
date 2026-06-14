# Skill — Technical SEO for a CMS Platform
> Certifications: Adobe AEM Sites Business Practitioner · Acquia Certified Site Builder — Drupal 10 · Yoast SEO for WordPress Certified

## Objective
Optimize the technical SEO of a CMS platform: URL structure, metadata, structured data, sitemaps, redirects, hreflang internationalization, and Core Web Vitals for search engines.

## Technical SEO audit — CMS checklist

```
CATEGORY          CHECKPOINT                                 TOOL
────────────────  ─────────────────────────────────────────  ────────────────────
Indexing          robots.txt correctly configured             Fetch robots.txt
                  XML sitemap submitted to Search Console     GSC → Sitemaps
                  noindex pages identified and justified      Screaming Frog
                  No canonical loops or duplicates            Screaming Frog

URL structure     URLs readable, lowercase, with hyphens      Screaming Frog
                  No dynamic parameters in prod               Screaming Frog
                  301 redirects (no chains)                   Redirect Checker

Metadata          Unique title < 60 characters per page       Screaming Frog
                  Meta description 120-160 characters         Screaming Frog
                  Unique H1 tags per page                     axe / Screaming Frog
                  Alt text on indexed images                  Screaming Frog

Structured data   Schema.org Article / Product / BreadcrumbList  Rich Results Test
                  Open Graph (og:title, og:image, og:url)     Facebook Debugger

Performance       LCP < 2.5s (ranking impact)                 PageSpeed Insights
                  TTFB < 800ms                                WebPageTest
                  No render-blocking resources                Lighthouse

Internationalization  Correct hreflang (self-referential)     hreflang.org Validator
                  Consistent alternate canonicals             Screaming Frog
```

## Metadata — CMS template

```html
<!-- Essential tags -->
<title>Main title — Site name | 50-60 characters max</title>
<meta name="description" content="Persuasive description, 120-160 chars, with the main keyword up front.">
<link rel="canonical" href="https://www.my-site.com/canonical-page/">

<!-- Open Graph (social networks) -->
<meta property="og:title" content="Social share title">
<meta property="og:description" content="Description for social sharing">
<meta property="og:image" content="https://cdn.my-site.com/og-image-1200x630.jpg">
<meta property="og:url" content="https://www.my-site.com/page/">
<meta property="og:type" content="article">

<!-- multilingual hreflang -->
<link rel="alternate" hreflang="fr" href="https://www.my-site.com/fr/page/">
<link rel="alternate" hreflang="en" href="https://www.my-site.com/en/page/">
<link rel="alternate" hreflang="x-default" href="https://www.my-site.com/page/">
```

## Schema.org structured data

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article title",
  "description": "Article description",
  "image": "https://cdn.my-site.com/image.webp",
  "author": {
    "@type": "Person",
    "name": "Author name",
    "url": "https://www.my-site.com/author/name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Site name",
    "logo": { "@type": "ImageObject", "url": "https://www.my-site.com/logo.png" }
  },
  "datePublished": "2026-05-26T09:00:00+02:00",
  "dateModified": "2026-05-26T14:30:00+02:00",
  "mainEntityOfPage": "https://www.my-site.com/article/title"
}
```

## XML sitemap — CMS configuration

```xml
<!-- Sitemap index (multilingual site) -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.my-site.com/sitemap-pages-fr.xml</loc>
    <lastmod>2026-05-26</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.my-site.com/sitemap-blog-fr.xml</loc>
    <lastmod>2026-05-26</lastmod>
  </sitemap>
</sitemapindex>

<!-- Sitemap URL with priority -->
<url>
  <loc>https://www.my-site.com/fr/important-page/</loc>
  <lastmod>2026-05-26</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

## 301 redirect plan — CMS migration

```
OLD URL                               NEW URL                               TYPE
────────────────────────────────────  ────────────────────────────────────  ─────
/fr/news/2024/article-title           /blog/2024/article-title              301
/content/dam/images/photo.jpg         /media/images/photo.webp              301
/fr/products/category/                /products/category/                   301
/index.html                           /                                     301
```

## Deliverables
- Technical SEO audit report (Screaming Frog export + analysis)
- Prioritized fix plan (quick wins vs long term)
- CMS metadata configuration (templates per content type)
- 301 redirect file (CSV or .htaccess)
- XML sitemap configured and submitted to GSC
- Schema.org structured data implemented and validated
- SEO dashboard (GSC + Search Analytics)

## Output format
Specify: **CMS** (AEM, Drupal, WordPress…), **scope** (full site or section), **context** (initial audit, migration, redesign), **constraints** (multilingual, multi-domain, e-commerce), **goals** (organic traffic, featured snippets, priority indexing).

## Anti-patterns
- ❌ **Canonical loops or multiple canonicals**: contradictory signals to Google → 1 self-referential canonical per page
- ❌ **Non-self-referential or incomplete hreflang**: poor geo targeting → each page references itself + x-default
- ❌ **Duplicate title / meta description** across content types: cannibalization → unique templates per type
- ❌ **JS-dependent rendering without SSR/prerendering**: unindexed content → SSR/ISR (see headless)
- ❌ **Redirect chains** (301 → 301 → 301): PageRank and crawl-budget loss → direct redirect
- ❌ **Unvalidated Schema.org** (Rich Results Test): no rich snippets → validate each type

## Sources
- **Schema.org** (structured vocabulary) — schema.org · **Rich Results Test** — search.google.com/test/rich-results
- **Open Graph protocol** — ogp.me · **hreflang** — Google Search Central / sitemaps.org
- **robots.txt** — RFC 9309 (2022) · **XML Sitemaps** — sitemaps.org/protocol
- **Core Web Vitals** — web.dev/vitals (ranking factor, Page Experience) · **Google Search Central** — developers.google.com/search

## See also
- [`performance-web.md`](performance-web.md) — Core Web Vitals (ranking factor)
- [`accessibilite-numerique.md`](accessibilite-numerique.md) — Hn structure, alt, language (SEO overlap)
- [`migration-cms.md`](migration-cms.md) — 301 redirect plan during a migration
- [`architecture-cms.md`](architecture-cms.md) — SSR/ISR for headless indexability
