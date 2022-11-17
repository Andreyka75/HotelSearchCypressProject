///<reference types="Cypress"/>

describe('job-cafe sanity spec ', { defaultCommandTimeout: 10000 }, () => {
    // it('test job page with 10 sec',{defaultCommandTimeout:10000},()=>{
    //     cy.visit('job-page')
    //     cy.get('[class="post-item clearfix"]').should("be.visible")
    // })
    // it('test job page with 1 sec',{defaultCommandTimeout:650},()=>{
    //     cy.visit('http://167.99.178.249:3000/job-page')
    //     cy.get('[class="post-item clearfix"]',{timeout:1000}).should("be.visible")
    // })
    // it('test job page searh for QA position',{defaultCommandTimeout:10000},()=>{
    //     cy.visit('http://167.99.178.249:3000/job-page')
    //     // cy.get('[name="position"]').type('QA',{force: true}).should('be.visible')
    //     // cy.get('[type="submit"]').contains('search').click({force: true})
    //     cy.searchForPositions('QA')
    //     cy.get('[class="post-item clearfix"]').contains('QA').should("be.visible")
    // })
    // it('test job page searh for SAP position',{defaultCommandTimeout:30000},()=>{
    //     cy.visit('http://167.99.178.249:3000/job-page')
    //     // cy.get('[name="position"]').type('SAP',{force: true}).should('be.visible')
    //     // cy.get('[type="submit"]').contains('search').click({force: true})
    //     cy.searchForPositions('SAP')
    //     cy.get('[class="post-item clearfix"]').contains('SAP').should("be.visible")
    // })
    it("test job page searh for position by three criteries",{defaultCommandTimeout:30000}, () => {
        cy.visit('http://167.99.178.249:3000/job-page')
        cy.searchForPositionsByTreeFields('QA', "USA", "Apple")
        cy.get('[class="post-item clearfix"]').contains('QA').should("be.visible")
        cy.get('[stroke="currentColor"]').contains('USA').should("be.visible")
        cy.get('p').contains('Apple').should('be.visible')
    })
})