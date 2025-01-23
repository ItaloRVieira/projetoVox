export default class pageProduct {
    addCart = '.btn_primary'
    removeCart = '.btn_secondary'
    back = '.inventory_details_back_button'
    Cart = '#shopping_cart_container'

    addProduct() {
        cy.get(this.addCart).click()
    }

    clickBack(){
        cy.get(this.back).click({force: true})
    }

    clickRemove(){
        cy.get(this.removeCart).click()
    }

    clickCart(){
        cy.get(this.Cart).click()
    }
}