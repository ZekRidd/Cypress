describe('Get Locate', () => {
    it('Cy.Get Command', () => {
        cy.visit('/')
        cy.get('#L2AGLb').click()
        cy.get('#APjFqb').type('Cypress{enter}')
        
    });
});