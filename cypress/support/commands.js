import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";

Cypress.Commands.add("logInToMail", (email, password) => { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    landingPage.open();
    landingPage.getMailBtn().click();
    loginToMailPage.getEmailAddressField().type(email);
    loginToMailPage.getPasswordField().type(password);
    loginToMailPage.getEnterBtn().click();
  })