# Skill — Centricité Client et Design Thinking SAFe
> Certifications : SAFe POPM 6 (Scaled Agile), PMI-PBA (PMI), PSPO I (Scrum.org)

## Objectif
Appliquer les pratiques de centricité client au niveau Programme SAFe — Jobs-To-Be-Done, personas, empathy mapping, Continuous Exploration — pour s'assurer que les Features livrées répondent aux vrais besoins utilisateurs.

## Jobs-To-Be-Done (JTBD) — Framework

```
FORMAT JTBD
────────────────────────────────────────────────────────────
Quand [SITUATION / CONTEXTE]
Je veux [MOTIVATION / OBJECTIF]
Afin de [RÉSULTAT ATTENDU / BÉNÉFICE]

EXEMPLE :
Quand je reçois 200 candidatures pour un poste
Je veux identifier rapidement les 10 meilleurs profils
Afin de ne pas perdre de temps sur les dossiers non pertinents
```

## Persona Programme — Template

```yaml
persona:
  nom: "Claire, Chargée RH Senior"
  age: 38
  entreprise: "Grand groupe — 5000 collaborateurs"
  
  role: "Gère 15 recrutements simultanément"
  
  objectifs:
    - "Trouver les meilleurs candidats le plus vite possible"
    - "Réduire le temps administratif pour se concentrer sur le contact humain"
    - "Justifier ses décisions de recrutement à sa direction"
    
  frustrations:
    - "Noie dans les CVs (200+ par poste)"
    - "Outils RH trop rigides, pas d'IA"
    - "Manque de données pour argumenter ses recommandations"
    
  comportements_outils:
    - "LinkedIn Recruiter quotidien"
    - "SIRH (SAP HCM) — usage contraint"
    - "Excel pour ses propres tableaux de bord"
    
  gains_attendus:
    - "Gagner 2h/jour sur le tri administratif"
    - "Dashboard clair pour reporter à sa direction"
    - "Confiance dans les suggestions de l'IA"
```

## Empathy Map — Template

```
                    PENSÉE & RESSENTI
                    "Ai-je fait les bons choix ?"
                    "L'IA va-t-elle me remplacer ?"
                              │
          ┌──────────────────┼──────────────────┐
  ENTEND  │                  │                  │  VOIT
  "L'IA   │                  │                  │  Des piles de
  remplace│      CLAIRE      │                  │  CVs non lus
  les RH" │      (Persona)   │                  │  Des collègues
          │                  │                  │  débordés
          └──────────────────┼──────────────────┘
                              │
                    DIT & FAIT
                    Trie les CVs manuellement
                    Copie-colle dans Excel
                    Se plaint du SIRH trop rigide
```

## Continuous Exploration SAFe

```
CYCLE CONTINUOUS EXPLORATION (CE)
────────────────────────────────────────────────────────────
HYPOTHÈSE → EXPÉRIENCE → DONNÉES → APPRENTISSAGE → PIVOT/PERSÉVÈRE

EXEMPLE D'EXPÉRIENCE :
Hypothèse : "Les RH font confiance au score IA si l'explication est fournie"
Expérience : Pilote 2 sprints sur 10 utilisateurs
  → Version A : Score IA seul
  → Version B : Score IA + top 3 raisons
Mesure : Taux d'acceptation des suggestions IA
Résultat : B → 78% acceptation vs A → 34%
Apprentissage : L'explicabilité est non-négociable
Action : Feature "Explication score" → Must Have
```

## Livrables
- JTBD documentés pour les principales populations
- Personas Programme (2-3 personas)
- Empathy Map visuelle
- Backlog d'expériences Continuous Exploration

## Format de sortie
Précise : populations cibles, domaine produit, données utilisateurs disponibles (entretiens, analytics, support).
