///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Link extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} link`);
    }

}

export default Link;