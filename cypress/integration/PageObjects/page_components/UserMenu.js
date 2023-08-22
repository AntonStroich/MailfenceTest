///<reference types = 'Cypress' />
import BaseComponent from "./BaseComponent";
import Button from "../elements/Button";


class UserMenu extends BaseComponent {

    constructor() {
        super(`.GCSDBRWBNQ.menu`, `Mail box User menu`);
        this.LogOutBtn = new Button(".GCSDBRWBFR div svg", "Log Out");
    }
    
    clickLogOutBtn() {
        cy.log(`Clicking ${this.LogOutBtn.name} from ${this.name}`);
        this.LogOutBtn.clickElement();
    } 

}

export default UserMenu;