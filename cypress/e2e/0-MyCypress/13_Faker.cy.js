/// <reference types="Cypress" />
import { faker } from '@faker-js/faker' 
describe('Faker Use', () => {

    //SETUP 
    //npm install --save-dev @faker-js/faker

    it('AutomationExerciseFaker', () => {


        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        const firstName = faker.person.firstName('male')
        const lastName=faker.person.lastName()
        let email=faker.internet.email()

        cy.get('[data-qa="signup-name"]').type(firstName + ' ' + lastName)

        cy.get('[data-qa="signup-email"]').type(email)

        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender1').click()

        let password=faker.internet.password()
        cy.get('[data-qa="password"]').type(password)
        cy.get('[data-qa="first_name"]').type(firstName)
        cy.get('[data-qa="last_name"]').type(lastName)

        let address=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(address)

        cy.get('[data-qa="country"]').select(1)

        let state = faker.location.state()
        cy.get('[data-qa="state"]').type(state)

        let city = faker.location.city()
        cy.get('[data-qa="city"]').type(city)

        let zipcode = faker.location.zipCode()
        cy.get('[data-qa="zipcode"]').type(zipcode)

        let phoneNumber = faker.phone.number()
        cy.get('[data-qa="mobile_number"]').type(phoneNumber)

        cy.get('[data-qa="create-account"]').click()

        cy.get('b').should('have.text','Account Created!')



    });
});