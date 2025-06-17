const { Pizza } = require('../models/pizza');

class Commande {
  constructor(id) {
    this.id = id;
    this.pizzas = [];
  }

  ajouterPizza(pizza) {
    if (!(pizza instanceof Pizza)) {
      throw new Error("Objet invalide, ce n'est pas une pizza");
    }
    this.pizzas.push(pizza);
  }

  afficherCommande() {
    console.log(`--- Commande #${this.id} ---`);
    this.pizzas.forEach((pizza, index) => {
      console.log(`${index + 1}.`);
      pizza.afficher();
    });
  }

  getTotal() {
    // Exemple : chaque pizza coûte 10€, prix fixe
    return this.pizzas.length * 10;
  }
}

class CommandeManager {
  constructor() {
    if (CommandeManager.instance) {
      return CommandeManager.instance;
    }

    this.commandes = [];
    this.compteurId = 1;

    CommandeManager.instance = this; // Mémorise l’unique instance
  }

  creerCommande() {
    const commande = new Commande(this.compteurId++);
    this.commandes.push(commande);
    return commande;
  }

  afficherToutesLesCommandes() {
    this.commandes.forEach(cmd => {
      cmd.afficherCommande();
      console.log(`Total: ${cmd.getTotal()} €\n`);
    });
  }

  // Permet de réinitialiser l'état du gestionnaire
  reset() {
    this.commandes = [];
    this.compteurId = 1;
    CommandeManager.instance = null;
  }
}

module.exports = CommandeManager;
