    const CommandeManager = require('../src/manager/CommandeManager');
    const { PizzaFromage } = require('../src/models/pizza');
    const { Worker } = require('worker_threads');
    
    describe('CommandeManager – Singleton Pattern', () => {
    
      beforeEach(() => {
        // On ré-initialise l’instance entre deux tests
        new CommandeManager().reset();
      });
      
    // Vérification de l’instance unique 
      test('devrait toujours renvoyer la même instance (singleton)', () => {
        const m1 = new CommandeManager();
        const m2 = new CommandeManager();
        expect(m1).toBe(m2);
      });
    // Fonctionnalités de gestion des commandes 
      test('peut créer une commande, y ajouter / retirer des pizzas', () => {
        const manager   = new CommandeManager();
        const commande1 = manager.creerCommande();
    
        const pizza = new PizzaFromage();
        commande1.ajouterPizza(pizza);
    
        expect(manager.commandes.length).toBe(1);
        expect(commande1.pizzas[0]).toBe(pizza);
        expect(commande1.getTotal()).toBe(10);
      });
    });
    