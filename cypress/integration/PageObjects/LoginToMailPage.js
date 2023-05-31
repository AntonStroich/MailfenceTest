class LoginToMailPage {

    getEmailAddressField() {
        return cy.get("input#UserID");
    }

    getPasswordField() {
        return cy.get("input#Password");
    }

    getEnterBtn() {
        return cy.get("input[value='Enter']");
    }

}

export default LoginToMailPage;