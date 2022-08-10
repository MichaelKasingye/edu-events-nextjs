describe("Navigation", () => {
  it("it should navigate to events page", () => {
    cy.visit("https://edu-events-kally.vercel.app/");
    cy.findByRole("navigation");
    cy.get(".navbar-nav")
      .findByRole("link", { name: /events/i })
      .click();
    cy.url().should("include", "/events");
    cy.get("h1").contains("Find your next experience");
  });
});

describe("Events page", () => {
  it("search form should be empty by default", () => {
    //     cy.visit("https://outboxevents.netlify.app/events");
    cy.visit("https://edu-events-kally.vercel.app/events");
    cy.findByRole("textbox").should("have.value", "");
  });
});
