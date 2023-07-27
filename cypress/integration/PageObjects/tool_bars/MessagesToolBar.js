///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import MailList from "../lists/MailList";
import MailBoxMainArea from "../mail_box/MailBoxMainArea";

class MessagesToolBar extends ToolBar  {

    constructor(locator) {
        super(locator, `Tool bar of the Messages page`);
     }

    deleteAllIfNotEmpty(){ 
       const mailBoxMainArea = new MailBoxMainArea();
       const mailList = new MailList();
    
        cy.get(`${mailBoxMainArea.locator}`).then((element)=> {
          if (element.find(`${mailList.locator}`).length > 0) {
            this.deleteAll();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default MessagesToolBar;