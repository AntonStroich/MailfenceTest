///<reference types = 'Cypress' />
import MailBoxMainArea from "../mail_box/MailBoxMainArea";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";

class ToolBar extends MailBoxMainArea  {

    constructor() {
        super(".GCSDBRWBKV.toolbar", `Tool bar`);
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All");
        this.newBtn = new Button("div div[title='New']" , "New");
        this.refreshBtn = new Button("div div[title='Refresh']" , "Refresh");
        this.deleteBtn = new Button("div div[title='To Trash']" , "To Trash");
     }

    clickSelectAllChb() {
        cy.log(`Clicking on ${this.selectAllChb.name} from ${this.name}`);
        this.selectAllChb.clickElement();
    }

    clickNewBtn() {
        cy.log(`Clicking on ${this.newBtn.name} from ${this.name}`);
        this.newBtn.clickElement();
    }
    
    clickRefreshBtn() {
        cy.log(`Clicking on ${this.refreshBtn.name} from ${this.name}`);
        this.refreshBtn.clickElement();
    }

    clickDeleteBtn() {
        cy.log(`Clicking on ${this.deleteBtn.name} from ${this.name}`);
        this.deleteBtn.clickElement();
    }

    deleteAll() {
        this.clickSelectAllChb();
        this.clickDeleteBtn();
    }
}

export default ToolBar;