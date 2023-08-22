///<reference types = 'Cypress' />
import Button from "../../elements/Button";
import TextBox from "../../elements/TextBox";
import EmailForm from "../email_forms/EmailForm";

class NewEmailForm extends EmailForm  {

    constructor() {
        super(`.GCSDBRWBMSB.GCSDBRWBN`,`New email form`);
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

    selectFromDocumentToolFromAttachmentDdnAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getDocuments`)) {
                request.alias = 'getDocuments';
            }
          });
        this.selectFromAttachmentDdnByText(`From document tool`);
        cy.wait(`@getDocuments`)
    }

    populateToTxb(email) {
        cy.log(`Filling the ${this.toTxb.name} from ${this.name}`);
        this.toTxb.clearAndType(`${email}{enter}`);
    }

    populateSubjectTxb(subjectEmail) {
        cy.log(`Filling the ${this.subjectTxb.name} from ${this.name}`);
        this.subjectTxb.clearAndType(subjectEmail);
    }

    sendEmailAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`putMessage`)) {
                request.alias = 'putMessage';
            }
          });
        this.clickSendBtn();
        cy.wait(`@putMessage`, {timeout: 30000});
    }

}

export default NewEmailForm;