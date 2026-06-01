# Skill — Intégration PIM / DAM au CMS
> Certifications : Adobe AEM Sites Developer · Acquia Certified Developer — Drupal 10 · Contentful Certified Professional

## Objectif
Connecter un CMS à un PIM (Product Information Management) et/ou un DAM (Digital Asset Management) : cartographier les flux de données, implémenter les connecteurs et synchronisations, et garantir la cohérence des contenus entre systèmes.

## Cartographie des flux PIM / DAM / CMS

```
┌──────────────┐   API REST/GraphQL   ┌──────────────┐   API REST   ┌──────────────┐
│     PIM      │ ──────────────────▶  │    CMS       │ ──────────▶  │   FRONTEND   │
│ SAP Hybris   │   Produits/Attributs │ AEM / Drupal │  HTML/JSON   │ Web/Mobile   │
│ Akeneo       │ ◀──────────────────  │ Contentful   │              │              │
│ Pimcore      │   Statuts/Retours    └──────────────┘              └──────────────┘
└──────────────┘                             ▲
                                             │ Assets (images, vidéos, PDF)
┌──────────────┐   API REST / Webhook        │
│     DAM      │ ──────────────────────────▶ │
│ AEM Assets   │   Upload, rendus auto       │
│ Cloudinary   │ ◀───────────────────────── │
│ Bynder       │   Approbations, tags        │
│ Ooyala       │
└──────────────┘
```

## Flux de synchronisation PIM → CMS

```
ÉVÉNEMENT PIM              ACTION CMS                    FRÉQUENCE
─────────────────────────  ────────────────────────────  ──────────────────
Nouveau produit créé       Créer une page produit        Temps réel (webhook)
Attribut produit modifié   Mettre à jour les champs      Temps réel (webhook)
Produit désactivé          Dépublier / archiver la page  Temps réel (webhook)
Catalogue synchronisé      Sync complète (bulk import)   Nuit (cron job)
Prix mis à jour            Mise à jour prix affichés     Toutes les heures
```

## Connecteur Akeneo → Drupal (exemple)

```php
<?php
// modules/custom/akeneo_sync/src/Service/AkeneoProductSync.php

class AkeneoProductSync {

    public function syncProduct(string $akeneo_code): void {
        // 1. Récupérer le produit depuis l'API Akeneo
        $product = $this->akeneoClient->getProductApi()->get($akeneo_code);

        // 2. Mapper les attributs Akeneo → champs Drupal
        $data = [
            'type'              => 'product',
            'title'             => $product['values']['name'][0]['data'] ?? $akeneo_code,
            'field_sku'         => $akeneo_code,
            'field_description' => $this->getRichText($product, 'description'),
            'field_price'       => $this->getPrice($product),
            'field_status'      => $product['enabled'] ? 1 : 0,
        ];

        // 3. Créer ou mettre à jour le nœud Drupal
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

## Intégration DAM Cloudinary → CMS

```typescript
// Uploader un asset et obtenir les rendus automatiques
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
      { quality: 'auto', fetch_format: 'auto' },       // WebP/AVIF auto
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
    rendus: result.eager,
  }
}
```

## Mapping d'attributs PIM → CMS

```
ATTRIBUT AKENEO         CHAMP DRUPAL / CONTENTFUL   TRANSFORMATION
──────────────────────  ──────────────────────────  ────────────────────────────
name[fr_FR]             field_title                 Trim, capitalize first letter
description_html[fr_FR] field_body                  HTML sanitize + truncate 500 chars
price.EUR               field_price                 Float, arrondi 2 décimales
categories[]            field_category (taxonomy)   Mapping slugs ↔ term IDs
images[0].url           field_image (media)         Réupload via DAM API
enabled                 status (published/unpublished) Boolean → 0/1
weight.value            field_weight                Conversion g → kg si nécessaire
```

## Livrables
- Cartographie des flux (PIM/DAM → CMS, diagramme)
- Spécifications du mapping d'attributs (tableau source → cible)
- Connecteurs développés (modules / microservices)
- Configuration des webhooks (événements, retry, monitoring)
- Documentation opérationnelle (procédures de resync, gestion des erreurs)
- Tests d'intégration (couverture flux critiques)

## Format de sortie
Précise : **PIM source** (Akeneo, SAP Hybris, Pimcore…), **DAM** (AEM Assets, Cloudinary, Bynder…), **CMS cible**, **volume** (SKU, assets), **mode de sync** (temps réel via webhook ou batch nocturne), **contraintes** (multilingue, multimarché).

## Anti-patterns
- ❌ **Upload direct des assets dans le CMS** (bypass du DAM) : assets non gouvernés, sans droits → asset reference depuis le DAM
- ❌ **Stocker les données produit dans le CMS** au lieu de référencer le PIM : double maîtrise et désynchronisation → le PIM reste source de vérité
- ❌ **Synchronisation sans gestion d'erreur / retry / idempotence** : doublons ou désync silencieuse → webhooks idempotents + file de retry
- ❌ **Sync complète permanente** au lieu de delta/événementiel : charge inutile → webhook sur événement + bulk nocturne
- ❌ **Pas de monitoring des flux** PIM/DAM → CMS : pannes invisibles → alertes + dashboard
- ❌ **Citer/maintenir des outils discontinués** : ex. *Ooyala* (OVP arrêté en 2019) → tenir la liste d'outils à jour (DAM vidéo actuels : Bynder, Cloudinary, AEM Assets)

## Sources
- **PIM** : Akeneo (Serenity) — akeneo.com · SAP Commerce/Hybris PCM — sap.com · Pimcore — pimcore.com
- **DAM** : Adobe AEM Assets — experienceleague.adobe.com · Cloudinary — cloudinary.com · Bynder — developer.bynder.com *(Ooyala OVP arrêté en 2019 — exemple historique)*
- **GS1 General Specifications v24.0** (2024) — GTIN/GLN pour l'appariement produit — gs1.org
- **Webhooks / REST / GraphQL** — patterns d'intégration événementielle

## Voir aussi
- [`../pim_expert/syndication-canaux.md`](../pim_expert/syndication-canaux.md) — diffusion produit vers les canaux
- [`../dam_expert/integration-dam-cms.md`](../dam_expert/integration-dam-cms.md) — vue DAM de l'intégration au CMS
- [`cms-headless.md`](cms-headless.md) — consommation headless des contenus produit
- [`architecture-cms.md`](architecture-cms.md) — place du PIM/DAM dans l'architecture composable
