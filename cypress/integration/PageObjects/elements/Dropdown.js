///<reference types = 'Cypress' />
import BaseElement from "./BaseElement";

class Dropdown extends BaseElement {

    constructor(locator, name) {
        super(locator, `${name} dropdown`);
    }

    selectOptionByText(locatorOption, textOption, isForseTrue = true) {
        cy.contains(locatorOption, textOption).click({force: isForseTrue});
    }

}

export default Dropdown;