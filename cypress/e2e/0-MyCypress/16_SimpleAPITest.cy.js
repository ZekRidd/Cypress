describe('Api Assertion', () => {

    it('Api Assertion', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('headers').its('date').should('include','Wed')
    });

    it('Api Assertion 2', () => {
        cy.request({
        url:'https://jsonplaceholder.cypress.io/comments',
        method: 'GET'
          }).its('headers').its('date').should('include','Wed')
    });
});