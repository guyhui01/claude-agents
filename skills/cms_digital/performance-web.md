# Skill — Web Performance (Core Web Vitals, CMS)
> Certifications: Adobe AEM Sites Developer · Acquia Certified Developer — Drupal 10

## Objective
Audit and optimize a CMS platform's performance: Core Web Vitals, cache strategies, asset optimization, CDN — to reach a Lighthouse score > 90 and an LCP < 2.5s.

## Core Web Vitals — 2024 thresholds

```
METRIC     NAME                             GOOD      NEEDS IMPROV.  POOR
─────────  ───────────────────────────────  ────────  ────────────  ───────
LCP        Largest Contentful Paint         < 2.5s    2.5s – 4.0s   > 4.0s
INP        Interaction to Next Paint        < 200ms   200 – 500ms   > 500ms
CLS        Cumulative Layout Shift          < 0.1     0.1 – 0.25    > 0.25
TTFB       Time to First Byte               < 800ms   800ms – 1.8s  > 1.8s
FCP        First Contentful Paint           < 1.8s    1.8s – 3.0s   > 3.0s
```

## Optimization checklist by layer

### Images (major LCP impact)
```html
<!-- Essential attributes -->
<img
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Clear description"
  loading="eager"    <!-- lazy only off-viewport -->
  fetchpriority="high" <!-- for the LCP image only -->
  width="1600" height="900" <!-- prevents CLS -->
/>
```

### AEM Dispatcher cache
```apache
# /etc/httpd/conf.dispatcher.d/cache/ams_publish_cache.any
/cache {
  /docroot "/mnt/var/www/html"
  /rules {
    /0001 { /type "allow" /glob "*.html" }
    /0002 { /type "allow" /glob "*.js"   }
    /0003 { /type "allow" /glob "*.css"  }
    /0004 { /type "allow" /glob "*.jpg" /0005 { /type "allow" /glob "*.webp" }
    /0099 { /type "deny"  /glob "/api/*" }   # Don't cache API calls
  }
  /statfileslevel "3"    # Targeted invalidation by tree level
  /enableTTL "1"
  /rules { /0001 { /type "allow" /glob "*" /ttl "3600" } }
}
```

### Drupal cache
```php
// Targeted cache invalidation (cache tags)
Cache::invalidateTags(['node:' . $nid, 'node_list']);

// Set the cache duration of a response
$response->setMaxAge(3600);
$response->setSharedMaxAge(3600);

// Make a block non-cacheable (avoid this!)
$build['#cache']['max-age'] = 0;

// Use cache contexts (vary by…)
$build['#cache']['contexts'] = ['url.query_args:page', 'languages'];
```

### CSS/JS optimization
```javascript
// vite.config.ts — Bundle splitting
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'cms':    ['@contentful/rich-text-react-renderer'],
        }
      }
    }
  }
})
```

## Lighthouse audit — Commands

```bash
# CLI audit (CI/CD)
npx lighthouse https://my-site.com \
  --output json --output html \
  --output-path ./lighthouse-report \
  --throttling-method=simulate \
  --only-categories=performance,accessibility,seo

# PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://my-site.com&strategy=mobile&key=$API_KEY" \
  | jq '.lighthouseResult.categories.performance.score'
```

## Performance budget

```
BUDGET        TARGET VALUE      CI/CD ALERT
────────────  ────────────────  ─────────────────────────────
LCP           < 2.5s            Fail build if > 3s
JS bundle     < 200KB (gzip)    Warning if > 150KB
CSS bundle    < 50KB (gzip)     Warning if > 40KB
Total weight  < 1MB             Warning if > 800KB
Requests      < 50              Warning if > 40
Mobile score  > 90              Fail build if < 80
```

## Deliverables
- Lighthouse audit report (mobile + desktop)
- WebPageTest report (real device, multiple locations)
- Prioritized action plan (impact × effort)
- Optimized CDN configuration (cache headers, compression)
- Performance budget integrated into CI/CD
- Monitoring dashboard (continuous Core Web Vitals)

## Output format
Specify: **CMS and version**, **URLs to audit** (homepage, product page, article…), **targets** (LCP, Lighthouse score), **context** (redesign, ongoing optimization), **constraints** (third-party trackers, videos, iframes, ads).

## Anti-patterns
- ❌ **Optimizing on lab data (Lighthouse) while ignoring field data** (CrUX/RUM): perfect lab score, poor in the real world → track field data
- ❌ **Lazy-loading the LCP image**: delays the main content render → `loading="eager"` + `fetchpriority="high"` for the LCP
- ❌ **`width`/`height` undefined**: degraded CLS → explicit dimensions
- ❌ **No performance budget in CI**: silent regressions → fail build on thresholds
- ❌ **Unmanaged third-party trackers/tags**: degrade TTFB and INP → audit third-party scripts, defer loading
- ❌ **Caching API responses**: stale data → exclude `/api/*` from cache (see Dispatcher rule)

## Sources
- **Core Web Vitals** — web.dev/vitals (Google): LCP < 2.5s · **INP < 200ms** (replaced FID in March 2024) · CLS < 0.1
- **Lighthouse** / **PageSpeed Insights** / **CrUX** (Chrome UX Report, field data) — developer.chrome.com
- **Drupal** (cache tags, BigPipe) — drupal.org · **AEM Dispatcher** — experienceleague.adobe.com
- **HTTP Archive Web Almanac** — performance benchmarks — httparchive.org

## See also
- [`../dam_expert/transformation-formats.md`](../dam_expert/transformation-formats.md) — optimized image formats (WebP/AVIF)
- [`seo-technique-cms.md`](seo-technique-cms.md) — Core Web Vitals as a ranking factor
- [`architecture-cms.md`](architecture-cms.md) — architecture choices impacting performance
- [`drupal-developpement.md`](drupal-developpement.md) — Drupal cache (tags, contexts, BigPipe)
```
