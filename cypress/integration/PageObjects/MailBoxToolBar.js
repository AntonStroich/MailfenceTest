///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Checkbox from "./elements/Checkbox";
import Button from "./elements/Button"

class MailBoxToolBar extends BaseForm  {

    constructor() {
        super();
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All checkbox");
        this.newBtn = new Button("div div[title='New']" , "New button")
        this.deleteBtn = new Button("div div[title='To Trash']" , "Delete button");
     }



    clickInSelectAllChb() {
        cy.wait(3000);
        this.selectAllChb.clickElement();
    }

    clickOnNewBtn() {
        this.newBtn.clickElement();
    }
    
    clickOnDleteBtn() {
        this.deleteBtn.clickElement();
    }
}

export default MailBoxToolBar;