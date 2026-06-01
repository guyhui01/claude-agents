# Skill — Détection Deepfake & Voix IA en Entretien
> Certifications : SHRM-CP (SHRM) · ATD CPTD (ATD) · CIPD Level 5 (CIPD)

## Objectif
Identifier les candidats utilisant une voix clonée par IA, un avatar deepfake vidéo ou un assistant IA en temps réel pendant les entretiens distanciels, afin de garantir l'authenticité de l'évaluation et protéger la décision de recrutement.

## Panorama des fraudes en entretien distanciel

```
FRAUDE TYPE 1 — VOICE CLONING (voix clonée)
──────────────────────────────────────────────────────
Principe  : Candidat utilise ElevenLabs, Resemble AI ou Descript
            pour synthétiser une voix différente en temps réel
Cas réel  : Schémas de fraude à l'emploi par faux travailleurs IT à distance,
            documentés par le DOJ américain et Mandiant (2023-2024) — voix/identité usurpées
Détection : Latence anormale · artefacts audio · voix trop uniforme
            Pas d'essoufflement, rire, hésitations naturelles

FRAUDE TYPE 2 — DEEPFAKE VIDÉO
──────────────────────────────────────────────────────
Principe  : Remplacement du visage en temps réel (DeepFaceLive,
            Avatarify) ou utilisation d'un avatar IA (HeyGen live)
Cas réel  : Entretiens LinkedIn/Google où le candidat affiché ≠ identité réelle
Détection : Bords du visage flous · clignements anormaux · arrière-plan
            parfait mais visage légèrement désynchronisé

FRAUDE TYPE 3 — AI COPILOT EN TEMPS RÉEL
──────────────────────────────────────────────────────
Principe  : Candidat lit les réponses générées par Claude/ChatGPT
            via un second écran ou oreillette (Interview Cram, Final Round AI)
Cas réel  : Micro-pauses avant chaque réponse · réponses trop structurées
Détection : Absence de réponse spontanée, latence homogène
            Pas de "je ne sais pas", toujours une réponse parfaite

FRAUDE TYPE 4 — SUBSTITUTION DE CANDIDAT
──────────────────────────────────────────────────────
Principe  : Une autre personne passe l'entretien à la place du candidat
Cas réel  : Observé sur des recrutements 100% distanciels, tous contextes
Détection : Vérification pièce d'identité en live · questions personnelles
            Incohérence entre voix entretien et voix appel de qualification
```

## Signaux d'alerte audio — Voix IA

```
ANOMALIES AUDIO TYPIQUES D'UNE VOIX SYNTHÉTIQUE
──────────────────────────────────────────────────────
· Latence systématique avant chaque réponse (ordre de grandeur, ~1-2s) — à apprécier en contexte
· Prosodie trop régulière : débit constant, pas d'accélération/ralentissement
· Absence de disfluences naturelles : "euh", "alors", "du coup"
· Pas de bruits ambiants cohérents avec le lieu annoncé
· Consonnes sifflantes ou artefacts métalliques sur les "s" et "f"
· Réponse qui repart de zéro à chaque question (pas de continuité narrative)
· Incapacité à être interrompu et reprendre naturellement
```

## Signaux d'alerte vidéo — Deepfake

```
ANOMALIES VISUELLES TYPIQUES D'UN DEEPFAKE
──────────────────────────────────────────────────────
· Bords du visage / oreilles flous ou légèrement pixelisés
· Clignements trop réguliers ou absents
· Mouvement de tête très limité (modèle fixe sur un angle)
· Lèvres légèrement désynchronisées avec l'audio
· Arrière-plan trop parfait (virtuel) mais éclairage facial incohérent
· Résolution visage ≠ résolution corps / vêtements
· Artefacts lors d'un mouvement rapide (tourner la tête)
```

## Protocoles de vérification live

```
PROTOCOLE 1 — TEST D'IMPROVISATION (tous entretiens distanciels)
──────────────────────────────────────────────────────
Demander à l'improviste :
  · "Montrez-moi votre espace de travail" (rotation caméra 360°)
  · "Épellez votre nom de famille lettre par lettre"
  · "Lisez le numéro qui s'affiche maintenant sur mon écran" (afficher un code)
  · Changer de langue soudainement (FR → EN ou inverse)
  · Question ultra-spécifique sur un projet du CV : "Quel était le nom
    exact de votre manager chez [entreprise] ?"

PROTOCOLE 2 — VÉRIFICATION IDENTITÉ EN LIVE
──────────────────────────────────────────────────────
  · Demander CNI / passeport visible à la caméra
  · Comparer le visage en live avec la photo ID
  · Comparer avec photo LinkedIn (si profil authentifié)
  · Pour postes sensibles : session Veriff ou Persona avant entretien

PROTOCOLE 3 — DÉTECTION AI COPILOT
──────────────────────────────────────────────────────
  · Poser une question très contextuelle sur l'actualité du jour
  · Demander une erreur passée : un vrai souvenir a des détails précis
  · Interrompre au milieu d'une phrase et demander de continuer
  · Question "sans bonne réponse" : observer la réaction face à l'ambiguïté
  · Demander de réexpliquer autrement ce qu'il vient de dire
```

