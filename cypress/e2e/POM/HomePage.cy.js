import { Home } from "wd/lib/special-keys"

class HomePage{

    getLoginLink(){
        return cy.get('.btn-sign-in-simple')
    }
}

export default HomePage