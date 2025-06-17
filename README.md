# 🍕 TP Design Patterns – Système de Commande de Pizzas

Ce projet est un TP d'architecture logicielle qui met en œuvre les **design patterns** suivants en JavaScript (Node.js) :

- **Factory Pattern**
- **Builder Pattern**
- **Singleton Pattern**

## Design Patterns mis en œuvre

### Factory Pattern

Permet de créer différentes pizzas (`fromage`, `pepperoni`, `végétarienne`) via une interface unifiée :

```js
PizzaFactory.createPizza("pepperoni");
```

### Builder Pattern

Permet de construire dynamiquement une pizza personnalisée :

```js
new PizzaBuilder().setNom("Hawaïenne").addIngredient("ananas").build();
```

### Singleton Pattern

CommandeManager est implémenté en Singleton afin d'assurer qu’une seule instance contrôle toutes les commandes

## Lancer le projet

Assurez-vous d’avoir Node.js ≥ 18 installé.

### Installation

```
npm install
```

### Exécution

```
npm start
```

## Tests

Le projet utilise Jest pour les tests unitaires.

Lancer les tests :

```
npm test
```

Les tests couvrent :

Le respect du Singleton (CommandeManager)

Le fonctionnement du Builder (PizzaBuilder)

La création de pizzas standard via la Factory (PizzaFactory)

Les cas limites (erreurs attendues)
