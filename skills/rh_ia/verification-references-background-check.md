# Skill — Vérification de Références & Background Check
> Certifications : PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objectif
Structurer et exécuter la vérification des références professionnelles et les background checks dans le cadre légal français, pour confirmer l'authenticité du parcours candidat avant l'embauche ou le démarrage d'une mission.

## Cadre légal France — Background Check

```
CE QUI EST LÉGAL (avec accord candidat)
──────────────────────────────────────────────────────
✓ Vérification des diplômes (auprès des établissements)
✓ Vérification de l'identité (pièce d'identité)
✓ Appels de références professionnelles (avec accord préalable)
✓ Casier judiciaire B3 (uniquement si poste l'exige légalement :
   éducation, sécurité, finance réglementée — article L133-6 CASF)
✓ Vérification d'existence d'entreprise (SIREN/SIRET public)
✓ Vérification habilitation / certification (ex : AWS, Anthropic)

CE QUI EST ILLÉGAL
──────────────────────────────────────────────────────
✗ Consultation des réseaux sociaux personnels sans accord
✗ Demande de casier B2 (réservé à la justice)
✗ Questions sur vie privée, état de santé, situation familiale
✗ Vérification de solvabilité sauf postes financiers spécifiques
✗ Références sans accord écrit préalable du candidat
✗ Vérification antécédents judiciaires non liés au poste

BASE RGPD & CODE DU TRAVAIL
──────────────────────────────────────────────────────
· Consentement explicite requis avant tout background check
· Données collectées = strictement nécessaires au poste (lien direct, L1221-6)
· Information préalable du candidat sur les méthodes de vérification (L1221-8) ;
  résultats confidentiels et non communiqués à des tiers non autorisés
· Pas de collecte par un dispositif non porté à sa connaissance (L1221-9)
· Durée de conservation : 2 ans max (candidature non retenue)
· Droit d'accès et de rectification du candidat garanti
```

## Script d'appel de référence — Structure 15 min

```
INTRODUCTION (2 min)
──────────────────────────────────────────────────────
"Bonjour [Prénom], je suis [Nom] de [Cabinet/Entreprise].
[Candidat X] nous a donné vos coordonnées comme référence pour
un poste de [intitulé]. Avez-vous 10-15 minutes pour répondre
à quelques questions ? Vos réponses resteront confidentielles."

QUESTIONS DE CONTEXTE (3 min)
──────────────────────────────────────────────────────
1. "Quelle était votre relation avec [candidat] ? Manager direct ?"
2. "Sur quelle période avez-vous travaillé ensemble ?"
3. "Quel était son rôle exact dans votre équipe ?"

QUESTIONS DE FOND (8 min)
──────────────────────────────────────────────────────
4. "Comment décririez-vous ses compétences techniques sur [stack] ?"
5. "Sur quels projets l'avez-vous vu performer ? Résultats concrets ?"
6. "Comment gérait-il/elle les situations de pression ou d'imprévus ?"
7. "Quelle est sa plus grande force ? Son principal axe de progression ?"
8. "Le/La réembaucheriez-vous si l'occasion se présentait ? Pourquoi ?"

QUESTION CLÔTURE (2 min)
──────────────────────────────────────────────────────
9. "Y a-t-il quelque chose d'important que je devrais savoir
    sur sa façon de travailler que nous n'avons pas abordé ?"
```

## Grille de notation référence

| Critère | Score (1-5) | Commentaire |
|---|---|---|
| Confirmation du poste et des dates | | |
| Niveau de compétence technique décrit | | |
| Qualité de la collaboration / travail d'équipe | | |
| Fiabilité et autonomie | | |
| Ferait-il/elle la même embauche ? | | |
| **Moyenne** | **/5** | |

```
INTERPRÉTATION
──────────────────────────────────────────────────────
≥ 4.0 / 5  → Référence très positive — renforce le Go
3.0 - 3.9  → Référence neutre — creuser avec une 2e référence
< 3.0      → Signal négatif — escalader au client avant décision
Refus de référence → signal d'alerte à documenter
```

## Vérification des diplômes

