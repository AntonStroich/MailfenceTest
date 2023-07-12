///<reference types = 'Cypress' />
import LandingPage from "../PageObjects/landing/LandingPage";
import LoginToMailPage from "../PageObjects/login/LoginToMailPage";
import MailBoxHeader from "../PageObjects/mail_box/MailBoxHeader";
import MailBoxUserMenu from "../PageObjects/mail_box/MailBoxUserMenu";
import ToolBar from "../PageObjects/tool_bars/ToolBar";
import MailBoxNewEmailForm from "../PageObjects/messages_page/MailBoxNewEmailForm";
import DocumentsNavBar from "../PageObjects/navigation_bars/DocumentsNavBar";
import DocList from "../PageObjects/lists/DocList";
import DocumentsWindow from "../PageObjects/modal_windows/DocumentsWindow";



describe("The first test run", function() { 
    
    this.beforeEach(function() {

        cy.fixture("Test1").then(function(data) {
            this.data = data;
            cy.loginAndClearAll(this.data.login, this.data.password);
            cy.task(`deleteFile`, `${this.data.filePath}\\${this.data.attachmentName}`);
            cy.generateAttachment(this.data.filePath, this.data.attachmentName, this.data.attachmentText);
        })
 
    })

    it("The first test", function() {
        const login = this.data.login;
        const password = this.data.password;
        const subject = this.data.subjectEmail;
        const filePath = this.data.filePath;
        const attachmentName = this.data.attachmentName;
        const attachmentText = this.data.attachmentText;
        const attachmentSize = this.data.attachmentSize;
        const landingPage = new LandingPage();
        const loginToMailPage = new LoginToMailPage();
        const mailBoxHeader = new MailBoxHeader();
        const mailBoxUserMenu = new MailBoxUserMenu();
        const documentsNavBar = new DocumentsNavBar();
        const toolBar = new ToolBar();
        const mailBoxNewEmailForm = new MailBoxNewEmailForm();
        const docList = new DocList();
        const documentsWindow = new DocumentsWindow();

        cy.log(`Step 1. Login to Mail.`);
        landingPage.openAndClickMailBtn();
        loginToMailPage.logInToMail(login, password);

        cy.log(`Step 2. Attach .txt file`);
        mailBoxHeader.clickDocumentsBtn();
        cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
        cy.get("#new_doc input[type=file]", {timeout: 2000}).selectFile(`${filePath}\\${attachmentName}`, { action: "select", force: true });
        cy.wait(2000); // fails without cy.wait(); the current solution needs to be replaced
        toolBar.clickRefreshBtn();
        docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}`);

        cy.log(`Step 3. Send email with attached file to yourself`);
        mailBoxHeader.clickMessagesBtn();
        toolBar.clickNewBtn();
        mailBoxNewEmailForm.populateToTxb(login);
        mailBoxNewEmailForm.populateSubjectTxb(subject);
        mailBoxNewEmailForm.clickAttachmentsBtn();
        mailBoxNewEmailForm.selectFromDocumentToolOptionFromAttachmentDdn();
        documentsWindow.isDisplayed();
        docList.selectItemByText(attachmentName);
        documentsWindow.clickOkAndWait();
        mailBoxNewEmailForm.getAttachmentLabelByIndex(0).should("contains.text", `${attachmentName}`);
        mailBoxNewEmailForm.clickSendBtn();
    
        cy.log(`Log out`)
        mailBoxHeader.clickUserBtn();
        mailBoxUserMenu.clickLogOutBtn();
    })
})
