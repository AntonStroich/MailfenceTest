///<reference types = 'Cypress' />
import EmailForm from "../email_forms/EmailForm";
import Label from "../../elements/Label";
import Link from "../../elements/Link";

class ExistedEmailForm extends EmailForm  {

    constructor() {
        super(`div.GCSDBRWBBTB`,`Existed email form`);
        this.subjectLbl = new Label("div.GCSDBRWBCRC span:last-of-type", "Subject");
        this.attachmentArrowLink = new Link(`b.icon-Arrow-down`, `Arrow`);
     }


    getSubjectLbl() {
        return this.subjectLbl.getElement()
    }

    getAttachmentArrowLnk() {
        return cy.get(this.attachmentArrowLink.locator);
    }

    getAttachmentLnkArrowLinkByIndex(index) {
        return this.getAttachmentArrowLnk().eq(index);
    }

    clickAttachmentLnkArrowLinkByIndex(index) {
        cy.log(`Clicking ${this.attachmentArrowLink} for the attachment #${index + 1}`);
        this.getAttachmentLnkArrowLinkByIndex(index).click({force: true});
    }

    selectSaveInDocumentsFromAttachmentDdnAndWait() {
        cy.intercept(`POST`, `/gwt`, (request) => {
            if (request.body.includes(`getDirectoriesTree`)) {
                request.alias = 'getDirectoriesTree';
            }
          });
        this.selectFromAttachmentDdnByText(`Save in Documents`);
        cy.wait(`@getDirectoriesTree`)
    }
}

export default ExistedEmailForm;