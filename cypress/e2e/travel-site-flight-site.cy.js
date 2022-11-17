///<reference types="Cypress"/>

describe('the flight tab test will verify flights functionality', () => {

    const flight_tab = '[data-cy="Flight"]';
    const origin_placeholder = '[name="origin"]';
    const destination_placeholder = '[name="destination"]';
    const checkin = '#input-start-2';
    const checkout = '#input-end-2';

    before(() => {
        cy.visit('http://localhost:3000')
    })
    beforeEach(() => {
        cy.get(flight_tab).click()
    })

    after(() => {
        cy.log("after all")
    })
    afterEach(() => {
        cy.log("after each")
    })
    it('navigate to the flights tab', () => {


        cy.get(':nth-child(2) > .input--style-1').should("be.visible")
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flight_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flight_tab).invoke('text').should('eq', 'flight')

    })
    it('populates origin and destination', () => {

        cy.get(origin_placeholder).type("Paris").invoke('val').should('eq', 'Paris')
        cy.get(destination_placeholder).type("London").invoke('val').should('eq', 'London')
        // cy.get(origin_placeholder).invoke('val').should('eq','Paris')
        // cy.get(destination_placeholder).invoke('val').should('eq','London')

    })
    it('populates chek-in and check-out', () => {

        cy.get(checkin).type("10/02/2022").invoke('val').should('eq', '10/02/2022')
        cy.get(checkout).clear()
        cy.get(checkout).type("10/10/2022").invoke('val').should('eq', '10/10/2022')

    })
    it('check radio buttons', () => {

        cy.get('[id="business"]').click().should('be.checked')
        cy.get('[id="f_class"]').click().should('be.checked')
        cy.get('[id="economy"]').click().should('be.checked')
    })
})
