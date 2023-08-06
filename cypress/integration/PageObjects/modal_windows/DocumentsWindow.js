///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class DocumentsWindow extends BaseForm {

    constructor(locator) {
        super(locator, `Documents Window`);
        this.okBtn = new Button("#dialBtn_OK", "Yes");
        this.cancelBtn = new Button("#dialBtn_CANCEL", "Cancel");
    }
    
    clickOkBtn() {
        cy.log(`Clicking on ${this.okBtn.name} from ${this.name}`);
        this.okBtn.clickElement();
    } 

    clickOkAndWait(timeout=1000) {
        cy.log(`Clicking on ${this.okBtn.name} from ${this.name}`);
        this.clickOkBtn();
        cy.wait(timeout);
    }

    clickCancelBtn() {
        cy.log(`Clicking on ${this.cancelBtn.name} from ${this.name}`);
        this.cancelBtn.clickElement();
    } 

}

export default DocumentsWindow;