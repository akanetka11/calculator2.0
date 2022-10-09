describe("Display", () => {
    it("should works", () => {
        cy.visit("/")
        cy.get(".display").should('be.visible')
    })
})