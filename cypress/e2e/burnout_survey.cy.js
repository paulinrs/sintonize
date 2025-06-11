describe('Teste de Burnout', () => {

    it('Navegação e Validação do Formulário.', () => {
        cy.selectMenuByText('Sondagem de Burnout')
        cy.get('.btn-text').click()
        cy.get('#nextBtn').click()
        cy.get('#error-1')
            .should('be.visible')
            .should('contain', 'selecione uma opção para prosseguir.')
        cy.get('#id_statement_1_0').check();
        cy.get('#nextBtn').click();
        cy.get('#prevBtn').click();
        cy.get('#id_statement_1_2').check();
        cy.get('#question-1 > .radio-container > :nth-child(3) > .ml-3')
            .should('have.text', 'Às Vezes');
    })

    it('Tudo sob controle!', () => {
        cy.visit('/sondagem.html')
        cy.get('.btn-text').click()
        cy.quizPart1()
        cy.toSend()
            .should('have.text', 'Tudo sob controle! Continue assim')
    })

    it('Fique de olho!', () => {
        cy.visit('/sondagem.html')
        cy.get('.btn-text').click()
        cy.quizPart2()

        cy.toSend()
        .should('have.text', 'Fique de olho! Pequenos sinais de estresse')

})

    it('Possível Risco de Burnout', () => {
        cy.visit('/sondagem.html')
        cy.get('.btn-text').click()
        cy.quizPart3()

        cy.toSend()
            .should('have.text', 'Possível Risco de Burnout! Hora de Prevenir')

    })

    it('Risco Alto de Burnout!', () => {
        cy.visit('/sondagem.html')
        cy.get('.btn-text').click()
        cy.quizPart4()

        cy.toSend()
            .should('have.text', 'Risco Alto de Burnout! Procure Ajuda')

 })

    it('Nível Crítico de Burnout!', () => {
        cy.visit('/sondagem.html')
        cy.get('.btn-text').click()
        cy.quizPart5()

        cy.toSend()
            .should('have.text', 'Nível Crítico de Burnout! Procure Ajuda')


    })

})
