# Skill — Contrats IA & Propriété Intellectuelle
> Certifications : CIPP/E · LegalTech AI Certificate (Harvard Law) · DPO Certifié

## Objectif
Rédiger et négocier les contrats liés aux projets IA : développement, SaaS, licensing de modèles, et gérer les questions de propriété intellectuelle.

## Types de contrats IA et leurs spécificités

### Contrat de développement IA
```
Clauses essentielles :
  1. Périmètre et livrables
     → Spécifications fonctionnelles précises (éviter l'ambiguïté sur "l'IA")
     → Métriques de performance (accuracy, latence, disponibilité)
     → Critères d'acceptance et de recette

  2. Propriété intellectuelle
     → Modèle entraîné : qui est propriétaire ?
     → Données d'entraînement : licences, exclusivité
     → Code source : cession vs. licence
     → Améliorations futures : clause d'amélioration

  3. Données et RGPD
     → Qualification des parties (responsable/sous-traitant)
     → DPA (Data Processing Agreement) obligatoire
     → Localisation des données (UE ou non)
     → Rétention et suppression

  4. Garanties et responsabilités
     → Garantie de conformité AI Act
     → Limitation de responsabilité pour les décisions IA
     → Clause de biais et discrimination

  5. Maintenance et évolution
     → MCO (niveau de service)
     → Drift du modèle : qui surveille, qui corrige ?
     → Mises à jour des modèles fondateurs (ex: changement API Claude)
```

### Contrat SaaS IA (côté client)
```
Points de vigilance à négocier :
  ✓ Traitement des données (DPA conforme RGPD)
  ✓ Localisation des données (UE uniquement si RGPD strict)
  ✓ Portabilité des données et réversibilité
  ✓ Droit d'audit et de contrôle
  ✓ SLA de disponibilité (99,9% ≠ 99,5% en production)
  ✓ Politique de rétention / suppression à la résiliation
  ✓ Modifications unilatérales des CGU (OpenAI a changé 4x en 2024)
  ✓ Utilisation des données pour l'entraînement du modèle fournisseur
  ✓ Conformité AI Act du fournisseur
```

## Propriété intellectuelle des modèles IA

### Qui est propriétaire du modèle entraîné ?
```
Principe général (droit français 2026) :
  → Pas de droit d'auteur sur le modèle lui-même (code mathématique)
  → Droit d'auteur possible sur le code d'entraînement
  → Protection possible par secret d'affaires (Directive 2016/943)
  → Brevet : difficile sur les algorithmes purs (exception logicielle)

Contrat de développement : clauses recommandées
  → "Le modèle entraîné [est cédé / fait l'objet d'une licence exclusive]
     au client à compter de la recette définitive"
  → Prévoir les droits sur les poids du modèle (weights)
  → Prévoir les droits sur les datasets d'entraînement
```

### Outputs du LLM et droit d'auteur
```
Position CJUE et EUIPO 2025 :
  → Les outputs d'une IA ne bénéficient pas du droit d'auteur
     (pas d'auteur humain identifiable)
  → Exception : si apport créatif humain significatif dans le prompt
  → En pratique : mentions légales "Généré avec IA" recommandées

Implications :
  → Contenu généré par IA = domaine public (en l'état actuel du droit)
  → Risque de plagiat sur les données d'entraînement (RAG notamment)
  → Fair Use / Usage loyal : débat en cours (procès OpenAI, NYT, etc.)
```

## DPA (Data Processing Agreement) — clauses clés
```
Art. 28 RGPD obligatoire si sous-traitance de données personnelles

Clauses minimales :
  1. Objet et durée du traitement
  2. Nature et finalité du traitement
  3. Type de données et catégories de personnes
  4. Obligations et droits du responsable de traitement
  5. Sous-sous-traitants (liste + accord préalable)
  6. Transferts hors UE (SCCs si applicable)
  7. Mesures de sécurité (Art. 32)
  8. Coopération pour les droits des personnes
  9. Suppression / restitution à la fin du contrat
  10. Audit et contrôle
```

## Livrables
- Template contrat de développement IA (annoté)
- Checklist due diligence SaaS IA
- Template DPA conforme RGPD / AI Act
- Analyse de propriété intellectuelle du projet
- Clause de conformité AI Act pour les contrats fournisseurs

## Format de sortie
Précise : type de contrat · parties (client/prestataire/SaaS) · données traitées · pays d'opération · enjeux PI prioritaires · délai de négociation
