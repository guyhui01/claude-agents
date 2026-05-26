# WF-001 — Use Case UC-01 — Digitalisation sinistres Assurance IA

> Workflow : `WF-001-cadrage-produit-ia.md`
> Secteur : Assurance · Client fictif : Prévalis Assurances
> Durée d'exécution simulée : 75 min · Agents activés : BA · UX · PO · QA · JURIDIQUE-IA

---

## Brief client (input du workflow)

```
CLIENT       : Prévalis Assurances — mutuelle régionale, 280 000 assurés
SECTEUR      : Assurance IARD (Auto, Habitation, Santé)
PRODUIT      : Assistant IA de déclaration de sinistre en ligne
DÉCLENCHEUR  : Taux d'abandon déclaration web : 67% — Délai moyen traitement : 8 jours
OBJECTIF     : Réduire le délai à < 48h et l'abandon à < 20% via un parcours guidé par IA
CONTRAINTES  : RGPD · AI Act (Article 6 — système IA à risque limité) · Intégration SI legacy
               Budget Sprint 0 : 15 j/h · Livraison MVP : 12 semaines
ÉQUIPE       : 1 squad Scrum (5 dev · 1 PO · 1 SM) · méthodo Scrum
LANGUE       : Français
NIVEAU       : Cadrage complet — backlog multi-sprints
```

---

## STEP-01 — BUSINESS-ANALYST · Analyse métier

### Carte des besoins (job-to-be-done)

| Persona | Job principal | Frustration actuelle | Gain attendu |
|---------|--------------|----------------------|--------------|
| Assuré sinistré (Marie, 42 ans) | Déclarer rapidement son sinistre auto depuis son mobile | Formulaire de 47 champs, aucune aide contextuelle, abandon à mi-parcours | Guidage intelligent, < 10 min, confirmation immédiate |
| Gestionnaire sinistres (Karim) | Traiter les dossiers sans relance client | 40% des dossiers incomplets à réception — relances manuelles chronophages | Dossier complet dès la déclaration, IA pré-qualifiée |
| Responsable conformité (Isabelle) | Garantir la traçabilité RGPD et AI Act | Aucun registre automatique des décisions IA | Log automatique des suggestions IA + consentement explicite |

### Périmètre fonctionnel

| In scope | Out of scope |
|----------|-------------|
| Déclaration sinistre Auto et Habitation | Sinistres Santé (phase 2) |
| Guidage IA par type de sinistre | Évaluation automatique du montant d'indemnisation |
| Upload photos / documents | Intégration téléphonie (CTI) |
| Notification statut dossier | Back-office gestionnaire (phase 2) |
| Consentement RGPD inline | Portail courtier |

### Processus AS-IS (BPMN simplifié)

```
[Assuré] → Accès formulaire web → Remplissage 47 champs (sans aide) →
Soumission → Vérification manuelle J+1 → Dossier incomplet ? → Relance email →
[Gestionnaire] → Traitement → Décision → Courrier J+8
```

### Questions ouvertes

- Q1 : L'IA peut-elle suggérer un montant d'indemnisation indicatif ? → Impact AI Act Article 6
- Q2 : Quel niveau d'autonomie de l'IA ? Suggestion vs décision
- Q3 : Intégration SI legacy (AS/400) : API REST disponible ou flux batch ?

---

## STEP-02 — UX-DESIGNER · Parcours utilisateur

### Persona principal — Marie Fontaine

```
Prénom      : Marie Fontaine
Âge         : 42 ans
Situation   : Employée de commerce, permis B depuis 20 ans, peu à l'aise avec le numérique
Device      : Mobile 80% du temps (iPhone SE)
Contexte    : Accrochage parking — stressée, veut que ça se règle vite
Citation    : "Je ne sais jamais quoi mettre dans ces formulaires, j'ai peur de mal remplir
               et que l'assurance refuse. En général j'abandonne et j'appelle."
JTBD        :
  1. Déclarer en < 10 min depuis le lieu du sinistre
  2. Savoir immédiatement si son dossier est recevable
  3. Ne pas avoir à rappeler pour savoir où en est son dossier
```

### User Journey Map — Déclaration sinistre IA

