///<reference types = 'Cypress' />
import Button from "./elements/Button";
import BaseForm from "./BaseForm";


class LandingPage extends BaseForm {

    constructor() {
        super(`Landing Page`);
        this.url = (Cypress.env('url'));   
        this.MailBtn = new Button("button#signin", "Mail"); 
    }
    
    clickMailBtn() {
        cy.log(`Clicking ${this.MailBtn.name} from ${this.name}`)
        this.MailBtn.clickElement();
    }

    isMailBtnVisible() {
        this.MailBtn.isElementVisible();
    }

    openAndClickMailBtn() {
        this.open();
        this.clickMailBtn();
    }

    open() { 
        cy.log(`Openning ${this.name}`)
        cy.visit(this.url);
    }

}

export default LandingPage;