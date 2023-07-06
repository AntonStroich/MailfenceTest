///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";

class DocList extends BaseForm {

    constructor() {
        super(`Doc list`);
        this.locator = "#doc_list";
    }
 
}

export default DocList;