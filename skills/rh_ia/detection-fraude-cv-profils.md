# Skill — Détection Fraude CV & Faux Profils
> Certifications : PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objectif
Identifier les CV frauduleux, les profils professionnels sur-optimisés ou générés par IA, et les incohérences de parcours afin de protéger le processus de recrutement et le client des embauches à risque.

## Typologies de fraude CV

```
TYPE 1 — EMBELLISSEMENT CLASSIQUE
──────────────────────────────────────────────────────
· Titres de poste gonflés ("Lead" au lieu de "Dev junior")
· Dates de mission étirées pour masquer des gaps
· Entreprises réelles mais poste fictif ou exagéré
· Diplômes partiels présentés comme complétés

TYPE 2 — CV GÉNÉRÉ / RÉÉCRIT PAR IA
──────────────────────────────────────────────────────
· Style homogène et parfait sans aspérités humaines
· Bullets points calibrés sur mots-clés ATS (keyword stuffing)
· Absence de détails concrets (noms de projets, volumes, équipes)
· Métriques vagues : "amélioration de X%" sans contexte
· Détectable : GPTZero, Originality.ai, Copyleaks

TYPE 3 — FAUX PROFILS LINKEDIN
──────────────────────────────────────────────────────
· Photo de profil générée par IA (visage trop parfait, flou d'arrière-plan uniforme)
· Réseau < 50 relations avec 5 ans d'ancienneté
· Recommandations génériques sans détail opérationnel
· Connexions toutes récentes ou concentrées sur 1 période
· Aucune activité (likes, posts, commentaires) malgré ancienneté

TYPE 4 — FAUX PROFILS GITHUB / STACK OVERFLOW
──────────────────────────────────────────────────────
· Commits regroupés sur 2-3 semaines (activité simulée)
· Code commenté parfaitement en anglais par LLM
· Repos sans issues, sans forks, sans collaborateurs
· Contributions graph "trop régulier" ou vide puis soudain dense
· Pas de réponses à des issues complexes de la communauté
```

## Grille d'analyse CV — Signaux d'alerte

| Signal | Niveau de risque | Action |
|---|---|---|
| Gaps d'emploi > 6 mois non expliqués | Moyen | Demander en entretien |
| Titre poste ≠ niveau de responsabilités décrit | Élevé | Vérifier référence manager |
| Écoles inconnues ou non vérifiables (hors grandes écoles) | Élevé | Vérifier sur RNCP / site école |
| Missions trop courtes (< 3 mois) répétées | Moyen | Contexte freelance ? Vérifier |
| Mots-clés ATS à haute densité, peu de contexte | Élevé | Test technique obligatoire |
| Style ChatGPT (phrases calibrées, zéro fautes) | Moyen | Comparer avec lettre manuscrite |
| Métriques sans contexte ("30% d'amélioration") | Moyen | Demander le détail en entretien |
| Entreprises sans présence web vérifiable | Très élevé | Vérification SIREN / LinkedIn |

## Protocole de vérification CV — 3 niveaux

```
NIVEAU 1 — VÉRIFICATION RAPIDE (5 min, tous candidats)
──────────────────────────────────────────────────────
□ Cohérence dates (pas de recoupements, gaps expliqués)
□ Entreprises vérifiables (LinkedIn / Societe.com / SIREN)
□ Diplôme vérifiable sur site école ou RNCP
□ Scan IA : GPTZero ou Originality.ai (si suspicion style IA)

NIVEAU 2 — VÉRIFICATION APPROFONDIE (shortlist)
──────────────────────────────────────────────────────
□ Appel de référence manager direct (cf. skill verification-references)
□ Vérification LinkedIn : ancienneté profil, réseau, activité
□ GitHub / Portfolio : analyse commits, qualité code, date création
□ Croisement CV ↔ LinkedIn ↔ entretien (incohérences entre versions)

NIVEAU 3 — VÉRIFICATION FORMELLE (offre acceptée)
──────────────────────────────────────────────────────
□ Background check complet (cf. skill verification-references-background-check)
□ Vérification diplôme auprès de l'établissement
□ Vérification identité (Veriff ou Persona si enjeu fort)
```

## Outils de détection IA dans les documents