## Outils de détection deepfake

| Outil | Type de détection | Intégration | Prix |
|---|---|---|---|
| **Reality Defender** | Vidéo + audio deepfake temps réel | API, Zoom plugin | Sur devis (entreprise) |
| **Pindrop** | Voice authentication + deepfake audio | API call center / ATS | Sur devis |
| **Resemble Detect** | Voix synthétique vs naturelle | API REST | à l'usage (par minute) |
| **Sensity AI** | Deepfake vidéo (images + vidéos) | API + dashboard | Sur devis |
| **Intel FakeCatcher** | Deepfake vidéo (analyse flux sanguin) | Intégration custom | Sur devis |
| **HireVue Guard** | Détection fraude en entretien vidéo | Dans HireVue ATS | Inclus HireVue |

> Tarifs majoritairement sur devis (B2B), à vérifier auprès de chaque éditeur. Aucun outil
> n'est fiable à 100 % : la détection automatique se combine **toujours** à une vérification humaine.

## Grille de scoring — Authenticité entretien

| Indicateur | Score (0-3) | Poids | Commentaire |
|---|---|---|---|
| Fluidité naturelle de la voix | | 25% | |
| Cohérence visuelle (synchro lèvres/voix) | | 20% | |
| Spontanéité des réponses | | 20% | |
| Réussite des tests d'improvisation | | 20% | |
| Cohérence identité (CV / LinkedIn / live) | | 15% | |
| **Score total** | | 100% | **/3** |

```
INTERPRÉTATION
──────────────────────────────────────────────────────
≥ 2.5 / 3  → Entretien authentique — continuer le process
1.5 - 2.4  → Suspicion modérée → entretien présentiel requis
< 1.5      → Fraude probable → signaler au client, arrêter le process
```

## Conduite à tenir en cas de fraude détectée

```
PROCÉDURE
──────────────────────────────────────────────────────
1. Ne pas accuser en direct — mettre fin à l'entretien poliment
   ("Nous avons un problème technique, nous revenons vers vous")
2. Documenter : captures d'écran, enregistrement audio (si accord RGPD)
3. Informer le client immédiatement avec le rapport d'analyse
4. Archiver en CVthèque avec tag "FRAUDE DÉTECTÉE" + date
5. Ne PAS recontacter le candidat — risque de plainte
6. Si préjudice avéré (poste pourvu puis découverte) → signalement RH légal
```

## Livrables
- Rapport d'authenticité entretien (score + observations détaillées)
- Recommandation : Authentique / Suspect (présentiel requis) / Fraude détectée
- Procédure de gestion incident pour le client
- Formation recruteurs : protocoles de détection (1h, présentiel ou distanciel)

## Format de sortie
Précise : plateforme d'entretien utilisée (Teams, Zoom, Google Meet, HireVue), poste concerné, niveau de criticité, observations déjà notées par le recruteur.

## ⚖️ Conformité & non-discrimination
- La détection porte sur des **signaux techniques et comportementaux** (latence, artefacts, synchro), **jamais** sur l'accent, l'origine présumée ou la consonance du nom (Code du travail **L1132-1**).
- Vérification biométrique / d'identité = traitement à risque : **information préalable du candidat** (RGPD ; Code du travail **L1221-8**), base légale, durée de conservation limitée.
- Un outil de détection peut produire des **faux positifs** : ne jamais fonder un rejet sur le seul score automatique → toujours une appréciation humaine (présentiel si doute).
- Outils de reconnaissance biométrique/deepfake : vigilance **AI Act (Règlement UE 2024/1689)** selon l'usage.

## Anti-patterns
- ❌ Accuser un candidat de fraude en direct (risque juridique) — mettre fin poliment et documenter.
- ❌ Associer la fraude à une nationalité ou un accent (discrimination, L1132-1).
- ❌ Enregistrer l'entretien sans information ni base légale RGPD.
- ❌ Se fier à 100 % à un outil de détection sans vérification humaine.
- ❌ Figer des seuils chiffrés (latence, prix) comme des vérités absolues.

## Sources
- NIST — travaux sur la détection de médias synthétiques / deepfakes (2023) — nist.gov
- US DOJ / Mandiant (Google Cloud) — alertes fraude à l'emploi par faux travailleurs IT (2023-2024)
- Règlement UE 2024/1689 (AI Act) — reconnaissance biométrique / contenus manipulés — artificialintelligenceact.eu
- Code du travail — L1132-1 (non-discrimination), L1221-8 (information préalable) — legifrance.gouv.fr
- RGPD UE 2016/679 — traitement de données biométriques (art. 9) — cnil.fr

## Voir aussi
- `skills/rh_ia/detection-fraude-cv-profils.md` — fraude en amont (CV, profils)
- `skills/rh_ia/verification-references-background-check.md` — vérification d'identité et de parcours
- `skills/rh_ia/evaluation-profils-techniques.md` — entretien structuré (réponses spontanées)
- `skills/juridique_ia/` — conformité RGPD biométrie / AI Act
