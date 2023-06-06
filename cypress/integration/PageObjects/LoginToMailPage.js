///<reference types = 'Cypress' />
import BaseForm from "./BaseForm";
import Button from "./elements/Button";
import TextField from "./elements/TextField";

class LoginToMailPage extends BaseForm {

    constructor() {
       super();
       this.EmailAddressField = new TextField("input#UserID", "Email Address Field");
       this.PasswordField = new TextField("input#Password", "Password Field");
       this.EnterBtn = new Button("input[value='Enter']", "Mail");
    }

    populateEmailAddressField(text) {
        this.EmailAddressField.clearAndTypeField(text);
    }

    populatePasswordField(text) {
        this.PasswordField.clearAndTypeField(text);     
    }

    clickEnterBtn() {
        this.EnterBtn.clickElement();
    }

    logInToMail(email, password) {
        this.populateEmailAddressField(email);
        this.populatePasswordField(password);
        this.clickEnterBtn()
    }

}

export default LoginToMailPage;