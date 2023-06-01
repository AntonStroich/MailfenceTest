class MailUserMenuDdn {
    
    getLogOutBtn() {
        return cy.get("div#nav-mail");
    }

    clickLogOutBtn() {
        this.getLogOutBtn().click();
    } 

}

export default MailUserMenuDdn;