import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import ToolBar from "../integration/PageObjects/ToolBar/ToolBar";
import InputTabToolBar from "../integration/PageObjects/ToolBar/InputTabToolBar";
import SentTabToolBar from "../integration/PageObjects/ToolBar/SentTabToolBar";
import TrashTabToolBar from "../integration/PageObjects/ToolBar/TrashTabToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";
import MailBoxNavBar from "../integration/PageObjects/MailBoxNavBar";
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
    const mailBoxNavBar = new MailBoxNavBar();
    const confirmDeletionWindow = new ConfirmDeletionWindow();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    toolBar.clickNewBtn();
    mailBoxNewEmailForm.populateToTxb(login);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickAttachmentsBtn();
    mailBoxNewEmailForm.clickSendBtn();
    mailBoxNavBar.clickSentBtn();
    sentTabToolBar.moveAllEmailsToTrash(1000);
    mailBoxNavBar.clickInboxBtn();
    inputTabToolBar.moveAllEmailsToTrash(1000);
    mailBoxNavBar.clickTrashBtn();
    trashToolBar.deleteAllEmails(1000);
    confirmDeletionWindow.clickYesAndWait(1000);
    cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
    mailBoxHeader.clickDocumentsBtn();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })

  Cypress.Commands.add("generateAttachment", (filePath, attachmentName, attachmentText) => { 
    cy.writeFile(`${filePath}\\${attachmentName}`, `${attachmentText}`);
    cy.readFile(`${filePath}\\${attachmentName}`).should("not.be.null");
  })