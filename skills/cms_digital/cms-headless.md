# Skill — Headless CMS (Contentful, Strapi, Sanity, Prismic)
> Certifications: Contentful Certified Professional · Adobe AEM Sites Developer (Headless mode)

## Objective
Implement a headless CMS architecture: configure the API-first CMS, model the content, consume the APIs from a decoupled frontend, and handle previews.

## Headless platform comparison

| CMS | Type | Strengths | Limits | Best for |
|-----|------|-------------|---------|-----------|
| **Contentful** | SaaS | Scalability, rich ecosystem, global CDN | Cost in prod, vendor lock-in | Large enterprises, multichannel |
| **Strapi** | Open-source self-hosted | Full flexibility, plugins, REST+GraphQL | Infra maintenance | SMEs, custom projects, limited budget |
| **Sanity** | SaaS + open-source | Customizable Studio, GROQ, real-time | Learning curve | Dev teams, complex content |
| **Prismic** | SaaS | Slice Machine, excellent DX | Less powerful at large scale | Agencies, marketing sites |
| **Payload CMS** | Open-source | Native TypeScript, headless + admin | Young ecosystem | Next.js projects, full-stack TS |

## Contentful — Content modeling

```typescript
// Content Model: Blog article
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

## Contentful — API consumption

```typescript
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Fetch the articles (with preview draft if needed)
export async function getArticles(preview = false) {
  const client = preview ? previewClient : deliveryClient

  const entries = await client.getEntries<ArticleFields>({
    content_type: 'article',
    order: ['-fields.publishedAt'],
    limit: 10,
    include: 2,  // link depth
    'fields.slug[ne]': 'draft',
  })

  return entries.items
}

// Webhook for Next.js ISR revalidation
export async function POST(req: Request) {
  const body = await req.json()
  if (body.sys.type === 'Entry') {
    await revalidatePath(`/blog/${body.fields.slug}`)
  }
  return Response.json({ revalidated: true })
}
```

## Strapi — Configuration and API

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

// REST API call
GET /api/articles?populate=author,image&filters[publishedAt][$notNull]=true&sort=publishedAt:desc
```

## Preview handling (Next.js)

```typescript
// app/api/preview/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable draft mode
  const cookieStore = cookies()
  cookieStore.set('__prerender_bypass', generatePreviewCookie())

  redirect(`/blog/${slug}`)
}
```

## Deliverables
- Configured content models (with validations)
- API consumption SDK / hooks
- Revalidation webhooks (ISR/CDN purge)
- Editor documentation (content creation guide)
- Integration tests (MSW mocks or CMS sandbox)

## Output format
Specify: **target headless CMS** (Contentful, Strapi, Sanity…), **frontend framework** (Next.js, Nuxt, Astro…), **use case** (blog, e-commerce, multisite), **cache strategy** (SSR, ISR, SSG), **constraints** (multilingual, preview, permissions).

## Anti-patterns
- ❌ **Content model mirroring the pages** (instead of reusable structured content): anti-headless → model by entity, not by layout
- ❌ **No SSR/ISR** on a public site: unindexed JS content → degraded SEO (see `seo-technique-cms.md`)
- ❌ **Missing revalidation webhooks**: stale content in the CDN/ISR cache → revalidate on publish
- ❌ **Vendor lock-in not anticipated** (Contentful): high exit cost → abstract the content access layer
- ❌ **Unsecured preview** (no secret): draft leak → preview token
- ❌ **Over-fetching** (`include` too deep, no pagination): API latency and cost → targeted queries

## Sources
- **Contentful / Strapi / Sanity / Prismic / Payload** — vendor documentation
- **Next.js 15/16** (React 19, App Router, ISR) — nextjs.org (Vercel) · **Nuxt / Astro** — frontend frameworks
- **GraphQL** — spec.graphql.org (GraphQL Foundation) · **MACH Alliance** (Microservices/API/Cloud/Headless) — machalliance.org
- **JAMstack / composable commerce** — jamstack.org

## See also
- [`architecture-cms.md`](architecture-cms.md) — headless vs hybrid vs monolithic (MACH)
- [`seo-technique-cms.md`](seo-technique-cms.md) — SSR/ISR for indexability
- [`performance-web.md`](performance-web.md) — ISR/SSG and Core Web Vitals
- [`../dam_expert/integration-dam-cms.md`](../dam_expert/integration-dam-cms.md) — DAM assets in headless
