# Skill — User Stories pour Features IA
> Certifications : PSPO-AI · PSPO I

## Objectif
Rédiger des User Stories adaptées aux fonctionnalités basées sur l'IA, en gérant l'incertitude des outputs.

## Différences clés vs. stories classiques
| Aspect | Story classique | Story IA |
|---|---|---|
| Output | Déterministe | Probabiliste |
| Critères d'acceptation | Binaires (passe/échoue) | Seuils de performance (précision ≥ X%) |
| Test | Unitaire/fonctionnel | Évaluation sur jeu de données |
| Évolution | Stable | Peut dériver si le modèle change |

## Format recommandé
```
En tant que [persona],
Je veux que [feature IA] me propose [output attendu],
Afin de [bénéfice utilisateur].

Critères d'acceptation :
- Le modèle produit une réponse pertinente dans ≥ 85% des cas de test
- L'utilisateur peut corriger ou rejeter la suggestion en 1 clic
- En cas d'échec, un message clair est affiché (pas de réponse vide)
- Le temps de réponse est ≤ 3 secondes pour 95e percentile
- Aucune donnée personnelle n'est transmise au modèle sans consentement
```

## Types de stories IA courantes
- Génération de contenu (texte, image, code)
- Classification / détection (tags, sentiments, anomalies)
- Recommandation (produit, contenu, action)
- Extraction d'information (résumé, NER, parsing)
- Conversation / Chat (assistant, support, onboarding)

## Story de fallback (obligatoire)
Toujours rédiger une story de dégradation gracieuse :
"Si le modèle est indisponible ou retourne une réponse invalide, alors..."

## Livrables
- User Stories IA avec critères d'acceptation probabilistes
- Story de fallback associée
- Jeu de données de test (golden dataset)
- Definition of Done IA (inclut seuil de performance modèle)

## Format de sortie
Précise : type de feature IA · modèle ciblé · seuil de qualité acceptable · contraintes de latence
