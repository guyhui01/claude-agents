# Skill — DAM ↔ CMS Integration (AEM, Drupal, Contentful, Headless)
> Certifications: Adobe AEM Assets Specialist · Cloudinary Media Developer Expert · Widen Certified / Acquia

## Objective
Connect the DAM to the CMS so editors can insert approved assets straight from the DAM into web pages, with no workaround (direct upload to the CMS) — ensuring only governed assets get published.

## DAM → CMS integration patterns

```
PATTERN                  DESCRIPTION                              PROS                    LIMITATIONS
──────────────────────   ──────────────────────────────────────   ─────────────────────   ──────────────────────
Native Asset Picker      DAM plugin in the CMS editor            Smooth editor UX         Plugin dependency
Asset reference (URL)    CMS stores the DAM URL, not the file     No duplicate             DAM CDN required
Webhook push             DAM notifies the CMS on each publish     Real-time                Setup complexity
API pull                 CMS queries the DAM on demand            Flexibility              Latency if uncached
CDN sync (Cloudinary)    Assets served from a shared CDN          Maximum performance      CDN cost
```

## AEM Sites ↔ AEM Assets integration

```
COMPONENT               DESCRIPTION                          CONFIGURATION
──────────────────────  ───────────────────────────────────  ─────────────────────────────────────────
Asset Picker (OOB)      Built-in AEM asset selector          Native — configure the search filters
Scene7 / DMS7           DAM + CDN + renditions in AEM        Enable via Cloud Config → Scene7
Content Fragment        Assets referenced in CFs             Image property in a CF model = asset ref.
GraphQL API             Expose assets from AEM Headless      Persisted queries on AssetModel
Dynamic Media           Dynamic URLs with transformations    dm:{imagePreset}:{asset_path}
```

## Bynder ↔ Drupal 10 integration

```php
// Custom Drupal module: Bynder Media Source
// Installation: composer require bynder/bynder-php-sdk

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

## Cloudinary ↔ Contentful integration (Headless CMS)

```javascript
// Contentful App SDK + Cloudinary Media Library Widget
import { CloudinaryMediaLibraryWidget } from '@cloudinary/url-gen';

const openCloudinaryPicker = (sdk) => {
  window.cloudinary.openMediaLibrary({
    cloud_name: 'my-cloud',
    api_key: 'KEY',
    multiple: false,
    max_files: 1,
  }, {
    insertHandler: (data) => {
      data.assets.forEach((asset) => {
        // Update the Contentful field with the Cloudinary URL
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

## Deliverables
- DAM → CMS integration architecture diagram (flows, components, API)
- Native DAM connector configuration or plugin development
- Integration documentation (endpoints, authentication, webhooks)
- Editor guide (how to insert a DAM asset from the CMS)
- Integration tests (performance, availability, fallback)
- DAM-CMS connection monitoring (alerts on disruption)

## Output format
Specify: **source DAM** (Bynder, AEM Assets, Cloudinary, Widen…), **target CMS** (AEM Sites, Drupal 10, Contentful, WordPress…), desired **integration type** (asset picker / API / CDN sync), **performance constraints** (picker response-time SLA), **environments** (dev, staging, prod).

## Anti-patterns
- ❌ **Direct upload to the CMS** (bypassing the DAM): ungoverned, rights-unvalidated assets get published → enforce the asset picker, disable CMS upload
- ❌ **Storing the file in the CMS** instead of referencing the DAM URL: duplicates and desync → prefer the asset reference (URL/CDN)
- ❌ **No fallback if the DAM is unavailable**: broken pages → fallback image + CDN cache
- ❌ **API pull with no cache**: latency on every editor render → cache the DAM responses
- ❌ **No connection monitoring** DAM↔CMS: silent disruptions → alerts + availability tests
- ❌ **Metadata (ALT, rights) not propagated** from the DAM to the CMS: accessibility and compliance lost → map ALT/rights on insertion

## Sources
- **Adobe AEM Assets** (Asset Picker, Dynamic Media/Scene7, Content Fragments, GraphQL) — experienceleague.adobe.com
- **Bynder PHP SDK** (`bynder/bynder-php-sdk`) — developer.bynder.com · **Cloudinary** (`@cloudinary/url-gen`, Media Library Widget) — cloudinary.com/documentation
- **Drupal 10/11** Media Source API — drupal.org · **Contentful App SDK** — contentful.com/developers
- **OAuth 2.1** (RFC 9700) — API connector authentication

## See also
- [`distribution-multicanal.md`](distribution-multicanal.md) — CDN distribution of referenced assets
- [`taxonomie-assets.md`](taxonomie-assets.md) — metadata (ALT, rights) to propagate to the CMS
- [`../cms_digital/integration-pim-dam.md`](../cms_digital/integration-pim-dam.md) — CMS view of the PIM/DAM integration
- [`../cms_digital/cms-headless.md`](../cms_digital/cms-headless.md) — headless asset consumption
