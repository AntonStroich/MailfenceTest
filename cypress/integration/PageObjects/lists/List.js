///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Label from "../elements/Label";
import MailBoxMainArea from "../mail_box/MailBoxMainArea";
import ToolBar from "../tool_bars/ToolBar";

class List extends BaseForm {

    constructor(locator) {
        super(locator, `List`);
        this.itemTitle = new Label(locator, `Item Title`);
    }

    getList() {
        cy.log(this.locator);
        return cy.get(this.locator);
    }

    findItemByText(text) {
       return this.getList().contains(text);
    }

    selectItemByText(text) {
        cy.log(`Selecting an item by ${text}`);
        this.findItemByText(text).click();
    }

    getItemTitle() {
        cy.log(this.itemTitle.locator);
        return this.getList().find(this.itemTitle.locator);
    }

    getItemTitleByIndex(index) {
        return this.getItemTitle().eq(index);
    }

    selectItemByIndex(index) {
        cy.log(`Selecting an item by ${index}`);
        this.getItemTitleByIndex(index).click();
    }

    moveToTrashAllIfNotEmpty(){ 
        const mailBoxMainArea = new MailBoxMainArea();
        const tooBar = new ToolBar();

        cy.get(`${mailBoxMainArea.locator}`).then((element)=> {
          if (element.find(`${this.locator}`).length > 0) {
            tooBar.selectAllAndMoveToTrash();
           }
           cy.log(`the tab is empty`);
         });  
      }

    deleteAllIfNotEmpty(){ 
        const mailBoxMainArea = new MailBoxMainArea();
        const tooBar = new ToolBar();

        cy.get(`${mailBoxMainArea.locator}`).then((element)=> {
          if (element.find(`${this.locator}`).length > 0) {
            tooBar.selectAllAndDelete();
           }
           cy.log(`the tab is empty`);
         });  
      }

    getItemCount() {
        const mailBoxMainArea = new MailBoxMainArea();
      
        cy.get(`${mailBoxMainArea.locator}`, {timeout: 30000}).then((element) => {
          const count = element.find(`${this.locator} ${this.itemTitle.getLocator()}`).length;
          cy.log(`${count}`);
          if (count > 0) {
            cy.log(`itemCount is ${count}`);
            cy.wrap(count).as('count');
          } else {
            cy.log(`List item is empty.`);
            cy.wrap(0).as('count');
          }
        })
        return cy.get('@count');
      }

}
    
export default List;