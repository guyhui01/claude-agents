# Skill — Propriété Intellectuelle & Droit d'Auteur IA
> Certifications : LegalTech AI Certificate · CIPP/E · DPO Certifié CNIL

## Objectif
Conseiller sur les questions de propriété intellectuelle liées à l'IA : droits sur les outputs, ownership des modèles, licences et risques de plagiat.

## État du droit IA en Europe 2026

### Droit d'auteur des outputs IA
```
Position actuelle (EUIPO, CJUE, CNIL 2025-2026) :

✗ Les outputs purement générés par IA NE bénéficient PAS
  du droit d'auteur européen → domaine public technique

✓ EXCEPTION : Si apport créatif humain SUBSTANTIEL
  → Le prompt seul = insuffisant (EUIPO, décision 2025)
  → La sélection + arrangement humain = peut suffire
  → La modification substantielle humaine = protection possible

Implications pratiques :
  → Contenu GenAI pur : pas de protection
  → Contenu GenAI + édition humaine : protection selon degré
  → Obligatoire : mentionner "Généré par IA" (AI Act Art. 50)
```

### Propriété des modèles IA
```
Modèle entraîné = ensemble de poids mathématiques

Protection possible :
  → Secret d'affaires (Directive 2016/943) → la plus solide
     Conditions : secret, valeur commerciale, mesures raisonnables
  → Droit d'auteur sur le CODE d'entraînement (mais pas le modèle)
  → Brevet : très difficile en EU (exception logicielle pure)
     Possible si "effet technique" démontrable

Recommandation 2026 :
  → Protection par secret d'affaires (NDA, accès restreint, logs)
  → Contrat de développement clair sur la propriété des poids
  → Watermarking des outputs pour traçabilité
```

### Données d'entraînement et droits
```
Risques juridiques sur les données d'entraînement :

1. Copyright des données d'entrainement
   → Procès NYT vs. OpenAI (2024) : précédent en cours
   → EU : Text and Data Mining exception (Art. 4 Directive 2019/790)
     Condition : accès licite + opt-out honoré
   → Opt-out robots.txt : OpenAI, Google, Meta ont mis en place
   
2. Données personnelles RGPD
   → Base légale nécessaire pour le scraping + entraînement
   → Intérêt légitime souvent invoqué (débattu)
   → CNIL a sanctionné plusieurs acteurs en 2024-2025

3. Données propriétaires des clients
   → Clause contractuelle : les données client ne servent pas à
     l'entraînement du modèle fournisseur (à négocier!)
```

## Contrats — clauses PI essentielles

### Pour les projets de développement IA
```
Clause de cession de la PI :
  "À compter de la recette définitive, le CLIENT acquiert la
  propriété exclusive des Éléments spécifiques, incluant :
  (i) le code source développé spécifiquement,
  (ii) les poids du modèle entraîné sur les données CLIENT,
  (iii) les datasets annotés par le PRESTATAIRE.
  
  Les éléments réutilisables (frameworks, librairies open source)
  font l'objet d'une licence non-exclusive en faveur du CLIENT."

Clause anti-usage pour l'entraînement :
  "Le PRESTATAIRE s'interdit d'utiliser les données du CLIENT,
  les conversations du système, et les outputs du modèle
  pour entraîner, affiner ou améliorer tout autre modèle
  ou système, sauf accord écrit préalable du CLIENT."
```

## Due Diligence PI avant utilisation d'un LLM SaaS
```
Questions à poser au fournisseur :

  1. Utilisez-vous mes données pour entraîner vos modèles ?
     → OpenAI : opt-out disponible (API par défaut)
     → Anthropic Claude : non utilisé par défaut (API)
     → Google : vérifier les CGU Workspace AI

  2. Qui est propriétaire des outputs générés ?
     → La plupart des CGU accordent la propriété à l'utilisateur
     → Vérifier les restrictions sur le contenu généré

  3. Vos modèles ont-ils été entraînés sur des données protégées ?
     → Risque de plagiat : Stability AI, Midjourney (procès)
     → Indemnisation prévue ? (Adobe Firefly : oui, OpenAI : limité)
```

## Livrables
- Audit PI d'un projet IA (rapport)
- Clauses contractuelles PI types
- Politique d'utilisation responsable des outils GenAI
- Guide "Droits sur les outputs IA" pour les équipes
- Template de déclaration "Contenu généré avec IA"

## Format de sortie
Précise : type de création (texte, code, image, modèle) · rôle (développeur/déployeur/utilisateur) · pays · enjeu commercial · fournisseur IA utilisé
