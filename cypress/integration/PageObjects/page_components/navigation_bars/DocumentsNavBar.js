///<reference types = 'Cypress' />
import MainArea from "../MainArea";
import Button from "../../elements/Button";

class DocumentsNavBar extends MainArea {

    constructor() {
        super(`div.GCSDBRWBH.appLeftPanel`,`Documents Nav bar`);
        this.myDocumentsBtn = new Button(".GCSDBRWBCX.treeItemRoot.GCSDBRWBKX.nodeSel:first-child", "My Documents");
        this.trashBtn = new Button("#doc_tree_trash" , "Trash");
     }

     clickMyDocumentsBtn() {
        cy.log(`Clicking ${this.myDocumentsBtn.name} from ${this.name}`);
        this.myDocumentsBtn.clickElement();
    } 

    clickTrashBtn() {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.clickElement();
    }

}

export default DocumentsNavBar;