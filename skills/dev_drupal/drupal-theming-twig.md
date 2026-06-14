# Skill — Drupal 10 Twig Theming
> Certifications: Acquia Certified Front-End Specialist
> Framework: Twig (Fabien Potencier, SensioLabs — twig.symfony.com) · Drupal Twig Coding Standards (drupal.org)

## Objective
Create and override Drupal 10 Twig templates, use preprocess hooks, and implement UI components compliant with the design system — **with strict XSS escaping** (Drupal autoescape enabled by default).

## Template suggestion hierarchy
```
commerce-product.html.twig                     # all products
commerce-product--cable-ftth.html.twig         # FTTH cable type only
commerce-product--cable-ftth--full.html.twig   # type + full view mode
node--article--teaser.html.twig                # node type + view mode
views-view--catalog-by-category.html.twig      # specific view
```

## B2B product page template (illustrative)
```twig
{# templates/commerce/commerce-product--b2b.html.twig #}
<article{{ attributes.addClass('product-b2b') }}>
  <h1>{{ product.title.value }}</h1>
  <p class="reference">Ref.: {{ variation.sku.value }}</p>

  {% if is_b2b_buyer %}
    <div class="price-b2b">
      {{ variation.price.0.number|number_format(2, '.', ',') }} € excl. VAT / {{ unit }}
    </div>
    {{ add_to_cart_form }}
  {% else %}
    <p class="price-locked">
      <a href="{{ path('user.login') }}">Log in to see the B2B price</a>
    </p>
  {% endif %}

  {% if datasheet_url %}
    <a href="{{ datasheet_url }}" class="btn-pdf" target="_blank">
      Download the datasheet (PDF)
    </a>
  {% endif %}
</article>
```

## Preprocess hook — inject variables into the template
```php
// client_b2b.module
function client_b2b_preprocess_commerce_product(array &$variables): void {
  $account = \Drupal::currentUser();
  $variables['is_b2b_buyer'] = $account->hasRole('b2b_buyer');

  // Datasheet PDF URL
  $product = $variables['product_entity'];
  if ($pdf = $product->get('field_datasheet')->entity) {
    $variables['datasheet_url'] = $pdf->createFileUrl();
  }
}
```

## Breadcrumb (Easy Breadcrumb)
```twig
{# Clickable breadcrumb #}
{% if breadcrumb %}
  <nav class="breadcrumb" aria-label="Breadcrumb">
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

## Best practices
- Always use `{{ attributes }}` on the root element (Drupal classes)
- Preprocess in the custom module — not in the `.theme` (except pure theming)
- Inject business variables via preprocess, never compute them in Twig
- `{{ path('route.name') }}` for URLs — no hardcoded paths

## Twig security & XSS prevention

**Drupal 10 enables `autoescape='html'` by default** in all Twig templates — `{{ variable }}` is automatically HTML-escaped. But some dangerous patterns bypass this protection.

### ✅ Secure patterns (autoescape guaranteed)

| Pattern | Behavior |
|---|---|
| `{{ user_input }}` | Automatic HTML escaping (`<` → `&lt;`, etc.) |
| `{{ path('route.name', {id: nid}) }}` | URLs generated via the Drupal router (anti path traversal) |
| `{{ link(text, url) }}` | Secure Drupal `<a>` generation |
| `{{ 'Message'|t({'@user': username}) }}` | `t()` translation with escaped placeholders (`@`, `%`, `:`) |
| `<a href="{{ url('user.login') }}">` | HTML attribute: auto-escaped in URL context |

### ❌ XSS anti-patterns (forbidden)

```twig
{# 🔴 DANGEROUS — the |raw filter disables autoescape #}
{{ user_input|raw }}             {# XSS if user_input comes from a form #}
{{ comment.body|raw }}           {# Stored XSS if HTML is unfiltered #}

{# 🔴 DANGEROUS — raw, unfiltered markup #}
{% set html = '<div>' ~ user_input ~ '</div>' %}
{{ html|raw }}                   {# HTML injection #}

{# 🔴 DANGEROUS — hardcoded URLs without path()/url() #}
<a href="/user/{{ uid }}">       {# No URL-context escaping, risky #}

{# 🔴 DANGEROUS — autoescape disabled on a block #}
{% autoescape false %}
  {{ untrusted_content }}         {# The whole area is XSS-prone #}
{% endautoescape %}
```

### ✅ Recommended fixes

```twig
{# If HTML is allowed: filter via filter_xss_admin() in PHP before injection #}
{# In preprocess: $variables['safe_html'] = ['#markup' => $html, '#allowed_tags' => ['p','strong','em','a']]; #}
{{ safe_html }}                  {# Markup pre-filtered in PHP, autoescape respected #}

{# For dynamic URLs: always path()/url() #}
<a href="{{ path('entity.user.canonical', {user: uid}) }}">

{# For user HTML (comments, etc.): filter_xss() in PHP #}
{# Never |raw on user input, NEVER #}
```

### Secure Twig pattern — Sanitization in preprocess

```php
// In PHP (preprocess) — use Html::escape() or Xss::filter()
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Xss;

function mymodule_preprocess_node(array &$variables): void {
  // For plain text (will be escaped by autoescape)
  $variables['user_text'] = $node->get('field_text')->value;

  // For allowed HTML (admin only) — safe Markup
  $variables['admin_html'] = [
    '#markup' => $node->get('field_html')->value,
    '#allowed_tags' => Xss::getAdminTagList(),
  ];
}
```

### Twig security anti-patterns

- ❌ **`|raw` on user input** = almost-certain XSS (forms, comments, profiles)
- ❌ **Hardcoded URLs** without `path()` / `url()` = path traversal risk + loss of i18n
- ❌ **`{% autoescape false %}`** on user content = protection fully disabled
- ❌ **HTML concatenation in Twig** (`'<div>' ~ var ~ '</div>'`) = autoescape bypass

**Sources**:
- Drupal Theming Guide — drupal.org/docs/theming-drupal
- Twig Security — twig.symfony.com/doc/3.x/api.html#environment-options
- OWASP Top 10 A03:2021 — Injection (XSS Cross-Site Scripting)
- Drupal Security Advisories — drupal.org/security

## Deliverables
- Twig templates with correct suggestions
- Preprocess hooks for business variables
- CSS/JS attached via a library (`#attached`)

## Output format
Specify: entity to theme (node/product/user) · view mode · business variables to display · behavior by role

## See also
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — conditional B2B price display
- [`drupal-performance.md`](drupal-performance.md) — caching of rendered fragments
- [`drupal-module-custom.md`](drupal-module-custom.md) — preprocess hooks in the module
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — template accessibility (aria, contrast)
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals on the render side
