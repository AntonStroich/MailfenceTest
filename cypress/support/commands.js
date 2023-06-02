import LandingPage from "..//integration/PageObjects/LandingPage";
import LoginToMailPage from "..//integration/PageObjects/LoginToMailPage";

Cypress.Commands.add("logInToMail", (email, password) => { 
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    landingPage.open();
    landingPage.isMailBtnVisible();
    landingPage.clickMailBtn();
    loginToMailPage.populateEmailAddressField(email);
    loginToMailPage.populatePasswordField(password);
    loginToMailPage.clickEnterBtn();
  })