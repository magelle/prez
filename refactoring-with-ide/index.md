# Refactoring

Sans les mains

_\o/_
---

---

_mon collègue :_
> C'est compliqué ce code !

_moi :_
> On devrait refactorer tout ça :)

_mon collègue :_
> Mais, j'ai peur de tout casser !

_moi :_
> On va poser des TU

_mon collègue :_
> Ce code est bien trop compliqué pour ça

_moi :_
> Oui, il faudrait refactorer :'(
---

## La solution

demander à quelqu'un de confiance : 

_Votre IDE_

---

### On va voir :

- Pourquoi lui faire confiance ?
- Que sait faire votre IDE ?
- Quand ne pas le croire ?

---

### Que sait faire votre IDE ?

- Rename
- Extract
  - Variable
  - Parameter
  - Method
  - Delegate
- Inline
- Safe delete
- ...

---

###  Pourquoi lui faire confiance ?

- Il sait ce qu'il fait
- Il sait dire non
- Il fait tout le boulot

---

#### Renommer

- Ajouter du sens
- Se rapprocher des termes du métier
- Suprimer les *compute*, *handle*, *toto*, ...

---

#### Extract variable

- Eviter les lignes trop lourdes
- Ajouter du sens avec un nom
- Limiter la duplication

---

#### Extract méthode / fonction

- Découper une grosse méthode
- Ajouter du sens avec un nom
- Limiter la duplication
- Peut-être mockée

---

### Où trouver les ces fonctionnalités

- _IntelliJ_ : menu *Refactor*
- _Eclipse_ : menu *Refactor*
- _Visual Studio_ : menu *Edit* > *Refactor*

---

### Quand ne pas le croire ?

- Usages externes
- Serialisation
- Tout ce qu'il ne voit pas

---

#### Live coding !!

---

#### #### Kata 

https://github.com/emilybache/GildedRose-Refactoring-Kata

https://github.com/emilybache/Tennis-Refactoring-Kata

https://github.com/xpmatteo/birthday-greetings-kata

https://github.com/xpmatteo/birthday-greetings-kata-csharp

---