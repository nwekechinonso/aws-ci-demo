describe('Hello App', () => {
    it('loads homepage', () => {
      cy.visit('/');
      cy.contains('Hello World');
    });
  });
  