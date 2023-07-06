///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import DocumentsNavBar from "../navigation_bars/DocumentsNavBar";
import DocList from "../lists/DocList";

class DocumentsToolBar extends ToolBar  {

    constructor() {
        super(`Tool bar of the Documents page`);
     }

    deleteAllIfNotEmpty(){ 
        const documentsNavBar = new DocumentsNavBar();
        const docList = new DocList();
    
        cy.get(`${documentsNavBar.locator}`).then((element)=> {
          if (element.find(`${docList.locator}`).length > 0) {
            this.deleteAll();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default DocumentsToolBar;