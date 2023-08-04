///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";


class ConfirmDeletionWindow extends BaseForm {

    constructor() {
        super(`#msgBox`,`Confirm Deletion Window`);
        this.yesBtn = new Button("#dialBtn_YES", "Yes");
    }
    
    clickYesBtn() {
        cy.log(`Clicking on ${this.yesBtn.name} from ${this.name}`);
        this.yesBtn.clickElement();
    } 

}

export default ConfirmDeletionWindow;