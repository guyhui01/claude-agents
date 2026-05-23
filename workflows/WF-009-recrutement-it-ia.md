# WF-009 — Recrutement IT/IA

> Besoin identifié → fiche de poste → sourcing → évaluation → sélection → offre
> Certifications mobilisées : SHRM-CP · CBAP · PHR · CIPD L5 · CAP IABAC · Anthropic

---

## Carte d'identité

```yaml
id: "WF-009"
nom: "Recrutement IT/IA"
domaine: "RH & Talent"
declencheur: "Besoin de recrutement IT/IA identifié (CDI, CDD, freelance, stage)"
resultat_final: "Candidat sélectionné + offre émise + dossier recrutement complet"
duree_estimee: "60-90 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Workflow opérationnel RH : rédaction d'offres, grilles d'évaluation, scoring de CVs. Sonnet 4.6 assure une qualité suffisante pour ces livrables standards."
modele_alternatif: "claude-opus-4-7"  # si recrutement de profils très séniors (CDO, AI Architect, CISO) ou contexte politique tendu
agents_core:
  - RH-IA               # sourcing, évaluation profils, scoring ATS, anti-fraude
  - BUSINESS-ANALYST    # analyse besoin métier, profil fonctionnel, exigences MOA
  - CONSULTANT-IA       # validation profil technique IA, grille d'évaluation tech
  - REDACTEUR-IA        # rédaction offre d'emploi, brief cabinet, email candidats
agents_optionnels:
  - CHEF-PROJET-IA      # si recrutement d'un chef de projet ou intégration dans un programme
  - CHANGE-MANAGER      # si recrutement avec enjeux d'équipe ou de transformation
  - FINANCIAL-ANALYST   # si calcul TCO embauche vs prestation vs freelance
statut: "disponible"
version: "1.0"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | BUSINESS-ANALYST | Analyse du besoin métier et profil fonctionnel | Fiche de besoin + critères must/nice |
| 2 | CONSULTANT-IA | Grille d'évaluation technique IA + validation niveau | Grille technique + questions d'entretien |
| 3 | RH-IA | Sourcing, scoring CVs, anti-fraude, ATS | Shortlist candidats scorés |
| 4 | REDACTEUR-IA | Rédaction offre d'emploi + communications | Offre publiable + emails candidats |
| opt | FINANCIAL-ANALYST | TCO embauche vs freelance vs prestation | Business case recrutement |
| opt | CHANGE-MANAGER | Plan d'intégration candidat sélectionné | Onboarding plan J1-J30 |

---

## Paramètres contextuels

```
CONTEXTE RECRUTEMENT (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Poste recherché     : [Titre / Niveau (junior, senior, lead, director)]
Type de contrat     : [CDI / CDD / Freelance / Stage / Alternance]
Urgence             : [Immédiate / 1 mois / 3 mois]
Localisation        : [Ville / Remote / Hybride]
Compétences must    : [Technologies et compétences non-négociables]
Compétences nice    : [Compétences souhaitées mais non bloquantes]
Budget salaire / TJM: [Fourchette ou "à définir"]
Contexte équipe     : [Taille équipe, stack technique, culture]
Modalités évaluation: [Entretien tech / Test code / Cas pratique / Référence]
Anti-fraude requis  : [Vérification diplômes, LinkedIn, références — oui/non]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Besoin de recrutement IT/IA validé)
        │
        ▼
[STEP-01 — BUSINESS-ANALYST]
  Analyse du besoin métier,
  profil fonctionnel et exigences,
  critères Must / Should / Nice
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-02A — CONSULTANT-IA]
  │    Grille d'évaluation technique,
  │    questions entretien tech IA,
  │    niveau de séniorité calibré
  │
  └── [STEP-02B — FINANCIAL-ANALYST] (optionnel)
       TCO embauche vs freelance vs ESN,
       business case recrutement
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-03 — REDACTEUR-IA]
  Rédaction offre d'emploi publiable,
  brief cabinet de recrutement,
  message outreach LinkedIn
        │
        ▼
[STEP-04 — RH-IA]
  Sourcing actif (LinkedIn, GitHub, Malt),
  scoring des CVs reçus (grille ATS),
  détection fraude CV / faux profils,
  shortlist 3-5 candidats qualifiés
        │
        ▼
<GATEWAY — Shortlist validée ?>
  ├── NON ──▶ Retour STEP-03 (ajuster offre) ou STEP-04 (sourcing élargi)
  └── OUI ──▶ poursuite
        │
        ▼
[STEP-05 — RH-IA + CONSULTANT-IA]
  Conduite des entretiens de sélection :
  entretien RH (fit culture, motivations),
  entretien technique (grille STEP-02A),
  vérification références (background check)
        │
        ▼
<GATEWAY — Candidat(s) retenu(s) ?>
  ├── NON ──▶ Retour sourcing ou re-brief poste
  └── OUI ──▶ poursuite
        │
        ▼
