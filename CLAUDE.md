# CLAUDE.md — Instructions projet Claude Agents Library

> Ce fichier est lu automatiquement par Claude Code à l'ouverture de ce répertoire.
> Il contient les conventions, l'architecture du repo et les règles de comportement.

---

## Identité du projet

Bibliothèque de **38 agents IA spécialisés** + **37 dossiers de skills** + **10 workflows agentiques** + **3 serveurs MCP**, utilisée par Guy HUIBONHOA (Product Owner IA freelance) pour ses missions de conseil IT/IA chez ses clients CAC40, GAFA, licornes, scaleups et PME.

---

## Architecture

```
ClaudeCode/
├── AGENT-*.md          # 38 agents (rôles + skills associés)
├── skills/             # 37 dossiers de skills actionnables (un par agent)
├── workflows/          # 10 workflows BPMN orchestrés
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

## Git workflow & versioning

### Stratégie hybride (solo)

| Type de travail | Branche ? | Tag ? | Release GitHub ? |
|---|---|---|---|
| Typo, fix mineur, sync README | `main` direct | Non | Non |
| 1 skill ajouté ou modifié | `main` direct | Non | Non |
| Nouveau workflow (WF-006…) | `feature/wf-<id>-<topic>` | Patch (vX.Y.**Z**) | Non |
| Nouvel agent (AGENT-…) | `feature/agent-<name>` | Minor (vX.**Y**.0) | Optionnel |
| Audit + recommandations | `audit/<topic>-<date>` | Major (v**X**.0.0) | **Oui** |
| Refactor multi-agents (> 5 fichiers) | `refactor/<topic>` | Minor | Optionnel |

### Convention de versioning (SemVer)

- **Major (X.0.0)** — audit complet, refactoring structurel large, breaking change
- **Minor (X.Y.0)** — nouvel agent, nouveau workflow, nouveau dossier de skills, enrichissement majeur
- **Patch (X.Y.Z)** — corrections ponctuelles, renommages, ajustements mineurs

### Convention de commits (Conventional Commits)

```
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel — Co-Authored-By, refs CHANGELOG]
```

Types : `feat` · `fix` · `refactor` · `chore` · `docs` · `test` · `ci`

### Tags annotés

```bash
git tag -a vX.Y.Z <commit> -m "Brève description correspondant au CHANGELOG"
git push origin --tags
```

### GitHub Releases

Pour chaque tag Major (et Minor important), créer une Release :
```bash
gh release create vX.Y.Z --title "vX.Y.Z — <titre>" --notes-file <extrait-changelog.md>
```

### Pre-commit checklist (manuel)

- [ ] Compteurs cohérents (README, START.md, AGENT-ORCHESTRATEUR-WORKFLOW.md)
- [ ] Aucune référence orpheline (grep des anciens chemins si refactor)
- [ ] AGENT files mis à jour si skills ajoutés/déplacés/supprimés
- [ ] CHANGELOG.md alimenté avec entrée datée
- [ ] Backup local si refactor majeur (`backup/claudecode_backup_<date>.zip`)

### Push & branches — règles d'or

- Push sur `main` **uniquement après accord explicite** de l'utilisateur
- Jamais de `git push --force` sur `main`
- Jamais de `--no-verify` sans accord explicite
- Squash merge par défaut sur les feature branches (1 commit propre sur main)
- Branche locale supprimée après merge (`git branch -d feature/...`)

### Branch protection (configuré via API — 2026-05-26)

Pour le repo `main` :
- ✅ Require linear history (squash uniquement)
- ✅ Do not allow force pushes
- ✅ Do not allow deletions
- ✅ Secret scanning + push protection activés
- ⚠️ Require pull request reviews → skip en solo (impossible self-review)

### Authentification GitHub — SSH

Remote configuré en SSH : `git@github.com:guyhui01/claude-agents.git`
Aucun token nécessaire pour les opérations `git push` / `git pull`.

```powershell
# Vérifier la connexion SSH
ssh -T git@github.com
```

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
