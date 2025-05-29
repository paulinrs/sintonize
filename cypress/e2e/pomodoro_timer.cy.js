describe('Pomodoro Timer', () => {
    let clock;

    beforeEach(() => {
        cy.visit('/pomodoro.html');
        cy.clock().then((clk) => {
            clock = clk; // Guarda o clock para restaurar depois
        });
    });

    it('deve contar 25 minutos e validar se o tempo realmente chegou a 00:00 ', () => {
        cy.get('#action-button > img').click();
        cy.tick(25 * 60 * 1000 - 1000);
        cy.get('.cronometer-container').should('contain', '00:01');
        // Agora volta ao tempo real
        cy.then(() => {
            clock.restore(); // Restaura o relógio para o tempo real
        });
        cy.get('#action-button > img').click();
        cy.get('#action-button > img').click();
        cy.wait(2600);
        cy.get('.cronometer-container').should('contain', '00:00');

    });

    it('deve contar 15 minutos e validar se o tempo realmente chegou a 00:00 ', () => {
        cy.get('#long-break').click();
        cy.get('#action-button > img').click();
        cy.tick(15 * 60 * 1000 - 1000);
        cy.get('.cronometer-container').should('contain', '00:01');
        // Agora volta ao tempo real
        cy.then(() => {
            clock.restore(); // Restaura o relógio para o tempo real
        });
        cy.get('#action-button > img').click();
        cy.get('#action-button > img').click();
        cy.wait(2600);
        cy.get('.cronometer-container').should('contain', '00:00');

    });

    it('deve contar 5 minutos e validar se o tempo realmente chegou a 00:00 ', () => {
        cy.get('#short-break').click();
        cy.get('#action-button > img').click();
        cy.tick(5 * 60 * 1000 - 1000);
        cy.get('.cronometer-container').should('contain', '00:01');
        // Agora volta ao tempo real
        cy.then(() => {
            clock.restore(); // Restaura o relógio para o tempo real
        });
        cy.get('#action-button > img').click();
        cy.get('#action-button > img').click();
        cy.wait(2600);
        cy.get('.cronometer-container').should('contain', '00:00');


    });
});
