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

    clickSelectAllChb() {
        this.selectAllChb.clickElement();
    }

    clickNewBtn() {
        this.newBtn.clickElement();
    }
    
    clickDeleteBtn() {
        this.deleteBtn.clickElement();
    }

    clearAll() {
        this.clickSelectAllChb();
        this.clickDeleteBtn();
    }


}

export default MailBoxToolBar;