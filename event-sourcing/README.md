# Event sourcing

Ne plus stocker l'état du système (à un instant T) mais tous les évènements ayant eu lieu en son sein.
Ne pas confondre avec le command sourcing qui stocke toutes les commandes.

Un évènement du système est quelque chose qui a eu lieu et qui a modifier l'état du system.
ex : Si je demande au système de supprimer mon compte, le système command sourcé va enregistrer la demande de suppression 
alors que le système event sourcé va enregistré l'évènement "compte supprimer" sauf si la commande est impossible à éxécuter, il va 
alors enregistrer l'évènement "refus de suppression du compte"

Les évènements survenant au sein du système peuvent provoquer d'autres évènements.
ex : Je peux réagir à l'évènement "refus de suppression du compte" pour envoyer un mail au support pour que celui-ci le contact ou 
lever une alerte

Les évènements ne sont jamais ni modifiés ni supprimés.
Un évènement est lier à un objet (produit, contrat, ...).


## Pourquoi ?

- Lorsque l'on modifie l'état du système, on perd de l'information : l'ancienne valeur
- Piste d'audit gratuite
- L'évènement est souvent le mode de pensé du métier

## Comment ?

- un traitement sera découpé comme suis : 
 - Une commande arrive
 - Une décision est prise sur cette commande : un évènement
 - l'évènement est stocké
 - l'évènement peut être envoyé dans une queue, ce qui pourra provoquer d'autres évènements
- la lecture se fait sur un état reconstruit à partir des évènements
 - CQRS est privilégié mais pas obligatoire
 - les "vues" sont constitués à partir des évènements soit par batch soit en écoutant une queue

## Avantages

- On ne perd pas de données
 - On peut récupérer par exemple : les produits retirés du panier depuis la création de l'application

## Inconvénients

- 

## Cas d'usages

- Quand l'historique est important
 - E-commerce
 - Banque (piste d'audit, compte bancaire, ...)

## Tips

- Snapshot : pour éviter de reparcourir tout l'historique
- Upcaster : Ajouter une couche à la lecture pour passer un évènement d'une version à une version suppérieur

## Resources

- Greg Young
- 
