# WF-007 — Onboarding Mission Client J1-J5

> Mission signée → contexte client → plan de démarrage → livrables J1 → cadrage J5
> Certifications mobilisées : PMP · CBAP · PROSCI · Anthropic Claude Code in Action

---

## Carte d'identité

```yaml
id: "WF-007"
nom: "Onboarding Mission Client J1-J5"
domaine: "Management & Conseil"
declencheur: "Démarrage d'une nouvelle mission chez un client (J1 = premier jour)"
resultat_final: "Plan de démarrage validé + kit J1 remis + cadrage J5 complété + relations clés établies"
duree_estimee: "45-75 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Workflow structuré et opérationnel : production de livrables documentaires (plan, kit J1, fiche client). Sonnet 4.6 suffit pour la génération et la mise en forme de ces contenus standards."
modele_alternatif: "claude-opus-4-7"  # si la mission est particulièrement complexe (transformation, contexte politique tendu)
agents_core:
  - CHEF-PROJET-IA      # plan de démarrage, planning J1-J5, gestion des parties prenantes
  - BUSINESS-ANALYST    # cartographie du SI et des processus client, analyse de l'existant
  - CHANGE-MANAGER      # stratégie d'intégration, relations équipes, gestion des attentes
  - REDACTEUR-IA        # kit de démarrage, fiche client, compte rendu J1
agents_optionnels:
  - CONSULTANT-IA       # si volet diagnostic maturité IA dès J1
  - JURIDIQUE-IA        # si NDA, clauses contractuelles à réviser dès le démarrage
statut: "disponible"
version: "1.0"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | CHEF-PROJET-IA | Plan de démarrage J1-J5, parties prenantes | Plan de démarrage + RACI provisoire |
| 2 | BUSINESS-ANALYST | Cartographie contexte client et SI existant | Fiche contexte client + schéma SI |
| 3 | CHANGE-MANAGER | Stratégie d'intégration et premières relations | Plan d'engagement parties prenantes |
| 4 | REDACTEUR-IA | Kit J1 + compte rendu J1 + livrables écrits | Kit de démarrage + CR J1 |
| opt | CONSULTANT-IA | Diagnostic maturité IA express (si applicable) | Grille maturité IA client |
| opt | JURIDIQUE-IA | Révision NDA et clauses contractuelles | Note juridique démarrage |

---

## Paramètres contextuels

```
CONTEXTE MISSION (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Client              : [Nom / Secteur / Taille]
Type de mission     : [Cadrage / Build / TMA / Conseil / Formation / Audit]
Durée mission       : [Courte < 3 mois / Moyenne 3-12 mois / Longue > 12 mois]
Interlocuteurs J1   : [Sponsors / Manager direct / Équipe / DRH]
Lieu de mission     : [Sur site / Distanciel / Hybride]
Accès J1            : [Badge, PC, VPN, outils, comptes — à valider]
Enjeux identifiés   : [Business / Technique / Organisationnel / Politique]
Sensibilités        : [Contexte social, restructuration, post-incident, etc.]
Livrables attendus  : [Plan démarrage / Kit J1 / Fiche client / CR J1]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Mission signée / J1 imminent)
        │
        ▼
[STEP-01 — CHEF-PROJET-IA]
  Plan de démarrage J1-J5,
  cartographie parties prenantes,
  RACI provisoire,
  checklist logistique J1
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-02 — BUSINESS-ANALYST]
  │    Analyse du contexte client :
  │    cartographie SI, processus,
  │    enjeux métier, organisation
  │
  └── [STEP-03 — CHANGE-MANAGER]
       Stratégie d'intégration :
       identification des alliés,
       gestion des attentes,
       plan d'engagement J1-J30
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — Diagnostic maturité IA requis dès J1 ?>
  ├── OUI ──▶ [STEP-04 — CONSULTANT-IA]
  │            Grille maturité IA express
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-05 — REDACTEUR-IA]
  Kit de démarrage complet,
  compte rendu J1,
  fiche client synthétique,
  email de confirmation J1
        │
        ▼
