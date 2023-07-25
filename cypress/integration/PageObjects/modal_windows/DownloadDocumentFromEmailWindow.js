///<reference types = 'Cypress' />
import DocumentsWindow from "./DocumentsWindow";
import Button from "../elements/Button";
import DocumentsNavBar from "../navigation_bars/DocumentsNavBar";


class DownloadDocumentFromEmailWindow extends DocumentsWindow {

    constructor() {
        super(`.GCSDBRWBJY.GCSDBRWBKY.GCSDBRWBOD`, `Window to download a file from email to the Documents tool`);
        this.myDocumentsBtn = new Button(`${this.locator} .treeJoint ~.treeItemLabel`, "My Documents");
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

export default DownloadDocumentFromEmailWindow;