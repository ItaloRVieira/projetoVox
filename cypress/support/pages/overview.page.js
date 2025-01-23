export default class pageOverview {
    labelOvewview = '.subheader'
    list = '.cart_list'
    itemTotal = '.summary_subtotal_label'
    tax = '.summary_tax_label'
    total = '.summary_total_label'
    buttonFinish = '.btn_action'
    buttonCancel = '.cart_cancel_link'

    clickFinish(){
        cy.get(this.buttonFinish).click()
    }

    clickCancel(){
        cy.get(this.buttonCancel).click()
    }

    pageOverview(){
        cy.get(this.labelOvewview).should('be.visible')
        cy.get(this.list).should('be.visible')
        cy.get(this.itemTotal).should('be.visible')
        cy.get(this.tax).should('be.visible')
        cy.get(this.total).should('be.visible')
    }
}