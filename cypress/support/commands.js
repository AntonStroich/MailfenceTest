import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/MailBoxUserMenu";
import MailBoxToolBar from "../integration/PageObjects/MailBoxToolBar";

Cypress.Commands.add("logInToMail", (email, password)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const mailBoxToolBar = new MailBoxToolBar();

    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(email, password);
    mailBoxHeader.clickMessagesBtn();
    mailBoxToolBar.clickInSelectAllChb();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })