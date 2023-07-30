///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";


class MailBoxUserMenu extends BaseForm {

    constructor() {
        super(`.GCSDBRWBNQ.menu`, `Mail box User menu`);
        this.LogOutBtn = new Button(".GCSDBRWBFR div svg", "Log Out");
    }
    
    clickLogOutBtn() {
        cy.log(`Clicking ${this.LogOutBtn.name} from ${this.name}`);
        this.LogOutBtn.clickElement();
    } 

}

export default MailBoxUserMenu;