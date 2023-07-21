///<reference types = 'Cypress' />
import LandingPage from "../PageObjects/landing/LandingPage";
import LoginToMailPage from "../PageObjects/login/LoginToMailPage";
import MailBoxHeader from "../PageObjects/mail_box/MailBoxHeader";
import MailBoxUserMenu from "../PageObjects/mail_box/MailBoxUserMenu";
import ToolBar from "../PageObjects/tool_bars/ToolBar";
import NewEmailForm from "../PageObjects/messages_page/NewEmailForm";
import DocumentsNavBar from "../PageObjects/navigation_bars/DocumentsNavBar";
import MailList from "../PageObjects/lists/MailList";
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
        const landingPage = new LandingPage();
        const loginToMailPage = new LoginToMailPage();
        const mailBoxHeader = new MailBoxHeader();
        const mailBoxUserMenu = new MailBoxUserMenu();
        const documentsNavBar = new DocumentsNavBar();
        const toolBar = new ToolBar();
        const newEmailForm = new NewEmailForm();
        const mailList = new MailList();
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
        newEmailForm.populateToTxb(login);
        newEmailForm.populateSubjectTxb(subject);
        newEmailForm.clickAttachmentsBtn();
        newEmailForm.selectFromDocumentToolOptionFromAttachmentDdn();
        documentsWindow.isDisplayed();
        docList.selectItemByText(attachmentName);
        documentsWindow.clickOkAndWait();
        newEmailForm.getAttachmentLabelByIndex(0).should("contains.text", `${attachmentName}`);
        newEmailForm.clickSendBtn();

        cy.log(`Step 4. Check that email recieved`);
        newEmailForm.clickSendBtn();
        toolBar.getForm().should("be.visible");
        cy.wait(5000);
        toolBar.clickRefreshBtn();
        mailList.getItemTitleByIndex(0).should("have.attr", "title", `${subject}`);

        cy.log(`Log out`)
        mailBoxHeader.clickUserBtn();
        mailBoxUserMenu.clickLogOutBtn();
        
    })
})
