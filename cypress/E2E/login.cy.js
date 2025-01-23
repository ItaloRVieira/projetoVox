import pageLogin from "../support/pages/login.page";
import Home from "../support/pages/home.page";

const login = new pageLogin()
const homePage = new Home()

describe('Validações de login', () => {
    it('É possível realizar login informando username standard_user', () =>{
        let name = "standard_user"
        let password = "secret_sauce"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
        homePage.homePage()

    })

    it('É possível realizar login informando username locked_out_user', () =>{
        let name = "locked_out_user"
        let password = "secret_sauce"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
        homePage.homePage()

    })

    it('É possível realizar login informando username problem_user', () =>{
        let name = "problem_user"
        let password = "secret_sauce"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
        homePage.homePage()

    })

    it('É possível realizar login informando username performance_glitch_user', () =>{
        let name = "performance_glitch_user"
        let password = "secret_sauce"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
        homePage.homePage()

    })

    it('Não é possível realizar login informando senha inválida', () =>{
        let name = "performance_glitch_user"
        let password = "inválida"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/')
        cy.get(login.loginError).contains('Username and password do not match any user in this service')
    })

    it('Não é possível realizar login informando username inválido', () =>{
        let name = "inválido"
        let password = "secret_sauce"
        cy.visit('')
        login.typeUsername(name)
        login.typePassword(password)
        login.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/')
        cy.get(login.loginError).contains('Username and password do not match any user in this service')
    })
})