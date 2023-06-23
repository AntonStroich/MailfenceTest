///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class MessagesNavBar extends BaseForm {

    constructor() {
        super();
        this.inboxBtn = new Button("#treeInbox" , "Inbox button")
        this.sentBtn = new Button("#treeSend" , "Sent button");
        this.trashBtn = new Button(".GCSDBRWBJX:nth-child(3) div .treeItemLabel" , "Trash button");
     }

    clickInboxBtn(timeout=1000) {
        this.inboxBtn.clickElement();
        cy.wait(timeout);
    }

    clickSentBtn(timeout=1000) {
        this.sentBtn.clickElement();
        cy.wait(timeout);
    }
    
    clickTrashBtn(timeout=1000) {
        this.trashBtn.clickElement();
        cy.wait(timeout);
    }
}

export default MessagesNavBar;