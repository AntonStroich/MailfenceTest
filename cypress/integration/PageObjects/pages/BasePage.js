///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";


class BasePage extends BaseForm  {

    constructor(locator) {
        super(locator, `Base Page`);
     }

}

export default BasePage;