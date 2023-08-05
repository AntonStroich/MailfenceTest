///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";
import Button from "../elements/Button";

class MailBoxHeader extends BaseForm  {

    constructor(locator) {
        super(`div#toolSelector`, `Mail Box header`);
        this.messagesBtn = new Button("div#nav-mail", "Messages");
        this.userBtn = new Button("div[class = 'GCSDBRWBNE user GCSDBRWBGE']", "User");
        this.documentsBtn = new Button("#nav-docs", "Documents");
     }

    clickMessagesBtn() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getRequestorAccount`)) {
                request.alias = 'messagesLoading'
            }
          })
        cy.log(`Clicking on ${this.messagesBtn.name} from ${this.name}`);
        this.messagesBtn.clickElement();
        cy.wait('@messagesLoading');
     }

    clickDocumentsBtn() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getDocuments`)) {
                request.alias = 'documentsLoading'
            }
          })
        cy.log(`Clicking on ${this.documentsBtn.name} from ${this.name}`);
        this.documentsBtn.clickElement();
        cy.wait('@documentsLoading');
    }

    clickUserBtn() {
        cy.log(`Clicking on ${this.userBtn.name} from ${this.name}`);
        this.userBtn.clickElement();
    }
}

export default MailBoxHeader;