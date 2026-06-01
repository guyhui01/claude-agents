# Skill — Traduction & Localisation IA
> Certifications : Google Digital Marketing · HubSpot Content Marketing

## Objectif
Adapter les contenus à de nouveaux marchés et langues en préservant le sens, le ton et l'impact culturel, en utilisant l'IA comme accélérateur.

## Différence traduction vs. localisation
| Traduction | Localisation |
|---|---|
| Conversion mot à mot | Adaptation culturelle complète |
| Sens préservé | Ton, humour, références adaptés |
| Rapide | Nécessite expertise culturelle |
| Ex : manuel technique | Ex : campagne marketing |

## Processus de localisation IA

### Étape 1 : Préparation
- Audit du contenu source (cohérence terminologique)
- Création du glossaire (termes métier non traduisibles)
- Définition du ton par marché

### Étape 2 : Traduction IA (machine translation)
- DeepL Pro / Google Translate API / Claude pour premier jet
- Métrique BLEU *(Papineni et al., ACL 2002)* comme indicateur de proximité au texte de référence avant révision humaine (seuil à calibrer selon paire de langues et type de contenu — le BLEU ne mesure pas la fluidité ni l'adéquation culturelle)

### Étape 3 : Post-édition humaine
- Révision du ton et des nuances culturelles
- Adaptation des exemples, chiffres, formats (dates, devises)
- Validation terminologique (glossaire)

### Étape 4 : Contrôle qualité
- Relecture native speaker
- Test utilisateur sur marché cible si contenu critique

## Prompt traduction / localisation IA
```
"Traduis le texte suivant en [langue cible] pour un public [B2B/B2C, pays, secteur].
Texte source : [texte]

Consignes :
- Préserver le ton [professionnel / conversationnel / expert]
- Adapter les expressions idiomatiques (ne pas traduire littéralement)
- Garder les termes techniques en [langue / anglais] : [liste]
- Format de sortie : [Markdown / texte brut]
- Signaler les passages culturellement sensibles à réviser"
```

## Langues et marchés prioritaires 2026
| Langue | Marché | Spécificités |
|---|---|---|
| Anglais (EN-GB / EN-US) | UK, USA, International | Variantes orthographiques |
| Espagnol (ES-ES / ES-LATAM) | Espagne, Amérique Latine | Vocabulaire différent |
| Allemand | DACH | Ton formel, précision |
| Arabe | MENA | Droite-gauche, adaptation visuelle |
| Japonais | Japon | Niveaux de politesse complexes |

## Formats et outils
| Outil | Usage | Avantage |
|---|---|---|
| DeepL Pro | Traduction rapide | Meilleure qualité IA |
| Claude / GPT-4o | Localisation + adaptation | Nuance culturelle |
| Phrase / Lokalise | TMS (gestion traductions) | Workflow équipe |
| Crowdin | Open source projects | Communauté |

## Livrables
- Contenu localisé en [N] langues
- Glossaire terminologique bilingue
- Guide de style par marché
- Rapport de qualité (BLEU score + révision)

## Format de sortie
Précise : langue source · langue cible · marché / pays · type de contenu · ton · termes à ne pas traduire · glossaire existant

## Anti-patterns
- ❌ **Traduction littérale d'idiomes** — rendre mot à mot une expression imagée → contresens ou ridicule. Localiser, pas traduire.
- ❌ **Se fier au seul BLEU** — valider sur un score automatique sans relecture native → fautes de fluidité et de culture invisibles à la métrique.
- ❌ **Pas de glossaire** — laisser l'IA traduire les termes métier au fil de l'eau → incohérence terminologique entre contenus.
- ❌ **Formats non adaptés** — garder dates, devises, unités, sens de lecture de la source → non-conformité locale (ex. RTL pour l'arabe).
- ❌ **Zéro relecture native** — publier la sortie machine telle quelle sur un contenu critique → risque de marque.

## Sources
- **Papineni, Roukos, Ward & Zhu (IBM)** — *BLEU: a Method for Automatic Evaluation of Machine Translation* (ACL 2002) — métrique BLEU
- **ISO 17100:2015** — *Services de traduction* — exigences de qualité et post-édition
- **ISO 18587:2017** — *Post-édition de traduction automatique* — niveaux de post-édition
- **DeepL / Lokalise / Phrase** — documentation officielle des TMS et moteurs de traduction

## Voir aussi
- [content-strategy.md](content-strategy.md) — déclinaison multi-marché de la stratégie de contenu
- [copywriting-ia.md](copywriting-ia.md) — transcréation du copy marketing
- [seo-content.md](seo-content.md) — SEO multilingue et international
- [`../prompt_engineer/multimodal-prompting.md`](../prompt_engineer/multimodal-prompting.md) — prompting pour la traduction IA
