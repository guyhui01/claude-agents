# Skill — CMS Headless (Contentful, Strapi, Sanity, Prismic)
> Certifications : Contentful Certified Professional · Adobe AEM Sites Developer (Headless mode)

## Objectif
Mettre en œuvre une architecture CMS headless : configuration du CMS API-first, modélisation du contenu, consommation des API depuis un frontend découplé, et gestion des prévisualisations.

## Comparatif plateformes headless

| CMS | Type | Points forts | Limites | Idéal pour |
|-----|------|-------------|---------|-----------|
| **Contentful** | SaaS | Scalabilité, écosystème riche, CDN global | Coût en prod, vendor lock-in | Grandes entreprises, multicanal |
| **Strapi** | Open-source self-hosted | Flexibilité totale, plugins, REST+GraphQL | Maintenance infra | PME, projets custom, budget limité |
| **Sanity** | SaaS + open-source | Studio personnalisable, GROQ, temps réel | Courbe d'apprentissage | Équipes dev, contenus complexes |
| **Prismic** | SaaS | Slice Machine, DX excellente | Moins puissant à grande échelle | Agences, sites marketing |
| **Payload CMS** | Open-source | TypeScript natif, headless + admin | Jeune écosystème | Projets Next.js, full-stack TS |

## Contentful — Modélisation de contenu

```typescript
// Content Model : Article de blog
{
  name: "Article",
  fields: [
    { id: "title",      type: "Symbol",    required: true },
    { id: "slug",       type: "Symbol",    required: true, unique: true },
    { id: "body",       type: "RichText" },
    { id: "author",     type: "Link",      linkType: "Entry", validations: [{ linkContentType: ["Author"] }] },
    { id: "tags",       type: "Array",     items: { type: "Symbol" } },
    { id: "heroImage",  type: "Link",      linkType: "Asset" },
    { id: "publishedAt",type: "Date" }
  ]
}
```

## Contentful — Consommation API

```typescript
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Récupérer les articles (avec preview draft si besoin)
export async function getArticles(preview = false) {
  const client = preview ? previewClient : deliveryClient

  const entries = await client.getEntries<ArticleFields>({
    content_type: 'article',
    order: ['-fields.publishedAt'],
    limit: 10,
    include: 2,  // profondeur des liens
    'fields.slug[ne]': 'draft',
  })

  return entries.items
}

// Webhook pour revalidation Next.js ISR
export async function POST(req: Request) {
  const body = await req.json()
  if (body.sys.type === 'Entry') {
    await revalidatePath(`/blog/${body.fields.slug}`)
  }
  return Response.json({ revalidated: true })
}
```

## Strapi — Configuration et API

```javascript
// strapi/src/api/article/content-types/article/schema.json
{
  "kind": "collectionType",
  "collectionName": "articles",
  "attributes": {
    "title":       { "type": "string", "required": true },
    "slug":        { "type": "uid", "targetField": "title" },
    "body":        { "type": "richtext" },
    "publishedAt": { "type": "datetime" },
    "author":      { "type": "relation", "relation": "manyToOne", "target": "api::author.author" }
  }
}

// Appel API REST
GET /api/articles?populate=author,image&filters[publishedAt][$notNull]=true&sort=publishedAt:desc
```

## Gestion de la prévisualisation (Next.js)

```typescript
// app/api/preview/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Activer le mode draft
  const cookieStore = cookies()
  cookieStore.set('__prerender_bypass', generatePreviewCookie())

  redirect(`/blog/${slug}`)
}
```

## Livrables
- Modèles de contenu configurés (avec validations)
- SDK / hooks de consommation API
- Webhooks de revalidation (ISR/CDN purge)
- Documentation éditeurs (guide création contenu)
- Tests d'intégration (MSW mocks ou sandbox CMS)

## Format de sortie
Précise : **CMS headless cible** (Contentful, Strapi, Sanity…), **framework frontend** (Next.js, Nuxt, Astro…), **cas d'usage** (blog, e-commerce, multisite), **gestion du cache** (SSR, ISR, SSG), **contraintes** (multilingue, prévisualisation, droits).

## Anti-patterns
- ❌ **Modèle de contenu calqué sur les pages** (au lieu de contenu structuré réutilisable) : anti-headless → modéliser par entité, pas par gabarit
- ❌ **Pas de SSR/ISR** sur un site public : contenu JS non indexé → SEO dégradé (cf. `seo-technique-cms.md`)
- ❌ **Webhooks de revalidation absents** : contenu périmé en cache CDN/ISR → revalidation à la publication
- ❌ **Vendor lock-in non anticipé** (Contentful) : coût de sortie élevé → abstraire la couche d'accès au contenu
- ❌ **Preview non sécurisée** (sans secret) : fuite de drafts → token de prévisualisation
- ❌ **Sur-fetch** (`include` trop profond, pas de pagination) : latence et coût API → requêtes ciblées

## Sources
- **Contentful / Strapi / Sanity / Prismic / Payload** — documentations éditeurs
- **Next.js 15/16** (React 19, App Router, ISR) — nextjs.org (Vercel) · **Nuxt / Astro** — frameworks frontend
- **GraphQL** — spec.graphql.org (GraphQL Foundation) · **MACH Alliance** (Microservices/API/Cloud/Headless) — machalliance.org
- **JAMstack / composable commerce** — jamstack.org

## Voir aussi
- [`architecture-cms.md`](architecture-cms.md) — headless vs hybride vs monolithique (MACH)
- [`seo-technique-cms.md`](seo-technique-cms.md) — SSR/ISR pour l'indexabilité
- [`performance-web.md`](performance-web.md) — ISR/SSG et Core Web Vitals
- [`../dam_expert/integration-dam-cms.md`](../dam_expert/integration-dam-cms.md) — assets DAM en headless
