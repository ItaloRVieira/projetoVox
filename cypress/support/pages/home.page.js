export default class Home {
    labelProduct = '.product_label'
    productList = '.inventory_list'
    productSort = '.product_sort_container'
    cart = '#shopping_cart_container'
    cartProductOne = ':nth-child(1) > .pricebar > .btn_primary'
    cartProductTwo = ':nth-child(2) > .pricebar > .btn_primary'
    removeOne = ':nth-child(1) > .pricebar > .btn_secondary'
    removeTwo = ':nth-child(2) > .pricebar > .btn_secondary'
    productOne = '#item_4_title_link > .inventory_item_name'
    productTwo = '#item_0_title_link > .inventory_item_name'
    counter = '.fa-layers-counter'

    homePage(){
        cy.get(this.labelProduct).should('be.visible')
        cy.get(this.productList).should('be.visible')
        cy.get(this.productSort).should('be.visible')
    }

    addProductOne(){
        cy.get(this.cartProductOne).click()
    }

    addProductTwo(){
        cy.get(this.cartProductTwo).click()
    }

    removeProductOne(){
        cy.get(this.removeOne).click()
    }

    removeProductTwo(){
        cy.get(this.removeTwo).click()
    }

    clickProductOne(){
        cy.get(this.productOne).click()
    }

    clickProductTwo(){
        cy.get(this.productTwo).click()
    }

    clickCart(){
        cy.get(this.cart).click()
    }

}