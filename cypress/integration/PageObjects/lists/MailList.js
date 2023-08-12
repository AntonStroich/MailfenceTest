///<reference types = 'Cypress' />
import Label from "../elements/Label";
import List from "../lists/List";
import ToolBar from "../tool_bars/ToolBar";

class MailList extends List {

    constructor() {
        super(`#mailList`, `Mail list`, );
        this.itemTitle = new Label(`.listSubject`, `Items title from the ${this.name}`);
    }

    reloadPageTillItemCountInMailListIncrease(oldValue){
        const toolBar = new ToolBar();
        let i = 0;
        do {            
            this.getItemCount().then(newValue => {
                const newCount = newValue;
                const oldCount = oldValue;
    
                if (newCount > oldCount) {
                    i = 10; 
                    return;
                }
                toolBar.clickRefreshBtn();
            });
            i++;
        } while (i < 10);
    }

}

export default MailList;