# Skill — Theming Twig Drupal 10
> Certifications : Acquia Certified Front-End Specialist

## Objectif
Créer et surcharger des templates Twig Drupal 10, utiliser les preprocess hooks et implémenter des composants UI conformes au design system.

## Hiérarchie de suggestion de templates
```
commerce-product.html.twig                     # tous les produits
commerce-product--cable-ftth.html.twig         # type câble FTTH uniquement
commerce-product--cable-ftth--full.html.twig   # type + view mode full
node--article--teaser.html.twig                # node type + view mode
views-view--catalog-by-category.html.twig      # vue spécifique
```

## Template fiche produit B2B (illustratif)
```twig
{# templates/commerce/commerce-product--b2b.html.twig #}
<article{{ attributes.addClass('product-b2b') }}>
  <h1>{{ product.title.value }}</h1>
  <p class="reference">Réf. : {{ variation.sku.value }}</p>

  {% if is_b2b_buyer %}
    <div class="price-b2b">
      {{ variation.price.0.number|number_format(2, ',', ' ') }} € HT / {{ unit }}
    </div>
    {{ add_to_cart_form }}
  {% else %}
    <p class="price-locked">
      <a href="{{ path('user.login') }}">Connectez-vous pour voir le tarif B2B</a>
    </p>
  {% endif %}

  {% if fiche_technique_url %}
    <a href="{{ fiche_technique_url }}" class="btn-pdf" target="_blank">
      Télécharger la fiche technique (PDF)
    </a>
  {% endif %}
</article>
```

## Preprocess hook — injecter des variables dans le template
```php
// aginode_b2b.module
function aginode_b2b_preprocess_commerce_product(array &$variables): void {
  $account = \Drupal::currentUser();
  $variables['is_b2b_buyer'] = $account->hasRole('b2b_buyer');

  // URL fiche technique PDF
  $product = $variables['product_entity'];
  if ($pdf = $product->get('field_fiche_technique')->entity) {
    $variables['fiche_technique_url'] = $pdf->createFileUrl();
  }
}
```

## Breadcrumb (Easy Breadcrumb)
```twig
{# Fil d'Ariane cliquable #}
{% if breadcrumb %}
  <nav class="breadcrumb" aria-label="Fil d'Ariane">
    {% for item in breadcrumb %}
      {% if not loop.last %}
        <a href="{{ item.url }}">{{ item.text }}</a> &gt;
      {% else %}
        <span aria-current="page">{{ item.text }}</span>
      {% endif %}
    {% endfor %}
  </nav>
{% endif %}
```

## Bonnes pratiques
- Toujours utiliser `{{ attributes }}` sur l'élément racine (classes Drupal)
- Preprocess dans le module custom — pas dans le `.theme` (sauf theming pur)
- Variables métier injectées via preprocess, jamais calculées dans le Twig
- `{{ path('route.name') }}` pour les URLs — pas de chemins en dur

## Livrables
- Templates Twig avec suggestions correctes
- Preprocess hooks pour variables métier
- CSS/JS attachés via bibliothèque (`#attached`)

## Format de sortie
Précise : entité à thémer (node/product/user) · view mode · variables métier à afficher · comportement selon rôle
