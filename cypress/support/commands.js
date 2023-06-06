import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";
import MailNavigationBar from "../integration/PageObjects/MailNavigationBar";
import MailUserMenu from "../integration/PageObjects/MailUserMenu";

Cypress.Commands.add("logInToMail", (email, password)=> { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailNavigationBar = new MailNavigationBar();
    const mailUserMenu = new MailUserMenu();
    
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(email, password);
    mailNavigationBar.clickMessagesBtn();
    mailNavigationBar.clickUserBtn();
    mailUserMenu.clickLogOutBtn();
  })