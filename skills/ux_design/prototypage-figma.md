# Skill — Prototypage Interactif Figma
> Certifications : Figma Professional Certification

## Objectif
Créer des prototypes interactifs haute fidélité pour tester et valider les parcours utilisateurs.

## Techniques Figma
- **Connections** : liens entre frames (navigate, overlay, swap)
- **Smart Animate** : transitions fluides entre états
- **Variables & Conditions** : prototypes dynamiques avec logique
- **Interactive Components** : composants avec états interactifs
- **Prototype flows** : parcours multiples depuis un même fichier

## Bonnes pratiques
- Nommer toutes les frames clairement (écran/état)
- Définir un starting point par flow
- Utiliser les overlays pour modales et tooltips
- Tester sur device réel via Figma Mirror

## Livrables
- Lien prototype Figma (view only)
- Flow annotés par parcours utilisateur
- Guide de test pour les testeurs

## Format de sortie
Précise : parcours à prototyper · device cible · niveau d'interaction attendu (cliquable / animé / conditionnel)

## Sources
- **Figma** — documentation officielle *Prototyping* (Smart Animate, Variables, Interactive Components, Dev Mode)
- **Carolyn Snyder** — *Paper Prototyping* (Morgan Kaufmann, 2003) — fondamentaux du prototypage itératif
- **Todd Zaki Warfel** — *Prototyping: A Practitioner's Guide* (Rosenfeld Media, 2009) — spectre de fidélité
- **Nielsen Norman Group** — articles sur la fidélité de prototype et le test de prototypes

## Anti-patterns
- Sauter directement en hi-fi : sur-investir un parcours non validé en lo-fi
- Prototype « démo » poli mais non testable (pas de starting point, flows incomplets)
- États d'erreur / vides / chargement absents → test biaisé sur le seul happy path
- Confondre prototype (simulation) et produit (les variables Figma ne remplacent pas la vraie logique back)
- Ne pas tester sur device réel (tailles tactiles, gestes) avant le test utilisateur

## Voir aussi
- [wireframing.md](wireframing.md) — étape lo-fi en amont du prototype hi-fi
- [tests-utilisateurs.md](tests-utilisateurs.md) — tester le prototype avec de vrais usagers
- [design-system.md](design-system.md) — composants réutilisés dans le prototype
- [motion-design-ui.md](motion-design-ui.md) — animer les transitions (Smart Animate)
