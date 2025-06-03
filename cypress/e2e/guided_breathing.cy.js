describe('Respiração Guiada', () => {

    it('Executa o ciclo de respiração', () => {

        cy.selectMenuByText('Respiração Guiada')
        cy.get('#texto-respiracao').click();

        cy.get('#texto-respiracao')
            .should('have.text', 'INSPIRE');

        cy.get('#texto-respiracao')
            .should('have.text', 'SEGURE');
        cy.wait(8000);

        cy.get('#texto-respiracao')
            .should('have.text', 'EXPIRE');
        cy.get('#texto-respiracao').click();
    });
});

