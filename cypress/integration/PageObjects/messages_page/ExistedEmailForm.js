///<reference types = 'Cypress' />
import EmailForm from "../messages_page/EmailForm";
import Label from "../elements/Label";

class ExistedEmailForm extends EmailForm  {

    constructor() {
        super(`div.GCSDBRWBBTB`,`Mail Box New email form`);
        this.subjectLbl = new Label("div.GCSDBRWBCRC span:last-of-type", "Subject");
     }


    getSubjectLbl() {
        return this.subjectLbl.getElement()
    }
}

export default ExistedEmailForm;