```
Étape          : 1. Accès        2. Identification  3. Guidage IA   4. Upload      5. Confirmation
─────────────────────────────────────────────────────────────────────────────────────────────────
Action Marie   : Ouvre l'app     Connexion espace   Répond aux      Photo du       Reçoit n° dossier
                                 assuré             questions IA    véhicule       + délai estimé
─────────────────────────────────────────────────────────────────────────────────────────────────
Émotion        : 😟 Stressée     😐 Neutre           🙂 Guidée        😌 Soulagée     😊 Rassurée
─────────────────────────────────────────────────────────────────────────────────────────────────
Points friction: Trouver le lien Mot de passe ?     Questions trop  Format photo   Pas de récap
                 de déclaration                     techniques      refusé         PDF immédiat
─────────────────────────────────────────────────────────────────────────────────────────────────
Opportunité IA : Deep link push  SSO ou magic link  NLP questions   Compression    PDF auto-généré
                 notification                       adaptatives     auto mobile    + email
```

### Wireframes clés (lo-fi)

**Écran 1 — Choix type de sinistre**
```
┌──────────────────────────────┐
│  🛡️ Prévalis — Mon sinistre  │
├──────────────────────────────┤
│  Bonjour Marie,              │
│  Quel type de sinistre ?     │
│                              │
│  ┌──────────┐  ┌──────────┐  │
│  │ 🚗 Auto  │  │ 🏠 Habita│  │
│  └──────────┘  └──────────┘  │
│                              │
│  ┌──────────────────────────┐│
│  │ 📞 Urgence — Appeler     ││
│  └──────────────────────────┘│
└──────────────────────────────┘
```

**Écran 2 — Guidage IA (question adaptative)**
```
┌──────────────────────────────┐
│  🚗 Sinistre Auto — Étape 2/5│
│  ────────────────            │
│                              │
│  L'accident implique-t-il    │
│  un autre véhicule ?         │
│                              │
│  ┌──────────┐  ┌──────────┐  │
│  │  ✅ Oui  │  │  ❌ Non  │  │
│  └──────────┘  └──────────┘  │
│                              │
│  ℹ️ Si oui, vous aurez       │
│  besoin du constat amiable   │
└──────────────────────────────┘
```

---

## STEP-03 — PO-SCRUM · Backlog initial

### Épics

| ID | Libellé | MoSCoW |
|----|---------|--------|
| EP-01 | Parcours déclaration guidée IA | Must |
| EP-02 | Gestion documentaire sinistre | Must |
| EP-03 | Suivi et notification | Should |
| EP-04 | Conformité RGPD + AI Act | Must |

### User Stories — Backlog initial priorisé

| ID | User Story | Épic | MoSCoW | SP |
|----|-----------|------|--------|----|
| US-01 | En tant qu'assuré, je veux choisir le type de sinistre (Auto/Habitation) afin d'accéder au parcours adapté | EP-01 | Must | 3 |
| US-02 | En tant qu'assuré, je veux répondre à des questions guidées par l'IA afin de remplir ma déclaration sans erreur | EP-01 | Must | 8 |
| US-03 | En tant qu'assuré, je veux uploader des photos depuis mon mobile afin de documenter les dégâts sans démarche complémentaire | EP-02 | Must | 5 |
| US-04 | En tant qu'assuré, je veux recevoir un numéro de dossier et un délai estimé dès la soumission afin de savoir où j'en suis | EP-03 | Must | 3 |
| US-05 | En tant qu'assuré, je veux recevoir un email de confirmation avec récapitulatif PDF afin d'avoir une preuve de ma déclaration | EP-03 | Should | 5 |
| US-06 | En tant qu'assuré, je veux donner mon consentement explicite à l'utilisation de l'IA afin d'être informé de mes droits | EP-04 | Must | 3 |
| US-07 | En tant que gestionnaire, je veux recevoir un dossier pré-qualifié par l'IA afin de traiter sans relance client | EP-01 | Must | 8 |
| US-08 | En tant que DPO, je veux un log automatique de chaque suggestion IA afin de répondre aux exigences AI Act | EP-04 | Must | 5 |
| US-09 | En tant qu'assuré, je veux suivre le statut de mon dossier en temps réel afin d'éviter d'appeler le service client | EP-03 | Could | 5 |
| US-10 | En tant qu'assuré, je veux déclarer en < 10 min sur mobile afin de ne pas perdre de temps sur le lieu du sinistre | EP-01 | Must | 13 |

**Vélocité estimée** : ~40 SP sprint 1 · MVP en 3 sprints (12 semaines)

---

## STEP-04 — QA-AGILE · Critères d'acceptation Gherkin

### US-02 — Guidage IA déclaration

