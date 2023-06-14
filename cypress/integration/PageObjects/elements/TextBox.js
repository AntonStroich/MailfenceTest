///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class TextBox extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} text box`);
    }

    clearTxb() {
        this.getElement().clear();
    }

    typeInTxb(text) {
        this.getElement().type(text);
    }

    clearAndType(text) {
        this.clearTxb();
        this.typeInTxb(text);
    }

}

export default TextBox;