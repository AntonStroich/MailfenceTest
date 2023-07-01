///<reference types = 'Cypress' />
import ToolBar from "./ToolBar";
import Button from "../elements/Button";
import ConfirmDeletionWindow from "../ConfirmDeletionWindow";
import MessagesNavBar from "../NavBar/MessagesNavBar";
import MailList from "../MailList";

class TrashTabToolBar extends ToolBar  {

    constructor() {
        super(`Trash tab of the Tool bar`);
        this.deleteBtn = new Button("div div[title='Delete']" , "Delete");
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
     }

    clickDeleteBtn() {
        cy.log(`Clicking on ${this.deleteBtn.name} from ${this.name}`);
        this.deleteBtn.clickElement();
    }

    deleteAllEmails(timeout=1000) {
        this.clickRefreshBtn();
        cy.wait(timeout);
        this.clickSelectAllChb();
        this.clickDeleteBtn();
        this.confirmDeletionWindow.clickYesAndWait();
    }

    clearTrashTabIfNotEmpty(){ 
        const messagesNavBar = new MessagesNavBar();
        const mailList = new MailList();
    
        cy.get(`${messagesNavBar.locator}`).then((element)=> {
          if (element.find(`${mailList.locator}`).length > 0) {
            this.deleteAllEmails();
           }
           cy.log(`the tab is empty`);
         });  
      }
}

export default TrashTabToolBar;