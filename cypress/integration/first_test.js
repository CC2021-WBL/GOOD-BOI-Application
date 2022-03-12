import test_devices from '../test_devices';

test_devices.forEach(({ type, width, height }) => {
  describe(`First GoodBoi Test ${type}`, () => {
    beforeEach(() => {
      cy.viewport(width, height);
    });

    it('LandingPage', () => {
      cy.visit(Cypress.env('server'));

      cy.get('.fakebtn-header')
        .should('contain', 'Zaloguj się')
        .and('contain', 'Zarejestruj')
        .and('contain', 'portal good boi');
    });

    it('LoginPage', () => {
      cy.contains('Zaloguj się').click();
      cy.get('.navText').should('contain', 'Logowanie');
      cy.get('label').should('contain', 'Email').and('contain', 'Password');
      cy.get('#email').should('have.attr', 'placeholder', ' Email');
      cy.get('#password').should('have.attr', 'placeholder', ' Hasło');
      cy.get('.forgot-pass').should('contain', 'Zapomniałeś/aś hasła ?');
      cy.get('button').should('contain', 'ZALOGUJ SIĘ');
    });

    it('Logging in', () => {
      cy.get('#email').type(Cypress.env('zosiaUserLogin'));
      cy.get('#password').type(Cypress.env('zosiaUserPassword'));
      cy.contains('ZALOGUJ SIĘ').click();
    });

    it('UserPage', () => {
      cy.contains('KONTO ZAWODNIKA').click();

      cy.get('.desktop_only').should(
        'contain',
        'Przejdź do formularza zapisu na zawody.',
      );
    });

    it('Logging out', () => {
      if (type === 'figma mobile') {
        cy.get('.burger-wrapper').click();
      }
      cy.contains('Wyloguj się').click();
    });
  });
});
