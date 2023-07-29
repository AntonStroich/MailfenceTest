///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";

class LoginToMailPage extends BaseForm {

    constructor(locator,) {
       super(locator, `Login to Mail page`);
       this.EmailAddressTxb = new TextBox("input#UserID", "Email Addres");
       this.PasswordTxb = new TextBox("input#Password", "Password");
       this.EnterBtn = new Button("input[value='Enter']", "Mail");
    }

    populateEmailAddressTxb(login) {
        cy.log(`Filling ${this.EmailAddressTxb.name} from ${this.name}`);
        this.EmailAddressTxb.clearAndType(login);
    }

    populatePasswordTxb(password) {
        cy.log(`Filling ${this.PasswordTxb.name} from ${this.name}`);
        this.PasswordTxb.clearAndType(password);     
    }

    clickEnterBtn() {
        cy.log(`Clicking ${this.EnterBtn.name} from ${this.name}`);
        this.EnterBtn.clickElement();
    }

    logInToMail(login, password, timeout=4000) {
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
        this.populateEmailAddressTxb(login);
        this.populatePasswordTxb(password);
        this.clickEnterBtn();
        cy.wait(timeout); // fails without cy.wait(); the current solution needs to be replaced
    }

}

export default LoginToMailPage;