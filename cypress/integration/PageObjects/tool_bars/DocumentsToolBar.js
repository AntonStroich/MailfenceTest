///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import DocList from "../lists/DocList";
import MailBoxMainArea from "../mail_box/MailBoxMainArea";

class DocumentsToolBar extends ToolBar  {

    constructor(locator, ) {
        super(locator, `Tool bar of the Documents page`);
     }

    deleteAllIfNotEmpty(){ 
        const mailBoxMainArea = new MailBoxMainArea();
        const docList = new DocList();
    
        cy.get(`${mailBoxMainArea.locator}`).then((element)=> {
          if (element.find(`${docList.locator}`).length > 0) {
            this.deleteAll();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default DocumentsToolBar;