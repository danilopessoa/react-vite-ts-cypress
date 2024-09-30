// cypress/e2e/Input.cy.ts
describe('Input Component', () => {
  it('should render the input component', () => {
    cy.visit('/signup');
    cy.get('input[name="username"]').should('be.visible');
  });

  it('should accept text input', () => {
    cy.visit('/signup');
    cy.get('input[name="username"]').type('Hello, World!');
    cy.get('input[name="username"]').should('have.value', 'Hello, World!');
  });
});
