# Skill — Développement piloté par les hypothèses (Hypothesis-Driven)

> Certification : PSPO II · ICAgile ICP-APO
> Agent : AGENT-PO-SCRUM.md

## Objectif
Transformer les fonctionnalités incertaines en hypothèses testables pour prendre des décisions produit basées sur des preuves, et non des opinions.

## Structure d'une hypothèse produit

### Format standard
```
Nous croyons que [action / fonctionnalité]
Pour [segment utilisateur]
Permettra d'atteindre [résultat business ou utilisateur]
Nous mesurerons le succès par [métrique principale]
Avec un signal positif si [seuil de validation]
```

### Exemple concret
```
Nous croyons qu'ajouter un récapitulatif de commande par email
Pour les acheteurs B2B qui commandent > 500 € HT
Réduira les appels SAV liés aux erreurs de commande
Nous mesurerons le succès par le taux de contact SAV post-commande
Avec un signal positif si ce taux baisse de 20% en 4 semaines
```

## Types d'hypothèses

| Type | Question clé | Risque |
|---|---|---|
| **Désirabilité** | Les utilisateurs veulent-ils cela ? | Élevé |
| **Faisabilité** | Peut-on le construire ? | Moyen |
| **Viabilité** | Est-ce rentable pour le business ? | Élevé |
| **Utilisabilité** | Peuvent-ils l'utiliser sans aide ? | Moyen |

## Backlog d'hypothèses (Assumption Map)

### Matrice priorisation
```
                  HAUTE CERTITUDE
                        ↑
 Tester en dernier  │  Confirmer et livrer
                    │
FAIBLE ─────────────┼───────────── FORT
IMPACT             │                 IMPACT
                    │
 Ignorer           │  Tester en premier (MVP/MVE)
                        ↓
                  FAIBLE CERTITUDE
```

## Processus en sprint

1. **Identifier** les assumptions risquées dans une US
2. **Formuler** l'hypothèse avec le template ci-dessus
3. **Concevoir** l'expérience minimale (MVP, A/B test, interview, prototype)
4. **Exécuter** dans le sprint (timeboxé : max 1 sprint)
5. **Analyser** les données
6. **Décider** : Pivot / Persévérer / Arrêter

## Format User Story hypothesis-driven
```
En tant que [persona],
Je veux [fonctionnalité hypothèse],
Afin de [résultat attendu]

Hypothèse : Nous croyons que...
Signal de succès : [métrique + seuil]
Critères d'acceptation : [conditions de livraison]
Critère d'abandon : [seuil en dessous duquel on pivote]
```

## Métriques de validation courantes
- Taux de conversion (avant/après)
- Taux d'adoption (% utilisateurs actifs)
- NPS / CSAT (satisfaction)
- Time-to-value (temps pour atteindre la valeur)
- Taux d'erreur / support tickets
