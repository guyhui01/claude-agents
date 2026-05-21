# Skill — AI Act : Conformité et Obligations 2026
> Certifications : AI Act Compliance Expert (EIPA) · CIPP/E · DPO Certifié CNIL

## Objectif
Évaluer et mettre en conformité les systèmes IA avec le Règlement européen sur l'IA (AI Act), en vigueur depuis août 2024.

## Calendrier de mise en vigueur AI Act
```
Août 2024    : Entrée en vigueur du règlement
Février 2025 : Interdiction des systèmes à risque inacceptable
Août 2025    : Codes de pratique publiés (GPAI)
Août 2026    : Application complète (systèmes à risque élevé)
2027-2028    : Dispositions sur les systèmes legacy
```

## Classification des risques IA

### Risque Inacceptable (INTERDIT)
```
→ Systèmes de notation sociale par les gouvernements
→ Manipulation subliminale exploitant les vulnérabilités
→ Identification biométrique en temps réel dans l'espace public (sauf exceptions)
→ Prédiction du comportement criminel basée sur le profiling
→ Reconnaissance des émotions en milieu de travail / éducation
```

### Risque Élevé (OBLIGATIONS STRICTES)
```
Secteurs concernés (Annexe III) :
  ✦ Recrutement et gestion des ressources humaines
  ✦ Crédit et assurances (scoring, évaluation)
  ✦ Éducation (évaluation des élèves)
  ✦ Services publics essentiels (eau, énergie, transport)
  ✦ Application de la loi et justice
  ✦ Dispositifs médicaux
  ✦ Infrastructure critique

Obligations pour les fournisseurs :
  1. Système de gestion des risques (documentation)
  2. Données d'entraînement conformes (qualité, biais)
  3. Documentation technique complète
  4. Transparence des logs (conservation ≥ 6 mois)
  5. Supervision humaine intégrée
  6. Robustesse, précision, cybersécurité
  7. Enregistrement auprès de l'EU AI Office
```

### Risque Limité (OBLIGATIONS DE TRANSPARENCE)
```
→ Chatbots : informer l'utilisateur qu'il parle à une IA
→ Deepfakes : labellisation obligatoire "Généré par IA"
→ Systèmes de recommandation : information sur la logique
→ Systèmes d'émotion detection : déclaration d'utilisation
```

### Risque Minimal (BONNES PRATIQUES VOLONTAIRES)
```
→ Filtres anti-spam
→ IA dans les jeux vidéo
→ Recommandations de contenu (non-critique)
```

## Grille d'évaluation AI Act pour votre système
```
1. Mon système est-il un système IA au sens de l'AI Act ?
   → Définition : machine-based system designed to operate with 
     varying levels of autonomy that may exhibit adaptiveness

2. Mon système est-il interdit ?
   → Vérifier la liste de l'Annexe I (risque inacceptable)

3. Mon système est-il à risque élevé ?
   → Vérifier l'Annexe III + Annexe II

4. Mon système est un modèle GPAI (General Purpose AI) ?
   → Obligations spécifiques si > 10^25 FLOPs (modèle systémique)

5. Quelles obligations s'appliquent à mon rôle ?
   → Fournisseur (développeur) : obligations maximales
   → Déployeur (utilisateur business) : obligations réduites
   → Importateur / distributeur : intermédiaire
```

## Documentation obligatoire (risque élevé)
- Système de management des risques IA (ISO 42001)
- Fiche de conformité technique
- Déclaration de conformité UE
- Enregistrement EU AI Office (base de données)
- Procédure de supervision humaine
- Plan de test et validation

## Livrables
- Audit de conformité AI Act (rapport)
- Classification du système IA (risque)
- Plan de mise en conformité priorisé
- Documentation technique requise
- Formation "AI Act" pour les équipes

## Format de sortie
Précise : description du système IA · secteur d'usage · rôle (fournisseur/déployeur) · données traitées · niveau de supervision humaine actuel · délai de mise en conformité
