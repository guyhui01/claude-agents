# Skill — CMS Personalization and Segmentation
> Certifications: Adobe AEM Sites Developer · Sitecore XM Cloud Developer (Sitecore 2024)

## Objective
Design and implement personalization strategies on a CMS platform: audience segmentation, A/B testing, dynamic content, CDP — to improve engagement and conversion rates.

## Personalization levels

```
LEVEL        DESCRIPTION                          EXAMPLES
───────────  ───────────────────────────────────  ─────────────────────────────────
Manual       Static conditions                    Country, language, device, time
rules        defined by editors                   → Show FR promo only

Segmentation Predefined segments based            "Loyal visitor" segment = 3+ visits
             on historical behavior               → Show premium offer

A/B testing  Randomized variant, measured        Title A vs Title B, red vs green CTA
             (data-driven optimization)          → Measure conversion rate

AI / ML      Real-time 1:1 personalization       Adobe Target, Optimizely AI
             based on profile + context          → Individualized product recs

CDP-driven   Unified customer profile (CDP)      Salesforce CDP, Adobe RTCDP
             synced with the CMS                 → Consistent Email + Web + Mobile
```

## AEM Targeting — Configuration

```xml
<!-- Targeted AEM component (HTL) -->
<sly data-sly-use.target="com.day.cq.personalization.api.TargetComponent">
  <div data-sly-test="${target.enabled}">
    <!-- Personalized version (Adobe Target) -->
    <sly data-sly-resource="${'target' @ resourceType='cq/personalization/components/target'}" />
  </div>
  <div data-sly-test="${!target.enabled}">
    <!-- Default version -->
    <h2>${properties.defaultTitle}</h2>
  </div>
</sly>
```

## A/B test — Implementation with Optimizely

```typescript
// Optimizely SDK initialization
import { createInstance } from '@optimizely/optimizely-sdk'

const optimizely = createInstance({
  sdkKey: process.env.OPTIMIZELY_SDK_KEY!,
  datafileOptions: { autoUpdate: true, updateInterval: 30000 }
})

// Determine the variant for a user
export function getVariant(userId: string, experimentKey: string): string {
  const userContext = optimizely.createUserContext(userId, {
    device: 'mobile',
    country: 'FR',
    plan: 'premium'
  })

  const decision = userContext.decide(experimentKey)
  return decision.variationKey ?? 'control'
}

// Track a conversion
export function trackConversion(userId: string, eventKey: string): void {
  const userContext = optimizely.createUserContext(userId)
  userContext.trackEvent(eventKey)
}
```

## Segmentation — Data model

```
SEGMENT              DEFINITION CRITERIA              PERSONALIZED CONTENT
───────────────────  ──────────────────────────────── ────────────────────────────────
New visitor          0 previous visits                Welcome banner + getting-started guide
Returning visitor    ≥ 3 visits, < 30d inactive       "Welcome back" + hot content
Active customer      Identified + purchase < 90d       History-based cross-sell recs
Dormant customer     Identified + no purchase > 90d    Reactivation offer
Qualified lead       Lead score ≥ 70 (CRM scoring)     In-depth product content + demo
Professional         Field "Type = B2B" in session     Pro pricing + sector case studies
```

## CDP → CMS — Real-time personalization flow

```
CDP (Adobe RTCDP)          CMS (AEM / Headless)          Frontend
──────────────────         ──────────────────────        ───────────────────
Unified user profile      ─▶ Segment API call            ─▶ Personalized content
(web + email + app)          GET /api/personalization        displayed
                             ?userId=abc123
                          ◀─ Active segments returned    ◀─ Interaction measurement
                             ["vip", "churning",             → CDP feedback
                              "interested_in_ai"]
```

## Personalization metrics

```
KPI                     FORMULA                             TARGET
──────────────────────  ──────────────────────────────────  ────────
Lift rate               (Segment conv. - Base conv.) / base  > +15%
Personalized CTR        Personalized content clicks / Impr.  > 3x base
Revenue per visitor     Revenue / Unique visitors (segment)  +20% vs default
Engagement score        Page views × Duration × Actions      Trending up
```

## Deliverables
- Personalization strategy (levels, segments, content)
- Personalization tool configuration (Adobe Target, Optimizely)
- A/B test plan (hypotheses, KPIs, duration, sample size)
- Segment documentation (criteria + associated content)
- Tracking dashboard (lift rate, conversions per segment)
- Editor guide (create and publish content variants)

## Output format
Specify: **CMS and personalization tool** (Adobe Target, Optimizely, Sitecore XM…), **maturity** (simple A/B tests vs ML 1:1), **available data** (cookie only, CDP, CRM…), **GDPR constraints** (consent, retention period), **priority KPI** (conversion, engagement, retention).

## Anti-patterns
- ❌ **Personalizing without consent** (GDPR / ePrivacy): trackers dropped with no legal basis → CMP + prior consent
- ❌ **A/B test stopped before statistical significance**: false winners → calculated sample size + duration
- ❌ **Over-segmentation** (segments too small): no usable signal → sufficiently large segments
- ❌ **Personalization without lift measurement** vs a control group: impossible to prove value → always a control
- ❌ **Cookie-only without a CDP**: profiles fragmented across channels → unified identity (CDP)
- ❌ **No fallback** for uncovered segments: empty content → systematic default version

## Sources
- **Adobe Target / Real-Time CDP** — experienceleague.adobe.com · **Optimizely** — docs.developers.optimizely.com · **Sitecore XM Cloud** — sitecore.com
- **GDPR** (EU 2016/679) + **ePrivacy directive** (tracker consent) — eur-lex.europa.eu · **CNIL** (cookie guidelines) — cnil.fr
- **A/B testing** — statistical significance (p-value, power, sample size) — Kohavi et al., *Trustworthy Online Controlled Experiments* (2020)

## See also
- [`architecture-cms.md`](architecture-cms.md) — CDP integration in the architecture
- [`gouvernance-editoriale.md`](gouvernance-editoriale.md) — managing content variants
- [`../juridique_ia/rgpd-ia.md`](../juridique_ia/rgpd-ia.md) — GDPR/consent compliance
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — engagement metrics (AARRR/HEART)
```
