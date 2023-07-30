///<reference types = 'Cypress' />

class BaseElement {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    getLocator() {
        return this.locator;
    }

    getElement() {
        return cy.get(this.getLocator());
    }

    clickElement() {
        this.getElement().click();
    }

}

export default BaseElement;