///<reference types = 'Cypress' />
import {LandingPage, LoginToMailPage, DocumentsPage, MessagesPage} from "../PageObjects/pages/index";

// import LandingPage from "../PageObjects/pages/LandingPage";
// import LoginToMailPage from "../PageObjects/pages/LoginToMailPage";
// import DocumentsPage from "../PageObjects/pages/DocumentsPage";



import Header from "../PageObjects/page_components/Header";
import UserMenu from "../PageObjects/page_components/UserMenu";
import ToolBar from "../PageObjects/page_components/ToolBar";
import NewEmailForm from "../PageObjects/page_components/email_forms/NewEmailForm";;
import DocumentsNavBar from "../PageObjects/page_components/navigation_bars/DocumentsNavBar";
import MailList from "../PageObjects/page_components/lists/MailList";
import DocList from "../PageObjects/page_components/lists/DocList";
import AddDocumentToEmailWindow from "../PageObjects/page_components/modal_windows/AddDocumentToEmailWindow";
import ExistedEmailForm from "../PageObjects/page_components/email_forms/ExistedEmailForm";
import DownloadDocumentFromEmailWindow from "../PageObjects/page_components/modal_windows/DownloadDocumentFromEmailWindow";


const landingPage = new LandingPage();
const loginToMailPage = new LoginToMailPage();
const documentsPage = new DocumentsPage();
const messagesPage = new MessagesPage();

const mailBoxHeader = new Header();
const mailBoxUserMenu = new UserMenu();
const documentsNavBar = new DocumentsNavBar();
const toolBar = new ToolBar();
const newEmailForm = new NewEmailForm();
const mailList = new MailList();
const docList = new DocList();
const addDocumentToEmailWindow = new AddDocumentToEmailWindow();
const existedEmailForm = new ExistedEmailForm();
const downloadDocumentFromEmailWindow = new DownloadDocumentFromEmailWindow();


describe("The test run for Mailfence", function() { 
    
    this.beforeEach(function() {

        cy.fixture("test1_test_data").then(function(data) {
           this.data = data;
           cy.loginAndClearAll(Cypress.env(`LOGIN`), Cypress.env(`PASSWORD`));
           cy.task(`deleteFile`, `${this.data.filePath}\\${this.data.attachmentName}.${this.data.attachmentExtension}`);
           cy.generateAttachment(this.data.filePath, this.data.attachmentName, this.data.attachmentExtension, this.data.attachmentText);
        })
 
    })

    it("User is able to drag and drop a newly downloaded attachment from My Documents folder to Trash folder on Documents page", function() {
        const subject = this.data.subjectEmail;
        const filePath = this.data.filePath;
        const attachmentName = this.data.attachmentName;
        const attachmentExtension = this.data.attachmentExtension;

        cy.log(`Step 1. Login to Mail.`);
        landingPage.openAndClickMailBtn();
        loginToMailPage.logInToMail(Cypress.env(`LOGIN`), Cypress.env(`PASSWORD`));

        cy.log(`Step 2. Attach .txt file`);
        mailBoxHeader.clickDocumentsBtn();
        cy.readFile(`${filePath}\\${attachmentName}.${attachmentExtension}`).should("not.be.null");
        cy.uploadNewDocumentOnDocumentPage(`${filePath}\\${attachmentName}.${attachmentExtension}`);
        documentsPage.docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`);

        cy.log(`Step 3. Send email with attached file to yourself`);
        documentsPage.header.clickMessagesBtn();
        mailList.getItemCount().then(currentCount => {
            cy.setCurrentCount(currentCount);
          });
        toolBar.clickNewBtn();
        newEmailForm.populateToTxb(Cypress.env(`LOGIN`));
        newEmailForm.populateSubjectTxb(subject);
        newEmailForm.clickAttachmentsBtn();
        newEmailForm.getAttachmentDdn().should("be.visible");
        newEmailForm.selectFromDocumentToolFromAttachmentDdnAndWait();
        addDocumentToEmailWindow.getForm().should("be.visible");
        docList.selectItemByText(attachmentName);
        addDocumentToEmailWindow.clickOkAndWait();
        newEmailForm.getAttachmentLnkByIndex(0).should("contains.text", `${attachmentName}.${attachmentExtension}`);
        newEmailForm.sendEmailAndWait();
        
        cy.log(`Step 4. Check that email recieved`);
        cy.reloadMessagesPage(); /* Step 8 will be failed with TypeError: Cannot read properties of undefined without page reloading */
        cy.get('@currentCount').then(currentCount => {
          mailList.reloadPageTillItemCountInMailListIncrease(currentCount);
        });
        mailList.getItemTitleByIndex(0).should("have.attr", "title", `${subject}`);
        
        cy.log(`Step 5. Open recieved email`);
        mailList.selectItemByIndex(0);
        existedEmailForm.getForm().should("be.visible");
        existedEmailForm.getSubjectLbl().should("have.text", `${subject}`);

        cy.log(`Step 6. Save the attached file to documents by 'Сохранить в документах' button`);
        existedEmailForm.clickAttachmentLnkArrowLinkByIndex(0);
        existedEmailForm.getAttachmentDdn().should("be.visible");
        existedEmailForm.selectSaveInDocumentsFromAttachmentDdnAndWait();
        downloadDocumentFromEmailWindow.clickMyDocumentsBtn();
        downloadDocumentFromEmailWindow.clickOkAndWait();

        cy.log(`Step 7. Open documents area`);
        mailBoxHeader.clickDocumentsBtn();
        documentsPage.docList.getItemTitle().should("have.length", 2);
        documentsPage.docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`, { timeout: 20000 });
        documentsPage.docList.getItemTitleByIndex(1).should("have.attr", "title", `${attachmentName}_1.${attachmentExtension}`, { timeout: 20000 });

        cy.log(`Step 8. Move file from "Мои документы" folder to "Trash" folder by Drag'n'drop action`);
        cy.dragAndDrop(`${documentsPage.docList.locator} ${documentsPage.docList.itemTitle.locator} `, 1, documentsPage.documentsNavBar.trashBtn.locator);
        documentsPage.docList.getItemTitle().should("have.length", 1);
        documentsPage.docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`, { timeout: 20000 });
        documentsPage.documentsNavBar.clickTrashBtn();
        documentsPage.docList.getItemTitle().should("have.length", 1);
        documentsPage.docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}_1.${attachmentExtension}`, { timeout: 20000 });

        cy.log(`Log out`)
        documentsPage.header.clickUserBtn();
        documentsPage.userMenu.clickLogOutBtn();
        
    })
})
