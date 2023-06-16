///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Checkbox from "./elements/Checkbox";
import Button from "./elements/Button"

class MailBoxToolBar extends BaseForm  {

    constructor() {
        super();
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All checkbox");
        this.newBtn = new Button("div div[title='New']" , "New button");
        this.deleteBtn = new Button("div div[title='To Trash']" , "Delete button");
        this.refreshBtn = new Button("div.icon.icon16-Refresh" , "Refresh button");
     }

    clickSelectAllChb() {
        this.selectAllChb.clickElement();
    }

    clickNewBtn() {
        this.newBtn.clickElement();
    }
    
    clickDeleteBtn() {
        this.deleteBtn.clickElement();
    }

    clickRefresBtn() {
        this.refreshBtn.clickElement();
    }

    refreshPage() {
        this.clickRefresBtn();
        cy.wait(1000);
    }

    clearAll() {
        this.clickSelectAllChb();
        this.clickDeleteBtn();
    }


}

export default MailBoxToolBar;