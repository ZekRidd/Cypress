/// <reference types="Cypress" />
describe('Multiple Windows', () => {

    it('Attribute Remove', () => {
        

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr','target').click() //Farkli sayfa acmadan main page uzerinden devam etmek icin

        cy.get('h3').should('have.text','New Window')
    });
});