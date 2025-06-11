describe('escrever no campo de pesquisa', () => {
    it('string ', () => {
        cy.visit('/')

        cy.get('#searchInput').type('Respiração Guiada')
    })

    it('string com acento é cedilha', () => {
        cy.visit('/')

        cy.get('#searchInput').type('ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ')


    })
})