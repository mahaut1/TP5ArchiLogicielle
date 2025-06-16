const { Pizza } = require("./pizza");

class PizzaBuilder {
  constructor() {
    this.nom = "";
    this.ingredients = [];
  }

  setNom(nom) {
    this.nom = nom;
    return this; // interface fluide 
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    return this;
  }

  setIngredients(ingredients) {
    this.ingredients = ingredients;
    return this;
  }

  build() {
    if (!this.nom || this.ingredients.length === 0) {
      throw new Error("Nom et ingrédients doivent être définis");
    }
    return new Pizza(this.nom, this.ingredients);
  }
}
module.exports = PizzaBuilder;
