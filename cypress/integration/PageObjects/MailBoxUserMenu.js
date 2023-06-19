///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";


class MailBoxUserMenu extends BaseForm {

    constructor() {
        super();
        this.LogOutBtn = new Button(".GCSDBRWBFR div svg", "Log Out button");
    }
    
    clickLogOutBtn() {
        this.LogOutBtn.clickElement();
    } 

}

export default MailBoxUserMenu;