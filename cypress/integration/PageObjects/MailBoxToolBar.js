///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Checkbox from "./elements/Checkbox";
import Button from "./elements/Button"

class MailBoxToolBar extends BaseForm  {

    constructor() {
        super();
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All checkbox");
        this.newBtn = new Button("div div[title='New']" , "New button");
        this.toTrashBtn = new Button("div div[title='To Trash']" , "To Trash button");
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete button");
        this.refreshBtn = new Button("div.icon.icon16-Refresh" , "Refresh button");
     }

    clickSelectAllChb() {
        this.selectAllChb.clickElement();
    }

    clickNewBtn() {
        this.newBtn.clickElement();
    }
    
    clickToTrashBtn() {
        this.toTrashBtn.clickElement();
    }

    clickRefresBtn() {
        this.refreshBtn.clickElement();
    }

    clickDeleteBtn() {
        this.deleteBtn.clickElement();
    }

    moveAllEmailsToTrash(timeout) {
        this.clickRefresBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickToTrashBtn();
    }

    deleteAllEmails(timeout) {
        this.clickRefresBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickDeleteBtn();
    }
}

export default MailBoxToolBar;