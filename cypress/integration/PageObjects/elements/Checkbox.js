///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Checkbox extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} checkbox`);
    }

    checkCheckbox() {
        this.getElement().check();
    }

    uncheckCheckbox() {
        this.getElement().uncheck();
    }

    isCheckboxChecked() {
        this.getElement().should("be.checked");
    }

    isCheckboxUnchecked() {
        this.getElement().should("not.be.checked");
    }

}

export default Checkbox;