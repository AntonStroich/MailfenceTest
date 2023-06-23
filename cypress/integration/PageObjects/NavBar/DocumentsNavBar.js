///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class DocumentsNavBar extends BaseForm {

    constructor() {
        super();
        this.myDocumentsBtn = new Button(".GCSDBRWBCX.treeItemRoot.GCSDBRWBKX.nodeSel:first-child", "My Documents button");
        this.trashBtn = new Button("#doc_tree_trash" , "Trash button");
     }

     clickMyDocumentsBtn(timeout=1000) {
        this.myDocumentsBtn.clickElement();
        cy.wait(timeout);
    } 

    clickTrashBtn(timeout=1000) {
        this.trashBtn.clickElement();
        cy.wait(timeout);
    }

}

export default DocumentsNavBar;