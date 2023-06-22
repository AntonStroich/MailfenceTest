///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import Button from "../elements/Button"

class InputTabToolBar extends ToolBar  {

    constructor() {
        super();
        this.toTrashBtn = new Button("div div[title='To Trash']" , "To Trash button");
     }

    clickRefresBtn() {
        this.refreshBtn.clickElement();
    }

    moveAllEmailsToTrash(timeout=1000) {
        this.clickRefresBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickToTrashBtn();
    }
}

export default InputTabToolBar;