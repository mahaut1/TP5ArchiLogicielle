const PizzaBuilder = require('../src/models/PizzaBuilder');
const { Pizza }    = require('../src/models/pizza');

describe('PizzaBuilder', () => {

  // Construction correcte de pizza 
  test('construit correctement une pizza personnalisée', () => {
    const pizza = new PizzaBuilder()
      .setNom('Savoyarde')
      .addIngredient('reblochon')
      .addIngredient('lardons')
      .addIngredient('oignons')
      .build();

    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.nom).toBe('Savoyarde');
    expect(pizza.ingredients).toEqual(
      expect.arrayContaining(['reblochon', 'lardons', 'oignons']),
    );
  });

  // Builder fluency 
  test('supporte le chaînage fluide des méthodes', () => {
    const builder = new PizzaBuilder();
    const result  = builder.setNom('Fluide').addIngredient('olives');
    expect(result).toBe(builder); // renvoie this
  });

  // Cas limites de la construction 
  describe('cas limites', () => {
    test('lance une erreur si aucun ingrédient', () => {
      expect(() =>
        new PizzaBuilder().setNom('Vide').build(),
      ).toThrow();
    });

    test('lance une erreur si nom vide', () => {
      expect(() =>
        new PizzaBuilder().addIngredient('champignon').build(),
      ).toThrow();
    });
  });
});