[STEP-06 — RH-IA + REDACTEUR-IA]
  Émission offre au candidat retenu,
  négociation si nécessaire,
  dossier administratif recrutement
        │
        ▼
(FIN — Offre acceptée / dossier complet)
```

---

## Étapes détaillées

### STEP-01 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Analyse du besoin et profil fonctionnel"
  input:
    - "Demande de recrutement (manager, DRH)"
    - "Contexte projet / équipe / stack"
    - "Contraintes budget et délai"
  output_attendu:
    - "Fiche de besoin structurée (contexte, mission, livrables attendus)"
    - "Grille MoSCoW compétences (Must / Should / Could / Won't)"
    - "Profil de personnalité / culture fit recherché"
    - "Environnement de travail et conditions (remote, outils, rituels)"
  duree_estimee: "15 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02A — CONSULTANT-IA

```yaml
etape:
  id: "STEP-02A"
  agent: "AGENT-CONSULTANT-IA"
  role: "Grille technique IA et calibrage niveau"
  input:
    - "Fiche de besoin et compétences must/nice (STEP-01)"
    - "Stack technologique ciblée"
  output_attendu:
    - "Grille d'évaluation technique (6-10 critères, notation 1-5)"
    - "10-15 questions d'entretien tech calibrées (junior/senior/lead)"
    - "Exercice pratique / mini-cas technique (optionnel)"
    - "Benchmark de niveau sur le marché (référence 2026)"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-02B si activé"
```

### STEP-03 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-REDACTEUR-IA"
  role: "Production des supports de recrutement"
  input:
    - "Fiche de besoin (STEP-01)"
    - "Grille technique (STEP-02A)"
    - "Contexte client et culture d'entreprise"
  output_attendu:
    - "Offre d'emploi publiable (attractive, inclusive, complète)"
    - "Brief cabinet de recrutement (si externalisé)"
    - "Message outreach LinkedIn InMail (objet + corps)"
    - "Email de réponse candidature reçue (template)"
  duree_estimee: "10 min"
  execution: "séquentielle après JOIN STEP-02"
```

### STEP-04 — RH-IA

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-RH-IA"
  role: "Sourcing, scoring et détection fraude"
  input:
    - "Offre publiée + brief poste (STEP-01 + STEP-03)"
    - "CVs reçus et profils sourcés"
    - "Grille de scoring ATS"
  output_attendu:
    - "CVs scorés selon grille MoSCoW (Must validés / manquants)"
    - "Rapport détection fraude (CV gonflé, faux profil LinkedIn)"
    - "Shortlist 3-5 candidats avec justification"
    - "Tableau comparatif candidats (compétences × critères)"
  duree_estimee: "20 min"
  execution: "séquentielle après STEP-03"
```

### STEP-05 — RH-IA + CONSULTANT-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-RH-IA + AGENT-CONSULTANT-IA"
  role: "Évaluation des candidats shortlistés"
  input:
    - "Shortlist candidats (STEP-04)"
    - "Grille d'évaluation technique (STEP-02A)"
  output_attendu:
    - "Compte rendu entretien RH (fit culture, motivations, rémunération)"
    - "Grille technique remplie par candidat"
    - "Résultat vérification références (2-3 références minimum)"
    - "Recommandation finale : candidat retenu + arguments"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-04"
```

### STEP-06 — RH-IA + REDACTEUR-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-RH-IA + AGENT-REDACTEUR-IA"
  role: "Émission de l'offre et clôture du recrutement"
  input:
    - "Candidat retenu + conditions négociées"
    - "Dossier complet candidat"
  output_attendu:
    - "Lettre d'offre / promesse d'embauche"
    - "Email de retour aux candidats non retenus (bienveillant)"
    - "Dossier administratif complet (DPAE, contrat, accès IT)"
    - "Fiche onboarding J1 (handoff vers WF-007 si applicable)"
  duree_estimee: "10 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-009
──────────────────────────────────────────────────────
□ Fiche de besoin structurée (MoSCoW compétences)
□ Grille d'évaluation technique IA calibrée
□ [optionnel] Business case TCO embauche vs freelance
□ Offre d'emploi publiable + brief cabinet
□ Shortlist candidats scorés + rapport anti-fraude
□ Grilles entretien remplies par candidat
□ Rapport vérification références
□ Recommandation finale avec justification
□ Lettre d'offre / promesse d'embauche
□ Emails retour candidats non retenus
□ Fiche onboarding J1 (lien WF-007)
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-009 depuis workflows/WF-009-recrutement-it-ia.md.

Contexte recrutement :
- Poste recherché : [à renseigner]
- Type de contrat : [CDI / Freelance / Stage]
- Compétences must : [à renseigner]
- Budget : [à renseigner]
- Urgence : [à renseigner]

Lance STEP-01 avec AGENT-BUSINESS-ANALYST.
```
