///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import TextBox from "./elements/TextBox";
import Dropdown from "./elements/Dropdown";

class MailBoxNewEmailForm extends BaseForm  {

    constructor() {
        super();
        this.sendBtn = new Button("#mailSend" , "Send button");
        this.attachmentBtn= new Button("a.GCSDBRWBISB.GCSDBRWBJSB:nth-child(2)" , "Attachment button");
        this.toTxb = new TextBox("#mailTo", "To text box");
        this.subjectTxb = new TextBox("#mailSubject", "Subject text box");
        this.attachmentDdn = new Dropdown(".GCSDBRWBNQ.menu", "Attachment dropdown");
     }

    clickSendBtn() {
        this.sendBtn.clickElement();
    }

    clickAttachmentsBtn() {
        this.attachmentBtn.clickElement();
    }

    populateToTxb(email) {
        this.toTxb.clearAndType(`${email}{enter}`);
    }

    populateSubjectTxb(subject) {
        this.subjectTxb.clearAndType(subject);
    }

    selectOptionByTextFromAttachmentDdn(textOption, isForseTrue) {
        this.attachmentDdn.selectOptionByText(`${this.attachmentDdn.locator} .GCSDBRWBFR`, textOption, isForseTrue);
    }

}

export default MailBoxNewEmailForm;