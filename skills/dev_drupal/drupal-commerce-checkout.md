# Skill — Drupal Commerce 2.x — Checkout & Workflow commande
> Certifications : Drupal Association Commerce 2.x Specialist

## Objectif
Configurer le tunnel de commande Drupal Commerce (CheckoutFlow, CheckoutPanes) et le workflow des états de commande.

## CheckoutPane custom (ex : N° bon de commande)
```php
// src/Plugin/Commerce/CheckoutPane/PurchaseOrderPane.php
/**
 * @CommerceCheckoutPane(
 *   id = "purchase_order_number",
 *   label = @Translation("Numéro de bon de commande"),
 *   default_step = "order_information",
 * )
 */
class PurchaseOrderPane extends CheckoutPaneBase {
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form): array {
    $pane_form['po_number'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Numéro de bon de commande interne'),
      '#required' => TRUE,
      '#default_value' => $this->order->get('field_purchase_order_number')->value,
    ];
    return $pane_form;
  }

  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form): void {
    $this->order->set('field_purchase_order_number', $form_state->getValue(['purchase_order_number', 'po_number']));
  }
}
```

## Workflow commande en YAML
```yaml
# config/sync/workflows.workflow.b2b_order.yml
id: b2b_order
label: 'Commande B2B'
type: commerce_order
states:
  draft:      { label: Brouillon }
  pending:    { label: 'En attente' }
  processing: { label: 'En préparation' }
  shipped:    { label: Expédié }
  completed:  { label: Livré }
  canceled:   { label: Annulé }
transitions:
  place:     { label: Passer,       from: [draft],          to: pending }
  process:   { label: 'Traiter',    from: [pending],        to: processing }
  ship:      { label: Expédier,     from: [processing],     to: shipped }
  complete:  { label: Livrer,       from: [shipped],        to: completed }
  cancel:    { label: Annuler,      from: [pending, processing], to: canceled }
```

## EventSubscriber sur transitions commande
```php
// src/EventSubscriber/OrderStatusSubscriber.php
class OrderStatusSubscriber implements EventSubscriberInterface {
  public static function getSubscribedEvents(): array {
    return [
      'commerce_order.place.post_transition'   => 'onOrderPlace',
      'commerce_order.ship.post_transition'    => 'onOrderShip',
      'commerce_order.complete.post_transition'=> 'onOrderComplete',
    ];
  }

  public function onOrderShip(WorkflowTransitionEvent $event): void {
    $order = $event->getEntity();
    $this->mailManager->mail('client_b2b', 'order_shipped', ...);
  }
}
```

## Bonnes pratiques
- Un CheckoutPane = un plugin annoté (pas de hook_form_alter sur le checkout)
- Workflow en YAML — transitions validées via Guards si règles métier complexes
- EventSubscriber sur `post_transition` (pas `pre_transition`) pour les emails

## Livrables
- CheckoutPane custom avec validation
- Workflow commande YAML complet
- EventSubscriber email par transition

## Format de sortie
Précise : étapes checkout souhaitées · champs custom sur la commande · états du workflow · email à déclencher par transition

## Anti-patterns
- ❌ **`hook_form_alter` sur le checkout** au lieu d'un CheckoutPane plugin : fragile et non maintenable → plugin annoté
- ❌ **EventSubscriber sur `pre_transition`** pour les emails : envoi avant validation de l'état → utiliser `post_transition`
- ❌ **Workflow sans Guards** pour les règles métier : transitions invalides possibles → `state_machine` Guards
- ❌ **Pas de gestion d'erreur d'envoi email** : commande bloquée si le mailer échoue → try/catch + file d'attente
- ❌ **Commerce 2.x sans plan 3.x** : Commerce 3.0 (janv. 2025) compatible D11 → anticiper la migration

## Sources
- **Drupal Commerce** — drupalcommerce.org (CheckoutFlow/CheckoutPane ; Commerce 2.x → **3.0** janv. 2025, D10.3+/11)
- **state_machine** (workflows de commande, transitions, Guards) — drupal.org/project/state_machine
- **Drupal 10/11** — drupal.org

## Voir aussi
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — catalogue et tarifs B2B
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — workflow YAML versionné
- [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) — paiement (Stripe) et emails transactionnels
- [`drupal-module-custom.md`](drupal-module-custom.md) — structure du module et services
