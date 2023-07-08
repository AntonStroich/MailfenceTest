///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Label from "../elements/Label";

class MailList extends BaseForm {

    constructor() {
        super(`Mail list`);
        this.locator = "#mailList";
        this.mailTitle = new Label(`${this.locator} .listSubject`, `Items title from the ${this.name}`);
    }

    getMailTitle() {
        return this.mailTitle.getElement();
    }

    getMailTitleByIndex(index) {
        return this.getMailTitle().eq(index);
    }
 
}

export default MailList;