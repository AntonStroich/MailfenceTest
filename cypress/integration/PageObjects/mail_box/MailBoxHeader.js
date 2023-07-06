///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class MailBoxHeader extends BaseForm  {

    constructor() {
        super(`Mail Box header`);
        this.messagesBtn = new Button("div#nav-mail", "Messages");
        this.userBtn = new Button("div[class = 'GCSDBRWBNE user GCSDBRWBGE']", "User");
        this.documentsBtn = new Button("#nav-docs", "Documents");
     }

    clickMessagesBtn(timeout=1000) {
        cy.log(`Clicking on ${this.messagesBtn.name} from ${this.name}`);
        this.messagesBtn.clickElement();
        cy.wait(timeout);
    }

    clickDocumentsBtn(timeout=1000) {
        cy.log(`Clicking on ${this.documentsBtn.name} from ${this.name}`);
        this.documentsBtn.clickElement();
        cy.wait(timeout);
    }

    clickUserBtn() {
        cy.log(`Clicking on ${this.userBtn.name} from ${this.name}`);
        this.userBtn.clickElement();
    }
}

export default MailBoxHeader;