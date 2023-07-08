///<reference types = 'Cypress' />

class BaseElement {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    getElement() {
        return cy.get(this.locator);
    }

    clickElement() {
        this.getElement().click();
    }

}

export default BaseElement;