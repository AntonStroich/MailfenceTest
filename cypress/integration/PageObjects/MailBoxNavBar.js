///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";

class MailBoxNavBar extends BaseForm  {

    constructor() {
        super();
        this.inboxBtn = new Button("#treeInbox" , "Inbox button")
        this.sentBtn = new Button("#treeSend" , "Sent button");
        this.trashBtn = new Button(".GCSDBRWBJX:nth-child(3) div .treeItemLabel" , "Trash button");
     }

    clickInboxBtn() {
        this.inboxBtn.clickElement();
        cy.wait(3000);
    }

    clickSentBtn() {
        this.sentBtn.clickElement();
        cy.wait(3000);
    }
    
    clickTrashBtn() {
        this.trashBtn.clickElement();
        cy.wait(3000);
    }
}

export default MailBoxNavBar;