///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class TextField extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} text field`);
    }

    clearTextField() {
        this.getElement().clear();
    }

    typeInTextField(text) {
        this.getElement().type(text);
    }

    clearAndTypeField(text) {
        this.clearTextField();
        this.typeInTextField(text);
    }

}

export default TextField;