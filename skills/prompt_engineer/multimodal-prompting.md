# Skill — Prompts Multimodaux (Vision, Image, Audio)
> Certifications : Anthropic Claude Code in Action (2026), Google Cloud Professional ML Engineer (Google)

## Objectif
Concevoir des prompts efficaces pour les capacités multimodales des LLM — analyse d'images, vision documents, interprétation de captures d'écran — pour exploiter les entrées non-textuelles dans les workflows agentiques.

## Prompt Vision — Analyse d'image standard

```
Analyse l'image fournie et produis :
1. [CE QU'ON VEUT EXTRAIRE — ex. liste des éléments UI]
2. [SECOND ÉLÉMENT — ex. problèmes d'accessibilité]
3. [TROISIÈME — ex. recommandations d'amélioration]

Format de sortie : [YAML / Tableau Markdown / Bullet points]
```

## Cas d'usage par domaine

### UX / Maquettes
```
Tu es un expert UX. Analyse cette maquette / wireframe et produis :
1. Inventaire des composants UI (liste)
2. Problèmes d'accessibilité WCAG identifiés
3. Suggestions d'amélioration UX (max 3, actionnables)

Format : Tableau Markdown avec colonnes [Élément | Observation | Priorité]
```

### Documents / Tableaux
```
Tu es un expert en extraction de données.
Extrait toutes les informations de ce document / tableau au format JSON.
Structure exacte attendue :
{
  "titre": "...",
  "colonnes": ["col1", "col2"],
  "lignes": [{"col1": "...", "col2": "..."}],
  "totaux": {}
}
Ne pas interpréter — extraire exactement ce qui est visible.
```

### Captures d'écran (debugging / code review)
```
Analyse cette capture d'écran d'erreur / interface et :
1. Identifie le problème visible
2. Propose la cause probable
3. Suggère 2 solutions concrètes

Contexte : [STACK TECH / CONTEXTE PROJET]
```

### Diagrammes d'architecture
```
Analyse ce diagramme d'architecture et décris :
1. Les composants principaux et leurs rôles
2. Les flux de données (entrants / sortants)
3. Les points de défaillance potentiels (SPOF)
4. Les améliorations recommandées

Format : Section par section, vocabulaire technique précis.
```

## Bonnes pratiques

```
QUALITÉ IMAGE
────────────────────────────────────────────────────────────
✓ Résolution suffisante (lisible)
✓ Format : JPEG, PNG, WebP, GIF
✓ Taille max : 5 MB par image (Claude)
✓ Multiple images : jusqu'à 20 par message

INSTRUCTIONS
────────────────────────────────────────────────────────────
✓ Préciser ce qu'on cherche AVANT de fournir l'image
✓ Indiquer le contexte (type de document, secteur)
✓ Demander un format de sortie structuré
✓ Si texte dans l'image : préciser la langue

LIMITES À CONNAÎTRE
────────────────────────────────────────────────────────────
⚠ Texte manuscrit difficile à lire
⚠ Résolution très faible → erreurs d'interprétation
⚠ Données confidentielles (RH, financier) → anonymiser
```

## Template API — Image en base64

```typescript
import fs from "fs";

const imageBuffer = fs.readFileSync("./screenshot.png");
const base64Image = imageBuffer.toString("base64");

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 2048,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/png",
            data: base64Image,
          },
        },
        {
          type: "text",
          text: "Analyse ce wireframe et liste les composants UI présents.",
        },
      ],
    },
  ],
});
```

## Livrables
- Templates prompts vision par cas d'usage (UX, documents, code, architecture)
- Guide des limites et bonnes pratiques
- Implémentation API base64 TypeScript

## Format de sortie
Précise : type d'image (maquette / document / capture / diagramme), objectif de l'analyse, format de sortie attendu.

## Anti-patterns
- ❌ **Image basse résolution / texte manuscrit** : lecture peu fiable → résolution suffisante, OCR si besoin
- ❌ **Données confidentielles** envoyées en image sans contrôle : risque RGPD → masquer/anonymiser
- ❌ **Dépasser les limites** (> 5 Mo/image, > 20 images/message) : erreurs API → respecter les limites
- ❌ **Demander d'inventer ce qui n'est pas visible** : hallucination → instruire « ne décris que le visible »
- ❌ **Alt-text IA non revu** sur contenus critiques : accessibilité dégradée → revue humaine (WCAG 2.2)

## Sources
- **Anthropic — Vision** (docs.anthropic.com/vision) : formats (JPEG/PNG/WebP/GIF), limites (≤ 5 Mo, ≤ 20 images), bonnes pratiques
- **WCAG 2.2** — W3C (2023) — alternatives textuelles (alt-text généré)

## Voir aussi
- [`system-prompt-design.md`](system-prompt-design.md) — cadrage du prompt vision
- [`chain-of-thought.md`](chain-of-thought.md) — raisonnement sur une image complexe (diagramme)
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — alt-text et WCAG
- [`../dam_expert/dam-augmente-ia.md`](../dam_expert/dam-augmente-ia.md) — auto-tagging/alt-text vision en DAM
