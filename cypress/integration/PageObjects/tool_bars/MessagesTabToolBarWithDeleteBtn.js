///<reference types = 'Cypress' />
import MessagesToolBar from "./MessagesToolBar";
import Button from "../elements/Button";
import ConfirmDeletionWindow from "../modal_windows/ConfirmDeletionWindow";

class MessagesTabToolBarWithDeleteBtn extends MessagesToolBar {

    constructor(locator) {
        super(locator, `Tab of the Tool bar of the Messages page which has "Delete" button instead of "To Trash" button`);
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete");
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
     }

    deleteAll() {
        this.clickSelectAllChb();
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }
}

export default MessagesTabToolBarWithDeleteBtn;