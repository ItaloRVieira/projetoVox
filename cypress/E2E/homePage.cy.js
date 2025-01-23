import Home from "../support/pages/home.page";
import pageProduct from "../support/pages/product.page";
import pageCart from "../support/pages/cart.page";

const homePage = new Home()
const product = new pageProduct()
const cart = new pageCart()

describe('Validação de adição de produtos ao carrinho', () => {
    let counter
    beforeEach(() => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
    })
    it('Adicionando um produto ao carrinho pela homepage', () => {
        homePage.addProductOne()
        cy.get(homePage.counter).invoke('text').then((item) => {
            counter = parseInt(item)
            expect(counter).to.eq(1)
        })
        homePage.clickCart()
        cy.get(cart.list).should('have.length', 1)
    })

    it('Adicionando n produtos ao carrinho pela homepage', () => {
        homePage.addProductOne()
        homePage.addProductTwo()
        cy.get(homePage.counter).invoke('text').then((item) => {
            counter = parseInt(item)
            expect(counter).to.eq(2)
        })
        homePage.clickCart()
        cy.get(cart.list).should('have.length', 2)
    })

    it('Adicionando um produto ao carrinho pela página do produto', () =>{
        homePage.clickProductOne()
        product.addProduct()
        cy.get(homePage.counter).invoke('text').then((item) => {
            counter = parseInt(item)
            expect(counter).to.eq(1)
        })
        product.clickCart()
        cy.get(cart.list).should('have.length', 1)
       
    })

    it('Adicionando n produtos ao carrinho pela página do produto', () => {
        homePage.clickProductOne()
        product.addProduct()
        product.clickBack()
        homePage.clickProductTwo()
        product.addProduct()
        cy.get(homePage.counter).invoke('text').then((item) => {
            counter = parseInt(item)
            expect(counter).to.eq(2)
        })
        product.clickCart()
        cy.get(cart.list).should('have.length', 2)
    })
})

describe('Validação de remoção de produtos ao carrinho', () => {
    let counter
    beforeEach(() => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
        cy.addProduct()
    })

    it('Removendo um produto do carrinho pela homepage', () => {
        homePage.removeProductOne()
        cy.get(homePage.counter).invoke('text').then((item) => {
            counter = parseInt(item)
            expect(counter).to.eq(1)
        })
        homePage.clickCart()
        cy.get(cart.list).should('have.length', 1)
    })

    it('Removendo todos os produtos do carrinho pela homepage', () => {
        homePage.removeProductOne()
        homePage.removeProductTwo()
        cy.get(homePage.counter).should('not.exist')
        homePage.clickCart()
        cy.get(cart.list).should('not.exist')
    })

})


