///<reference types = 'Cypress' />

class BaseForm {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
        
    }

    getForm() {
        return cy.get(this.locator);
    }
}

export default BaseForm;