describe('Sondagen', () => {

    it('Banner “Como está sua Qualidade de Vida no Trabalho?', () => {

        cy.visit('/sondagem.html')
        cy.get('.main-title')
            .invoke('html')
            .then((html) => {
                // Substitui a quebra de linha <br> por espaço
                const textoComEspaco = html.replace(/<br\s*\/?>/gi, ' ')
                const textoSemTags = textoComEspaco.replace(/<[^>]*>/g, '')
                const textoNormalizado = textoSemTags.replace(/\s+/g, ' ').trim()

                expect(textoNormalizado).to.eq('Como está sua qualidade de vida no trabalho?')
            })

        cy.get('.hero-text')
            .should('be.visible')
        cy.get('.sondagem-title')
            .should('have.text', 'Você no Centro da Sua Jornada Profissional')

    })

    it('Um guia de reflexão para o trabalho', () => {

        cy.visit('/sondagem.html')
        cy.get('.reflexao-texto > h2')
            .should('have.text', 'Um guia de reflexão para o trabalho')
        cy.get('.reflexao-texto > p').should('be.visible')

        cy.get('[class^="card-"]').should('have.length', 6).each(($card) => {
            // Testa se o título está visível
            cy.wrap($card).find('.circle > h1').should('be.visible')
            // Testa se o parágrafo está visível
            cy.wrap($card).find('p').should('be.visible')
        })

        cy.get('.avaliacao-title')
            .should('have.text', 'Avalie sua satisfação geral')
        cy.get('.avaliacao-text > p').should('be.visible')
        cy.get('.regua-imagem').should('be.visible')

        cy.get('.health-burnout-title > h2')
            .should('have.text', 'Sua saúde importa, procure apoio se sentir sintomas de burnout')
        cy.get('.health-burnout-text > p').should('be.visible')
        cy.get('.health-burnout-container > img').should('be.visible')



    })

    it('Autoavaliação Inteligente', () => {

        cy.visit('/sondagem.html')
        cy.get('.img-autoavaliacao > img').should('be.visible')
        cy.get('.autoavaliacao-titulo-texto > h1')
            .should('have.text', 'Autoavaliação Inteligente')
        cy.get('.autoavaliacao-titulo-texto > p').should('be.visible')
        cy.get('.btn-text')
            .should('have.text', 'Iniciar Sondagem').click()
        cy.get('.header-title-forms')
            .should('have.text', 'Formulário de Identificação de Burnout')


    })

})


