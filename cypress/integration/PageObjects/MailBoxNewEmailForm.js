///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import Link from "./elements/Link";
import TextBox from "./elements/TextBox"

class MailBoxNewEmailForm extends BaseForm  {

    constructor() {
        super();
        this.sendBtn = new Button("#mailSend" , "Send button");
        this.attachmentBtn= new Button("a.GCSDBRWBISB.GCSDBRWBJSB:nth-child(2)" , "Send button");
        this.toTxb = new TextBox("#mailTo", "To text box");
        this.subjectTxb = new TextBox("#mailSubject", "Subject text box");
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

}

export default MailBoxNewEmailForm;