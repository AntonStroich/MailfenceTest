import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import MailBoxToolBar from "../integration/PageObjects/MailBoxToolBar";
import MailBoxNewEmailForm from "../integration/PageObjects/MailBoxNewEmailForm";

Cypress.Commands.add("logInToMail", (email, password, subject)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const mailBoxToolBar = new MailBoxToolBar();
    const mailBoxNewEmailForm = new MailBoxNewEmailForm();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(email, password);
    mailBoxHeader.clickMessagesBtn();
    mailBoxToolBar.clickOnNewBtn();
    mailBoxNewEmailForm.populateToTxb(email);
    mailBoxNewEmailForm.populateSubjectTxb(subject);
    mailBoxNewEmailForm.clickSendBtn();
    cy.wait(3000);
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })