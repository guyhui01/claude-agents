# Skill — Intégration APIs tierces Drupal (Stripe, SendGrid, Chronopost)
> Certifications : Acquia Certified Developer · Zend PHP Engineer 8.x

## Objectif
Intégrer des APIs tierces dans Drupal 10 via des services injectés, avec gestion des erreurs, logging et secrets externalisés.

## Stripe — Paiement CB 3D Secure

```bash
composer require drupal/commerce_stripe stripe/stripe-php
```

```php
// Géré par drupal/commerce_stripe — pas de code custom requis
// Configuration via UI + config YAML :
```
```yaml
# config/sync/commerce_payment_gateway.stripe_b2b.yml
id: stripe_b2b
label: 'Stripe B2B'
plugin: stripe
configuration:
  mode: live          # 'test' en staging
  publishable_key: '' # override via settings.php
  secret_key: ''      # override via settings.php
  webhook_secret: ''  # override via settings.php
```

```php
// web/sites/default/settings.prod.php (non versionné)
$config['commerce_payment_gateway.stripe_b2b']['configuration']['secret_key']
  = getenv('STRIPE_SECRET_KEY');
```

## SendGrid — Emails transactionnels

```bash
composer require drupal/sendgrid_integration
```

```php
// src/Mail/Client télécomMail.php — hook_mail() implémentation
function client_b2b_mail(string $key, array &$message, array $params): void {
  match($key) {
    'account_activated' => $message['subject'] = 'Votre compte Client télécom est activé',
    'account_refused'   => $message['subject'] = 'Votre demande de compte a été refusée',
    'order_confirmation'=> $message['subject'] = 'Confirmation de commande #' . $params['order']->getOrderNumber(),
    'order_shipped'     => $message['subject'] = 'Votre commande a été expédiée',
  };
  $message['body'][] = $params['body'] ?? '';
}

// Envoi depuis un service
$this->mailManager->mail(
  'client_b2b',          // module
  'account_activated',    // clé mail
  $account->getEmail(),   // destinataire
  'fr',                   // langue
  ['account' => $account] // paramètres template
);
```

```yaml
# config/sync/sendgrid_integration.settings.yml
apikey: ''   # override settings.php → getenv('SENDGRID_API_KEY')
```

## Chronopost / Colissimo — Calcul frais de port

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
      return null; // fallback = tarif forfaitaire
    }
  }
}
```

## Gestion des secrets

```php
// settings.php (prod) — jamais de clé API en YAML versionné
$config['sendgrid_integration.settings']['apikey'] = getenv('SENDGRID_API_KEY');
// OU via Drupal Key module (recommandé)
```

```bash
# .env (local — non versionné, dans .gitignore)
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
CHRONOPOST_API_KEY=xxxxxxxxxxxx
```

## Bonnes pratiques
- Toujours wrapper les appels API dans un `try/catch` avec logging
- Timeout HTTP explicite (5s max) — jamais de blocage indéfini
- Fallback prévu si API tierce indisponible (frais forfaitaires, email en queue)
- Clés API dans variables d'environnement — jamais en dur dans le code ou YAML

## Livrables
- Services PHP avec injection Guzzle HTTP client
- Gestion d'erreurs + logging sur chaque appel API
- Secrets externalisés (settings.php + env vars)
- Tests PHPUnit avec mock HttpClient

## Format de sortie
Précise : API tierce à intégrer · endpoint(s) concerné(s) · données échangées · comportement en cas d'erreur API · environnement (test/prod)
