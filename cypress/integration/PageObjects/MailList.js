///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";

class MailList extends BaseForm {

    constructor() {
        super(`Mail box User menu`);
        this.locator = "#mailList";
    }
 

}

export default MailList;