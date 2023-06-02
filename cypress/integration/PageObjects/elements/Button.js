///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Button extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} button`);
    }

}

export default Button;