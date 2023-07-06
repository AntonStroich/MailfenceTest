///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import MessagesNavBar from "../navigation_bars/MessagesNavBar";
import MailList from "../lists/MailList";

class MessagesToolBar extends ToolBar  {

    constructor() {
        super(`Tool bar of the Messages page`);
     }

    deleteAllIfNotEmpty(){ 
        const messagesNavBar = new MessagesNavBar();
        const mailList = new MailList();
    
        cy.get(`${messagesNavBar.locator}`).then((element)=> {
          if (element.find(`${mailList.locator}`).length > 0) {
            this.deleteAll();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default MessagesToolBar;