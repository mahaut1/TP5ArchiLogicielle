const PizzaFactory = require('./factory/PizzaFactory');
const PizzaBuilder = require('./models/PizzaBuilder');
const CommandeManager = require('./manager/CommandeManager');

// Singleton : même instance partout
const manager = new CommandeManager();

// === COMMANDE 1 ===
// Client prend une Pepperoni + une custom Hawaïenne
const commande1 = manager.creerCommande();

commande1.ajouterPizza(PizzaFactory.createPizza("pepperoni"));

const pizzaHawaienne = new PizzaBuilder()
  .setNom("Hawaïenne")
  .addIngredient("ananas")
  .addIngredient("jambon")
  .addIngredient("mozzarella")
  .build();

commande1.ajouterPizza(pizzaHawaienne);

// === COMMANDE 2 ===
// Client végétarien
const commande2 = manager.creerCommande();
commande2.ajouterPizza(PizzaFactory.createPizza("vegetarienne"));

// === COMMANDE 3 ===
// Client construit une pizza spéciale 4 fromages
const commande3 = manager.creerCommande();

const pizza4Fromages = new PizzaBuilder()
  .setNom("4 Fromages")
  .addIngredient("mozzarella")
  .addIngredient("gorgonzola")
  .addIngredient("parmesan")
  .addIngredient("chèvre")
  .build();

commande3.ajouterPizza(pizza4Fromages);
commande3.ajouterPizza(PizzaFactory.createPizza("fromage"));

// === AFFICHAGE GLOBAL ===
console.log("\n==============================");
console.log("RÉCAPITULATIF DES COMMANDES");
console.log("==============================\n");

manager.afficherToutesLesCommandes();

let totalGlobal = 0;
for (const commande of manager.commandes) {
  totalGlobal += commande.getTotal();
}
console.log("------------------------------");
console.log(`TOTAL GLOBAL : ${totalGlobal} €`);
console.log(`Commandes effectuées : ${manager.commandes.length}`);
console.log("==============================\n");
