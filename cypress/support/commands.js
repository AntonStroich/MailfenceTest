import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";

Cypress.Commands.add("logInToMail", (email, password) => { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(email, password);
  })