(FIN — Kit J1 remis / mission lancée)
```

---

## Étapes détaillées

### STEP-01 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Plan de démarrage et préparation logistique"
  input:
    - "Contrat / bon de commande signé"
    - "Brief mission (périmètre, durée, livrables)"
    - "Interlocuteurs connus (noms, rôles)"
  output_attendu:
    - "Plan de démarrage J1-J5 (activités par demi-journée)"
    - "Cartographie parties prenantes (RACI provisoire)"
    - "Checklist logistique J1 (accès, outils, réunions)"
    - "Questions à poser impérativement en J1"
    - "Risques de démarrage identifiés (politique, technique, RH)"
  duree_estimee: "15 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Analyse du contexte client et cartographie de l'existant"
  input:
    - "Documentation disponible (cahier des charges, org chart, schémas SI)"
    - "Informations publiques sur le client (site, LinkedIn, presse)"
    - "Brief mission (STEP-01)"
  output_attendu:
    - "Fiche contexte client (secteur, enjeux, culture, concurrents)"
    - "Schéma organisationnel (métier + IT)"
    - "Cartographie SI simplifiée (systèmes en place)"
    - "Glossaire métier client (termes et acronymes clés)"
    - "Zones d'ombre à clarifier en J1"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-03"
```

### STEP-03 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Stratégie d'intégration et plan d'engagement"
  input:
    - "Parties prenantes identifiées (STEP-01)"
    - "Contexte mission et sensibilités (STEP-01)"
    - "Culture client estimée"
  output_attendu:
    - "Carte des alliés, neutres et résistants potentiels"
    - "Plan d'engagement J1-J30 (qui voir, quand, pourquoi)"
    - "Posture recommandée en J1 (observateur / acteur / expert)"
    - "Points de vigilance interpersonnels"
    - "Quick wins relationnels identifiés"
  duree_estimee: "10 min"
  execution: "parallèle avec STEP-02"
```

### STEP-04 — CONSULTANT-IA (optionnel)

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CONSULTANT-IA"
  role: "Diagnostic maturité IA express"
  input:
    - "Contexte client et SI (STEP-02)"
    - "Enjeux business identifiés"
  output_attendu:
    - "Grille maturité IA express (6 dimensions, notation rapide)"
    - "Top 3 opportunités IA immédiates"
    - "Questions à poser au client pour affiner dès J1"
  duree_estimee: "10 min"
  execution: "conditionnelle — si mission IA"
```

### STEP-05 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-REDACTEUR-IA"
  role: "Production du kit de démarrage J1"
  input:
    - "Tous les outputs STEP-01 à STEP-04"
    - "Charte documentaire client (si disponible)"
  output_attendu:
    - "Kit J1 : plan démarrage + fiche client + questions clés"
    - "Email de présentation J1 (à envoyer au manager J-1)"
    - "Template de compte rendu J1 (à compléter le soir)"
    - "Note de cadrage J5 (bilan premiers jours + ajustements)"
  duree_estimee: "15 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-007
──────────────────────────────────────────────────────
□ Plan de démarrage J1-J5 (activités par demi-journée)
□ Cartographie parties prenantes + RACI provisoire
□ Fiche contexte client (secteur, org, SI, glossaire)
□ Carte des alliés + plan d'engagement J1-J30
□ [optionnel] Grille maturité IA express + top 3 opportunités
□ Email de présentation J1
□ Checklist logistique J1 (accès, outils, réunions)
□ Template CR J1 (à compléter le soir du J1)
□ Note de cadrage J5
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-007 depuis workflows/WF-007-onboarding-mission-j1.md.

Contexte mission :
- Client : [à renseigner]
- Type de mission : [à renseigner]
- Durée : [à renseigner]
- Interlocuteurs J1 : [à renseigner]
- Sensibilités particulières : [à renseigner]

Lance STEP-01 avec AGENT-CHEF-PROJET-IA.
```
