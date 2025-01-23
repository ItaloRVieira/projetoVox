export default class pageCart {
    list = '.cart_item'
    buttonCheckout = '.btn_action'

    clickCheckout(){
        cy.get(this.buttonCheckout).click()
    }
}