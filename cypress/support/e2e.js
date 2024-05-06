import './commands';

beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.on('uncaught:exception', (err) => {
        return false;
    });
})