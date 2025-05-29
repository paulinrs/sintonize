describe('escrever no campo de pesquisa', () => {
    it('string ', () => {
        cy.visit('/')

        cy.get('#searchInput').type('Teste de Burnout')
    })

    it('string com acento é cedilha', () => {
        cy.visit('/')

        cy.get('#searchInput').type('ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ')


    })
})