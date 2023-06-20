///<reference types = 'Cypress' />

describe("The first test run", function() { 
    
    before(function() {
        cy.fixture("credential").then((credential) => {
            this.credential = credential;
        })

        cy.fixture("email").then((email) => {
            this.email = email;
        })
    })

    it("The first test", function() {
        const login = this.credential.login;
        const password = this.credential.password;
        const subject = this.email.subjectEmail;
        cy.logInToMail(login, password, subject);
    })
})