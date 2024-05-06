import {header} from "../POM/header/header.js";
import {searchPage} from "../POM/searchResults/searchResults.js";
import {cart} from "../POM/cart/cart.js";

const searchProductName = 'սրճեփ{enter}';

describe('Cart', () => {
    beforeEach(() => {
        cy.visit('');
    })

    describe('Add to Cart', () => {
        it('should add to cart using the icon in search results page', () => {
            header.elements.searchInputField().should('exist').and('be.visible');
            header.typeInSearchField(searchProductName);
            searchPage.elements.addToCartButton().should('exist').and('be.visible');
            searchPage.elements.addToCartButton().click({force: true});
            searchPage.elements.addBasketPopup().should('exist').and('be.visible');
             searchPage.elements.productPrice().contains('1 200');
            cart.elements.basket().should('exist').and('be.visible');
            cart.elements.basket().click();
            cart.elements.basketTotalPrice().contains('1 200');
        })
    })

    describe('Remove from cart', () => {
        it('should remove from cart', () => {
            header.elements.searchInputField().should('exist').and('be.visible');
            header.typeInSearchField(searchProductName);
            searchPage.elements.addToCartButton().should('exist').and('be.visible');
            searchPage.elements.addToCartButton().click({force: true});
            searchPage.elements.addBasketPopup().should('exist').and('be.visible');
            cart.elements.basket().should('exist').and('be.visible');
            cart.elements.basket().click();
            cart.elements.basketTotalPrice().contains('1 200');
            cart.elements.removeFromBasket().should('exist').and('be.visible');
            cart.elements.removeFromBasket().click();
            cart.elements.basket().click();
            cart.elements.emptyBasket().should('exist').and('be.visible');
            cart.elements.emptyBasket().contains(' Ձեր զամբյուղը դատարկ է')
        })
    })
})
