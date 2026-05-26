# Skill — Intégration DAM ↔ CMS (AEM, Drupal, Contentful, Headless)
> Certifications : Adobe AEM Assets Specialist · Cloudinary Media Developer Expert · Widen Certified / Acquia

## Objectif
Connecter le DAM au CMS pour permettre aux éditeurs d'insérer des assets approuvés directement depuis le DAM dans les pages web, sans contournement (upload direct sur le CMS) — garantissant ainsi que seuls les assets gouvernés sont publiés.

## Patterns d'intégration DAM → CMS

```
PATTERN                  DESCRIPTION                              AVANTAGES               LIMITATIONS
──────────────────────   ──────────────────────────────────────   ─────────────────────   ──────────────────────
Asset Picker natif       Plugin DAM dans l'éditeur CMS            UX fluide éditeur        Dépendance plugin
Asset reference (URL)    Le CMS stocke l'URL DAM, pas le fichier  Pas de doublon           CDN DAM requis
Webhook push             DAM notifie le CMS à chaque publication  Temps réel               Complexité setup
API pull                 CMS interroge le DAM à la demande        Flexibilité              Latence si non caché
Sync CDN (Cloudinary)    Assets servis depuis CDN commun          Performance maximale     Coût CDN
```

## Intégration AEM Sites ↔ AEM Assets

```
COMPOSANT               DESCRIPTION                          CONFIGURATION
──────────────────────  ───────────────────────────────────  ─────────────────────────────────────────
Asset Picker (OOB)      Sélecteur d'assets intégré AEM       Natif — configure les filtres de recherche
Scene7 / DMS7           DAM + CDN + renditions dans AEM      Activer via Cloud Config → Scene7
Content Fragment        Assets référencés dans des CF        Propriété image dans CF model = asset ref.
GraphQL API             Exposer assets depuis AEM Headless   Persisted queries sur AssetModel
Dynamic Media           URLs dynamiques avec transformations  dm:{imagePreset}:{asset_path}
```

## Intégration Bynder ↔ Drupal 10

```php
// Module Drupal personnalisé : Bynder Media Source
// Installation : composer require bynder/bynder-php-sdk

use Bynder\Api\BynderClient;

class BynderMediaSource extends MediaSourceBase {
    public function getAssets(array $filters = []): array {
        $client = new BynderClient([
            'consumer_key'    => $this->config->get('consumer_key'),
            'consumer_secret' => $this->config->get('consumer_secret'),
            'token'           => $this->config->get('access_token'),
            'token_secret'    => $this->config->get('access_token_secret'),
            'base_url'        => 'https://[brand].getbynder.com/',
        ]);

        $assetBankManager = $client->getAssetBankManager();
        return $assetBankManager->getMediaList($filters)->wait();
    }
}
```

## Intégration Cloudinary ↔ Contentful (Headless CMS)

```javascript
// Contentful App SDK + Cloudinary Media Library Widget
import { CloudinaryMediaLibraryWidget } from '@cloudinary/url-gen';

const openCloudinaryPicker = (sdk) => {
  window.cloudinary.openMediaLibrary({
    cloud_name: 'mon-cloud',
    api_key: 'KEY',
    multiple: false,
    max_files: 1,
  }, {
    insertHandler: (data) => {
      data.assets.forEach((asset) => {
        // Mise à jour du champ Contentful avec l'URL Cloudinary
        sdk.field.setValue({
          url:    asset.secure_url,
          width:  asset.width,
          height: asset.height,
          alt:    asset.context?.custom?.alt || asset.display_name,
        });
      });
    }
  });
};
```

## Livrables
- Schéma d'architecture d'intégration DAM → CMS (flux, composants, API)
- Configuration du connecteur DAM natif ou développement du plugin
- Documentation d'intégration (endpoints, authentification, webhooks)
- Guide éditeur (comment insérer un asset DAM depuis le CMS)
- Tests d'intégration (performance, disponibilité, fallback)
- Monitoring de la connexion DAM-CMS (alertes si disruption)

## Format de sortie
Précise : **DAM source** (Bynder, AEM Assets, Cloudinary, Widen…), **CMS cible** (AEM Sites, Drupal 10, Contentful, WordPress…), **type d'intégration** souhaité (asset picker / API / sync CDN), **contraintes de performance** (SLA temps de réponse picker), **environnements** (dev, staging, prod).
