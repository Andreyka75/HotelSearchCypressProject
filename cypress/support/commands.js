// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import selectors from '../support/selectors.js'

Cypress.Commands.add('searchForPositions', (position_name) => {
    cy.get(selectors.placeholder_position).type(position_name, { force: true }).should('be.visible')
    cy.get(selectors.search_button).contains('search').click({ force: true })
})
Cypress.Commands.add('searchForPositionsByTreeFields', (position_name,location_name,company_name) => {
    cy.get(selectors.placeholder_position).type(position_name, { force: true }).should('be.visible')
    cy.get(selectors.placeholder_location).type(location_name, { force: true }).should('be.visible')
    cy.get(selectors.placeholder_company).type(company_name, { force: true }).should('be.visible')
    cy.get(selectors.search_button).contains('search').click({ force: true })
})