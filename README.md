# pendu-MVC

---

## 🧾 **Structure des entrées du dictionnaire**

---

### `_id`

* **Type** : `ObjectId`
* **Description** : Identifiant unique généré automatiquement par MongoDB pour chaque document. Sert à distinguer chaque entrée.

---

### `ID`

* **Type** : `Integer`
* **Description** : Identifiant lexical interne ou position dans un corpus/dictionnaire. Peut être utilisé comme index métier pour l’unité lexicale.

---

### `M`

* **Type** : `String`
* **Description** : Mot ou locution étudiée. C’est la forme lexicale principale (forme canonique ou figurée dans certains cas).

---

### `CONT` (contexte)

* **Type** : `String`
* **Description** : Indice du **contexte syntaxique ou sémantique**. Peut représenter :

  * Le rôle grammatical (ex : "artic N" pour article suivi d’un nom)
  * Une construction typique (ex : "tirer adv" = tirer avec adverbe)
  * Un cadre sémantique (ex : "mesure adv" = adverbe de mesure)

---

### `DOM` (domaine)

* **Type** : `Object`

  * `code` : `String` — code abrégé du domaine sémantique
  * `nom` : `String` — nom complet du domaine
* **Description** : Domaine lexical ou champ sémantique auquel le mot appartient.

  * Exemples : `PHN` → phonétique ; `ARM` → armement ; `QUA` → quantité

---

### `OP` (opération ?)

* **Type** : `String`
* **Description** : Peut représenter une **classe d'opposition**, **marque de variation**, ou **type opératoire** dans un système de description linguistique.

  * Exemples : `voy` pour voyelle, `st` pour structure standard ?

---

### `SENS`

* **Type** : `String`
* **Description** : Définition ou **description du sens** de l’unité lexicale dans le contexte donné. Peut être très schématique ou explicite.

---

### `OP1`

* **Type** : `String`
* **Description** : Code morphosyntaxique ou sémantique secondaire. Peut contenir des informations sur :

  * La structure grammaticale
  * Le type de phrase ou d’usage
  * Positionnement dans une grille linguistique (ex : `C1a3`, `E3f3`, `R3j-`)

---

### `CA` (catégorie)

* **Type** : `Object`

  * `code` : `String` — code abrégé de la catégorie grammaticale
  * `catégorie` : `String` — nom de la catégorie grammaticale (ex : `N` pour nom, `Adv` pour adverbe)
  * `type` : `String` *(optionnel)* — sous-catégorisation, ex. animé/non-animé, genre
  * `genre` : `String` *(optionnel)* — genre grammatical, ex. `M` pour masculin
* **Description** : Détails grammaticaux et morphologiques liés à l’unité lexicale.

---

### `no`

* **Type** : `String` ou `Integer`
* **Description** : Semble indiquer un numéro de variante, de forme ou d’occurrence dans un ensemble ? Peut être redondant avec `ID` dans certains cas.

---

### `LVF`

* **Type** : `Boolean`
* **Description** : Indicateur booléen, probablement pour une **marque d'appartenance à un lexique verbal figé (LVF)** ou tout autre sous-ensemble spécifique du dictionnaire.

  * `false` = n’appartient pas à ce lexique

---

## 🧪 Exemple de résumé d'une entrée :

### 🔹 `M`: "à bout touchant"

* **DOM** : arme (`ARM`)
* **CONT** : "tirer adv" → utilisé dans un contexte d'action + adverbe
* **SENS** : "en touchant le corps"
* **Catégorie grammaticale** : adverbe (`Adv`)
* **Code d'opération** : `st` → standard ?
* **Appartient au LVF** : `false`
