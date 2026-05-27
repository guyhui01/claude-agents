# Briefs — Inputs de lancement de workflows

> Ce dossier contient les briefs clients rédigés par Guy pour lancer les workflows en mode live.
> Un brief = l'input d'un workflow, sans output documenté.

---

## Gouvernance

| Dossier | Contenu | Qualité |
|---------|---------|---------|
| `briefs/` | Brief seul — input rédigé, prêt à lancer | Brut / exploratoire |
| `use_cases/` | Brief + output complet curatés | Showcase / validé |

**Règle** : un brief peut évoluer en use case une fois le workflow exécuté et l'output jugé de qualité showcase.

---

## Convention de nommage

```
WF-{ID}-brief-{secteur}-{contexte}.md
```

Exemples :
- `WF-002-brief-assurance-pi01.md`
- `WF-003-brief-fintech-lancement-app.md`
- `WF-006-brief-retail-avant-vente.md`

---

## Structure d'un brief

```
# Brief — WF-{ID} — {Titre contexte}

## Commande de lancement
[Commande complète à coller dans Claude Code]

## Contexte client
[Paramètres renseignés]

## Objectif du test
[Ce qu'on veut valider ou explorer]

## Statut
- [ ] Brief rédigé
- [ ] Workflow exécuté
- [ ] Output évalué
- [ ] Promu en use case ? [oui/non]
```
