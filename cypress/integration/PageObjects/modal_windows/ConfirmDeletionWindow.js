///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";


class ConfirmDeletionWindow extends BaseForm {

    constructor() {
        super(`Confirm Deletion Window`);
        this.yesBtn = new Button("#dialBtn_YES", "Yes");
    }
    
    clickYesBtn() {
        cy.log(`Clicking on ${this.yesBtn.name} from ${this.name}`);
        this.yesBtn.clickElement();
    } 

    clickYesAndWait(timeout=1000) {
        cy.log(`Clicking on ${this.yesBtn.name} from ${this.name}`);
        this.clickYesBtn();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
    }

}

export default ConfirmDeletionWindow;