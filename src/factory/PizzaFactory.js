const { PizzaFromage, PizzaVegetarienne, PizzaPepperoni } = require('../models/pizza');

class PizzaFactory {
  static createPizza(type) {
    switch (type.toLowerCase()) {
      case "fromage":
        return new PizzaFromage();
      case "vegetarienne":
        return new PizzaVegetarienne();
      case "pepperoni":
        return new PizzaPepperoni();
      default:
        throw new Error(`Type de pizza inconnu : ${type}`);
    }
  }
}

module.exports = PizzaFactory;
