describe("Keypad", () => {
    it("should works", () => {
        cy.visit("/")
        cy.get(".button").should('be.visible')
    })
})