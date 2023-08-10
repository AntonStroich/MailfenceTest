///<reference types = 'Cypress' />
import MailBoxMainArea from "../mail_box/MailBoxMainArea";
import Button from "../elements/Button";

class MessagesNavBar extends MailBoxMainArea {

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
        cy.wait(1000);
    }

    clickSentBtn() {
        cy.log(`Clicking ${this.sentBtn.name} from ${this.name}`);
        this.sentBtn.getElement().should(`exist`, {timeout: 30000});
        this.sentBtn.clickElement();
        cy.wait(1000);
    }
    
    clickTrashBtn() {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.getElement().should(`exist`, {timeout: 30000});
        this.trashBtn.clickElement();
        cy.wait(1000);
    }

    clickDraftsBtn() {
        cy.log(`Clicking ${this.draftsBtn.name} from ${this.name}`);
        this.draftsBtn.getElement().should(`exist`, {timeout: 30000});
        this.draftsBtn.clickElement();
        cy.wait(1000);
    }

    clickSpamBtn() {
        cy.log(`Clicking ${this.spamBtn.name} from ${this.name}`);
        this.spamBtn.getElement().should("exist", "tbBtnActive", {timeout: 30000});
        this.spamBtn.clickElement();
        cy.wait(1000);
    }
}

export default MessagesNavBar;