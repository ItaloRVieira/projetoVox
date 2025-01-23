export default class pageCheckout {
    inputFirstName = '#first-name'
    inputLastName = '#last-name'
    inputPostalCode = '#postal-code'
    buttonContinue = '.btn_primary'
    error = '[data-test="error"]'

    typeFirstName(name){
        cy.get(this.inputFirstName).type(name)
    }

    typeLastName(lastName) {
        cy.get(this.inputLastName).type(lastName)
    }

    typePostalCode(postalCode){
        cy.get(this.inputPostalCode).type(postalCode)
    }

    clickContinue(){
        cy.get(this.buttonContinue).click()
    }
}