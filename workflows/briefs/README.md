# Briefs — Inputs de lancement de workflows

> Ce dossier contient les briefs clients rédigés par Guy pour lancer les workflows en mode live.
> Un brief = l'input d'un workflow, sans output documenté.

---

## Pipeline

```
briefs/ → [run workflow] → outputs/ → [curation] → use_cases/
```

## Gouvernance

| Dossier | Contenu | Modifiable |
|---------|---------|------------|
| `briefs/` | Input pur — prêt à lancer | ❌ Jamais après commit |
| `outputs/` | Résultat brut du run | ✅ Enrichissement possible |
| `use_cases/` | Output curatés qualité showcase | ✅ Curation |

**Règle** : brief immuable après commit. Si correction nécessaire → nouveau fichier versionné (`-v2.md`).

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
