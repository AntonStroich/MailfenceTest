///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";

class MailBoxHeader extends BaseForm  {

    constructor() {
        super();
        this.messagesBtn = new Button("div#nav-mail", "Messages button");
        this.userBtn = new Button("div[class = 'GCSDBRWBNE user GCSDBRWBGE']", "User button");
        this.documentsBtn = new Button("#nav-docs", "Documents button");
     }

    clickMessagesBtn(timeout=1000) {
        this.messagesBtn.clickElement();
        cy.wait(timeout);
    }

    clickDocumentsBtn(timeout=1000) {
        this.documentsBtn.clickElement();
        cy.wait(timeout);
    }

    clickUserBtn() {
        this.userBtn.clickElement();
    }
}

export default MailBoxHeader;