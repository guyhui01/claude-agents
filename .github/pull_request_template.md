## Type de modification

- [ ] Nouvel agent / skill / workflow
- [ ] Modification d'un agent / skill / workflow existant
- [ ] Refactoring / réorganisation structurelle
- [ ] Documentation (README, CHANGELOG, CLAUDE.md)
- [ ] Fix mineur (typo, lien cassé)
- [ ] Audit + recommandations

## Description

<!-- Quoi et pourquoi. Référence l'audit ou la demande à l'origine. -->

## Checklist avant merge

- [ ] Compteurs cohérents (README, START.md, AGENT-ORCHESTRATEUR-WORKFLOW.md)
- [ ] Aucune référence orpheline (grep des anciens chemins skills/*)
- [ ] AGENT files mis à jour si skills ajoutés/déplacés/supprimés
- [ ] CHANGELOG.md mis à jour avec entrée datée
- [ ] Backup local créé si refactor majeur (`backup/claudecode_backup_<date>.zip`)
- [ ] Tag git créé si jalon (Major / Minor — voir CLAUDE.md)
- [ ] GitHub Release publiée si Major

## Tests

- [ ] `git status` propre après modifs
- [ ] Pas de fichier `.tmp`, `.bak` ou personnel commité
- [ ] Tous les renames détectés à 100% par git (historique préservé)

## Lien CHANGELOG

<!-- Ex : voir [v2.0.0](CHANGELOG.md#200--2026-05-22) -->
