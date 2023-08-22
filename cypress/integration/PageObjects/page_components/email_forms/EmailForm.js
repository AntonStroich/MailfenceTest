///<reference types = 'Cypress' />
import MainArea from "../../page_components/MainArea";
import Link from "../../elements/Link";
import Dropdown from "../../elements/Dropdown";

class EmailForm extends MainArea  {

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
        cy.log(`Selecting a value from the ${this.attachmentDdn.name}`);
        this.attachmentDdn.selectOptionByText(text);
    }

}

export default EmailForm;