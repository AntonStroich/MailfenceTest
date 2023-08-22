///<reference types = 'Cypress' />
import BaseComponent from "../BaseComponent";
import Button from "../../elements/Button";


class ConfirmDeletionWindow extends BaseComponent {

    constructor() {
        super(`#msgBox`,`Confirm Deletion Window`);
        this.yesBtn = new Button("#dialBtn_YES", "Yes");
    }
    
    clickYesBtn() {
        cy.log(`Clicking on ${this.yesBtn.name} from ${this.name}`);
        this.yesBtn.clickElement();
    } 

    clickYesAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`delete`)) {
                request.alias = 'delete';
            }
          });
        cy.log(`Clicking on ${this.yesBtn.name} from ${this.name}`);
        this.yesBtn.clickElement();
        cy.wait(`@delete`, {timeout: 30000});
    } 

}

export default ConfirmDeletionWindow;