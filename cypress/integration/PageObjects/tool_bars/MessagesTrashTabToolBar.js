///<reference types = 'Cypress' />
import MessagesToolBar from "./MessagesToolBar";
import Button from "../elements/Button";
import ConfirmDeletionWindow from "../modal_windows/ConfirmDeletionWindow";

class MessagesTrashTabToolBar extends MessagesToolBar {

    constructor() {
        super(`Trash tab of the Tool bar of the Messages page`);
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete");
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
     }

    deleteAll(timeout=1000) {
        this.clickRefreshBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }
}

export default MessagesTrashTabToolBar;