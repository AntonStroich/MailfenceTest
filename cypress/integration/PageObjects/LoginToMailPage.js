class LoginToMailPage {

    getEmailAddressField() {
        return cy.get("input#UserID");
    }

    populateEmailAddressField(text) {
        this.getEmailAddressField().type(text);
    }


    getPasswordField() {
        return cy.get("input#Password");
    }

    populatePasswordField(text) {
        this.getPasswordField().type(text);
    }

    getEnterBtn() {
        return cy.get("input[value='Enter']");
    }

    clickEnterBtn() {
        this.getEnterBtn().click();
    }

}

export default LoginToMailPage;