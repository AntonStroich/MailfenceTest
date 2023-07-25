///<reference types = 'Cypress' />
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import EmailForm from "../messages_page/EmailForm";

class NewEmailForm extends EmailForm  {

    constructor(locator,) {
        super(locator,`New email form`);
        this.sendBtn = new Button("#mailSend" , "Send");
        this.attachmentBtn= new Button("a.GCSDBRWBISB.GCSDBRWBJSB:nth-child(2)" , "Attachment");
        this.toTxb = new TextBox("#mailTo", "To");
        this.subjectTxb = new TextBox("#mailSubject", "Subject");
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

    populateSubjectTxb(subjectEmail) {
        cy.log(`Filling the ${this.subjectTxb.name} from ${this.name}`);
        this.subjectTxb.clearAndType(subjectEmail);
    }

}

export default NewEmailForm;