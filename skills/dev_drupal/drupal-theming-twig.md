# Skill — Theming Twig Drupal 10
> Certifications : Acquia Certified Front-End Specialist
> Référentiel : Twig (Fabien Potencier, SensioLabs — twig.symfony.com) · Drupal Twig Coding Standards (drupal.org)

## Objectif
Créer et surcharger des templates Twig Drupal 10, utiliser les preprocess hooks et implémenter des composants UI conformes au design system — **avec gestion stricte de l'échappement XSS** (autoescape Drupal activé par défaut).

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
// client_b2b.module
function client_b2b_preprocess_commerce_product(array &$variables): void {
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

## Sécurité Twig & prévention XSS

**Drupal 10 active `autoescape='html'` par défaut** dans tous les templates Twig — `{{ variable }}` est automatiquement échappé HTML. Mais certains patterns dangereux contournent cette protection.

### ✅ Patterns sécurisés (autoescape garanti)

| Pattern | Comportement |
|---|---|
| `{{ user_input }}` | Échappement HTML automatique (`<` → `&lt;`, etc.) |
| `{{ path('route.name', {id: nid}) }}` | URLs générées via routeur Drupal (anti path traversal) |
| `{{ link(text, url) }}` | Génération `<a>` sécurisée Drupal |
| `{{ 'Message'|t({'@user': username}) }}` | Traduction `t()` avec placeholders échappés (`@`, `%`, `:`) |
| `<a href="{{ url('user.login') }}">` | Attribut HTML : auto-escapé contexte URL |

### ❌ Anti-patterns XSS (à proscrire)

```twig
{# 🔴 DANGEREUX — filtre |raw désactive l'autoescape #}
{{ user_input|raw }}             {# XSS si user_input vient d'un formulaire #}
{{ comment.body|raw }}           {# XSS stockée si HTML non-filtré #}

{# 🔴 DANGEREUX — Markup brut non filtré #}
{% set html = '<div>' ~ user_input ~ '</div>' %}
{{ html|raw }}                   {# Injection HTML #}

{# 🔴 DANGEREUX — URLs en dur sans path()/url() #}
<a href="/user/{{ uid }}">       {# Pas d'échappement contexte URL, risque #}

{# 🔴 DANGEREUX — Désactivation autoescape sur bloc #}
{% autoescape false %}
  {{ untrusted_content }}         {# Toute la zone est XSS-prone #}
{% endautoescape %}
```

### ✅ Corrections recommandées

```twig
{# Si HTML autorisé : filtrer via filter_xss_admin() en PHP avant injection #}
{# En preprocess : $variables['safe_html'] = ['#markup' => $html, '#allowed_tags' => ['p','strong','em','a']]; #}
{{ safe_html }}                  {# Markup pré-filtré côté PHP, autoescape respecté #}

{# Pour URLs dynamiques : toujours path()/url() #}
<a href="{{ path('entity.user.canonical', {user: uid}) }}">

{# Pour HTML utilisateur (commentaires, etc.) : filter_xss() côté PHP #}
{# Jamais |raw sur user input, JAMAIS #}
```

### Pattern Twig sécurisé — Sanitization en preprocess

```php
// Côté PHP (preprocess) — utiliser Html::escape() ou Xss::filter()
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Xss;

function mymodule_preprocess_node(array &$variables): void {
  // Pour texte plain (sera échappé par autoescape)
  $variables['user_text'] = $node->get('field_text')->value;

  // Pour HTML autorisé (admin uniquement) — Markup safe
  $variables['admin_html'] = [
    '#markup' => $node->get('field_html')->value,
    '#allowed_tags' => Xss::getAdminTagList(),
  ];
}
```

### Anti-patterns Twig sécurité

- ❌ **`|raw` sur user input** = XSS quasi-certaine (formulaires, commentaires, profils)
- ❌ **URLs en dur** sans `path()` / `url()` = risque path traversal + perte i18n
- ❌ **`{% autoescape false %}`** sur contenu utilisateur = désactivation complète protection
- ❌ **Concaténation HTML en Twig** (`'<div>' ~ var ~ '</div>'`) = bypass autoescape

**Sources** :
- Drupal Theming Guide — drupal.org/docs/theming-drupal
- Twig Security — twig.symfony.com/doc/3.x/api.html#environment-options
- OWASP Top 10 A03:2021 — Injection (XSS Cross-Site Scripting)
- Drupal Security Advisories — drupal.org/security

## Livrables
- Templates Twig avec suggestions correctes
- Preprocess hooks pour variables métier
- CSS/JS attachés via bibliothèque (`#attached`)

## Format de sortie
Précise : entité à thémer (node/product/user) · view mode · variables métier à afficher · comportement selon rôle

## Voir aussi
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — affichage conditionnel du prix B2B
- [`drupal-performance.md`](drupal-performance.md) — cache des fragments rendus
- [`drupal-module-custom.md`](drupal-module-custom.md) — preprocess hooks dans le module
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — accessibilité des templates (aria, contraste)
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals côté rendu
