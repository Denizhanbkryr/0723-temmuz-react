describe("Product Form Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("basic form fill", () => {
    // ürün ekleme sayfasını aç
    cy.get('[href="/create-product"]').click();
    // form doldur
    cy.get('[name="name"]').type("oyuncak 1");
    cy.get('[data-cy="desc-input"]').type("muhteşem bir oyuncak 1");
    cy.get('[name="img"]').type(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kaptanoyuncak.com%2FUploads%2FUrunResimleri%2Fbuyuk%2Foyuncak-bebekler-emekleyen-oyuncak-bebek-3503.jpeg&f=1&nofb=1&ipt=7224136b02abcdd6ac195a5f9e3f4123bdeb9fffc404a5c4206153f10afcdce8&ipo=images"
    );
    cy.get('[name="price"]').type("300");
    cy.get('[name="stock"]').type("20");
    cy.get('[type="submit"]').should("be.enabled");
  });
});
