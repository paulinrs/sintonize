describe('home', () => {
  it('sintonize deve estar online', () => {
    cy.visit('/')

    cy.title().should('eq', 'Sintonize')
  })

  it('botão inicio', () => {
    cy.visit('/sondagem.html')
    cy.get('li:nth-child(1) > a')
    .should('be.visible')
    .click()
    cy.get('.Titulo-saude-mental')
    .should('contain', 'Priorize Sua Saúde Mental no Trabalho')
    
    
   })
})

