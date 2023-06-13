///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Label extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} label`);
    }

}

export default Label;