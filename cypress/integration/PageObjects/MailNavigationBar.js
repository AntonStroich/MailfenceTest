class MailNavigationBar {
    
    getMesssagesBtn() {
        return cy.get("div#nav-mail");
    }

    clickMessagesBtn() {
        this.getMesssagesBtn().click();
    }

    getUserBtn() {
        return cy.get("div[class = 'GCSDBRWBNE user GCSDBRWBGE']");
    }

    clickUserBtn() {
        this.getUserBtn().click();
    }    

}

export default MailNavigationBar;