///<reference types = 'Cypress' />

describe("The first test run", function() { 
    
    before(function() {
        cy.fixture("credential").then((credential) => {
            this.credential = credential;
        })

        cy.fixture("email").then((email) => {
            this.email = email;
        })

        cy.fixture("attachment").then((attachment) => {
            this.attachment = attachment;
            cy.task(`deleteFile`, `${this.attachment.filePath}\\${this.attachment.attachmentName}`);
            cy.generateAttachment(this.attachment.filePath, this.attachment.attachmentName, this.attachment.attachmentText);
        })

        cy.loginAndClearAllMessagesTabs("cy20230531@mailfence.com", "WqSLQVuYS%");
        
    })

    it("The first test", function() {
        const login = this.credential.login;
        const password = this.credential.password;
        const subject = this.email.subjectEmail;
        const filePath = this.attachment.filePath;
        const attachmentName = this.attachment.attachmentName;
        const attachmentText = this.attachment.attachmentText;

        cy.logInToMailAndSendEmail(login, password, subject, filePath, attachmentName, attachmentText);
        cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
    })
})