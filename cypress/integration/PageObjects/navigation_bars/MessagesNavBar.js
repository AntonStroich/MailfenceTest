///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class MessagesNavBar extends BaseForm {

    constructor() {
        super(`Messages Nav bar`);
        this.locator = "div.GCSDBRWBG";
        this.inboxBtn = new Button("#treeInbox" , "Inbox")
        this.sentBtn = new Button("#treeSend" , "Sent");
        this.trashBtn = new Button(".GCSDBRWBJX:nth-child(3) div .treeItemLabel" , "Trash");
        this.draftsBtn = new Button(".GCSDBRWBJX:nth-child(4) div .treeItemLabel" , "Drafts");
        this.spamBtn = new Button(".GCSDBRWBJX:nth-child(5) div .treeItemLabel" , "Spam");
     }

    clickInboxBtn(timeout=1000) {
        cy.log(`Clicking ${this.inboxBtn.name} from ${this.name}`);
        this.inboxBtn.clickElement();
        cy.wait(timeout);
    }

    clickSentBtn(timeout=1000) {
        cy.log(`Clicking ${this.sentBtn.name} from ${this.name}`);
        this.sentBtn.clickElement();
        cy.wait(timeout);
    }
    
    clickTrashBtn(timeout=1000) {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.clickElement();
        cy.wait(timeout);
    }

    clickDraftsBtn(timeout=1000) {
        cy.log(`Clicking ${this.draftsBtn.name} from ${this.name}`);
        this.draftsBtn.clickElement();
        cy.wait(timeout);
    }

    clickSpamBtn(timeout=1000) {
        cy.log(`Clicking ${this.spamBtn.name} from ${this.name}`);
        this.spamBtn.clickElement();
        cy.wait(timeout);
    }
}

export default MessagesNavBar;