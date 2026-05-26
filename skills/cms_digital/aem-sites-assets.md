# Skill — Adobe Experience Manager (AEM Sites & Assets)
> Certifications : Adobe Certified Expert — AEM Sites Developer · Adobe AEM Sites Business Practitioner

## Objectif
Configurer, développer et administrer Adobe Experience Manager (AEM CQ5 à AEM as a Cloud Service) : création de composants, templates, workflows de publication, gestion des assets et intégrations Adobe Experience Cloud.

## Architecture AEM

```
AEM AS A CLOUD SERVICE — COUCHES PRINCIPALES
─────────────────────────────────────────────────────────
Author  → Authoring, workflows, approbations, staging
Publish → Diffusion publique (CDN en front)
Dispatcher → Cache, sécurité, load balancing
AEM Assets (DAM) → Gestion et traitement des assets
Adobe Target → Personnalisation et tests A/B
Adobe Analytics → Tracking et mesure d'audience
```

## Structure de projet AEM (Maven / Cloud Manager)

```
my-project/
├── core/              # Composants Java (OSGi bundles)
├── ui.apps/           # Composants JCR (HTL, JS, CSS, dialogs)
├── ui.content/        # Contenu initial (pages, configs)
├── ui.config/         # Configurations OSGi
├── ui.frontend/       # Module Webpack/Vite (optionnel)
├── dispatcher/        # Configs Apache + Dispatcher
└── all/               # Package d'assemblage
```

## Composant AEM — Structure type

```
ui.apps/components/content/mon-composant/
├── .content.xml          # Node JCR (jcr:primaryType, sling:resourceType)
├── mon-composant.html    # Template HTL
├── _cq_dialog/           # Dialog d'édition (Touch UI)
│   └── .content.xml
├── _cq_editConfig/       # Comportement dans l'éditeur
└── clientlib/            # JS/CSS spécifique
```

## HTL (Sightly) — Patterns essentiels

```html
<!-- Injection de modèle Sling -->
<sly data-sly-use.model="com.monprojet.core.models.MonComposant">

<!-- Conditions -->
<div data-sly-test="${model.title}">${model.title}</div>

<!-- Liste -->
<ul data-sly-list.item="${model.items}">
  <li>${item.name}</li>
</ul>

<!-- Include fragment -->
<sly data-sly-include="header.html" />

<!-- Resource inclusion -->
<sly data-sly-resource="${'jcr:content/par' @ resourceType='wcm/foundation/components/parsys'}"/>
```

## Modèle Sling (Java)

```java
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MonComposantModel {

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @PostConstruct
    protected void init() {
        // Logique post-injection
    }

    public String getTitle() { return title; }
    public String getDescription() { return description; }
}
```

## Workflows de publication AEM

```
WORKFLOW         DÉCLENCHEUR              ÉTAPES TYPES
───────────────  ───────────────────────  ─────────────────────────────────
Request for      Contributeur             Rédaction → Relecture → Approbation → Publication
Activation       (bouton Demande)         (avec notifications email à chaque étape)

DAM Asset        Upload asset             Traitement (thumbnails, metadata extraction)
Update           dans DAM                 → Mise à jour index recherche

Page Move        Déplacement page         Vérification liens → Redirection → Mise à jour sitemap
```

## AEM Assets — Bonnes pratiques DAM

| Aspect | Bonne pratique |
|--------|---------------|
| Taxonomie | Dossiers par type/année/campagne, tags structurés (namespaces) |
| Métadonnées | Schémas de métadonnées par type d'asset (image, vidéo, PDF) |
| Rendus | Rendus auto via profils Image Processing (web, thumbnail, social) |
| Smart Tags | Adobe Sensei pour tags automatiques sur images |
| Collections | Collections statiques (sélection manuelle) + dynamiques (règles) |
| Droits | Groupes CUG (Closed User Groups) par marque/région |

## Livrables
- Composants AEM (HTL + Sling Model + dialog)
- Workflows de publication configurés
- Schémas de métadonnées DAM
- Documentation technique (JavaDoc + README)
- Plan de tests (smoke tests Selenium / Cypress)

## Format de sortie
Précise : **version AEM** (6.5 / AEM Cloud), **type de livrable** (composant, workflow, configuration, migration), **contexte** (nouvelle fonctionnalité, refonte, migration CQ5), **contraintes** (performance, accessibilité RGAA, multisite).
