//Cypress iFrame icin plugin kullanmamız gerekiyor
//npm install -D cypress-iframe
//e2e>> require('cypress-iframe') komutu eklememiz gerek

describe('iFrame Uses', () => {

    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded('#mce_0_ifr') //iFrame icinde olan alanın locate'i 

        cy.iframe().find('p').clear() //iFrame'i p tagları arasından alıp icindekileri siler

        cy.iframe().find('p').type('Have a nice day!') 

        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium')

        cy.log('Success')

        cy.screenshot()



    });
});