///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";
import TextBox from "../elements/TextBox";
import MailBoxHeader from "../mail_box/MailBoxHeader";

class LoginToMailPage extends BaseForm {

    constructor() {
       super(`.auth-panel`, `Login to Mail page`);
       this.EmailAddressTxb = new TextBox("input#UserID", "Email Addres");
       this.PasswordTxb = new TextBox("input#Password", "Password");
       this.EnterBtn = new Button(`input[type="submit"]`, "Enter");
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

    logInToMail(login, password) {
        const mailBoxHeader = new MailBoxHeader();
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getMeetingsRequestsToAnswer`)) {
                request.alias = 'login';
            }
          });
        this.populateEmailAddressTxb(login);
        this.populatePasswordTxb(password);
        this.clickEnterBtn();
        cy.wait(`@login`, {timeout: 30000});
        mailBoxHeader.getForm().should(`be.visible`, {timeout: 30000});
    }

}

export default LoginToMailPage;