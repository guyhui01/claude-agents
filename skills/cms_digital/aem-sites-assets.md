# Skill — Adobe Experience Manager (AEM Sites & Assets)
> Certifications: Adobe Certified Expert — AEM Sites Developer · Adobe AEM Sites Business Practitioner

## Objective
Configure, develop, and administer Adobe Experience Manager (from AEM CQ5 to AEM as a Cloud Service): components, templates, publishing workflows, asset management, and Adobe Experience Cloud integrations.

## AEM architecture

```
AEM AS A CLOUD SERVICE — MAIN LAYERS
─────────────────────────────────────────────────────────
Author  → Authoring, workflows, approvals, staging
Publish → Public delivery (CDN in front)
Dispatcher → Cache, security, load balancing
AEM Assets (DAM) → Asset management and processing
Adobe Target → Personalization and A/B testing
Adobe Analytics → Tracking and audience measurement
```

## AEM project structure (Maven / Cloud Manager)

```
my-project/
├── core/              # Java components (OSGi bundles)
├── ui.apps/           # JCR components (HTL, JS, CSS, dialogs)
├── ui.content/        # Initial content (pages, configs)
├── ui.config/         # OSGi configurations
├── ui.frontend/       # Webpack/Vite module (optional)
├── dispatcher/        # Apache + Dispatcher configs
└── all/               # Assembly package
```

## AEM component — Typical structure

```
ui.apps/components/content/my-component/
├── .content.xml          # JCR node (jcr:primaryType, sling:resourceType)
├── my-component.html      # HTL template
├── _cq_dialog/           # Edit dialog (Touch UI)
│   └── .content.xml
├── _cq_editConfig/       # Behavior in the editor
└── clientlib/            # Component-specific JS/CSS
```

## HTL (Sightly) — Essential patterns

```html
<!-- Sling model injection -->
<sly data-sly-use.model="com.myproject.core.models.MyComponent">

<!-- Conditions -->
<div data-sly-test="${model.title}">${model.title}</div>

<!-- List -->
<ul data-sly-list.item="${model.items}">
  <li>${item.name}</li>
</ul>

<!-- Include fragment -->
<sly data-sly-include="header.html" />

<!-- Resource inclusion -->
<sly data-sly-resource="${'jcr:content/par' @ resourceType='wcm/foundation/components/parsys'}"/>
```

## Sling model (Java)

```java
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MyComponentModel {

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @PostConstruct
    protected void init() {
        // Post-injection logic
    }

    public String getTitle() { return title; }
    public String getDescription() { return description; }
}
```

## AEM publishing workflows

```
WORKFLOW         TRIGGER                  TYPICAL STEPS
───────────────  ───────────────────────  ─────────────────────────────────
Request for      Contributor              Drafting → Review → Approval → Publication
Activation       (Request button)         (with email notifications at each step)

DAM Asset        Asset upload             Processing (thumbnails, metadata extraction)
Update           in the DAM               → Search index update

Page Move        Page move                Link check → Redirect → Sitemap update
```

## AEM Assets — DAM best practices

| Aspect | Best practice |
|--------|---------------|
| Taxonomy | Folders by type/year/campaign, structured tags (namespaces) |
| Metadata | Metadata schemas per asset type (image, video, PDF) |
| Renditions | Auto renditions via Image Processing profiles (web, thumbnail, social) |
| Smart Tags | Adobe Sensei for automatic image tags |
| Collections | Static collections (manual selection) + dynamic (rules) |
| Rights | CUG groups (Closed User Groups) per brand/region |

## Deliverables
- AEM components (HTL + Sling Model + dialog)
- Configured publishing workflows
- DAM metadata schemas
- Technical documentation (JavaDoc + README)
- Test plan (Selenium / Cypress smoke tests)

## Output format
Specify: **AEM version** (6.5 / AEM Cloud), **deliverable type** (component, workflow, configuration, migration), **context** (new feature, redesign, CQ5 migration), **constraints** (performance, RGAA accessibility, multisite).

## Anti-patterns
- ❌ **Developing for CQ5 / obsolete versions**: technical debt → target AEM as a Cloud Service (or 6.5 LTS)
- ❌ **Business logic in the HTL** instead of a Sling Model: not testable, not reusable → Java model + presentation HTL
- ❌ **No Dispatcher / misconfigured cache**: degraded performance and security → Dispatcher cache + security rules
- ❌ **Restricted content without CUG** (Closed User Groups): access leak → CUG per brand/region
- ❌ **Ignoring Cloud Manager quality gates**: risky deployments → CI/CD pipeline with gates
- ❌ **Customizing AEM Assets DAM off-standard** (non-IPTC/XMP metadata): lost interop (see dam_expert)

## Sources
- **Adobe Experience Manager** — AEM as a Cloud Service / AEM 6.5 LTS — experienceleague.adobe.com
- **HTL (HTML Template Language)** — Adobe spec — github.com/adobe/htl-spec · **Apache Sling Models** — sling.apache.org
- **JCR** — JSR-283 (Content Repository for Java) · **OSGi** — osgi.org · **Maven / Cloud Manager** — Adobe
- **Adobe Sensei** (Smart Tags) — adobe.com/sensei

## See also
- [`performance-web.md`](performance-web.md) — AEM Dispatcher cache
- [`integration-pim-dam.md`](integration-pim-dam.md) — AEM Assets in the PIM/DAM chain
- [`architecture-cms.md`](architecture-cms.md) — monolithic AEM vs AEM Headless
- [`../dam_expert/integration-dam-cms.md`](../dam_expert/integration-dam-cms.md) — AEM Assets ↔ Sites integration
