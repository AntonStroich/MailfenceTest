///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";

class MailList extends BaseForm {

    constructor() {
        super(`Mail list`);
        this.locator = "#mailList";
    }
 
}

export default MailList;