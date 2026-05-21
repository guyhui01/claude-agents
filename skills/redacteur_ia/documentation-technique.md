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
