# Skill — Rédaction de Rapport Professionnel
> Certifications : HubSpot Content Marketing · Google Digital Garage · CQFD Communication Écrite

## Objectif
Rédiger des rapports professionnels clairs, structurés et actionnables pour des audiences internes ou externes — rapports de projet, rapports d'audit, rapports d'activité.

## Structure universelle d'un rapport professionnel

### Architecture en 7 parties
```
1. PAGE DE GARDE
   → Titre, auteur, date, version, destinataires, classification

2. RÉSUMÉ EXÉCUTIF (1 page max)
   → Contexte (2 phrases) → Principaux constats → Recommandations clés
   → Lisible seul, sans le reste du rapport

3. SOMMAIRE
   → Navigable, avec numéros de pages, profondeur max 3 niveaux

4. INTRODUCTION
   → Contexte et enjeux → Périmètre et limites → Méthodologie utilisée

5. DÉVELOPPEMENT (corps du rapport)
   → Constats objectifs (faits > opinions)
   → Analyses et interprétations
   → Éléments de preuve (données, tableaux, verbatims)

6. CONCLUSIONS & RECOMMANDATIONS
   → Synthèse des constats majeurs
   → Recommandations priorisées (Impact / Effort)
   → Plan d'action avec responsables et échéances

7. ANNEXES
   → Données brutes, méthodologie détaillée, glossaire, bibliographie
```

## Résumé exécutif — Template
```markdown
## Résumé exécutif

**Contexte** : [Problème ou question à l'origine du rapport — 2 phrases max]

**Principaux constats** :
1. [Constat 1 — factuel, chiffré si possible]
2. [Constat 2]
3. [Constat 3]

**Recommandations** :
- [Action prioritaire 1] → Responsable : [Nom] | Échéance : [Date]
- [Action prioritaire 2] → Responsable : [Nom] | Échéance : [Date]

**Impact attendu** : [Bénéfice mesurable en termes business]
```

## Rédaction des constats — Méthode STAR
```
SITUATION  → Contexte factuel (ce qui existe, ce qui a été observé)
TÂCHE/TEST → Ce qui a été analysé ou testé
ACTION     → Ce qui a été fait / ce qui se passe
RÉSULTAT   → Ce qui en découle (avec données quantifiées)

Exemple (rapport d'audit) :
  SITUATION  : Le processus de validation des données clients implique 3 équipes
  TÂCHE      : Analyse des délais de traitement sur 6 mois (Jan-Jun 2026)
  ACTION     : Le délai moyen de validation est de 4,3 jours
  RÉSULTAT   : 12% des dossiers dépassent le SLA contractuel de 3 jours,
               générant 47 réclamations clients sur la période
```

## Niveaux de langue selon le destinataire
| Audience | Style | Jargon | Longueur |
|---|---|---|---|
| CODIR / Direction | Assertif, synthétique | Minimal | 1-3 pages + annexes |
| Équipe métier | Accessible, pratique | Métier maîtrisé | 5-10 pages |
| Expert technique | Précis, dense | Technique complet | Illimité |
| Client externe | Clair, valorisant | Zéro jargon interne | 3-7 pages |

## Mise en forme professionnelle

### Règles de lisibilité
```
Paragraphes : 5-7 lignes max
Phrases     : 25 mots max (clarté)
Titres      : Informatifs, pas génériques
             ❌ "Analyse des données"
             ✅ "Les données révèlent un écart de 23% sur les délais"
Listes      : Toujours au moins 3 items, jamais plus de 7
Données     : En tableau ou graphique, jamais en paragraphe dense
```

### Graphiques recommandés par type de donnée
```
Évolution dans le temps → Courbe (line chart)
Comparaison catégories  → Barres horizontales (bar chart)
Composition / part      → Secteurs si ≤ 5 catégories (pie chart)
Corrélation             → Nuage de points (scatter plot)
Avancement              → Jauge ou barre de progression
Carte géographique      → Choroplèthe si répartition géographique
```

## Relecture — Checklist qualité
```
FOND :
  ☐ Tous les constats sont étayés par des preuves (données, sources)
  ☐ Les recommandations découlent logiquement des constats
  ☐ Aucune opinion personnelle non étayée
  ☐ Le périmètre annoncé est respecté

FORME :
  ☐ Résumé exécutif lisible sans le reste
  ☐ Aucune faute d'orthographe ou de grammaire
  ☐ Tous les acronymes sont explicités à la première occurrence
  ☐ Numérotation des pages, des figures, des tableaux
  ☐ Sources et dates des données citées

IMPACT :
  ☐ Le lecteur comprend ce qu'il doit faire après lecture
  ☐ Les recommandations sont réalistes et chiffrées si possible
  ☐ Délais et responsables identifiés pour chaque action
```

## Livrables
- Rapport complet (Word / PDF) avec table des matières
- Résumé exécutif standalone (1 page)
- Fichier de données sources (Excel / CSV) en annexe
- Version "allégée" mobile (si nécessaire)

## Format de sortie
Précise : type de rapport (audit, activité, projet, incident) · audience principale · périmètre · données disponibles · longueur cible · deadline

## Anti-patterns
- ❌ **Résumé exécutif qui n'en est pas un** — résumé qui exige la lecture du rapport pour être compris → décideurs perdus. Il doit être autoportant (principe Minto).
- ❌ **Constats noyés dans les opinions** — mélanger faits et interprétations non étayées → perte de crédibilité, conclusions contestables.
- ❌ **Recommandations non priorisées** — empiler les actions sans Impact/Effort ni responsable/échéance → rapport non actionnable.
- ❌ **Données en paragraphe dense** — chiffres enfouis dans le texte au lieu d'un tableau/graphique → illisible (cf. Tufte).
- ❌ **Graphique mal choisi** — camembert à 12 parts, axes tronqués → message faussé. Choisir le type selon la donnée.

## Sources
- **Barbara Minto** — *The Minto Pyramid Principle* (Pearson, 1987) — structure « réponse d'abord », SCQA, groupement MECE
- **Edward Tufte** — *The Visual Display of Quantitative Information* (Graphics Press, 1983 ; 2ᵉ éd. 2001) — choix et intégrité des graphiques
- **Joseph Williams** — *Style: Lessons in Clarity and Grace* (1981) — clarté rédactionnelle, longueur de phrase
- **Méthode STAR** — issue de l'entretien comportemental (US Army / behavioral interviewing, ~1970s) — adaptée ici à la rédaction de constats factuels

## Voir aussi
- [synthese-executive.md](synthese-executive.md) — résumé exécutif autoportant (pyramide Minto)
- [compte-rendu-pro.md](compte-rendu-pro.md) — relevé de décisions de réunion
- [note-cadrage.md](note-cadrage.md) — document fondateur amont
- [`../ux_design/storytelling-stakeholders.md`](../ux_design/storytelling-stakeholders.md) — mise en récit des données (Tufte)
