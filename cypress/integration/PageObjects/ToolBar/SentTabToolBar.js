///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import Button from "../elements/Button";
import MessagesNavBar from "../NavBar/MessagesNavBar";
import MailList from "../MailList";

class SentTabToolBar extends ToolBar  {

    constructor() {
        super(`Sent tab of the Tool bar`);
        this.toTrashBtn = new Button("div div[title='To Trash']" , "To Trash");
     }

     clickToTrashBtn() {
        cy.log(`Clicking on ${this.toTrashBtn.name} from ${this.name}`);
        this.toTrashBtn.clickElement();
    }

    moveAllEmailsToTrash(timeout=1000) {
        this.clickRefreshBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickToTrashBtn();
    }

    clearSentTabIfNotEmpty(){ 
        const messagesNavBar = new MessagesNavBar();
        const mailList = new MailList();
    
        cy.get(`${messagesNavBar.locator}`).then((element)=> {
          if (element.find(`${mailList.locator}`).length > 0) {
            this.moveAllEmailsToTrash();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default SentTabToolBar;