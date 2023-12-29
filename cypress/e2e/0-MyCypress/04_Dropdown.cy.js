describe('Dropdown Locate', () => {

    it('Dropdown Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(11) > a').click()
        cy.get('#dropdown').select('Option 1').should('have.value',('1'))

    });
});