| Outil | Usage | Prix |
|---|---|---|
| **GPTZero** | Détection texte généré par LLM | Gratuit (limité) / abonnement |
| **Originality.ai** | CV + lettres de motivation | abonnement / à l'usage |
| **Copyleaks** | Plagiat + détection IA | abonnement |
| **Winston AI** | Détection IA multilingue (FR/EN) | abonnement |
| **HireEZ Signal** | Analyse profil LinkedIn + GitHub | Sur devis |

> ⚠️ **Fiabilité limitée** : les détecteurs de texte IA produisent des **faux positifs élevés**
> (un CV soigné ou rédigé par un non-natif peut être faussement signalé). **Ne jamais rejeter un
> candidat sur le seul score d'un détecteur** — c'est un signal à corroborer, pas une preuve.
> Tarifs indicatifs en abonnement, à vérifier auprès de chaque éditeur.

## Analyse profil LinkedIn — Checklist

```
PROFIL AUTHENTIQUE — signaux positifs
──────────────────────────────────────────────────────
✓ Photo réelle (arrière-plan naturel, expression spontanée)
✓ Recommandations nominatives avec détails opérationnels
✓ Activité régulière (posts, commentaires, partages)
✓ Réseau cohérent avec le secteur et l'ancienneté
✓ Cohérence CV ↔ LinkedIn sur titres, dates, entreprises
✓ Interactions avec anciens collègues sur le profil

PROFIL SUSPECT — signaux d'alerte
──────────────────────────────────────────────────────
⚠ Photo trop parfaite (tester : facecheck.id ou Google Image)
⚠ Profil créé < 6 mois avec 10+ ans d'expérience revendiquée
⚠ Toutes les recommandations le même mois (campagne?)
⚠ Descriptions de postes copiées-collées d'offres d'emploi
⚠ Aucune réaction / commentaire sur 2 ans d'activité déclarée
```

## Livrables
- Rapport d'analyse CV avec scoring de fiabilité (Faible / Moyen / Élevé)
- Fiche de signaux d'alerte par candidat pour le client
- Recommandation : Go / Go conditionnel (vérification complémentaire) / No-Go fraude
- Checklist de vérification complétée (niveau 1-2-3 selon enjeu)

## Format de sortie
Précise : CV du candidat (texte ou PDF), profil LinkedIn associé, poste visé, niveau de criticité du poste (accès données sensibles ? management ? etc.).

## ⚖️ Conformité
- **Présomption de bonne foi** du candidat (Code du travail **L1221-6**) : un signal d'alerte appelle une vérification, pas une accusation.
- Consultation des **réseaux sociaux professionnels** liée au poste = admise ; réseaux **personnels** sans lien et sans information = exclue (CNIL, RGPD).
- Tout contrôle doit être **proportionné** au poste et **porté à la connaissance** du candidat (L1221-8/9).
- Aucune fraude « déduite » d'un accent, d'un nom ou d'une origine (**L1132-1**).

## Anti-patterns
- ❌ Rejeter un candidat sur le seul score d'un détecteur d'IA (faux positifs élevés).
- ❌ Traiter un signal d'alerte comme une preuve de fraude sans vérification contradictoire.
- ❌ Fouiller la vie privée / réseaux personnels sans lien avec le poste ni information.
- ❌ Associer la suspicion de fraude à une origine ou une consonance de nom (L1132-1).
- ❌ Ne pas documenter les signaux et la décision → process non auditable.

## Sources
- Code du travail — L1221-6 (bonne foi), L1221-8/9 (information préalable), L1132-1 (non-discrimination) — legifrance.gouv.fr
- CNIL — Guide du recrutement (réseaux sociaux, proportionnalité) — cnil.fr/fr/le-guide-du-recrutement
- Limites des détecteurs de texte IA — littérature sur les faux positifs (OpenAI a retiré son propre détecteur en 2023)
- RNCP / France Compétences — vérification des certifications — francecompetences.fr

## Voir aussi
- `skills/rh_ia/verification-references-background-check.md` — vérification formelle du parcours
- `skills/rh_ia/detection-deepfake-entretien.md` — fraude en entretien distanciel
- `skills/rh_ia/cv-parsing-ats-scoring.md` — keyword stuffing et scoring ATS
- `skills/juridique_ia/` — cadre RGPD et non-discrimination
