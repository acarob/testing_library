describe("Testing site for navigation bar", () => {
  beforeEach(() => {
    cy.visit("https://www.pnliafi.com.ar");
  });
  it("Must have a logo", () => {
    cy.get(".header-image").should("be.visible");
  });
  it("Must hover on Nosotros", () => {
    cy.get("#menu-menu-1 > .menu-item-36074").trigger("mouseover");
  });
  it("Must hover on Formacion", () => {
    cy.get("#menu-menu-1 > .menu-item-34995 > :nth-child(1)").trigger(
      "mouseover"
    );
  });
  it("Must have a navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").should("be.visible");
  });
  it("Must have Inicio option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("INICIO");
  });
  it("Must have Nosotros option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("NOSOTROS");
  });
  it("Must have Formaciones option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("FORMACIONES");
  });
  it("Must have Blog option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("BLOG");
  });
  it("Must have Contacto option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("CONTACTO");
  });
  it("Must have Whatsapp option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("WHATSAPP");
  });
  it("Must have Campus virtual option on the navigation bar", () => {
    cy.get("#site-navigation > .inside-navigation").contains("CAMPUS VIRTUAL");
  });
});

describe("Testing for the site appearance", () => {
  beforeEach(() => {
    cy.visit("https://www.pnliafi.com.ar");
  });
  it("Must have a heading", () => {
    cy.get(".gb-headline-71b48fa0").should("be.visible");
  });
  it("The title must match the data", () => {
    cy.get(".gb-headline-722f5f7b > strong").contains(
      "Instituto Americano de Formación e Investigación"
    );
  });
  it("The message must match", () => {
    cy.get(".gb-headline-07701ebb").contains("Seamos el CAMBIO");
  });
  it("The message must match", () => {
    cy.get(".gb-headline-0d937ab8").contains("que queremos ver en el MUNDO");
  });
  it("Must have two buttons", () => {
    cy.get(".gb-button-689ad621").should("be.visible");
    cy.get(".gb-button-95066cf9").should("be.visible");
  });
});
