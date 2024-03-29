///<reference types = 'Cypress' />
import MainArea from "../MainArea";
import Button from "../../elements/Button";

class MessagesNavBar extends MainArea {

    constructor() {
        super(`div.GCSDBRWBH.appLeftPanel`, `Messages Nav bar`);
        this.inboxBtn = new Button("#treeInbox" , "Inbox")
        this.sentBtn = new Button("#treeSend" , "Sent");
        this.trashBtn = new Button(".GCSDBRWBJX:nth-child(3) div .treeItemLabel" , "Trash");
        this.draftsBtn = new Button(".GCSDBRWBJX:nth-child(4) div .treeItemLabel" , "Drafts");
        this.spamBtn = new Button(".GCSDBRWBJX:nth-child(5) div .treeItemLabel" , "Spam");
     }

    clickInboxBtn() {
        cy.log(`Clicking ${this.inboxBtn.name} from ${this.name}`);
        this.inboxBtn.getElement().should(`exist`, {timeout: 30000});
        this.inboxBtn.clickElement();
    }

    clickSentBtn() {
        cy.log(`Clicking ${this.sentBtn.name} from ${this.name}`);
        this.sentBtn.getElement().should(`exist`, {timeout: 30000});
        this.sentBtn.clickElement();
    }
    
    clickTrashBtn() {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.getElement().should(`exist`, {timeout: 30000});
        this.trashBtn.clickElement();
    }

    clickDraftsBtn() {
        cy.log(`Clicking ${this.draftsBtn.name} from ${this.name}`);
        this.draftsBtn.getElement().should(`exist`, {timeout: 30000});
        this.draftsBtn.clickElement();
    }

    clickSpamBtn() {
        cy.log(`Clicking ${this.spamBtn.name} from ${this.name}`);
        this.spamBtn.getElement().should("exist", "tbBtnActive", {timeout: 30000});
        this.spamBtn.clickElement();
    }
}

export default MessagesNavBar;