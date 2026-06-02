# Skill — Formation Prompt Engineering

> Certifications : Anthropic Prompt Engineering Certification 2026, DeepLearning.AI Prompt Engineering for Developers, Google Prompting Essentials 2026, OpenAI Prompt Engineering Best Practices

## Objectif

Concevoir et animer une formation complète au prompt engineering pour les modèles LLM (Claude, ChatGPT, Gemini), structurée en 3 niveaux de progression avec exercices pratiques et projets fil rouge.

## Architecture du parcours (3 niveaux)

```
NIVEAU 1 — DÉBUTANT (4h)
"Écrire mon premier bon prompt"
  → Public : Tous collaborateurs sans expérience LLM
  → Prérequis : Avoir un compte ChatGPT ou Claude

NIVEAU 2 — INTERMÉDIAIRE (8h)
"Maîtriser les techniques avancées"
  → Public : Utilisateurs réguliers, professions du savoir
  → Prérequis : Niveau 1 validé ou test d'entrée

NIVEAU 3 — AVANCÉ (16h)
"Architecturer des workflows IA complexes"
  → Public : Développeurs, chefs de projet IA, Data Scientists
  → Prérequis : Niveau 2 + bases Python
```

## Niveau 1 — Débutant : Contenus et exercices

### Le framework CLEAR (structure universelle)

```
C — Contexte    : "Tu es [rôle]. La situation est [contexte]."
L — Longueur    : "Réponds en [nb mots / bullets / pages]."
E — Exemples    : "Voici un exemple de ce que j'attends : [ex]"
A — Action      : "Ta tâche est de [verbe d'action précis]."
R — Résultat    : "Le résultat doit être [critère de qualité]."
```

#### Exercice 1.1 — Transformer un prompt naïf

```
AVANT (prompt naïf) :
"Écris un email"

APRÈS (prompt CLEAR) :
"Tu es un chargé de communication B2B senior.
Contexte : notre client Dupont SA n'a pas renouvelé son contrat
depuis 3 mois. Dernier contact : appel positif il y a 6 semaines.
Tâche : Rédige un email de relance chaleureux et professionnel.
Ton : amical mais orienté business.
Longueur : 150-200 mots maximum.
Inclure : une accroche personnalisée + 1 proposition de valeur
concrète + un appel à l'action clair (réunion 30 min)."

Exercice : Améliore CE prompt naïf avec le framework CLEAR :
"Résume le rapport"
```

#### Exercice 1.2 — Le jeu des 5 reformulations

```
Principe : Partir d'une même demande et l'améliorer 5 fois.

Demande de base : "Explique-moi le machine learning"

Reformulation 1 — Ajouter le rôle :
"Tu es un professeur expert en IA qui s'adresse à des managers
non-techniques. Explique-moi le machine learning."

Reformulation 2 — Ajouter une contrainte de format :
"[...] Utilise 3 analogies du quotidien et maximum 200 mots."

Reformulation 3 — Ajouter un exemple :
"[...] Sur le modèle de cette explication du cloud : [exemple]"

Reformulation 4 — Définir l'audience :
"[...] Mon interlocuteur est un directeur commercial de 50 ans."

Reformulation 5 — Chaîner avec une question de suivi :
"[...] Termine par 3 questions que je peux poser pour approfondir."
```

## Niveau 2 — Intermédiaire : Techniques avancées

### Techniques au programme

| Technique | Description | Exemple d'usage |
|-----------|-------------|----------------|
| **Chain-of-thought (CoT)** | Demander le raisonnement étape par étape | Problèmes complexes, analyse |
| **Few-shot prompting** | Fournir 2-5 exemples dans le prompt | Génération cohérente, classification |
| **Role-playing system** | Définir un personnage précis et persistant | Assistants spécialisés |
| **Output structuring** | Demander JSON, XML, tableau Markdown | Intégration dans des workflows |
| **Self-critique** | Demander à l'IA d'évaluer sa propre réponse | Amélioration de la qualité |
| **Decomposition** | Décomposer une tâche complexe | Projets multi-étapes |

### Exercice 2.1 — Chain-of-Thought pour l'analyse

```
Prompt CoT — Analyse de risques projet :

"Tu es un expert en gestion de risques IT avec 15 ans d'expérience.

TÂCHE : Analyse les risques du projet suivant et propose
un plan de mitigation.

PROCESSUS DE RAISONNEMENT (utilise ces étapes) :
Étape 1 : Identifie les 5 risques majeurs (probabilité × impact)
Étape 2 : Classe-les selon la matrice PESTEL
Étape 3 : Pour chaque risque critique, propose 2 mesures de mitigation
Étape 4 : Évalue le risque résiduel après mitigation
Étape 5 : Rédige un résumé exécutif de 100 mots

PROJET : [description du projet]

CONTRAINTE : Sois exhaustif mais concis. Utilise des tableaux
Markdown pour les étapes 1 et 2."
```

### Exercice 2.2 — Few-shot pour la cohérence de ton

