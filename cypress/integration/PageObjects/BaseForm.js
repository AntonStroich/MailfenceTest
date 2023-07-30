///<reference types = 'Cypress' />

class BaseForm {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
        
    }

    getLocator() {
        return this.locator;
    }

    getForm() {
        return cy.get(this.getLocator());
    }
}

export default BaseForm;