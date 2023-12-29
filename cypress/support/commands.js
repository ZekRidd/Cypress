// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('QualityDemyLogin',(username,password)=>{
    cy.visit('https://qa.qualitydemy.com/login')
    cy.get('#login-email').type(username)
    cy.get('#login-password').type(password)
    
})

Cypress.Commands.add('amazonSearch',(productName)=>{

    cy.visit('https://www.amazon.com')
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()
})