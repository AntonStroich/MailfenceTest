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

    deleteAll() {
        this.clickSelectAllChb();
        this.deleteBtn.getElement().should("not.have.class", " tbBtnDisabled", {timeout: 30000});
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }
}

export default DocumentsTabToolBarWithDeleteBtn;