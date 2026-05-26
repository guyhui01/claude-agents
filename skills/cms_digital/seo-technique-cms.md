# Skill — SEO Technique d'une Plateforme CMS
> Certifications : Adobe AEM Sites Business Practitioner · Acquia Certified Site Builder — Drupal 10 · Yoast SEO for WordPress Certified

## Objectif
Optimiser le SEO technique d'une plateforme CMS : structure des URLs, métadonnées, données structurées, sitemaps, redirections, internationalisation hreflang et Core Web Vitals pour les moteurs de recherche.

## Audit SEO technique — Checklist CMS

```
CATÉGORIE         POINT DE CONTRÔLE                          OUTIL
────────────────  ─────────────────────────────────────────  ────────────────────
Indexation        robots.txt correctement configuré           Fetch robots.txt
                  Sitemap XML soumis à Search Console         GSC → Sitemaps
                  Pages noindex identifiées et justifiées     Screaming Frog
                  Pas de canonical loops ou doubles           Screaming Frog

Structure URLs    URLs lisibles, en minuscules, avec tirets   Screaming Frog
                  Pas de paramètres dynamiques en prod        Screaming Frog
                  Redirections 301 (pas de chaînes)           Redirect Checker

Métadonnées       Title unique < 60 caractères par page       Screaming Frog
                  Meta description 120-160 caractères         Screaming Frog
                  Balises H1 uniques par page                 axe / Screaming Frog
                  Alt text sur images indexées                Screaming Frog

Données struct.   Schema.org Article / Product / BreadcrumbList  Rich Results Test
                  Open Graph (og:title, og:image, og:url)     Facebook Debugger

Performance       LCP < 2,5s (impact ranking)                 PageSpeed Insights
                  TTFB < 800ms                                WebPageTest
                  Pas de ressources bloquantes                Lighthouse

Internationalisation  hreflang correct (autoréférentiel)      hreflang.org Validator
                  Alternate canonicals cohérents              Screaming Frog
```

## Métadonnées — Template CMS

```html
<!-- Balises essentielles -->
<title>Titre principal — Nom du site | 50-60 caractères max</title>
<meta name="description" content="Description persuasive 120-160 car. avec mot-clé principal en début.">
<link rel="canonical" href="https://www.mon-site.com/page-canonique/">

<!-- Open Graph (réseaux sociaux) -->
<meta property="og:title" content="Titre partage social">
<meta property="og:description" content="Description pour partage social">
<meta property="og:image" content="https://cdn.mon-site.com/og-image-1200x630.jpg">
<meta property="og:url" content="https://www.mon-site.com/page/">
<meta property="og:type" content="article">

<!-- hreflang multilingue -->
<link rel="alternate" hreflang="fr" href="https://www.mon-site.com/fr/page/">
<link rel="alternate" hreflang="en" href="https://www.mon-site.com/en/page/">
<link rel="alternate" hreflang="x-default" href="https://www.mon-site.com/page/">
```

## Données structurées Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre de l'article",
  "description": "Description de l'article",
  "image": "https://cdn.mon-site.com/image.webp",
  "author": {
    "@type": "Person",
    "name": "Nom de l'auteur",
    "url": "https://www.mon-site.com/auteur/nom"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nom du site",
    "logo": { "@type": "ImageObject", "url": "https://www.mon-site.com/logo.png" }
  },
  "datePublished": "2026-05-26T09:00:00+02:00",
  "dateModified": "2026-05-26T14:30:00+02:00",
  "mainEntityOfPage": "https://www.mon-site.com/article/titre"
}
```

## Sitemap XML — Configuration CMS

```xml
<!-- Sitemap index (site multilingue) -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.mon-site.com/sitemap-pages-fr.xml</loc>
    <lastmod>2026-05-26</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.mon-site.com/sitemap-blog-fr.xml</loc>
    <lastmod>2026-05-26</lastmod>
  </sitemap>
</sitemapindex>

<!-- Sitemap URL avec priorité -->
<url>
  <loc>https://www.mon-site.com/fr/page-importante/</loc>
  <lastmod>2026-05-26</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

## Plan de redirections 301 — Migration CMS

```
ANCIENNE URL                          NOUVELLE URL                          TYPE
────────────────────────────────────  ────────────────────────────────────  ─────
/fr/actualites/2024/titre-article     /blog/2024/titre-article              301
/content/dam/images/photo.jpg         /media/images/photo.webp              301
/fr/produits/categorie/               /produits/categorie/                  301
/index.html                           /                                     301
```

## Livrables
- Rapport d'audit SEO technique (Screaming Frog export + analyse)
- Plan de corrections priorisé (Quick wins vs Long terme)
- Configuration métadonnées CMS (templates par content type)
- Fichier de redirections 301 (CSV ou .htaccess)
- Sitemap XML configuré et soumis à GSC
- Données structurées Schema.org implémentées et validées
- Tableau de bord SEO (GSC + Search Analytics)

## Format de sortie
Précise : **CMS** (AEM, Drupal, WordPress…), **périmètre** (site complet ou section), **contexte** (audit initial, migration, refonte), **contraintes** (multilingue, multidomaine, e-commerce), **objectifs** (trafic organique, featured snippets, indexation prioritaire).
