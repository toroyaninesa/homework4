import {header} from "../POM/header/header.js";
import {searchPage} from "../POM/searchResults/searchResults.js";


const searchProductName = 'ProductName';
const existingProductName = 'սրճեփ';

describe('Search', () => {
    beforeEach(() => {
        cy.visit('');
    })

    it('should open the detailed search form and redirect to search results page', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(searchProductName);
        header.elements.searchPopUp().should('exist').and('be.visible');
        header.typeInSearchField('{enter}');
        cy.url().should('equal', `https://domus.am/?s=${searchProductName}`);
    })

    it('should close the popup when clicked outside of the modal', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(searchProductName);
        header.elements.searchPopUp().should('exist').and('be.visible');
        header.elements.searchPopUp().clickOutside();
        header.elements.searchPopUp().should('not.be.visible');
    })

    it('detailed search options should be present', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(searchProductName);
        header.typeInSearchField('{enter}');
        searchPage.elements.sortButton().should('exist').and('be.visible');
        searchPage.elements.priceButton().should('exist').and('be.visible');
        searchPage.elements.AllFilters().should('exist').and('be.visible');
        searchPage.elements.productAvailability().should('exist').and('be.visible');
    })

    it('should correctly filter out results which are available when clicked the availability toggle', () => {
        header.elements.searchInputField().should('exist').and('be.visible');
        header.typeInSearchField(existingProductName);
        header.typeInSearchField('{enter}');
        searchPage.elements.specificProductAvailability().contains('Առկա');
        searchPage.elements.productAvailability().should('exist').and('be.visible');
        searchPage.elements.productAvailability().click();
        searchPage.elements.specificProductAvailability().contains('Առկա չէ');
    })
})

