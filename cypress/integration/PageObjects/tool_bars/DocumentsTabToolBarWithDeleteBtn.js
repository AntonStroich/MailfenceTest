///<reference types = 'Cypress' />
import DocumentsToolBar from "./DocumentsToolBar";
import Button from "../elements/Button";
import ConfirmDeletionWindow from "../modal_windows/ConfirmDeletionWindow";

class DocumentsTabToolBarWithDeleteBtn extends DocumentsToolBar {

    constructor(locator) {
        super(locator, `Tab of the Tool bar of the "Documents" page which has "Delete" button instead of "To Trash" button`);
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete");
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
     }

    deleteAll(timeout=1000) {
        this.clickRefreshBtn();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
        this.clickSelectAllChb();
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }
}

export default DocumentsTabToolBarWithDeleteBtn;