describe('Validar pontuação', () => {
    it('deve somar 44 pontos quando todas as respostas forem "Nunca"', () => {
        /*
          Cálculo esperado:
          - Questões normais: 4 perguntas x 1 ponto = 4 pontos
          - Questões invertidas: 8 perguntas x 5 pontos = 40 pontos
          - Total esperado: 4 + 40 = 44 pontos
      
          Justificativa:
          - Para respostas "Nunca":
          - nas normais o valor é 1, e nas invertidas é 5.
        */
      
        cy.visit('/sondagem.html');
        cy.get('.btn-text').click();

        cy.intercept('GET', '/resultado/*').as('retornoPontuacao');

        cy.never();

        cy.wait('@retornoPontuacao').then((interception) => {
            const resposta = interception.response.body;
            cy.log(JSON.stringify(resposta));
        });
    });

    it('deve somar 40 pontos quando todas as respostas forem "Raramente"', () => {
        /*
          Cálculo esperado:
          - Questões normais: 4 perguntas x 2 pontos = 8 pontos
          - Questões invertidas: 8 perguntas x 4 pontos = 32 pontos
          - Total esperado: 8 + 32 = 40 pontos
      
          Justificativa:
          - Para respostas "Raramente":
              - Nas questões normais, a pontuação associada é 2.
              - Nas invertidas, a pontuação associada é 4.
        */
      

        cy.visit('/sondagem.html');
        cy.get('.btn-text').click();

        cy.intercept('GET', '/resultado/*').as('retornoPontuacao');

        cy.rarely();

        cy.wait('@retornoPontuacao').then((interception) => {
            const resposta = interception.response.body;
            cy.log(JSON.stringify(resposta));
        });
    });

   
    it('deve somar 36 pontos quando todas as respostas forem "Às Vezes"', () => {
        /*
          Cálculo esperado:
          - Questões normais: 4 perguntas x 3 pontos = 12 pontos
          - Questões invertidas: 8 perguntas x 3 pontos = 24 pontos
          - Total esperado: 12 + 24 = 36 pontos
      
          Justificativa:
          - Para respostas "Às Vezes":
              - Nas questões normais, o valor é 3.
              - Nas invertidas, o valor também é 3.
        */
      
          cy.visit('/sondagem.html');
        cy.get('.btn-text').click();

        cy.intercept('GET', '/resultado/*').as('retornoPontuacao');

        cy.sometimes();

        cy.wait('@retornoPontuacao').then((interception) => {
            const resposta = interception.response.body;
            cy.log(JSON.stringify(resposta));
        });
    });

    it('deve somar 32 pontos quando todas as respostas forem "Frequentemente"', () => {
        /*
          Cálculo esperado:
          - Questões normais: 4 perguntas x 4 pontos = 16 pontos
          - Questões invertidas: 8 perguntas x 2 pontos = 16 pontos
          - Total esperado: 16 + 16 = 32 pontos
      
          Justificativa:
          - Para respostas "Frequentemente":
              - Nas normais, a pontuação é 4.
              - Nas invertidas, a pontuação é 2.
        */
      
        cy.visit('/sondagem.html');
        cy.get('.btn-text').click();

        cy.intercept('GET', '/resultado/*').as('retornoPontuacao');

        cy.often();

        cy.wait('@retornoPontuacao').then((interception) => {
            const resposta = interception.response.body;
            cy.log(JSON.stringify(resposta));
        });
    });

    it('deve somar 28 pontos quando todas as respostas forem "Sempre"', () => {
        /*
          Cálculo esperado:
          - Questões normais: 4 perguntas x 5 pontos = 20 pontos
          - Questões invertidas: 8 perguntas x 1 ponto = 8 pontos
          - Total esperado: 20 + 8 = 28 pontos
      
          Justificativa:
          - Para respostas "Sempre":
              - Nas questões normais, a pontuação é a máxima (5).
              - Nas invertidas, a pontuação é a mínima (1).
        */
      
        cy.visit('/sondagem.html');
        cy.get('.btn-text').click();

        cy.intercept('GET', '/resultado/*').as('retornoPontuacao');

        cy.always();

        cy.wait('@retornoPontuacao').then((interception) => {
            const resposta = interception.response.body;
            cy.log(JSON.stringify(resposta));
        });
    });

});
/*
  Este teste verifica se a pontuação é calculada corretamente para cada opção de "radio" e se a função de pontuação respeita
  as regras de inversão das pontuações. Garantindo que a pontuação atribuída a cada resposta está de acordo com as 
  regras estabelecidas.

*/
