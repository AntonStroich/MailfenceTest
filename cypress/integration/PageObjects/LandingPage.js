class LandingPage {
    
    open() {
        cy.visit(Cypress.env('url'));
    }

    getMailBtn() {
        return cy.get("button#signin");
    }

    clickMailBtn() {
        this.getMailBtn().click();
    }
}

export default LandingPage;