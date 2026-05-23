# Skill — Formation à Claude Code et aux Outils LLM Professionnels

> Certifications : Anthropic Claude Code in Action (2026), Anthropic Claude Code 101 (2026), Anthropic Claude 101 (2026), Google AI Essentials Certificate

## Objectif

Concevoir et animer des formations à Claude Code et aux outils LLM professionnels (API Anthropic, Claude.ai Teams, intégrations IDE) — pour des profils dev, PO, chef de projet IA et consultants souhaitant maîtriser l'écosystème Anthropic en contexte professionnel.

## Programme

### Module A — Claude Code Fondamentaux (demi-journée — tous niveaux tech)

```
SÉQUENCE                                      DURÉE    FORMAT
──────────────────────────────────────────   ──────   ──────────────────
Installation et configuration Claude Code     20 min   Hands-on guidé
Interface CLI : commandes essentielles        20 min   Démo + exercice
Travailler avec un codebase existant          30 min   TP sur dépôt réel
CLAUDE.md : instructions et conventions       20 min   Édition guidée
Mémoire auto : MEMORY.md et persistance       20 min   Explication + démo
MCP servers : connecter ses outils (Jira…)   30 min   Config guidée
Hooks et automations avancées                20 min   Exemples pratiques
Q&A + ressources pour continuer              20 min   Plénière
```

### Module B — API Anthropic et Anthropic SDK (demi-journée — profils dev)

```
SÉQUENCE                                      DURÉE    FORMAT
──────────────────────────────────────────   ──────   ──────────────────
Architecture de l'API : models, messages      20 min   Slides + code
Messages API : rôles, content blocks          20 min   Démo Python/TS
Prompt caching : économies et stratégie       30 min   Cas concret + mesure
Tool use / function calling                   30 min   TP : agent avec outils
Thinking et extended thinking                 20 min   Démonstration
Batch API : traitement en masse               20 min   Exemple + chiffres
Streaming : UX temps réel                    20 min   Code + démo
Évaluation coûts et monitoring              20 min   Dashboard + calcul
```

### Module C — Workflows IA avec Claude (journée — profils PO/PM/Consultants)

```
SÉQUENCE                                      DURÉE    FORMAT
──────────────────────────────────────────   ──────   ──────────────────
Matin :
  Claude.ai Teams vs API : quand utiliser quoi ?  30 min  Comparatif décisionnel
  Projets Claude : organisation et contexte        30 min  Démo + config
  Prompting professionnel (system prompts métier)  60 min  Atelier par métier

Après-midi :
  Workflows agentiques : orchestrer des agents    60 min  Atelier WF
  Intégrations : Claude + Jira/Confluence/GitHub  45 min  Config + démo MCP
  Gouvernance IA : usage sécurisé en entreprise   30 min  RGPD + AI Act basics
  Construire sa bibliothèque de prompts           45 min  TP individuel
```

## Contenus pédagogiques clés

### Comparatif Claude.ai vs API Anthropic

```
CRITÈRE          CLAUDE.AI TEAMS           API ANTHROPIC
──────────────   ───────────────────────   ───────────────────────────────
Cible            Utilisateurs métier        Développeurs, intégrateurs
Accès            Interface web/app          Code (Python, TS, curl)
Personnalisation Projets + instructions     System prompts complets
Coût             Abonnement fixe/user       Pay-per-token (variable)
Intégrations     MCP (Claude.ai Pro+)       SDK full + webhooks
Contrôle         Limité (pas de logique)    Total (orchestration complète)
Données          Géré par Anthropic         Configurable (no-logging opt)
```

### Guide de démarrage Claude Code (format mémo)

```
┌─────────────────────────────────────────────────────┐
│  CLAUDE CODE — COMMANDES ESSENTIELLES               │
├─────────────────────────────────────────────────────┤
│  /help           → Aide générale                    │
│  /model          → Changer de modèle                │
│  /config         → Configuration session            │
│  /clear          → Vider le contexte                │
│  /memory         → Voir les mémoires actives        │
│  ! <commande>    → Exécuter un shell                │
├─────────────────────────────────────────────────────┤
│  FICHIERS CLÉS                                      │
│  ~/.claude/CLAUDE.md     → Instructions globales    │
│  <projet>/CLAUDE.md      → Instructions projet      │
│  memory/MEMORY.md        → Index des mémoires       │
├─────────────────────────────────────────────────────┤
│  MODÈLES DISPONIBLES                                │
│  claude-opus-4-7    → Raisonnement complexe         │
│  claude-sonnet-4-6  → Tâches courantes              │
│  claude-haiku-4-5   → Scripts simples               │
└─────────────────────────────────────────────────────┘
```

### Sécurité et bonnes pratiques entreprise

```
✅ PEUT ÊTRE PARTAGÉ AVEC CLAUDE CODE
  → Code source interne (avec permission SI)
  → Documentation technique
  → Templates de documents
  → Données anonymisées

⚠ À VÉRIFIER AVEC LE DPO / RSSI
  → Données clients nommées
  → Données RH
  → Propriété intellectuelle sensible
  → Code de systèmes critiques

❌ NE PAS PARTAGER
  → Credentials / clés API
  → Mots de passe
  → Données de santé
  → Informations financières confidentielles
```

## Livrables de formation

- Guide mémo "Claude Code en 1 page" (plastifié, format A4)
- Cheat sheet API Anthropic Python/TypeScript
- Template CLAUDE.md starter (adaptable par équipe)
- TP hands-on annotés : 5 exercices progressifs
- Guide "Gouvernance IA — Usage sécurisé de Claude en entreprise"

## Format de sortie

Précise : **profil** (dev / PO / consultant / mixte), **module souhaité** (A / B / C / sur-mesure), **durée** (demi-journée / journée), **contexte** (formation initiale / montée en compétences / certification), **outils intégrés** à démontrer (Jira, Confluence, GitHub, autres).
