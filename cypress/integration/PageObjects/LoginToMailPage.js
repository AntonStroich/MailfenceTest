///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import TextBox from "./elements/TextBox";

class LoginToMailPage extends BaseForm {

    constructor() {
       super();
       this.EmailAddressTxb = new TextBox("input#UserID", "Email Address Field");
       this.PasswordTxb = new TextBox("input#Password", "Password Field");
       this.EnterBtn = new Button("input[value='Enter']", "Mail");
    }

    populateEmailAddressTxb(text) {
        this.EmailAddressTxb.clearAndType(text);
    }

    populatePasswordTxb(text) {
        this.PasswordTxb.clearAndType(text);     
    }

    clickEnterBtn() {
        this.EnterBtn.clickElement();
    }

    logInToMail(email, password) {
        this.populateEmailAddressTxb(email);
        this.populatePasswordTxb(password);
        this.clickEnterBtn();
    }

}

export default LoginToMailPage;