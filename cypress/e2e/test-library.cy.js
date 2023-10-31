describe("Testing site for banrep library", () => {
  beforeEach(() => {
    cy.visit("https://www.pnliafi.com.ar");
  });
  it("Must have a logo", () => {
    cy.get(".header-image").should("be.visible");
  });
  it("Must hover on Nosotros", () => {
    cy.get(
      '#menu-menu-1 > .menu-item-36074 > [href="https://pnliafi.com/que-es-iafi/"]'
    ).trigger("mouseover");
  });
  it("Must have 4 options on Nosotros", () => {
    cy.get(
      '#menu-menu-1 > .menu-item-36074 > [href="https://pnliafi.com/que-es-iafi/"]'
    ).should("have.length", 1);
  });
});
