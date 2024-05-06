import {CartLocators} from "./cartLocators.js";

class Cart {
    elements = {
        basket: () => cy.get(CartLocators.basket),
        basketTotalPrice: () => cy.get(CartLocators.basketTotalPrice),
        removeFromBasket: () => cy.get(CartLocators.removeFromBasket),
        emptyBasket: () => cy.get(CartLocators.emptyBasket),
    }
}

export const cart = new Cart();