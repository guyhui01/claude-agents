# Skill — CV Parsing & Scoring ATS
> Certifications : SHRM-CP (SHRM) · PHR (HRCI) · ATD CPTD (ATD)

## Objectif
Comprendre et optimiser la façon dont les ATS parsent, scorent et classent les CV — tant du côté recruteur (configuration des critères) que du côté candidat (optimisation du CV) — pour maximiser la qualité des matchings et éviter les faux positifs/négatifs.

## Comment fonctionne le parsing ATS

```
PIPELINE DE TRAITEMENT D'UN CV PAR UN ATS
──────────────────────────────────────────────────────
ÉTAPE 1 — PARSING (extraction de données)
  · Extraction structurée : nom, contact, dates, entreprises,
    titres de postes, compétences, diplômes, langues
  · Moteurs courants : Textkernel, Sovren/Affinda, RChilli
  · Limites : PDF graphique (colonnes, tableaux) mal parsé
              Infographies = données perdues
              Polices non-standards = caractères corrompus

ÉTAPE 2 — NORMALISATION
  · "Dév. logiciel" → "Développeur logiciel" (stemming)
  · "LLM" → lié à "Large Language Model", "IA générative"
  · Dates normalisées : "depuis 2022" → 2022-présent
  · Titres de postes mappés sur un référentiel standard

ÉTAPE 3 — SCORING / MATCHING
  · Comparaison avec les critères de l'offre (mots-clés, niveau, expérience)
  · Score de 0-100% selon algorithme propre à chaque ATS
  · Pondération possible : critères "must have" vs "nice to have"
  · Certains ATS utilisent des modèles ML (Eightfold, Beamery)

ÉTAPE 4 — CLASSEMENT
  · Tri automatique par score décroissant
  · Filtres d'exclusion (ex : localisation, niveau d'expérience)
  · Résultat : shortlist automatique visible par le recruteur
```

## Critères de scoring — Ce que l'ATS évalue

| Critère ATS | Poids typique | Optimisation |
|---|---|---|
| Mots-clés techniques (stack) | 30-40% | Utiliser les termes exacts de l'offre |
| Intitulé de poste | 20-25% | Aligner avec le titre cible |
| Années d'expérience | 15-20% | Indiquer clairement les durées |
| Diplôme / niveau d'études | 10-15% | Orthographe officielle de l'école |
| Localisation | 5-10% | Ville précise ou mention "Remote" |
| Certifications | 5-10% | Nom exact de la certification |

## Formats CV compatibles ATS

```
FORMATS RECOMMANDÉS (parsing optimal)
──────────────────────────────────────────────────────
✓ PDF texte natif (généré depuis Word/Google Docs → Enregistrer PDF)
✓ DOCX / DOC (Microsoft Word)
✓ Structure linéaire : une colonne, sans tableau
✓ Polices standards : Arial, Calibri, Times New Roman, Helvetica
✓ Sections clairement nommées : "Expériences", "Compétences", "Formation"
✓ Dates au format cohérent : MM/AAAA ou AAAA

FORMATS À ÉVITER
──────────────────────────────────────────────────────
✗ PDF image (scan) → texte non lisible par ATS
✗ CV en colonnes multiples ou tableaux complexes → parsing aléatoire
✗ Infographies / icônes pour compétences → données perdues
✗ En-têtes / pieds de page pour informations clés → souvent ignorés
✗ Polices décoratives, logos intégrés
✗ Fichiers JPEG, PNG, PowerPoint
```

## Optimisation CV pour ATS — Checklist recruteur

