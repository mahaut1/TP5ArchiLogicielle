const PizzaBuilder = require("./models/PizzaBuilder");

const builder = new PizzaBuilder();
const customPizza = builder
  .setNom("Custom Mix")
  .addIngredient("ananas")
  .addIngredient("fromage bleu")
  .addIngredient("champignons")
  .build();

customPizza.afficher();
