# Skill — Vision et Stratégie Produit au Niveau Programme
> Certifications : SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), PSPO I (Scrum.org)

## Objectif
Définir et communiquer la vision produit au niveau Programme SAFe — Product Vision Statement, Solution Vision, alignement avec les Value Streams et les OKR — pour guider l'ART sur un horizon de 12-24 mois.

## Product Vision Statement — Template SAFe

```
VISION STATEMENT FORMAT (Geoffrey Moore — Crossing the Chasm)

Pour [CLIENT CIBLE]
Qui [BESOIN OU OPPORTUNITÉ]
Le [NOM DU PRODUIT / SOLUTION]
Est un [CATÉGORIE DE PRODUIT]
Qui [BÉNÉFICE CLÉS / RAISON D'ACHETER]
Contrairement à [ALTERNATIVE CONCURRENTE]
Notre produit [DIFFÉRENCIATION PRINCIPALE]

EXEMPLE :
Pour les équipes RH des grands groupes
Qui perdent 60% de leur temps sur des tâches administratives répétitives
La Solution RH IA
Est une plateforme d'automatisation RH propulsée par l'IA générative
Qui réduit de 40% le temps de traitement des dossiers candidats
Contrairement aux SIRH traditionnels non intelligents
Notre produit intègre nativement les LLMs pour augmenter (pas remplacer) les RH
```

## Lean UX Canvas — Niveau Programme

```yaml
lean_ux_canvas:
  probleme_metier: |
    Les équipes RH passent 60% de leur temps sur des tâches répétitives
    (tri CV, rédaction offres, comptes-rendus entretiens).
    Cela réduit le temps disponible pour les activités à haute valeur ajoutée.
    
  utilisateurs: |
    Primaires : Chargés RH (45 pers.) — tâches opérationnelles
    Secondaires : Managers RH (12) — validation, pilotage
    
  hypotheses:
    - "Si nous automatisons le tri CV, les chargés RH gagneront 2h/semaine"
    - "Si nous générons les comptes-rendus en IA, la qualité s'améliorera"
    
  resultats_attendus:
    - "Réduction 40% temps tâches répétitives"
    - "CSAT collaborateurs RH > 4/5"
    
  assumptions_risquees:
    - "Les RH accepteront de faire confiance à l'IA pour pré-scorer"
    - "La CNIL validera l'usage IA dans le recrutement"
```

## OKR Produit — Niveau Programme

```yaml
okrs_programme:
  objectif: "Devenir le leader IA augmenté des équipes RH d'ici fin 2026"
  
  key_results:
    - kr: "KR1"
      description: "Réduire de 40% le temps de traitement dossier candidat"
      mesure: "Tracking temps moyen SIRH"
      baseline: "45 min/dossier"
      cible: "27 min/dossier"
      
    - kr: "KR2"
      description: "Atteindre 85% de taux d'utilisation hebdo des features IA"
      mesure: "Analytics produit"
      baseline: "0%"
      cible: "85%"
      
    - kr: "KR3"
      description: "NPS produit > 45 auprès des utilisateurs RH"
      mesure: "Enquête in-app trimestrielle"
      baseline: "NPS actuel : 12"
      cible: "NPS > 45"
```

## Livrables
- Vision Statement produit (format Moore)
- Lean UX Canvas niveau Programme
- OKR produit sur 2 horizons (6 mois / 12 mois)
- Product Roadmap (features, jalons, releases)

## Format de sortie
Précise : domaine produit, clients cibles, contexte concurrentiel, contraintes stratégiques, horizon temporel.
