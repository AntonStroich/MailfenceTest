///<reference types = 'Cypress' />
import BaseForm from "../BaseForm";


class BaseComponent extends BaseForm  {

    constructor(locator) {
        super(locator, `Base Page Component`);
     }

}

export default BaseComponent;