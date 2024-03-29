///<reference types = 'Cypress' />
import BaseComponent from "../BaseComponent";
import Label from "../../elements/Label";
import MainArea from "../../page_components/MainArea";
import ToolBar from "../../page_components/ToolBar";

class List extends BaseComponent {

    constructor(locator) {
        super(locator, `List`);
        this.itemTitle = new Label(locator, `Item Title`);
        this.mainArea = new MainArea();
        this.toolBar = new ToolBar();
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
        cy.get(`${this.mainArea.locator}`).then((element)=> {
          if (element.find(`${this.locator}`).length > 0) {
            this.toolBar.selectAllAndMoveToTrash();
           }
           cy.log(`the tab is empty`);
         });  
      }

    deleteAllIfNotEmpty(){ 
        cy.get(`${this.mainArea.locator}`).then((element)=> {
          if (element.find(`${this.locator}`).length > 0) {
            this.toolBar.selectAllAndDelete();
           }
           cy.log(`the tab is empty`);
         });  
      }

    getItemCount() {
        cy.get(`${this.mainArea.locator}`, {timeout: 30000}).then((element) => {
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