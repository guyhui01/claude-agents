# Skill — Drupal Third-Party API Integration (Stripe, SendGrid, Chronopost)
> Certifications: Acquia Certified Developer · Zend PHP Engineer 8.x

## Objective
Integrate third-party APIs into Drupal 10 via injected services, with error handling, logging, and externalized secrets.

## Stripe — 3D Secure card payment

```bash
composer require drupal/commerce_stripe stripe/stripe-php
```

```php
// Handled by drupal/commerce_stripe — no custom code required
// Configuration via UI + YAML config:
```
```yaml
# config/sync/commerce_payment_gateway.stripe_b2b.yml
id: stripe_b2b
label: 'Stripe B2B'
plugin: stripe
configuration:
  mode: live          # 'test' on staging
  publishable_key: '' # override via settings.php
  secret_key: ''      # override via settings.php
  webhook_secret: ''  # override via settings.php
```

```php
// web/sites/default/settings.prod.php (not versioned)
$config['commerce_payment_gateway.stripe_b2b']['configuration']['secret_key']
  = getenv('STRIPE_SECRET_KEY');
```

## SendGrid — Transactional emails

```bash
composer require drupal/sendgrid_integration
```

```php
// client_b2b.module — hook_mail() implementation (procedural hook)
function client_b2b_mail(string $key, array &$message, array $params): void {
  match($key) {
    'account_activated' => $message['subject'] = 'Your telecom client account is activated',
    'account_refused'   => $message['subject'] = 'Your account request was rejected',
    'order_confirmation'=> $message['subject'] = 'Order confirmation #' . $params['order']->getOrderNumber(),
    'order_shipped'     => $message['subject'] = 'Your order has been shipped',
  };
  $message['body'][] = $params['body'] ?? '';
}

// Sending from a service
$this->mailManager->mail(
  'client_b2b',          // module
  'account_activated',    // mail key
  $account->getEmail(),   // recipient
  'en',                   // language
  ['account' => $account] // template parameters
);
```

```yaml
# config/sync/sendgrid_integration.settings.yml
apikey: ''   # override settings.php → getenv('SENDGRID_API_KEY')
```

## Chronopost / Colissimo — Shipping cost calculation

```php
// src/Service/ShippingRateService.php
final class ShippingRateService {
  public function __construct(
    private readonly ClientInterface $httpClient,  // Guzzle HTTP
    private readonly LoggerInterface $logger,
  ) {}

  public function getRate(string $postalCode, float $weightKg): ?Price {
    try {
      $response = $this->httpClient->post('https://api.chronopost.fr/rates', [
        'json' => ['postal_code' => $postalCode, 'weight' => $weightKg],
        'headers' => ['X-Api-Key' => getenv('CHRONOPOST_API_KEY')],
        'timeout' => 5,
      ]);
      $data = json_decode($response->getBody(), true);
      return new Price($data['amount'], 'EUR');
    } catch (\Exception $e) {
      $this->logger->error('Chronopost API error: @msg', ['@msg' => $e->getMessage()]);
      return null; // fallback = flat rate
    }
  }
}
```

## Secret management

```php
// settings.php (prod) — never an API key in versioned YAML
$config['sendgrid_integration.settings']['apikey'] = getenv('SENDGRID_API_KEY');
// OR via the Drupal Key module (recommended)
```

```bash
# .env (local — not versioned, in .gitignore)
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
CHRONOPOST_API_KEY=xxxxxxxxxxxx
```

## Best practices
- Always wrap API calls in a `try/catch` with logging
- Explicit HTTP timeout (5s max) — never an indefinite block
- Plan a fallback if the third-party API is unavailable (flat rate, queued email)
- API keys in environment variables — never hardcoded in code or YAML

## Deliverables
- PHP services with injected Guzzle HTTP client
- Error handling + logging on every API call
- Externalized secrets (settings.php + env vars)
- PHPUnit tests with a mocked HttpClient

## Output format
Specify: third-party API to integrate · endpoint(s) involved · data exchanged · behavior on API error · environment (test/prod)

## Anti-patterns
- ❌ **API key hardcoded or in versioned YAML**: secret leak → environment variables / Key module
- ❌ **API call without `try/catch` or timeout**: indefinite block → explicit timeout (5s) + error handling
- ❌ **No fallback when the third-party API is down**: broken checkout/email → flat rate / queue
- ❌ **Unverified Stripe webhook** (signature): fraud risk → validate the webhook signature
- ❌ **No HTTP mock in tests**: fragile and slow tests → mock `ClientInterface`
- ❌ **No logging on API calls**: invisible incidents → log every failure (PSR-3)

## Sources
- **Stripe** — `drupal/commerce_stripe` + `stripe/stripe-php` — stripe.com/docs · **SendGrid** — `drupal/sendgrid_integration`
- **Guzzle** (PSR-18 HTTP client) — docs.guzzlephp.org · **PSR-3** (logging) — php-fig.org
- **Drupal Key** (secret management) — drupal.org/project/key · **Drupal 10/11**

## See also
- [`drupal-commerce-checkout.md`](drupal-commerce-checkout.md) — payment and per-transition emails
- [`drupal-module-custom.md`](drupal-module-custom.md) — injected services (Guzzle, mailer)
- [`drupal-tests-phpunit-behat.md`](drupal-tests-phpunit-behat.md) — tests with a mocked HttpClient
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — secret externalization
