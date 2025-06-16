// index.js

const PizzaFactory = require('./pizzaFactory');

try {
  const pizza1 = PizzaFactory.createPizza("fromage");
  pizza1.afficher();

  const pizza2 = PizzaFactory.createPizza("vegetarienne");
  pizza2.afficher();

  const pizza3 = PizzaFactory.createPizza("pepperoni");
  pizza3.afficher();
} catch (error) {
  console.error("Erreur :", error.message);
}
