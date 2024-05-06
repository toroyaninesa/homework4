Cypress.Commands.add('clickOutside', () =>  {
    return cy.get('body').click(0,0);
});
