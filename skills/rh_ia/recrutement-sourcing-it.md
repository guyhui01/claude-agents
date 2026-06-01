# Skill — Recrutement & Sourcing Profils IT/IA
> Certifications : SHRM-CP (SHRM) · PHR (HRCI) · LinkedIn Talent Solutions Certified Recruiter

## Objectif
Identifier, sourcer et qualifier des profils IT/IA (développeurs, data scientists, architectes, PO, consultants IA) pour des clients PME, fintech, scaleup, startup et CAC40. Produire un shortlist qualifié avec scoring et brief de présentation.

## Stratégie de sourcing multi-canal

```
CANAL 1 — LinkedIn Recruiter
──────────────────────────────────────────────────────
Boolean search : "Python" AND "LLM" AND ("RAG" OR "LangChain") NOT "junior"
Filtres recommandés : localisation, disponibilité, taille entreprise actuelle
InMail : un message personnalisé obtient un bien meilleur taux de réponse
         qu'un générique — personnaliser TOUJOURS l'accroche (mesurer son propre taux)

CANAL 2 — GitHub / Stack Overflow
──────────────────────────────────────────────────────
Recherche de contributeurs actifs sur des repos IA pertinents
Profils avec portfolio public = signal fort de compétence réelle

CANAL 3 — Communautés & réseaux spécialisés
──────────────────────────────────────────────────────
Slack : MLOps Community, Hugging Face, LangChain
Discord : EleutherAI, OpenAI developers
Meetups : Paris AI, Data for Good, BDX I/O, Devoxx France

CANAL 4 — Jobboards IT/IA
──────────────────────────────────────────────────────
Welcome to the Jungle, Talent.io, Malt (freelance), Comet (freelance IT)
Remotive, WeWorkRemotely (remote IT)

CANAL 5 — Cooptation & réseau
──────────────────────────────────────────────────────
Demander systématiquement des recommandations aux candidats qualifiés
Offrir une prime de cooptation si applicable côté client
```

## Boolean Search — Templates par profil

```
DÉVELOPPEUR IA / LLM
("prompt engineer" OR "LLM" OR "RAG" OR "LangChain") AND ("Python" OR "TypeScript") AND ("Anthropic" OR "OpenAI" OR "Mistral")

DATA SCIENTIST / ML ENGINEER
("machine learning" OR "deep learning" OR "MLOps") AND ("Python" OR "PyTorch" OR "TensorFlow") AND ("production" OR "deployed")

AI ARCHITECT
("AI architecture" OR "solution architect") AND ("LLM" OR "GenAI") AND ("AWS" OR "GCP" OR "Azure")

PRODUCT OWNER IA
("Product Owner" OR "PO") AND ("IA" OR "AI" OR "LLM" OR "GenAI") AND ("SAFe" OR "Scrum" OR "Agile")

CONSULTANT IA
("consultant" OR "senior advisor") AND ("transformation IA" OR "GenAI" OR "LLM") AND ("CAC40" OR "grands comptes" OR "ESN")
```

## Grille de qualification — Premier contact (5 min)

```
QUALIFICATION RAPIDE — Appel ou message LinkedIn
──────────────────────────────────────────────────────
1. Disponibilité : quelle est votre date de dispo ? (freelance : TJM cible ?)
2. Mobilité : remote / hybride / sur site — quelle préférence ?
3. Tech stack principale : sur quoi travaillez-vous actuellement ?
4. Type de mission recherché : produit / conseil / ESN / startup ?
5. Motivation : qu'est-ce qui vous attirerait dans cette opportunité ?

→ Si 3/5 critères matchent → passer à la qualification approfondie
→ Sinon → garder en CVthèque avec tag et date de relance
```

## Scoring candidat — Grille 0-10

| Critère | Poids | Score (0-10) | Commentaire |
|---|---|---|---|
| Adéquation technique (stack, niveau) | 35% | | |
| Expérience secteur client | 20% | | |
| Disponibilité & localisation | 15% | | |
| Soft skills (communication, autonomie) | 15% | | |
| Motivation pour le poste/mission | 15% | | |
| **Score pondéré** | 100% | **/10** | |

Seuil retenu : **≥ 7/10** pour présentation client.

## Livrables
- Longlist sourcée (10-15 profils) avec scoring
- Shortlist qualifiée (3-5 profils) avec fiche de présentation candidat
- Brief synthétique par candidat : stack · expérience · dispo · prétentions · motivation
- Rapport de sourcing : canaux utilisés, taux de réponse, délai

## Format de sortie
Précise : intitulé du poste/mission, stack technique requise, localisation, budget (salaire ou TJM), date de démarrage, secteur client.

## ⚖️ Conformité sourcing
- Données collectées (LinkedIn, GitHub, CVthèque) = données personnelles : **finalité, minimisation, durée de conservation** (RGPD ; CNIL Guide du recrutement). Candidature non retenue conservée 2 ans max sauf accord.
- Critères de sélection limités à ce qui a un **lien direct et nécessaire** avec le poste (Code du travail **L1221-6**) ; aucun critère discriminant (**L1132-1**).
- Informer le candidat de la source de ses données et de ses droits (accès, opposition).

## Anti-patterns
- ❌ Sourcer sur des critères proxy discriminants (photo, nom, âge déduit du diplôme) — L1132-1.
- ❌ Conserver indéfiniment les profils en CVthèque sans base légale ni durée définie (RGPD).
- ❌ Boolean search trop restrictif (« 5 ans sur une techno de 3 ans ») → exclut de bons profils.
- ❌ InMail générique non personnalisé → taux de réponse faible, image employeur dégradée.
- ❌ Annoncer un chiffre de « taux de réponse marché » non mesuré sur sa propre activité.

## Sources
- CNIL — Guide du recrutement (collecte et conservation des données candidats) — cnil.fr/fr/le-guide-du-recrutement
- Code du travail — L1221-6 (lien direct/bonne foi), L1132-1 (non-discrimination) — legifrance.gouv.fr
- RGPD UE 2016/679 — art. 5 (minimisation) — cnil.fr
- LinkedIn Talent Solutions — bonnes pratiques de sourcing — business.linkedin.com

## Voir aussi
- `skills/rh_ia/evaluation-profils-techniques.md` — qualification approfondie post-sourcing
- `skills/rh_ia/redaction-offre-emploi.md` — offre/brief à diffuser
- `skills/rh_ia/benchmark-remuneration-it.md` — fourchettes pour la qualification TJM/salaire
- `skills/rh_ia/cv-parsing-ats-scoring.md` — scoring ATS en amont
