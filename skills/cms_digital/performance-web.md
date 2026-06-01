# Skill — Performance Web (Core Web Vitals, CMS)
> Certifications : Adobe AEM Sites Developer · Acquia Certified Developer — Drupal 10

## Objectif
Auditer et optimiser les performances d'une plateforme CMS : Core Web Vitals, stratégies de cache, optimisation des assets, CDN — pour atteindre un score Lighthouse > 90 et un LCP < 2,5s.

## Core Web Vitals — Seuils 2024

```
MÉTRIQUE   NOM                              BON       À AMÉLIORER   MAUVAIS
─────────  ───────────────────────────────  ────────  ────────────  ───────
LCP        Largest Contentful Paint         < 2,5s    2,5s – 4,0s   > 4,0s
INP        Interaction to Next Paint        < 200ms   200 – 500ms   > 500ms
CLS        Cumulative Layout Shift          < 0,1     0,1 – 0,25    > 0,25
TTFB       Time to First Byte               < 800ms   800ms – 1,8s  > 1,8s
FCP        First Contentful Paint           < 1,8s    1,8s – 3,0s   > 3,0s
```

## Checklist d'optimisation par couche

### Images (impact LCP majeur)
```html
<!-- Attributs essentiels -->
<img
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Description claire"
  loading="eager"    <!-- lazy uniquement hors viewport -->
  fetchpriority="high" <!-- pour l'image LCP uniquement -->
  width="1600" height="900" <!-- évite le CLS -->
/>
```

### Cache AEM Dispatcher
```apache
# /etc/httpd/conf.dispatcher.d/cache/ams_publish_cache.any
/cache {
  /docroot "/mnt/var/www/html"
  /rules {
    /0001 { /type "allow" /glob "*.html" }
    /0002 { /type "allow" /glob "*.js"   }
    /0003 { /type "allow" /glob "*.css"  }
    /0004 { /type "allow" /glob "*.jpg" /0005 { /type "allow" /glob "*.webp" }
    /0099 { /type "deny"  /glob "/api/*" }   # Ne pas cacher les appels API
  }
  /statfileslevel "3"    # Invalidation ciblée par niveau d'arborescence
  /enableTTL "1"
  /rules { /0001 { /type "allow" /glob "*" /ttl "3600" } }
}
```

### Cache Drupal
```php
// Invalidation de cache ciblée (tags de cache)
Cache::invalidateTags(['node:' . $nid, 'node_list']);

// Définir la durée de cache d'une réponse
$response->setMaxAge(3600);
$response->setSharedMaxAge(3600);

// Rendre un bloc non-cacheable (à éviter !)
$build['#cache']['max-age'] = 0;

// Utiliser les cache contexts (varie par…)
$build['#cache']['contexts'] = ['url.query_args:page', 'languages'];
```

### Optimisation CSS/JS
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

## Audit Lighthouse — Commandes

```bash
# Audit CLI (CI/CD)
npx lighthouse https://mon-site.com \
  --output json --output html \
  --output-path ./rapport-lighthouse \
  --throttling-method=simulate \
  --only-categories=performance,accessibility,seo

# PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://mon-site.com&strategy=mobile&key=$API_KEY" \
  | jq '.lighthouseResult.categories.performance.score'
```

## Budget de performance

```
BUDGET        VALEUR CIBLE      ALERTE CI/CD
────────────  ────────────────  ─────────────────────────────
LCP           < 2,5s            Fail build si > 3s
JS bundle     < 200ko (gzip)    Warning si > 150ko
CSS bundle    < 50ko (gzip)     Warning si > 40ko
Total poids   < 1Mo             Warning si > 800ko
Requests      < 50              Warning si > 40
Score mobile  > 90              Fail build si < 80
```

## Livrables
- Rapport d'audit Lighthouse (mobile + desktop)
- Rapport WebPageTest (real device, multiple locations)
- Plan d'actions priorisé (impact × effort)
- Configuration CDN optimisée (headers cache, compression)
- Budget de performance intégré au CI/CD
- Dashboard monitoring (Core Web Vitals en continu)

## Format de sortie
Précise : **CMS et version**, **URLs à auditer** (homepage, page produit, article…), **cibles** (LCP, score Lighthouse), **contexte** (refonte, optimisation ongoing), **contraintes** (tracker tiers, vidéos, iframes ads).

## Anti-patterns
- ❌ **Optimiser sur les lab data (Lighthouse) en ignorant les field data** (CrUX/RUM) : score parfait en labo, mauvais en réel → suivre les données terrain
- ❌ **Lazy-load sur l'image LCP** : retarde le rendu du contenu principal → `loading="eager"` + `fetchpriority="high"` pour le LCP
- ❌ **`width`/`height` non définis** : CLS dégradé → dimensions explicites
- ❌ **Pas de budget de performance en CI** : régressions silencieuses → fail build sur seuils
- ❌ **Trackers/tags tiers non maîtrisés** : dégradent TTFB et INP → audit des scripts tiers, chargement différé
- ❌ **Cacher les réponses d'API** : données périmées → exclure `/api/*` du cache (cf. règle Dispatcher)

## Sources
- **Core Web Vitals** — web.dev/vitals (Google) : LCP < 2,5 s · **INP < 200 ms** (a remplacé FID en mars 2024) · CLS < 0,1
- **Lighthouse** / **PageSpeed Insights** / **CrUX** (Chrome UX Report, field data) — developer.chrome.com
- **Drupal** (cache tags, BigPipe) — drupal.org · **AEM Dispatcher** — experienceleague.adobe.com
- **HTTP Archive Web Almanac** — benchmarks de performance — httparchive.org

## Voir aussi
- [`../dam_expert/transformation-formats.md`](../dam_expert/transformation-formats.md) — formats d'images optimisés (WebP/AVIF)
- [`seo-technique-cms.md`](seo-technique-cms.md) — Core Web Vitals comme facteur de ranking
- [`architecture-cms.md`](architecture-cms.md) — choix d'architecture impactant la performance
- [`drupal-developpement.md`](drupal-developpement.md) — cache Drupal (tags, contexts, BigPipe)
