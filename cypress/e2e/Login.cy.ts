describe('Login Page', () => {
  it('should display the login page', () => {
    cy.visit('/');
    cy.contains('Faça Login em sua contaa').should('be.visible');
  });

  it('should login with fake credentials', () => {
    cy.visit('/');
    cy.get('input[name="username"]').type('walter');
    cy.get('input[name="password"]').type('walter123');
    cy.get('button[type="submit"]').click();
  });

  xit('should navigate to the signup page when the signup link is clicked', () => {
    cy.visit('/');
    cy.get('a[href="/signup"]').click();
    cy.url().should('include', '/signup');
  });

});
