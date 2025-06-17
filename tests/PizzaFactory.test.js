const PizzaFactory = require('../src/factory/PizzaFactory');
const {
  PizzaFromage,
  PizzaVegetarienne,
  PizzaPepperoni
} = require('../src/models/pizza');

describe("PizzaFactory", () => {
  test("doit créer une pizza Fromage", () => {
    const pizza = PizzaFactory.createPizza("fromage");
    expect(pizza).toBeInstanceOf(PizzaFromage);
    expect(pizza.nom).toBe("Fromage");
  });

  test("doit créer une pizza Végétarienne", () => {
    const pizza = PizzaFactory.createPizza("vegetarienne");
    expect(pizza).toBeInstanceOf(PizzaVegetarienne);
    expect(pizza.nom).toBe("Végétarienne");
  });

  test("doit créer une pizza Pepperoni", () => {
    const pizza = PizzaFactory.createPizza("pepperoni");
    expect(pizza).toBeInstanceOf(PizzaPepperoni);
    expect(pizza.nom).toBe("Pepperoni");
  });

  test("doit lancer une erreur pour un type inconnu", () => {
    expect(() => PizzaFactory.createPizza("tacos")).toThrow("Type de pizza inconnu : tacos");
  });
});
