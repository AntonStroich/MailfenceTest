///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import Button from "../elements/Button"

class TrashTabToolBar extends ToolBar  {

    constructor() {
        super();
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete button");
     }

    clickDeleteBtn() {
        this.deleteBtn.clickElement();
    }

    deleteAllEmails(timeout=1000) {
        this.clickRefresBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickDeleteBtn();
    }
}

export default TrashTabToolBar;