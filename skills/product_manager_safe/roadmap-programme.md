# Skill — Roadmap au Niveau Programme (ART)
> Certifications : SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), SAFe SPC (Scaled Agile)

## Objectif
Construire et piloter la roadmap produit au niveau Programme SAFe — séquencement des Features sur 2-4 PI, jalons de release, dépendances capacitaires — pour aligner l'ART et les parties prenantes sur un plan de livraison réaliste.

## Structure de la roadmap Programme

```
HORIZON 1 — PI courant (10 semaines) — Engagé
  Features définies, estimées, priorisées (WSJF)
  Capacité allouée connue
  
HORIZON 2 — PI+1 (10 semaines) — Probable
  Features identifiées, estimées grossièrement
  Peut évoluer selon I&A et feedback marché
  
HORIZON 3 — PI+2 et au-delà — Possible / Vision
  Capabilities et Epics
  Ordre indicatif selon la stratégie
  Sujet à changements significatifs
```

## Roadmap Programme — Template YAML

```yaml
programme_roadmap:
  produit: "Solution RH IA"
  version: "v2.0"
  derniere_mise_a_jour: "2026-05-22"
  
  pi_12:
    horizon: "Engagé"
    periode: "2026-04 → 2026-06"
    objectif_pi: "Lancement module scoring candidats"
    features:
      - id: "F-01"
        titre: "Scoring automatique des CVs"
        valeur_business: 10
        wsjf: 5.0
        statut: "In Progress"
        equipe: "Équipe Alpha"
      - id: "F-02"
        titre: "Dashboard RH Analytics"
        valeur_business: 8
        wsjf: 4.0
        statut: "Planned"
        equipe: "Équipe Beta"
    release: "Release 2.0 — Sprint 4 PI-12"
    
  pi_13:
    horizon: "Probable"
    periode: "2026-07 → 2026-09"
    objectif_pi: "Extension module entretiens + intégration SIRH"
    features:
      - id: "F-05"
        titre: "Transcription et résumé entretiens IA"
        valeur_business: 9
        wsjf: 4.5
        statut: "Backlog"
      - id: "F-06"
        titre: "API connecteur SIRH (SAP HCM)"
        valeur_business: 7
        wsjf: 3.5
        statut: "Backlog"
        
  horizons_futurs:
    - id: "CAP-01"
      type: "Capability"
      titre: "Prédiction turnover par IA"
      pi_estimé: "PI-14"
    - id: "EPIC-01"
      type: "Epic"
      titre: "Module formation et développement compétences IA"
      pi_estimé: "PI-15 à PI-16"
```

## Roadmap visuelle — Format Gantt simplifié

```
ROADMAP PROGRAMME — Solution RH IA
─────────────────────────────────────────────────────────────────────
                    │ PI-12 (avr-jun) │ PI-13 (jul-sep) │ PI-14 (oct)
─────────────────────────────────────────────────────────────────────
F-01 Scoring CVs    │ ████████████    │                 │
F-02 Dashboard RH   │       ████████  │                 │
F-05 Transcription  │                 │ ████████████    │
F-06 API SIRH       │                 │       ████████  │
CAP-01 Prédiction   │                 │                 │ ────────►
─────────────────────────────────────────────────────────────────────
Releases            │ R2.0 (Sprint 4) │ R2.1 (Sprint 4) │
─────────────────────────────────────────────────────────────────────
```

## Livrables
- Roadmap YAML Programme (3 horizons)
- Gantt simplifié pour communication stakeholders
- Priorisation WSJF des features documentée
- Plan de release aligné sur les PI

## Format de sortie
Précise : features identifiées (avec BV si disponible), contraintes de capacité, jalons business, horizon de planification souhaité.
