import pageLogin from "../support/pages/login.page";
import Home from "../support/pages/home.page";

const homePage = new Home()
const login = new pageLogin()

Cypress.Commands.add('login', (name, password) => {
    cy.visit('')
    login.typeUsername(name)
    login.typePassword(password)
    login.clickLogin()
})

Cypress.Commands.add('addProduct', () =>{
    homePage.addProductOne()
    homePage.addProductTwo()
})