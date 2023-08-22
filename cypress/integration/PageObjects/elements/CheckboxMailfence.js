///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class CheckboxMailfence extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} checkbox`);
    }

}

export default CheckboxMailfence;