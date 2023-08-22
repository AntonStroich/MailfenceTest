///<reference types = 'Cypress' />
import BasePage from "./BasePage";


class MessagesPage extends BasePage {

    constructor(locator) {
        super(locator, `Messages Page`);
    }
    
}

export default MessagesPage;