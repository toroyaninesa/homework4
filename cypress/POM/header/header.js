import {HeaderLocators as headerLocators} from "./headerLocators.js";

class Header {
    elements = {
        searchInputField: () => cy.get(headerLocators.searchInputField),
        searchPopUp: () => cy.get(headerLocators.searchPopUp),
        searchPopupSubmitButton: () => cy.get(headerLocators.searchPopupSubmitButton)
    }

    performSearch(productName) {
        this.typeInSearchField(`${productName}{enter}`);
    }

     typeInSearchField(productName) {
         this.elements.searchInputField().eq(0).type(productName);
     }
}

export const header = new Header();