# Skill — Mentoring et Onboarding Équipe Dev
> Certifications : ISTQB FL v4.0 · GitHub Certifications

## Objectif
Onboarder efficacement les développeurs, monter en compétence l'équipe, instaurer une culture de qualité et de partage de connaissance — pour réduire le time-to-productivity et fidéliser les talents.

## Plan d'onboarding développeur — 30/60/90 jours

```
SEMAINE 1 — Environnement et contexte
  Jour 1  □ Setup poste (README onboarding < 30 min)
          □ Accès GitHub, Jira, Slack, VPN
          □ Présentation équipe et rôles
  Jour 2  □ Architecture overview (diagramme C4 L1/L2)
          □ Domaine métier : présentation produit par le PO
  Jour 3  □ Run local de l'application
          □ Conventions de code + workflow Git
  Jour 4-5 □ Premier ticket de niveau L1 (bug simple)
           □ Code review accompagnée

MOIS 1 — Autonomie sur tickets L2
  □ Tickets autonomes avec review systématique
  □ Pairing (2h/semaine avec un dev senior)
  □ Contribution à 1 ADR ou 1 runbook
  □ Participation active aux code reviews

MOIS 2 — Contribution feature complète
  □ Première feature end-to-end (conception → tests → déploiement)
  □ Présentation en show & tell (10 min)
  □ Point de feedback 360° (forces + axes de progrès)

MOIS 3 — Autonomie complète
  □ Ownership d'un composant ou service
  □ Mentoring d'un développeur junior (si applicable)
  □ Contribution à l'amélioration du processus (rétro)
```

## README Onboarding — Template

```markdown
# Getting Started — [Nom du projet]

## Prérequis
- Node.js 22+, Docker Desktop 4.x, Git 2.x
- Accès : demande à @tech-lead (Slack #access-requests)

## Installation (< 15 min)
```bash
git clone git@github.com:org/projet.git
cd projet
cp .env.example .env.local
docker compose up -d          # Lance PostgreSQL + Redis
npm install
npm run db:migrate
npm run dev
```

## Vérification
- App : http://localhost:3000 ✅
- API : http://localhost:3001/health → { status: 'ok' } ✅

## Workflow Git
1. Créer une branche : `git checkout -b feat/PROJ-123-description`
2. Commit : `git commit -m "feat(orders): add bulk cancel endpoint"`
3. Push + Pull Request (template auto-rempli)
4. Code review (1 approbateur minimum)

## Ressources
- [Architecture](docs/architecture.md) — Diagrammes C4
- [ADRs](docs/adr/) — Décisions d'architecture
- [API Docs](http://localhost:3001/docs) — Swagger UI
- [Runbooks](docs/runbooks/) — Procédures opérationnelles
```

## 1:1 Tech Lead — Structure

```
FRÉQUENCE : Bimensuel, 30 min
AGENDA TYPE :
  1. Check-in (5 min) — Comment tu vas ? Blockers ?
  2. Travail en cours (10 min) — Avancement, difficultés techniques
  3. Développement (10 min) — Compétences, apprentissage, objectifs
  4. Feedback bidirectionnel (5 min) — Franchement, des deux côtés

SUJETS À ABORDER RÉGULIÈREMENT :
  □ Satisfaction et engagement (risque de départ ?)
  □ Montée en compétence (formation souhaitée ?)
  □ Tensions ou frustrations (process, équipe, dette ?)
  □ Reconnaissance et visibilité (contributions valorisées ?)
  □ Projection 6 mois (objectifs de carrière ?)
```

## Formats de partage de connaissance

```
FORMAT              FRÉQUENCE     DURÉE      OBJECTIF
──────────────────  ────────────  ─────────  ────────────────────────────────────────
Tech Talk           Mensuel       30-45 min  Approfondir un sujet technique (1 personne)
Show & Tell         Bimensuel     10-15 min  Partager ce qu'on a fait / appris
Pair Programming    Ad hoc        2-4h       Transférer compétence sur tâche concrète
Code Review Club    Hebdomadaire  30 min     Revoir une PR ensemble, discuter patterns
Post-mortem         Post incident 60 min     Apprendre des incidents sans pointer du doigt
Kata / Dojo         Mensuel       90 min     Pratiquer TDD, refactoring sur exercice partagé
```

## Matrice de compétences équipe

```
NOM          FRONTEND  BACKEND  DB/SQL  INFRA/K8S  TESTS  SÉCURITÉ
───────────  ────────  ───────  ──────  ─────────  ─────  ────────
Alice        ⭐⭐⭐⭐     ⭐⭐      ⭐⭐     ⭐         ⭐⭐⭐   ⭐
Bob          ⭐         ⭐⭐⭐⭐   ⭐⭐⭐    ⭐⭐        ⭐⭐    ⭐⭐
Carol        ⭐⭐        ⭐⭐⭐    ⭐⭐     ⭐⭐⭐⭐      ⭐⭐⭐   ⭐⭐⭐
(à construire par le Tech Lead avec l'équipe)
```

## Livrables
- README onboarding (setup < 15 min garanti)
- Plan d'onboarding 30/60/90 jours
- Matrice de compétences équipe
- Planning Tech Talks / Show & Tell (calendrier)
- Template 1:1 (agenda + points récurrents)
- Bilan de compétences individuel (trimestriel)

## Format de sortie
Précise : **profil du développeur** (junior, mid, senior), **stack et domaine**, **urgence** (onboarding J+1 ou plan à 3 mois), **taille équipe**, **contraintes** (distanciel, agence, multi-timezone), **objectif** (autonomie rapide vs montée en compétences long terme).
