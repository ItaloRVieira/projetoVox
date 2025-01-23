export default class pageFinish {
    typeOrderH1 = '.complete-header'
    typeOrderP = '.complete-text'
    typeOrderImg = '.pony_express'

    pageFinish(){
        cy.get(this.typeOrderH1).should('be.visible')
        cy.get(this.typeOrderH1).contains('THANK YOU FOR YOUR ORDER')
        cy.get(this.typeOrderP).should('be.visible')
        cy.get(this.typeOrderP)
        .contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get(this.typeOrderImg).should('be.visible')

    }
}