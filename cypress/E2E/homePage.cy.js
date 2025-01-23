import pageLogin from "../support/pages/login.page";
import Home from "../support/pages/home.page";
import pageProduct from "../support/pages/product.page";
import pageCart from "../support/pages/cart.page";

const login = new pageLogin()
const homePage = new Home()
const product = new pageProduct()
const cart = new pageCart()

describe('Validação de adição de produtos ao carrinho', () => {
    beforeEach(() => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
    })
    it('Adicionando um produto ao carrinho pela homepage', () => {
        homePage.addProductOne()
        homePage.clickCart()
    })

    it('Adicionando n produtos ao carrinho pela homepage', () => {
        homePage.addProductOne()
        homePage.addProductTwo()
        homePage.clickCart()
    })

    it('Adicionando um produto ao carrinho pela página do produto', () =>{
        homePage.clickProductOne()
        product.addProduct()
        product.clickCart()
       
    })

    it('Adicionando n produtos ao carrinho pela página do produto', () => {
        homePage.clickProductOne()
        product.addProduct()
        product.clickBack()
        homePage.clickProductTwo()
        product.addProduct()
        product.clickCart()
    })
})

describe('Validação de remoção de produtos ao carrinho', () => {
    beforeEach(() => {
        let name = "standard_user"
        let password = "secret_sauce"
        cy.login(name, password)
        cy.addProduct()
    })

    it('Removendo um produto do carrinho pela homepage', () => {
        homePage.removeProductOne()
        homePage.clickCart()
    })

    it('Removendo todos os produtos do carrinho pela homepage', () => {
        homePage.removeProductOne()
        homePage.removeProductTwo()
        homePage.clickCart()
        cy.get(cart.list).should('not.exist')
    })

})


