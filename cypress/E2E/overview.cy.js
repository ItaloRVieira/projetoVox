import Home from "../support/pages/home.page";
import pageCart from "../support/pages/cart.page";
import pageOverview from "../support/pages/overview.page";
import pageFinish from "../support/pages/finish.page";

const homePage = new Home()
const cart = new pageCart()
const overview = new pageOverview()
const finish = new pageFinish()

describe('Validações de finalizar e cancelar compra', () => {
    let firstName = 'Nome'
    let lastName = 'Sobrenome'
    let postalCode = '32489671'
    let priceOne, priceTwo, soma, priceTotal

    beforeEach('', () => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
        cy.addProduct()
        homePage.clickCart()

        cy.get(cart.priceItemOne).invoke('text').then((price) => {
            priceOne = parseFloat(price.replace('$', '').trim())
        })
        cy.get(cart.priceItemTwo).invoke('text').then((price) => {
            priceTwo = parseFloat(price.replace('$', '').trim())
        })
        soma = priceOne + priceTwo
        cart.clickCheckout()
        cy.typeForm(firstName, lastName, postalCode)
    })
    it('Ao clicar em cancelar, usuário será redirecionado a home page', () => {
        overview.clickCancel()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

    })

    it('Ao clicar em finish, a compra é realizada com sucesso', () => {
        cy.get(overview.itemTotal).invoke('text').then((price) => {
            priceTotal = parseFloat(price.replace('Item total: $', '').trim())
            expect(priceTotal).to.eq(soma)
            overview.clickFinish()
            finish.pageFinish()

        })
    })
})