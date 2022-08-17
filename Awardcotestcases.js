describe('My Test Case', () => {
    it('Vverify title of the page', () => {
        //1.visiting website and make sure the title is Awardco: Make Employee Recognition More Rewarding
      cy.visit('https://www.award.co/')
      cy.title().should('eq', 'Awardco: Make Employee Recognition More Rewarding');

      //2.clicking on demo button in hero section and making sure it opens the demo window
      cy.get('.button w-button').click();
      cy.url().should('eq', 'https://www.award.co/demo');

      //3.clicking on Reimagine celebration and making sure it opens the celebration window

      cy.get('.button button-gold w-button').click();
      cy.url().should('eq', 'https://www.award.co/celebrate');
    })

  })
