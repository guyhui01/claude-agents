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

## Sources
- **Saleema Amershi et al. (Microsoft)** — *Guidelines for Human-AI Interaction* (CHI 2019) — 18 règles HAX
- **Google PAIR** — *People + AI Guidebook* (2019, mis à jour) — patterns de conception IA
- **Apple** — *Human Interface Guidelines : Machine Learning / Generative AI* — patterns natifs
- **Nielsen Norman Group** — articles *AI UX* (générative, chatbots) 2023+
- **Anthropic** — bonnes pratiques d'interaction (transparence, contrôle, citations/groundedness)

## Anti-patterns
- Sur-anthropomorphisme : laisser croire à une conscience / des émotions de l'IA
- Masquer que l'utilisateur interagit avec une IA (manque de transparence)
- Aucune voie de sortie (« escape hatch ») vers un humain ou une action manuelle
- Présenter les réponses sans citation ni indication d'incertitude (risque d'hallucination non signalé)
- Message de refus culpabilisant ou opaque au lieu d'une explication actionnable

## Voir aussi
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — cadrer le comportement du modèle sous-jacent
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — tonalités, messages d'erreur et microcopy IA
- [accessibilite-wcag.md](accessibilite-wcag.md) — accessibilité des interfaces conversationnelles/vocales
- [metriques-ux.md](metriques-ux.md) — mesurer la satisfaction et l'acceptation des réponses IA
