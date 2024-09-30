describe('Signup Page', () => {
  it('should display the signup page', () => {
    cy.visit('/signup');

  });

  it('should signup with fake credentials', () => {
    cy.visit('/signup');
    cy.get('input[name="username"]').type('newuser');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('newpassword');
    cy.get('input[name="confirm-password"]').type('newpassword');
    cy.get('button[type="submit"]').click();
  });
});
