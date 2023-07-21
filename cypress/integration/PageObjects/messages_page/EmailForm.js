///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Link from "../elements/Link";



class EmailForm extends BaseForm  {

    constructor(locator) {
        super(locator,`Email form`);
        this.attachmentLnk = new Link("a.GCSDBRWBJRB", "Attachment");
     }

    getAttachmentLnk() {
        return cy.get(this.attachmentLnk.locator);
    }

    getAttachmentLnkByIndex(index) {
        return this.getAttachmentLnk().eq(index);
    }

}

export default EmailForm;