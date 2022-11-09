///<reference types="Cypress"/>

describe('elements exists on the tab and has the correct text',()=>{

    // it('elements existance by get',()=>{

    //     cy.visit('http://localhost:3000/')
    //     cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
    //     cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
    //     cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
    //     cy.get('#tab1 > form > :nth-child(3)').should("be.visible")
    //     cy.get('.checkbox-row > .m-r-45').should("be.visible")
    //     cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
    //     cy.get('#tab1 > form > .btn-submit').should("be.visible")

    // })
    it('element existance by name',()=>{

        cy.visit('http://localhost:3000/')

        cy.get('[name="address"]').should("be.visible")
        cy.get('[name="check-in"]').should("be.visible")
        cy.get('[name="check-out"]').should("be.visible")
        cy.contains('traveller').should("be.visible")
        //cy.contains('Add a car').should("be.visible")
        cy.contains('Add a car').should("be.visible")
        cy.contains('Add a flight').should("be.visible")

    })

    it('correct text',()=>{
        cy.visit('http://localhost:3000/')

        cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text","Going to")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text","check-in")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text","check-out")
        cy.get(':nth-child(3) > .label').should("have.text","travellers")
        cy.get('#info').should("have.text","")
        //cy.get('.checkbox-row > .m-r-45').should("have.string","Add a flight")
        cy.get('#tab1 > form > .btn-submit').should("have.text","search")
    })

})
