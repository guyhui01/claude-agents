# Skill — Prompt Engineering pour l'Orchestration
> Certifications : Anthropic Claude Code in Action (2026), Claude Code 101 (2026), Claude 101 (2026), PMI-ACP (PMI)

## Objectif
Rédiger et optimiser les prompts techniques d'un orchestrateur de workflows agentiques — system prompts d'agents, prompts de transfert de contexte, prompts de décision et prompts de validation — pour maximiser la qualité et la fiabilité des outputs.

## Anatomie d'un system prompt d'agent

```
STRUCTURE OPTIMALE (ordre recommandé par Anthropic)
────────────────────────────────────────────────────────
1. IDENTITÉ     → Qui es-tu, quelle est ton expertise
2. PÉRIMÈTRE    → Ce que tu fais / ne fais pas
3. RÈGLES       → Comment tu dois te comporter
4. CONTEXTE     → Informations sur l'environnement de travail
5. FORMAT       → Comment structurer tes réponses
6. EXEMPLES     → Few-shot si nécessaire (optionnel)
────────────────────────────────────────────────────────
LONGUEUR CIBLE : 300-800 tokens (activer le cache si > 1024)
```

## Template system prompt — Agent spécialisé

```
Tu es [RÔLE PRÉCIS] expert avec les certifications suivantes :
- [CERTIFICATION 1]
- [CERTIFICATION 2]

Tu assistes [NOM UTILISATEUR] dans [DOMAINE SPÉCIFIQUE].

## Ce que tu fais
- [CAPACITÉ 1]
- [CAPACITÉ 2]
- [CAPACITÉ 3]

## Ce que tu ne fais pas
- [LIMITE 1] → rediriger vers [AUTRE AGENT]
- [LIMITE 2]

## Règles de comportement
- Toujours répondre en français
- Expliquer ce que tu vas faire avant de le faire
- Demander confirmation avant de créer ou modifier un fichier
- Utiliser le vocabulaire exact de [FRAMEWORK/MÉTHODE]
- Produire des livrables prêts à copier-coller dans [OUTIL]
- En cas d'ambiguïté, poser UNE SEULE question avant d'agir

## Format de sortie par défaut
[DÉCRIRE LE FORMAT ATTENDU]
```

## Template prompt orchestrateur — Décision de routage

```
Tu es l'orchestrateur d'un workflow agentique.
Tu as accès aux agents suivants : [LISTE DES AGENTS].

Analyse la demande suivante et décide :
1. Quel agent appeler en PREMIER et pourquoi
2. Quels agents appeler en PARALLÈLE (si applicable)
3. Quel agent appeler en DERNIER pour la synthèse

DEMANDE : {user_request}

CONTEXTE CLIENT :
- Secteur : {sector}
- Méthodologie : {methodology}
- Contraintes : {constraints}

Réponds au format JSON strict :
{
  "agent_principal": "NOM_AGENT",
  "raison": "explication en 1 phrase",
  "agents_paralleles": ["AGENT_A", "AGENT_B"],
  "agent_synthese": "NOM_AGENT",
  "sequence": ["STEP-01", "STEP-02", "STEP-03"]
}
```

## Template prompt de transfert de contexte

```
## CONTEXTE DU WORKFLOW
Tu interviens dans le workflow "{workflow_name}" à l'étape {step_number}/{total_steps}.

## CE QUI A ÉTÉ FAIT AVANT TOI
{previous_agent} a produit :
---
{previous_output}
---

## TA MISSION
{specific_instructions}

## FORMAT DE SORTIE ATTENDU
{output_format}

## CONTRAINTES SPÉCIFIQUES
{specific_constraints}

Commence par confirmer en 1 phrase que tu as compris le contexte,
puis produis le livrable demandé.
```

## Techniques d'optimisation des prompts

### 1. Positionnement du contexte long
```
# ❌ Mauvais — contexte noyé dans la masse
Tu es un expert. Voici 3000 tokens de contexte... Ta mission est X.

# ✅ Bon — mission AVANT le contexte long
Ta mission : rédige 8 User Stories.
Contexte à utiliser :
---
{long_context}
---
Produis maintenant les 8 US.
```

### 2. Contraintes négatives explicites
```
# ❌ Vague
Produis des User Stories de qualité.

# ✅ Précis avec contraintes négatives
Produis 8 User Stories au format INVEST.
NE PAS :
- Écrire des épics (> 1 sprint)
- Omettre les critères d'acceptation
- Utiliser du jargon technique dans les titres
- Dépasser 3 critères d'acceptation par US
```

### 3. Format de sortie structuré (JSON/YAML)
```
# Forcer un format structuré pour faciliter le parsing
Réponds UNIQUEMENT au format YAML suivant, sans texte avant ni après :

```yaml
user_stories:
  - id: "US-01"
    titre: "..."
    role: "En tant que..."
    action: "je veux..."
    benefice: "afin de..."
    criteres:
      - "Given... When... Then..."
    points: 3
    priorite: "Must Have"
```
```

### 4. Chain-of-thought pour les décisions complexes
```
# Pour les décisions de routage ou d'architecture complexes
Avant de répondre, raisonne étape par étape :
1. Identifie le domaine principal de la demande
2. Liste les agents candidats et leurs périmètres
3. Évalue les dépendances entre les étapes
4. Décide du séquençage optimal
5. Formule ta réponse finale

Montre ton raisonnement avant la décision finale.
```

### 5. Few-shot pour les formats critiques
```
# Exemples concrets pour les formats non standards
Voici 2 exemples du format attendu :

EXEMPLE 1 :
Input  : "Utilisateur veut filtrer des produits"
Output : US-01 | En tant que client | je veux filtrer par catégorie | afin de trouver rapidement | AC: Given produits affichés When je clique filtre Then liste filtrée | 3pts | Must Have

EXEMPLE 2 :
Input  : "Admin veut exporter des données"
Output : US-02 | En tant qu'admin | je veux exporter en CSV | afin d'analyser les ventes | AC: Given rapport affiché When je clique export Then CSV téléchargé | 2pts | Should Have

Maintenant produis les US pour : {contexte}
```

## Anti-patterns à éviter

```
❌ Prompt trop vague
   "Fais une bonne analyse de ce brief"
   → Préciser : quel type d'analyse, quel format, quelle longueur

❌ Instructions contradictoires
   "Sois concis" + "Fournis tous les détails"
   → Choisir une consigne, définir une longueur cible

❌ Contexte dupliqué
   Répéter le même contexte dans system + user prompt
   → Mettre le contexte stable dans system (avec cache), le contexte variable dans user

❌ Absence de format de sortie
   L'agent choisit librement son format → difficile à parser
   → Toujours spécifier le format exact avec un exemple

❌ Demandes multiples en un seul prompt
   "Rédige les US, crée le plan de test et fais le reporting"
   → Séparer en 3 appels agents distincts
```

## Livrables
- System prompts d'agents optimisés
- Prompts de routage orchestrateur (JSON output)
- Prompts de transfert de contexte
- Bibliothèque de patterns few-shot
- Checklist anti-patterns

## Format de sortie
Précise : type de prompt à rédiger (system / routage / transfert / validation), agent cible, format de sortie attendu, contraintes spécifiques.
