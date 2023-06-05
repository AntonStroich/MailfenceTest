///<reference types = 'Cypress' />
import Button from "./elements/Button";
import BasePage from "./BaseForm";


class LandingPage extends BasePage {

    constructor() {
        super(Cypress.env('url'));   
        this.MailBtn = new Button("button#signin", "Mail"); 
    }
    
    clickMailBtn() {
        this.MailBtn.clickElement();
    }

    isMailBtnVisible() {
        this.MailBtn.isElementVisible();
    }

    openAndClickMailBtn() {
        this.open();
        this.clickMailBtn();
    }

}

export default LandingPage;