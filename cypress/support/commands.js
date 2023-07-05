import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import ToolBar from "../integration/PageObjects/ToolBar/ToolBar";
import MessagesToolBar from "../integration/PageObjects/ToolBar/MessagesToolBar";
import MessagesTrashTabToolBar from "../integration/PageObjects/ToolBar/MessagesTrashTabToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";
import MessagesNavBar from "../integration/PageObjects/NavBar/MessagesNavBar";
import DocumentsNavBar from "../integration/PageObjects/NavBar/DocumentsNavBar";


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
    const messagesToolBar = new MessagesToolBar();
    const messagesTrashToolBar = new MessagesTrashTabToolBar();
    const messagesNavBar = new MessagesNavBar();

    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    messagesNavBar.clickInboxBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickSentBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickTrashBtn();
    messagesTrashToolBar.deleteAllIfNotEmpty();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })