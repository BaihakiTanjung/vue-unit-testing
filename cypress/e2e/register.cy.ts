describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("h1").should("contain", "Vue Unit Testing");

    // button with id
    cy.get("#register").click();

    // form input with id
    cy.get("#username").type("test");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("test");
    cy.get("#confirmPassword").type("test");

    // click button
    cy.get("#submit").click();

    // check if form show
    cy.get("#success").should("be.visible");
  });
});
