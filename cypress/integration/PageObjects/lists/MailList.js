///<reference types = 'Cypress' />
import Label from "../elements/Label";
import List from "../lists/List";

class MailList extends List {

    constructor() {
        super(`#mailList`, `Mail list`, );
        this.itemTitle = new Label(`.listSubject`, `Items title from the ${this.name}`);
    }
 
}

export default MailList;