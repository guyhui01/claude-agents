# Skill QA Cycle V — Tests de Sécurité (Bases ISTQB)

> Certification : CT-SEC · CTAL-TTA
> Agents : AGENT-QA-CYCLEV.md · AGENT-SECURITE-IA.md
> Méthodologie : Cycle en V

## Objectif
Identifier les vulnérabilités fonctionnelles de sécurité testables par un QA (hors pentest spécialisé).

## Catégories de tests de sécurité QA

| Catégorie | Tests |
|---|---|
| **Authentification** | Mots de passe faibles, tentatives illimitées, session après logout |
| **Autorisation** | Accès à des ressources non autorisées, élévation de privilèges |
| **Validation des entrées** | Injection SQL, XSS, données malformées |
| **Gestion des sessions** | Expiration, fixation de session, tokens exposés |
| **Données sensibles** | Mots de passe en clair, données en transit non chiffrées |

## Template cas de test sécurité

```
ID : TSEC-[XXX]
Titre : [Vulnérabilité testée]
Catégorie : [Authentification / Autorisation / Injection / Session / Données]
Risque : ☐ Critique  ☐ Élevé  ☐ Moyen  ☐ Faible

SCÉNARIO :
1. [Action de l'attaquant simulé]
2. [Tentative d'exploitation]
3. [Vérification du comportement]

RÉSULTAT ATTENDU (sécurisé) :
[Accès refusé / Erreur générique / Données masquées]

RÉSULTAT OBTENU : [...]
STATUT : ☐ Pass (sécurisé) ☐ Fail (vulnérable)
```

## Checklist sécurité minimale

```
Authentification :
☐ Verrouillage après [X] tentatives échouées
☐ Politique mot de passe appliquée
☐ Session invalidée après logout
☐ Timeout de session actif

Autorisation :
☐ Accès direct par URL impossible sans droits
☐ API protégées par token / OAuth
☐ Ségrégation des rôles effective

Données :
☐ Mots de passe hashés (jamais en clair)
☐ Données sensibles masquées dans les logs
☐ HTTPS obligatoire
☐ RGPD : données personnelles protégées
```
