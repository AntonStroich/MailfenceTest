///<reference types = 'Cypress' />
import MailBoxMainArea from "../mail_box/MailBoxMainArea";
import Link from "../elements/Link";
import Dropdown from "../elements/Dropdown";

class EmailForm extends MailBoxMainArea  {

    constructor(locator) {
        super(locator,`Email form`);
        this.attachmentLnk = new Link("a.GCSDBRWBJRB", "Attachment");
        this.attachmentDdn = new Dropdown(".GCSDBRWBNQ.menu", "Attachment");
     }

    getAttachmentLnk() {
        return cy.get(this.attachmentLnk.locator);
    }

    getAttachmentDdn() {
        return cy.get(this.attachmentDdn.locator);
    }

    getAttachmentLnkByIndex(index) {
        return this.getAttachmentLnk().eq(index);
    }

    selectFromAttachmentDdnByText(text) {
        cy.wait(1000); // fails without cy.wait(); the current solution needs to be replaced
        cy.log(`Selecting a value from the ${this.attachmentDdn.name}`);
        this.attachmentDdn.selectOptionByText(text);
    }

}

export default EmailForm;