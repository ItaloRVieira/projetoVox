export default class Home {
    labelProduct = '.product_label'
    productList = '.inventory_list'
    productSort = '.product_sort_container'

    homePage(){
        cy.get(this.labelProduct).should('be.visible')
        cy.get(this.productList).should('be.visible')
        cy.get(this.productSort).should('be.visible')
    }
}