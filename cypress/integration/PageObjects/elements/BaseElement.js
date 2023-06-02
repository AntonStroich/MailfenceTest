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

    isElementVisible() {
        cy.get(this.locator).should("be.visible");
    }

    isElementNotVisible() {
        cy.get(this.locator).should("not.be.visible");
    }

    isElementNotExist() {
        cy.get(this.locator).should("not.exist");
    }

    isElementHasValidName() {
        cy.get(this.locator).should(`have.value, ${this.name}`);
   }

}

export default BaseElement;