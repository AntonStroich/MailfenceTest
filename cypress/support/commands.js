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
import MailList from "../integration/PageObjects/MailList";


  Cypress.Commands.add("generateAttachment", (filePath, attachmentName, attachmentText)=> { 
    cy.writeFile(`${filePath}\\${attachmentName}`, `${attachmentText}`);
    cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
  })

  Cypress.Commands.add("logInToMailAndSendEmail", (login, password, subject, filePath, attachmentName, attachmentText)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const documentsNavBar = new DocumentsNavBar();
    const toolBar = new ToolBar();
    const mailBoxNewEmailForm = new MailBoxNewEmailForm();
    
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    toolBar.clickNewBtn();
    mailBoxNewEmailForm.populateToTxb(login);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickSendBtn();
    mailBoxHeader.clickDocumentsBtn();
    documentsNavBar.clickMyDocumentsBtn();
    documentsNavBar.clickTrashBtn();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })

  Cypress.Commands.add("loginAndClearAllMessagesTabs", (login, password)=> {
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const inputTabToolBar = new InputTabToolBar();
    const sentTabToolBar = new SentTabToolBar();
    const trashToolBar = new TrashTabToolBar();
    const messagesNavBar = new MessagesNavBar();

    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    messagesNavBar.clickInboxBtn();
    inputTabToolBar.clearInputTabIfNotEmpty();
    messagesNavBar.clickSentBtn();
    sentTabToolBar.clearSentTabIfNotEmpty();
    messagesNavBar.clickTrashBtn();
    trashToolBar.clearTrashTabIfNotEmpty();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })