import pageLogin from "../support/pages/login.page";
import Home from "../support/pages/home.page";
import pageCheckout from "../support/pages/checkout.page";

const homePage = new Home()
const login = new pageLogin()
const checkout = new pageCheckout()

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

Cypress.Commands.add('typeForm', (firstName, lastName, postalCode) => {
    checkout.typeFirstName(firstName)
    checkout.typeLastName(lastName)
    checkout.typePostalCode(postalCode)
    checkout.clickContinue()
})