# Skill — Documentation Technique IA
> Certifications : Anthropic Claude Code in Action · Google Digital Marketing

## Objectif
Produire une documentation technique claire, maintenable et accessible pour les développeurs, les utilisateurs et les équipes produit.

## Types de documentation technique
| Type | Audience | Objectif | Format |
|---|---|---|---|
| **README** | Développeurs | Installation + usage rapide | Markdown |
| **API Docs** | Développeurs | Référence technique | OpenAPI / Swagger |
| **User Guide** | Utilisateurs finaux | Utilisation pas à pas | Web / PDF |
| **Architecture Doc** | Tech leads | Comprendre le système | C4 / diagrams |
| **Runbook** | Ops / DevOps | Procédures opérationnelles | Markdown / Wiki |
| **Release Notes** | Tous | Nouveautés par version | Markdown |

## Template README idéal
```markdown
# [Nom du projet]
> [Description courte — 1 ligne]

## ✨ Fonctionnalités principales
- Feature 1
- Feature 2

## 🚀 Installation rapide
```bash
npm install nom-du-paquet
```

## 📖 Usage
```python
from module import Class
# exemple minimal fonctionnel
```

## 📋 Prérequis
- Python 3.10+
- Node.js 18+

## 🗺️ Roadmap
- [ ] Feature à venir

## 🤝 Contribuer
[lien vers CONTRIBUTING.md]

## 📄 Licence
MIT
```

## Prompt documentation technique IA
```
"Génère la documentation [type : README / API / guide utilisateur]
pour [description du projet / composant / API].
Audience : [développeurs juniors / seniors / utilisateurs finaux].
Inclure :
  - Description et objectif
  - Prérequis et installation
  - Exemples de code fonctionnels
  - Cas d'usage fréquents
  - Erreurs courantes et solutions
Ton : [technique précis / accessible / pédagogique].
Format : Markdown."
```

## Bonnes pratiques documentation
- **Docs as Code** : versionner la doc avec le code (même repo)
- **Exemples > descriptions** : un exemple vaut 10 lignes d'explication
- **Tests de la doc** : les exemples de code doivent tourner
- **Docs vivantes** : mettre à jour à chaque release (CI/CD)
- **Accessibilité** : structure H1/H2/H3 claire, alt text sur les images

## Livrables
- README.md complet et structuré
- Guide utilisateur (5-20 pages selon complexité)
- Référence API (OpenAPI 3.0)
- Changelog et release notes format standard
- Runbook opérationnel (procédures de déploiement / incident)

## Format de sortie
Précise : type de doc · projet/composant décrit · audience · niveau de détail · format de rendu (Markdown, HTML, PDF) · langage de code utilisé

## Anti-patterns
- ❌ **Doc désynchronisée du code** — documentation non versionnée avec le code → obsolète dès la release suivante. Appliquer *Docs as Code*.
- ❌ **Descriptions sans exemples** — expliquer sans montrer → l'utilisateur ne sait pas démarrer. Un exemple exécutable vaut 10 lignes de prose.
- ❌ **Exemples non testés** — snippets qui ne compilent pas → perte de confiance immédiate. Tester la doc en CI.
- ❌ **Tout dans un seul README** — mélanger README, API, runbook, guide → illisible. Séparer par type et audience.
- ❌ **Jargon non défini** — acronymes et termes maison non explicités → barrière pour les nouveaux arrivants.

## Sources
- **OpenAPI Initiative** — *OpenAPI Specification 3.x* (Linux Foundation) — référence API
- **Simon Brown** — *The C4 Model for visualising software architecture* (c4model.com) — diagrammes d'architecture
- **Write the Docs** — *Docs as Code* — documentation versionnée avec le code
- **Daniele Procida** — *Diátaxis framework* (tutorials / how-to / reference / explanation) — typologie de la documentation
- **WCAG 2.2** — W3C (octobre 2023) — accessibilité des contenus (structure, alt text)

## Voir aussi
- [redaction-rapport.md](redaction-rapport.md) — rédaction structurée hors contexte code
- [ux-writing.md](ux-writing.md) — microcopy et messages d'erreur côté interface
- [`../dev_typescript_ia/README.md`](../dev_typescript_ia/README.md) — skills développeur (consommateurs de la doc)
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — documentation de prompts/agents
