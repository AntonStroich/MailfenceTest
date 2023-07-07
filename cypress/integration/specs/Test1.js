///<reference types = 'Cypress' />

describe("The first test run", function() { 
    
    before(function() {

        cy.fixture("Test1").then(function(data) {
            this.data = data;
            cy.loginAndClearAll(this.data.login, this.data.password);
            cy.task(`deleteFile`, `${this.data.filePath}\\${this.data.attachmentName}`);
            cy.generateAttachment(this.data.filePath, this.data.attachmentName, this.data.attachmentText);
        })
 
    })

    after(function() {

        cy.fixture("Test1").then(function(data) {
            this.data = data;
            cy.loginAndClearAll(this.data.login, this.data.password);
        })
 
    })

    it("The first test", function() {
        const login = this.data.login;
        const password = this.data.password;
        const subject = this.data.subjectEmail;
        const filePath = this.data.filePath;
        const attachmentName = this.data.attachmentName;
        const attachmentText = this.data.attachmentText;

        cy.logInToMailAndSendEmail(login, password, subject, filePath, attachmentName, attachmentText);
        cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
    })
})