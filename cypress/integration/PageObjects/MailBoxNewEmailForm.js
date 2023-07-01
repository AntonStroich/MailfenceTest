///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import TextBox from "./elements/TextBox";
import Dropdown from "./elements/Dropdown";

class MailBoxNewEmailForm extends BaseForm  {

    constructor() {
        super(`Mail Box New email form`);
        this.sendBtn = new Button("#mailSend" , "Send");
        this.attachmentBtn= new Button("a.GCSDBRWBISB.GCSDBRWBJSB:nth-child(2)" , "Attachment");
        this.toTxb = new TextBox("#mailTo", "To");
        this.subjectTxb = new TextBox("#mailSubject", "Subject");
        this.attachmentDdn = new Dropdown(".GCSDBRWBNQ.menu", "Attachment");
     }

    clickSendBtn() {
        cy.log(`Clicking on ${this.sendBtn.name} from ${this.name}`);
        this.sendBtn.clickElement();
    }

    clickAttachmentsBtn() {
        cy.log(`Clicking on ${this.attachmentBtn.name} from ${this.name}`);
        this.attachmentBtn.clickElement();
    }

    populateToTxb(email) {
        cy.log(`Filling the ${this.toTxb.name} from ${this.name}`);
        this.toTxb.clearAndType(`${email}{enter}`);
    }

    populateSubjectTxb(subject) {
        cy.log(`Filling the ${this.subjectTxb.name} from ${this.name}`);
        this.subjectTxb.clearAndType(subject);
    }

    selectOptionByTextFromAttachmentDdn(textOption, isForseTrue) {
        cy.log(`Selecting a value from the ${this.attachmentDdn.name}`);
        this.attachmentDdn.selectOptionByText(`${this.attachmentDdn.locator} .GCSDBRWBFR`, textOption, isForseTrue);
    }

}

export default MailBoxNewEmailForm;