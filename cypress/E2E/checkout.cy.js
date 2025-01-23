import Home from "../support/pages/home.page";
import pageCart from "../support/pages/cart.page";
import pageCheckout from "../support/pages/checkout.page";
import pageOverview from "../support/pages/overview.page";

const homePage = new Home()
const cart = new pageCart()
const checkout = new pageCheckout()
const overview = new pageOverview()

describe('Validando formulário Checkout', () => {
    let firstName = 'Nome'
    let lastName = 'Sobrenome'
    let postalCode = '32489671'

    beforeEach('', () => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
        cy.addProduct()
        homePage.clickCart()
        cart.clickCheckout()
    })

    it('Não é possível avançar sem preencher o formulário', () => {
        checkout.clickContinue()
        cy.get(checkout.error).should('be.visible')
        cy.get(checkout.error).contains('Error: First Name is required')
    })

    it('Não é possível avançar preenchendo apenas nome', () => {
        checkout.typeFirstName(firstName)
        checkout.clickContinue()
        cy.get(checkout.error).should('be.visible')
        cy.get(checkout.error).contains('Error: Last Name is required')
    })

    it('Não é possível avançar preenchendo apenas nome e sobrenome', () => {
        checkout.typeFirstName(firstName)
        checkout.typeLastName(lastName)
        checkout.clickContinue()
        cy.get(checkout.error).should('be.visible')
        cy.get(checkout.error).contains('Error: Postal Code is required')
    })

    it('É possível avançar preenchendo corretamente o formulário', () => {
        cy.typeForm(firstName, lastName, postalCode)
        overview.pageOverview()   
    })
})