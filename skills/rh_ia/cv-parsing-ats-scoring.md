# Skill — CV Parsing & Scoring ATS
> Certifications : SHRM-CP (SHRM) · PHR (HRCI) · ATD CPTD (ATD)

## Objectif
Comprendre et optimiser la façon dont les ATS parsent, scorent et classent les CV — tant du côté recruteur (configuration des critères) que du côté candidat (optimisation du CV) — pour maximiser la qualité des matchings et éviter les faux positifs/négatifs.

## ⚖️ Conformité — Scoring ATS = système à HAUT RISQUE

> Le scoring/filtrage automatisé de candidatures est **explicitement classé à haut risque**
> par l'**AI Act (Règlement UE 2024/1689, art. 6 §2 + Annexe III pt 4 « Emploi »)**.
> Obligations déployeur applicables au **2 août 2026**.

- **Transparence** : informer le candidat de l'usage d'un outil automatisé (RGPD art. 22 + Code du travail **L1221-8** : information préalable des méthodes/techniques de recrutement, résultats confidentiels).
- **Supervision humaine** : aucune décision de rejet purement automatisée — un recruteur valide (human-in-the-loop) ; droit du candidat à une intervention humaine (RGPD art. 22).
- **Non-discrimination** : auditer les critères et les rejets pour biais indirect (Code du travail **L1132-1**) ; documenter.
- **Minimisation & lien direct** : ne scorer que des critères ayant un **lien direct et nécessaire** avec le poste (Code du travail **L1221-6**).
- **CNIL** : suivre le Guide du recrutement (information candidats, AIPD si traitement à risque).

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

> ⚠️ **Poids paramétrables, exemple de configuration** — chaque ATS et chaque offre définit
> ses propres pondérations. Les valeurs ci-dessous sont un **point de départ illustratif**, pas
> un standard de marché. Veiller à ce que chaque critère ait un lien direct avec le poste (L1221-6).

| Critère ATS | Poids exemple | Optimisation |
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
| **Jobscan** | Scanner un CV vs une offre, score ATS simulé | abonnement mensuel |
| **Resume Worded** | Analyse CV + score ATS + recommandations | abonnement mensuel |
| **SkillSyncer** | Matching CV ↔ offre (mots-clés manquants) | Gratuit (limité) + payant |
| **Rezi.ai** | Rédaction CV optimisé ATS par IA | abonnement mensuel |
| **EnhanCV** | Analyse compatibilité ATS + score | abonnement mensuel |

> Tarifs indicatifs en abonnement (ordre de grandeur ~15-30 $/mois) — à vérifier sur le site de chaque éditeur.

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

## Anti-patterns
- ❌ Rejet automatique de candidatures sans revue humaine (interdit pour un système haut risque + RGPD art. 22).
- ❌ Critères de scoring sans lien direct avec le poste (L1221-6) ou potentiellement discriminants (L1132-1).
- ❌ Ne pas informer le candidat de l'usage d'un outil automatisé (L1221-8, transparence AI Act).
- ❌ Ne jamais auditer les CV rejetés → biais ATS invisibles qui s'accumulent.
- ❌ Présenter les poids de critères comme un standard de marché chiffré et figé.

## Sources
- Règlement UE 2024/1689 (AI Act) — art. 6 §2 + Annexe III pt 4 (emploi, haut risque) — artificialintelligenceact.eu
- RGPD UE 2016/679 — art. 22 (décision automatisée) — cnil.fr
- Code du travail — L1132-1 (non-discrimination), L1221-6 (lien direct/bonne foi), L1221-8 (information préalable) — legifrance.gouv.fr
- CNIL — Guide du recrutement (information candidats, AIPD) — cnil.fr/fr/le-guide-du-recrutement

## Voir aussi
- `skills/rh_ia/detection-fraude-cv-profils.md` — détection keyword stuffing / CV générés par IA
- `skills/rh_ia/recrutement-sourcing-it.md` — qualification humaine post-scoring
- `skills/rh_ia/transformation-rh-ia.md` — cadre éthique et conformité ATS IA
- `skills/juridique_ia/` — conformité AI Act / RGPD / non-discrimination
