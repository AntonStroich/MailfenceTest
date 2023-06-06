///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";

class MailNavigationBar extends BaseForm  {

    constructor() {
        super();
        this.MessagesBtn = new Button("div#nav-mail", "Messages button");
        this.UserBtn = new Button("div[class = 'GCSDBRWBNE user GCSDBRWBGE']", "User button");
     }

    clickMessagesBtn() {
        this.MessagesBtn.clickElement();
    }

    clickUserBtn() {
        this.UserBtn.clickElement();
    }
}

export default MailNavigationBar;