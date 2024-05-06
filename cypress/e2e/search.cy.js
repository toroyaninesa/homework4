import {header} from "../POM/header/header.js";


const searchProductName = 'Product Name';

describe('Search', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://mc.yandex.ru/', {}).as('yandexAnalytics');
        cy.visit('');
    })

    it('should open the detailed search form and redirect to search results page', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(searchProductName);
        header.elements.searchPopUp().should('exist').and('be.visible');
        header.elements.searchPopupSubmitButton().should('exist').and('be.visible');
        header.elements.searchPopupSubmitButton().click();
        cy.url().should('equal', `https://domus.am/?s=${searchProductName}`);
    })

    it('should open the detailed search form and redirect to search results page', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(searchProductName);
        header.elements.searchPopUp().should('exist').and('be.visible');
        header.elements.searchPopUp().clickOutside()
    })
})