```
Prompt Few-shot — Générer des titres d'articles dans le style de la marque :

"Voici des exemples de titres d'articles qui correspondent
à notre ligne éditoriale :

Exemple 1 : "5 erreurs que font 90% des managers avec la data
(et comment les éviter)"
Exemple 2 : "Pourquoi votre tableau de bord vous ment —
et comment le réparer en 3 étapes"
Exemple 3 : "Data-driven en 2026 : ce que font les leaders
que vous ne faites pas encore"

Style caractéristique : accrocheur, chiffres concrets,
légère provocation, promesse de valeur immédiate.

TÂCHE : Génère 10 titres dans ce style pour le sujet :
[IA générative pour les équipes commerciales]"
```

## Niveau 3 — Avancé : Workflows IA complexes

### Architecture de prompts systèmes (Claude API)

```python
import anthropic

client = anthropic.Anthropic()

# Système de prompt multi-rôle pour analyse documentaire
SYSTEM_PROMPT = """Tu es un analyste financier senior spécialisé
dans les fusions-acquisitions. Tu as accès aux données financières
de l'entreprise cible.

TES CONTRAINTES ABSOLUES :
1. Ne jamais inventer de chiffres — si tu ne sais pas, dis-le
2. Toujours sourcer tes affirmations avec [SOURCE: document X]
3. Signaler les incertitudes avec [INCERTITUDE: niveau faible/moyen/élevé]
4. Format de sortie : structuré en sections markdown

TES CAPABILITIES :
- Analyse de ratios financiers (P/E, EV/EBITDA, etc.)
- Évaluation de synergies potentielles
- Identification des red flags comptables
- Benchmark sectoriel"""

def analyze_document(document_text: str, question: str) -> str:
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2000,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": f"Document à analyser :\n\n{document_text}\n\n"
                          f"Question : {question}"
            }
        ]
    )
    return response.content[0].text
```

### Prompt de méta-évaluation (Self-critique)

```
PROMPT D'AUTO-ÉVALUATION :

"Tu viens de générer cette réponse : [RÉPONSE PRÉCÉDENTE]

Maintenant, évalue-la selon ces 5 critères (note /10 + justification) :
1. Précision factuelle : Les faits sont-ils vérifiables ?
2. Complétude : La réponse couvre-t-elle tous les aspects demandés ?
3. Clarté : Un non-expert comprendrait-il facilement ?
4. Actionabilité : Les recommandations sont-elles concrètes ?
5. Risques : Y a-t-il des biais ou omissions importantes ?

Puis génère une version améliorée en corrigeant les lacunes identifiées."
```

## Différences Claude vs ChatGPT vs Gemini

| Aspect | Claude (Anthropic) | ChatGPT (OpenAI) | Gemini (Google) |
|--------|-------------------|-----------------|----------------|
| Longueur contexte | 200K tokens | 128K tokens | 1M tokens |
| Suivi d'instructions | Très précis | Très bon | Bon |
| Raisonnement éthique | Intégré nativement | Modéré | Modéré |
| Code | Excellent | Excellent | Très bon |
| Multimodal | Images + PDF | Images + vidéo | Images + vidéo + audio |
| Ton | Nuancé, équilibré | Direct, concis | Informatif |
| Idéal pour | Documents longs, analyse | Conversations, code | Recherche, multimodal |

## Livrables

- Supports de formation niveaux 1/2/3 (slides + guides apprenants)
- Bibliothèque de 50 exercices pratiques classés par niveau et métier
- Prompt Library starter kit (20 templates par fonction : RH, Finance, Marketing, Dev)
- Guide de référence Claude/ChatGPT/Gemini (comparatif pratique)
- Évaluations niveau 1+2+3 avec corrigés
- Certification interne "Prompt Engineer" (critères + badge Credly)

## Format de sortie

Précise : **niveau cible** (débutant / intermédiaire / avancé / multi-niveaux), **outil LLM principal** de l'organisation (Claude / ChatGPT / Gemini / Copilot), **métiers des participants**, **durée disponible** (2h / demi-journée / journée / parcours), **format** (présentiel / e-learning / blended), **cas d'usage métier** prioritaires à traiter.

## Sources
- **Anthropic** — *Prompt Engineering Guide* (docs.anthropic.com)
- **Wei et al.** — *Chain-of-Thought Prompting Elicits Reasoning in LLMs* (NeurIPS 2022)
- **Brown et al.** — *Language Models are Few-Shot Learners* (NeurIPS 2020, GPT-3)
- **Wang et al.** — *Self-Consistency* (2023) ; **Yao et al.** — *ReAct* (2023)
- **Anderson & Krathwohl** — taxonomie de Bloom révisée (2001) — progression des niveaux

## Anti-patterns
- Enseigner des « formules magiques » figées plutôt que des principes transférables
- Présenter Few-shot / CoT sans attribution académique
- Comparatif LLM avec des fenêtres de contexte non datées (elles évoluent vite)
- Pas de projet fil rouge → compétence non ancrée
- Négliger l'évaluation de la qualité des prompts (itération, self-critique)

## Voir aussi
- [formation-claude-code.md](formation-claude-code.md) — mise en pratique outillée
- [formation-agents-ia.md](formation-agents-ia.md) — prompts d'orchestration d'agents
- [`../prompt_engineer/few-shot-learning.md`](../prompt_engineer/few-shot-learning.md) — few-shot approfondi
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — CoT approfondi
- [`../redacteur_ia/prompt-engineering-redaction.md`](../redacteur_ia/prompt-engineering-redaction.md) — prompts pour la rédaction
