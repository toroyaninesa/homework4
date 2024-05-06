import {searchResultsLocators} from "./searchResultsLocators.js";

class SearchResults {
    elements = {
        sortButton: () => cy.get(searchResultsLocators.sortButton),
        priceButton: () => cy.get(searchResultsLocators.price),
        AllFilters: () => cy.get(searchResultsLocators.allFilters),
        productAvailability: () => cy.get(searchResultsLocators.productAvailability),
        specificProductAvailability: () => cy.get(searchResultsLocators.specificProductAvailability).eq(0),
        addToCartButton: () => cy.get(searchResultsLocators.addToCart).eq(0),
        addBasketPopup: () => cy.get(searchResultsLocators.addBasketPopup),
        productPrice: () => cy.get(searchResultsLocators.productPrice)
    }
}

export const searchPage = new SearchResults();