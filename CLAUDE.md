# CLAUDE.md — Instructions projet Claude Agents Library

> Ce fichier est lu automatiquement par Claude Code à l'ouverture de ce répertoire.
> Il contient les conventions, l'architecture du repo et les règles de comportement.

---

## Identité du projet

Bibliothèque de **31 agents IA spécialisés** + **30 dossiers de skills** + **5 workflows agentiques** + **3 serveurs MCP**, utilisée par Guy HUIBONHOA (Product Owner IA freelance, Adservio) pour ses missions de conseil IT/IA chez ses clients CAC40, GAFA, licornes, scaleups et PME.

---

## Architecture

```
ClaudeCode/
├── AGENT-*.md          # 31 agents (rôles + skills associés)
├── skills/             # 30 dossiers de skills actionnables (un par agent)
├── workflows/          # 5 workflows BPMN orchestrés
├── mcp-servers/        # Intégrations Jira / Confluence / journal missions
├── memory/             # Mémoire projet (CLAUDE.md local)
├── backup/             # Sauvegardes (gitignored)
├── sandbox/            # Espace de test (gitignored)
├── projects/           # Projets clients (gitignored — repo séparé claude-projects)
├── README.md           # Catalogue complet
├── START.md            # Quick-start hub
└── CLAUDE.md           # Ce fichier
```

---

## Conventions

- **Nommage fichiers** : `snake_case.md` pour les skills, `AGENT-NOM-MAJUSCULE.md` pour les agents
- **Langue** : français pour toutes les communications et fichiers
- **Encodage** : UTF-8
- **Format dates** : ISO 8601 (`AAAA-MM-JJ`) dans les memories
- **Structure d'agent** : identité + certifications · périmètre ✅❌ · règles · table de skills · activation
- **Structure de skill** : objectif · contenu actionable · livrables · format de sortie
- **Structure de workflow** : YAML carte d'identité · diagramme BPMN · paramètres contextuels · fiches étapes · livrables

---

## Règles de comportement

- Toujours **expliquer ce que tu vas faire** avant de le faire
- Toujours **demander confirmation** avant de modifier un fichier
- Toujours **demander confirmation** avant de pusher sur GitHub (`git push`)
- **Commits OK sans demande**, mais push uniquement sur accord explicite
- **Réponses concises**, en français
- Pour les actions destructrices ou irréversibles (`rm -rf`, `git reset --hard`, force push) → demander avant
- Pour les éditions mécaniques (Sonnet 4.6 suffit), pour les arbitrages d'architecture (Opus 4.7)

---

## Choix du modèle

| Tâche | Modèle recommandé |
|---|---|
| Audit, raisonnement complexe, arbitrage d'architecture | **Opus 4.7** |
| Édits ciblés, refactoring mécanique, génération de skills | **Sonnet 4.6** |
| Génération massive de boilerplate, scripts simples | **Haiku 4.5** |

---

## Points d'entrée

- **Quick start** : voir `START.md`
- **Catalogue complet** : voir `README.md`
- **Workflows** : voir `workflows/README.md`
- **MCP servers** : voir `mcp-servers/README.md`
- **Mémoire utilisateur globale** : `~/.claude/CLAUDE.md`
- **Mémoire auto conversationnelle** : `~/.claude/projects/.../memory/MEMORY.md`

---

## Gouvernance des repos

- **claude-agents** (ce repo, public) : agents génériques + skills + workflows + MCP
- **claude-projects** (séparé) : projets clients fictifs/showcase
- **Futurs projets clients réels** : repo privé dédié par mission

---

## Activation rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte ce rôle.
Charge ensuite workflows/WF-<XXX>.md et lance le workflow.
```

ou pour un agent unique :

```
Lis le fichier AGENT-<NOM>.md et adopte ce rôle.
Confirme que tu es prêt en listant les skills disponibles.
```
