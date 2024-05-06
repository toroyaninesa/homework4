import {HeaderLocators as headerLocators} from "./headerLocators.js";

class Header {
    elements = {
        searchInputField: () => cy.get(headerLocators.searchInputField),
        searchPopUp: () => cy.get(headerLocators.searchPopUp),
    }

     typeInSearchField(productName) {
         this.elements.searchInputField().eq(0).type(productName);
     }
}

export const header = new Header();