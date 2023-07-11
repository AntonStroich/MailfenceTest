import LandingPage from "../integration/PageObjects/landing/LandingPage";
import LoginToMailPage from "../integration/PageObjects/login/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/mail_box/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/mail_box/MailBoxUserMenu";
import ToolBar from "../integration/PageObjects/tool_bars/ToolBar";
import MessagesToolBar from "../integration/PageObjects/tool_bars/MessagesToolBar";
import MessagesTabToolBarWithDeleteBtn from "../integration/PageObjects/tool_bars/MessagesTabToolBarWithDeleteBtn";
import MailBoxNewEmailForm from "../integration/PageObjects/messages_page/MailBoxNewEmailForm";
import MessagesNavBar from "../integration/PageObjects/navigation_bars/MessagesNavBar";
import DocumentsNavBar from "../integration/PageObjects/navigation_bars/DocumentsNavBar";
import DocumentsToolBar  from "../integration/PageObjects/tool_bars/DocumentsToolBar";
import DocumentsTabToolBarWithDeleteBtn from "../integration/PageObjects/tool_bars/DocumentsTabToolBarWithDeleteBtn";


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

  Cypress.Commands.add("loginAndClearAll", (login, password)=> {
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const messagesNavBar = new MessagesNavBar();
    const messagesToolBar = new MessagesToolBar();
    const messagesTabToolBarWithDeleteBtn = new MessagesTabToolBarWithDeleteBtn();
    const documentsNavBar = new DocumentsNavBar();
    const documentsToolBar = new DocumentsToolBar();
    const documentsTabToolBarWithDeleteBtn = new DocumentsTabToolBarWithDeleteBtn();

    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    messagesNavBar.clickInboxBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickSentBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickDraftsBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickSpamBtn();
    messagesTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    messagesNavBar.clickTrashBtn();
    messagesTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    mailBoxHeader.clickDocumentsBtn();
    documentsNavBar.clickMyDocumentsBtn();
    documentsToolBar.deleteAllIfNotEmpty();
    documentsNavBar.clickTrashBtn();
    documentsTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })
  