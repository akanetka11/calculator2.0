describe("History", () => {
    it("should works", () => {
        cy.visit("/")
        cy.get(".history").should('be.visible')
    })
})