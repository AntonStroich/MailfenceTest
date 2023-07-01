///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";

class ToolBar extends BaseForm  {

    constructor() {
        super(`Tool bar`);
        this.selectAllChb = new Checkbox("div.icon.icon-checkb" , "Select All");
        this.newBtn = new Button("div div[title='New']" , "New");
        this.refreshBtn = new Button("div div[title='Refresh']" , "Refresh");
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

}

export default ToolBar;