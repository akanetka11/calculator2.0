describe("Header", () => {
    it("should works", () => {
        cy.visit("/")
        cy.get("nav").find("ul").children().should('be.visible')
    })
})