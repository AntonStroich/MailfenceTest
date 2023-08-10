///<reference types = 'Cypress' />
import MailBoxMainArea from "../mail_box/MailBoxMainArea";
import Button from "../elements/Button";

class DocumentsNavBar extends MailBoxMainArea {

    constructor() {
        super(`div.GCSDBRWBH.appLeftPanel`,`Documents Nav bar`);
        this.myDocumentsBtn = new Button(".GCSDBRWBCX.treeItemRoot.GCSDBRWBKX.nodeSel:first-child", "My Documents");
        this.trashBtn = new Button("#doc_tree_trash" , "Trash");
     }

     clickMyDocumentsBtn(timeout=1000) {
        cy.log(`Clicking ${this.myDocumentsBtn.name} from ${this.name}`);
        this.myDocumentsBtn.clickElement();
    } 

    clickTrashBtn(timeout=1000) {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.clickElement();
    }

}

export default DocumentsNavBar;