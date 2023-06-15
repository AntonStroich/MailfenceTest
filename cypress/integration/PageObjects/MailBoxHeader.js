///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";

class MailBoxHeader extends BaseForm  {

    constructor() {
        super();
        this.MessagesBtn = new Button("div#nav-mail", "Messages button");
        this.UserBtn = new Button("div[class = 'GCSDBRWBNE user GCSDBRWBGE']", "User button");
     }

    clickMessagesBtn() {
        this.MessagesBtn.clickElement();
        cy.wait(3000);
    }

    clickUserBtn() {
        this.UserBtn.clickElement();
    }
}

export default MailBoxHeader;