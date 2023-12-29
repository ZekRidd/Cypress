describe('Checkbox', () => {
    it.skip('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(6) > a').click()
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
    });

    it('Checkbox order', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(3000)
        cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')
        cy.wait(3000)
        cy.get("input[type='checkbox']").first().check().should('be.checked')

    });
});