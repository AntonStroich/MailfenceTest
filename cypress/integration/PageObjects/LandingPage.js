class LandingPage {
    
    open() {
        cy.visit(Cypress.env('url'));
    }

    getMailBtn() {
        return cy.get("button#signin");
    }
}

export default LandingPage;