///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import BaseElement from "./elements/BaseElement";
import Checkbox from "./elements/Checkbox";

class MailBoxToolBar extends BaseForm  {

    constructor() {
        super();
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All checkbox");
     }

    clickInSelectAllChb() {
        cy.wait(3000);
        this.selectAllChb.clickElement();
    }

    isSelectAllChbChecked() {
        this.selectAllChb.isCheckboxChecked();
    }

    isSelectAllChbUnchecked() {
        this.selectAllChb.isCheckboxUnchecked();
    }
    
}

export default MailBoxToolBar;