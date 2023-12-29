describe('Hover Over Uses', () => {
    it('', () => {
        cy.visit('/')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
    });
});