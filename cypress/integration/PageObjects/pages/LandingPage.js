///<reference types = 'Cypress' />
import Button from "../elements/Button";
import BasePage from "./BasePage";


class LandingPage extends BasePage {

    constructor() {
        super(`header.container.limit.hero.mf`, `Landing Page`);
        this.url = (Cypress.env('url'));   
        this.mailBtn = new Button("#signin", "Mail"); 
    }
    
    clickMailBtn() {
        cy.log(`Clicking ${this.mailBtn.name} from ${this.name}`)
        this.mailBtn.clickElement();
    }

    openAndClickMailBtn() {
        this.open();
        this.clickMailBtn();
    }

    open() { 
        cy.log(`Openning ${this.name}`);
        cy.visit(this.url);
    }

}

export default LandingPage;