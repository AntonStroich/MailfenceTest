///<reference types = 'Cypress' />
import Label from "../../elements/Label";
import List from "../lists/List";

class DocList extends List {

    constructor() {
        super(`#doc_list`, `Doc list`);
        this.itemTitle = new Label(`.GCSDBRWBPJB`, `Items title from the ${this.name}`);
    }
}

export default DocList;