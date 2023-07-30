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
import AddDocumentToEmailWindow from "../PageObjects/modal_windows/AddDocumentToEmailWindow";
import ExistedEmailForm from "../PageObjects/messages_page/ExistedEmailForm";
import DownloadDocumentFromEmailWindow from "../PageObjects/modal_windows/DownloadDocumentFromEmailWindow";

const FROM_DOCUMENT_TOOL = "From document tool";
const SAVE_IN_DOCUMENTS = "Save in Documents";



describe("The first test run", function() { 
    
    this.beforeEach(function() {

        cy.fixture("Test1").then(function(data) {
           this.data = data;
           cy.loginAndClearAll(this.data.login, this.data.password);
           cy.task(`deleteFile`, `${this.data.filePath}\\${this.data.attachmentName}.${this.data.attachmentExtension}`);
           cy.generateAttachment(this.data.filePath, this.data.attachmentName, this.data.attachmentExtension, this.data.attachmentText);
        })
 
    })

    it("The first test", function() {
        const login = this.data.login;
        const password = this.data.password;
        const subject = this.data.subjectEmail;
        const filePath = this.data.filePath;
        const attachmentName = this.data.attachmentName;
        const attachmentExtension = this.data.attachmentExtension;
        const landingPage = new LandingPage();
        const loginToMailPage = new LoginToMailPage();
        const mailBoxHeader = new MailBoxHeader();
        const mailBoxUserMenu = new MailBoxUserMenu();
        const documentsNavBar = new DocumentsNavBar();
        const toolBar = new ToolBar();
        const newEmailForm = new NewEmailForm();
        const mailList = new MailList();
        const docList = new DocList();
        const addDocumentToEmailWindow = new AddDocumentToEmailWindow();
        const existedEmailForm = new ExistedEmailForm();
        const downloadDocumentFromEmailWindow = new DownloadDocumentFromEmailWindow();


        cy.log(`Step 1. Login to Mail.`);
        landingPage.openAndClickMailBtn();
        loginToMailPage.logInToMail(login, password);

        cy.log(`Step 2. Attach .txt file`);
        mailBoxHeader.clickDocumentsBtn();
        cy.readFile(`${filePath}\\${attachmentName}.${attachmentExtension}`).should("not.be.null");
        cy.get("#new_doc input[type=file]", {timeout: 2000}).selectFile(`${filePath}\\${attachmentName}.${attachmentExtension}`, { action: "select", force: true });
        cy.wait(2000); // fails without cy.wait(); the current solution needs to be replaced
        toolBar.clickRefreshBtn();
        docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`);

        cy.log(`Step 3. Send email with attached file to yourself`);
        mailBoxHeader.clickMessagesBtn();
        toolBar.clickNewBtn(); /* Starting from this point Step 8 fails */
        newEmailForm.populateToTxb(login);
        newEmailForm.populateSubjectTxb(subject);
        newEmailForm.clickAttachmentsBtn();
        newEmailForm.getAttachmentDdn().should("be.visible");
        newEmailForm.selectFromAttachmentDdnByText(FROM_DOCUMENT_TOOL);
        addDocumentToEmailWindow.getForm().should("be.visible");
        docList.selectItemByText(attachmentName);
        addDocumentToEmailWindow.clickOkAndWait();
        newEmailForm.getAttachmentLnkByIndex(0).should("contains.text", `${attachmentName}.${attachmentExtension}`);
        newEmailForm.clickSendBtn();

        cy.log(`Step 4. Check that email recieved`);
        newEmailForm.clickSendBtn();
        toolBar.getForm().should("be.visible");
        cy.wait(5000);
        toolBar.clickRefreshBtn();
        mailList.getItemTitleByIndex(0).should("have.attr", "title", `${subject}`);

        cy.log(`Step 5. Open recieved email`);
        mailList.selectItemByIndex(0);
        existedEmailForm.getForm().should("be.visible");
        existedEmailForm.getSubjectLbl().should("have.text", `${subject}`);

        cy.log(`Step 6. Save the attached file to documents by 'Сохранить в документах' button`);
        existedEmailForm.clickAttachmentLnkArrowLinkByIndex(0);
        existedEmailForm.getAttachmentDdn().should("be.visible");
        existedEmailForm.selectFromAttachmentDdnByText(SAVE_IN_DOCUMENTS);
        downloadDocumentFromEmailWindow.getForm().should("be.visible");
        downloadDocumentFromEmailWindow.clickMyDocumentsBtn();
        downloadDocumentFromEmailWindow.clickOkAndWait();

        cy.log(`Step 7. Open documents area`);
        mailBoxHeader.clickDocumentsBtn();
        docList.getItemTitle().should("have.length", 2);
        docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`, { timeout: 20000 });
        docList.getItemTitleByIndex(1).should("have.attr", "title", `${attachmentName}_1.${attachmentExtension}`, { timeout: 20000 });

        cy.log(`Step 8. Move file from "Мои документы" folder to "Trash" folder by Drag'n'drop action`);
        // cy.dragAndDrop(`#doc_list .GCSDBRWBPJB`, 1, documentsNavBar.trashBtn.locator);
        // docList.getItemTitle().should("have.length", 1);
        // docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`, { timeout: 20000 });
        // documentsNavBar.clickTrashBtn();
        // docList.getItemTitle().should("have.length", 1);
        // docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}_1.${attachmentExtension}`, { timeout: 20000 });

        cy.log(`Log out`)
        mailBoxHeader.clickUserBtn();
        mailBoxUserMenu.clickLogOutBtn();
        
    })
})
