# MCP Servers — Intégrations Claude Code CLI

> 3 serveurs MCP qui connectent Claude Code CLI à Jira, Confluence et un journal de missions  
> Prérequis : Node.js 18+ · npm · Claude Code CLI

---

## Serveurs disponibles

| Serveur | Outils | Usage principal |
|---|---|---|
| [mcp-jira](mcp-jira/) | 5 outils | Créer US, backlog, epics depuis WF-001 et WF-002 |
| [mcp-confluence](mcp-confluence/) | 4 outils | Publier rapports et livrables depuis WF-004 |
| [mcp-workflow-log](mcp-workflow-log/) | 4 outils | Journal de bord missions, résumé mensuel |

---

## Installation

### Étape 1 — Installer les dépendances (une fois par serveur)

```powershell
# Jira
cd "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers\mcp-jira"
npm install

# Confluence
cd "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers\mcp-confluence"
npm install

# Workflow Log (pas de dépendances externes)
cd "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers\mcp-workflow-log"
npm install
```

### Étape 2 — Obtenir un API token Atlassian

Si tu utilises **Jira Cloud / Confluence Cloud** (domaine `.atlassian.net`) :
1. Va sur : https://id.atlassian.com/manage-profile/security/api-tokens
2. Crée un nouveau token → copie-le
3. Le même token fonctionne pour Jira ET Confluence Cloud

### Étape 3 — Configurer Claude Code CLI

Copie le fichier `claude_code_settings.json` dans le dossier global Claude :

```powershell
# Créer le dossier si inexistant
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude"

# Copier la config (ATTENTION : écrase settings.json existant — sauvegarder d'abord)
Copy-Item "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers\claude_code_settings.json" "$env:USERPROFILE\.claude\settings.json"
```

Puis éditer `C:\Users\Guy HUIBONHOA\.claude\settings.json` et remplacer :
- `<ton-domaine>` par ton domaine Atlassian (ex: `monentreprise`)
- `<ton-api-token-jira>` et `<ton-api-token-confluence>` par ton API token
- `<CLE-PROJET>` par la clé du projet Jira (ex: `PROJ`)
- `<CLE-ESPACE>` par la clé de l'espace Confluence (ex: `CONSULT`)

> **Si tu as déjà un settings.json**, ajoute uniquement la clé `"mcpServers"` dans le JSON existant plutôt que de l'écraser.

### Étape 4 — Vérifier l'installation

```bash
# Lister les serveurs MCP configurés
claude mcp list

# Tester le serveur Jira (doit répondre en quelques secondes)
claude mcp test jira
```

---

## Utilisation dans Claude Code CLI

Une fois configurés, les outils sont disponibles directement dans tes sessions Claude Code :

### Exemple — WF-001 → Jira en 1 commande

Après avoir exécuté le workflow WF-001 et obtenu le backlog :

```
Crée ces 10 User Stories dans Jira avec jira_bulk_create_backlog :
[coller ici le backlog produit par WF-001]
```

### Exemple — WF-004 → Confluence en 1 commande

Après avoir exécuté le workflow WF-004 :

```
Publie ce rapport de mission dans Confluence avec confluence_publish_report,
espace: CONSULT, client: ClientA, statut: Brouillon :
[coller ici le rapport produit par WF-004]
```

### Exemple — Logger une mission

```
Enregistre cette mission dans le journal avec log_workflow_run :
- Workflow : WF-004
- Client : Grand Groupe CAC40
- Livrables : Audit maturité IA, Roadmap 12 mois, Plan formation
- Durée : 75 min
- Jira : CA-142, CA-143
```

---

## Outils disponibles par serveur

### mcp-jira

| Outil | Description |
|---|---|
| `jira_create_story` | Crée une User Story (titre, description, critères d'acceptation, points) |
| `jira_bulk_create_backlog` | Crée plusieurs stories en une opération depuis le backlog WF-001 |
| `jira_create_epic` | Crée un Epic pour regrouper des stories |
| `jira_get_project_info` | Retourne les boards et métadonnées du projet |
| `jira_search_issues` | Recherche en JQL (sprint actif, epics, filtres) |

### mcp-confluence

| Outil | Description |
|---|---|
| `confluence_create_page` | Crée une page depuis Markdown (conversion automatique) |
| `confluence_update_page` | Met à jour une page existante (par ID) |
| `confluence_search_page` | Recherche des pages par titre — retourne les IDs |
| `confluence_publish_report` | Publie un rapport de mission avec en-tête auteur/date/statut |

### mcp-workflow-log

| Outil | Description |
|---|---|
| `log_workflow_run` | Enregistre une exécution (workflow, client, livrables, durée) |
| `get_workflow_history` | Historique filtrable (workflow, client, mois) |
| `get_client_history` | Tous les workflows pour un client donné |
| `get_monthly_summary` | Résumé d'activité mensuel (missions, clients, livrables) |

---

## Dépannage

**Erreur `npx tsx not found`**  
```powershell
npm install -g tsx
```

**Erreur Jira 401 Unauthorized**  
- Vérifier que l'API token est bien celui de https://id.atlassian.com (pas le mot de passe)
- Sur Jira Server, utiliser mot de passe ou Personal Access Token

**Erreur Jira 400 sur création issue**  
- Vérifier que `JIRA_PROJECT_KEY` est correct (sensible à la casse)
- Vérifier que le type d'issue "Story" ou "Epic" existe dans ton projet
- Pour les projets Next-gen, `customfield_10014` (Epic Link) peut ne pas exister — retirer epic_key

**Erreur Confluence 404**  
- Vérifier que l'espace Confluence existe et que le compte a les droits d'écriture
- Sur Confluence Cloud, l'URL doit être `https://domaine.atlassian.net` (sans `/wiki`)

**Les serveurs ne démarrent pas**  
```powershell
# Tester manuellement depuis le dossier du serveur
cd "C:\Users\Guy HUIBONHOA\ClaudeCode\mcp-servers\mcp-jira"
npx tsx server.ts
# Doit rester en attente sans erreur (stdio transport)
```

---

## Fichier log des missions

Le journal est stocké dans :
```
mcp-servers/mcp-workflow-log/workflow_log.json
```

Format JSON — consultable directement ou via les outils MCP. À exclure du `.gitignore` si les données sont sensibles.
