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
    $this->mailManager->mail('aginode_b2b', 'order_shipped', ...);
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
