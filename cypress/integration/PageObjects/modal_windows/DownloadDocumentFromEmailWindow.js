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
    
    clickMyDocumentsBtn() {
        cy.log(`Clicking ${this.myDocumentsBtn.name} from ${this.name}`);
        this.myDocumentsBtn.clickElement();
        this.myDocumentsBtn.getElement().should(`be.visible`, {timeout: 20000});
    } 

    clickTrashBtn() {
        cy.log(`Clicking ${this.trashBtn.name} from ${this.name}`);
        this.trashBtn.clickElement();
        this.trashBtn.getElement().should(`be.visible`, {timeout: 20000});
    }

    clickOkAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`saveAttachmentInDocuments`)) {
                request.alias = 'saveAttachmentInDocuments';
            }
          });
       this.okBtn.getElement().should(`be.visible`, {timeout: 50000});
       this.clickOkBtn();
       cy.wait(`@saveAttachmentInDocuments`, {timeout: 50000});
    }    
}

export default DownloadDocumentFromEmailWindow;