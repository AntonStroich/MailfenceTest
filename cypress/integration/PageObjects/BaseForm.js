///<reference types = 'Cypress' />

class BaseForm {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

}

export default BaseForm;