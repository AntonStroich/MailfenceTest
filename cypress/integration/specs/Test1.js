///<reference types = 'Cypress' />
import {LandingPage, LoginToMailPage, DocumentsPage, MessagesPage} from "../PageObjects/pages/index";

const landingPage = new LandingPage();
const loginToMailPage = new LoginToMailPage();
const documentsPage = new DocumentsPage();
const messagesPage = new MessagesPage();

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
        messagesPage.header.clickDocumentsBtn();
        cy.readFile(`${filePath}\\${attachmentName}.${attachmentExtension}`).should("not.be.null");
        cy.uploadNewDocumentOnDocumentPage(`${filePath}\\${attachmentName}.${attachmentExtension}`);
        documentsPage.docList.getItemTitleByIndex(0).should("have.attr", "title", `${attachmentName}.${attachmentExtension}`);

        cy.log(`Step 3. Send email with attached file to yourself`);
        documentsPage.header.clickMessagesBtn();
        messagesPage.mailList.getItemCount().then(currentCount => {
            cy.setCurrentCount(currentCount);
          });
        messagesPage.toolBar.clickNewBtn();
        messagesPage.newEmailForm.populateToTxb(Cypress.env(`LOGIN`));
        messagesPage.newEmailForm.populateSubjectTxb(subject);
        messagesPage.newEmailForm.clickAttachmentsBtn();
        messagesPage.newEmailForm.getAttachmentDdn().should("be.visible");
        messagesPage.newEmailForm.selectFromDocumentToolFromAttachmentDdnAndWait();
        messagesPage.addDocumentToEmailWindow.getForm().should("be.visible");
        messagesPage.docList.selectItemByText(attachmentName);
        messagesPage.addDocumentToEmailWindow.clickOkAndWait();
        messagesPage.newEmailForm.getAttachmentLnkByIndex(0).should("contains.text", `${attachmentName}.${attachmentExtension}`);
        messagesPage.newEmailForm.sendEmailAndWait();
        
        cy.log(`Step 4. Check that email recieved`);
        cy.reloadMessagesPage(); /* Step 8 will be failed with TypeError: Cannot read properties of undefined without page reloading */
        cy.get('@currentCount').then(currentCount => {
          messagesPage.mailList.reloadPageTillItemCountInMailListIncrease(currentCount);
        });
        messagesPage.mailList.getItemTitleByIndex(0).should("have.attr", "title", `${subject}`);
        
        cy.log(`Step 5. Open recieved email`);
        messagesPage.mailList.selectItemByIndex(0);
        messagesPage.existedEmailForm.getForm().should("be.visible");
        messagesPage.existedEmailForm.getSubjectLbl().should("have.text", `${subject}`);

        cy.log(`Step 6. Save the attached file to documents by 'Сохранить в документах' button`);
        messagesPage.existedEmailForm.clickAttachmentLnkArrowLinkByIndex(0);
        messagesPage.existedEmailForm.getAttachmentDdn().should("be.visible");
        messagesPage.existedEmailForm.selectSaveInDocumentsFromAttachmentDdnAndWait();
        messagesPage.downloadDocumentFromEmailWindow.clickMyDocumentsBtn();
        messagesPage.downloadDocumentFromEmailWindow.clickOkAndWait();

        cy.log(`Step 7. Open documents area`);
        messagesPage.header.clickDocumentsBtn();
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
