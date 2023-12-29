describe('Before Each', () => {

    beforeEach(() => {
        cy.visit('https://www.google.com')
    });

    it('Title Test', () => {

        cy.title().should('eq','Google')
        cy.title().should('include','Google')
    });

    it('URL Test', () => {
        cy.url().should('include','google')
    });
});