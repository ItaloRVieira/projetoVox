export default class pageLogin {
    inputUsername = '#user-name'
    inputPassword = '#password'
    buttonLogin = '#login-button'
    loginError = '[data-test="error"]'

    typeUsername(name){
        cy.get(this.inputUsername).type(name)
    }
    typePassword(password){
        cy.get(this.inputPassword).type(password)
    }
    clickLogin(){
        cy.get(this.buttonLogin).click()
    }

}