import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import MailBoxToolBar from "../integration/PageObjects/MailBoxToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";
import MailBoxNavBar from "../integration/PageObjects/MailBoxNavBar";
import ConfirmDeletionWindow from "../integration/PageObjects/ConfirmDeletionWindow";

Cypress.Commands.add("logInToMail", (login, password, subject)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const mailBoxToolBar = new MailBoxToolBar();
    const mailBoxNewEmailForm = new MailBoxNewEmailForm();
    const mailBoxNavBar = new MailBoxNavBar();
    const confirmDeletionWindow = new ConfirmDeletionWindow();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    mailBoxToolBar.clickNewBtn();
    mailBoxNewEmailForm.populateToTxb(login);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickAttachmentsBtn();
    mailBoxNewEmailForm.clickSendBtn();
    mailBoxNavBar.clickSentBtn();
    mailBoxToolBar.moveAllEmailsToTrash(1000);
    mailBoxNavBar.clickInboxBtn();
    mailBoxToolBar.moveAllEmailsToTrash(1000);
    mailBoxNavBar.clickTrashBtn();
    mailBoxToolBar.deleteAllEmails(1000);
    confirmDeletionWindow.clickYesAndWait(1000);
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })