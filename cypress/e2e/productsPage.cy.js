describe("Ürün sayfası testleri", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Ürün detay sayfasına yönlendir", () => {
    cy.get('[href="/products"]').click();
    cy.get('[data-cy="incele-link"]').first().click();
    cy.get('[data-cy="detail-header"]').should(
      "have.text",
      "Products Detail Page:"
    );
    cy.get('[data-cy="product-name"]').should("have.text", "Ms. Mercedes Haag");
  });
});
