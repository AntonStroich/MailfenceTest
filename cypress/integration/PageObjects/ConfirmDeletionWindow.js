///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";


class ConfirmDeletionWindow extends BaseForm {

    constructor() {
        super();
        this.yesBtn = new Button("#dialBtn_YES", "Yes button");
    }
    
    clickYesBtn() {
        this.yesBtn.clickElement();
    } 

    clickYesAndWait(timeout=1000) {
        this.clickYesBtn();
        cy.wait(timeout);
    }

}

export default ConfirmDeletionWindow;