```
CONFIGURATION CÔTÉ RECRUTEUR (paramétrage ATS)
──────────────────────────────────────────────────────
□ Définir les mots-clés "must have" (éliminatoires) séparément
  des "nice to have" (valorisants)
□ Éviter les critères trop restrictifs (ex : "5 ans d'expérience sur X"
  pour une techno récente de 3 ans)
□ Prévoir des synonymes : "React" / "ReactJS" / "React.js"
□ Pondérer l'expérience sectorielle vs compétence pure
□ Tester le scoring sur 5 CV "modèles" avant activation
□ Revoir les seuils d'exclusion (risque de discrimination indirecte)
□ Auditer mensuellement les CV rejetés automatiquement (biais ATS)

OPTIMISATION CÔTÉ CANDIDAT (conseil aux candidats sourcés)
──────────────────────────────────────────────────────
□ Reprendre les mots-clés exacts de l'offre dans le CV
□ Section "Compétences techniques" dédiée et lisible (pas d'icônes)
□ Titre de CV = intitulé du poste visé ou proche
□ Chaque mission : titre exact + dates + entreprise + 3-5 bullets
□ Certifications : nom complet + organisme + année
□ Sauvegarder en PDF texte natif (pas de scan)
```

## Diagnostic ATS — Taux de parsing par ATS populaires

| ATS | Parsing FR | Score IA | Points faibles |
|---|---|---|---|
| **Greenhouse** | ★★★★☆ | Basique | CV complexes mal parsés |
| **Lever** | ★★★★☆ | Moyen | Titres de postes non-standards |
| **SmartRecruiters** | ★★★★★ | Avancé | Configuration requiert du temps |
| **Workable** | ★★★☆☆ | Basique | Limites sur PDF graphiques |
| **Eightfold AI** | ★★★★★ | ML avancé | Coût élevé |
| **Recruitee** | ★★★☆☆ | Basique | Peu adapté aux profils tech pointus |
| **Talentsoft (CSOD)** | ★★★☆☆ | Moyen | ATS legacy, parsing daté |

## Outils de test ATS

| Outil | Usage | Prix |
|---|---|---|
| **Jobscan** | Scanner un CV vs une offre, score ATS simulé | ~20$/mois |
| **Resume Worded** | Analyse CV + score ATS + recommandations | ~19$/mois |
| **SkillSyncer** | Matching CV ↔ offre (mots-clés manquants) | Gratuit (limité) |
| **Rezi.ai** | Rédaction CV optimisé ATS par IA | ~29$/mois |
| **EnhanCV** | Analyse compatibilité ATS + score | ~24$/mois |

## Détection CV sur-optimisés pour ATS (fraude keyword stuffing)

```
SIGNAUX D'UN CV KEYWORD-STUFFED
──────────────────────────────────────────────────────
· Section "Compétences" avec 30+ technologies listées sans contexte
· Mots-clés en police blanche sur fond blanc (technique old-school)
· Répétition des mots-clés de l'offre dans chaque bullet sans nuance
· Expériences très génériques : "Travail sur Python, SQL, AWS, Docker..."
  sans projet concret ni résultat mesurable
· Score ATS élevé (90%) mais entretien très faible

ACTION : Toujours compléter le score ATS par un test technique
         avant de valider un profil en shortlist
```

## Workflow ATS recommandé — Recrutement IT/IA

```
J0   → Ouverture poste : saisie critères ATS (must have / nice to have)
J1-5 → Réception candidatures : parsing automatique, scoring ATS
J5   → Revue humaine : valider/invalider top 20% du scoring
J6-8 → Qualification RH : appel 15 min (grille cf. recrutement-sourcing-it)
J8+  → Shortlist 3-5 profils : entretien technique + scorecard
→ Feedback ATS : ajuster critères si shortlist insuffisante ou non qualitative
```

## Livrables
- Audit configuration ATS actuelle du client (scoring, filtres, mots-clés)
- Recommandations d'optimisation des critères de matching
- Guide candidats : 1 page "Comment optimiser votre CV pour notre ATS"
- Rapport mensuel : taux de faux positifs/négatifs ATS détectés

## Format de sortie
Précise : ATS utilisé (ou à sélectionner), volume de candidatures mensuel, profils tech principaux recrutés, problème identifié (trop de CV rejetés / trop de CV non pertinents passent / scoring incohérent).
