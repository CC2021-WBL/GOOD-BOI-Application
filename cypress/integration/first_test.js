describe('My First Test', () => {
  it('Log in and log out', () => {
    cy.visit(Cypress.env('server'));
    cy.contains('Zaloguj się').click();
    cy.url().should('include', '/login');
    cy.get('input[id="email"]').type(Cypress.env('randomUserLogin'));
    cy.get('input[id="password"]').type(Cypress.env('randomUserPassword'));
    cy.contains('ZALOGUJ SIĘ').click();
    cy.contains('WYLOGUJ SIĘ').click();
  });
});
