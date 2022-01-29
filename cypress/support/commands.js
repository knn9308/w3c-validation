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
Cypress.Commands.add('navigateTo', (relURL) => {
    cy.intercept(relURL).as('intURL')
    cy.visit(relURL, {failOnStatusCode:false})
})

Cypress.Commands.add('verifyStatusCode', (code) => {
    cy.get('@intURL').then((val) => {
        expect(val.response.statusCode).to.eq(code)
    })
})

Cypress.Commands.add('getAllValidLinks', () => {
    var validLinks = []
    var scode 
    cy.get('a').each(link => {
        if(link.prop('href') != '' && !(link.prop('href').includes('mailto')) && !(link.prop('href').includes('ev.buaa'))) {
            cy.request({
                url: link.prop('href'),
                failOnStatusCode: false
            }).then(response => {
                if(response.status < 400) {
                    validLinks.push(link.prop('href'))
                }
            })
        }
        cy.wrap(validLinks).as('validLinks')
    }) 
})

Cypress.Commands.add('getAllInvalidLinks', () => {
    var invalidLinks = []
    var scode 
    cy.get('a').each(link => {
        if(link.prop('href') != '' && !(link.prop('href').includes('ev.buaa'))) {
            cy.request({
                url: link.prop('href'),
                failOnStatusCode: false
            }).then(response => {
                if(response.status >= 400) {
                    invalidLinks.push(link.prop('href'))
                }
            })
        }
        cy.wrap(invalidLinks).as('invalidLinks')
    }) 
})
