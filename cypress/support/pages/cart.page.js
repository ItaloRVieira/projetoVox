export default class pageCart {
    list = '.cart_item'
    buttonCheckout = '.btn_action'
    priceItemOne = ':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price'
    priceItemTwo = ':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price'

    clickCheckout(){
        cy.get(this.buttonCheckout).click()
    }
}