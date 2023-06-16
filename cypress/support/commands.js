import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import MailBoxToolBar from "../integration/PageObjects/MailBoxToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";
import MailBoxNavBar from "../integration/PageObjects/MailBoxNavBar";

Cypress.Commands.add("logInToMail", (email, password, subject)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const mailBoxToolBar = new MailBoxToolBar();
    const mailBoxNewEmailForm = new MailBoxNewEmailForm();
    const mailBoxNavBar = new MailBoxNavBar();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(email, password);
    mailBoxHeader.clickMessagesBtn();
    mailBoxToolBar.clickNewBtn();
    mailBoxNewEmailForm.populateToTxb(email);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickSendBtn();
    mailBoxNavBar.clickSentBtn();
    mailBoxToolBar.clearAll();
    mailBoxNavBar.clickTrashBtn();
    mailBoxNavBar.clickInboxBtn();
    mailBoxToolBar.refreshPage();
    mailBoxToolBar.clearAll(); // Need to delete the email which was sent in the step above
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })