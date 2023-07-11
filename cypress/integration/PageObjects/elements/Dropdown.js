///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Dropdown extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} dropdown`);
    }

    getDdn() {
        return cy.get(this.locator);
    }

    selectOptionByText(textOption, isForseTrue = true) {
        this.getDdn().contains(textOption).click({force: isForseTrue});
    }

}

export default Dropdown;