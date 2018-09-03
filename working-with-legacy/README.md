# Working with legacy one Day formation

## Objectif

- Définir le legacy
- présenter les causes de son apparition
   - Inexpérience
   - Faire les choses "plus tard" // TODO :
   - Anticiper le prochain sprint, la prochaine fonctionnalité
   - peu / pas de refactoring
   - manque de communication (ou unsafe com) au sein de l'équipe avec l'extérieur
   - nobody say no !

   - développer dans l'urgence
   - peur de casser le code
   - Turn over, faible connaissance de la base de code

   - Faible connaissance du métier -> besoins non compris -> fct non adaptés -> fct contournée -> model tordu
   - Faible communication avec le métier, entre les team members
   - Fonctionnalités trop complexe / pas utilisées
   - Fonctionnalités bricolage / contournant un problème de concepion
   - Besoins grossièrement semblable dans un même système
   
   - incapacité de revenir sur les décisions tech / fct / orga

   - Le pire du pire
       - Vous ne connaissez pas le métier
       - Vous n'avez pas accès aux utilisateurs
       - Les utilisateurs ne connaissent pas l'application
       - L'application n'a pas de tests
       - Pas de tests de non régressions
       - Code spagetti
- Reconnaitre, detecter et prévenir l'apparition du code legacy
   - Quelques smells
- Permettre aux développeurs de ne plus avoir peur de travailler sur du legacy
- Donner des outils et méthodes pour travailler sur le legacy
 - Re-découvrir le métier et le language métier
 - Reprendre le controle sur le legacy
 - Tests
- Apprendre à poser des tests sur le legacy
 - Sortir du dépendency hell
 - Fake et outils
 - Supprimer l'héritage en faveur de la composition
- Proposer des méthodes pour réduire la dette technique
 - Isoler ce qui évolue de manière différentes
 - Ignorer le code qui ne va pas évoluer
- Proposer des méthodes pour empécher l'apparition de code
- Quoi refactorer
 - Base de données (Schémas et requêtes)
 - API
 - Tests (unit & Integration)
 - Packaging
 - configuration
 - 
 legacy
 - Solutions au moment du dev
  - éviter traductions dans le code
  - dangers du perfectionnisme
  - modéliser le métier
 - Travail d'équipe
  - travailler en équipe
  - travailler ensemble
  - diffuser la connaissance
 - Solutions archi
  - anti corruption layer
  - architecture hexagonale
 - Solutions organisationnels
  - Plannifier le refactoring
  - se donner tu temps pour essayer (time boxer)
- S'exercer sur les méthodes proposées
 - golden master
 - poster des tests sur legacy
 - refactorer sans tester
- Communiquer et expliquer sur le legacy
 - Métriques Sonar
 - Montrer le risque pour le projet
 - Temps d'onboarding
 - Temps résolution d'issue
 - Temps de développement
 - Nombre d'issues
 - Turn over
 - Les dev XP ne veulent pas venir
- Proposer une liste de lecture
- Comment comprendre ?
- Comment modifier ?
- Refactorer sans casser
- Refonte ?
- ​

## Kata
- Application / Service / Dao layers
- Dumb DTO
- Technical stuff leaking
- Wrong abstraction
- Primitive obsession
- https://github.com/jbrains/trivia
- http://blog.adrianbolboaca.ro/2014/04/legacy-coderetreat/
- Kata ajout ACL suite changement datasource

# Resources pour construire
 - https://www.slideshare.net/mariosangiorgio/clean-code-and-code-smells
 - https://sourcemaking.com


|> turn over
|> méconnaissance tech / fct / orga
|> le dev ralenti
|> retard
|> pression du management
|> fct développées à la va vite
|> pas de tests automatisé
|> peur de refactorer
|> fonctionnalité développez "sans toucher au code"
|> apparitions de no man's land

|> Détection d'un pain point par un manager
|> Traduction en demande d'évol par des MOA
|> développement d'une feature pas tout à fait adaptée
|> contournement des limitations de la feature par les utilisateurs
|> Demande d'évolutions pour améliorer le contournement
|> La fonctionnalité devient plus complexe
|> Le "métier de l'utilisateur devient" utiliser la fonctionnalité
|> Création d'une expertise métier sur la feature
|> le temps d'onboarding utilisateur augmente
|> le temps d'onboarding des dev augmente
|> la complexité de l'application fct et tech augmente
|> les temps de dev augmentent

https://www.valueflowquality.com/blog/where-bad-code-comes-from/

https://fr.slideshare.net/lalitkale/code-refactoring-66281026