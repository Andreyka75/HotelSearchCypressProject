///<reference types="Cypress"/>

describe('the cars tab test will verify cars tab functionality ', () => {
    const car_tab = '[data-cy="Car"]';
    const location = '[name="location"]'
    const drop_off = '[name="dropoff"]'
    const list_of_cars = '[name="car-group"]'
    const drivers_age='[name="driver-age"]'


    before(() => {
        cy.visit('http://localhost:3000/')

    })
    beforeEach(() => {
        cy.get(car_tab).click()

    })


    it('navigate to the car tab', () => {

        cy.get(car_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(car_tab).invoke('text').should('eq', 'car')

    })
    it('choose location', () => {

        cy.get(location).type("Jerusalem").should("have.value", "Jerusalem")

    })

    it('choose drop-off date', () => {

        cy.get(drop_off).clear()
        cy.get(drop_off).type("08/12/2023").should("have.value","08/12/2023")
    })
    it('choose list of cars', () => {

        cy.get(list_of_cars).should("be.visible")
        cy.get(list_of_cars).select("Group 1",{force: true})
        cy.get('[title="Group 1"]').should("be.visible")
    })
    it('choose drivers age', () => {

        cy.get(drivers_age).should("be.visible")
        cy.get(drivers_age).select("26",{force: true})
        cy.get('[title="26"]').should("be.visible")
        cy.get(drivers_age).select("23",{force: true}).invoke('val').should("eq","23")
        cy.get(drivers_age).select("24",{force: true}).invoke('val').should("eq","24")
        cy.get(drivers_age).select("25",{force: true}).invoke('val').should("eq","25")
    })





})