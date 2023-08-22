///<reference types = 'Cypress' />
import BasePage from "./BasePage";


class DocumentsPage extends BasePage {

    constructor(locator) {
        super(locator, `Documents Page`);
    }
    
}

export default DocumentsPage;