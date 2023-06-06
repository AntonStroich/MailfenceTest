///<reference types = 'Cypress' />

describe("The first test run", function() { 
    
    before(function() {
        cy.fixture("Test1").then((data) => {
            this.data = data;
        })
    })

    it("The first test", function() {
        const email = this.data.email;
        const password = this.data.password;
        cy.logInToMail(email, password);
    })
})