```gherkin
Feature: Guidage IA déclaration sinistre auto
  En tant qu'assuré mobile,
  Je veux être guidé par des questions adaptatives
  Afin de compléter ma déclaration sans erreur en moins de 10 minutes.

  Background:
    Given Marie est connectée à son espace assuré
    And elle a sélectionné "Sinistre Auto"

  Scenario: Parcours nominal — sinistre sans tiers
    When elle répond "Non" à "Implique-t-il un autre véhicule ?"
    Then le formulaire n'affiche pas les champs "Coordonnées du tiers"
    And l'étape suivante demande "Avez-vous des témoins ?"
    And la barre de progression indique "Étape 2/4"

  Scenario: Parcours avec tiers — constat amiable requis
    When elle répond "Oui" à "Implique-t-il un autre véhicule ?"
    Then l'IA affiche le message "Vous aurez besoin du constat amiable"
    And un champ upload "Constat amiable (PDF ou photo)" est activé
    And l'étape compte 5 étapes au lieu de 4

  Scenario: Abandon et reprise
    When Marie ferme l'application après l'étape 2
    And elle revient sur la déclaration dans les 24h
    Then elle voit le message "Reprendre votre déclaration en cours"
    And ses réponses aux étapes 1 et 2 sont conservées
```

### US-06 — Consentement RGPD + AI Act

```gherkin
Feature: Consentement utilisation IA
  En tant qu'assuré,
  Je veux donner un consentement explicite et éclairé
  Afin de comprendre comment l'IA traite mes données.

  Scenario: Affichage du consentement avant guidage IA
    Given Marie accède au parcours de déclaration guidé
    When le module IA est sur le point d'être activé
    Then un écran de consentement s'affiche AVANT toute suggestion IA
    And il mentionne : "L'IA suggère des champs à compléter — elle ne prend pas de décision"
    And deux boutons sont proposés : "Accepter" et "Déclarer sans IA"

  Scenario: Refus du consentement — formulaire standard accessible
    When Marie clique sur "Déclarer sans IA"
    Then elle accède au formulaire standard (sans guidage IA)
    And aucune donnée n'est transmise au moteur IA
    And un log "consentement_refusé" est enregistré (sans donnée personnelle)
```

### US-08 — Log AI Act

```gherkin
Feature: Traçabilité AI Act — log suggestions IA
  En tant que DPO Prévalis,
  Je veux un registre automatique de chaque interaction IA
  Afin de répondre aux obligations de l'Article 13 AI Act.

  Scenario: Log créé à chaque suggestion IA
    Given Marie utilise le guidage IA avec consentement accordé
    When l'IA génère une suggestion (ex: "champ tiers requis")
    Then un log est créé avec : timestamp · hash anonymisé assuré · type_suggestion · modèle_IA · version
    And ce log est accessible au DPO depuis le back-office conformité
    And il est conservé 5 ans (obligation légale)

  Scenario: Absence de log si consentement refusé
    Given Marie a refusé le consentement IA
    When elle soumet sa déclaration via formulaire standard
    Then aucun log IA n'est créé pour cette déclaration
```

---

## STEP optionnel — JURIDIQUE-IA · Analyse AI Act

> Activé car US-08 implique une classification AI Act.

**Classification du système** : Risque limité (Article 6 — pas de décision automatisée sur droits individuels)
**Obligations** : Transparence obligatoire (consentement + information) · Pas de conformité renforcée requise
**Recommandation** : Documenter dans le registre des traitements RGPD (Article 30) + mention dans les CGU

---

## Livrables finaux WF-001 — Checklist

```
✅ Carte des besoins métier (3 personas · AS-IS · périmètre in/out)
✅ User journey map Marie — 5 étapes · courbe émotion · points de friction
✅ 2 wireframes lo-fi mobile (écran choix sinistre · guidage IA)
✅ Backlog initial : 10 US ordonnées par valeur · épics · estimations SP
✅ Critères d'acceptation Gherkin : US-02 · US-06 · US-08 (3 features · 8 scénarios)
✅ Analyse AI Act : classification risque limité · obligations transparence
⬜ [optionnel] Plan de test Sprint 1 (non activé dans ce use case)
⬜ [optionnel] ADKAR assessment (pas de transformation organisationnelle majeure)
```

---

## Bilan d'exécution

| Indicateur | Valeur |
|-----------|--------|
| Durée totale | 75 min |
| Agents activés | 5 (BA · UX · PO · QA · JURIDIQUE-IA) |
| US produites | 10 US · 4 épics |
| Scénarios Gherkin | 8 scénarios sur 3 US prioritaires |
| Wireframes | 2 écrans lo-fi mobile |
| Décisions documentées | 3 (périmètre · AI Act · consentement) |
| Valeur clé démontrée | Parcours réduit de 47 champs → 5 étapes guidées · conformité IA intégrée dès le cadrage |

---

*Use case fictif · WF-001 v1.2 · Généré avec Claude Code · 2026-05-26*
