# Outputs — Résultats bruts de workflows

> Ce dossier contient les outputs générés lors de l'exécution live des workflows à partir des briefs.
> Traçables mais non curatés — intermédiaire entre brief et use case.

---

## Pipeline

```
briefs/ → [run workflow] → outputs/ → [curation] → use_cases/
```

---

## Gouvernance

| Critère | Règle |
|---------|-------|
| Modifiable | ✅ Oui — enrichissement post-run possible |
| Commité | ✅ Toujours — traçabilité obligatoire |
| Promu en use_case | Si output jugé de qualité showcase |

---

## Convention de nommage

```
WF-{ID}-output-{secteur}-{contexte}.md
```

Lien avec le brief source :
```
briefs/    WF-002-brief-assurance-pi01.md   ← input
outputs/   WF-002-output-assurance-pi01.md  ← résultat
use_cases/ WF-002-uc01-assurance-pi01.md    ← si promu
```

---

## Structure d'un output

```markdown
# Output — WF-{ID} — {Titre contexte}

> Brief source : `../briefs/WF-{ID}-brief-{contexte}.md`
> Date d'exécution : AAAA-MM-JJ
> Modèle utilisé : claude-{modèle}
> Agents activés : [liste]

---

## [Résultats par étape]

[Contenu généré par le workflow]

---

## Évaluation

| Critère | Note /5 | Commentaire |
|---------|---------|-------------|
| Complétude livrables | | |
| Qualité SAFe / Agile | | |
| Réutilisabilité | | |
| Promu en use case ? | oui / non | |
```
