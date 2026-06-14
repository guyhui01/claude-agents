# Skill — PIM / DAM Integration with the CMS
> Certifications: Adobe AEM Sites Developer · Acquia Certified Developer — Drupal 10 · Contentful Certified Professional

## Objective
Connect a CMS to a PIM (Product Information Management) and/or a DAM (Digital Asset Management): map the data flows, implement the connectors and synchronizations, and ensure content consistency across systems.

## PIM / DAM / CMS flow mapping

```
┌──────────────┐   REST/GraphQL API   ┌──────────────┐   REST API   ┌──────────────┐
│     PIM      │ ──────────────────▶  │    CMS       │ ──────────▶  │   FRONTEND   │
│ SAP Hybris   │   Products/Attributes│ AEM / Drupal │  HTML/JSON   │ Web/Mobile   │
│ Akeneo       │ ◀──────────────────  │ Contentful   │              │              │
│ Pimcore      │   Statuses/Feedback  └──────────────┘              └──────────────┘
└──────────────┘                             ▲
                                             │ Assets (images, videos, PDF)
┌──────────────┐   REST API / Webhook        │
│     DAM      │ ──────────────────────────▶ │
│ AEM Assets   │   Upload, auto renditions   │
│ Cloudinary   │ ◀───────────────────────── │
│ Bynder       │   Approvals, tags           │
│ Ooyala       │
└──────────────┘
```

## PIM → CMS synchronization flow

```
PIM EVENT                  CMS ACTION                    FREQUENCY
─────────────────────────  ────────────────────────────  ──────────────────
New product created        Create a product page         Real time (webhook)
Product attribute changed  Update the fields             Real time (webhook)
Product disabled           Unpublish / archive the page  Real time (webhook)
Catalog synchronized       Full sync (bulk import)       Nightly (cron job)
Price updated              Update displayed prices       Hourly
```

## Akeneo → Drupal connector (example)

```php
<?php
// modules/custom/akeneo_sync/src/Service/AkeneoProductSync.php

class AkeneoProductSync {

    public function syncProduct(string $akeneo_code): void {
        // 1. Fetch the product from the Akeneo API
        $product = $this->akeneoClient->getProductApi()->get($akeneo_code);

        // 2. Map Akeneo attributes → Drupal fields
        $data = [
            'type'              => 'product',
            'title'             => $product['values']['name'][0]['data'] ?? $akeneo_code,
            'field_sku'         => $akeneo_code,
            'field_description' => $this->getRichText($product, 'description'),
            'field_price'       => $this->getPrice($product),
            'field_status'      => $product['enabled'] ? 1 : 0,
        ];

        // 3. Create or update the Drupal node
        $existing = $this->findNodeBySku($akeneo_code);
        if ($existing) {
            $node = $this->nodeStorage->load($existing);
            foreach ($data as $field => $value) {
                $node->set($field, $value);
            }
        } else {
            $node = $this->nodeStorage->create($data);
        }

        $node->save();
    }
}
```

## Cloudinary DAM → CMS integration

```typescript
// Upload an asset and get the automatic renditions
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadAsset(file: Buffer, folder: string, tags: string[]) {
  const result = await cloudinary.uploader.upload(file, {
    folder,
    tags,
    transformation: [
      { quality: 'auto', fetch_format: 'auto' },       // auto WebP/AVIF
    ],
    eager: [
      { width: 1920, crop: 'limit', format: 'webp' },  // Hero 1920px
      { width: 800,  crop: 'fill',  format: 'webp' },  // Card 800px
      { width: 400,  crop: 'thumb', gravity: 'face' },  // Thumbnail 400px
    ],
    eager_async: true,
  })

  return {
    publicId: result.public_id,
    url: result.secure_url,
    renditions: result.eager,
  }
}
```

## PIM → CMS attribute mapping

```
AKENEO ATTRIBUTE        DRUPAL / CONTENTFUL FIELD   TRANSFORMATION
──────────────────────  ──────────────────────────  ────────────────────────────
name[fr_FR]             field_title                 Trim, capitalize first letter
description_html[fr_FR] field_body                  HTML sanitize + truncate 500 chars
price.EUR               field_price                 Float, rounded to 2 decimals
categories[]            field_category (taxonomy)   Map slugs ↔ term IDs
images[0].url           field_image (media)         Re-upload via DAM API
enabled                 status (published/unpublished) Boolean → 0/1
weight.value            field_weight                g → kg conversion if needed
```

## Deliverables
- Flow mapping (PIM/DAM → CMS, diagram)
- Attribute mapping specifications (source → target table)
- Developed connectors (modules / microservices)
- Webhook configuration (events, retry, monitoring)
- Operational documentation (resync procedures, error handling)
- Integration tests (coverage of critical flows)

## Output format
Specify: **source PIM** (Akeneo, SAP Hybris, Pimcore…), **DAM** (AEM Assets, Cloudinary, Bynder…), **target CMS**, **volume** (SKU, assets), **sync mode** (real time via webhook or nightly batch), **constraints** (multilingual, multi-market).

## Anti-patterns
- ❌ **Uploading assets directly into the CMS** (bypassing the DAM): ungoverned assets, no rights → reference assets from the DAM
- ❌ **Storing product data in the CMS** instead of referencing the PIM: dual ownership and desync → the PIM stays the source of truth
- ❌ **Sync without error handling / retry / idempotency**: duplicates or silent desync → idempotent webhooks + retry queue
- ❌ **Permanent full sync** instead of delta/event-driven: needless load → webhook on event + nightly bulk
- ❌ **No flow monitoring** PIM/DAM → CMS: invisible failures → alerts + dashboard
- ❌ **Citing/maintaining discontinued tools**: e.g., *Ooyala* (OVP shut down in 2019) → keep the tool list current (current video DAM: Bynder, Cloudinary, AEM Assets)

## Sources
- **PIM**: Akeneo (Serenity) — akeneo.com · SAP Commerce/Hybris PCM — sap.com · Pimcore — pimcore.com
- **DAM**: Adobe AEM Assets — experienceleague.adobe.com · Cloudinary — cloudinary.com · Bynder — developer.bynder.com *(Ooyala OVP shut down in 2019 — historical example)*
- **GS1 General Specifications v24.0** (2024) — GTIN/GLN for product matching — gs1.org
- **Webhooks / REST / GraphQL** — event-driven integration patterns

## See also
- [`../pim_expert/syndication-canaux.md`](../pim_expert/syndication-canaux.md) — product distribution to channels
- [`../dam_expert/integration-dam-cms.md`](../dam_expert/integration-dam-cms.md) — DAM view of CMS integration
- [`cms-headless.md`](cms-headless.md) — headless consumption of product content
- [`architecture-cms.md`](architecture-cms.md) — the place of PIM/DAM in a composable architecture
