///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Label from "../elements/Label";

class DocList extends BaseForm {

    constructor() {
        super(`Doc list`);
        this.locator = "#doc_list";
        this.docTitle = new Label(`${this.locator} .GCSDBRWBPJB`, `Items title from the ${this.name}`);
    }

    getDocTitle() {
        return this.docTitle.getElement();
    }

    getDocTitleByIndex(index) {
        return this.getDocTitle().eq(index);
    }
 
}

export default DocList;