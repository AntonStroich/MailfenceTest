///<reference types = 'Cypress' />
import EmailForm from "../messages_page/EmailForm";
import Label from "../elements/Label";
import Link from "../elements/Link";

class ExistedEmailForm extends EmailForm  {

    constructor() {
        super(`div.GCSDBRWBBTB`,`Existed email form`);
        this.subjectLbl = new Label("div.GCSDBRWBCRC span:last-of-type", "Subject");
        this.attachmentArrowLink = new Link(`b.icon-Arrow-down`, `Arrow`);
     }


    getSubjectLbl() {
        return this.subjectLbl.getElement()
    }

    getAttachmentArrowLnk() {
        return cy.get(this.attachmentArrowLink.locator);
    }

    getAttachmentLnkArrowLinkByIndex(index) {
        return this.getAttachmentArrowLnk().eq(index);
    }

    clickAttachmentLnkArrowLinkByIndex(index) {
        cy.log(`Clicking ${this.attachmentArrowLink} for the attachment #${index + 1}`);
        this.getAttachmentLnkArrowLinkByIndex(index).click({force: true});
    }
}

export default ExistedEmailForm;