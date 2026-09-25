# Skill — Drupal Commerce 2.x — Checkout & Order Workflow
> Certifications: Drupal Association Commerce 2.x Specialist

## Objective
Configure the Drupal Commerce checkout funnel (CheckoutFlow, CheckoutPanes) and the order-state workflow.

## Custom CheckoutPane (e.g., purchase order number)
```php
// src/Plugin/Commerce/CheckoutPane/PurchaseOrderPane.php
/**
 * @CommerceCheckoutPane(
 *   id = "purchase_order_number",
 *   label = @Translation("Purchase order number"),
 *   default_step = "order_information",
 * )
 */
class PurchaseOrderPane extends CheckoutPaneBase {
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form): array {
    $pane_form['po_number'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Internal purchase order number'),
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

## Order workflow in YAML
```yaml
# config/sync/workflows.workflow.b2b_order.yml
id: b2b_order
label: 'B2B Order'
type: commerce_order
states:
  draft:      { label: Draft }
  pending:    { label: 'Pending' }
  processing: { label: 'Processing' }
  shipped:    { label: Shipped }
  completed:  { label: Delivered }
  canceled:   { label: Canceled }
transitions:
  place:     { label: Place,       from: [draft],          to: pending }
  process:   { label: 'Process',   from: [pending],        to: processing }
  ship:      { label: Ship,        from: [processing],     to: shipped }
  complete:  { label: Complete,    from: [shipped],        to: completed }
  cancel:    { label: Cancel,      from: [pending, processing], to: canceled }
```

## EventSubscriber on order transitions
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

## Best practices
- One CheckoutPane = one annotated plugin (no hook_form_alter on checkout)
- Workflow in YAML — transitions validated via Guards when business rules are complex
- EventSubscriber on `post_transition` (not `pre_transition`) for emails

## Deliverables
- Custom CheckoutPane with validation
- Complete YAML order workflow
- EventSubscriber sending email per transition

## Output format
Specify: desired checkout steps · custom fields on the order · workflow states · email to trigger per transition

## Anti-patterns
- ❌ **`hook_form_alter` on checkout** instead of a CheckoutPane plugin: fragile and unmaintainable → annotated plugin
- ❌ **EventSubscriber on `pre_transition`** for emails: sent before the state is validated → use `post_transition`
- ❌ **Workflow without Guards** for business rules: invalid transitions possible → `state_machine` Guards
- ❌ **No email-send error handling**: order stuck if the mailer fails → try/catch + queue
- ❌ **Commerce 2.x without a 3.x plan**: Commerce 3.0 (Jan. 2025) is D11 compatible → anticipate the migration

## Sources
- **Drupal Commerce** — drupalcommerce.org (CheckoutFlow/CheckoutPane; Commerce 2.x → **3.0** Jan. 2025, D10.3+/11)
- **state_machine** (order workflows, transitions, Guards) — drupal.org/project/state_machine
- **Drupal 10/11** — drupal.org

## See also
- [`drupal-commerce-catalog.md`](drupal-commerce-catalog.md) — catalog and B2B pricing
- [`drupal-config-yaml.md`](drupal-config-yaml.md) — versioned YAML workflow
- [`drupal-integration-api-tierce.md`](drupal-integration-api-tierce.md) — payment (Stripe) and transactional emails
- [`drupal-module-custom.md`](drupal-module-custom.md) — module structure and services
