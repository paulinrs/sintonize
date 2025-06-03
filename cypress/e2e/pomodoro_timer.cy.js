describe('Pomodoro Timer', () => {
    let clock;

    beforeEach(() => {

        cy.clock().then((clk) => {
            clock = clk; // Guarda o clock para restaurar depois
        });
    });

    it('deve contar 25 minutos e validar se o tempo realmente chegou a 00:00 ', () => {
        cy.selectMenuByText('Pomodoro')
        cy.get('h2').should('contain', 'Foque no que importa');
        cy.get('.pomodoro-focus-text > p').should('contain', 'Use o método Pomodoro');
        cy.get('#pomodoro').should('contain', 'Pomodoro');
        cy.get('.cronometer-container').should('contain', '25:00');
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
        cy.visit('/pomodoro.html')
        cy.get('h2').should('contain', 'Foque no que importa');
        cy.get('.pomodoro-focus-text > p').should('contain', 'Use o método Pomodoro');
        cy.get('#long-break')
            .should('contain', 'Pausa Longa')
            .click();
        cy.get('.cronometer-container').should('contain', '15:00');
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
        cy.visit('/pomodoro.html')
        cy.get('h2').should('contain', 'Foque no que importa');
        cy.get('.pomodoro-focus-text > p').should('contain', 'Use o método Pomodoro');
        cy.get('#short-break')
            .should('contain', 'Pausa Curta')
            .click();
        cy.get('.cronometer-container').should('contain', '05:00');
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
