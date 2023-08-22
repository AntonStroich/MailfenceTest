///<reference types = 'Cypress' />
import MainArea from "../../PageObjects/page_components/MainArea";
import Button from "../elements/Button";
import Checkbox from "../elements/CheckboxMailfence";
import ConfirmDeletionWindow from "./modal_windows/ConfirmDeletionWindow";

class ToolBar extends MainArea  {

    constructor() {
        super(".GCSDBRWBKV.toolbar", `Tool bar`);
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All");
        this.newBtn = new Button("div div[title='New']" , "New");
        this.refreshBtn = new Button("div div[title='Refresh']" , "Refresh");
        this.toTrashBtn = new Button("div div[title='To Trash']" , "To Trash");
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete");
        this.confirmDeletionWindow = new ConfirmDeletionWindow();

     }

    clickSelectAllChb() {
        cy.log(`Clicking on ${this.selectAllChb.name} from ${this.name}`);
        this.selectAllChb.clickElement();
    }

    clickNewBtn() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`createMessage`)) {
                request.alias = 'createMessage';
            }
          });
        cy.log(`Clicking on ${this.newBtn.name} from ${this.name}`);
        this.newBtn.clickElement();
        cy.wait(`@createMessage`, {timeout: 30000});
    }
    
    clickRefreshBtn() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getFolderMessages`)) {
                request.alias = 'getFolderMessages';
            }
          });
        cy.log(`Clicking on ${this.refreshBtn.name} from ${this.name}`);
        this.refreshBtn.clickElement();
        cy.wait(`@getFolderMessages`, {timeout: 30000});
    }

    clickToTrashBtn() {
        cy.log(`Clicking on ${this.toTrashBtn.name} from ${this.name}`);
        this.toTrashBtn.clickElement();
    }

    selectAllAndMoveToTrash() {
        this.clickSelectAllChb();
        this.toTrashBtn.getElement().should("not.have.class", " tbBtnDisabled", {timeout: 30000});
        this.clickToTrashBtn();
    }

    clickDeleteBtn() {
        cy.log(`Clicking on ${this.deleteBtn.name} from ${this.name}`);
        this.deleteBtn.clickElement();
    }


    selectAllAndDelete() {
        this.clickSelectAllChb();
        this.deleteBtn.getElement().should("not.have.class", " tbBtnDisabled", {timeout: 30000});
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }

}

export default ToolBar;