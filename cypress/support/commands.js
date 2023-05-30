import LandingPage from "..//integration/PageObjects/LandingPage";

Cypress.Commands.add("logInToMail", (username, password) => { 
    const landingPage = new LandingPage();
    landingPage.open();
    landingPage.getMailBtn().click();
  })