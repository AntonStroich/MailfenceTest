///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import Link from "./elements/Link";

class MailBoxNewEmailForm extends BaseForm  {

    constructor() {
        super();
        this.sendBtn = new Button("#mailSend" , "Send button");
        this.attachmentLnk = new Link("a.GCSDBRWBISB.GCSDBRWBJSB:nth-child(2)" , "Send button")
     }



    clickSendBtn() {
        this.sendBtn.clickElement();
    }

    clickAttachmentsLnk() {
        this.attachmentLnk.clickElement();
    }

}

export default MailBoxNewEmailForm;