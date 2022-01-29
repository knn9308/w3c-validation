import BadPage from '../object_pages/BadPageObject'

When('I navigate to Bad page', () => {
    cy.navigateTo(BadPage.badPageURL)
})

Then('The response code is 404', () => {
    cy.verifyStatusCode(404)
})

Then('I verify all valid links have response code 200', () => {
    cy.getAllValidLinks()
    cy.get('@validLinks').each(link => {
        cy.request({
            url: link
        }).then((response) => {
            expect(response.status).eq(200)

        })
    })
})

Then('I verify 1 link with status code 4xx', () => {
    cy.getAllInvalidLinks()
    cy.get('@invalidLinks').then(val => {
        expect(val.length).eq(1)
        cy.log(val)
    })
})