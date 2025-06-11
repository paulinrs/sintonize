// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectMenuByText', (menuText) => {
  cy.visit('/')
  cy.get('li')
    .contains(menuText)
    .should('be.visible')
    .click()
})


Cypress.Commands.add('quizPart1', () => {

    cy.get('#id_statement_1_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_4').check();
    cy.get('#nextBtn').click();
})

Cypress.Commands.add('quizPart2', () => {

    cy.get('#id_statement_1_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_4').check();
    cy.get('#nextBtn').click();

})

Cypress.Commands.add('quizPart3', () => {

    cy.get('#id_statement_1_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_2').check();
    cy.get('#nextBtn').click();

})

Cypress.Commands.add('quizPart4', () => {

    cy.get('#id_statement_1_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_0').check();
    cy.get('#nextBtn').click();
})

Cypress.Commands.add('quizPart5', () => {

    cy.get('#id_statement_1_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_0').check();
    cy.get('#nextBtn').click();
})

Cypress.Commands.add('toSend', () => {

    cy.get('#id_statement_12_0').check();
    cy.get('#sendBtn').click();
    cy.get('#modalTitle')
    .should('be.visible')

})

Cypress.Commands.add('never', () => {

    cy.get('#id_statement_1_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_0').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_12_0').check();
    cy.get('#sendBtn').click();

})

Cypress.Commands.add('rarely', () => {

    cy.get('#id_statement_1_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_1').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_12_1').check();
    cy.get('#sendBtn').click();

})

Cypress.Commands.add('sometimes', () => {

    cy.get('#id_statement_1_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_2').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_12_2').check();
    cy.get('#sendBtn').click();

})

Cypress.Commands.add('often', () => {

    cy.get('#id_statement_1_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_3').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_12_3').check();
    cy.get('#sendBtn').click();

})

Cypress.Commands.add('always', () => {

    cy.get('#id_statement_1_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_2_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_3_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_4_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_5_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_6_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_7_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_8_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_9_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_10_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_11_4').check();
    cy.get('#nextBtn').click();

    cy.get('#id_statement_12_4').check();
    cy.get('#sendBtn').click();

})

Cypress.Commands.add('selectMenuByText', (menuText) => {
  cy.visit('/')
  cy.get('li')
    .contains(menuText)
    .should('be.visible')
    .click()
})
