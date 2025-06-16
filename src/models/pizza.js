class Pizza {
  constructor(nom, ingredients) {
    this.nom = nom;
    this.ingredients = ingredients;
  }

  afficher() {
    console.log(`Pizza ${this.nom} avec : ${this.ingredients.join(', ')}`);
  }
}

class PizzaFromage extends Pizza {
  constructor() {
    super("Fromage", ["mozzarella", "emmental", "parmesan"]);
  }
}

class PizzaVegetarienne extends Pizza {
  constructor() {
    super("Végétarienne", ["tomate", "poivrons", "oignons", "olives"]);
  }
}

class PizzaPepperoni extends Pizza {
  constructor() {
    super("Pepperoni", ["sauce tomate", "mozzarella", "pepperoni"]);
  }
}

// Export des classes pour les utiliser dans d'autres fichiers
module.exports = {
  Pizza,
  PizzaFromage,
  PizzaVegetarienne,
  PizzaPepperoni
};
