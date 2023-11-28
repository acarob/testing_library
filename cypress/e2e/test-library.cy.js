describe("Testing site for banrep library", () => {
  beforeEach(() => {
    cy.visit("https://www.pnliafi.com.ar");
  });
  it("Must have a logo", () => {
    cy.get(".header-image").should("be.visible");
  });
  it("Must hover on Nosotros", () => {
    cy.get("#menu-menu-1 > .menu-item-36074").trigger("mouseover");
  });
  // it("Must have 5 options on Nosotros", () => {
  //   cy.get('#menu-menu-1 > .menu-item-36074 > [href="https://pnliafi.com/que-es-iafi/"] > .dropdown-menu-toggle').should("have.length", 5);
  // });
  it("Must hover on Formacion", () => {
    cy.get("#menu-menu-1 > .menu-item-34995 > :nth-child(1)").trigger(
      "mouseover"
    );
  });
  it("Must have a navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").should("be.visible");
  });
});
