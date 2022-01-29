import ModalPage from '../object_pages/MultiModalPageObject'

When('I navigate to MultiModal page', () => {
    cy.navigateTo(ModalPage.MultiModalURL)
})

Then('The response code is 200', () => {
    cy.verifyStatusCode(200)
})

When('I visit MultiModal Access page', () => {
    cy.visit(ModalPage.MultiModalURL)
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
    })
})