```
MÉTHODES DE VÉRIFICATION
──────────────────────────────────────────────────────
FRANCE
  · Grandes écoles / universités : contacter la scolarité directement
  · RNCP : recherche sur France Compétences (francecompetences.fr)
  · Certifications pro : vérification sur site émetteur
    (AWS : aws.amazon.com/verification, Google : skillshop, Anthropic...)
  · BAC + diplômes natifs : vérification AIFE (espace sécurisé)

INTERNATIONAL
  · Diplômes étrangers : ENIC-NARIC France (reconnaissance)
  · Vérification via prestataires : Veriff, Kroll, HireRight

CERTIFICATIONS IT/IA (vérification directe)
  · AWS Certified : verify.aws.training
  · Google Cloud : partner.cloudskillsboost.google
  · Anthropic (Claude) : certificat PDF vérifiable
  · PMI (PMP, CAPM) : ccrs.pmi.org
  · Scrum (PSM, PSPO) : scrum.org/user/verify
  · SAFe : scaledagile.com/verify-certificate
```

## Background Check — Prestataires

| Prestataire | Périmètre | Prix indicatif | Délai |
|---|---|---|---|
| **Veriff** | Identité + liveness check | au check (faible coût unitaire) | Immédiat |
| **Persona** | Identité + documents | au check (faible coût unitaire) | Immédiat |
| **Kroll** | Full background (diplômes, références, casier) | au dossier (sur devis) | 5-10j |
| **HireRight** | International background check | au dossier (sur devis) | 3-7j |
| **Preventeo** | France : casier B3, diplômes, références | au dossier (sur devis) | 3-5j |
| **Certn** | Europe + international | au dossier (sur devis) | 2-5j |

> Tarifs et délais indicatifs (ordres de grandeur), à confirmer auprès de chaque prestataire au moment du cadrage.

## Checklist background check — Par niveau de poste

```
POSTE STANDARD (développeur, analyste, PO)
──────────────────────────────────────────────────────
□ Vérification identité (pièce d'identité)
□ 2 références professionnelles (managers directs)
□ Vérification diplôme principal
□ Cohérence CV ↔ LinkedIn ↔ déclarations entretien

POSTE SENSIBLE (accès données clients, finance, RH)
──────────────────────────────────────────────────────
□ Tout niveau standard +
□ Vérification casier B3 (si légalement applicable)
□ Vérification identité niveau 2 (Veriff/Persona)
□ 3 références + appel employeur précédent
□ Vérification certifications critiques

POSTE DIRECTION / LEAD / CTO
──────────────────────────────────────────────────────
□ Tout niveau sensible +
□ Background check complet (Kroll / HireRight)
□ Vérification mandats sociaux (Infogreffe)
□ Vérification publications / prise de parole publique
□ Référence C-level si disponible
```

## Livrables
- Compte-rendu d'appel de référence (structuré, horodaté)
- Rapport de vérification diplômes et certifications
- Rapport background check complet (si applicable)
- Synthèse Go / Go conditionnel / No-Go avec justification documentée

## Format de sortie
Précise : nom du candidat, poste visé, niveau de poste (standard / sensible / direction), coordonnées des référents fournis, diplômes à vérifier, certifications déclarées, délai requis pour la décision.

## Anti-patterns
- ❌ Lancer un background check sans consentement explicite préalable du candidat.
- ❌ Appeler une référence non fournie/non autorisée par le candidat (ex. employeur actuel à son insu).
- ❌ Vérifier des éléments sans lien direct avec le poste (L1221-6) ou relevant de la vie privée.
- ❌ Demander un casier B2 (réservé à la justice) ou B3 hors cas légalement prévu (L133-6 CASF).
- ❌ Communiquer les résultats de vérification à des tiers non autorisés (confidentialité, L1221-8).

## Sources
- Code du travail — L1221-6 (lien direct/bonne foi), L1221-8 (information préalable, confidentialité), L1221-9 (dispositif porté à connaissance) — legifrance.gouv.fr
- Code de l'action sociale et des familles — L133-6 (casier B3, postes au contact de mineurs/publics vulnérables) — legifrance.gouv.fr
- CNIL — Guide du recrutement (proportionnalité, consentement, conservation) — cnil.fr/fr/le-guide-du-recrutement
- ENIC-NARIC France — reconnaissance des diplômes étrangers — enic-naric.fr · France Compétences (RNCP) — francecompetences.fr

## Voir aussi
- `skills/rh_ia/detection-fraude-cv-profils.md` — détection des incohérences en amont
- `skills/rh_ia/detection-deepfake-entretien.md` — vérification d'identité en entretien
- `skills/rh_ia/evaluation-profils-techniques.md` — évaluation des compétences
- `skills/juridique_ia/` — cadre légal RGPD / vie privée du candidat
