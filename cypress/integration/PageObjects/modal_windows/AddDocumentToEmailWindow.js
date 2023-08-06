///<reference types = 'Cypress' />
import DocumentsWindow from "./DocumentsWindow";


class AddDocumentToEmailWindow extends DocumentsWindow {

    constructor() {
        super(`.GCSDBRWBJY.GCSDBRWBKY.GCSDBRWBOD.GCSDBRWBFMB`, `Window to attach a file from the Documents tool to an email`);
    }

    clickOkAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`addDocumentAttachment`)) {
                request.alias = 'addDocumentAttachment';
            }
          });
        this.clickOkBtn();
        cy.wait(`@addDocumentAttachment`);
    } 
    
}

export default AddDocumentToEmailWindow;