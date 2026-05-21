# Skill — Design for AI (LLM, Chat UI, Voice UI)
> Certifications : NN/g UX-C (AI UX) · IDF

## Objectif
Concevoir des interfaces pour des produits intégrant l'IA générative, les LLM et les assistants vocaux.

## Patterns Chat UI
- Zone de saisie (input) avec placeholder contextuel
- Bulles de message : utilisateur (droite) / IA (gauche)
- Streaming de réponse (affichage token par token)
- Actions rapides (suggestions, boutons de réponse)
- Feedback utilisateur (pouce haut/bas, régénérer, copier)
- Indicateur de thinking / loading

## Patterns LLM Interface
- Prompt templates et exemples de démarrage
- Gestion de l'historique (threads, sessions)
- Citations et sources (groundedness)
- Tone selector (formel, décontracté, concis)
- Limites et refus : message d'erreur clair et non culpabilisant

## Spécificités Voice UI
- Feedback visuel de l'état vocal (idle, listening, processing, speaking)
- Transcription temps réel
- Commandes de fallback si reconnaissance échoue

## Principes éthiques IA
- Transparence : l'utilisateur sait qu'il parle à une IA
- Contrôle utilisateur : annuler, modifier, ignorer
- Gestion des erreurs : hallucinations, limites de compétence

## Livrables
- Flows annotés (état idle → input → streaming → réponse)
- Bibliothèque de composants AI-specific (Figma)
- Guide des tonalités et messages d'erreur

## Format de sortie
Précise : type d'IA (chat, assistant, copilot, voice) · contexte produit · modèle LLM ciblé
