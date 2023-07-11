///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Label from "../elements/Label";

class List extends BaseForm {

    constructor(name, locator) {
        super(name);
        this.locator = locator;
        this.itemTitle = new Label(locator, name);
    }

    getList() {
        cy.log(this.locator);
        return cy.get(this.locator);
    }

    findItemByText(text) {
       return this.getList().contains(text);
    }

    selectItemByText(text) {
        this.findItemByText(text).click();
    }

    getItemTitle() {
        cy.log(this.itemTitle.locator);
        return this.getList().find(this.itemTitle.locator);
    }

    getItemTitleByIndex(index) {
        return this.getItemTitle().eq(index);
    }

}

export default List;