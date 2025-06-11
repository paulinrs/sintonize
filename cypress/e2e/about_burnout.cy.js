describe('Trilha', () => {

    it('Seção de Diagnóstico.', () => {
        cy.selectMenuByText('Sobre o Burnout')

        cy.get('.burnout-trilha-text > h1')
            .should('have.text', 'Burnout');

        cy.get('.o-que-e-burnout-title > h2')
            .should('have.text', 'O que é a Síndrome de Burnout?');

        cy.get('.texto-sintomas > h1')
            .should('have.text', 'Principais Sintomas');
        const textosEsperados = [
            'Distanciamento Mental do Trabalho:',
            'Falta de energia e exaustão:',
            'Redução de Eficácia Profissional:',
            'Sintomas Físicos:'
        ];
        cy.get('.titulo-sintoma').each(($el, index) => {
            cy.log(`Verificando sintoma ${index + 1}`);
            cy.wrap($el)
                .scrollIntoView() // Faz a interface focar no elemento
                .should('be.visible')
                .and('contain.text', textosEsperados[index]);
        });
        cy.get('.diagnostico-section > h2')
            .should('have.text', 'Como é Feito o Diagnóstico?');

    })

})