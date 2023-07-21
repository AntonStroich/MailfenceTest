///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Label from "../elements/Label";

class List extends BaseForm {

    constructor(locator) {
        super(locator, `List`);
        this.itemTitle = new Label(locator, `Item Title`);
    }

    getList() {
        cy.log(this.locator);
        return cy.get(this.locator);
    }

    findItemByText(text) {
       return this.getList().contains(text);
    }

    selectItemByText(text) {
        cy.log(`Selecting an item by ${text}`);
        this.findItemByText(text).click();
    }

    getItemTitle() {
        cy.log(this.itemTitle.locator);
        return this.getList().find(this.itemTitle.locator);
    }

    getItemTitleByIndex(index) {
        return this.getItemTitle().eq(index);
    }

    selectItemByIndex(index) {
        cy.log(`Selecting an item by ${index}`);
        this.getItemTitleByIndex(index).click();
    }

}

export default List;