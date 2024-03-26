describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get(".name");
    cy.get(".name").type("Kirull");
    cy.get(".name").should("have.value", "Kirull");
    cy.get(".greeting");
    if (new Date().getHours() == 11) {
      cy.get(".greeting").should("have.text", "Good morning,");
    }
  });
});
