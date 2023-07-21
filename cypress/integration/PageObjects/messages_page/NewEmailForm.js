///<reference types = 'Cypress' />
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import Dropdown from "../elements/Dropdown";
import Label from "../elements/Label";
import EmailForm from "../messages_page/EmailForm";



class NewEmailForm extends EmailForm  {

    constructor(locator,) {
        super(locator,`Mail Box New email form`);
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

    populateSubjectTxb(subjectEmail) {
        cy.log(`Filling the ${this.subjectTxb.name} from ${this.name}`);
        this.subjectTxb.clearAndType(subjectEmail);
    }

    selectFromYourComputerOptionFromAttachmentDdn(text = 'From your computer') {
        cy.wait(1000); // fails without cy.wait(); the current solution needs to be replaced
        cy.log(`Selecting a value from the ${this.attachmentDdn.name}`);
        this.attachmentDdn.selectOptionByText(text);
    }

    selectFromDocumentToolOptionFromAttachmentDdn(text = 'From document tool') {
        cy.wait(1000); // fails without cy.wait(); the current solution needs to be replaced
        cy.log(`Selecting a value from the ${this.attachmentDdn.name}`);
        this.attachmentDdn.selectOptionByText(text);
    }

}

export default NewEmailForm;