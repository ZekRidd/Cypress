describe('Login Test', () => {
    it.skip('', () => {
        cy.visit('https://qa.qualitydemy.com/')

        cy.get('.cookieButton > a').click() //Cookies accept

        cy.get('.btn-sign-in-simple').click() //Login button 

        cy.get('#login-email').type('mb@babayigit.net')

        cy.get('#login-password').type('M123456.b')

        cy.get('#sign_up > :nth-child(3) > .btn').click() //Login button login element
        
    });

    it('Login Test with Command', () => {
        cy.QualityDemyLogin('mb@babayigit.net','M123456.b{enter}')
        
    });
});