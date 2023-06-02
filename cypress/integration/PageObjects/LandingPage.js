///<reference types = 'Cypress' />
import Button from "./elements/Button";
import BaseForm from "./BaseForm";


class LandingPage extends BaseForm {

    constructor() {
        super();   
        this.MailBtn = new Button("button#signin", "Mail"); 
    }
    
    open() {
        cy.visit(Cypress.env('url'));
    }

    clickMailBtn() {
        this.MailBtn.clickElement();
    }

    isMailBtnVisible() {
        this.MailBtn.isElementVisible();
    }

}

export default LandingPage;