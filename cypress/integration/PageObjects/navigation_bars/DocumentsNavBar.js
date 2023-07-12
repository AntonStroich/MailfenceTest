///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class DocumentsNavBar extends BaseForm {

    constructor() {
        super(`Documents Nav bar`);
        this.locator = "div.GCSDBRWBG";
        this.myDocumentsBtn = new Button(".GCSDBRWBCX.treeItemRoot.GCSDBRWBKX.nodeSel:first-child", "My Documents");
        this.trashBtn = new Button("#doc_tree_trash" , "Trash");
     }

     clickMyDocumentsBtn(timeout=1000) {
        cy.log(`Clicking ${this.myDocumentsBtn.name} from ${this.name}`);
        this.myDocumentsBtn.clickElement();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
    } 

    clickTrashBtn(timeout=1000) {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.clickElement();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
    }

}

export default DocumentsNavBar;