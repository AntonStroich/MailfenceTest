///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";
import DocList from "../lists/DocList";
import DocumentsNavBar from "../navigation_bars/DocumentsNavBar";


class DocumentsWindow extends BaseForm {

    constructor() {
        super(`.GCSDBRWBJY.GCSDBRWBKY.GCSDBRWBOD.GCSDBRWBFMB`, `Documents Window`);
        this.okBtn = new Button("#dialBtn_OK", "Yes");
        this.cancelBtn = new Button("#dialBtn_CANCEL", "Cancel");
        this.docList = new DocList();
        this.DocumentsNavBar = new DocumentsNavBar();
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

    clickCancelAndWait(timeout=1000) {
        cy.log(`Clicking on ${this.cancelBtn.name} from ${this.name}`);
        this.clickCancelBtn();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
    }

    isDisplayed() {
        cy.get(this.locator).should("be.visible");
    }

}

export default DocumentsWindow;