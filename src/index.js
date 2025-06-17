const PizzaFactory = require('./pizzaFactory');
const PizzaBuilder = require('./PizzaBuilder');
const CommandeManager = require('./CommandeManager');

// Instancier le gestionnaire
const manager = new CommandeManager();

// Créer une commande
const commande1 = manager.creerCommande();

// Ajouter une pizza standard
commande1.ajouterPizza(PizzaFactory.createPizza("pepperoni"));

// Ajouter une pizza personnalisée
const builder = new PizzaBuilder();
const pizzaCustom = builder
  .setNom("Hawaïenne")
  .addIngredient("ananas")
  .addIngredient("jambon")
  .addIngredient("mozzarella")
  .build();

commande1.ajouterPizza(pizzaCustom);

// Afficher la commande
commande1.afficherCommande();
console.log("Total:", commande1.getTotal(), "€");

// Créer une autre commande
const commande2 = manager.creerCommande();
commande2.ajouterPizza(PizzaFactory.createPizza("fromage"));

// Afficher toutes les commandes
manager.afficherToutesLesCommandes();
