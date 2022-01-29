import HtmlcssPage from '../object_pages/HtmlcssPageObject'

When('I navigate to htmlcss page', () => {
    cy.navigateTo(HtmlcssPage.htmlcssURL)
})

Then('The response code is 200', () => {
    cy.verifyStatusCode(200)
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
        expect(val.length).eq(0)
    })
})