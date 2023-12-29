describe('Temel Cypress Komut', () => {

    it('First Test', () => {
        cy.visit('/') //Base url tanımlı değilse bu şekilde kullanabiliriz
        cy.visit('https://www.amazon.com')
    });

    it('Second Test', () => {
        cy.visit('/about-us')
        
    });

    it.only('Third Test', () => {
        cy.visit('/')
        cy.title().should('include','Classes')
        cy.title().should('contains','Courses')
        
    });
});