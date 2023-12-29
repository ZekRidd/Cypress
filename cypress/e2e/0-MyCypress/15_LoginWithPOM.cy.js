import HomePage from "../POM/HomePage.cy";
import LoginPage from "../POM/LoginPage.cy"

describe('Page Object Model', () => {

    it('Login Test', () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()
        cy.visit('https://qa.qualitydemy.com/')
        homePage.getLoginLink().click()

        loginPage.getUserEMail()
        loginPage.getPasswordBox()
        loginPage.getLoginButton().click()

    });

});