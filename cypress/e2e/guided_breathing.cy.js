describe('Timer controlado com clock', () => {
    it('validando elementos', () => {
        
        cy.selectMenuByText('Respiração Guiada');

        cy.get('.texto-container > h1')
        .should('have.text', 'Respiração guiada');
        cy.get('.cabecalho-instrucoes > h1')
        .should('have.text', 'Acalme sua mente com a técnica de respiração 4-7-8');
        cy.get('.instrucoes-titulo')
        .should('have.text', 'Como praticar a respiração guiada');
        cy.get('.instrucoes-lista')
        .should('be.visible');
        cy.get('.contagem-tempo-titulo')
        .should('have.text', 'Contagem de Tempo');
        cy.get('.contagem-tempo')
        .should('be.visible');
        cy.get('#texto-respiracao')
        .should('have.text', 'COMEÇAR');
    });
});




