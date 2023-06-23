import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import ToolBar from "../integration/PageObjects/ToolBar/ToolBar";
import InputTabToolBar from "../integration/PageObjects/ToolBar/InputTabToolBar";
import SentTabToolBar from "../integration/PageObjects/ToolBar/SentTabToolBar";
import TrashTabToolBar from "../integration/PageObjects/ToolBar/TrashTabToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";
import MessagesNavBar from "../integration/PageObjects/NavBar/MessagesNavBar";
import DocumentsNavBar from "../integration/PageObjects/NavBar/DocumentsNavBar";
import ConfirmDeletionWindow from "../integration/PageObjects/ConfirmDeletionWindow";

Cypress.Commands.add("logInToMail", (login, password, subject, filePath, attachmentName, attachmentText)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const toolBar = new ToolBar();
    const inputTabToolBar = new InputTabToolBar();
    const sentTabToolBar = new SentTabToolBar();
    const trashToolBar = new TrashTabToolBar();
    const mailBoxNewEmailForm = new MailBoxNewEmailForm();
    const messagesNavBar = new MessagesNavBar();
    const documentsNavBar = new DocumentsNavBar();
    const confirmDeletionWindow = new ConfirmDeletionWindow();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    toolBar.clickNewBtn();
    mailBoxNewEmailForm.populateToTxb(login);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickAttachmentsBtn();
    mailBoxNewEmailForm.clickSendBtn();
    messagesNavBar.clickSentBtn();
    sentTabToolBar.moveAllEmailsToTrash();
    messagesNavBar.clickInboxBtn();
    inputTabToolBar.moveAllEmailsToTrash();
    messagesNavBar.clickTrashBtn();
    trashToolBar.deleteAllEmails();
    confirmDeletionWindow.clickYesAndWait();
    cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
    mailBoxHeader.clickDocumentsBtn();
    documentsNavBar.clickMyDocumentsBtn();
    documentsNavBar.clickTrashBtn();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })

  Cypress.Commands.add("generateAttachment", (filePath, attachmentName, attachmentText) => { 
    cy.writeFile(`${filePath}\\${attachmentName}`, `${attachmentText}`);
    cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
  })