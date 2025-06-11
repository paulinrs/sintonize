describe('Timer controlado com clock', () => {
    it('Valida sequência 4-7-8', () => {
        // Passo 1: Acessar a página da respiração guiada
        cy.selectMenuByText('Respiração Guiada');

        cy.get('.texto-container > h1')
        .should('have.text', 'Respiração guiada');

        // Passo 2: Clicar para iniciar a animação
        cy.get('#texto-respiracao').click();


        cy.contains('INSPIRE', { timeout: 6000 }).should('be.visible');
        cy.contains('SEGURE', { timeout: 10000 }).should('be.visible');
        cy.contains('EXPIRE', { timeout: 10000 }).should('be.visible');
        cy.contains('INSPIRE', { timeout: 10000 }).should('be.visible');

        // Passo 3: Clicar para encerrar a animação
        cy.get('#texto-respiracao').click();


    });
});




