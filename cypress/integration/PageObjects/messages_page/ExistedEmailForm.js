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

    getAttachmentLnkArrowLinkByIndex(index) {
        return this.getAttachmentLnkByIndex(index).find(this.attachmentArrowLink);
    }

    clickAttachmentLnkArrowLinkByIndex(index) {
        this.getAttachmentLnkArrowLinkByIndex(index).click();
    }
}

export default ExistedEmailForm;